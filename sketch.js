const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, heliBody;
var helicopter,helicopterIMG,package,packageIMG,ground;

function preload(){
    helicopterIMG=loadImage("helicopter.png");
    packageIMG=loadImage("package.png");
}
function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    package = createSprite(width/2,80,10,10);
    package.addImage(packageIMG);
    package.scale=0.2;
    
    helicopter=createSprite(width/2, 80, 10,10);
    helicopter.addImage(helicopterIMG);
    helicopter.scale=0.6;

    ground = createSprite(width/2, height-35, width,10);
    ground.shapeColor="red";

    packageBody = Bodies.circle(width/2 , 80 , 5 , {isStatic:true});
    World.add(world, packageBody);
 
    // heliBody = Bodies.rectangle(width/2 , 200 , width, 10 , {isStatic:true});
    // World.add(world, heliBody);


    boxPosition=width/2-100
    boxY=610;


    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);

    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);

    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
    boxBase.shapeColor=color(255,0,0);

    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);

    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);

 
   
    //Engine.run();
}

function draw(){
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    package.x=packageBody.position.x;
    package.y=packageBody.position.y;
    
    KeyPressed();
    drawSprites();
   
}

function KeyPressed() {
    if (keyCode === DOWN_ARROW){
        Matter.Body.setStatic(packageBody,false);
    }

    else if (keyCode === LEFT_ARROW){
        helicopter.x = helicopter.x-5;
        translation = {x:-5, y:0};
        Matter.Body.translate(packageBody,translation);
    }

    else if (keyCode === RIGHT_ARROW){
        helicopter.x = helicopter.x+5;
        translation = {x:5, y:0};
        Matter.Body.translate(packageBody,translation);
    }
}