module HalfPipeHelper

  def requirejs_include_tag(script, options={})
    root = if Rails.application.config.half_pipe.serve_assets then "components/requirejs" else "scripts" end
    javascript_include_tag "/#{root}/require.js", { data: { main: script } }
  end

end
