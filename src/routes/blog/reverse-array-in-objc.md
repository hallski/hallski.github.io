---
comments: false
date: '2009-10-09T00:00:00Z'
section: blog
tags:
  - objective-c
title: Reversing an array in Objective C
---

Was looking for the best way to reverse an array in Objective C and stumbled over this solution that might not be obvious to everyone (wasn't to me at least).

```objc
NSArray *reversedArray = [[array reverseObjectEnumerator] allObjects];
```
