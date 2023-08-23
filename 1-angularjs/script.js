// / <reference path="angular.min.js" />

var myApp = angular.module("myModule",[]);

// myApp.controller("myController",function($scope){
// $scope.message = "Angular Tutorial"
// });

myApp.controller("controller2",function($scope){
    emp ={
        firstName:"John",
        lastName:"Ford",
        age:34
    }
    $scope.emp=emp;
})

var app2 = angular
        .module("myModule",[])
        .controller("controller2",function($scope){
    emp={
        firstName:"Pavan",
        lastName:"Boddu",
        age:24
    }
    $scope.emp=emp;
})