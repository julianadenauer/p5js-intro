var windSpeed = 0;
var windDirection = 0;

function setup() {
  createCanvas(500, 500);
	stroke('#34495e');

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
  background(0, 200, 255);

  // make a line that
  // - grows in length and width with the wind speed
  // - turns with the wind direction
  translate(250, 250);
  rotate(radians(windDirection));
	strokeWeight(windSpeed*5);
  line(-windSpeed * 10, 0, windSpeed * 10, 0);
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
}
