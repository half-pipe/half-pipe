require 'sass/importers/bower_importer'
Sass.load_paths << Sass::Importers::BowerImporter.new("components")
