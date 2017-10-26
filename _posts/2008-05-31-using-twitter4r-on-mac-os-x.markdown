---
layout: post
title: Using Twitter4R on Mac OS X
comments: false
tags:
- ruby
---

**This is a repost from my old blog**

Was playing around a bit with the Twitter4R library the other day and realized that in order to make it to work on Mac OS X (Leopard) you need to also require ‘time’. Or you will get an error similar to

<pre class="highlight">
lib/twitter/model.rb:268:in `init’: undefined method `parse’ for Time:Class (NoMethodError).
</pre>

A small snippet to display my public tweets:

{% highlight ruby %}
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
{% endhighlight %}
