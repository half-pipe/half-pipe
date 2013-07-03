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
      options: {
        baseUrl: "app/scripts",
        mainConfigFile: "app/scripts/application.js",
        name: "main",
        out: "public/scripts/application.js"
      },
      scripts: {
      }
    },

    copy: {
      // TODO: Find a way to have almond bootstrap require
      'public/scripts/require.js': 'bower_components/requirejs/require.js'
    },

    clean: ['public/assets/', 'tmp/']

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task.
  grunt.registerTask('default', 'build');

  // Build task.
  grunt.registerTask('build', ['jshint', 'sass', 'cssmin', 'copy', 'requirejs']);

};

