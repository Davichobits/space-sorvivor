import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo');

        const text = this.add.text(
            this.scale.width / 2, // Centrar el texto horizontalmente
            this.scale.height / 2, // Centrar el texto verticalmente
            'Cargando...', // Contenido del texto
            {
                font: '32px Arial', // Fuente y tamaño
                color: '#ffffff', // Color del texto
                align: 'center', // Alineación
            }
        );

        // Centrar el texto configurando su posición relativa a su tamaño
        text.setOrigin(0.5, 0.5);

        this.title = this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
