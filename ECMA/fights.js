class Fighter {
	constructor(name="Vasyok", power=1000, health=100){
		this.name = name;
		this.power = power;
		this.health = health;
	}
	setDamage(damage) {
		let heal = this.health -= damage;
		if(heal >= 0){
			this.health = heal;
		} else {
			this.health = 0;
		}
		
	}

	hit(enemy, point){
		let damage = point*this.power;
		enemy.setDamage(damage);
	}
}

class improvedFighter extends Fighter {
	  doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}

var Kolya = new Fighter('Nikolay', 2, 99);
var Andron = new improvedFighter('Andrey', 3, 100);


var fight = (fighter, improvedFighter, ...point) => {
	let frs = [fighter, improvedFighter];
	for (let i = 0; i < point.length; i++) { 
		console.log(`${frs[0].name} hits ${frs[1].name}`);
    	frs[0].hit(frs[1], point[i]);
    	if(frs[1].health ==0 ){
    		console.log(`${frs[0].name} won!`);
    		break;
    	} else {
    		console.log(`${frs[0].name}'s health is ${frs[0].health}, ${frs[1].name}'s health ${frs[1].health}`);
    	frs.reverse();
    	}
	}
}

fight(Kolya, Andron, 25, 13, 45, 105, 17, 6, 34);

/*   
var fight = (fighter, improvedFighter, ...point) => {
	let frs = [fighter, improvedFighter];
	for (let i = 0; i < point.length; i++) { 
		console.log(`${frs[0].name} hits ${frs[1].name}`);
		
		if(frs[0].constructor.name == 'improvedFighter'){
			frs[0].doubleHit(frs[1], point[i]);
		} else {
			frs[0].hit(frs[1], point[i]);
		}
    	
    	if(frs[1].health ==0 ){
    		console.log(`${frs[0].name} won!`);
    		break;
    	} else {
    		console.log(`${frs[0].name}'s health is ${frs[0].health}, ${frs[1].name}'s health ${frs[1].health}`);
    	frs.reverse();
    	}
	}
}

*/