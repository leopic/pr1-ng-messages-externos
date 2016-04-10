angular.module('proyectoUno', [
        'ngMessages'
    ])
    .controller('ProyectoUnoController',
        ['$scope', function ($scope) {
            $scope.init = function() {

            };

            $scope.enviar = function enviar() {
                console.debug("Felicidades!");
            };

            $scope.init();
        }])
;
