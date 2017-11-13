---
layout: post
title: Introduction to ES6 Iterators and Generators
section: blog
comments: true
tags:
- javascript
- generators
- es6
excerpt: In this first article about generators we'll have a quick look at the basics of Iterator, Iterable and Generators.
---

## Javascript Generator Series
This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful.

1. Introduction to ES6 Iterators and Generators
2. [Infinite Generators](/blog/infinite-generators)
3. Passing values to generators
4. Generators in asynchronous programming

## Iterator basics
Iterators in Javascript are objects that implement `next()` which returns an object with two properties, `done` and `value`.

```javascript
// Simple Iterator
{
  next: () => ({ done: false, value: 1 })
}
```

An _Iterable_ is an object that can be iterated over, the informal protocol for an Iterable is an object that defines the `Symbol.iterable` method which returns an iterator.

```javascript
// Simple Iterable
{
  [Symbol.iterator]: () => ({ next: () => ({ done: false, value: 1 })})
}
```

These aren't very useful since all they do is return an infinite stream of the number `1` when iterated over.

By conforming to the _Iterable_ protocol an object can be used in the [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) construct.

## Generator Basics
So, what do _Iterator_ and _Iterable_ have to do with _Generators_? Turns out, a lot, since Generators conform to both _Iterable_ and _Iterator_.

In short, generators are [coroutines](https://en.wikipedia.org/wiki/Coroutine). Here is the short description from MDN:
> Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

When the generator is iterated over, through `next()`, it executes to the first `yield` statement. There it will save it's state and return the value passed to yield. The next time `next()` is called, the state will be restored and the code will continue executing where it left of. This will continue until the end of the function (or `return`) where the final value will be returned and the iterator marked as `done`.

A function is declared a generator by adding an `*` after the keyword `function`.

```javascript
function* aGenerator() {
  yield 1
  yield 2
  yield 3
  return 4
}

const gen = aGenerator()
gen.next() // { value: 1, done: false }
gen.next() // { value: 2, done: false }
gen.next() // { value: 3, done: false }
gen.next() // { value: 4, done: true }
```

See MDN for more in-depth information about [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

## Why are generators interesting
In the next couple of articles, we'll have a look on various use cases for generators. Starting with infinite generators that generate an infinite stream of values and show how they can be useful in the context of a finite iteration.

In the later articles, we'll look at more advanced use cases, where we pass values into the generator and even use them for synchronization when doing concurrent programming.
