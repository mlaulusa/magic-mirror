angular.module('magicmirror.services', [])

    .factory('WeatherFactory', ['$http', function ($http){
        return {
            getWeather: function (){
                return $http.get('').then(function (success){
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
