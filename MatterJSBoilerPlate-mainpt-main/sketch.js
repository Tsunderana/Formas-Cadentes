var block1;
var block2;
var block3;
var ground;


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

	//Crie os Corpos Aqui.
	var block1_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0.01
	}

	var block2_options = {
		restitution: 0.2,
		friction: 0.01,
		frictionAir: 0.01
	}

	var block3_options = {
		restitution: 0.4,
		frictionAir: 0.01
	}

	var ground_options = {
		isStatic : true
	}

	block1 = Bodies.circle(80,100,20,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(140,10,10,1,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(280,50,250,20,block3_options);
	World.add(world,block3);

	ground = Bodies.rectangle(200,400,400,20,ground_options);
    World.add(world,ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  Engine.update(engine);

  ellipse(block1.position.x,block1.position.y,45);
  rect(block2.position.x,block2.position.y,34);
  rect(block3.position.x,block3.position.y,80,60);
  rect(ground.position.x,ground.position.y,400,20);

  
  drawSprites();
 
}


//projeto PRO_1-1_C20_AtividadeDoAluno1-main
