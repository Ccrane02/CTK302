let state = 0;
let timer =0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  switch(state) {
     case 0:
      background('red');
      text("Why don't lobsters share?",100,100);
      break ;
      case 1:
      background('orange');
      text("Because they are shellfish.",100,100);
      break ;

  }
     timer++ ;
  if (timer > 1*60) {
    timer=0;
    state++;
    if (state>1) {
      state=0;
  }

  }
}


function mouseReleased(){
  state++ ;
  if(state>2){
    state=0;
  }

}
