task :clean do
  sh "rm -rf _site/*"
end

task :build do
  ENV['JEKYLL_ENV'] = 'production'
  sh "bundle exec jekyll build"
end

task :preview do
  sh "bundle exec jekyll serve"
end

task :update do
  sh "bundle update github-pages"
end

task :deploy => [:clean, :build] do
  sh "gcloud app deploy --project hallski-org"
end