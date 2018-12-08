function setup() {
  createCanvas(400, 400);
}

function draw() {
	colorMode(HSB, height);
	background(mouseY, height, height);
	fill(height - mouseY, height, height);
	noStroke();
	rectMode(CENTER);
 	rect(width/2, height/2, mouseX, mouseX);
}
