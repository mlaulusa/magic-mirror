angular.module('magicmirror.directives', [])
    .directive('weather', [function () {
        return {
            restrict: 'EA',
            scope: true,
            bindToController: {
            },
            controller: 'WeatherCtrl as weather',
            link: function(scope, element, attributes){
                console.log('In link function');
            },
            templateUrl: 'templates/directives/weather.html'
        }
    }]);
