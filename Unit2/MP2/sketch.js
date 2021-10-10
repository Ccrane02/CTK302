let turtle,don,mich,leo,raph,pizza;
let state = 0;
let timer = 0;
var f1;
let x=0;
function setup() {
  createCanvas(900, 700);
  turtle = loadImage("assets/turtle.jpg");
  don = loadImage("assets/don.gif");
  mich = loadImage("assets/mich.gif");
  leo = loadImage("assets/leo.gif");
  raph = loadImage("assets/raph.gif");
  pizza = loadImage('assets/pizza.jpg');
  f1 = loadFont("assets/font.ttf");
  imageMode(CENTER);
}

function draw() {
  switch(state) {

    case 0:
    background('white');
    image(turtle, width / 2, height / 2, 900, 700);
    textFont(f1);
    textSize(24);
    text("Press to Start",250 ,250 );

      break ;
       case 1:
      background('white');
      image(turtle, width / 2, height / 2, 900, 700);
  translate(x,0);
      image(don,0,550,300,300);
      image(leo,900,550,300,300);
      image(raph,300,550,300,300);
      image(mich,600,550,300,300);
x=x+2;
      if(x>900){
        x=-300
      }
      break;
      case 2:
      background('white');
      image(pizza,width/2,height/2,900,700)
      break;
  }

      timer++ ;
   if (timer > 7*60) {
     timer=0;
     state++;
     if (state>3) {
       state=0;
   }

   }


}

function mouseReleased(){
  state++ ;
  if(state>3){
    state=0;
  }

}
