var positionX = 0;
var speedX = 5;
var positionY = 0;
var speedY = 3;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(8, 100, 230);
	ellipse(positionX, positionY, 100, 100);

	if (positionX > width || positionX < 0) {
		speedX = -speedX;
	}

  if(positionY > height || positionY < 0) {
		speedY = -speedY;
	}

	positionX += speedX;
	positionY += speedY;

}
