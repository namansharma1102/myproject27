
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

      bobObject1 = new Bob(350,350,20)
      rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
      roofObject = new Roof(400,400,100,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  rope1.display() 
  roofObject.display()

keyPressed();

  drawSprites();
 

}


function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4.5,y:-4.5})
	}

}
