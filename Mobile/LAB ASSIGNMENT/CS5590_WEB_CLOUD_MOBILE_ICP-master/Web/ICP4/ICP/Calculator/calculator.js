var app = angular.module('calculator', []);
app.controller('calcController', function ($scope) {
    var x;
    $scope.calculate = function () {

        if ($scope.operator == '+') { // addition operation

            x = parseInt($scope.a) + parseInt($scope.b);
        }
        if ($scope.operator == '-') { // subtraction operation
            x = $scope.a - $scope.b;
        }
        if ($scope.operator == '*') { // multiplication operation
            x = $scope.a * $scope.b;
        }
        if ($scope.operator == '/') { //divide oprration
            x = $scope.a / $scope.b;
        }
        if ($scope.operator == '%') { //modulus operation
            x= $scope.a % $scope.b;
        }

        $scope.y = x;
    }
})