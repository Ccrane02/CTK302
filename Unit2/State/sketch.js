let state = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  switch(state) {

    case 0:
      background('red');
      text("Im a rainbow",100,100);
      break ;
      case 1:
      background('orange');
      text("Im a rainbow",100,100);
      break ;
       case 2:
      background('yellow');
      text("Im a rainbow",100,100);
      break ;
     case 3:
      background('green');
      text("Im a rainbow",100,100);
      break ;
        case 4:
      background('blue');
      text("Im a rainbow",100,100);
      break ;
      case 5:
      background('purple');
      text("Im a rainbow",100,100);
      break ;
  }
}


function mouseReleased(){
  state++ ;
  if(state>5){
    state=0;
  }

}
