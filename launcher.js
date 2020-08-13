class Launch {
    constructor(bodyA, pointB){
        var option ={
            bodyA: bodyA,
            pointB: pointB,
            length: 15,
            stiffness: 0.004
        }
        this.pointB = pointB;
        this.string = Constraint.create(option);
        World.add(world, this.string);
    }
    fly() {
        this.string.bodyA = null;
    }
    attach() {
        this.string.bodyA = body;
    }
    display(){
        if (this.string.bodyA) {
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
         
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
}