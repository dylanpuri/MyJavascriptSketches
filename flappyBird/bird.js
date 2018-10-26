function Bird() {
  this.y = height/2;
  this.x = 64;
  this.r = 32;

  this.gravity = 0.5;
  this.lift = -14;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.up = function() {
    this.velocity += this.lift;
    this.velocity *= 0.7;

  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

}
