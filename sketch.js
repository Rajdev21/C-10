var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(400,400);
 
  // creating trex
  trex = createSprite(50,320,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200,350,400,10);
  ground.addImage("ground2",groundImage);


}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  ground.velocityX = -2;
   console.log(ground.x);
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if(ground.x < 0){ 
    ground.x = 200; }


  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}