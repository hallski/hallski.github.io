docker container run --rm -p 4000:4000 -p 35729:35729 -it -v "$(pwd)":"$(pwd)" -w "$(pwd)" $(docker build -q .) jekyll serve -H 0.0.0.0 --livereload
