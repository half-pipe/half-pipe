requirejs.config({
  wrap: true,
  insertRequire: ['<%= main_module_name %>'],
  deps: ['<%= main_module_name %>'],
  shim: {
  },
  paths: {
    '<%= main_module_name %>': 'main',
    'jquery': '../../../../../bower_components/jquery/jquery',

    'jquery-ujs': '../../../../../bower_components/jquery-ujs/src/rails'

  }
})

