define(function(require) {
    'use strict';

    return {
        templateUrl : 'app/modules/main/editor.tpl',
        controllerAs: 'main$editor',

        controller: function($state, data$NotesSvc) {
            var vm = this;

            vm.content  = '';
            vm.doSave   = function() {
                data$NotesSvc.createNote(vm.content)
                    .then(function() {
                        return $state.go('^.list');
                    });
            };

            return vm;
        }
    };
});
