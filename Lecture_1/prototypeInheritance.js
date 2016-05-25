function Animal(age, name, sound, region){
	this.age = age;
	this.name = name;
	this.sound = sound;
	this.region = region;
	this.say = function() {
		console.log(this.sound);
	}
}
anml = new Animal(5, 'anny', 'moo', 'region0');


var Dog = function(age, name, sound, region){
	Animal.apply(this, arguments);
}
Dog.prototype = new Animal();
Dog.prototype.goAway = function(){
	console.log('go away! ' + this.sound);
}
tusik = new Dog(2, 'tuz', 'woof', 'region1');

var Cat = function(age, name, sound, region){
	Animal.apply(this, arguments);
}
Cat.prototype = new Animal();
Cat.prototype.goAway = function(){
	console.log('go away! ' + this.sound);
}
kitty = new Cat(3, 'matroSkin', 'meaw', 'region2');

var Woodpecker = function(age, name, sound, region){
	Animal.apply(this, arguments);
}
Woodpecker.prototype = new Animal();
Woodpecker.prototype.goAway = function(){
	console.log('go away! ' + this.sound);
}
woody = new Woodpecker(4, 'dyatel', 'tuk', 'region3');




function getTypep(ob){
	if (ob.__proto__.hasOwnProperty('goAway')){
		switch(ob.sound){
			case 'woof': return 'Dog'; 
			case 'meaw': return 'Cat';
			case 'tuk' : return 'Woodpecker';
			default: return 'something is wrong!';
		};
	}else if (ob.__proto__.hasOwnProperty('say')){
		return 'Animal';
	}else {
		return 'Not our type!';
	}
}

function getTypepThis(){
	if (this.__proto__.hasOwnProperty('goAway')){
		switch(this.sound){
			case 'woof': return 'Dog'; 
			case 'meaw': return 'Cat';
			case 'tuk' : return 'Woodpecker';
			default: return 'something is wrong!';
		};
	}else if (this.__proto__.hasOwnProperty('say')){
		return 'Animal';
	}else {
		return 'Not our type!';
	}
}




anml.say();
tusik.say();
kitty.say();
woody.say();

tusik.goAway();
kitty.goAway();
woody.goAway();


console.log(getTypep(anml));
console.log(getTypep(tusik));
console.log(getTypep(kitty));
console.log(getTypep(woody));


console.log(getTypepThis.call(anml));
console.log(getTypepThis.call(tusik));
console.log(getTypepThis.call(kitty));
console.log(getTypepThis.call(woody));

