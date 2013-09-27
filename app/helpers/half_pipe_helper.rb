module HalfPipeHelper

  def requirejs_include_tag(script, options={})
    script, options = if Rails.application.config.half_pipe.env.debug?
               ["/components/requirejs/require.js", { data: { main: "/assets/scripts/application.js" } }]
             else
               ["/assets/scripts/application.js", {}]
             end
    javascript_include_tag script, options
  end

end
