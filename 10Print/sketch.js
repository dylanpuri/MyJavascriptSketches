
let x = 0;
let y = 0;
let spacing = 15;

function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  background(0);
}

function draw() {
  stroke(random(255), random(255), random(255));
  var rand = random(1);
  if (rand < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  x += spacing;

  if (x > width) {
    x = 0;
    y += spacing;
  }
}
