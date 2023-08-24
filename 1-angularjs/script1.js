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

var app1 = angular.module("myModule",[]).controller("myCompany",function($scope){
    company={
        name:"Acuver",
        location:"Bangalore",
        logo:"acuver.png"
        
    }

    $scope.company=company;
})

var app2 = angular.module("myModule1",[]).controller("myController1",function($scope){
    var name ="234";
    $scope.name=name;
})