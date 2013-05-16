require.config({
  baseUrl: '/scripts',
  paths: {
    'blog': 'main',
    'flight': '/components/flight',
    'jquery': '/components/jquery/jquery'
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger',
    'flight/tools/debug/debug',
    'jquery'
  ],

  function(compose, registry, advice, withLogging, debug){
    debug.enable(true);
    compose.mixin(registry, [advice.withAdvice, withLogging]);
    require(['blog'], function(initialize){
      initialize();
    });
  }
);
