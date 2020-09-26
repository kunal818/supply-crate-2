var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var wall1,wall2,wall3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	wall1 = createSprite(500,600,20,135);
	wall1.shapeColor = color("red");

	wall2 = createSprite(400,650,180,20);
	wall2.shapeColor = color("red");

	wall3 = createSprite(315,600,20,135);
	wall3.shapeColor = color("red");
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, setStatic:false});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	
Matter.Body.setStatic(wall1,true);
Matter.Body.setStatic(wall2,true);
Matter.Body.setStatic(wall3,true); 

	
}




}



