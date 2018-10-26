
var cols,
  rows;
var scl = 15;
var w = 1600;
var h = 1200;

var flying = 0;

var terrain = [];

function setup() {
  rectMode(CENTER);
  createCanvas(800, 800, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //Just to initialise.
    }
  }
}

function draw() {


  flying -= 0.1;
  var yoff = flying;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -130, 130);
      xoff += 0.08;
    }
    yoff += 0.1;
  }

  background(100);
  translate(0, 50);
  rotateX(PI / 2.5);
  //noFill();

  fill(map(noise(xoff, yoff), 0, 1, 170, 255), map(noise(xoff, yoff), 0, 1, 90, 255), map(noise(xoff, yoff), 0, 1, 100, 255), 100);
  translate(-w / 2, -h / 2);

  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {

      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);

    }
    endShape()
  }
  fill(255);
  //rect(width / 2, height - 50, 100, 50);

}
