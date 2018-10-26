let grid = [];
let gridSize = 4;

function setup() {
  createCanvas(400, 400);
  //generating grid
  blankGrid(grid);
  addNumber();
  addNumber();

}

function blankGrid(grid) {
  for (let x = 0; x < gridSize; x++) {
    grid[x] = [];
    for (let y = 0; y < gridSize; y++) {
      grid[x][y] = 0;
    }
  }
}

function addNumber() {
  let options = []; //array of spots that can be added
  //loops thru to find
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === 0) {
        //adds coords to arr;
        options.push({
          x: i,
          y: j
        });
      }
    }
  }
  if (options.length > 0) {
    let spot = random(options);
    let r = random(1);
    //if r is > 0.5 give 2 else give 4. 50% chance;
    grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
  }
}

function compare(a, b) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (a[i][j] != b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function copyGrid(grid) {
  //making extra array to hold copy;
  let extra = [];
  blankGrid(extra);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      extra[i][j] = grid[i][j];
    }
  }
  return extra;
}

function flipGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    grid[i].reverse();
  }
  return grid;
}

function rotateGrid(grid) {
  let newGrid = [];
  blankGrid(newGrid);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

//One move
function keyPressed() {
  let flipped = false;
  let rotated = false;
  let played = true;

  if (keyCode === DOWN_ARROW) {
    //do nothing
  } else if (keyCode === UP_ARROW) {
    grid = flipGrid(grid);
    flipped = true;
  } else if (keyCode === RIGHT_ARROW) {
    grid = rotateGrid(grid);
    rotated = true;
  } else if (keyCode === LEFT_ARROW) {
    grid = rotateGrid(grid);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;
  } else {
    played = false;
  }

  if (played) {
    let past = copyGrid(grid);

    for (let i = 0; i < grid.length; i++) {

      grid[i] = operate(grid[i]);
    }
    let changed = compare(past, grid);

    if (flipped) {
      grid = flipGrid(grid);
    }
    if (rotated) {
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
    }

    if (changed) {
      addNumber();
    }
  }
}

function operate(row) {
  //slide numbers over;
  row = slide(row);
  //combine same numbers;
  row = combine(row);
  //slide again;
  row = slide(row);
  return row;
}

//operating on array itself
function combine(row) {
  //starting at the end of the row going back;
  for (let i = grid.length - 1; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    //if 2 of the same num are next to each other:
    if (a == b) {
      //add into one cell
      row[i] = a + b;
      //make other cell empty
      row[i - 1] = 0;
    //break;
    }
  }
  return row;
}

function draw() {
  background(255);
  drawGrid();
}

//making new array for row
function slide(row) {
  let arr = row.filter(val => val);
  let missing = gridSize - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function drawGrid() {
  let w = floor(width / gridSize);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      noFill();
      strokeWeight(2);
      stroke(0);
      rect(i * w, j * w, w, w);

      let val = grid[i][j];
      if (val !== 0) {
        textAlign(CENTER, CENTER);
        textSize(64);
        fill(0);
        noStroke();
        text(val, i * w + w / 2, j * w + w / 2,);
      }
    }
  }
}
