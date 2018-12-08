function setup() {
	createCanvas(400, 400);
	background(225, 0, 100);
}

function draw() {
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 50, 50);
	}
	else {
		background(225, 200, 100);
	}
}
