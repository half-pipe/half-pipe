'use strict';

define('blog',
  [
    'features/posts'
  ],

  function(Posts){

    function initialize(){
      Posts.attachTo("#posts");
    }

    return initialize;

  }
);
