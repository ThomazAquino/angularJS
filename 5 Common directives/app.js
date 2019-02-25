// directives = Is a instruction to angular JS to manipulate a piece of the DOM
//digest loop, adiciona eventt listenner em todas variaveis criadas no scope e procura por mudanças ,compara o newvalue com o oldvalue se tiver mudanças atualiza todas as variaveis. 


var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {


    $scope.NomeQualquer = '';

    $scope.lowerCaseCoisas = function () {
        return $filter('lowercase')($scope.NomeQualquer);
    };

    $scope.characters = 5; // Cria variavel com valor 5

    $scope.rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must be used elsewhere" },
        { rulename: "Must be cool" }
    ];
    
}]);

