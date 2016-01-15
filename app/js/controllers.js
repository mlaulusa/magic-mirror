angular.module('magicmirror.controllers', [])

    .controller('WeatherCtrl', ['$log', 'socket', 'WeatherFactory', function ($log, socket, WeatherFactory){
        var vm = this;

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

        WeatherFactory.getConditions().then(function (data){

            vm.conditions = {};

            angular.forEach(data, function (value){
                if(!this.conditions.date_retreived){
                    this.conditions = value;
                } else if(value.date_retreived > this.conditions.date_retreived){
                    this.conditions = value;
                }
            }, vm);

        $log.info(vm.conditions.icon);
        });

        socket.on('update-forecast', function (data){
            vm.forecast = data;
        });

        socket.on('update-condition', function (data){
            vm.conditions = data;
        });

    }])

    .controller('TimeCtrl', ['$log', '$interval', 'socket', 'WeatherFactory', function ($log, $interval, socket, WeatherFactory){
        var vm = this;

        WeatherFactory.getMoon().then(function(data){
            vm.astronomy = {};

            // TODO: Find a way to determine if it is an error and make sure not to set vm.moon if it is an error
            angular.forEach(data, function (value){
                if(!this.astronomy.date_retreived){
                    this.astronomy = value;
                } else if(value.date_retreived > this.astronomy.date_retreived){
                    this.astronomy = value;
                }
            }, vm);
            $log.info(vm.astronomy);

        });

        $interval(function (){
            vm.time = Date.now();
        }, 500);

        socket.on('update-astronomy', function (data){
            vm.astronomy = data;
        });

    }])

    .controller('AlertCtrl', ['$log', 'socket', 'WeatherFactory', function($log, socket, WeatherFactory){

      var vm = this;

      vm.alerts = ['ALERT', 'ANOTHER ALERT', 'GIVE US ANOTHER ONE', 'WARNING!!'];

        socket.on('update-alerts', function (data){
            vm.alerts = data;
        });

    }]);
