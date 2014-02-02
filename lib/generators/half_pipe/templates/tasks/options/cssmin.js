module.exports = {
  compress: {
    options: {
      keepSpecialComments: '*',
      noAdvanced: true, // turn advanced optimizations off until the issue is fixed in clean-css
      report: 'min',
      selectorsMergeMode: 'ie8'
    },
    src: [
      'tmp/styles/main.css'
    ],
    dest: 'public/styles/main.css'
  }
};