const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1420,650);
    engine = Engine.create();
	world = engine.world;

	pad = new Bar(710,200,400,20);
	ball1 = new Ball(670,320,30,30);
	string1 = new String(ball1.body,{x:670,y:200});
	ball2 = new Ball(700,320,30,30);
	string2 = new String(ball2.body,{x:700,y:200});
	ball3 = new Ball(730,320,30,30);
	string3 = new String(ball3.body,{x:730,y:200});
	ball4 = new Ball(640,320,30,30);
	string4 = new String(ball4.body,{x:640,y:200});
	ball6 = new Ball(90,320,30,30);
	string6 = new String(ball6.body,{x:610,y:200});
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
  
}
function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
  pad.display();
  ball1.display();
  string1.display();
  ball2.display();
  string2.display();
  ball3.display();
  string3.display();
  ball4.display();
  string4.display();
  ball6.display();
  string6.display();
}


