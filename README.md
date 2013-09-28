# Half Pipe

[![Stories in Ready](https://badge.waffle.io/d-i/half-pipe.png?label=ready)](http://waffle.io/d-i/half-pipe)

Gem to replace the Rails asset pipeline with a Grunt.js-based workflow, providing dependencies via Bower.

Half Pipe is a generator to get you up and running quickly with a Grunt setup for building client-side code in Rails apps. We believe that your asset workflow is yours and you should be able to configure it however you need to.

## Who is this For?

This initial release assumes you have been using [Grunt.js](http://www.gruntjs.com) in non-Rails apps and would like to start using it in Rails as well. It uses [Bower](http://bower.io) for dependency management, [RequireJS](http://www.requirejs.org) for Javascript modules and Sass for CSS. If you use alternatives to these tools, we'd love to hear from you.

## Alpha Version

**NOTE** This README refers to the current stable version of Half Pipe (v0.2.4 at the time of writing). To use the new, Grunt-based workflow see our [milestones](/d-i/half-pipe/issues/milestones) and install an alpha version by specifying:

```
gem 'half-pipe', '~>0.3.0.alpha'
```

in your Gemfile.

## Looking for Contributors

If you take a look at our [issue board on waffle.io](http://waffle.io/d-i/half-pipe) you'll see that we have some big plans for future releases of Half Pipe. If you are interested in working on a feature or fixing a bug, please feel free to move the issue to "In Progress" and send a PR when you're ready. If you have ideas or questions, please feel free to [open an issue](https://github.com/d-i/half-pipe/issues/new).

## Getting Started

### Directory Structure

We believe that the directory structured imposed by the Rails asset pipeline was a step in the right direction, but did not go far enough in making client code a first-class part of your application. Given that, we have put assets at the same level as the rest of your Ruby code:

- `app/scripts` - Javascript files (currently all RequireJS modules)
- `app/styles` - Sass templates

#### Rails Generator

In a Rails app, use `rails g half_pipe:install` to get started. This will generate the directory structure and any files necessary for your Grunt workflow.

<table>
<thead>
<tr>
  <th>
    Generated
  </th>
  <th>
    Purpose
  </th>
</tr>
</thead>
<tbody>
<tr>
  <td>Gruntfile.js</td>
  <td>
    Main configuration for your Grunt tasks
  </td>
</tr>
<tr>
  <td>bower.json</td>
  <td>
    3rd-party asset dependencies (includes normalize-css, requirejs, and html5shiv by default)
  </td>
</tr>
<tr>
  <td>package.json</td>
  <td>
    NPM dependencies (ie. Bower, Grunt, any Grunt tasks)
  </td>
</tr>
<tr>
  <td>.jshintrc</td>
  <td>
    Linting configuration for Javascript
  </td>
</tr>
<tr>
  <td>app/scripts/application.js</td>
  <td>
    Entry point for requirejs; includes requirejs configuration, main module require and bootstraps page
  </td>
</tr>
<tr>
  <td>app/scripts/main.js</td>
  <td>
    Main module for your app; includes page initialization and requires any modules necessary for initialization
  </td>
</tr>
<tr>
  <td>config/initializers/sass.rb</td>
  <td>
    Bootstraps Sass with bower importer
  </td>
</tr>
</table>

Beyond these files, the generator also removes sprockets from `config/application.rb` and replaces `javascript_include_tag "application"` in your application layout with `requirejs_include_tag "/scripts/application.js"`.

#### Post-generator Tasks

If you're in an app with existing assets, the generator **DOES NOT** touch them. It is up to you to move them into their new homes and incorporate any existing Javascript files into `requirejs` modules.

### Building Assets

Build assets by running `grunt build`. This will compile Javascripts to `public/scripts` and stylesheets to `public/styles`.

### Configuration

In this early release if you want to configure anything, you'll have to manually change `Gruntfile.js`. We'd like to make this more invisible in the future; please post any use cases for configuration as Github issues.

## History

### 07/22/2013 v0.2.0

- Removes dependency on rack-asset-compiler and embeds the code in this gem

### 07/19/2013 v0.1.0

- Override Rails' `rake assets:precompile` to run `grunt build` for easier deployments
- Allow for configuring asset server with `config.half_pipe.serve_assets = true|false`
- Use Almond for requirejs optimization so as not to need requirejs in production


## Roadmap

We're currently undergoing some pretty major changes in the Half Pipe workflow. See our [milestones](/d-i/half-pipe/issues/milestones) for what's coming in the near future.

## Future Features

- Precompilation of client-side templates
- Javascript module generator
- Configurable asset directories
- Configurable build directories
- Better support for images
- Support for additional module loaders (including ES6 modules)
- Padrino support
- Middleman support
- Support for most popular [AltJS](http://www.altjs.com) languages
- BYO support for less common languages
- Automatic symlinking of CSS files within bower to SCSS partials within `app/styles`
- Read .bowerrc for Bower directory
