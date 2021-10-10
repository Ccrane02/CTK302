let x=0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
background('grey');
text("Hello World")
x=x+5;
if(x >= 500) {
  x=0;
}
}
