var funnyCatImage;

function setup() {
  createCanvas(400, 400);
  funnyCatImage = loadImage("http://www.pets4homes.co.uk/images/articles/2862/large/7-gorgeous-breeds-of-colourpoint-cats-5551fa6879835.jpg");
}

function draw() {
  background(255);
  var aspectRatio = funnyCatImage.width / funnyCatImage.height;
  
  // zoom in when the mousebutton is pressed
  if(mouseIsPressed){
    image(funnyCatImage, 0, 0, 800, 800, mouseX, mouseY, 400, 400);
  }
  // otherwise just draw it with the correct aspect ratio
  else {
    image(funnyCatImage, 0, 0, 400, 400 / aspectRatio);
  }
}