var Animal = {
  constructor: function(age, name, sound, region){
  this.age = age;
  this.name = name;
  this.sound = sound;
  this.region = region;
    return this;
 },
  say: function(){
    console.log(this.sound); 
}
};
anml = Object.create(Animal).constructor(4, 'anny', 'moo', 'region0');


var Dog = Object.create(Animal);
Dog.goAway = function() {
  console.log('Go away! ' + this.sound);
};
tusik = Object.create(Dog).constructor(2, 'tuz', 'woof', 'region1');


var Cat = Object.create(Animal);
Cat.goAway = function() {
	console.log('Go away! ' + this.sound);
};
kitty = Object.create(Cat).constructor(3, 'matroskin', 'meaw', 'region2');


var Woodpecker = Object.create(Animal);
Woodpecker.goAway = function() {
	console.log('Go away! ' + this.sound);
};
woody = Object.create(Woodpecker).constructor(3, 'dyatel', 'tuk', 'region3');


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
kitty.say();
tusik.say();
woody.say();
kitty.goAway();
tusik.goAway();
woody.goAway();


console.log(getTypep(anml));
console.log(getTypep(tusik));
console.log(getTypep(kitty));
console.log(getTypep(woody));

console.log(getTypepThis.call(anml));
console.log(getTypepThis.call(tusik));
console.log(getTypepThis.apply(kitty));
console.log(getTypepThis.call(woody));


