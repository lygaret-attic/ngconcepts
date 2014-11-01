define(function(require) {
    'use strict';

    return {
        template: '{{shell.appName}}, Detail {{vm.note.id}}: {{vm.note.content}} <br/> <a ui-sref="main.list">Back to List</a>',
        resolve    : {
            notes  : function(data$NotesSvc) {
                return data$NotesSvc.fetchNotes();
            }
        },
        controller: function(notes, $stateParams) {
            var vm = this;

            vm.note = _.find(notes, { id: parseInt($stateParams.id) });
            return vm;
        }
    };
});
