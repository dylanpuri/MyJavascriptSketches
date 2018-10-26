
// Making a firework constructor function.

function Firework() {

  this.hue = random(255);
  // Making a firework have all the attributes of a particle.
  this.firework = new Particle(random(width), height, this.hue, true); // Initialises the firework variable as a new particle.
  this.exploded = false; // Setting a boolean value for if the particle should show or go.
  this.particles = []; // Making an empty array to house the indiv particles.


  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {

    // Applying particle forces to the firework if it exists.
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();

      // Causing ___ when the particle vel is at its lowest point.
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity.sub());
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }


  }


  this.explode = function() {
    for (var i = 0; i < 150; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false);
      this.particles.push(p);
    }
  }

  this.show = function() {

    // Only showing the firework if it exists.
    if (!this.exploded) {
      this.firework.show();
    }
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }



  }
}
