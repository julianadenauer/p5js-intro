function setup() {
	createCanvas(400, 400);
	background(255);
}

function draw() {
	noFill();
	stroke(0, 0, 0, 20);
	rectMode(CENTER);
	translate(width/2, height/2);
	rotate(mouseY);
	rect(0, 0, mouseX, mouseX);
}
