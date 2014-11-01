define(function(require) {
    'use strict';

    return {
        template: 'Settings something or other.',
        resolve: {
            timer: function($timeout) {
                return $timeout(angular.noop, 1000);
            }
        },
        controller: function(timer, $stateParams) {
            var vm = this;
            return vm;
        }
    }

});
