FROM ruby:2.7.2

RUN gem install bundler:1.17.2 jekyll:4.0 jekyll-redirect-from

EXPOSE 4000

CMD bundle exec jekyll serve -H 0.0.0.0