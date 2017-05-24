textApp.filter("userFilter",function(){
    return function(val){
        return val.join(" - ");
    };
});