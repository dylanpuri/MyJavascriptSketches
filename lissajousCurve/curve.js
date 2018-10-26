class Curve {

  constructor() {
    //saves the path of the curve
    this.path = [];
    //saves current pos as vect obj
    this.current = createVector();
  }

  //Allows you to set x when creating curve.
  setX(x) {
    this.current.x = x;
  }

  setY(y) {
    this.current.y = y;
  }

  //Allows you to save the current point to the path
  addPoint() {
    this.path.push(this.current);
  }

  //Resets the path to empty
  reset() {
    this.path = [];
  }

  //Function to show the curve.
  show() {
    stroke(255);
    strokeWeight(1);
    noFill();
    //Using the path to draw the curve again and again
    stroke(map(this.current.x, 0, width, 200, 255), 160, map(this.current.y, 0, height, 0, 255));
    beginShape()
    //Looping through the vect objs in the path
    for (let v of this.path) {
      vertex(v.x, v.y);
    }
    endShape();

    //Shows you where the current point is on the path
    strokeWeight(8);
    point(this.current.x, this.current.y);
    this.current = createVector();
  }
}
