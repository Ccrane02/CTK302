let cars = [];
let ocean;

function setup() {
  createCanvas(500,500);
  noStroke();
  ocean = loadImage("assets/Ocean.png");
  // for (let i = 0; i < 20; i++) {
  // cars.push(new Car());
  // }
}

function draw() {

  image(ocean, 0, 0, 500, 500);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {

      cars.splice(i, 1);



    }
  }
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(random(width), random(100));
    this.vel = createVector(0, random(5));
   this.cor = color(0, random(50, 100), random(190, 245), random(100));
     this.size = random(50) ;
  }

  // methods
  display() {
    fill(this.cor);
    textSize(this.size) ;
    text("Under the Sea",this.pos.x, this.pos.y);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 1;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
