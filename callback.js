function fn2 (a,b, callback){
    var c=a+b;
    var d=a-b;
    callback(d,c);
}

(function (){
    fn2(3,4,function(res1,res2){
        console.log(res1);
        console.log(res2);
    })
})();


///////////////




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



///////////////
function fn3(a,b, callback ){
    var c=a+b;
    var d=a-b;
}


(function(){
    fn3(5,1, function(){
        console.log("haha");
    });
})();



