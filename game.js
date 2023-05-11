class Demo1 extends Physics {
    constructor() {
        super("demo1");
    }
    onEnter() {
        
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Demo1],
    title: "Physics Game",
});