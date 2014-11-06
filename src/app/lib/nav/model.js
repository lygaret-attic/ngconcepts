define(function(require) {
    'use strict';

    return [
        '$state',
        function($state) {
            var svc = {};

            svc.roots = function() {
                return $state.get();
            };

            return svc;
    }];
});
