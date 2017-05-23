var textApp=angular.module("textApp",["ui.router"]);

textApp.config(function($stateProvider,$urlRouterProvider){
    var mainState={
        name:"main",
        url:"/main",
        templateUrl:"./templates/main.html",
        controller:"mainController"
    };
    var userState={
        name:"user",
        url:"/user",
        templateUrl:"./templates/user.html",
        controller:"userController"
    };
    var kqState={
        name:"kq",
        url:"/kq",
        templateUrl:"./templates/kq.html",
        controller:"kqController"
    };

    $stateProvider.state(mainState);
    $stateProvider.state(userState);
    $stateProvider.state(kqState);

    $urlRouterProvider.otherwise("main");
});