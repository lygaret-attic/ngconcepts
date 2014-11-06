define(function(require) {
    'use strict';

    var navigation = angular
        .module('tslib.navigation', ['ui.router'])
        .factory('nav$NavModel', require('./model'))
        ;

    return navigation;
});
