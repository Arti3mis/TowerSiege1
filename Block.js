        class Block{
    constructor(x,y,width,height,angle){
    var options = { restitution:0.1,friction:1.0,density:0.1}
    this.width = width; 
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);   
    World.add(world,this.body);
        }
    display(){
    var angle = this.body.angle 
    var pos = this.body.position;
    push(); 
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue")
    rect(0,0,this.width,this.height);
    pop();

    }

        }