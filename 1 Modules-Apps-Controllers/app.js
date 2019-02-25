// angular is a global object
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']); 
// A partir daqui tudo que adicionarmos vai ficar dentro dessa variavel myApp para nao poluir o global name space

// declarando um conttroller
myApp.controller('mainController', function($scope, $log, $filter, $resource) { // $ é só parte do nome, nao significa nada especial, Todos seervices do angularJS começa com $
    
    // $log.log("Heloo");
    // $log.info("Heloo");
    // $log.warn("Heloo");
    // $log.debug("Heloo");
    // $log.error("Heloo");

    console.log($resource);

    // $scope.name = 'jhon';
    // $scope.formattedname = $filter('uppercase')($scope.name);

    // $log.warn($scope.name);
    // $log.warn($scope.formattedname);
});

var searchPeople = function(firstName, lastName, Height, age, occupation) {
    return 'JaneDoe';
}

// console.log(searchPeople);