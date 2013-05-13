# Half Pipe

Grunt/Bower-based asset workflow for Ruby web frameworks

## Warning

This initial release is to get us something easy to include in our projects, and to start getting feedback from the community. As such, this library currently assumes you already have the same problems we do and does not explain the tools we use or why we use them. If you do not have experience with [Grunt](http://www.gruntjs.com), [RequireJS](http://www.requirejs.org), [Bower](http://bower.io) and [Sass](http://www.sass-lang.com) you probably will want to wait for a future release.

If you are familiar with these (or similar) tools (and want to use them in Rails), then please feel free to provide feedback in the form of a Github issue.

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

## Roadmap

- Precompilation of client-side templates
- Javascript module generator
- Configurable asset directories
- Configurable build directories
- Better support for images
- Better support for non-Rails Ruby frameworks
- Support for most popular [AltJS](http://www.altjs.com) languages
- BYO support for less common languages
- Automatic symlinking of CSS files within bower to SCSS partials within `app/styles`
