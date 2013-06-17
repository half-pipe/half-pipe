require "rack/asset_compiler"
require "rack/sass_compiler"

module Rack
  class HalfPipe

    def initialize(app)
      @compilers = []

      @compilers << Rack::AssetCompiler.new(app, scripts_config)
      @compilers << Rack::AssetCompiler.new(app, bower_js_config)
      @compilers << Rack::AssetCompiler.new(app, bower_css_config)
      @compilers << Rack::AssetCompiler.new(app, images_config)
      @compilers << Rack::SassCompiler.new(app, sass_config)

      @app = app
    end

    def call(env)

      res = @compilers.reduce([404]) do |memo,compiler|
        if memo[0] == 404
          compiler.call(env)
        else
          memo
        end
      end

      if res[0] == 404
        @app.call(env)
      else
        res
      end

    end

    private

    def scripts_config
      {
        source_dir: 'app/scripts',
        url: '/scripts',
        source_extension: 'js',
        content_type: 'application/javascript',
        compiler: pass_thru_compiler
      }
    end

    def bower_js_config
      {
        source_dir: 'components',
        url: '/components',
        source_extension: 'js',
        content_type: 'application/javascript',
        compiler: pass_thru_compiler
      }
    end

    def images_config
      {
        source_dir: 'app/images',
        url: '/images',
        compiler: pass_thru_compiler
      }
    end

    def bower_css_config
      {
        source_dir: 'components',
        url: '/components/css',
        source_extension: 'css',
        content_type: 'text/css',
        compiler: pass_thru_compiler
      }
    end

    def sass_config
      {
        :source_dir => 'app/styles',
        :url => '/styles'
      }
    end

    def pass_thru_compiler
      ->(source_file){
        ::File.read(source_file)
      }
    end
  end
end
