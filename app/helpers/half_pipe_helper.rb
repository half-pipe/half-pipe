module HalfPipeHelper

  def requirejs_include_tag(script, options={})
    script, options = if Rails.application.config.half_pipe.serve_assets
               ["/components/requirejs/require.js", { data: { main: "/scripts/application.js" } }]
             else
               ["/scripts/application.js", {}]
             end
    javascript_include_tag script, options
  end

end
