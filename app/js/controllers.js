angular.module('magicmirror.controllers', [])

    .controller('MainCtrl', ['$log', 'TestFactory', function ($log, TestFactory) {
        var vm = this;
        //vm.test = TestFactory.testFunction();
    }])

    .controller('WeatherCtrl', ['$log', 'socket', 'WeatherFactory', function($log, socket, WeatherFactory){
      var vm = this;

      vm.test = 'Test string from WeatherCtrl';

      WeatherFactory.getForecast().then(function(success){
        vm.forecast = {};

        angular.forEach(success, function(value){
          if(!this.forecast.date_retreived){
            this.forecast = value;
          } else if(value.date_retreived > this.forecast.date_retreived){
            this.forecast = value;
          }
        }, vm);

      }, function(error){
        $log.error(err);
      });

        socket.on('update-forecast', function (data) {
            vm.forecast = data;
        });

    }]);
