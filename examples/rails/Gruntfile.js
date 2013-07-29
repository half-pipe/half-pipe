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
      'public/scripts/require.js': 'components/requirejs/require.js'
    },

    clean: ['public/assets/', 'tmp/']

  });

  // Default task.
  grunt.registerTask('default', 'build');

  // Build task.
  grunt.registerTask('build', ['jshint', 'sass', 'cssmin', 'copy', 'requirejs']);

};

