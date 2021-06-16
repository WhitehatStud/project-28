class Ground {
    constructor() {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':0,
          'density':1
      }
      this.image=loadImage(DUSTBINGREEN.png);
      this.body = Bodies.rectangle(600,500,1200,15, options);
      this.width = 1200;
      this.height = 15;
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      
      rectMode(CENTER);
  
      fill(255);

      rect(pos.x, pos.y, this.width, this.height);

    }
  };
  