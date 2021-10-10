let x=0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
background('grey');
ellipse(x,100,100,100);
ellipse(x,200,100,100);
x=x+5;
if(x >= 500) {
  x=0;
}
}
