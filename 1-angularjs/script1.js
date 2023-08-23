///<reference path="angular.min.js" />

var app1 = angular.module("myModule",[]);

app1.controller("myController",function($scope){
    emp={
        firstName:"Pavan",
        lastName:"Boddu",
        age:30
    }

    $scope.emp=emp;
})

var app1 = angular.module("myModule",[]).controller("myController",function($scope){
    emp={
        firstName:"Prakash",
        lastName:"Singh",
        age:34
    }

    $scope.emp=emp;
})