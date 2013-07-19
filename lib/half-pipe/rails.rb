module HalfPipe
  class Engine < Rails::Engine

    config.before_configuration do
      config.half_pipe = ActiveSupport::OrderedOptions.new
      config.half_pipe.serve_assets = false
    end

    initializer "half_pipe.middleware", after: "build_middleware_stack" do |app|
      app.config.middleware.use Rack::HalfPipe if config.half_pipe.serve_assets
    end

  end
end
