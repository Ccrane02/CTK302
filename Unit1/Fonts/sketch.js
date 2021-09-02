var f1,f2 ;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Dancing.ttf");
  f2 = loadFont("assets/zcool.ttf");
  textAlign(CENTER);
}

function draw() {
background("yellow");
  textFont(f1);
  textSize(24);
  text("Hello World",100,100);

  textFont(f2)
  textSize(24);
  text("This class is awesome :)",width/2,150);

}
