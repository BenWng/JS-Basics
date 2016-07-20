function fn1 (a,b, callback){
    var c=a+b;
    var d=a-b;
    callback(d,c);
}

(function (){
    fn1(3,4,function(res1,res2){
        console.log(res1);
        console.log(res2);
    })
})();