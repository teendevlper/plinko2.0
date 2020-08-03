var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var gamestate;
 gamestate = "play";

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var lne;
var count = 0;
function setup() {
  if(gamestate === "play"){
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

lne = new line(400,430,800,3);
    
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

  }
}
 


function draw() {
 
  background("black");
  textSize(20)

  Engine.update(engine);
  text("Score : "+score,20,30);
  text("500",20,510);
  text("500",105,510);
  text("500",185,510);
  text("500",265,510);
  text("500",345,510);
  text("100",425,510);
  text("100",500,510);
  text("100",585,510);
  text("100",665,510);
  text("100",745,510);
  lne.display();
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if(particle != null){
  particle.display();
  if(particle.body.position.y > 600){
    if(particle.body.position.x   <= 369 ){
      score = score + 500;
      particle = null;
      if(count >= 5) gamestate = "end";
    }else  if(particle.body.position.x   > 369 ){
      score = score + 100;
      particle = null;
      if(count >= 5) gamestate = "end";
    }
  }

}
if (gamestate === "end"){
  textSize(60);
  text("GAME OVER",200,200);
}
  }

  function mousePressed(){
   if(gamestate !== "end"){
    count++
    particle = new Particle(mouseX,mouseY ,10,10);
   }
  }
  