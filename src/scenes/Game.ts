import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('atlas', { start: 0, end: 3 }), // Rango de fotogramas
            frameRate: 10, // Velocidad de la animación
            repeat: -1,    // Repetir indefinidamente
        });
        
          // Crear el sprite y reproducir la animación
        const player = this.add.sprite(100, 100, 'player');
        player.play('walk');

        // this.input.once('pointerdown', () => {

        //     this.scene.start('GameOver');

        // });
    }
}
