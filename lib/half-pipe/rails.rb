module HalfPipe
  class Engine < Rails::Engine

    config.before_configuration do
      config.half_pipe = ActiveSupport::OrderedOptions.new
      config.half_pipe.env = ActiveSupport::StringInquirer.new(ENV['HALF_PIPE_ENV'] || 'debug')
    end

  end
end
