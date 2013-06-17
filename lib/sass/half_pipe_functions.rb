module Sass::Script::Functions

  def image_url(path)
     Sass::Script::String.new("url(#{File.join("/images", path.value)})")
  end

end
