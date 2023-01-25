import Jogador from "./jogador.js";

export default class CenaJogo extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaJogo'
        });
    }

    preload() {

    }

    create() {
        const imagemFundo = this.add.image(0, 0, 'city');
        imagemFundo.setOrigin(0, 0);

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(0, 184, 'ground').setOrigin(0, 0).refreshBody();
        plataformas.create(75 - 30, 240 - 56 - 0 - 34, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(175 - 30, 240 - 56 - 34 - 34, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(275 - 30, 240 - 56 - 68 - 34, 'platform').setOrigin(0, 0).refreshBody();        
        plataformas.create(375 - 30, 240 - 56 - 102 - 34, 'platform').setOrigin(0, 0).refreshBody();        
     
        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);

        this.teclas = this.input.keyboard.createCursorKeys();
    }

    update() {        
        const jogador = this.jogador.sprite;

        // mover para esquerda
        if (this.teclas.left.isDown) {
            jogador.setVelocityX(-200);
            jogador.setFlip(true, false)
            jogador.anims.play('left', true);
        }//mover para direita
        else if (this.teclas.right.isDown) {
            jogador.setVelocityX(200);
            jogador.setFlip(false, false)
            jogador.anims.play('right', true);
        } else {
            //parado ou pulando
            jogador.setVelocityX(0);
            if (jogador.body.touching.down) {
                jogador.anims.play('idle');
            }
        }

        // pular caso esteja no chão
        if (this.teclas.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-90);
            jogador.anims.play('jump')
        }
    }
}