var bubble1;
var bubble2;
var bubble3;

function setup() {
	createCanvas(400, 400);
	background(255);

  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
}

function draw() {
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
	bubble3.move();
	bubble3.show();
}

class Bubble {
	constructor() {
		this.x = random(0, width);
		this.y = random(0, height);
		this.color = random(0, width);
	}

	move() {
		this.x = this.x + random(-10, 10);
		this.y = this.y + random(-10, 10);

		if (this.x > width) {
			this.x = 0;
		}
		if (this.x < 0) {
			this.x = width;
		}
		if (this.y > height) {
			this.y = 0;
		}
		if (this.y < 0) {
			this.y = height;
		}
	}

	show() {
		colorMode(HSB, width);
		fill(this.color, this.y, width);
		ellipse(this.x, this.y, 20, 20);
	}
}
