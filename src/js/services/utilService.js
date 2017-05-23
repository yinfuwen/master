textApp.factory("utilServices",function(){
    return {
        renderDate:function(date){
            return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate();
        }
    };
});