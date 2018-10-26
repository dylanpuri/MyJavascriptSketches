class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -8;
    this.velocity = 0;

    this.brain = new NeuralNetwork();


    this.width = 64;
    this.height = 64;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  up() {
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height / 2) {
      this.y = height - this.height / 2;
      this.velocity = 0;
    }

    if (this.y <= this.height / 2) {
      this.y = this.height / 2;
      this.velocity = 0;
    }
  }
}
