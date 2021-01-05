
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;
var db, dbimage
var img

function preload() 
{

	dbimage=loadImage("dustbin.jpg")
}

function setup() {
	createCanvas(1400,300);
	
	engine = Engine.create();
	world = engine.world;
	paper = new Paper (100,100,30);
	ground = new Ground (700,280,1400,10);
	dustbin1 = new Dustbin (1000,220,20,80);
	dustbin2 = new Dustbin (1090,265,200,20)
	dustbin3 = new Dustbin (1180,220,20,80);
	db =new Dustbin (1180,220,80,80)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  
  db.display()
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-150})

	}

}
