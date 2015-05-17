---
title: "Tutorial: Rails App Setup With Heroku and Github"
date: 2015-04-25 20:15 PDT
tags: tutorial, development
---

<img src="/images/blog/seven-ounces-screenshot.png" alt="nutella" class="post-image" />

I love how interactive web apps can be, and the amount of creativity and control
you can have over a system when you know how set it up as an app. However, if
you’re new to the process of creating web apps, sometimes all the moving pieces
can be a bit overwhelming. In this tutorial I’ll be walking through my basic
process of getting an app up and running.

#### Tools I Use

Here are the tools you’ll need to complete this tutorial: Terminal, Rubymine,
Ruby on Rails, Git, Github, Heroku, and Heroku Toolbelt.

__Ruby On Rails And Github__

<img src="/images/blog/rails-1.jpg" alt="nutella" class="post-image-inline" />

<p class="post-inline">
Ruby on Rails is a great framework that is fantastic for quick prototyping. It’s
a favorite of mine when doing small projects with an even smaller team, since it
allows for a quick development cycle.
</p>

GitHub is a service that hosts your versioned code, helps you collaborate on
projects, and provides the ability to view and participate in open source
projects. You don’t technically need to use Github, since Heroku will host your
git repository for you, but if you want to collaborate with other people Github
is very useful.

__Create a new project__

There are just a few commands to create a new rails app. Open up your terminal and get started!
(note: $ = “in terminal”. Don’t copy the “$”.)

```
$ rails new [ProjectName]
```

e.g. ``` $ rails new Blog```

```
$ cd [ProjectName]
```

e.g. ``` $ cd Blog ```

```
$ git init
```

cd changes your directory to your newly created project (use it anytime you want to change directories), and git init creates an empty Git repository, ready to go.

__Now it’s time to add your first commit!__

Pro tip: Right now, your changes are in your working directory. You can check your working directory by typing $ git status into your terminal. Before you commit items, you have to add them to the staging area. You can do this in two ways:

Add all changes at once:

```
git add .
```

or add specific changes, individually:

git add [relative path to the file]
e.g. git add app/assets/images/logo.png

Then commit:

```
$ git commit -m "initial rails scaffold"
```

Alternatively, if you know you want to add all your changes to the staging area and commit at the same time, you can shorten this process by writing:

```
$ git commit -am “initial rails scaffold”
```

Hooray! But unfortunately, at this point there won’t be anything interesting to look at because you haven’t set up any resources (Rails treats everything like a resource, the fundamental building block of any Rails system). Don’t worry about resources too much right now. Let’s create something to look at!

__Create a simple blog with posts.__

In other words, we’re going to scaffold out a post resource to create a basic blog. When creating a resource, there are components like models, views, and controllers to set up. In a blog, resources include components like comments, posts, and authors. But instead of trying to figure out every piece you need to add, there’s a nifty command called “scaffold” that generates the major pieces of your application for you.

```
$ rails generate scaffold post title:string body:text
```

This will scaffold out the entire resource, including models, views, and controllers, as well as all the database migrations.
Note: the title string must be short (128 characters max), body text can be longer.

Next, you want to generate the posts table in the database.

```
$ rake db:migrate
```

__Commit again!__

Committing frequently is a good practice; it helps you catch issues quicker and makes sure all your code is up-to-date and versioned.

```
$ git commit -am “created blog scaffold with posts”
```

__Create a Remote__

Before you push, you need to tell Git what server you want to push to. To do this, just create a remote. This will tell Git where you’re hosting your repository.

First, create a remote repository on Github by clicking on the drop-down in the upper right, next to the “+”. Here’s a screenshot:

<img src="/images/blog/rails-2.png" alt="nutella" class="post-image-center
image-outline" />

After you name your repo (mine is just called “testing”), it will tell you what to enter. You’re going to be pushing an existing repository. Here’s a screenshot:

<img src="/images/blog/rails-5.png" alt="nutella" class="post-image-center
image-outline" />

And here’s what you input in your terminal:

```
$ git remote add origin git@github.com:venetucci/testing.git
```

Now you’re ready to push these commits to Github:

```
git push -u origin master
```

#### Heroku

<img src="/images/blog/rails-3.png" alt="nutella" class="post-image-inline" />

<p class="post-inline">
Heroku is a cloud application platform that helps developers build and deploy web apps. It deals with server management, deployment, and scaling.</p> The Heroku business model is pretty cool: the service is free for apps with low traffic, making it a great option for apps that may not be live for a while or won’t be getting high levels of traffic to offset hosting costs. As traffic goes up, so does pricing. Seems fair, right?

But the best part about Heroku is how easy it is to deploy your app.

__First, install the Heroku Toolbelt__

The Toolbelt makes sure you can access the command-line tool, which helps you do things like create apps, configure add-ons, check your server logs, and push to Heroku.

[Install Toolbelt here].

[Install Toolbelt here]: https://toolbelt.heroku.com/

__Login to Heroku__

If you don’t already have a Heroku account, you’ll need to log in.

```
$ heroku login
```

…and then just follow the prompts!

__Install Postgres__

Adding gems is probably the most complicated part of setting up your app, and you’ll see that it’s really not that difficult (phew!). You’ll be editing the Gemfile in your app, so make sure you locate that.

First, make sure you’re in the correct directory in your terminal. You’ll want to locate the new rails app that you created in the previous section:

```
$ pwd
```

This tells you where you are in the system. If you aren’t in the app directory, you can change your directory by entering:

```
$ cd [NameGoesHere]
```

Your app is probably running on SQLite (the Rails default), but to run on Heroku it needs Postgres. If you want to know more about why you can’t run SQLite on Heroku, read about it [here]. You can actually keep SQLite on your local server and add Postgres to your production server. Locate SQLite in your Gemfile and update it to the following:

[here]: https://devcenter.heroku.com/articles/sqlite3

```
group :development do
gem 'sqlite3', '~> 1.3.9'
end
```

```
group :production do
gem 'pg', '~> 0.17.1'
end
```

Tutorials will often tell you that you just need to add gem ‘pg’, but it’s a good idea to make sure you add the version to each of your gems. If you ever need to find that information, search for rubygems.org/gems/[gemname]. For example, if you visit [rubygems.org/gems/pg], scroll down to see the versioned copy. Just click that little clipboard icon and you’re good to go!

[rubygems.org/gems/pg]: https://rubygems.org/gems/pg

<img src="/images/blog/rails-4.jpg" alt="nutella" class="post-image-center" />

Then run:

```
$ bundle install.
```

Do this anytime you add a new gem!

__Add rails_12factor gem__

To run Rails on Heroku, your app must also use the rails_12factor gem in the Gemfile production group. I strongly encourage everyone to read more about the [12-factor app]. Remember to get the [versioned gem] as well.

[12-factor app]: http://12factor.net/
[versioned gem]: https://rubygems.org/gems/rails_12factor

You could add each production group gem to the production group individually, like this:

```
gem 'rails_12factor', group: :production
```

But it seems more streamlined to just add them at the same time. We did this with the Postgres gem by adding it after ```group :production do```. Now, just add the rails_12factor gem after the Postgres gem (before the ```end```, of course):

```
gem 'rails_12factor', '~> 0.0.2'
```

Then run ```$ bundle install```. Do this anytime you add a new gem!

__Add a unicorn to your code__

No, seriously.

Rails is automatically loaded with webrick as the default web server. It’s made for development, but not for production environments. Heroku allows you to run a better web server called Unicorn, so they suggest switching to that. Locate the version of unicorn at [rubygems.org/gems/unicorn] and add it to your Gemfile in the production group under rails_12factor.

[rubygems.org/gems/unicorn]: https://rubygems.org/gems/unicorn

```
gem 'unicorn', '~> 4.8.3', group: :production
```

Then don’t forget to $ bundle install!

The final step for getting Unicorn ready to use it to configure your app to use it. In your config folder, create a unicorn.rb file.

Then paste the following into the file:

```
worker_processes Integer(ENV["WEB_CONCURRENCY"] || 3)
timeout 15
preload_app true
```

```
before_fork do |server, worker|
Signal.trap 'TERM' do
puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
Process.kill 'QUIT', Process.pid
end
```

```
defined?(ActiveRecord::Base) and
ActiveRecord::Base.connection.disconnect!
end
```

```
after_fork do |server, worker|
Signal.trap 'TERM' do
puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
end
```

```
defined?(ActiveRecord::Base) and
ActiveRecord::Base.establish_connection
end
```

You don’t need to understand this in detail at right now, but if you’re curious, read more in the [Unicorn documentation].

[Unicorn documentation]: https://devcenter.heroku.com/articles/rails-unicorn

__Restart your server after adding gems__

You will need to remember to restart your server when you add gems. Failing to do this will break your app!

First, exit your server by going to the terminal and pressing “ctrl + C”. Then, restart it:

```
$ rails server
```

__Create a Procfile__

The final step is to make sure Heroku knows how to run your app, and to do this you need to create a [Procfile] in the root of the application directory. Create a file called ‘Procfile’ (make sure the first letter is uppercase) and insert this:

[Procfile]: https://devcenter.heroku.com/articles/procfile

```
web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb
```

Done!

__Deploy to Heroku__

Now you’re ready to deploy to Heroku! Make sure you’re still in the directory of your Rails app, and then create your Heroku repo:

```
$ heroku create [name]
```

You can then push straight to Heroku.

```
$ git push heroku
```

Your commit and deployment commands will look something like this:

```
$ git commit -am “comment”
$ git push
$ git push heroku
```

#### Best Practices Summary

- Commit often! Committing frequently is a good practice; it helps you catch issues quicker and makes sure all your code is up-to-date and versioned.
- Deploy as early as possible: You want to get something into production as soon as possible, and iterate with working code. You’ll catch bugs on your production server right when you commit them, instead of deploying your entire app all at once when you want to go live and needing to search through all of your code for the source of bugs.
- $ Bundle Install and restart your server after you add gems. Just do it.
- Add the version of your gems, which you can locate at [rubygems.org/gems]

[rubygems.org/gems]: https://rubygems.org/gems


#### Resources and Further Reading:

- [Here’s a great git cheat sheet from
  Github](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
- [Extensive explanation on getting started in Rails 4 on Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails4)
- [The 12 factor app](http://12factor.net/)
- [SQLite on Heroku](https://devcenter.heroku.com/articles/sqlite3)
- [Locate all Ruby gems](https://rubygems.org/gems)
