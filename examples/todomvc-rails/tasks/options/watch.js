module.exports = {
  debug: {
    files: ['app/scripts/**/*', 'app/styles/**/*', 'config/build.js'],
    tasks: ['build:debug']
  },
  rails: {
    files: ['config/**/*.rb', 'lib/**/*.rb', 'Gemfile.lock'],
    tasks: ['rails:server:restart'],
    options: {
      interrupt: true
    }
  }
};
