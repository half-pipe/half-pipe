/*global module:false*/
module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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

  // Default task.
  grunt.registerTask('default', 'build');

  // Build task.
  grunt.registerTask('build', ['jshint', 'sass', 'cssmin', 'requirejs']);

};

