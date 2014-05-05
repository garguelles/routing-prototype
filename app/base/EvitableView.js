define(['backbone'], function (Backbone) {
  'use strict';

  var EvitableView = Backbone.View.extend({

    initialize: function (options) {
      if (options) {
        this.sandbox = options.sandbox || {};
      }

      if (this.init && typeof this.init === 'function') {
        this.init();
      }
    },

    close: function () {
      this.remove();
      this.sandbox.stopListening();
    }
  });

  return EvitableView;

});
