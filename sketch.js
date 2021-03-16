
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Hammer = new hammer(300,30,100,30);
stone = new Stone(100,400,60,60);
Ground = new ground(400,690,800,20);
rubber = new Rubber(500,400,30);
sand1 = new sand(200,400,5);
sand2 = new sand(210,400,5);
sand3 = new sand(220,400,5);
sand4 = new sand(230,400,5);
Iron = new iron(550,400,40,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Hammer.display();
  stone.display();
  Ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  Iron.display();

  drawSprites();
 
}



