textApp.controller("mainController",function($http,$scope,$timeout,utilServices){
    $scope.homeHtml="我是首页的页面"+utilServices.renderDate(new Date());
});