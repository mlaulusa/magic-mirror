angular.module('magicmirror.directives', [])
    .directive('weather', [function () {
        return {
            restrict: 'E',
            scope: {
                value: '@'
            },
            link: function(scope, element, attributes){
                console.log('In link function');
                console.log(attributes.forecast);
            },
            templateUrl: 'templates/directives/weather.html'
        }
    }]);
