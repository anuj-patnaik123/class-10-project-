var ship,shipimg;
var water,waterimg;
var ground;

function preload(){
  shipimg = loadAnimation("ship-1.png","ship-3.png","ship-2.png","ship-4.png");
  waterimg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);

  
  water = createSprite(200,200,400,20);
  water.addImage("moving",waterimg);
 

  water.scale=0.5;


  ship = createSprite(50,190,20,50);
  ship.addAnimation("running",shipimg);

  ship.scale = 0.45;
  ship.x = 230;

}

function draw() {
  background("white");

 

  water.velocityX = -4

  
  if(water.x<10){
    water.x = water.width/10
  }

 
  drawSprites();
 
}