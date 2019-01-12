var mic;
var position = 0;

function setup(){
  createCanvas(400, 400);
  background(255);
  
  // initialize the microphone
  mic = new p5.AudioIn();
  mic.start();
}
function draw(){
  micLevel = mic.getLevel();
  stroke(255, 159, 26);
  line(position, 400, position, 400 - micLevel * 500);
  
  // move 1px to the right
  position = position + 1;
  
  // set the position back to 0 once we have reached the right border
  // and clean what we've drawn before
  if(position > width){
    position = 0;
  	background(255);  
  }
}