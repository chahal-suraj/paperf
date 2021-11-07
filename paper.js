class paper{
    constructer(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.r=r;
    }
    display(){
        var pos=this.body.position;
        image(this.image);
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(-1*this.angle);
        fill("white");
        pop()
    }
}