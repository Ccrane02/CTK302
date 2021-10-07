let turtle;
let state = 0;
let timer = 0;
var f1;
function setup() {
  createCanvas(700, 700);
  turtle = loadImage("assets/turtle.jpg");
  f1 = loadFont("assets/font.ttf");
  imageMode(CENTER);
}

function draw() {
  background('white');
  image(turtle, width / 2, height / 2, 700, 700);
  switch(state) {

    case 0:
    background('white');
    image(turtle, width / 2, height / 2, 700, 700);
    textFont(f1);
    textSize(24);
    text("Press to Start",250 ,250 );
      break ;
       case 1:
      background('white');
      image(turtle, width / 2, height / 2, 700, 700);
    }
      timer++ ;
   if (timer > 60*60) {
     timer=0;
     state++;
     if (state>1) {
       state=0;
   }

   }


}
function mouseReleased(){
  state++ ;
  if(state>1){
    state=0;
  }

}
