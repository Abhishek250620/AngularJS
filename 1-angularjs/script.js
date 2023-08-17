/// <reference path="angular.min.js" />

var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope){
$scope.message = "Angular Tutorial"
});

myApp.controller("controller",function($scope){
    employee ={
        firstName:"John",
        lastName:"Ford",
        age:34
    }
    $scope.employe=employee;
})