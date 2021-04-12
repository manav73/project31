const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thunderFrame = 0
var lightning
var Maxdrops = 50
var drops = []
function preload(){
 thunder1 = loadImage("thunderbolt/1.png")   
 thunder2 = loadImage("thunderbolt/2.png")
 thunder3 = loadImage("thunderbolt/3.png")
 thunder4 = loadImage("thunderbolt/4.png")
 boy1 = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world; 
    boy = createSprite(200,450) 
    boy.addAnimation("boy",boy1)
    boy.scale = 0.6
    if(frameCount%30===0) {
       for(var i = 0;i<Maxdrops;i++){
           drops.push(new Drop(random(0,400),random(0,400)))
       }
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%80===0) {
       thunderFrame = frameCount
       lightning = createSprite(random(10,400),random(10,30))
       rand = Math.round(random(1,4))
       switch(rand) {
        case 1:lightning.addImage(thunder1)
        break
        case 2:lightning.addImage(thunder2)
        break
        case 3:lightning.addImage(thunder3)
        break
        case 4:lightning.addImage(thunder4)
        default:break
    }
    lightning.scale = random(0.4,0.6)
    }
    if(thunderFrame+5===frameCount&&lightning) {
       lightning.destroy()
    }
    for(var i = 0; i<Maxdrops; i++){ 
        drops[i].display(); 
        drops[i].updateY() }
    drawSprites();
}   

