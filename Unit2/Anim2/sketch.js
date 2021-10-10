let x=0;

// Reed Cavi's Rain Man

function setup() {
  createCanvas(800, 800);
}

function draw() {
background(220);

push();
translate(x,0);
avatar();
pop();

x=x+5;

if(x>800){
  x=-300
}
}

function avatar(){
  fill(251,169,145);
      rect(479,511,200,200);
       fill(189,145,251)
  rect(479,800, 400, 400);
       fill(254,254,254);
      rect(445,488,50,50);
      fill(254,254,254);
      rect(523,488,50,50);
       fill(4,102,255);
       rect(445,488,25,25);
      fill(4,102,255);
      rect(523,488,25,25);
       fill(255,4,4);
      rect(480,560,100,50);
}
