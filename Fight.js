class Fighter{
  constructor(name = `player${Math.round((Math.random()*10))}`, power = 5, health = 1000){
    this.name = name;
    this.power = power;
    this.health = health;
  }
  setDamage(damage){
    this.health = this.health - damage;
    console.log(`${this.name}-${this.health}`);
  }
  hit(enemy, point = 2){
    var damage = point * this.power;
    enemy.setDamage(damage)
  }
}

class ImprovedFighter extends Fighter{
  doubleHit(enemy,point = 2){
    point = point * 2;
    super.hit(enemy, point);
  }
}

let fighter = new Fighter("Johny", 5, 100);
let improvedFighter = new ImprovedFighter("Mark", 5, 60);

let fight = (fighter = new Fighter(), improvedFighter = new ImprovedFighter(), ...point) => {
  fighter.hit(improvedFighter, ...point);      
  if(improvedFighter.health > 0){
  improvedFighter.doubleHit(fighter, ...point);
    if(fighter.health <= 0){
      let winner = improvedFighter;
      console.log(`Game over. ${winner.name} won. Score: ${winner.health} - 0 `);
    }
  }else{
    let winner = fighter;
    console.log(`Game over. ${winner.name} won. Score: ${winner.health} - 0 `); 
  };
}

fight(fighter, improvedFighter, 2); //Mark-50 Johny-80
fight(fighter, improvedFighter, 4); //Mark-30 Johny-40
fight(fighter, improvedFighter, 2, 5); //Mark-20 Johny-20
fight(fighter, improvedFighter); //Mark-10 Johny-0 Game over. Mark won. Score: 10 - 0
