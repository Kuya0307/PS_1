class MainScene extends Phaser.Scene {

    // コンストラクタ
    constructor() {
        //Sceneを拡張してクラスを作る際にコンストラクタでSceneの設定を渡します
        //keyでシーンのキー、activeでシーンの自動実行を設定できます
       super({ key: 'MyScene1', active: true });
   }

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('taro', 'assets/taro.png');
       this.load.image('back', 'assets/background.png');
    }


    create() {
       this.add.image(400, 300, 'back');
       const taro = this.physics.add.sprite(500, 350, 'taro');
       this.taro = taro
       this.taro_direction = 1;
       this.taro.angle = 0;
       this.text1 = this.add.text(100, 300, 'click! to Rotation!').setFontSize(32).setColor('#00f').setInteractive({ useHandCursor: true });
		this.text2 = this.add.text(100, 400, 'Click! to Move and Rotation !').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
    }


    // arrow_move(object){
    //     object.setVelocityY(-200);// 上方向の速度を設定
    //     object.setVelocityX(-200);
    // }


    update() {
        // this.arrow_move(this.taro);
        //テキストオブジェクトにon()イベントを追加する
		this.text1.on('pointerdown', function (pointer) {
            // 回転角度を更新
            this.taro.angle += 1;
            // 回転角度を設定
            this.taro.setAngle( this.taro.angle );
			}, this);

		this.text2.on('pointerdown', function (pointer) {
            this.taro.angle += 1;
            this.player.setAngle(this.taro.angle );
            this.player.setVelocityX(20);   // 右方向の速度を設定
			}, this);

    }
}