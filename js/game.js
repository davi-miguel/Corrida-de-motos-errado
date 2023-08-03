class Game {
  constructor() {
    this.leftKeyActive = false;
    this.blast = false;
  }

start() {
    bike1 = createSprite(this.positionX,this.positionY);
    bike2 = createSprite(this.positionX,this.positionY);
    bike3 = createSprite(this.positionX,this.positionY);
    bike4 = createSprite(this.positionX,this.positionY);

    bike1.addImage(bike1img);
    bike2.addImage(bike2img);
    bike3.addImage(bike3img);
    bike4.addImage(bike4img);

    bike1.scale = 0.1;
    bike2.scale = 0.1;
    bike3.scale = 0.1;
    bike4.scale = 0.1;

    bikes = [bike1, bike2, bike3, bike4];


    if (gameState === 0) {
      form = new Form();
      form.display();
      player = new Player();
      
      player.getCount();
    }
  }

getState(){
  var gameStateref = database.ref("gameState");
  gameStateref.on("value", function(data){
    gameState = data.val();
  });
}

update(state){
  database.ref("/").update({
    gameState: state
  });
}

play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
    image(trackimg, 0, -height * 4, width, height * 5);
    var index = 0;
    var x;
    var y;
    for(var p in allPlayers){
      index = index + 1;
      x = allPlayers[p].positionX;
      y = allPlayers[p].positionY;
      bikes[index - 1].x = x;
      bikes[index - 1].y = y;
      if(index === player.index){
        camera.position.x = width/2;
        camera.position.y = bikes[index - 1].y;
      }
    }
    }
    drawSprites();
}

}























