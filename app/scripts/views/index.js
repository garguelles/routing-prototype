define(['base/EvitableMenuView', 'text!../templates/index.handlebars'], function (EvitableMenuView, template) {

  var IndexView = EvitableMenuView.extend({
    template: template,
    init: function () {
      this.$el.html(this.template);
      this.sandbox = window.app.sandboxes.create('indexsandbox');
    },

    render: function () {
      this.widgets = this.sandbox.start(this.$el);

      console.log('return widgets', this.widgets);
      /*var self = this;
      setTimeout(function () {
        self.widgets.stop();
      }, 8000);*/
      return this;
    }

  });

  return IndexView;
});
