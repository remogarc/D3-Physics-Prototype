class Demo1 extends Physics {
    constructor() {
        super("demo1");
    }
    preload(){
        this.load.image('player', 'player.png');
    }
    onEnter() {
        this.addPlayer(50, 50, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.wallTop = this.walls.create(800, 0, 'square').setOrigin(0);
        this.wallTop.scaleY = 10;

        this.addBlock(1000, 50, 'block');
    }
}

// class Intro extends Phaser.Scene {
//     constructor() {
//         super('intro')
//     }
//     preload(){
//         this.load.image('player', 'player.png');
//     }
//     create() {
//         this.player = this.physics.add.image(50, 50, 'player')
//         this.cursors = this.input.keyboard.createCursorKeys();
//     }
//     update ()
//     {
//         if (this.cursors.left.isDown)
//         {
//             this.player.setVelocityX(-180);
//         }
//     }
// }

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [Demo1],
    title: "Physics Game",
});
