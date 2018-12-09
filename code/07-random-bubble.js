var x = 200;
var y = 200;

function setup() {
	createCanvas(400, 400);
	background(255);
}

function draw() {
	colorMode(HSB, width);
	fill(x, y, width);
	ellipse(x, y, 20, 20);
	x = x + random(0, 10);
	y = y + random(0, 10);

	if (x > width) {
		x = 0;
	}
	if (x < 0) {
		x = width;
	}
	if (y > height) {
		y = 0;
	}
	if (y < 0) {
		y = height;
	}
}
