var bubbles = [];
let url = '';
let christmas;
function setup() {

   let key = '1shj0k4TazudQO8MHfMxFrsqHj4_SuprZgWsMrgTjXF0'; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

christmas = loadImage("assets/XmasTree.webp");

  // Regular setup code we usually have
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]["What's your favorite lunch item?"],data[i]["What's your favorite holiday?"],data[i]["How was your day today?"])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  image(christmas,0,0,width,height);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(lunch,holiday,day) { // only the order of these parameters matters!
    this.lunch = lunch;
    this.holiday = holiday;
    this.day = day;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);

  }


  display() {
fill('white');
    ellipse(this.pos.x,this.pos.y+10,120,120);

    fill('black');
    text(this.lunch + "\n" + this.holiday + "\n" + this.day, this.pos.x, this.pos.y);

    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
  }




}
