
var fireworks = []; // Declares the variable firework as an array to accomodate all the new particles.
var gravity; // Declares the gravity variable that will affect the particles.
var xGravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2); // Creates a vector for that gravity that is pointing down.
  xGravity = createVector(0, random(0.1, 0.2));
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);

  // Making it a 10% chance of a firework launching.
  if (random(1) < 0.2) {
    fireworks.push(new Firework()); // Pushes a new firework particle into the array.
  }

  //Making a for loop to loop through all the firework particles.
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
//console.log(fireworks.length);
}
