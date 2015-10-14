var app = angular.module('myApp', []);

app.controller('Ctrl', ['$scope', '$window', function ($scope, $window) {

      $scope.myStyleRandom = 'rgb(0,0,0)';

      $scope.doGreeting = function (greeting2) {
            alert(greeting2);
      };

      $scope.pressMe = function (greeting) {
            greeting = 'buttons on buttons on buttons';
            alert(greeting);
      };

      $scope.ngRandom = function () {
            var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
                  (Math.floor(Math.random() * 256)) + ',' +
                  (Math.floor(Math.random() * 256)) + ')';
            $scope.myStyleRandom = hue;
      }

      $scope.persons = [
            'Taylor',
            ' Walter',
            ' Ethan',
            ' Jeff',
            ' Matt',
            ' David'
      ];


}]);