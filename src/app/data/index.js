define(function(require) {
    'use strict';

    var data = angular.module('notes.data', []);

    data.factory('data$NotesSvc', require('./notes'));

    return data;
});
