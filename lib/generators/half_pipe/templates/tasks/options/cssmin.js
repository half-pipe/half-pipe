module.exports = {
  compress: {
    options: {
      keepSpecialComments: '*',
      noAdvanced: true, // turn advanced optimizations off until the issue is fixed in clean-css
      report: 'min',
      selectorsMergeMode: 'ie8'
    },
    src: '<%= dirs.tmp %>/public/assets/styles/main.css',
    dest: '<%= dirs.tmp %>/public/assets/styles/main.css'
  }
};
