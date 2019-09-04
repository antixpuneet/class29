class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,17);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(56,26,11);
            if (pointA.x<220){
            
            line(pointA.x-25, pointA.y, pointB.x-15, pointB.y+5);
            line(pointA.x-25, pointA.y, pointB.x+25, pointB.y-4);
            image(this.sling3,pointA.x-25,pointA.y-10);
        }
        else {
            line(pointA.x+25, pointA.y, pointB.x-15, pointB.y+5);
            line(pointA.x+25, pointA.y, pointB.x+25, pointB.y-4);
            image(this.sling3,pointA.x+25,pointA.y-10);

        }
            pop();
        }
    }
    
}