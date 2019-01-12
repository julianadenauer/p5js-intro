function setup() {
  createCanvas(400, 400);
	noStroke();
}

function draw() {
	background('#95a5a6');

	fill('#2980b9');
	arc(200, 200, mouseY, mouseY, 0, map(mouseX, 0, width, 0, -TWO_PI) , PIE);

	fill('#8e44ad');
	arc(200, 200, mouseY, mouseY, map(mouseX, 0, width, 0, -TWO_PI), TWO_PI, PIE);
}
