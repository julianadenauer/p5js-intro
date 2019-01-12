var mic;
var angle = 0;

function setup() {
	createCanvas(500, 500);
	background('#ecf0f1');
	stroke('#9b59b6');

	mic = new p5.AudioIn();
	mic.start();
}

function draw(){
  micLevel = mic.getLevel();
	translate(250, 250);
	rotate(radians(angle));
	line(0, 0, (micLevel+0.2) * 500, 0);
	angle++;

}
