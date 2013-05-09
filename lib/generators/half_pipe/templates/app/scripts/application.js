require.config({
  baseUrl: '/scripts',
  paths: {
    '<%= main_module_name %>': 'main'
  }
});

require(
  [
    // Add your dependencies here
    '<%= main_module_name %>'
  ],

  function(initialize/*, modules */){
    initialize();
  }
);
