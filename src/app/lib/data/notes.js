define(function(require) {
    'use strict';

    var idCounter = 0;
    var notes = [
        { id: idCounter++, content: 'Hello, world.' },
        { id: idCounter++, content: 'Goodbye, world.' }
    ];

    var findNote = function(id) {
        return _.find(notes, { id: parseInt(id) });
    };

    return function($q, $timeout) {
        var svc = {};

        svc.createNote = function(content) {
            return $timeout(angular.noop, 100)
                .then(function() {
                    var note = { id: idCounter++, content: content };
                    notes.push(note);
                    return _.clone(note);
                });
        };

        svc.updateNote = function(id, content) {
            return $timeout(angular.noop, 100)
                .then(function() { 
                    var note = findNote(id);
                    note.content = content;
                    return _.clone(note);
                });
        };

        svc.fetchNotes = function() {
            return $timeout(angular.noop, 100)
                .then(function () { return _.clone(notes, true); });
        };

        svc.fetchNote = function(id) {
            return $timeout(angular.noop, 100)
                .then(function () { return _.clone(findNote(id)); });
        };

        svc.deleteNote = function(id) { 
            return $timeout(angular.noop, 100)
                .then(function() {
                    _.remove(notes, { id: parseInt(id) });
                    return _.clone(notes, true);
                });
        };

        return svc;
    };
});
