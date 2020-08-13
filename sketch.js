
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var launcher;
var stone, ground, tree;
var mango1, mango2, mango3, mango4, mango5;
var mango6, mango7, mango8, mango9, mango10, mango11;

function preload()
{
	boyImg = loadImage("Sprites/boy.png");	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(450,600);
	ground = new Ground(600,height,2000,20);
	tree = new Tree(1000,0,300,500);

	mango1 = new Mango(1030,341,40);
	mango2 = new Mango(1053,365,40);
	mango3 = new Mango(1100,378,40);
	mango4 = new Mango(1089,331,40);
	mango5 = new Mango(1150,378,40);
	mango6 = new Mango(1150,298,40);
	mango7 = new Mango(1173,258,40);
	mango8 = new Mango(1200,339,40);
	mango9 = new Mango(1228,371,40);
	mango10 = new Mango(1090,278,40);
	mango11 = new Mango(1273,363,40);
	
	boy = createSprite(500, 640, 10,10);
	boy.addImage(boyImg)
	boy.scale=0.09

	launcher = new Launch(stone.body, {x: 450, y: 590});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
	
    stone.display();
	ground.display();
	tree.display();
	launcher.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);


  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    launcher.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	   if (distance<=lmango.r+lstone.r) {
		   Matter.Body.setStatic(lmango.body,false);
	   }
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 450, y: 590});	
		launcher.attach(stone.body);	
	}
}