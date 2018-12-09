var slider;
var bubbles = [];

function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, 360, 100);

	for(var i = 0; i < 100; i = i+1){
		bubbles.push(new Bubble());
		bubbles[i].setDirection(10);
	}
}

function draw() {
	background(255);
	for(var i = 0; i < 100; i = i+1){
		bubbles[i].move();
		bubbles[i].show();
		bubbles[i].setDirection(slider.value());
	}
}

class Bubble {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.color = random(width);
		this.vec = createVector(0, -1);
	}

	setDirection(direction){
		this.vec = p5.Vector.fromAngle(radians(direction));
		this.vec.setMag(random(5));
	}

	move() {
		this.x = this.x + this.vec.x;
		this.y = this.y + this.vec.y;

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
