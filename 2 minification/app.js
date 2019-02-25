var myApp = angular.module('myApp', []);

// myApp.controller('mainController', function ($scope, $log) {
    
//     $log.info($scope);
// });

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    // transforma o paremetro em array para quando minificar nao dar problema com renome de variavel
    // Isos acontece porque o minificador nunca muda o nome de uma string
    // portanto a string do array tem que estar na mesma ordem do funçao
    $log.info($scope);
}]);