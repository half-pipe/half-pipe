define(['jquery'], function($) {

  return function() {

    function TodoTitleInput(input) {
      var _this = this;
      this.$input = $(input);
      this.$input.on("keypress", function(e) {
        return _this.keypress(e);
      });
      this.$input.on("blur", function(e) {
        return _this.blur(e);
      });
    }

    TodoTitleInput.prototype.keypress = function(e) {
      if (e.keyCode === 27) {
        return this.handleEscape();
      } else if (e.keyCode === 13) {
        return this.handleEnter();
      }
    };

    TodoTitleInput.prototype.blur = function() {
      return this.submitFormOrDestroy();
    };

    TodoTitleInput.prototype.handleEscape = function() {
      return this.$input.val(this.$input.data("original-value")).parents("li").removeClass("editing");
    };

    TodoTitleInput.prototype.handleEnter = function() {
      this.submitFormOrDestroy();
      return false;
    };

    TodoTitleInput.prototype.submitFormOrDestroy = function() {
      if (this.$input.val().trim().length === 0) {
        return this.destroyTodo();
      } else {
        return this.submitForm();
      }
    };

    TodoTitleInput.prototype.submitForm = function() {
      return this.$input.parents("form").submit();
    };

    TodoTitleInput.prototype.destroyTodo = function() {
      return this.$input.parents("li").find(".destroy").click();
    };

    return TodoTitleInput;

  }

});
