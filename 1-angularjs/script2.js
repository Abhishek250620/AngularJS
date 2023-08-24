///<reference path="angular.min.js" />

var app=angular.module("myModule",[]).controller("myController",function($scope){
    company = {
        name:"Acuver",
        location:"Bangalore",
        logo:"acuver.png"
    }

    $scope.company=company;
})