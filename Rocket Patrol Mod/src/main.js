let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Play2 ]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keyA, keyD, keyF, keyR, keyLEFT, keyRIGHT, keyUP;

//The names and title stuff I put them in README file, on github
//60 for new arts, UI, animation, and sounds (brand new genre, let's shoot Ronald)
//30 for simultaneous two-player mode (but I'm not sure if that is simultaneous)
//And you can still play single player (easy and hard)
//20 for new spaceship type (birdie who worth 50 points, ultra fast)