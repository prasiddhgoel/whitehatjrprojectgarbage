class Dustbin{

    constructor (x,y,width,height){

        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.db = loadImage("dustbin.jpg")
        this.width = width;
        this.height = height;
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
     
        rectMode(CENTER)
        rect(0,-1,130,130)
        pop();
      }
    };
