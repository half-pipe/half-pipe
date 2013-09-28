module.exports = {
  "public": {
    options: {
      name: "../../../../../node_modules/almond/almond",
      baseUrl: "<%%= dirs.tmp %>/public/assets/scripts",
      out: "public/assets/scripts/application.js",
      wrap: true,
      insertRequire: ['<%= main_module_name %>'],
      deps: ['<%= main_module_name %>'],
      paths: {
        '<%= main_module_name %>': 'main'
      }
    }
  }
};
