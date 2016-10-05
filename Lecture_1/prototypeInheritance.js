/*
1. Создать сущности Dog, Cat, Woodpecker, которые являются наследниками сущности Animal. 
Animal содержит свойства age, name, sound, region и метод say. Dog, Cat, Woodpecker не содержит явно данных свойств, но наследует их у Animal. 
Также они содержат метод goAway. Задание должно быть реализовано каждым из следующих способов: 
    1 - прототипное наследование через функции-конструкторы 
    2 - наследование через конструкцию Object.create()

2. Вызвать метод say на каждой из сущностей.

3. Реализовать функции getType(), которая принимает один из объектов Dog, Cat, Woodpecker и возвращает его тип не используя оператор instanceof,
 а проверяя наличие свойств/методов объектов.

4. Модифицировать функцию так, что она не принимает объект, а оперирует с объектом this. 
Функция объявляется вне контекста, но вызывается на определенном объекте при помощи call/apply/bind.
*/

function Animal(age, name, sound, region) {
	this.age = age;
	this.name = name;
	this.sound = sound;
	this.region = region;
}

Animal.prototype.say = function() {
		console.log(this.sound);
}

// Dog
var Dog = function(age, name, region) {
	Animal.call(this, age, name, 'woof', region);
}
Dog.prototype = new Animal();
Dog.prototype.goAway = function() {
	console.log('go away! ' + this.sound);
}

// Cat
var Cat = function(age, name, region) {
	Animal.call(this, age, name, 'meaw', region);
}
Cat.prototype = new Animal();
Cat.prototype.goAway = function() {
	console.log('go away! ' + this.sound);
}

// Woodpecker
var Woodpecker = function(age, name, region) {
	Animal.call(this, age, name, 'tuk', region);
}
Woodpecker.prototype = new Animal();
Woodpecker.prototype.goAway = function() {
	console.log('go away! ' + this.sound);
}

anml = new Animal(5, 'anny', 'moo', 'region0');
tusik = new Dog(2, 'tuz', 'region1');
kitty = new Cat(3, 'matroSkin','region2');
woody = new Woodpecker(4, 'dyatel', 'region3');

function getTypep(ob) {
	if (Object.getPrototypeOf(ob).hasOwnProperty('goAway')) {
		switch(ob.sound){
			case 'woof': return 'Dog'; 
			case 'meaw': return 'Cat';
			case 'tuk' : return 'Woodpecker';
			default: return 'something is wrong!';
		};
	} else if (Object.getPrototypeOf(ob).hasOwnProperty('say')) {
		return 'Animal';
	} else {
		return 'Not our type!';
	}
}

function getTypepThis(){
	if (Object.getPrototypeOf(this).hasOwnProperty('goAway')) {
		switch(this.sound){
			case 'woof': return 'Dog'; 
			case 'meaw': return 'Cat';
			case 'tuk' : return 'Woodpecker';
			default: return 'something is wrong!';
		};
	} else if (Object.getPrototypeOf(this).hasOwnProperty('say')) {
		return 'Animal';
	} else {
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

