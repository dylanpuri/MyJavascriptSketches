
var circle1 = {
	x : 0,
	y: 100,
	diameter : 50
};

var circle2 = {
	x : 200,
	y: 0,
	diameter : 50
};

function setup() {
	createCanvas(600, 400);


}

function draw() {
	background(0);
	ellipse(circle1.x,circle1.y,circle1.diameter,circle1.diameter);
	circle1.x+=2
	if (circle1.x > width) {
		circle1.x = circle1.x-width
	}

	ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
	circle2.y +=3;
	if (circle2.y > height) {
		circle2.y -= height;
	}

}
