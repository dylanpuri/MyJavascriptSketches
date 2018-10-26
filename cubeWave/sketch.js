
let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(175);

  ortho(-400, 400, -400, 400, 0, 1000);
  //directionalLight(255, 255, 255, 0, -1, 0);
  directionalLight(255, 180, 110, 0, -10, -35);
  // ambientLight(100);

  rotateX(-QUARTER_PI);
  rotateY(ma);


  for (var z = 0; z < height; z += w) {
    for (var x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 100, 300);
      ambientMaterial(255, 200, 110, 255);
      translate(x - width / 2, 0, z - height / 2);
      box(w - 2, h, w - 2);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);

      pop();
    }

  }


  angle -= 0.09;

}
