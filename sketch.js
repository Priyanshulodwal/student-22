const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var Ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    
    object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
    
 var Ball_options={
     restitution: 1
 }   
  Ball =Bodies.rectangle(300, 290, 100, 19,Ball_options);


    console.log(object);       
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(Ball.position.x,object.position.y,50,50);

}
