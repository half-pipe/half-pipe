requirejs.config({
  wrap: true,
  insertRequire: ['todos'],
  deps: ['todos'],
  shim: {
    'jquery': { exports: '$' }
  },
  paths: {
    'todos': 'main',
    'jquery': '../../../../../bower_components/jquery/jquery',
    'jquery-ujs': '../../../../../bower_components/jquery-ujs/src/rails'
  }
})

