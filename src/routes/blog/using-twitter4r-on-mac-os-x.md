---
comments: false
date: "2008-05-31T00:00:00Z"
section: blog
tags:
- ruby
title: Using Twitter4R on Mac OS X
---

**This is a repost from my old blog**

Was playing around a bit with the Twitter4R library the other day and realized that in order to make it to work on Mac OS X (Leopard) you need to also require ‘time’. Or you will get an error similar to

```text
lib/twitter/model.rb:268:in `init’: undefined method `parse’ for Time:Class (NoMethodError).
```

A small snippet to display my public tweets:

```ruby
require 'rubygems'
gem('twitter4r', '0.3.0')
require 'twitter'

# Required on Mac OS X Leopard
require 'time'

twitter = Twitter::Client.new

mh_timeline = twitter.timeline_for(:user, :id => 'mhallendal')

mh_timeline.each do |status|
  puts status.text
end
```
