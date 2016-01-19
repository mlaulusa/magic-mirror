angular.module('magicmirror.services', [])

    .factory('WeatherFactory', ['$http', '$log', function ($http, $log) {
        return {
            getForecast: function () {
                return $http.get('/api/forecast').then(function (success) {
                    return success.data;
                }, function (error) {
                    return error;
                })
            },

            getConditions: function () {
                return $http.get('/api/conditions').then(function (success) {
                    return success.data;
                }, function (error) {
                    return error;
                });
            },

            getAstronomy: function () {
                return $http.get('/api/astronomy').then(function (success) {
                    return success.data;
                }, function (error) {
                    return error;
                });
            },

            getAlerts: function () {
                return $http.get('/api/alerts').then(function (success) {
                    return success.data;
                }, function (error) {
                    return error;
                });
            }

        }
    }])

    .factory('socket', ['$rootScope', function ($rootScope) {
        var socket = io.connect();
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
    }]);
