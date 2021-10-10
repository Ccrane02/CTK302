let state = 0
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/thrill.mp3");


  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();

}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('grey');
      song1.play();
      state = 1;
      break;

    case 1:
      background('grey');
      break;

    case 2:
      song2.play();
      state = 3;

      break;

    case 3:
      background('orange');
      break;


    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      background('red');
      break;
  }
}
function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)){


  song1.pause();
  song2.pause();
  song3.pause();
  state++;

  if (state > 5) {
    state = 0;
  }
}
}
