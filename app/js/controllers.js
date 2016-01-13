angular.module('magicmirror.controllers', [])

    .controller('MainCtrl', ['$log', 'TestFactory', function ($log, TestFactory){
        var vm = this;
        //vm.test = TestFactory.testFunction();
    }])

    .controller('WeatherCtrl', ['$log', 'socket', 'WeatherFactory', function ($log, socket, WeatherFactory){
        var vm = this;

        vm.test = 'Test string from WeatherCtrl';

        WeatherFactory.getForecast().then(function (data){
            vm.forecast = {};

            if(!data){
              $log.error('Nothing returned from API call');
            } else if(data == 'error'){
              // TODO: I need to find out how to tell the data is an error object
              $log.error(data);
            } else {

              angular.forEach(data, function (value){
                  if(!this.forecast.date_retreived){
                      this.forecast = value;
                  } else if(value.date_retreived > this.forecast.date_retreived){
                      this.forecast = value;
                  }
              }, vm);

            }
        });

        WeatherFactory.getConditions().then(function(data){
          vm.conditions = {};

          angular.forEach(data, function (value){
              if(!this.conditions.date_retreived){
                  this.conditions = value;
              } else if(value.date_retreived > this.conditions.date_retreived){
                  this.conditions = value;
              }
          }, vm);
        });

        socket.on('update-forecast', function (data){
            vm.forecast = data;
        });

        socket.on('update-condition', function(data){
          vm.condition = data;
        });

        socket.on('update-alerts', function(data){
          vm.alerts = data;
        });

        socket.on('update-astronomy', function(data){
          vm.astronomy = data;
        });

    }]);
