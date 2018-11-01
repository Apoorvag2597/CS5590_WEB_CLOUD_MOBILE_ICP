var app = angular.module('restaurantsApp', []);
app.controller('restaurantCtrl', function ($scope, $http) {
    $scope.results = [];
    $scope.searchRestaurant = function () { // function for the restaurant search
        console.log($scope.location)
        console.log($scope.query)

        $http({
            method: 'GET', //To get the API
            url: "https://api.foursquare.com/v2/venues/search" + // url for the API
                "?client_id=O10H5CV3SMKS0LEN0N1WGKJ50PKX5U30PJCQ5DEMHGTLR1RQ" + //client id
                "&client_secret=FCCJMSPCP1MAX4DHCAXX44W0NTALUS5L2V5IHMMXE0BFNTZB" + //client key
                "&v=20160215&limit=5" +
                "&near=" + $scope.location + //location entered
                "&query=" + $scope.query //query entered

        }).then(function successCallback(response) {
            //  console.log(response);
            $scope.results = response.data.response.venues; //displaying the response
            console.log($scope.results);
        }, function errorCallback(response) {
            console.log(response); //error response

        });
    }

})