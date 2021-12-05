// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0;
var sunrise=0;
let basketball,cloud;
var f1;
function setup() {
  createCanvas(400, 400);
basketball = loadImage("assets/Basketball.jpg")
cloud = loadImage("assets/cloud.png")
f1 = loadFont("assets/Merriweather.ttf")
  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Champaign,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=1988bdb14d675025c037e892edd9f4c0'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
temp=weather.main.temp;
sunrise=weather.sys.sunrise;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
  image(basketball,0,0,400,400)
      fill('black');
      textFont(f1);
      textSize(20)
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
 text("tempature is " + temp, 20, 60);
 text("Sunrise is " + sunrise, 20, 80);


      // cloud
    image(cloud,x, 70, 200, 100);
      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
