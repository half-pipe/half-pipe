module.exports = {
  options: {
    name: "../../../../../node_modules/almond/almond",
    out: "<%= dirs.tmp %>/public/assets/scripts/application.js",
    baseUrl: "<%= dirs.tmp %>/prepare/assets/scripts",
    mainConfigFile: "config/build.js"
  },
  debug: {
    options: {
      useSourceUrl: true,
      optimize: "none",
    }
  },
  "public": {
    options: {
      optimize: "uglify2"
    }
  }
};
