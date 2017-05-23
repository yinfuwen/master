textApp.controller("kqController",function($http,$scope,$timeout,utilServices){
    // $scope.kqContent="我是考勤的内容";

    /*var renderDate=function(date){
        return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate();
    };
     $scope.time=renderDate(new Date());*/
    //  console.log(utilServices.renderDate(new Date()));
    $scope.time="现在时间:"+utilServices.renderDate(new Date());
});