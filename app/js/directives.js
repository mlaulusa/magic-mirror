angular.module('magicmirror.directives', [])
.directive('weather', [function(){
  return {
    restrict: 'E',
    scope: {
      forecast: '@'
    },
    templateUrl: 'templates/directives/weather.html'
  }
}]);
