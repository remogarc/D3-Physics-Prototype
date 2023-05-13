class Demo1 extends Physics {
    constructor() {
        super('demo1');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
        this.load.image('space', 'space.png');
        this.load.image('block', 'block.png');
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

        this.wall1 = this.walls.create(0, 200, 'square').setOrigin(0);
        this.wall1.scaleX = 20;
        this.wall2 = this.walls.create(850, 200, 'square').setOrigin(0);
        this.wall2.scaleX = 21;
        this.wall3 = this.walls.create(1100, 0, 'square').setOrigin(0);
        this.wall3.scaleY = 7;
        this.wall4 = this.walls.create(600, 200, 'square').setOrigin(0);
        this.wall4.scaleY = 6;
        this.wall5 = this.walls.create(850, 200, 'square').setOrigin(0);
        this.wall5.scaleY = 13;
        this.wall6 = this.walls.create(400, 350, 'square').setOrigin(0);
        this.wall6.scaleX = 7;
        this.wall7 = this.walls.create(400, 350, 'square').setOrigin(0);
        this.wall7.scaleY = 15;
        this.wall8 = this.walls.create(400, 820, 'square').setOrigin(0);
        this.wall8.scaleX = 15;
        this.wall9 = this.walls.create(650, 580, 'square').setOrigin(0);
        this.wall9.scaleX = 20;
        this.wall10 = this.walls.create(1100, 820, 'square').setOrigin(0);
        this.wall10.scaleX = 6;
        this.wall11 = this.walls.create(1500, 190, 'square').setOrigin(0);
        this.wall11.scaleY = 28;
        this.wall12 = this.walls.create(1150, 580, 'square').setOrigin(0);
        this.wall12.scaleY = 8;
        this.wall13 = this.walls.create(850, 820, 'square').setOrigin(0);
        this.wall13.scaleY = 8;
        this.wall14 = this.walls.create(850, 350, 'square').setOrigin(0);
        this.wall14.scaleX = 14;
        this.wall15 = this.walls.create(1250, 190, 'square').setOrigin(0);
        this.wall15.scaleY = 6;

        this.block1 = this.block.create(650, 0, 'block').setOrigin(0);
        this.block1.scaleX = 5.5; this.block1.scaleY = 5.5;
        this.block2 = this.block.create(650, 200, 'block').setOrigin(0);
        this.block2.scaleX = 5.5; this.block2.scaleY = 5.5;

        this.endlevel1 = this.physics.add.sprite(930, 440, 'space').setOrigin(0);  
        this.endlevel1.setTint(0xff0000)
        this.endlevel1.setScale(3)

        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('summary1'))
    }
}

class Demo2 extends Physics {
    constructor() {
        super('demo2');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
        this.load.image('space', 'space.png');
        this.load.image('block', 'block.png');
    }
    onEnter() {
        this.addPlayer(0, 1080-50, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.wall1 = this.walls.create(0, 1080-400, 'square').setOrigin(0);
        this.wall1.scaleX = 23;
        this.wall2 = this.walls.create(200, 1080-190, 'square').setOrigin(0);
        this.wall2.scaleY = 6;
        this.wall3 = this.walls.create(700, 1080-400, 'square').setOrigin(0);
        this.wall3.scaleY = 7;
        this.wall4 = this.walls.create(950, 200, 'square').setOrigin(0);
        this.wall4.scaleY = 27;
        this.wall5 = this.walls.create(200, 1080/2-75, 'square').setOrigin(0);
        this.wall5.scaleX = 16;
        this.wall6 = this.walls.create(200, 200, 'square').setOrigin(0);
        this.wall6.scaleY = 9;
        this.wall7 = this.walls.create(200, 200, 'square').setOrigin(0);
        this.wall7.scaleX = 24;
        this.wall8 = this.walls.create(1180, 200, 'square').setOrigin(0);
        this.wall8.scaleY = 11;
        this.wall9 = this.walls.create(1180, 200, 'square').setOrigin(0);
        this.wall9.scaleX = 8;
        this.wall10 = this.walls.create(1400, 0, 'square').setOrigin(0);
        this.wall10.scaleY = 7;
        this.wall11 = this.walls.create(1180, 1080-300, 'square').setOrigin(0);
        this.wall11.scaleY = 9;
        this.wall12 = this.walls.create(1180, 1080-300, 'square').setOrigin(0);
        this.wall12.scaleX = 8;
        this.wall13 = this.walls.create(1180, 1080-550, 'square').setOrigin(0);
        this.wall13.scaleX = 8;
        this.wall14 = this.walls.create(1400, 1080-550, 'square').setOrigin(0);
        this.wall14.scaleY = 9;

        this.block1 = this.block.create(200, 1080-370, 'block').setOrigin(0);
        this.block1.scaleX = 5.5; this.block1.scaleY = 5.5;
        this.block2 = this.block.create(750, 1080-370, 'block').setOrigin(0);
        this.block2.scaleX = 5.5; this.block2.scaleY = 5.5;
        this.block3 = this.block.create(200, 0, 'block').setOrigin(0);
        this.block3.scaleX = 5.5; this.block3.scaleY = 5.5;
        this.block4 = this.block.create(990, 1080/2-75, 'block').setOrigin(0);
        this.block4.scaleX = 5.5; this.block4.scaleY = 5.5;

        this.endlevel2 = this.physics.add.sprite(1280, 630, 'space').setOrigin(0);  
        this.endlevel2.setTint(0xff0000)
        this.endlevel2.setScale(3)

        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('summary2'))
    }
}

class Demo3 extends Physics {
    constructor() {
        super('demo3');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
        this.load.image('space', 'space.png');
        this.load.image('block', 'block.png');
    }
    onEnter() {
        this.addPlayer(1920-50, 0, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.wall1 = this.walls.create(1920-320, 200, 'square').setOrigin(0);
        this.wall1.scaleX = 10;
        this.wall2 = this.walls.create(1920-800, 200, 'square').setOrigin(0);
        this.wall2.scaleX = 8;
        this.wall3 = this.walls.create(1920-800, 0, 'square').setOrigin(0);
        this.wall3.scaleY = 7;
        this.wall4 = this.walls.create(1920-350, 200, 'square').setOrigin(0);
        this.wall4.scaleY = 27;
        this.wall5 = this.walls.create(1920-570, 200, 'square').setOrigin(0);
        this.wall5.scaleY = 10;
        this.wall6 = this.walls.create(1920-570, 750, 'square').setOrigin(0);
        this.wall6.scaleY = 10;
        this.wall7 = this.walls.create(1920-800, 490, 'square').setOrigin(0);
        this.wall7.scaleX = 8;
        this.wall7 = this.walls.create(870, 750, 'square').setOrigin(0);
        this.wall7.scaleX = 16;
        this.wall8 = this.walls.create(870, 490, 'square').setOrigin(0);
        this.wall8.scaleY = 9;
        this.wall9 = this.walls.create(870, 0, 'square').setOrigin(0);
        this.wall9.scaleY = 9;
        this.wall10 = this.walls.create(700, 250, 'square').setOrigin(0);
        this.wall10.scaleX = 6;
        this.wall11 = this.walls.create(700, 0, 'square').setOrigin(0);
        this.wall11.scaleY = 9;
        this.wall12 = this.walls.create(500, 490, 'square').setOrigin(0);
        this.wall12.scaleX = 12;
        this.wall13 = this.walls.create(500, 200, 'square').setOrigin(0);
        this.wall13.scaleY = 10;
        this.wall14 = this.walls.create(0, 200, 'square').setOrigin(0);
        this.wall14.scaleX = 10;
        this.wall15 = this.walls.create(280, 200, 'square').setOrigin(0);
        this.wall15.scaleY = 27;
        this.wall16 = this.walls.create(500, 750, 'square').setOrigin(0);
        this.wall16.scaleY = 10;
        this.wall17 = this.walls.create(500, 750, 'square').setOrigin(0);
        this.wall17.scaleX = 12;

        this.block1 = this.block.create(1920-400, 0, 'block').setOrigin(0);
        this.block1.scaleX = 5.5; this.block1.scaleY = 5.5;
        this.block2 = this.block.create(1920-530, 400, 'block').setOrigin(0);
        this.block2.scaleX = 5.5; this.block2.scaleY = 5.5;
        this.block3 = this.block.create(930, 350, 'block').setOrigin(0);
        this.block3.scaleX = 5.5; this.block3.scaleY = 5.5;
        this.block4 = this.block.create(350, 0, 'block').setOrigin(0);
        this.block4.scaleX = 5.5; this.block4.scaleY = 5.5;
        this.block5 = this.block.create(320, 500, 'block').setOrigin(0);
        this.block5.scaleX = 5.5; this.block5.scaleY = 5.5;

        this.endlevel3 = this.physics.add.sprite(750, 600, 'space').setOrigin(0);  
        this.endlevel3.setTint(0xff0000)
        this.endlevel3.setScale(3)

        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('summary3'))
    }
}

class Summary1 extends Physics {
    constructor() {
        super('summary1');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
    }
    onEnter() {
        this.addPlayer(1920/2-250, 1080/2 + 20, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.wall1 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall1.scaleX = 25;
        this.wall2 = this.walls.create(1920/2-400, 1080/2+120, 'square').setOrigin(0);
        this.wall2.scaleX = 25;
        this.wall3 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall3.scaleY = 8;
        this.wall4 = this.walls.create(1920/2+370, 1080/2-100, 'square').setOrigin(0);
        this.wall4.scaleY = 8;
        this.add.text(1920/2,1080/2 - 170, "Level 1 Complete!").setFontFamily('Impact').setFontSize(100).setOrigin(0.5,0.5).setTint('#000');
        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('demo2'))
    }
}

class Summary2 extends Physics {
    constructor() {
        super('summary2');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
    }
    onEnter() {
        this.addPlayer(1920/2-250, 1080/2 + 20, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.wall1 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall1.scaleX = 25;
        this.wall2 = this.walls.create(1920/2-400, 1080/2+120, 'square').setOrigin(0);
        this.wall2.scaleX = 25;
        this.wall3 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall3.scaleY = 8;
        this.wall4 = this.walls.create(1920/2+370, 1080/2-100, 'square').setOrigin(0);
        this.wall4.scaleY = 8;
        this.add.text(1920/2,1080/2 - 170, "Level 2 Complete!").setFontFamily('Impact').setFontSize(100).setOrigin(0.5,0.5).setTint('#000');
        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('demo3'))
    }
}

class Summary3 extends Physics {
    constructor() {
        super('summary3');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
    }
    onEnter() {
        this.addPlayer(1920/2-250, 1080/2 + 20, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.wall1 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall1.scaleX = 25;
        this.wall2 = this.walls.create(1920/2-400, 1080/2+120, 'square').setOrigin(0);
        this.wall2.scaleX = 25;
        this.wall3 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall3.scaleY = 8;
        this.wall4 = this.walls.create(1920/2+370, 1080/2-100, 'square').setOrigin(0);
        this.wall4.scaleY = 8;
        this.add.text(1920/2,1080/2 - 170, "Level 3 Complete!").setFontFamily('Impact').setFontSize(100).setOrigin(0.5,0.5).setTint('#000');
        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('title'))
    }
}

class Title extends Physics {
    constructor() {
        super('title');
    }
    preload(){
        this.load.image('player', 'player.png');
        this.load.image('square', 'square.png');
    }
    onEnter() {
        this.addPlayer(1920/2-250, 1080/2 + 20, 'player');

        this.walls = this.physics.add.group({
            immovable: true
        });

        this.block = this.physics.add.group({
            pushable: true,
            collideWorldBounds: true,
            collide: this.walls
        });

        this.wall1 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall1.scaleX = 25;
        this.wall2 = this.walls.create(1920/2-400, 1080/2+120, 'square').setOrigin(0);
        this.wall2.scaleX = 25;
        this.wall3 = this.walls.create(1920/2-400, 1080/2-100, 'square').setOrigin(0);
        this.wall3.scaleY = 8;
        this.wall4 = this.walls.create(1920/2+370, 1080/2-100, 'square').setOrigin(0);
        this.wall4.scaleY = 8;
        this.add.text(1920/2,1080/2 - 180, "Block Maze").setFontFamily('Impact').setFontSize(130).setOrigin(0.5,0.5).setTint('#000');
        this.input.keyboard.on('keydown-SPACE', () => this.gotoScene('demo1'))
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
            debug: false
        }
    },
    scene: [Title, Demo1, Demo2, Demo3, Summary1, Summary2, Summary3],
    title: "Physics Game",
});
