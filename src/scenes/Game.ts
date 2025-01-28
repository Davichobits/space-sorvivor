import { Scene } from 'phaser';

export class Game extends Scene {
	camera: Phaser.Cameras.Scene2D.Camera;
	background: Phaser.GameObjects.Image;
	msg_text: Phaser.GameObjects.Text;
	keys: Phaser.Types.Input.Keyboard.CursorKeys;
	player: Phaser.GameObjects.Sprite;
	playerSpeed: number;
	
	constructor() {
		super('Game');
	}
	
	create() {
		this.playerSpeed = 1;
		this.camera = this.cameras.main;
		this.camera.setBackgroundColor(0x00ff00);

		this.background = this.add.image(512, 384, 'background');
		this.background.setAlpha(0.5);

		this.anims.create({
			key: 'walk',
			frames: this.anims.generateFrameNumbers('atlas', { start: 0, end: 3 }), // Rango de fotogramas
			frameRate: 12, // Velocidad de la animación
			repeat: -1,    // Repetir indefinidamente
		});

		if (this.input.keyboard) {
			this.keys = this.input.keyboard.createCursorKeys();
		} else {
			console.warn('Keyboard input is not enabled.');
		}

		// Crear el sprite y reproducir la animación
		this.player = this.add.sprite(100, 100, 'player');
		this.player.play('walk');


		// this.input.once('pointerdown', () => {

		//     this.scene.start('GameOver');

		// });
	}

	update() {
		let isMoving = false;
		if (this.keys.left.isDown) {
			this.player.x -= this.playerSpeed;
			isMoving = true;
		}
		if (this.keys.right.isDown) {
			this.player.x += this.playerSpeed;
			// this.camera.scrollX += 10;
			isMoving = true;
		}
		if (this.keys.up.isDown) {
			// this.camera.scrollY -= 10;
			this.player.y -= this.playerSpeed;
			isMoving = true;
		}
		if (this.keys.down.isDown) {
			// this.camera.scrollY += 10;
			this.player.y += this.playerSpeed;
			isMoving = true;
		}
		if (isMoving) {
			this.player.play('walk', true);
		}else {
			this.player.anims.stop();
		}
	}
}
