function fn1 (a,b, callback){
    var c=a+b;
    var d=a-b;
    callback(d,c);
}

(function (){

    var x=fn1(3,4,function(res1,res2){
        return res2;
    });
    console.log(x);
})();