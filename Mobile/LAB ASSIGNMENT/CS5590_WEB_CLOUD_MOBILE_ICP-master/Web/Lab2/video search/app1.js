var app=angular.module('youtube_api',[]);
app.controller('myControl',function($scope,$http) {
    $scope.res = [];
    $scope.onclick = function () { //on click function for search button
        console.log($scope.search)
        /*
    * This method will call when the user clicks on search button after entering the search key word.
    * In this method we will call the Youtube API and get the results and assign the result to $scope.res variable.
    */
        $http({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params:{
                part: "snippet",
                type: "video",
                q: $scope.search,
                maxResults: 30,
                order: "viewCount",
                publishedAfter: "2012-01-01T00:00:00Z",
                key:'AIzaSyARq9PMXKcLUlb4FfhPooTXqP25tE7sFSA'
            }
        }).then(function
            successCallback(response) {
            console.log(response);
            $scope.res = response.data.items;
        }, function
            errorCallback(response) { //if there is an error control goes to errorCallback function
            console.log(response);
        });
    }
});


