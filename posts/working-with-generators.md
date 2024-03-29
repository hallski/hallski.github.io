---
comments: true
date: '2017-11-13T00:00:00Z'
excerpt: In the second article about generators we'll explore infinite generators
  and why they can be useful.
redirect_from: /blog/infinite-generators
section: blog
tags:
  - javascript
  - generators
  - es6
title: Working with Generators
---

## Javascript Generator Series

This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful.

1. [Introduction to ES6 Iterators and Generators](/blog/intro-to-es6-iter-and-generators)
2. Working with Generators
3. [Async/Await with Generators](/blog/async-await-with-generators)

## Introduction

Generators have a lot of great applications, such as the `randomInts` generator below. In this article we'll however force the example a bit by also combining this generator with a `zip` generator to produce a `rollCharacter` function for [D&D](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons) character creation.

In D&D there are six different attributes: _Strength_, _Constitution_, _Dexterity_, _Intelligence_, _Wisdom_ and _Charisma_. Each attribute is rolled by the use of 3d6 (roll three six sided dice and add the results).

The attributes will be modelled as an array of strings:

```javascript
const characterAttributes = [
	'Strength',
	'Constituion',
	'Dexterity',
	'Intelligence',
	'Wisdom',
	'Charisma'
]
```

The result of calling `rollCharacter` should work like this:

```javascript
rollCharacter()
// [[ 'Strength', 17 ],
//  [ 'Constituion', 6 ],
//  [ 'Dexterity', 15 ],
//  [ 'Intelligence', 12 ],
//  [ 'Wisdom', 8 ],
//  [ 'Charisma', 11 ]]
```

## Infinite random number generator

The dice can be simulated as an infinite generator where each call to `next()` simulates a roll. Our generator function will be called `randomInt(lower, upper, seed)` and take a lower value, an upper value and a seed.

```javascript
const randomSeed = () => Math.floor(Math.random() * 1000)

function* randomInts(lower, upper, seed = randomSeed()) {
	while (true) {
		const x = Math.sin(seed++) * 10000
		const random = x - Math.floor(x)
		yield Math.round(lower + random * (upper - lower))
	}
}

const d20 = randomInts(1, 20)
d20.next().value // 13
d20.next().value // 1 - oh no, a fumble!
```

One benefit of defining a `randomInt` as a generator instead of a normal function is that we can produce a reproducable stream of values by giving the generator the same seed value, since it's keeping all it's state internal. This is great for testing.

## Combining iterators

Since both arrays (our `characterAttributes`) and generators are _Iterable_ it would be nice if we could simply iterate them together and create pairs like `['Strength', 13]`. One pair for each attribute.

Many functional languages have a function called `zip` that does just that. While Javascript doesn't come with `zip` by default, [Lodash](https://lodash.com/) has it. Unfortunately the Lodash version does not support iterators so let's define our own.

`zip` will take any number of Iterables and generate groups until any of the iterations are exhausted.

```javascript
;[...zip(['a', 'b', 'c'], [1, 2, 3, 4])] // => [['a', 1], ['b', 2], ['c', 3]]
```

The `...` in front of `zip` is the _spread operator_ (also part of ES6) which will _"spread out"_ all values generated by `zip`.

We'll start by implementing two helper generators, `produceWhile` and `mappedGenerator`.

### produceWhile

The generator `produceWhile` will continue to generate values through the `produce` function until the `predicate` returns `false`.

```javascript
function* produceWhile(produce, predicate) {
	let value = produce()
	while (predicate(value)) {
		yield value
		value = produce()
	}
}
```

### mappedGenerator

`mappedGenerator` wraps another generator by mapping the values it produces with the `mapper` function:

```javascript
function* mappedGenerator(generator, mapper) {
	let result = generator.next()
	while (!result.done) {
		yield mapper(result.value)
		result = generator.next()
	}
}
```

### zip

With these two helpers in place we are ready to implement our `zip` generator function.

```javascript
function* zip(...iterables) {
	// Get Iterators for each Iterable
	const iterators = iterables.map((iterable) => iterable[Symbol.iterator]())

	// Produce groups of iterator results [IterResult1, IterResult2, ...] where each
	// IterResult is an object like { value: x, done: true|false }. Stop when any
	// IterResult is marked as done.
	const producer = produceWhile(
		() => iterators.map((iterator) => iterator.next()),
		(value) => value.every((v) => !v.done)
	)

	// Unbox the value from the iterator results
	yield* mappedGenerator(producer, (value) => value.map((v) => v.value))
}
```

Notice that `zip` makes use of the `yield*` construct. This delegates generation to a another iterator, in this case the mapped generator.

## Putting it all together

With the `zip` implementation we can define our function as follows:

```javascript
const zip = require('./zip')
const randomInts = require('./randomInts')

function rollCharacter() {
	const attributes = ['Strength', 'Constituion', 'Dexterity', 'Intelligence', 'Wisdom', 'Charisma']

	return [...zip(attributes, randomInts(3, 18))]
}

rollCharacter()
// [[ 'Strength', 17 ],
//  [ 'Constituion', 6 ],
//  [ 'Dexterity', 15 ],
//  [ 'Intelligence', 12 ],
//  [ 'Wisdom', 8 ],
//  [ 'Charisma', 11 ]]
```

Here we combine a finite _Iteratable_ `attributes` with an infinite one `randomInts`. Since `zip` stops when either is exhausted, it's safe to use it together with the infinite one and the spread operator.
