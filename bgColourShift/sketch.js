var r = 0;
var b = 255;
var g = 255;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	r = map(mouseX, 0, 600, 0, 255);
	b = map(mouseX, 0, 600, 255, 0);
	g = map(mouseY, 0, 400, 255, 0);
	background(r,g,b);
	fill(r,g,b);
	stroke(0);
	ellipse(mouseX, mouseY, 10, 10);
	fill(0);
	text("Your colour is "+(r)+(g)+(b),50,50);


}
