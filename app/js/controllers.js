angular.module('magicmirror.controllers', [])

    .controller('MainCtrl', ['$log', 'socket', 'WeatherFactory', 'TestFactory', function ($log, socket, WeatherFactory, TestFactory) {
        var vm = this;
        vm.test = TestFactory.testFunction();

        WeatherFactory.getForecast().then(function (data) {
            // TODO: find a way to get the most recent data and attach it to vm.forecast
            vm.forecast = data[0];
            $log.info(data[0]);
        }, function (err) {
            $log.error(err);
        });

        socket.on('update-forecast', function (data) {
            vm.forecast = data;
        });
    }]);
