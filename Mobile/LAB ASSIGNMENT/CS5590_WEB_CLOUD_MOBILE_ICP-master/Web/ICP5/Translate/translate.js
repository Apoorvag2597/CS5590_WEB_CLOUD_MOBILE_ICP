var app = angular.module('translateText', []);
app.controller('translateCtrl', function ($scope,$http) {
    var text,dest;

    $scope.languages= [ //languages required and their keys
        {"lang":"Telugu","abb":"te"},
        {"lang":"English","abb":"en"},
        {"lang":"Kannada","abb":"kn"},
        {"lang":"Spanish","abb":"es"},
        {"lang":"Arabic","abb":"ar"}
    ];
    $scope.translateText = function () {
        text=$scope.translate;
        var source = $scope.lang; //source language
        var target=$scope.selectedlang; //target language
        //var target=$scope.getCode(dest);

        $http({
            method: 'GET', //To get the API key
            url: "https://translate.yandex.net/api/v1.5/tr.json/translate?" + // url for the API key
                "key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e."
                +
                "c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text=" + text +"&" +
                "lang="+source+"-" +target+ "&[format=plain]&[options=1]&[callback=set]"
        }).then(function successCallback(response) {
            console.log(response);
            $scope.result = response.data.text[0] // to display the result
        }, function errorCallback(response) {
            console.log(response); // error 

        });
    }

})