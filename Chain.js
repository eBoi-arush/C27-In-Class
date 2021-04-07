class Chain{
  constructor(body1, body2){
    var chainOptions = {
      bodyA: body1,
      bodyB: body2,
      length: 100,
      stiffness: 0.5
    }
    this.chain = Constraint.create(chainOptions);

    World.add(world, this.chain);
  }

  display(){
    strokeWeight(5);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y)
  }
}