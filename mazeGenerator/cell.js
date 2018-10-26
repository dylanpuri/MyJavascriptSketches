//Class for each cell in maze grid

class Cell {

  constructor(i, j, w, grid) {
    //Index values for cell position in grid (rows,cols)
    this.i = i;
    this.j = j;
    this.grid = grid;
    //Dictates whether or not wall should be built
    this.walls = [true, true, true, true]; //t,r,b,l
    //Tells if this cell has been visited
    this.visited = false;

  }

  //Checks if surrounding cells have been visited
  checkNeighbours() {
    let neighbours = [];

    //Index formula for a 1D arr that should be a 2D arr.
    let index =
    let top = this.grid[i];
    let right =
    let bottom =
    let left =
  }

  show() {
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
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  }
}
