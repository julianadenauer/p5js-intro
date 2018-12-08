var positionX = 0;
var speedX = 5;
var positionY = 0;
var speedY = 3;

var bgRed = 8;
var bgGreen = 100;
var bgBlue = 230;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(bgRed, bgGreen, bgBlue);
	ellipse(positionX, positionY, 100, 100);

	// hitting right or left border
	if (positionX > width || positionX < 0) {
		speedX = -speedX;
		changeBackgroundColor();
	}

	// hitting top or bottom border
	if(positionY > height || positionY < 0) {
		speedY = -speedY;
		changeBackgroundColor();
	}

	positionX += speedX;
	positionY += speedY;
}

function changeBackgroundColor() {
	bgRed = random(255);
	bgGreen = random(255);
	bgBlue = random(255);
}
