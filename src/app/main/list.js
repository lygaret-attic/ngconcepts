define(function(require) {
    'use strict';

    return {
        template: 'List: <div ng-repeat="n in main$list.notes"><a ui-sref="main.detail({ id: n.id })">{{n.content}}</a></div>',
        resolve    : {
            notes  : function(data$NotesSvc) {
                return data$NotesSvc.fetchNotes();
            }
        },
        controllerAs: 'main$list',
        controller : function(notes) {
            this.notes = notes;
        }
    };
});
