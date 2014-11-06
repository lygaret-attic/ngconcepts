define(function(require) {
    'use strict';

    return {
        templateUrl: 'app/modules/main/list.tpl',

        controllerAs: 'main$list',

        resolve    : {
            notes  : function(data$NotesSvc) {
                return data$NotesSvc.fetchNotes();
            }
        },

        controller : function(notes, data$NotesSvc) {
            var vm = this;

            vm.notes = notes;
            vm.removeNote = function(id) {
                return data$NotesSvc    
                    .deleteNote(id)
                    .then(function() { 
                        _.remove(vm.notes, { id: id });
                    });
            };
        }
    };
});
