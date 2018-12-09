var bubbles = [];

function setup() {
	createCanvas(600, 600);
	background(255);


	for(var i = 0; i < 100; i = i+1){
		bubbles.push(new Bubble());
	}
}

function draw() {
	for(var i = 0; i < 100; i = i+1){
		bubbles[i].move();
		bubbles[i].show();
	}
}

class Bubble {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.color = random(width);
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
