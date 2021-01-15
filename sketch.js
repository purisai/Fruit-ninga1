var play=1
var end=0
var gameState=1
var sword, swordImg
var fruitsGroup, fruit1, fruit2, fruit3, fruit4,fruit,r
var enemyGroup, enemy_moving
var monster
var gameOver
var score =0
var p
var cuttingSound, gameOverSound

function preload(){
  cuttingSound=loadSound("knifeSwooshSound.mp3")
  gameOverSound=loadSound("gameover.mp3")
  enemy_moving=loadAnimation("alien1.png","alien2.png")
  gameOver=loadImage("gameover.png")
  swordImg=loadImage("sword.png")
  fruit1Img=loadImage("fruit1.png")
  fruit2Img=loadImage("fruit2.png")
  fruit3Img=loadImage("fruit3.png")
  fruit4Img=loadImage("fruit4.png")
  alien1=loadImage("alien1.png")
  alien2=loadImage("alien2.png")
  
  
  
  fruitsGroup=new Group()
  enemyGroup=new Group()
  
 
}

function setup(){
  createCanvas(600,600)
  sword=createSprite(60,200,20,20)
  sword.addImage(swordImg)
  sword.scale=0.7
}

function draw(){
  
  if(gameState===1){
    background("lightblue");
    sword.x=World.mouseX
    sword.y=World.mouseY
    
    
    
    fruits();
    enemy();
    
  if(sword.isTouching(fruitsGroup)){
      fruitsGroup.destroyEach();
      cuttingSound.play();
      score=score+2;
  }
  text("score:"+score,500,30)
  
  if(sword.isTouching(enemyGroup)){
      gameState=0
      gameOverSound.play()
    
  
  }
    
  }
  
  if(gameState===0){
    background(0)
    fruitsGroup.destroyEach();
    enemyGroup.destroyEach();
    fruit.velocityX=0
    
    monster.velocityX=0
    score=0
    sword.addImage(gameOver)
    sword.x=300
    sword.y=300
    
  }
  
  drawSprites()
  
}


function fruits(){
  if(frameCount%80===0){
    p=Math.round(random(1,2))
    fruit=createSprite(600,200,20,20)
    fruit.scale=0.2
    if(p===1){
      fruit.x=600
      fruit.velocityX=-(7+(score/4))
    }else if(p===2){
      fruit.x=0
      fruit.velocityX=7+(score/4)
    }
    s=Math.round(random(1,4))
    if(s===1){
      fruit.addImage(fruit1Img)
    }else if(s===2){
      fruit.addImage(fruit2Img)
    }else if(s===3){
      fruit.addImage(fruit3Img)
    }else if(s===4){
      fruit.addImage(fruit4Img)
    }
    
    fruit.y=Math.round(random(50,540))
    
    
    fruit.setLifetime=80
    
    
    fruitsGroup.add(fruit)
  }
}



function enemy(){
  if(frameCount%200===0){
    monster=createSprite(600,200,20,20)
    monster.addAnimation("moving",enemy_moving)
    monster.y=Math.round(random(50,540))
    monster.velocityX=-(7+(score/10))
    monster.setLifetime=80
    enemyGroup.add(monster)
  }
}








