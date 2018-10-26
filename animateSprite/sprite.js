class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);

  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 6;

    if (this.x > width) {
      this.x = -this.animation[0].width
    }
  }
}
