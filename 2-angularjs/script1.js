///<reference path="angular.min.js" />

var app=angular.module("module1",[]).controller("controller1",function($scope){
    let name="";
    $scope.name=name;

    let emps=[
        {name:"Pavan",role:"Consultant",salary:50000},
        {name:"Prakash",role:"Trainee",salary:25000},
        {name:"John",role:"Consultant",salary:75000}
    ]
    $scope.emps=emps;

    let countries=[
        {
            name:"India",
            cities:[
                {name:"Bangalore"},
                {name:"Chennai"},
                {name:"Locknow"},
            ]
        },
        {
            name:"India",
            cities:[
                {name:"Bangalore"},
                {name:"Chennai"},
                {name:"Locknow"},
            ]
        },
        {
            name:"India",
            cities:[
                {name:"Bangalore"},
                {name:"Chennai"},
                {name:"Locknow"},
            ]
        }
    ]
    $scope.countries=countries;
})