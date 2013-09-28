module Sass::Script::Functions

  def image_url(path)
     Sass::Script::String.new("url(#{File.join("/assets/images", path.value)})")
  end

  def image_path(path)
     Sass::Script::String.new(File.join("/assets/images", path.value))
  end

end
