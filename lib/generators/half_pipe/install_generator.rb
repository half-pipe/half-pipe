module HalfPipe
  module Generators
    class InstallGenerator < Rails::Generators::Base

      desc "Installs basic Grunt/Bower setup with Sass & requirejs to your Rails project"

      def self.source_root
        @_half_pipe_source_root ||= File.expand_path("../templates", __FILE__)
      end

      def create_initializer_file
        template "package.json", "package.json"
        template "_bowerrc", ".bowerrc"
        template "bower.json", "bower.json"
        template "_jshintrc", ".jshintrc"
        template "Gruntfile.js", "Gruntfile.js"

        comment_lines "config/application.rb", %r{sprockets/railtie}

        railties_requires = File.read(File.join(self.class.source_root, "railties.rb"))
        gsub_file "config/application.rb", %r{require 'rails/all'}, railties_requires

        gsub_file "app/views/layouts/application.html.erb", '<%= javascript_include_tag "application" %>\n', ''
        insert_into_file "app/views/layouts/application.html.erb", '<%= requirejs_include_tag "/scripts/main" %>', before: "</body>"

        directory "app"

        empty_directory "app/scripts"

        inside "app/scripts" do
          template "main.js", force: true
          template "application.js", force: true
        end

        initializer "sass.rb" do
          %Q{
          require 'sass/importers/bower_importer'
          Sass.load_paths << Sass::Importers::BowerImporter.new("components")
          }
        end

        run "npm install"

        ENV["PATH"] = "./node_modules/.bin:#{ENV["PATH"]}"

        run "bower install"
        run "grunt build"

        say "You may now safely migrate your assets to app/scripts and/or app/styles. Feel free to delete app/assets/javascripts and app/assets/stylesheets when you're done."
      end

      def main_module_name
        app_name.underscore.dasherize
      end

      def app_name
        Rails.application.class.parent_name
      end

    end

  end
end
