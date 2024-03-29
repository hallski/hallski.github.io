---
comments: null
date: '2011-01-24T00:00:00Z'
section: blog
tags:
  - objective-c
title: Code Separation Using Blocks
---

This is a short blog entry to describe how you can use blocks to seperate a generic code from problem specific using blocks. Those that have been looking at [Project Euler](http://projecteuler.net) might recognize this problem description.

The program is supposed to calculate the sum of all even-valued [Fibonacci numbers](http://en.wikipedia.org/wiki/Fibonacci_number) that doesn't exceed a <tt>STOP_VALUE</tt>.

To keep the Fibonacci calculations generic I wanted to separate the problem specific logic from the code calculating the Fibonacci sequence. Blocks can be really helpful for that which is shown below.

```objc
+ sequenceWithBlock:^ void (NSInteger value, BOOL *stop);
```

This method accepts a block that is called for every Fibonacci number in the sequence until the blocks sets the <tt>stop</tt> flag. The problem specific code is then placed inside the block.

```objc
__block int total = 0;

[Fibonacci sequenceWithBlock:^ void (NSInteger value, BOOL *stop) {
    if (value > STOP_VALUE) {
        *stop = YES;
    }

    if (value % 2 == 0) {
        total += value;
    }
}];
```
