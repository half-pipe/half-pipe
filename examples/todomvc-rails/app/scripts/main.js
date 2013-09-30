'use strict';

define('todos',
  [
    'todo-title-input',
    'jquery',
    'jquery-ujs'
  ],

  function(TodoTitleInput, $){

    // Add your initialization code here

    $.fn.todoTitleInput = function() {
      return this.each(function() {
        var data;
        data = $.data(this, 'todoTitleInput');
        if (!data) {
          return data = $.data(this, 'todoTitleInput', new TodoTitleInput(this));
        }
      });
    };

    $(document).on("keypress", "[data-behavior~=submit_on_enter]", function(e) {
      if (e.keyCode === 13) {
        if ($(this).val().trim().length) {
          $(this).closest("form").submit();
        }
        return e.preventDefault();
      }
    });

    $(document).on("click", "[data-behavior~=submit_on_check]", function() {
      return $(this).closest("form").submit();
    });

    $(document).on("dblclick", "[data-behavior~=todo_title]", function() {
      $(this).closest("li").addClass("editing").siblings().removeClass("editing");
      return $(this).closest("li").find("[data-behavior~=todo_title_input]").focus();
    });

    $(document).on("focus", "[data-behavior~=todo_title_input]", function() {
      return $(this).todoTitleInput();
    });

    $(document).on("ajax:before", "form[data-remote]", function() {
      return $(this).addClass("submitting");
    });

    $(document).on("ajax:complete", "form[data-remote]", function() {
      return $(this).removeClass("submitting");
    });
  });
