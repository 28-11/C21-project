var speed, weight, thickness;
var bullet;
var wall;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50,200,25,50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,225,225);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  thickness = random(22,83);
}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage<10) {
      wall.shapeColor=color(225,0,0);
    }
    if(damage>10) {
      wall.shapeColor=color(0,225,0);
    }
  }

  drawSprites();
}

function hasCollided (bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}