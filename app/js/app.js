angular.module('magicmirror', [
        'magicmirror.services',
        'magicmirror.controllers',
        'magicmirror.directives',

        'btford.socket-io'
    ])

    //.config([])

    .run(function (){
        console.log('Run once on app start');
    });
