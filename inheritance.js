//Object Inheritance
var Egg={
  shape:"Egg shape",
  color:"white",
  sayHello:function(){
    console.log("I am an egg");
  }
}

var EasterEgg=Object.create(Egg,{
  color:{
  	value:"colorful"
   },
  BelongsTo:{
  	value:"Bunny"
  }
})

console.log(EasterEgg.color);
EasterEgg.sayHello();

//Constructor Inheritance




