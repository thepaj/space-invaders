let ship;
let flowers = [];
let drops = [];
let left = -1;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  //drop = new Drop(width/2, height/2);
  
  for (let i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*80+80, 60);
  }
}

function draw() {
  background(0);
  ship.show();
  
   
  for (let i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    
    for (let j = 0; j < flowers.length; j++) {
      if(drops[i].hits(flowers[j])) {
        flowers[j].grow();
        drops[i].evaporate();
      }
    }
  }
  
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].show();
  }
  
  for (let i = 0; i < drops.length; i++) {
    if(drops[i].toDelete) {
      drops.splice(i, 1);
      i--;
    }
  }
}

function keyPressed() {
  if(key === ' ') {
    let drop = new Drop(ship.x, height)
    drops.push(drop);
  }
  
  if(keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if(keyCode === DOWN_ARROW) {
    ship.move(1);
    console.log('move')
  }
}
