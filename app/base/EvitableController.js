define(['underscore'], function (_) {
  'use strict';

  /**
   * controller keeps track of the widget views
   * responsible for cleaning up views and models
   * responsible for rendering the right views
   **/
  var EvitableController = function (params) {
    this.views = [];
    this.activeView = {};
    this.$el;
    this.utils = {};
  };

  // transition to another view within the widget
  // @param view: view object to render
  EvitableController.prototype.transitionTo = function (view, params) {

  };

  // clean up all active and open views with their coresponding
  // models, sandbox and or collection
  EvitableController.prototype.cleanUp = function () {

  };

  // starts the widget and its default view
  // this method determines the state of the widget
  // (which view to render, which model to use, etc...)
  EvitableController.prototype.start = function (params) {

  };

  // extend method for controller
  EvitableController.extend = function (params) {
    console.log('extending controller', params, this.prototype);
    this.prototype = _.extend({}, this.prototype, params);

    return this;
  };

  EvitableController.getView = function (viewName) {
    var dfd = $.deferred();

    require([viewName], function (View) {

      dfd.resolve(view);
    });

    return dfd.promise;
  };

  return EvitableController;


});
