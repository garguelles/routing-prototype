require.config({
  paths: {
    eventemitter: 'bower_components/eventemitter2/lib/eventemitter2',
    text: 'bower_components/requirejs-text/text',
    aura: 'bower_components/aura/lib',
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore',
    backbone: 'bower_components/backbone/backbone',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    menu_views: 'scripts/views',
    main: 'scripts',
    base: 'base'
  },

  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    }
  }
});

require(['aura/aura', 'main/Router', 'bootstrap'], function (Aura, Router) {
  'use strict';

  window.app = new Aura({ debug: {enable: true} });
  /*
  Add your extensions here.
  app.use('extensions/sample');
  */


  app.start({ components: 'body' }).then(function () {
    console.log('Aura started...');

    var router = new Router();
  });


});
