---
layout: post
title: Understanding 'new' in JS
comments:
tags:
- javascript
---

One of the things that confused me most when starting out with Javascript was _constructor_ functions. That's because when used together with `new` they look like a normal class in other langues.

```javascript
const instance = new Constructor()
```

However, they can also be called without the `new` keyword which will lead to `this` pointing to the global object instead. The new ES6 `class` keyword fixes that by throwing an exception when called without `new`.

So what does `new` do anyway?

After some research it seems we can simply implement our own `new` as a function like this:

```javascript
function myNew(constructor, ...args) {
  const newObj = {}
  newObj.__proto__ = constructor.prototype
  const fromConstructor = constructor.apply(newObj, args)
  if (fromConstructor) {
    return fromConstructor
  }
  return newObj
}
```

New is simply responsible for:
1. Creating a new object
2. Set it's prototype to that of the constructors `prototype` property
3. Call the constructor with `this` bound to the newly created object.
4. As constructors in Javascript are allowed to return a different object, `new` also needs to check if it did and return that instead when that's the case.
