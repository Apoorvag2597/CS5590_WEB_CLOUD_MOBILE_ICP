

var angularTodo = angular.module('angularTodo', []);
// controller
angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.items = ["Visit India", "Visit Paris"];

    // Write code to push new item
    $scope.submitNewItem = function () {  //function for add button is created
        console.log("submitNewItem")
        $scope.items.push($scope.todoitem);
    };

    // Write code to complete item
    $scope.completeItem = function (index,event) { //function for complete button is created
        console.log(event);
        event.currentTarget.parentElement.firstElementChild.classList.add("text-strike")

    };

    // Write code to delete item

    $scope.deleteItem = function (index) { //function for delete button is created


        console.log(index)

        $scope.items.splice(index)

    };
}]);
