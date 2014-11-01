define(function(require) {

    var navModel = angular.module('tslib.navigation', ['ui.router']);

    navModel.factory('tslib.navigation$NavModel', 
        ['$state',
        function($state) {
            var svc = {};

            svc.roots = function() {
                return $state.get();
            }

            return svc;
        }]);

    return navModel;

});
