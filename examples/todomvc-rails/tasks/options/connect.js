var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = {
  options: {
    port: process.env.PORT || "3000",
    middleware: middlewareChooser,
    debug: true
  },
  debug: {
    options: {
      base: ["<%= dirs.tmp %>/public", "<%= bowerOpts.directory || 'bower_components' %>"]
    }
  },
  "public": {
    options: {
      base: ["public/"]
    }
  },
  proxies: [{
    context: '/',
    host: 'localhost',
    port: 3001,
    https: false,
    changeOrigin: false
  }],
  options: {
    debounceDelay: 200
  }
};

function middlewareChooser(connect, options) {
  var assetServer = connect['static'](options.base[0]);
  var bowerServer;

  if(options.base[1]) {
    bowerServer = connect['static'](options.base[1]);
  }

  return [
    runMiddleware(function(request) {
      if(request.url.match(/^\/assets/)) {
        return assetServer;
      } else if(bowerServer && request.url.match(/^\/components/)) {
        request.url = request.url.replace(/^\/components/, "");
        return bowerServer;
      } else {
        return proxy;
      }
    })
  ];
}

function runMiddleware(chooser) {
  return function(request, response, next) {
    var middleware = chooser(request);

    if(middleware) {
      middleware.apply(this, arguments);
    } else {
      next();
    }
  }
}
