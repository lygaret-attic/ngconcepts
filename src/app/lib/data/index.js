define(function(require) {
    'use strict';

    var data = angular
        .module('notes.data', [])
        .factory('data$NotesSvc', require('./notes'));

    return data;
});
