define(['backbone', 'text!./templates/header.handlebars'], function (Backbone, template) {
  'use strict';

  return {

    initialize: function () {
      this.$el.html(template);
    },

    remove: function () {
    }
  };

});
