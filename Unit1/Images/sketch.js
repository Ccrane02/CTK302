let mj, nickcage , toystory;
function setup() {
  createCanvas(500, 500);
mj = loadImage("assets/MichealJordanmeme.jpeg");
nickcage = loadImage("assets/NickCagememe.jpg");
toystory = loadImage("assets/Toystorymeme.jpg");
imageMode(CENTER);
}

function draw() {
  background('blue');
  image(mj, width/2,height/2,100,100);
  image(nickcage, width/2,height/2 -120,100,100);
  image(toystory,width/2,height/2 +120,100,100);

}
