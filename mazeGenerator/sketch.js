/*Making a maze out of cells in a grid
Decides which walls to remove to make the maze.
Cell object does this, should know pos (col, row)
in the grid. Must know the state of the walls
near it: open/closed.  */

let cols,
  rows;
//variable for width of each cell
let w = 25;
let grid = [];

//Cell that is currently being visited
let current;

//create stack to contain
let stack = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //calc no of rows + cols with width scale
  cols = floor(width / w);
  rows = floor(height / w);
  //frameRate(20);

  //For every row and column, push a cell of that position and width into the grid.
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      var cell = new Cell(i, j, w);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(51);

  //Loop thru all cells in grid and show.
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();

  //Checks neighbours and returns a random one to be the next cell;
  let next = current.checkNeighbours();
  if (next) {
    next.visited = true;

    //Push current to the stack
    stack.push(current);

    //Remove 2 walls between cell and neighbours to carve path;
    removeWalls(current, next);

    //Move to the next cell
    current = next;
  } else if (stack.length > 0) {
    //pop a cell from the stack and make it current
    current = stack.pop();

  }
}

//Function to get the 2D index in a 1D arr;
function index(i, j) {
  //if the index isn't on the grid
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }

  return i + j * cols;
}

function Cell(i, j) {
  //Index values for cell position in grid (rows,cols)
  this.i = i;
  this.j = j;
  //Dictates whether or not wall should be built
  this.walls = [true, true, true, true]; //t,r,b,l
  //Tells if this cell has been visited
  this.visited = false;

  this.checkNeighbours = function() {
    let neighbours = [];

    //if index = -1 it will be undefined
    let top = grid[index(i, j - 1)];
    let right = grid[index(i + 1, j)];
    let bottom = grid[index(i, j + 1)];
    let left = grid[index(i - 1, j)];

    //If the neighbours are defined and unvisited
    if (top && !top.visited) {
      neighbours.push(top);
    }
    if (right && !right.visited) {
      neighbours.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbours.push(bottom);
    }
    if (left && !left.visited) {
      neighbours.push(left);
    }

    //if there are neighbours, pick a random one;
    if (neighbours.length > 0) {
      let r = floor(random(0, neighbours.length));
      return neighbours[r];
    } else {
      return undefined;
    }
  }

  this.highlight = function() {
    let x = this.i * w;
    let y = this.j * w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  }

  this.show = function() {
    let x = this.i * w;
    let y = this.j * w;
    stroke(255);

    if (this.walls[0]) {
      line(x, y, x + w, y); //Top
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w); //Right
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w); //Bottom
    }
    if (this.walls[3]) {
      line(x, y + w, x, y); //Left
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }

  }
}


function removeWalls(a, b) {
  //FIgure cells relation to each other (to the right left, top or bottom)
  //Difference between the two cells x positions
  x = a.i - b.i;
  //if next is to the left of current
  if (x === 1) {
    //currents left wall is gone
    a.walls[3] = false;
    //nexts right wall is gone;
    b.walls[1] = false;
  }
  //if next is to the right of current;
  else if (x === -1) {
    //currents right wall gone;
    a.walls[1] = false;
    //nexts left wall gone;
    b.walls[3] = false;
  }

  //Difference between 2 cells y positions;
  let y = a.j - b.j;
  //if next is above current
  if (y === 1) {
    //current top wall gone;
    a.walls[0] = false;
    //nexts bottom wall gone;
    b.walls[2] = false;
  }
  //if next is below current;
  if (y === -1) {
    //current bottom wall gone;
    a.walls[2] = false;
    //nexts top wall gone;
    b.walls[0] = false;
  }
}
