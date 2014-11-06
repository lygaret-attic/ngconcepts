define(function(require) {
    'use strict';

    // # Main UI Definition
    // Note the same loading structure as in app.js
    var main = angular.module('notes.main', 
        [ 'ui.router'
        , require('lib/data/index').name
        ]);

    // # Module Index
    //
    // A module index provides a place to do state routing, and other configuration
    // that's specific to a small section of the application. 
    //
    // Note the require('./substate') in the state definition calls: each substate provides
    // configuration for itself, keeping resolves and templates with the controllers that use them.

    main.config(function($stateProvider) {
        $stateProvider
            .state('main.list',   _.merge({ url: '/' }, require('./list')))
            .state('main.create', _.merge({ url: '/new' }, require('./create')))
            .state('main.detail', _.merge({ url: '/:id' }, require('./detail')))
            ;
    });

    return main;
});
