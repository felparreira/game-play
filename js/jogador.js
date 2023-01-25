export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(30, 180, 'ninja');
        this.sprite.body.setSize(25, 15);
        this.sprite.setBounce(0.1)
        this.sprite.setCollideWorldBounds(true);

        // cria as animações
        cena.anims.create({
            key: 'right',
            frames: cena.anims.generateFrameNumbers('ninja', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'idle',
            frames: cena.anims.generateFrameNumbers('ninja', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'jump',
            frames: cena.anims.generateFrameNumbers('ninja', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'left',
            frames: cena.anims.generateFrameNumbers('ninja', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
    
    }
}