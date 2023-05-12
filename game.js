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

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.physics.collide(this.block, this.walls);

        this.wall1 = this.walls.create(0, 200, 'square').setOrigin(0);
        this.wall1.scaleX = 20;
        this.wall2 = this.walls.create(850, 200, 'square').setOrigin(0);
        this.wall2.scaleX = 10;
        this.wall3 = this.walls.create(1100, 0, 'square').setOrigin(0);
        this.wall3.scaleY = 7.5;
        this.wall4 = this.walls.create(600, 200, 'square').setOrigin(0);
        this.wall4.scaleY = 5.5;
        this.wall5 = this.walls.create(850, 200, 'square').setOrigin(0);
        this.wall5.scaleY = 11.5;
        this.wall6 = this.walls.create(400, 350, 'square').setOrigin(0);
        this.wall6.scaleX = 6;
        this.wall7 = this.walls.create(400, 400, 'square').setOrigin(0);
        this.wall7.scaleY = 11.5;
        this.wall8 = this.walls.create(400, 820, 'square').setOrigin(0);
        this.wall8.scaleX = 15;
        this.wall9 = this.walls.create(850, 580, 'square').setOrigin(0);
        this.wall9.scaleX = 15;

        this.block1 = this.block.create(650, 0, 'block').setOrigin(0);
        this.block1.scaleX = 6; this.block1.scaleY = 6;
        this.block2 = this.block.create(650, 200, 'block').setOrigin(0);
        this.block2.scaleX = 6; this.block2.scaleY = 6;
    }
}

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
