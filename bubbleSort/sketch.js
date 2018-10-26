let values = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width; i++) {
    //values[i] = random(height);
    values[i] = noise(i / 30.0) * height;
  }
}

function draw() {
  background(0);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    stroke(52)
    fill(75)
    textSize(30);
    text("Finished", width / 2, 40)
    noLoop();
  }
  i++;

  for (let i = 0; i < values.length; i++) {
    stroke(map(i, 0, values.length, 0, 255), 120, map(i, 0, values.length, 200, 255));
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
