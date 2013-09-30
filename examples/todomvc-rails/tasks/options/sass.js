module.exports = {
  options: {
    require: ['sass-css-importer'],
    loadPath: ['<%= bowerOpts.directory || "bower_components" %>'],
    bundleExec: true,
  },
  debug: {
    src: '<%= dirs.tmp %>/prepare/assets/styles/main.scss',
    dest: '<%= dirs.tmp %>/public/assets/styles/main.css',
    options: {
      style: 'expanded'
    }
  },
  "public": {
    src: '<%= dirs.tmp %>/prepare/assets/styles/main.scss',
    dest: '<%= dirs.tmp %>/public/assets/styles/main.css',
    options: {
      style: 'compressed'
    }
  }
};
