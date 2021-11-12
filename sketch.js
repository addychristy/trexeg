var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("player/idle1.png", "player/idle2.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.2;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
  
  invisibleGround = createSprite(300,200,600,20);
  invisibleGround.visible = false;
}

function draw() {
background(220);

//jump when the space button is pressed
if (keyDown("space") ) {
  trex.velocityY = -12;
}
  
  console.log(trex.y);

trex.velocityY = trex.velocityY + 0.8;

if (ground.x < 0) {
  ground.x = ground.width / 2;
}
  

trex.collide(invisibleGround);
drawSprites();
}

function arrow(){
  
}
  
  
  