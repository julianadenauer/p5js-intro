var capture;
var pixels;

function setup() {
  createCanvas(640, 480);
  
  noStroke();
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();  
}

function draw() {
  background(255);
  capture.loadPixels();
  
  for(var x=0; x < width; x+=20){
    for(var y=0; y<height; y+=20){
      	var c = capture.get(x/2,y/2);
        fill(c);
      	var diameter = brightness(c)/2;
  			ellipse(x, y, diameter, diameter);
    }
  }
}
