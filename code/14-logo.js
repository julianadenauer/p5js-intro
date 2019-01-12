var diameter = 200;

function setup() {
  createCanvas(400, 400);
	noStroke();
	colorMode(HSB, 100);
	mouseClicked();
}

function draw() {

}

function mouseClicked(){
  background(255);

	fill(random(0, 20), 100, 100, 50);
	ellipse(200 + random(-20, 20), 150 + random(-20, 20), diameter, diameter);

	fill(random(30, 50), 100, 100, 50);
	ellipse(133 + random(-20, 20), 250 + random(-20, 20), diameter, diameter);

	fill(random(60, 80), 100, 100, 50);
	ellipse(266 + random(-20, 20), 250 + random(-20, 20), diameter, diameter);
}
