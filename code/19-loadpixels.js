var funnyCatImage;

function preload(){
  funnyCatImage = loadImage("http://www.pets4homes.co.uk/images/articles/2862/large/7-gorgeous-breeds-of-colourpoint-cats-5551fa6879835.jpg");
}

function setup() {
  createCanvas(400, 400);
  funnyCatImage.resize(width, 0);
  funnyCatImage.loadPixels();
}

function draw() {
  image(funnyCatImage, 0, 0);
  var c = funnyCatImage.get(mouseX, mouseY);
  fill(c);
  ellipse(mouseX, mouseY, 50, 50);
}