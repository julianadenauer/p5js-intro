var bubbles = [];
var windSpeed = 0;
var windDirection = 0;

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 100; i = i + 1) {
    bubbles.push(new Bubble());
  }

  // the address of our api
  var url = "https://api.openweathermap.org/data/2.5/weather?";

  // set the city we'd like to get the waether from
  var city = "Berlin";

  // the metric system! royal with cheese!
  var format = "metric";

  // this is my api key!
  var id = "c96429d70a1299c784e85d3a88b353a1";

  // put our request together
  var request = url + "q=" + city + "&units=" + format + "&APPID=" + id;

  // get the data
  httpGet(request, callback);
}

function draw() {
  background(255);
  for (var i = 0; i < 100; i = i + 1) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

// this function is called when the data is ready
function callback(data) {
  // interpret the data as a javascript object
  var parsed = JSON.parse(data);

  // save speed and direction in our variables
  windSpeed = float(parsed.wind.speed);
  windDirection = int(parsed.wind.deg);

  // write the received wind speed and direction to the console
  print(windSpeed, windDirection);

  // apply the wind direction to our bubbles
  for (var i = 0; i < 100; i = i + 1) {
    bubbles[i].setDirection(windDirection);
  }
}


class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.color = random(width);
    this.direction = createVector(0, 0);
    this.speed = random(0, 10);
  }

  setDirection(direction) {
    // set the new angle
    this.direction = p5.Vector.fromAngle(radians(direction));

    // reapply the speed
    this.direction.setMag(this.speed);
  }

  move() {
    this.x = this.x + this.direction.x;
    this.y = this.y + this.direction.y;

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
