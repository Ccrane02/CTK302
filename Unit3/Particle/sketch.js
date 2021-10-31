let cars = [];
let ocean;

function setup() {
  createCanvas(500, 500);
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
    this.pos = createVector(width / 2, height - 80);
    this.vel = createVector(random(-.9, .9), random(-5, -2));
    this.a = random(200);
  }

  // methods
  display() {
    fill(255, this.a);
    ellipse(this.pos.x, this.pos.y, 25, 25);
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
