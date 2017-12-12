// criar o app angular
var validationApp = angular.module('Mylead', []);

    // criar o controller angular
    validationApp.controller('CadastroControle', function($scope) {

        // função para enviar o formulário depois que a validação estiver ok            
        $scope.submitForm = function() {

            // verifica se o formulário é válido
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };

    });