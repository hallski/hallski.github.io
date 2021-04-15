FROM ruby:2.7.2

COPY Gemfile* .

RUN gem install bundler:1.17.2  #jekyll:4.0 jekyll-redirect-from
RUN bundle install

#RUN gem install i18n:1.8.9
#RUN gem install listen:3.4.1
#RUN gem install kramdown:2.3.0

EXPOSE 4000

CMD bundle exec jekyll serve
