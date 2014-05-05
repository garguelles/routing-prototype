define(['./views/home-one', './controller'], function (HomeOneView, Controller) {
  'use strict';

  return {
    initialize: function () {
      var homeOneView = new HomeOneView({ sandbox: this.sandbox });
      this.html(homeOneView.render().el);
      var controller = new Controller();
      console.log('testing Controller ', controller);
    }
 };

});
