# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'half-pipe/version'

Gem::Specification.new do |gem|
  gem.name          = "half-pipe"
  gem.version       = Half::Pipe::VERSION
  gem.authors       = ["Joe Fiorini"]
  gem.email         = ["joe@joefiorini.com"]
  gem.description   = %q{Grunt-based workflow for your Rails assets}
  gem.summary       = %q{Gem to replace the Rails asset pipeline with a Grunt.js-based workflow, providing dependencies via Bower.}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]

  gem.add_dependency "rack-asset-compiler"
  gem.add_dependency "sass"
end
