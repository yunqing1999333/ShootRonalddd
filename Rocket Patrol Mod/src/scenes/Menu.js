class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('starfield', './assets/starfield.png');
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
      }

    create() {
      this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        let menuConfig = {
            fontFamily: 'Cursive',
            fontSize: '20px',
            backgroundColor: '#ff2f00',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
    }
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'SHOOT RONALD', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'Player 1: ←→ move & ↑ shoot  Player 2: A/D move & F shoot', menuConfig).setOrigin(0.5);
  
    menuConfig.backgroundColor = '#FFFF00';
    menuConfig.color = '#000';
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Easy or → for Hard or ↑ for Two-player', menuConfig).setOrigin(0.5);

    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
}
update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      game.settings = {
        spaceshipSpeed: 4,
        birdieSpeed: 6,
        gameTimer: 60000    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      game.settings = {
        spaceshipSpeed: 5,
        birdieSpeed: 7,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
    if (Phaser.Input.Keyboard.JustDown(keyUP)) {
      game.settings = {
        spaceshipSpeed: 5,
        birdieSpeed: 7,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start('play2Scene'); 
    }
  }
}