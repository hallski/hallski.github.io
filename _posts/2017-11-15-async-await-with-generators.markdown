---
layout: post
title: Async/Await with Generators and Promises
section: blog
comments: true
tags:
- javascript
- generators
- es6
- promises
excerpt: In this third post about generators we'll be implementing async/await for ES6 with the help of generators and Promises.
---
## Javascript Generator Series
This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful.

1. [Introduction to ES6 Iterators and Generators](/blog/intro-to-es6-iter-and-generators)
2. [Working with Generators](/blog/working-with-generators)
3. Async/Await with Generators

## Introduction
Generators are not only useful for generating a stream of values but can also be a powerful control structure when paired with an external runner. In this article we will take a stab at implementing `async`/`await` using only ES6 tools (they have later been added and are part of ES7).

For anyone unfamiliar with `async`/`await`, this is how it looks in practice.

```javascript
async function myAsync(input) {
  try {
    const res1 = await anAsynchronousOperation(input)
    const res2 = await anotherAsync(res1)
    return res2
  }
  catch (error) {
    // handle the error
  }
}

myAsync(123).then(result => //...)
```
The benefit is that your programming style is very sequencial even though the code is not blocking the event loop.

Since we can't use the special syntax that `async`/`await` introduces our code will looks slightly different but with the same semantics.

```javascript
const myAsync = makeAsync(function* (input) {
  try {
    const res1 = yield anAsynchronousOperation(input)
    const res2 = yield anotherAsync(res1)
    return res2
  } catch (error) {
    // handle the error
  }
})

myAsync(123).then(result => //...)
```

The difference is that `makeAsync` is now a function instead of a keyword and that `await` has been replaced with `yield`.

## Passing values into the generator
As can be seen in the example above, the generator code gets a value back from calling `yield`. In the previous articles `yield` was used to pass values out of the generator. In order to send values into the generator (as return values from `yield`) we pass a value with the `next()` method.

We can use this to pass the values of a promise resolution back into the generator once the promise is resolved. In the same way we can use `throw()` on the iterator to throw an exception in the context of the generator.

```javascript
// return a value from yield
iter.next('a value')

// throw an exception in the context of the yield call
iter.throw(new Error('Exception'))
```

With this knowledge we can set out to implement our `makeAsync` function!

## Implementing makeAsync
The `makeAsync` function itself is fairly simple. It wraps the passed generator in a function that takes the arguments (`input` in our example above) and pass them into the generator when called.

```javascript
function makeAsync(generator) {
  return function(...args) {
    const gen = generator(...args)
    return iterateAsync(gen, gen.next())
  }
}
```

The interesting work will be done in the `iterateAsync` function that will be called recursively to step through the generator until the generator is done. `iterateAsync` returns a promise that will be resolved once the generator is done.

Here is the resulting code:
```javascript
function iterateAsync(gen, { value, done }) {
  if (done) {
    return Promise.resolve(value)
  }

  return new Promise((resolve, reject) => {
    // If the value is not a promise (for example 'yield 123'), wrap it in one.
    const promise = value instanceof Promise ? value : Promise.resolve(value)
    return promise
      .then(result => resolve(iterateAsync(gen, gen.next(result))))
      .catch(error => {
        try {
          // This allows the generators catch-block to handle the problem and continue the execution
          resolve(iterateAsync(gen, gen.throw(error)))
        } catch (newError) {
          // If the generator threw a new error from the catch block, simply reject the promise
          // and return
          reject(newError)
        }
      })
  })
}
```

### Caveat
As far as my testing went, this behaves exactly as async/await with one little caveat.

```javascript
const resultGen = yield Promise.resolve(100) + 100
const resultAsync = await Promise.resolve(100) + 100
// resultGen = "[object Promise]100"
// resultAsync = 200
```

In the case of `yield`, Javascript first evaluates `Promise.resolve(100) + 100` which it does by converting both to strings and then sends that to `yield`. The solution to this is to wrap it in parenthesis.

```javascript
const resultGen = (yield Promise.resolve(100)) + 100
// resultGen = 200
```

## Summary
This article covered using generators and promises to implement async/await which is available in ES7. The main reason for doing this was to learn more about how to work with generators.

The code can be found at: [https://github.com/mhallendal/es6-async](https://github.com/mhallendal/es6-async)

While finishing up this article I was looking around for a proper implementation of this as it can be quite useful with Node 6.11 (which is still the version used by Google Cloud Functions) I stumbled over an article series by Kyle Simpson.

His excellent talk [Coordinated Concurrency: Reactive (Observables) vs. CSP](https://www.youtube.com/watch?v=NNcT9ZehM6g) at JS.LA in 2015 was the reason I started learning more about generators in the first place. And since the fourth article in his series [ES6 Generators: Complete Series](https://davidwalsh.name/es6-generators) is about CSP with generators, which is what I had planned on writing about next, I suggest reading that instead.
