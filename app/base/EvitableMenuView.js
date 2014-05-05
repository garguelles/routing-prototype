define(['base/EvitableView'], function (EvitableView) {
  'use strict';

  var EvitableMenuView = EvitableView.extend({

    stopWidgets: function () {
      if (this.widgets) {
        this.widgets.stop();
      }
    }

  });

  return EvitableMenuView;

});
