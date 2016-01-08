angular.module('magicmirror.controllers', [])

    .controller('WeatherCtrl', ['$log', 'WeatherFactory', function ($log, WeatherFactory){
        var vm = this;
        WeatherFactory.getWeather().then(function (data){
            vm.value = data;
        });

    }])

    .controller('TimeCtrl', ['$log', function ($log){

    }])

    .controller('MainCtrl', ['$log', function ($log){

    }]);

