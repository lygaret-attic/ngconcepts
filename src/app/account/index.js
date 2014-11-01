define(function(require) {
    'use strict';

    // # Account UI Definition
    var accounts = angular.module('notes.account',
        [ 'ui.router'
        , require('data/index').name
        ]);

    // # Account Routes
    accounts.config(function($stateProvider) {
        $stateProvider
            .state('account.creds', _.merge({ url: '/' }, require('./creds')))
            .state('account.settings', _.merge({ url: '/settings' }, require('./settings')))
            ;
    });

    return accounts;
});
