module.exports = {
  options: {
    style: 'expanded',
    require: ['sass-css-importer'],
    loadPath: ['<%%= bowerOpts.directory || "bower_components" %>'],
    bundleExec: true
  },
  debug: {
    src: 'app/styles/main.scss',
    dest: '<%%= dirs.tmp %>/prepare/assets/styles/main.css'
  },
  "public": {
    options: {
      style: 'compressed'
    },
    src: 'app/styles/main.scss',
    dest: '<%%= dirs.tmp %>/prepare/assets/styles/main.css'
  }
};
