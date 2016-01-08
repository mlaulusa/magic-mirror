angular.module('magicmirror', [
        'magicmirror.services',
        'magicmirror.controllers',

        'ui.router'
    ])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {

                    '': {
                        template: '<p>{{main.value}}</p>',
                        controller: 'MainCtrl as main'
                    },

                    'weather': {
                        templateUrl: 'templates/weather.html',
                        controller: 'WeatherCtrl as weather'
                    },

                    'time': {
                        templateUrl: 'templates/time.html',
                        controller: 'TimeCtrl as time'
                    }
                }
            });
    }])

    .run(function (){
        console.log('Run once on app start');
    });
