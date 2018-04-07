desc "Clean out an old build"
task :clean do
  sh "rm -rf _site/*"
end

desc "Build the site"
task :build do
  ENV['JEKYLL_ENV'] = 'production'
  sh "bundle exec jekyll build"
end

desc "Serve the site locally"
task :preview do
  sh "bundle exec jekyll serve"
end

desc "Deploy the site on Google App Engine"
task :deploy => [:clean, :build] do
  sh "gcloud app deploy --project hallski-org"
end