var rect1;
var rect2;
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";
  rect1.velocityY = 5;

  rect2 = createSprite(400 , 400 , 50 , 50);
  rect2.shapeColor = "red";
  rect2.velocityY = -5;

  rect1.debug = true;
  rect2.debug = true;
}

function draw() {
  background(10 , 100 , 150);  

  //rect2.y = mouseY;
  //rect2.x = mouseX;

  if(rect2.y - rect1.y < rect1.height/2 + rect2.height/2 &&
    rect1.y - rect2.y < rect2.height/2 + rect1.height/2){

     rect1.velocityY = -5;
     rect2.velocityY = 5;
  }
  else{
     rect1.shapeColor = "red";
     rect2.shapeColor = "red";
  }
  drawSprites();
}