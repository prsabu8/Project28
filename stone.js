class Stone {
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      this.image = loadImage("Sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     /* pos.x = mouseX;
      pos.y = mouseY;*/
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      /*rectMode(CENTER);
      fill("violet");
      strokeWeight(4);
      stroke("purple");
      rect(0, 0, this.width, this.height);*/
      pop();
    }
  };