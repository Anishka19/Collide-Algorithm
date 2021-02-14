var movingRect;
var fixedrect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(400,0,60,60);
  fixedRect.shapeColor = "blue";

  movingRect.debug = true;
  fixedRect.debug = true;

  //fixedRect.velocityX = 4;
  fixedRect.velocityY = 4;
}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
     movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
      fixedRect.shapeColor = "red";

     // fixedRect.velocityX = -(fixedRect.velocityX);
      fixedRect.velocityY = -(fixedRect.velocityY);
  } else {
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}