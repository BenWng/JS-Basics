//Closure: bascially a way to make a field private

var fun=function(){
	var result=0;
	this.localFun=function(){
		result++;
		console.log(result);
	}
}


var x=new fun();
x.localFun();
x.localFun();
console.log(x.result);

/////////////
//Example from stakeoverflow:http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

function sayHello(name) {
    var text = 'Hello ' + name;
    var say = function() { console.log(text); }
    say();
}

var sh=new sayHello("Haha");


function sayHello2(name) {
    var text = 'Hello ' + name; // Local variable
    var say = function() { console.log(text); }
    return say;
}
var say2 = sayHello2('Bob');
say2(); 