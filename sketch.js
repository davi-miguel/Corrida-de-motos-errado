var database;
var form,
  game,
  player,
  playerCount = 0,
  bgimg,
  bike1,
  bike2,
  bike3,
  bike4;
 
var gameState = 0;
var allPlayers;
var bikes;


function preload() {
  bgimg = loadImage("images/background1.png");
  bike1img = loadImage("images/bike1.png")
  bike2img = loadImage("images/bike2.png")
  bike3img = loadImage("images/bike3.png")
  bike4img = loadImage("images/bike4.png")
  trackimg = loadImage("images/track.png")
}

function setup() {
  database = firebase.database();
  canvas = createCanvas(950, 470);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(keyIsDown(38)){
    player.positionY -=10;
    player.distance +=10;
    player.update();
    console.log("Tecla apertada");
  }
}


