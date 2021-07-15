const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let ground;
let rope;
let fruit;
let fruitOptions;
let fruitCon;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 rope = new Rope(10,{x:245,y:30});
ground = new Ground(200,690,600,20);


fruitOptions = {density:0.001}
fruit = Bodies.circle(300,300,15,fruitOptions);
Matter.Composite.add(rope.body,fruit);
fruitCon=new Link(rope,fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   ground.display();
rope.show();
fill("red");
ellipse(fruit.position.x,fruit.position.y,15,15);

}




