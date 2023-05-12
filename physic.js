class Physics extends Phaser.Scene {

    init(data) {
        this.inventory = data.inventory || [];
    }

    constructor(key) {
        super(key);
    }

    create() {
        this.transitionDuration = 500;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cameras.main.setBackgroundColor('#001133');
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);

        this.add.text(this.w-3*this.s, this.h-3*this.s, "📺")
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setInteractive({useHandCursor: true})
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });

        this.onEnter();

    }

    addPlayer(x, y, player) {
        this.player = this.physics.add.sprite(x, y, player);
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        this.player.setVelocity(0);
        if (this.cursors.left.isDown){
            this.player.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(200);
        }
        if (this.cursors.up.isDown){
            this.player.setVelocityY(-200);
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY(200);
        }
    }

}