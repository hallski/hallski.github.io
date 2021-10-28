---
comments: false
date: "2008-06-21T00:00:00Z"
section: blog
tags:
- git
title: Removing a remote branch in Git
---

**This is a repost from my old blog**

This is something I’ve had to checkup a few times so I figured it would be useful both for myself and for others to keep around in a blog post.

To remove a remote branch you created in Git just push to it like:

```shell
$ git push origin :name-of-branch
```