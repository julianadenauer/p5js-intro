function setup() {
  createCanvas(400, 400);
  httpGet("https://www.rijksmuseum.nl/api/en/collection?q=portrait&key=[YOUR API KEY]&format=json&ps=99", callback);
}

function draw() {
  
}

function callback(data){
  print(data); 
 
  // go through all the images
  for(var i=0; i<10; i++){
    var imageUrl = data.artObjects[i].webImage.url;
    print(imageUrl);
    loadImage(imageUrl, imageCallback);
  }
}

function imageCallback(img){
  // display the image  
  image(img, 0, 0);
  
  // and download it
  img.save('image', 'png');
}