angular.module('magicmirror.directives', [])
    .directive('weather', [function (){
        return {
            restrict: 'EA',
            scope: true,
            bindToController: {},
            controller: 'WeatherCtrl as weather',
            link: function (scope, element, attributes){
                console.log('In link function');
            },
            templateUrl: 'templates/directives/weather.html'
        }
    }])
    .directive('time', [function(){
        return {
            restrict: 'EA',
            scope: true,
            bindToController: {},
            controller: 'TimeCtrl as time',
            templateUrl: 'templates/directives/time.html'
        }
    }])
    .directive('alerts', [function(){
      return {
        restrict: 'EA',
        scope: true,
        bindToController: {},
        controller: 'AlertCtrl as alerts',
        templateUrl: 'templates/directives/alerts.html'
      }
    }]);
