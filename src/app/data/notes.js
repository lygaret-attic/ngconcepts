define(function(require) {
    'use strict';

    var notes = [
        { id: 1, content: 'Hello, world.' },
        { id: 2, content: 'Goodbye, world.' }
    ];

    return function($q, $timeout) {
        var svc = {};

        svc.fetchNotes = function() {
            return $timeout(angular.noop, 1000)
                .then(function() {
                    return notes;
                });
        };

        return svc;
    };
});
