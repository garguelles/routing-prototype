define(['backbone', 'jquery'], function (Backbone, $) {

  var Router = Backbone.Router.extend({
    initialize: function () {
      Backbone.history.start();
      this.outlet = $('#outlet');
      console.log('initializing router');
    },

    routes: {
      '': 'index'
      '/p/:menu': 'navigate'
    },

    index: function () {
      var self = this;

      this._getView('index').then(function (IndexView) {
        var index = new IndexView();
        this.outlet.html(index.render().el);
      });
    },

    navigate: function (menu) {

    },
    _getView: function (view) {
      var dfd = $.Deferred(),
      file = 'menu_views/' + view;

      require([file], function (View) {
        dfd.resolve(View);
      });

      return dfd.promise;
    }
  });

  return Router;

});
