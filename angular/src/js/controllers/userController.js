textApp.controller("userController",function($scope,$http,$timeout){

    var getData=function(){
        var url="http://rapapi.org/mockjsdata/19309/rap/text.json";
        $http({
            url:url,
            method:"get",
            params:{}
        }).success(function(response){
            $scope.users=response.data.list;
        }).error(function(){

        });
    };
    
    getData();



    /*var response={
        "success":true,
        "errorCode":0,
        "message":"数据请求成功",
        "data":{
            "total":5,
            "list":[
                {"id":"001","username":"张三丰","name":"张三","gender":"男","age":23,"email":"433232@qq.com","mobile":"13541151545","hobbies":["看书","睡觉","打豆豆"]},
                {"id":"002","username":"大家看","name":"地方","gender":"女","age":38,"email":"43cff3232@qq.com","mobile":"1565151545","hobbies":["体验","地方","一天"]},
                {"id":"003","username":"斯达康","name":"对方是否","gender":"男","age":36,"email":"dfs32@qq.com","mobile":"13217451545","hobbies":["人托人","的发生的","打豆豆"]},
                {"id":"004","username":"党风建设","name":"方式","gender":"女","age":26,"email":"grtg32@qq.com","mobile":"132151151545","hobbies":["发帖人","地方","听音乐"]},
                {"id":"005","username":"带劲","name":"冯绍峰","gender":"女","age":25,"email":"fsd2@qq.com","mobile":"13215111545","hobbies":["丰功硕德","丰功硕德","体验"]}
            ]
        }
    };
    $scope.users=response.data.list;*/
});