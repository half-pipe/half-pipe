"use strict";

define(['flight/lib/component'], function(defineComponent){

  return defineComponent(posts);

  function posts(){

    this.defaultAttrs({
      postSelector: ".post"
    });

    this.visitPost = function(e){
      e.preventDefault();
      var url = $(e.target).attr("href");
      history.pushState(null, "Post", url);
      $(document).trigger("postChosen");
    };

    this.after("initialize", function(){
      this.on("click", {
        postSelector: this.visitPost
      });
    });

  }

});
