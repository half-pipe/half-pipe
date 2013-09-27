module.exports = {
  "public": {
    options: {
      name: "../../../../../node_modules/almond/almond",
      baseUrl: "<%%= dirs.tmp %>/public/assets/scripts",
      out: "public/assets/scripts/application.js",
      wrap: true,
      insertRequire: ['<%= main_module_name %>'],
      deps: ['<%= main_module_name %>'],
      shim: {
        'jquery': { exports: '$' },
        'jquery.textareaAutogrow': {
          deps: ['jquery']
        },
        'pickadate/picker.date': {
          deps: ['pickadate/picker'],
          exports: 'Picker'
        },
        'pickadate/picker.time': {
          deps: ['pickadate/picker'],
          exports: 'Picker'
        },
        'pickadate/picker': {
          deps: ['jquery'],
          exports: 'Picker'
        }
      },
      paths: {
        '<%= main_module_name %>': 'main',
        'flight': '../../../../../bower_components/flight',
        'jquery': '../../../../../bower_components/jquery/jquery',
        'lodash': '../../../../../bower_components/lodash/lodash',
        'jquery-ujs': '../../../../../bower_components/jquery-ujs/src/rails',
        'jquery.fileupload': '../../../../../bower_components/jquery-file-upload/js/jquery.fileupload',
        'jquery.ui.widget': '../../../../../bower_components/jquery-file-upload/js/vendor/jquery.ui.widget',
        'jquery.textareaAutogrow': '../../../../../bower_components/jquery.textareaAutogrow/jquery.textareaAutogrow',
        'bacon': '../../../../../bower_components/bacon/dist/Bacon',
        'bacon.jquery': '../../../../../bower_components/bacon.jquery/dist/bacon.jquery',
        'zeroclipboard': '../../../../../bower_components/zeroclipboard/ZeroClipboard',
        'pickadate': '../../../../../bower_components/pickadate/lib'

      }
    }
  }
};
