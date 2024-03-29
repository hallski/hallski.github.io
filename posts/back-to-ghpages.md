---
date: 2021-02-21
section: blog
title: Back to GH Pages
excerpt: Moved my blog back to Github Pages after a few years of running it from Google Platform.
---

The only thing I was using GCP for was hosting this blog which is statically generated by [Jekyll](https://jekyllrb.com). As that work flow is a lot easier on Github Pages I decided to move it back there and at the same time make some improvements to my workflow.

There is a similar story with Ruby which I only use for running Jekyll. To make life a bit simpler and to avoid having to relearn how to get things to run everytime I want to update I decided to look into running it in Docker instead. Unfortunately the `jekyll/jekyll` Docker images didn't seem to enjoy running on an M1 Mac yet so I used the `ruby:2.7.2` image instead.

```Dockerfile
# Use Ruby image instead of jekyll/jekyll for arm-64 support
FROM ruby:2.7.2

RUN gem install bundler:1.17.2 jekyll:4.0 jekyll-redirect-from

EXPOSE 4000

CMD bundle exec jekyll serve -H 0.0.0.0
```

And to preview the site, I run it with:

```bash
docker container run --rm -p 4000:4000 -p 35729:35729 -it                     \
                     -v "$(pwd)":"$(pwd)" -w "$(pwd)" $(docker build -q .)    \
                     jekyll serve -H 0.0.0.0 --livereload
```
