define(function(require) {
    'use strict';

    return {
        templateUrl : 'app/modules/main/editor.tpl',
        controllerAs: 'main$editor',

        resolve : {
            note: function(data$NotesSvc, $stateParams) {
                return data$NotesSvc.fetchNote($stateParams.id);
            }
        },
        controller: function(note, $state, data$NotesSvc) {
            var vm = this;

            vm.content  = note.content;
            vm.doSave   = function() {
                data$NotesSvc.updateNote(note.id, vm.content)
                    .then(function() {
                        return $state.go('^.list');
                    });
            };

            return vm;
        }
    };
});
