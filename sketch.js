var fixedRect, movingRect;
var car, wall;

  
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 

  car= createSprite(200,200,40,40);
  car.shapeColor="blue";
  car.velocityX=4;

  wall= createSprite(1000,200,20,100);
  wall.shapeColor="pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  /*
if(isTouching(car,wall)){

  car.shapeColor="red";
  car.velocityX=0;
  textSize(25);
  fill("white")
  text("OOOOPPPPSSSSS!!! CRASHED",500,500)
}
*/

bounceOff(car,wall);
  drawSprites();
}


