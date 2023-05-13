class Physics extends Phaser.Scene {

    init(data) {
        this.inventory = data.inventory || [];
    }

    constructor(key) {
        super(key);
    }

    create() {
        this.transitionDuration = 200;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;
        this.v = 500

        this.cameras.main.setBackgroundColor('#555555');
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);

        this.add.text(this.w-16*this.s, this.h-4*this.s, "Full Screen press F")
            .setStyle({ fontSize: `${1.3 * this.s}px` })
            .setTint('#000');
        this.input.keyboard.on('keydown-F', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });
        this.add.text(this.w-17*this.s, this.h-2*this.s, "Continue press SPACE")
        .setStyle({ fontSize: `${1.3 * this.s}px` })
        .setTint('#000');

        this.onEnter();
    }

    addPlayer(x, y, player) {
        this.player = this.physics.add.sprite(x, y, player);
        this.player.setScale(0.2)
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        this.physics.collide(this.player, this.walls);
        this.physics.collide(this.player, this.block);
        this.physics.collide(this.block, this.walls);

        this.player.setVelocity(0);
        if (this.cursors.left.isDown){
            this.player.setVelocityX(-(this.v));
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX((this.v));
        }
        if (this.cursors.up.isDown){
            this.player.setVelocityY(-(this.v));
        }
        else if (this.cursors.down.isDown){
            this.player.setVelocityY((this.v));
        }
    }

    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key);
        });
    }
}