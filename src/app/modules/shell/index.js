define(function(require) {
    'use strict';

    var shell = angular.module('shell', 
        [ require('lib/nav/index').name
        ]);

    shell.controller('shell$ShellCtl', function(nav$NavModel) {
        var vm = this;

        vm.roots = nav$NavModel.roots();

        return vm;
    });

    return shell;
});

