angular.module('magicmirror.services', [])

    .factory('WeatherFactory', ['$http', function ($http){
        return {
            getWeather: function (){
                return $http.get('https://api.wunderground.com/api/7a94dbe2d672c2e0/conditions/q/UT/Provo.json').then(function (success){
                    return success;
                }, function (error){
                    return error;
                })
            }

        }
    }])

    .factory('TestFactory', [function (){
        return {
            test: function (){
                return 'Test string';
            }
        }
    }]);
