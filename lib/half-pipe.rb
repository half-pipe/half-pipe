require "half-pipe/version"

if defined?(Rails)
  require "half-pipe/rails"

  ActionView::Helpers::AssetUrlHelper::ASSET_PUBLIC_DIRECTORIES.tap do |dirs|
    dirs[:image]      = '/assets/images'
    dirs[:javascript] = '/assets/scripts'
    dirs[:stylesheet] = '/assets/styles'
  end
end

require "rack/half-pipe"

module Half
  module Pipe
    # Your code goes here...
  end
end
