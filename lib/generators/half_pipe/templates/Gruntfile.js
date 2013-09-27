/*global module:false*/
module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks('grunt-connect-proxy');

  function config(name){
    return require("./tasks/options/" + name);
  }

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    dirs: grunt.file.readJSON('config/half-pipe.json'),
    bowerOpts: grunt.file.readJSON('.bowerrc'),
    jshint: config("jshint"),
    sass: config("sass"),
    cssmin: config("cssmin"),
    requirejs: config("requirejs"),
    connect: config("connect"),
    copy: config("copy"),
    watch: config("watch"),
    clean: ['<%%= dirs.tmp %>']
  });

  // Default task.
  grunt.registerTask('default', 'build:debug');

  grunt.registerTask('build:debug', ['copy:prepare', 'sass:debug', 'copy:stage']);
  grunt.registerTask('build:public', ['copy:prepare', 'sass:public', 'copy:stage', 'requirejs:public', 'copy:public']);

  grunt.registerTask('server:debug', ['build:debug', 'configureProxies', 'connect:debug', 'watch:debug']);
  grunt.registerTask('server:public', ['build:public', 'configureProxies', 'connect:public:keepalive']);

};

