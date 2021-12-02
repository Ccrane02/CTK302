// let myCar ;
let beta, gamma; // orientation data
let x = 0; // acceleration data
let y = 0;
let z = 0;
let xPosition = 0;
let yPosition = 0;
let shark, gold, ocean,lost,win
let cars = [];
// let state =0;
let frogPos;
// let timer = 0;
// var f1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  alpha = 0;
   beta = 0;
   gamma = 0;
  ocean = loadImage("assets/Ocean.png");
  shark = loadImage("assets/shark.png");
  gold = loadImage("assets/gold.png");
  lost=loadImage("assets/lost.png");
  win=loadImage("assets/win.jpg");
  f1=loadFont("assets/font.ttf");
   imageMode(CENTER);
  // Spawn an object
  // myCar = new Car() ;

  for (let i = 0; i < 30; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 120);

}

function draw() {
  // switch (state) {


      // case 0:
image(ocean, width/2, height/2, width, height);
fill('black');
textFont(f1);
      textSize(100);
      text("Eat all the fish",150,150);
      xPosition = map(gamma, -18, 18, 0, width);
       yPosition = map(beta, 25, 45, 0, height);
// break;
// case 1:
    // timer++;
    // if (timer > 3000) {
    //   timer = 0;
    //   state = 2;
    // }
// image(ocean,0 ,0,2000,750);


      game();



    function game() {
      for (let i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].move();

        if (cars[i].pos.dist(frogPos) < 50) {
          cars.splice(i, 1);

          if (cars.length == 0) {
             timer = 0
             state = 3;
           }

        }

      }

      push();
        translate(xPosition, yPosition);
      image(shark,frogPos.x, frogPos.y, 200, 100);
      // checkForKeys();
 pop();
 frogPos.x = xPosition;
frogPos.y = yPosition;
    }

    // function checkForKeys() {
    //   if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
    //   if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
    //   if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
    //   if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}
// break;
// case 2:
// image(lost, 400, 350,400,400);
// textFont(f1);
// fill('black')
//  textSize(100);
//  text("YOU LOST", 300, 200);
//  break;
// case 3:
// image(win, 400, 350,400,400);
// textFont(f1);
// fill('black')
//  textSize(100);
//  text("YOU WON", 300, 200,);
// break;
// }

  // }

  // function mouseReleased(){
  //   switch (state) {
  //    case 0:
  //      state = 1;
  //      break;
  //
  //    case 2:
  //      reset();
  //      state = 0;
  //      break;
  //
  //    case 3:
  //      reset();
  //      state = 0;
  //      break;
  //   }

  // }

  function deviceShaken() {
    // re-spawn cars
    cars = []; // clear the array first
    for (let i = 0; i < 40; i++) {
      cars.push(new Car());
    }
  }

  window.addEventListener('deviceorientation', function(e) {
    alpha = e.alpha;
    beta = e.beta;
    gamma = e.gamma;
  });
  window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

  // function reset() {
  //   car = []; //clear the array
  //   for (var i = 0; i < 5; i++) {
  //     cars.push(new Car());
  //   }
  //   timer = 0;
  // }





  // Car class
  class Car {
    // constructor and attributes
    constructor() {
      this.pos = createVector(random(width), random(100));
      this.vel = createVector(5, random(5));
      this.cor = color(0, random(50, 100), random(190, 245), random(100));
      this.size = random(90);
    }

    // methods

    display() {
      fill(this.cor);
      // rect(this.pos.x, this.pos.y, 75, 25);
      textSize(this.size);
      image(gold, this.pos.x, this.pos.y);
    }

    move() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
  }
