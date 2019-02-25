// interpolation = create a string by combione strings and placeholders
// a string resulto of combinations of strings
// {{ }}

var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
    
    $scope.name = 'Thomaz';

    $timeout(function () {
        $scope.name = 'Everybody';
    }, 3000);

}]);


