    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8, block9, block10, block11, block12, 
    block13, block14, block15, block16;

var engine, world;

var ground1 ,sling1, ground2;

function preload(){
    
} 

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
Engine.update(engine);

ground1 = new Ground(550,390,1300,20);
ground2 = new Ground(500,300,500,20);

//sling1 = new SlingShot(275,450,50,100);

//level one
block1 = new Block(500,275,30,40);
block2 = new Block(510,275,30,40);
block3 = new Block(520,275,30,40);
block4 = new Block(530,275,30,40);
block5 = new Block(540,275,30,40);
block6 = new Block(550,275,30,40);
block7 = new Block(560,275,30,40);

//level two
block8 = new Block(330,450,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

}

function draw(){
background(0);
Engine.run(engine);

ground1.display();
ground2.display();

//sling1.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

}