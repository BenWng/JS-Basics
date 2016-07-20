//Constructor in Javascript

function test( x, y){
  this.TestX=x;
  this.TestY=y;
};

var test2=function (z){
	this.TestZ=z;
}

var T=new test(3,5);

var T2=new test2(18);

console.log(T);

console.log(T2);

