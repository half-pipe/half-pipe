module HalfPipe
  module Generators
    class InstallGenerator < Rails::Generators::Base

      desc "Installs basic Grunt/Bower setup with Sass & requirejs to your Rails project"

      def self.source_root
        @_half_pipe_source_root ||= File.expand_path("../templates", __FILE__)
      end

      def create_config_files
        template "package.json", "package.json"
        template "_bowerrc", ".bowerrc"
        template "bower.json", "bower.json"
        template "_jshintrc", ".jshintrc"
        template "Gruntfile.js", "Gruntfile.js"
        template "config/half-pipe.json"
      end

      def remove_sprockets
        comment_lines "config/application.rb", %r{sprockets/railtie}

        railties_requires = File.read(File.join(self.class.source_root, "railties.rb"))
        gsub_file "config/application.rb", %r{require 'rails/all'}, railties_requires

        gsub_file "app/views/layouts/application.html.erb", %r{\s*<%= stylesheet_link_tag\s+"application".*%>$}, ''
        gsub_file "app/views/layouts/application.html.erb", %r{\s*<%= javascript_include_tag\s+"application".*%>$}, ''
      end

      def insert_includes_into_layout
        insert_into_file "app/views/layouts/application.html.erb", %Q{  <%= requirejs_include_tag "/assets/scripts/application.js" %>\n  }, before: "</body>"
        insert_into_file "app/views/layouts/application.html.erb", %Q{  <%= stylesheet_link_tag "/assets/styles/main" %>\n  }, before: "</head>"
      end

      def generate_scripts
        empty_directory "app/scripts"

        template "app/scripts/main.js"

        template "config/build.js"
      end

      def generate_stylesheets
        template "app/styles/main.scss"
      end

      def insert_ignores
        append_to_file ".gitignore", %w(node_modules bower_components public/assets).join("\n"), force: true
      end

      def generate_task_config_files
        empty_directory "tasks/options"

        inside "tasks/options" do
          task_options_files.each do |f|
            template File.basename(f), force: true
          end
        end
      end

      def patch_sass_imports
        # TODO: Remove this once https://github.com/chriseppstein/sass-css-importer/pull/6 is accepted and released
        gem "sass-css-importer", github: "joefiorini/sass-css-importer", branch: "load-paths"
      end

      def install_dependencies
        say_status :run, "bundle install"

        bundle_path = Gem.bin_path("bundler", "bundle")
        Bundler.with_clean_env do
          `"#{Gem.ruby}" "#{bundle_path}" install`
        end
        run "npm install"
      end

      def build_project
        ENV["PATH"] = "./node_modules/.bin:#{ENV["PATH"]}"

        run "bower install"
        run "grunt build:public"
      end


      def finalize

        say "You may now safely migrate your assets to app/scripts and/or app/styles. Feel free to delete app/assets/javascripts and app/assets/stylesheets when you're done."
      end

      protected

      def main_module_name
        app_name.underscore.dasherize
      end

      def app_name
        Rails.application.class.parent_name || "myapp"
      end

      def task_options_files
        Dir[File.join(%W(#{File.dirname(__FILE__)} templates tasks options *.js))]
      end

    end

  end
end
