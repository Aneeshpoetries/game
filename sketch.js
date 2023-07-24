var bg,boost,coin,oil,oil2


function preload(){
 bg=loadImage("./assets/background.png");
 boost_img=loadImage("./assets/boost up.png")
 coin_img=loadImage("./assets/coin.png")
 oil_img=loadImage("./assets/oil.png")
 oil2_img=loadImage("./assets/oil 2.png")
 bike1_img=loadImage("./assets/bike1.jpeg")
 bike2_img=loadImage("./assets/bike2.png")
 blast_img=loadImage("./assets/blast.png")
 stone_img=loadImage("./assets/stone.png")
 stop_img=loadImage("./assets/stop.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 game=new Game();
 game.start();

}

function draw() {
 background(bg)
 
}