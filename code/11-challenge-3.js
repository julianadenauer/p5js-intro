var bubbles = [];
var slider;

function setup() {
	createCanvas(600, 600);
	slider = createSlider(0, 360);

	// create all our bubbles! yay!
	for(var i = 0; i < 100; i = i+1){
		bubbles.push(new Bubble());
	}

	// we now have a lot of bubbles in our bubbles-list! yay!
}

function draw() {
	// draw a white background
	background(600);

	// update and draw all our bubbles!
	for(var i = 0; i < 100; i = i+1){

		// set the direction according to the slider
		bubbles[i].setDirection(slider.value());

		// update the positions
		bubbles[i].move();

		// and draw them on the canvas
		bubbles[i].show();
	}
}

class Bubble {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.color = random(width);
		this.direction = createVector(1, 0);
		this.speed = random(1,10);
	}

	setDirection(direction){
		var directionInRadians = radians(direction); // this translates between degrees and radians
		this.direction = p5.Vector.fromAngle(directionInRadians);
		this.direction.setMag(this.speed);
	}

	move() {
		this.x = this.x + this.direction.x;
		this.y = this.y + this.direction.y;


		// check the rules!
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
