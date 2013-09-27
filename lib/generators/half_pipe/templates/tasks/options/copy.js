module.exports = {
  prepare: {
    files: [{
      expand: true,
      cwd: 'app/scripts',
      src: '**/*.js',
      dest: '<%%= dirs.tmp %>/prepare/assets/scripts'
    }, {
      expand: true,
      cwd: 'app/images',
      src: '**/*',
      dest: '<%%= dirs.tmp %>/prepare/assets/images'
    }]
  },
  stage: {
    files: [{
      expand: true,
      cwd: '<%%= dirs.tmp %>/prepare',
      src: '**/*',
      dest: '<%%= dirs.tmp %>/public'
    }]
  },
  "public": {
    files: [{
      expand: true,
      cwd: '<%%= dirs.tmp %>/prepare',
      src: ['**/*', '!**/*.js'],
      dest: 'public/'
    }]
  }
};
