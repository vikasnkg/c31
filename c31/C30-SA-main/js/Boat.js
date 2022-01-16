class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      
restitution:0.8,
friction:1.0,
density:1.0,




    };
    this.width = width;
    this.height = height;
    this.boatPosition=boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.Image=loadImage("assets/boat.png")
    World.add(world, this.body);

  }
  display() {
    var pos = this.body.position;
var angle=this.body.angle;
noTint()
    
    push();
    translate(pos.x, pos.y);
rotate()
    imageMode(CENTER);
 image(this.Image,0,this.boatPosition,this.width,this.height)
    pop();
  }
}
