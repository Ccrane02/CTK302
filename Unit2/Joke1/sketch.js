let state = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  switch(state) {

    case 0:
      background('red');
      text("Why was the broom late?",100,100);
      break ;
      case 1:
      background('orange');
      text("It over swept.",100,100);
      break ;

  }
}


function mouseReleased(){
  state++ ;
  if(state>1){
    state=0;
  }

}
