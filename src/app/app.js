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
        , require('lib/navigationModel').name
        , require('data/index').name
        , require('main/index').name
        , require('account/index').name
        ]);

    // # Router
    // Configure the top level urls for the various modules 
    // Child states (dot separated) will inherit the base url

    app.config(function ($stateProvider, $urlRouterProvider) {

        // * redirect to the main module by default
        $urlRouterProvider.otherwise('/');

        // * mount the modules on top level paths
        $stateProvider.state('main', { url: '/', abstract: true, templateUrl: 'app/main/index.tpl' });
        $stateProvider.state('account', { url: '/account', abstract: true, templateUrl: 'app/account/index.tpl' });

    });

    // # Shell controller
    // This is the vm for the root stuffs.
    
    app.controller('shellCtl', 
        ['tslib.navigation$NavModel',
        function(navModel) {
            var vm = this;

            vm.appName = "example notes app";
            vm.navroots = navModel.roots();

            return vm;
        }]);

    // # Bootstrap
    // Because requirejs loads scripts asynchronously, we can't use the ngApp directive to bootstrap
    // the application. If we try, it runs before the scripts have been loaded, and the module defined.

    angular.bootstrap(document, [app.name]);

});
