var q=require("q");


function fn1 (a,b, callback){
    var c=a+b;
    var d=a-b;
    callback(d,c);
}

function fn2 () {
    var deferred= q.defer();
    console.log(deferred);
    fn1(3, 4, function (res1, res2) {
        deferred.resolve([res1,res2]);
    });
    return deferred.promise;
}

fn2().then(function(data){console.log(data[1])});

console.log(fn2());
