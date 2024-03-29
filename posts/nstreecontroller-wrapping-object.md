---
comments: false
date: '2009-04-04T00:00:00Z'
section: blog
tags:
  - objective-c
title: Retrieving the real object when using NSOutlineView with an NSTreeController
---

As I just started out with Cocoa and started looking into the NSTreeController and NSOutlineView I realized that the objects seen by the outline view isn't the same as the ones you see when working with the tree controller.

The NSTreeController wraps your objects into another object and it took me some digging before I realized that you need to call `representedObject` to fetch the _real_ object.

Example from implementing an NSOutlineView delegate:

```objc
/* NSOutlineView Delegate Method */
- (BOOL)outlineView:(NSOutlineView *)view
        isGroupItem:(id)item
{
    if ([item representedObject] == section) {
        return YES;
    }

    return NO;
}
```
