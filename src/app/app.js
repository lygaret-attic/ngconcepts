define(function(require) {
    'use strict';

    /** RADICAL DEPARTURE
      *
      * So, I've been having a really hard time wrapping my head around the concept of
      * angular modules, especially after having used require.js for so long.
      *
      * This is a way to get the separation of require, along with the load-order management,
      * and combine that with angular. It feels good to me, though there's a lot of syntactic
      * ceremony. The incantations would be relatively trivial to wrap up in a library though,
      * so I'm not too concerned about that.
      */

    // # Main Application Definition
    //
    // Setup the angular dependencies. Note the require(module).name; the modules are 
    // providing themselves via the require call, and we're taking the name from the 
    // source.
    var app = angular.module('notes', 
        [ 'ui.router'
        , require('modules/shell/index').name
        , require('modules/main/index').name
        , require('modules/account/index').name
        ]);

    // # Router
    // Configure the top level urls for the various modules 
    // Child states (dot separated) will inherit the base url

    app.config(function ($stateProvider, $urlRouterProvider) {

        // * redirect to the main module by default
        $urlRouterProvider.otherwise('/notes/');

        // * mount the modules on top level paths
        $stateProvider.state('main', { url: '/notes', abstract: true, templateUrl: 'app/modules/main/index.tpl' });
        $stateProvider.state('account', { url: '/account', abstract: true, templateUrl: 'app/modules/account/index.tpl' });

    });

    // # Bootstrap
    // Because requirejs loads scripts asynchronously, we can't use the ngApp directive to bootstrap
    // the application. If we try, it runs before the scripts have been loaded, and the module defined.

    angular.bootstrap(document, [app.name]);

});
