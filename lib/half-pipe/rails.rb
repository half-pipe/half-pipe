module HalfPipe
  class Engine < Rails::Engine

    config.before_configuration do
      config.half_pipe = ActiveSupport::OrderedOptions.new
      config.half_pipe.serve_assets = false
      config.half_pipe.quiet_assets = false
    end

    initializer "half_pipe.middleware", after: "build_middleware_stack" do |app|
      app.config.middleware.use Rack::HalfPipe if config.half_pipe.serve_assets
    end

    initializer "half_pipe.quiet_assets", after: "build_middleware_stack" do |app|
      next unless app.config.half_pipe.quiet_assets

      ASSETS_PREFIX = %r{\/(?:images|scripts|styles|components)}

      Rails::Rack::Logger.class_eval do
        def call_with_quiet_assets(env)
          old_logger_level, level = Rails.logger.level, Logger::ERROR
          # Increase log level because of messages that have a low level should not be displayed
          Rails.logger.level = level if env['PATH_INFO'] =~ ASSETS_PREFIX
          call_without_quiet_assets(env)
        ensure
          Rails.logger.level = old_logger_level
        end
        alias_method_chain :call, :quiet_assets
      end

    end

  end
end
