var bubbles = [];
var slider;
var windSpeed = 0;
var windDirection = 0;

function setup() {
  createCanvas(600, 600);

  // create all our bubbles! yay!
  for (var i = 0; i < 100; i = i + 1) {
    bubbles.push(new Bubble());
  }
  
  // the address of our api
  var url = "https://api.openweathermap.org/data/2.5/weather?";

  // set the city we'd like to get the weather from
  var city = "Murmansk";

  // the metric system! royal with cheese!
  var format = "metric";

  // this is my api key!
  var id = "c96429d70a1299c784e85d3a88b353a1";

  // put our request together
  var request = url + "q=" + city + "&units=" + format + "&APPID=" + id;

  // get the data
  httpGet(request, callback);

  // we now have a lot of bubbles in our bubbles-list! yay!
}

function draw() {
  // draw a white background
  background(600);

  // update and draw all our bubbles!
  for (var i = 0; i < 100; i = i + 1) {
    // update the positions
    bubbles[i].move();

    // and draw them on the canvas
    bubbles[i].show();
  }
}

// this function is called when the data is ready
function callback(data) {
  // interpret the data as a javascript object
  var parsed = JSON.parse(data);

  // save speed and direction in our variables
  windSpeed = parsed.wind.speed;
  windDirection = parsed.wind.deg;

  // write the received wind speed and direction to the console
  print(windSpeed, windDirection);
  
  // set the direction and speed according to the wind
  for (var i = 0; i < 100; i = i + 1) {
    bubbles[i].setDirection(windDirection);
    bubbles[i].setSpeed(windSpeed);
  }
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.color = random(width);
    this.direction = createVector(1, 0);
    this.speed = random(1, 10);
  }

  setDirection(direction) {
    var directionInRadians = radians(direction); // this translates between degrees and radians
    this.direction = p5.Vector.fromAngle(directionInRadians);
    this.direction.setMag(this.speed);
  }
  
  setSpeed(speed){
    this.speed = speed + random(speed * 0.3);
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
