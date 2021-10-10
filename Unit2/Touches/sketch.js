let numberOfTouches ;
let don,mich,leo,raph;
function setup() {
  createCanvas(400, 400);
  don = loadImage("assets/don.gif");
  mich = loadImage("assets/mich.gif");
  leo = loadImage("assets/leo.gif");
  raph = loadImage("assets/raph.gif");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      image(don,400,400,300,300);
      break ;

      case 1:
      image(leo,400,400,300,300);
      break ;

      case 2:
      image(raph,400,400,300,300);
      break ;

      case 3:
    image(mich,400,400,300,300);
      break ;


  }

}
