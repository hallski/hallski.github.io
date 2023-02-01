---
comments: true
date: '2017-11-06T00:00:00Z'
excerpt: null
section: blog
tags:
  - javascript
  - promises
  - rop
title: Railway oriented programming with Promises
---

In the last post [Building Interactions with GCF](/blog/building-interactions-with-gcf), I focused on the implementation of the various interactions. This post will focus on the control flow and the use of Javascript _promises_ to chain the operations together in a readable way.

To repeat, this is the resulting GCF event handler:

```javascript
exports.catFinder = filteredEventHandler(eventFilter, function (event, callback) {
	const file = event.data
	const storageUri = `gs://${file.bucket}/${file.name}`

	return visionFetchLabels(storageUri)
		.then(any(isCat))
		.then(notifySlack(secrets.slackWebhook, `A cat was posted: ${storageUri}`))
		.then(logSuccess, logError)
		.then(callback)
})
```

1. Fetch the labels through Vision API
2. If any of the labels match a cat
3. Send a notification to the Slack through an incoming webhook
4. If all succeeded, log that. Otherwise log if there was an error.
5. Finally, call the provided callback.

The code can be found on [Github](https://github.com/hallski/cat-finder)

## Railway Oriented Programming (ROP)

The inspiration for this implementation was taken from an excellent talk by Scott Wlaschin about [Railway Oriented Programming](http://fsharpforfunandprofit.com/rop/). For a more in-depth description of ROP, I can highly recommend watching the talk and slides. The examples are in F# but shouldn't be a problem to follow even if you are new to the language.

In short, the idea is to describe the happy path through a process as the main _track_ and if an error occurs, the flow is shifted over to a secondary _error track_. Once on the error track, the flow will stay there until delt with. This could either be by logging an error or by handling the error and shifting the flow back onto the main track.

To better illustrate what this means for the code above, here it is described as the two tracks.

![Resulting App](/images/posts/rop-catfinder.png)
_(Graphics comes from Scotts presentation)._

The flow starts on the green (above) track and any of `visionFetchLabels`, `any(isCat)` and `notifySlack` can shift the flow over to the red (below) track. At the end, the `logSuccess` function is called in the green track and `logError` is called on the red track. After that, the tracks are again merged and `callback` is called.

## ROP with Javascript promises

Javascript promises lends themselves very well to this style of programming where a `resolve` keeps the flow on the happy track and a `reject` shifts flow to the error track.

This can best be seen in the implementation of `any`. It's a function that takes a `predicate` and returns a new function expecting an array of items. If the predicate is true for any of the items, a _resolved_ promise is returned (stay on the happy track), otherwise a _rejected_ promise is returned (move to error track).

```javascript
function any(predicate) {
	return function (items) {
		return items.find(predicate) ? Promise.resolve(items) : Promise.reject()
	}
}
```

The image not containing a cat isn't really an error, which is why no error is passed in the rejection. The `logError` function checks if it gets an error and logs it if it does, otherwise does nothing.

```javascript
function logSuccess() {
	console.log(`Successfully sent a cat to slack`)
}

function logError(error) {
	if (error) {
		console.error(`Function failed with: ${error.message}`)
	}
}
```

Finally, as neither `logSuccess` or `logError` returns a rejection, they will both be wrapped in a `resolve` and are both on the happy track again for finally calling `callback`.

## Higher order functions and ROP

Both `any` and `notifySlack` are higher order functions (returns new functions). The reason for this is that the flow through the happy track only allows for passing one value on to the next function.

This is a very common scenario but might take some getting used to if you are comming from an OOP background, I know it did for me at least.

## Extra nice in Javascript

This style of programming would work in any language with support for an [Either type](https://www.schoolofhaskell.com/school/starting-with-haskell/basics-of-haskell/10_Error_Handling#the-either-monad) and higher order functions.

However, with promises you get an extra level of power since asynchronous operations can be modelled as well. With Javascript including promises out of the box, Node.js and third party frameworks all have great support for them and this style of programming can be a great option for a wide array of applications.
