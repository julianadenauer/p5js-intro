var funnyCatImage;

function preload(){
  funnyCatImage = loadImage("http://www.pets4homes.co.uk/images/articles/2862/large/7-gorgeous-breeds-of-colourpoint-cats-5551fa6879835.jpg");
  
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  funnyCatImage.resize(0, height);
  funnyCatImage.loadPixels();
  
  for(var x=0; x < width; x+=20){
    for(var y=0; y<height; y+=20){
      var c = funnyCatImage.get(x, y);      
      
      if(brightness(c) < 70){
        fill(c);
  			ellipse(x, y, 20, 20);
      }
    }
  }
}
