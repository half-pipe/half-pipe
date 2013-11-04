module HalfPipeHelper

  def javascript_include_tag(source, options={})
    base = File.basename(source)
    source = File.join("/assets", "scripts", base)
    super source, options
  end

  def image_tag(source, options={})
    if source[0] != "/"
      base = File.basename(source)
      source = File.join("/assets", "images", base)
    end

    super(source, options)
  end

end
