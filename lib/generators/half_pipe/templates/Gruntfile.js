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
    rails: config("rails"),
    clean: ['<%%= dirs.tmp %>']
  });

  // Default task.
  grunt.registerTask('default', 'build:debug');

  // Configure asset building pipeline
  grunt.registerTask('build', ['build:debug']);
  grunt.registerTask('build:debug', ['clean', 'copy:prepare', 'requirejs:debug', 'sass:debug']);
  grunt.registerTask('build:public', ['clean', 'copy:prepare', 'requirejs:public', 'sass:public', 'copy:finalize']);

  // Configure preview server
  grunt.registerTask('server', ['server:debug']);
  grunt.registerTask('server:debug', ['build:debug', 'configureProxies', 'connect:debug', 'rails:server:start', 'watch']);
  grunt.registerTask('server:public', ['build:public', 'configureProxies', 'connect:public:keepalive']);

};

