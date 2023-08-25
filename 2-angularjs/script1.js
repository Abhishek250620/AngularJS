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
    
    // let instagram=[
    //     {post:"one",likes:0,dislikes:0},
    //     {post:"two",likes:0,dislikes:0},
    //     {post:"tree",likes:0,dislikes:0},
    //     {post:"four",likes:0,dislikes:0}
    // ]
    // $scope.instagram=instagram;
    // $scope.incLike = function(insta){
    //     insta.likes++;
    // }

    // $scope.incDisLike = function(insta){
    //     insta.dislikes++;
    // }

    let instagram=[
        {post:"One",like:0,dislike:0},
        {post:"Two",like:0,dislike:0},
        {post:"Three",like:0,dislike:0},
        {post:"Four",like:0,dislike:0},
        {post:"Five",like:0,dislike:0},
    ];
    $scope.instagram=instagram;

    $scope.incLike = function(insta){
        insta.like++;
    }

    $scope.incDisLike = function(insta){
       insta.dislike++;
    }
})