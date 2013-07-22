require 'rack/asset_compiler'
require 'coffee-script'

module Rack
  class CoffeeCompiler < AssetCompiler
    LOCK = Mutex.new

    def initialize(app, options={})
      options = {
        :url => '/javascripts',
        :content_type => 'text/javascript',
        :source_extension => 'coffee',
        :alert_on_error => ENV['RACK_ENV'] != 'production',
        :lock => LOCK
      }.merge(options)

      @alert_on_error = options[:alert_on_error]
      @lock = options[:lock]
      super
    end

    def compile(source_file)
      if @lock
        @lock.synchronize{ unsynchronized_compile(source_file) }
      else
        unsynchronized_compile(source_file)
      end
    end

    def unsynchronized_compile(source_file)
      begin
        CoffeeScript.compile(::File.read(source_file))
      rescue CoffeeScript::CompilationError => e
        if @alert_on_error
          error_msg = "CoffeeScript compilation error in #{source_file}.coffee:\n\n #{e.to_s}"
          "window.alert(#{error_msg.to_json});"
        else
          raise e
        end
      end
    end
  end
end

