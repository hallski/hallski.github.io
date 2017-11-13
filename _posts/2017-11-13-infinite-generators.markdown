---
layout: post
title: Infinite Generators
section: blog
comments: true
tags:
- javascript
- generators
- es6
excerpt: In the second article about generators we'll explore infinite generators and why they can be useful.
---
## Javascript Generator Series
This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful.

1. [Introduction to ES6 Iterators and Generators](/blog/intro-to-es6-iter-and-generators)
2. Infinite Generators
3. Passing values to generators
4. Generators in asynchronous programming

## Infinite generator

As generators define when they are exhausted, you can easily create an infinite generator like the following random number generator.

```javascript
function* randomInts(lower, upper) {
  while(true) {
    yield Math.round(lower + Math.random() * (upper - lower))
  }
}

const dice = randomInts(1, 6)
dice.next().value // 4
dice.next().value // 3
// ...
```

Infinite generators can be very useful as can be seen in the `zip` example below. Just make sure not to use them in a `for...of` construct or with the spread operator.

## Generators calling other generators

Say that we are working on implementing D&D and need a way to describe the various dice. We can do that easily by using our `randomInts` generator:

```javascript
function* dice(nrOfSides = 6) {
  yield* randomInts(1, nrOfSides)
}

const d20 = dice(20)
d20.next().value // 13
d20.next().value // 1 - oh no, a fumble!
```

Notice the extra asterisk on `yield` in this example. It delegates to another iterator, in this case the `randomInts` generator.

## Making use of our generator
Continuing the D&D example above, say that we want to write a function that rolls the characters attributes, `rollCharacter`. In D&D there are six different attributes: _Strength_, _Constitution_, _Dexterity_, _Intelligence_, _Wisdom_ and _Charisma_. Each attribute is rolled by the use of 3d6 (roll three six sided dice and add the results).

Many functional languages have a function called `zip` which would be perfect for our usecase. Javascript doesn't come with `zip` by default but [Lodash](https://lodash.com/) has it. Unfortunately the Lodash version does not support ([nor plan to](https://github.com/lodash/lodash/issues/737)) iterators so let's define our own.

Our `zip` needs to work so that it takes an array of iterators and groups the results of calling `next()` on each until any of them are depleted.

```javascript
zip(['a', 'b', 'c'], [1, 2, 3, 4]) // => [['a', 1], ['b', 2], ['c', 3]]
```

Both arrays and _generators_ are iterable (they define the method `Symbol.iterator`) which means that our `zip` will be able to handle both.

The implementation of `zip` can be found in the following [gist](https://gist.github.com/mhallendal/66a5c914d3fbd2e7dda76c608ef0f955).

With `zip` implementation we can define our function as follows:
```javascript
const zip = require('./zip')
const randomInts = require('./randomInts')

function* threeD6() {
  yield* randomInts(3, 18)
}

function rollCharacter() {
  const attributes = ['Strength', 'Constituion', 'Dexterity',
                      'Intelligence', 'Wisdom', 'Charisma']

  return zip(attributes, threeD6())
}

rollCharacter()
// [[ 'Strength', 17 ],
//  [ 'Constituion', 6 ],
//  [ 'Dexterity', 15 ],
//  [ 'Intelligence', 12 ],
//  [ 'Wisdom', 8 ],
//  [ 'Charisma', 11 ]]
```

Here we combine a finite _Iteratable_ `attributes` with an infinite one in `threeD6`. Since `zip` stops when either is exhausted (the finite one), it's safe to use it together with the infinite one.
