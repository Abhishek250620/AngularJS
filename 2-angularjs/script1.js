///<reference path="angular.min.js" />

var app=angular.module("module1",[]).controller("controller1",function($scope){
    person={
        name:"",
        gender:"" ,
        age:""

    }
    $scope.person=person;
})