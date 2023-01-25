export default class CenaCarregamento extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaCarregamento'
        });
    }

    preload() {
        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        });
        // Recursos pré-carregados
        this.load.image('city', 'images/city.png');
        this.load.image('ground', 'images/ground.png');
        this.load.image('platform', 'images/platform.png');
        this.load.spritesheet('ninja', 'images/ninja.png', { frameWidth: 50, frameHeight: 50 });
    }

    create() {

    }

    update() {

    }
}