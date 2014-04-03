![](https://raw.github.com/d-i/halfpipe.io/master/media/logo.png)

[![Stories in Ready](https://badge.waffle.io/d-i/half-pipe.png?label=ready)](http://waffle.io/d-i/half-pipe)

Gem to replace the Rails asset pipeline with a [Grunt](http://gruntjs.com/)-based workflow, providing dependencies via [Bower](http://bower.io/).

Half Pipe is a generator to get you up and running quickly with a Grunt setup for building client-side code in Rails apps. We believe that your asset workflow is yours and you should be able to configure it however you need to.

## Who is this For?

This initial release assumes you have been using Grunt in non-Rails apps and would like to start using it in Rails as well. It uses Bower for dependency management, [RequireJS](http://www.requirejs.org/) for JavaScript modules and Sass for CSS. If you use alternatives to these tools, we'd love to [hear from you][issue].

## Beta Version

**NOTE** This README refers to the beta version of Half Pipe. I highly recommend using the beta and following this README, but if you are on the 0.2 version please see [the previous README](https://github.com/d-i/half-pipe/blob/4a68659f215f939f7da9d3e5e8756c7f31a86177/README.md).

## We Want Feedback

Half Pipe is still in the early stages of development. The workflow has been extracted from our projects at [D-I](http://d-i.co/) with inspiration from [ember-app-kit](https://github.com/stefanpenner/ember-app-kit). We are trying to build an extremely flexible and useful tool for front-end developers who work in Rails apps, while still adhering to good coding principles. If you want to use Half Pipe but feel hesitant for any reason, please feel free to [open up an issue telling us why][issue]. As we progress towards a 1.0 release, we want to hear from you to make this tool the best it can be.

## Getting Started

Half Pipe was presented in the talk "Asset Happiness" which you can [watch on YouTube](http://www.youtube.com/watch?v=2gaZsFkZ2BQ).

### Installing

The Half Pipe gem is mostly a vehicle to bring a nice Grunt workflow into your Rails app. To set it up, add the following to your Gemfile:

    gem 'half-pipe', '~> 0.3.0.beta'

After you install the gem, you can run `rails g half_pipe:install` to setup the Grunt workflow. This will configure your app for [node.js](http://nodejs.org/), copy over the Grunt setup, install node modules and run `grunt build:public`.

From here you can move your stylesheets from `app/assets/stylesheets` to `app/styles` (make sure you replace [Sprockets directives](https://github.com/sstephenson/sprockets#managing-and-bundling-dependencies) with [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) or [Less](http://lesscss.org/#-importing) imports.

You can also move JavaScript files into `app/scripts`, but take care to make sure you wrap them in RequireJS modules (see http://mikemurry.com/getting-started-with-require-js/ for a quick overview of RequireJS) or else you won't be able to build.

#### LESS

Note: Currently [LESS](http://lesscss.org/) is only available in master, it will be in a future release of the gem. Make sure you update your Gemfile accordingly if you need it.

To setup your workflow to use LESS instead of SASS you can do so with the `processor` option:

    rails g half_pipe:install --processor=less

### Working on Assets

#### Front-end Developer Workflow

Run `grunt server` and Half Pipe will start up your Rails app with a preview server for your assets. Browse to `http://localhost:3000` and use your app like normal. Grunt will watch assets and recompile automatically when you make changes. It will also restart your Rails app when you change files in `config` or `lib`, and any time you install new gems with [Bundler](http://bundler.io/).

#### Back-end Developer Workflow

If you don't need to work on assets, nothing really changes for you. If you've never used Grunt before, install it with `npm install -g grunt-cli`. Then run `npm install` to install dependencies and then `grunt build:public` to get the assets into your public folder. Once you've done that, you will only need to use Grunt when you need to get the latest changes to assets (this step will go away in the future, see [#31][issue-31]).

## Usage

There are built-in helpers for referencing most assets.

- `image_tag "avatar.png"` will reference /assets/images/avatar.png
- `javascript_include_tag "main"` will reference /assets/scripts/main.js
- `stylesheet_link_tag "main"` will reference /assets/styles/main.css

Half Pipe also provides helpers for Sass:

- `image-url('avatar.png')` compiles to url(/assets/images/avatar.png)
- `image-path('avatar.png')` compiles to /assets/images/avatar.png

#### Usage of the app folder

Only put assets that need to be processed by Grunt in the app folder. For example, if you want to use Grunt to sprite your images then you can create an `app/icons` folder and output the sprite to `public/assets/images`. However, you should keep the rest of your images in your repository at `public/assets/images`. That way files that don't need to be processed will never get passed through Grunt, which makes it clear to everyone what is getting compiled and what isn't.

- Including assets from Bower (JavaScript, Sass, Sass/CSS)

#### Bower

##### JavaScript

Include Bower dependencies by configuring RequireJS to find them. This is a manual process at the moment (see [#40][issue-40] for more info). When you install a new Bower component, open up `config/build.js` and add it to the paths config. Since grunt builds from a tmp directory, you will need to prefix the paths with '../../../../../bower_components' (see [#55][issue-55]).

##### Stylesheets

Half Pipe configures Sass automatically to include your configured bower components directory. For example, to import bourbon into your app add 'bourbon' to your `bower.json` as a dependency and then include it by adding:

```sass
@import "bourbon/app/assets/stylesheets/bourbon";
```

to `app/styles/main.scss`.

If you have a Bower component that includes standard CSS files instead of Sass templates, you can include those the same way, but prefixing the path with `CSS:`. For example, to include normalize.css add [normalize.css](https://github.com/necolas/normalize.css/) as a dependency to your `bower.json` and then include it with:

```sass
@import "CSS:normalize-css/normalize";
```

### Directory Structure

We believe that the directory structured imposed by the Rails asset pipeline was a step in the right direction, but did not go far enough in making client code a first-class part of your application. Given that, we have put assets at the same level as the rest of your Ruby code:

- `app/scripts` - JavaScript files (currently all RequireJS modules)
- `app/styles` - Sass templates

## History

For a detailed history, see [our releases page][releases].

## Roadmap

We're currently undergoing some pretty major changes in the Half Pipe workflow. See our [milestones][] for what's coming in the near future.

### Other Considerations

- Precompilation of client-side templates
- JavaScript module generator
- Configurable asset directories
- Better support for images
- Support for additional module loaders (including ES6 modules)
- Support for other frameworks and environments
- Support for most popular [AltJS](http://www.altjs.org) languages
- Splitting out app skeleton from node/grunt setup

[milestones]: http://github.com/d-i/half-pipe/issues/milestones
[issue]: http://github.com/d-i/half-pipe/issues/new
[releases]: http://github.com/d-i/half-pipe/releases
[issue-31]: http://github.com/d-i/half-pipe/issues/31
[issue-40]: http://github.com/d-i/half-pipe/issues/40
[issue-55]: http://github.com/d-i/half-pipe/issues/55
