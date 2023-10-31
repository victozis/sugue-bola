let cor;
let posicaoHorizontal; 
let posicaoVertical;

function setup () {

createCanvas(400, 400);
background("black");
cor = color ((random, 250), random(0, 255), random(0, 250)); 
posicaoHorizontal = 200;
posicaoVertical = 200;
}

function draw() {
   fill(cor);
   circle(posicaoHorizontal, posicaoVertical, 50);
   if(mouseX < posicaoHorizontal){
   posicaoHorizontal--; 
  }
   if(mouseX > posicaoHorizontal){
    posicaoHorizontal++;
  }
   if(mouseY < posicaoVertical) {
     posicaoVertical--;
   }
   if(mouseY > posicaoVertical) {
     posicaoVertical++;
   }
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0 ,255), random(0,255), random(0, 100));
 }
  
}