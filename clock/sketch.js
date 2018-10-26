function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	textAlign(CENTER,CENTER)

}

function draw() {
	background(0);
	translate(200,200);


	let hr = hour();
	let mn = minute();
	let sc = second();




	//nums
	noStroke();
	strokeWeight(1);
	stroke(255);
	textSize(20)
	text("12",0,-190)
	text("3",190,0)
	text("6",0, 190)
	text("9",-190,0)

	//notches
	var r = 170;
	noStroke();


	beginShape();
	for (var a = -90; a < 360; a += 6) {
		var x = r * cos(a);
		var y = r * sin(a);
		fill(120);
		ellipse(x, y, 6, 6);
	}
	endShape();

	// calendar
	// Date
	textSize(17);
	var d = day();
	var m = month();
	var y = year();
	var dColour = map(d, 0, 365, 0, 255);
	var mColour = map(m, 0, 12, 0, 255);
	var yColour = map(y, 0, y, 0, 255);
	stroke(0)
	textFont('Impact Regular')
	fill(dColour, mColour, yColour);
	text(day()+"/"+month()+"/"+year(), 0, -10);

	// Month
	if (m == 1) {
		var monthStr = "January";
	} else if (m == 2) {
		var monthStr = "February";
	} else if (m == 3) {
		var monthStr = "March";
	} else if (m == 4) {
		var monthStr = "April";
	} else if (m == 5) {
		var monthStr = "May";
	} else if (m == 6) {
		var monthStr = "June";
	} else if (m == 7) {
		var monthStr = "July";
	} else if (m == 8) {
		var monthStr = "August";
	} else if (m == 9) {
		var monthStr = "September";
	} else if (m == 10) {
		var monthStr = "October";
	} else if (m == 11) {
		var monthStr = "November";
	} else if (m == 12) {
		var monthStr = "December";
	}
	//console.log(monthStr);

	fill(yColour, dColour, mColour)
	text(monthStr, 0, 10);



	//console.log(day()+"/"+month()+"/"+year());

	//seconds
	rotate(-90);
	strokeWeight(6);
	noFill();
	stroke(50,255,100);
	let end1 = map(sc, 0, 60, 0, 360);
	arc(0,0,300,300,0,end1);

	//minutes
	stroke(230, 100, 50);
	strokeWeight(12)
	let end2 = map(mn, 0, 60, 0, 360);
	arc(0,0,280,280,0,end2);

	//hours
	stroke(50, 120, 255)
	strokeWeight(16)
	let end3 = map(hr % 12, 0, 12, 0, 360);
	arc(0,0,250,250,0,end3);




	// fill(255);
	// noStroke();
	// text(hr+":"+mn+":"+sc, 10, 200);
}
