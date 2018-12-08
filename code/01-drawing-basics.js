// hey there, I'm a comment

function setup() {
	// make a canvas
  createCanvas(300, 200);
}

function draw() {
  background(100, 200, 255); // 0 - 255

	fill(50, 250, 200);
	noStroke();
	stroke(250, 0, 0);
	strokeWeight(1);
	ellipse(mouseX, mouseY, 50, 50);

	fill(100, 0, 200);
	ellipse(50, 50, 100, 100);

	stroke(0, 255, 0);
	strokeWeight(5);
	rect(200, 150, 50, 50);
}
