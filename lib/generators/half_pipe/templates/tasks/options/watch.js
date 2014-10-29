module.exports = {
  debug: {
    files: ['app/views/**/*', 'app/scripts/**/*', 'app/styles/**/*', 'config/build.js'],
    tasks: ['build:debug'],
    options: {
      livereload: true
    }
  },
  rails: {
    files: ['config/**/*.rb', 'lib/**/*.rb', 'Gemfile.lock'],
    tasks: ['rails:server:restart'],
    options: {
      interrupt: true
    }
  }
};
