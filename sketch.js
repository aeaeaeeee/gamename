const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var platform1,platform2;
var hammer;
var sling;
var hammerimg;
var hammertext, spacetext;
function preload(){
  hammerimg=loadImage("hammer-removebg-preview.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  platform1 = new platform(400,300,250,10);
  platform2 = new platform(700,200,200,10);
 
  //level one
  box1 = new box(300,275,30,40);
  box2 = new box(330,275,30,40);
  box3 = new box(360,275,30,40);
  box4 = new box(390,275,30,40);
  box5 = new box(420,275,30,40);
  box6 = new box(450,275,30,40);
  box7 = new box(480,275,30,40);
  //level two
  box8 = new box(330,235,30,40);
  box9 = new box(360,235,30,40);
  box10 = new box(390,235,30,40);
  box11 = new box(420,235,30,40);
  box12 = new box(450,235,30,40);
  //level three
  box13 = new box(360,195,30,40);
  box14 = new box(390,195,30,40);
  box15 = new box(420,195,30,40);
  //top
  box16 = new box(390,155,30,40);

  //level one
  box17 = new box(640,175,30,40);
  box18 = new box(670,175,30,40);
  box19 = new box(700,175,30,40);
  box20 = new box(730,175,30,40);
  box21 = new box(760,175,30,40);
  //level two
  box22 = new box(670,135,30,40);
  box23 = new box(700,135,30,40);
  box24 = new box(730,135,30,40);
  //top
  box25 = new box(700,95,30,40);


  hammer = Bodies.circle(50,200,20);
  World.add(world,hammer);
  
  sling = new slingshot(this.hammer,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  Engine.update(engine);
  
  textSize(20);
  text("Drag the hammer to evaporate the boxes",300,30);
  textSize(10);
  text("Press Space to restart",650 ,350);
  ground.display();
  platform1.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  imageMode(CENTER);
  image(hammerimg ,hammer.position.x,hammer.position.y,40,40);

  sling.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.hammer,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32)
  {
    setup();
    draw();
    hammer.x = 150;
    hammer.y = 200;
    slingShot.attach(this.hammer);
   
  }
}
