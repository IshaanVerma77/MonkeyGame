var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var food,obstacle,FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
 
  
monkey = createSprite(50,250,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(300,290,600,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  score = 0;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}


function draw() {
 background("white");
  
  text("Survival Time: "+ score, 300,50);
  score = score + Math.round(getFrameRate()/60);
  
  ground.visible = false;
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
 if(ground.x>0){
   ground.x = ground.width/2;
 } 
  
  if(keyDown("space") && monkey.y > 249){
    monkey.velocityY = -12;
  }
 
monkey.collide(ground);
  
  
  
  obstacleGroup.collide(monkey);
  
  spawnObstacles();
  spawnBananas();
  
  
  
  
  
  
  
  
 drawSprites(); 
}

function spawnBananas() {
  
  if (frameCount % 160 === 0) {
    banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(140,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    
    foodGroup.add(banana);
  }

}


function spawnObstacles(){
if (frameCount % 200 === 0) {
    obstacle = createSprite(600,270,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 200;
    
    
    
    obstacleGroup.add(obstacle);
  }

}
