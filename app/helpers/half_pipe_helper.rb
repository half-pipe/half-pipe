module HalfPipeHelper

  def requirejs_include_tag(script, options={})
    root = if Rails.env.production? then "client" else "components/requirejs" end
    javascript_include_tag "/#{root}/require.js", { data: { main: script } }
  end

end
