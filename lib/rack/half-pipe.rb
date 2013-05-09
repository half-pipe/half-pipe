require "rack/asset_compiler"
require "rack/sass_compiler"

module Rack
  class HalfPipe

    def initialize(app)
      @compilers = []

      @compilers << Rack::AssetCompiler.new(app, scripts_config)
      @compilers << Rack::AssetCompiler.new(app, bower_js_config)
      @compilers << Rack::AssetCompiler.new(app, bower_css_config)
      @compilers << Rack::SassCompiler.new(app, sass_config)

      @app = app
    end

    def call(env)
      res = @compilers[0].call(env)

      if res[0] != 404
        return res
      end

      res = @compilers[1].call(env)

      if res[0] != 404
        return res
      end

      res = @compilers[2].call(env)

      if res[0] != 404
        return res
      end

      res = @compilers[3].call(env)

      if res[0] != 404
        return res
      end

      @app.call(env)


        # @compilers.reduce(nil) do |response,compiler|
        #   response.tap{ |u| puts "response: #{response.inspect}" } || compiler.call(env).tap { |u| puts "call returned: #{u.inspect}" }
        # end

      # res || @app.call(env)

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
