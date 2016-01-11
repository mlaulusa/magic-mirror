angular.module('magicmirror.controllers', [])

    .controller('MainCtrl', ['$log', 'socket', 'WeatherFactory', function ($log, socket, WeatherFactory){
      var vm = this;
      vm.forecast = {};

      WeatherFactory.getForecast().then(function(data){
        // TODO: find a way to get the most recent data and attach it to vm.forecast
        angular.forEach(data, function(value){
          if(this.forecast.date_retreived){
            this.forecast = data;
          } else if(value.date_retreived.getTime() > this.forecast.date_retreived.getTime()){
            this.forecast = value
            $log(data);
          }
        }, vm);
      }, function(err){
        $log.error(err);
      });

      socket.on('update-forecast', function(data){
        vm.forecast = data;
      });
    }]);
