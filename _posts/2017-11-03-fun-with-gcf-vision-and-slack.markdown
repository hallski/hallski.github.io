---
layout: post
title: Fun with Google Functions and Vision APIs
section: blog
comments: true
tags:
- javascript
- machine-learning
- google-cloud
- FaaS
excerpt:
---

## Google Cloud Functions (FaaS)
Google Cloud Functions is Googles version of AWS Lambda which provides a _"server less"_ (in the sense that as a developer you don't need to care about anything other than your code) service to run code in the cloud. This type of service is often called Function as a Service, or FaaS for short.

It's a perfect solution for event triggered small integrations or transformations. Such as a webhook for callbacks from various services. As a developer you only have to implement the event handler and can ignore any OS or HTTP Server setup or administration. The cloud provider takes care of all of that as well as scaling if load increases.

This of course comes with some constraints and in the case of Google Cloud Functions it means a function can be triggered by _HTTPS requests_, _Cloud Storage Events_ or _Pub/Sub_ and is (currently) limited
to Node.js v6.11.1.

## The Catfinder function
The function described in this post is a small integration between Google Cloud Storage, Google Vision and Slack. It works by getting a change event from a Cloud Storage bucket. The function will use the Vision API to decide whether it's an image of a cat. If it is, it will send a message to Slack notifying that a new cat picture was uploaded.

All the code for the project can be found at [Github](https://github.com/mhallendal/cat-finder).

### Deploying the function
Before looking at the implementation, let's have a quick look at how the function will be deployed.

```
$ gcloud beta functions deploy --memory 128 catFinder --stage-bucket function-deploy-stage --trigger-bucket=catfinder-image-bucket
```

The trigger type is specified to be a bucket (meaning in storage event) and the bucket ID is `image-bucket-1`. When deploying a function this way the current directory is zipped up and pushed to the `stage-bucket` which is then used to deploy the function in the cloud.

In the source root directory there is a small script called `deploy.sh` that creates a DEPLOY directory and copies the correct files to it and runs the above command.

### Implementation
A cloud function is a normal NPM module where the script pointed to by `main` in `package.json` needs to export a function with the same name as the function (by default, this can be overridden with the `--entry-point` flag when deploying).

In our `package.json` the main module is defined to be `src/index.js` and the exported function is called `catFinder`. The function has different signatures depending on the trigger mechanism. In the case of a bucket event it will have the signature:

```javascript
exports.catFinder = function(event, callback) {}
```

The `event` contains information about the event, such as file name, bucket name, event type etc. The `callback` is used to notify that the function has finished.

The first thing we need to do is check that we care about the event, for this project only newly created files are interesting. In order to keep this logic out of the actual function implementation I've written a small helper that wraps the function and returns if the event doesn't match the criteria.

```javascript
// From src/google-cloud.js
function filteredEventHandler(predicate, handler) {
  return function(event, callback) {
    if (predicate(event)) {
      handler(event, callback)
    } else {
      callback()
    }
  }
}

// In index.js
exports.catFinder = filteredEventHandler(storageNewFileEventFilter, function(event, callback) {
  // ...
}
```

The `storageNewFileEventFilter` function takes in the event and checks whether it's referring to a new file event. It checks that the resource still exists (otherwise it's a delete event) and that the `metageneration` is `1`, otherwise it's an update event.

```javascript
function storageNewFileEventFilter(event) {
  const file = event.data
  return file.resourceState === 'exists' && file.metageneration === '1'
}
```

With the help of _Promises_ the rest of the event handler function is very straight forward.

```javascript
  const file = event.data
  const storageUri = `gs://${file.bucket}/${file.name}`

  return visionFetchLabels(storageUri)
    .then(any(isCat))
    .then(notifySlack(secrets.slackWebhook, `A cat was posted: ${storageUri}`))
    .then(logSuccess, logError)
    .then(callback)
```

1. Fetch the labels through Vision API
2. If any of the labels match a cat
3. Send a notification to the Slack through an incoming webhook
4. If all succeeded, log that. Otherwise log if there was an error.
5. Finally, call the provided callback.

We'll focus on the `visionFetchLabels`, `isCat` and `notifySlack` functions in this post and talk more about using promises like this in a separate post.

Using the _Vision_ API to fetch labels from an image in Cloud Storage is as easy as:

```javascript
function visionFetchLabels(uri) {
  const visionRequest = { source: { imageUri: uri }}

  return vision.labelDetection(visionRequest)
    .then(function(results) { return results[0].labelAnnotations })
}
```

The function returns a promise that fulfills to an array of label objects. The label objects contains a description and a score of how likely it is that the description matches the image. This information is used in `isCat` to determine if the image actually portraits a cat.

```javascript
function isCat(label) {
  return label.description.indexOf('cat') !== -1 && label.score > 0.8
}
```

This is a pretty naive implementation which simply checks if any of the label descriptions contain the word cat and whether the score is above `0.8` (from 0-1.0).

Finally, if the image is determined to match a cat, it's posted to Slack through a webhook, which is also very straight forward:

```javascript
function notifySlack(webhook, message) {
  return function() {
    return request
      .post(webhook)
      .send({ text: message })
  }
}
```

Hopefully this post showed some of the power of using FaaS solutions to react to events and create an integration between different services.
