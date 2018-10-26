


function Particle(x, y, hue, firework) {
  this.pos = createVector(x, y); //creates a vector for the position of one particle.
  this.firework = firework;
  this.lifespan = 255; // Making a variable to control the fade-out of the fireworks.

  if (this.firework) {
    this.vel = createVector(0, random(-13.5, -9)); // creates a vector for the velocity (direction and speed).
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 8));
  }


  this.acc = p5.Vector.random2D(); // creates an acceleration vector for the change in the velocity.

  // Making a function for the force accumulation (f=ma) of each particle.
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  // Making a function for each draw frame.
  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.95);
      this.lifespan -= 5;
    }


    this.vel.add(this.acc); // for each draw, the velocity is changed by adding the acceleration vector to it.
    this.pos.add(this.vel); // for each draw frame, the position vector is changed by adding the velocity vector.
    this.acc.mult(0); // At the beginning of each draw, the acc must be zero.


    this.done = function() {
      if (this.lifespan < -8) {
        return true;
      } else {
        return false;
      }
    }

    // Making a function to show the particle on the canvas.
    this.show = function() {
      colorMode(HSB);


      if (!this.firework) {
        strokeWeight(2);
        stroke(hue, 255, 255, this.lifespan);
      } else {
        strokeWeight(4);
        stroke(hue, 255, 255);
      }
      point(this.pos.x, this.pos.y); // Draws a point at the xy position of the particle.

    }


  }

}
