/*global module:false*/
module.exports = function(grunt) {


  var sass = require("grunt-contrib-sass");

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
      'tmp/assets/styles.css': [
        'app/styles/main.scss'
      ]
    },

    cssmin: {
      'public/assets/styles.css': 'tmp/assets/styles.css'
    },

    clean: ['public/assets/', 'tmp/']

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['connect:server', 'watch']);

  // Developement task.
  grunt.registerTask('dev', ['jshint:gruntfile', 'sass']);

  // Build task.
  grunt.registerTask('build', ['jshint', 'sass', 'cssmin']);

};

