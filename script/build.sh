docker container run --rm -it -v "$(pwd)":"$(pwd)" -w "$(pwd)" $(docker build -q .) jekyll build
