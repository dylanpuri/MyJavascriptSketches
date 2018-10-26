var values = [];

var i = 0;
var j = 0;

function setup() {
  colorMode(HSB);
  createCanvas(400, 200);
  for (var i = 0; i < width; i++) {
    values[i] = random(height);
  }
  //sort(values);

  //console.log(values);
  // bubbleSort(values);
  // console.log(values);

// for (var i = 0; i < values.length; i++) {
//   for (var j = 0; j < values.length - i - 1; j++) {
//     var a = values[j];
//     var b = values[j + 1];
//
//     if (a > b) {
//       swap(values, j, j + 1);
//     }
//   }
// }
}

function draw() {
  background(0);

  if (i < values.length) {
    for (var j = 0; j < values.length - i - 1; j++) {
      var a = values[j];
      var b = values[j + 1]
      if (a > b) {
        values = swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++

  for (var i = 0; i < values.length; i++) {
    stroke(map(values[i], values.length, 0, 0, 360), 100, 100);
    line(i, height, i, height - values[i]);
  }

}

var swap = function(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
