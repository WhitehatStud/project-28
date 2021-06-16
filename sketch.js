
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binIMG=loadimage("DUSTBINGREENpng")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bin=new Dustbin(964,520,20,20)
   bin.addimage(binIMG);
   bin.scale=0.45;

   bin1=new Dustbin(962,505,10,120);
   bin2=new Dustbin(962,565,120,10);
   bin3=new Dustbin(1024,505,10,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



