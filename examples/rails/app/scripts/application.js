require.config({
  baseUrl: '/scripts',
  paths: {
    'blog': 'main'
  }
});

require(
  [
    // Add your dependencies here
    'blog'
  ],

  function(initialize/*, modules */){
    initialize();
  }
);
