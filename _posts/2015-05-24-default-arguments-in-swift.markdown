---
layout: post
title: Default arguments in Swift
comments:
tags:
- swift
---

Inspired by [John Sundell](http://johnsundell.github.io) I figured now would be as good a time as any to write something here.

Let's kick it off with a nice Swift feature I saw on [Twitter](https://twitter.com/dwineman/status/601853359839006721) the other day where default arguments to functions are actual expressions, rather than constants.
For example:

{% highlight swift %}
func someFunc(a: Int = 12 + 12) -> Int
{% endhighlight %}

While this example doesn't make a lot of sense, a better use case would be together with some of Apples shared instance APIs.

{% highlight swift %}
func anotherFunc(fileManager: NSFileManager = NSFileManager.defaultManager())
{% endhighlight %}

This provides the convinience of not having to pass the file manager around everywhere but still makes the code more testable as you can pass in a test object from a test.
