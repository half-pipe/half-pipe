module Sass
  module Importers
    class BowerImporter < Sass::Importers::Filesystem

      SUPPORTED_EXTNAMES = ["css", "scss", "sass"]

      protected

      def extensions
        super.merge('css' => :scss)
      end

      def possible_files(name)
        if name.start_with? "bower!"
          name.sub!(/^bower!/, "")

          path = File.join(@root, name)
          SUPPORTED_EXTNAMES.each do |extname|
            lookup = "#{path}.#{extname}"
            if File.exist? lookup
              return [[lookup, extensions[extname]]]
            end
          end
        else
          super
        end
      end

    end
  end
end

