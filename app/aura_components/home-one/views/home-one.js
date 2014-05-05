define(['base/EvitableView', 'text!../templates/home-one.handlebars'], function (EvitableView, template) {
  'use strict';

  var HomeOne = EvitableView.extend({
    template: template,
    init: function () {
    },
    render: function () {
      this.$el.html(this.template);
      return this;
    }
  });

  return HomeOne;
});
