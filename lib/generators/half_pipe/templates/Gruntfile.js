/*global module:false*/
module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },

    sass: {
      options: {
        style: 'expanded',
        require: ['./config/initializers/sass']
      },
      'tmp/styles/main.css': [
        'app/styles/main.scss'
      ]
    },

    cssmin: {
      'public/styles/main.css': 'tmp/styles/main.css'
    },

    requirejs: {
      scripts: {
        options: {
          almond: true,
          baseUrl: "app/scripts",
          mainConfigFile: "app/scripts/application.js",
          name: "<%= main_module_name %>",
          out: "public/scripts/application.js",
          wrap: true
        }
      }
    },

    clean: ['public/scripts/', 'public/styles', 'tmp/']

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task.
  grunt.registerTask('default', 'build');

  // Build task.
  grunt.registerTask('build', ['jshint', 'sass', 'cssmin', 'copy', 'requirejs']);

};

