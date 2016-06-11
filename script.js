var game = new Phaser.Game(640,480, Phaser.AUTO, 'world', {
  preload: preload, create: create, update: update });

var Xvalue = 300;
var Yvalue = 300;

function preload() {

  game.load.image('myYellowAlien', 'sprite.png');
}


function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = '#333';

    Player = game.add.sprite(Yvalue,Xvalue, 'myYellowAlien');
Player.scale.setTo(.2,.2);

      //  scale sprites like this:


      game.physics.arcade.enable(Player);
      Player.inputEnabled = true;
  Player.events.onInputDown.add(onDown, this);

}

function update () {

Player.x = Xvalue;
Player.y = Yvalue;
Xvalue = Xvalue + 5;
Yvalue = Yvalue + 5;

  if (Xvalue > 550) {
    Xvalue = 550;
  }

  if (Yvalue > 400){
    Yvalue = 400;
  }

}


function onDown(dog) {
  console.log('clicked');
  console.log(Xvalue);
  console.log(Player.y);
}
