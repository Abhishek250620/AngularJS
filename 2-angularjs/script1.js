///<reference path="angular.min.js" />

var app = angular.module("module1", []).controller("controller1", function ($scope) {
    person = {
        name: "",
        gender: "",
        age: ""

    }
    $scope.person = person;
})

app.controller("controller2", function ($scope) {
    var emp = [
        { firstName: "Pavan", lastName: "Kalyan", role: "Consultant", age: 24 },
        { firstName: "Abhishek", lastName: "MR", role: "Traine", age: 23 },
        { firstName: "Prakash", lastName: "Singh", role: "Traine", age: 24 },
        { firstName: "Prasanjith", lastName: "Kund", role: "Traine", age: 29 },
        { firstName: "Ravi", lastName: "Singh", role: "MS Trainee", age: 24 },
    ];
    $scope.emps = emp;
})

app.controller("controller3", function ($scope) {
    var countries = [
        {
            name: "India",
            cities: [
                { name: "Bangalore" }, { name: "chennai" }
            ]
        },
        {
            name: "US",
            cities: [
                { name: "New York" }, { name: "Chikago" },{name:"LA"}
            ]
        },
        {
            name: "UK",
            cities: [
                { name: "lknk" }, { name: "dfvfv" }
            ]
        }
    ];
    $scope.country = countries;
})