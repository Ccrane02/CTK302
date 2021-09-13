let bugs = []; // array of Jitter objects

function setup() {
  // Create objects
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
     createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

  }
}
function draw() {
  background(50, 89, 100);
  for (let i = 0; i < bugs.length; i++) {
     fill(254,254,254);
 if (mouseIsPressed) {
     bugs[i].move();
    bugs[i].display();
    // stuff that shows when the mouse is pressed
fill(251,169,145);
    rect(479,511,200,200);
     fill(189,145,251)
rect(479,800, 400, 400);
     fill(254,254,254);
    rect(445,488,50,50);
    fill(254,254,254);
    rect(523,488,50,50);
     fill(4,102,255);
     rect(445,488,25,25);
    fill(4,102,255);
    rect(523,488,25,25);
     fill(255,4,4);
    rect(480,560,100,50);
   fill(254,254,254);
  textSize(17.5);
  text("Bob discovered he can lift boxes that are next to him. So now hes created his own business, Bobs Deilvery Service. ",22,23);

}
   else {
    // when the mouse isn't pressed!
fill(251,169,145);
    ellipse(479,511,200,200);
    fill(254,254,254);
    ellipse(445,488,50,50);
    fill(254,254,254);
    ellipse(523,488,50,50);
  fill(189,145,251);
    arc(479,750, 360,280,180, PI + QUARTER_PI, CHORD);
      fill(255,4,4);
    arc(478,560,100 ,70,-95, PI + QUARTER_PI, CHORD);
     fill(4,102,255);
    ellipse(523,488,25,25);
     fill(4,102,255);
     ellipse(445,488,25,25);
     fill(254,254,254)
  textSize(17.5)
  text("This is bob, he was once a UPS delivery driver. One day he discovered something special about himself.Click to see. ",22,23);
  }
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    rect(this.x, this.y, this.diameter, this.diameter);
  }

}
 function mouseReleased() {
  print(mouseX+ "," + mouseY);

  }
