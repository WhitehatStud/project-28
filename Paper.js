class Paper {
    constructor() {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }

      this.image=loadImage(PAPERIMAGE.png);
      this.body = Bodies.circle(250,540, 70, options);
      this.width=33;
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      rectMode(CENTER); 
      fill("yellow");
      rotate(angle);
      imageMode(CENTER)
      rect(this.image,pos.x, pos.y,33,33);

    }
  };
  