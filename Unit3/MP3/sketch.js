// let myCar ;
let shark, gold, ocean,lost,win
let cars = [];
let state =0;
let frogPos;
let timer = 0;
var f1;
function setup() {
  createCanvas(1915, 750);
  ocean = loadImage("assets/Ocean.png");
  shark = loadImage("assets/shark.jpg");
  gold = loadImage("assets/gold.jpg");
  lost=loadImage("assets/lost.png");
  win=loadImage("assets/win.jpg");
  f1=loadFont("assets/font.ttf");
  // Spawn an object
  // myCar = new Car() ;

  for (let i = 0; i < 50; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width / 2, height - 50);

}

function draw() {
  switch (state) {


      case 0:
image(ocean,0 ,0,2000,750);
fill('black');
textFont(f1);
      textSize(100);
      text("Press to Start",150,150);

break;
case 1:
    timer++;
    if (timer > 3000) {
      timer = 0;
      state = 2;
    }
image(ocean,0 ,0,2000,750);


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


      image(shark,frogPos.x, frogPos.y, 200, 100);
      checkForKeys();

    }

    function checkForKeys() {
      if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
      if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
      if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
      if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}
break;
case 2:
image(lost, 400, 350,400,400);
textFont(f1);
fill('black')
 textSize(100);
 text("YOU LOST", 300, 200);
 break;
case 3:
image(win, 400, 350,400,400);
textFont(f1);
fill('black')
 textSize(100);
 text("YOU WON", 300, 200,);
break;
}

  }

  function mouseReleased(){
    switch (state) {
     case 0:
       state = 1;
       break;

     case 2:
       reset();
       state = 0;
       break;

     case 3:
       reset();
       state = 0;
       break;
    }

  }

  function reset() {
    car = []; //clear the array
    for (var i = 0; i < 5; i++) {
      cars.push(new Car());
    }
    timer = 0;
  }





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
