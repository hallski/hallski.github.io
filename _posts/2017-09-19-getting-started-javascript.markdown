---
layout: post
title: Getting into Javascript
comments:
---

I have never really had any need for getting into Javascript before but after switching job earlier this month it's likely that I will be writing quite a lot of Javascript going forward.

I came to Javascript with a lot of preconceptions about the language based on scattered comments and lack of personal insight. While some of them have turned out to be true, Javascript have also surprised me in a positive way.

For example I love the _object literal syntax_ to create objects on the fly without having to define a class first.

{% highlight javascript %}

const todoItem = {
  done: false,
  title: 'Newly created item'
}

assert.equal(todoItem.done, false) // OK

{% endhighlight %}

Some other really nice features include deconstruction, well integrated Promises (with async/await syntax) and closures with low syntactic overhead.

More on that later.