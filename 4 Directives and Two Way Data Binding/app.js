// directives = Is a instruction to angular JS to manipulate a piece of the DOM
//digest loop, adiciona eventt listenner em todas variaveis criadas no scope e procura por mudanças ,compara o newvalue com o oldvalue se tiver mudanças atualiza todas as variaveis. 


var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {
    $scope.NomeQualquer = '';

    $scope.lowerCaseCoisas = function () {
        return $filter('lowercase')($scope.NomeQualquer);
    }

    $scope.$watch('NomeQualquer', function (newValue, OldValue) {
        
        console.info("changed..")
        console.log("Old: " + OldValue);
        console.log("New: " + newValue);
    });
    /* 
    setTimeout(function () {
        $scope.NomeQualquer = 'Novo Valor difigato!';
        console.log('change');
    }, 3000)
    esse setTGi9meout nao vai atualizar o dom porque nao passar pelo digest loop, o set timeout abre uma nova tread e o angular nao ve a mudança.  */
    
    setTimeout(function () {
        $scope.$apply(function () { // dessa fokrma eu forço a mundaça para ir pro digest loop
            $scope.NomeQualquer = 'Novo Valor difigato!';
            console.log('change');
        });
    }, 3000);

    // ou

    $timeout(function () { // com o $timout nao precisa fazer $aplly
        $scope.NomeQualquer = 'Novo 2!';
            console.log('change 2');
    }, 4000)
}]);

