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
       this.load.image('taro2', 'assets/taro2.png');
       this.load.image('back', 'assets/background.png');
    }


    create() {
       this.add.image(400, 300, 'back');
       const taro = this.physics.add.sprite(500, 350, 'taro');
       const taro2 = this.physics.add.sprite(400, 250, 'taro2');
       this.taro = taro
       this.taro2 = taro2
       this.taro_direction = 1;
       this.taro.angle = 0;
       ///WASDキーを検知できるようにする
       this.keys = {};
       this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
       this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
       this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    //    this.text1 = this.add.text(100, 300, 'click! to Rotation!').setFontSize(32).setColor('#00f').setInteractive({ useHandCursor: true });
	// 	this.text2 = this.add.text(100, 400, 'Click! to Move and Rotation !').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        this.MyWorld = this.add.text(600, 400, 'MyWorld').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        this.Hello_Hey = this.add.text(600, 400, '').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
    }


    // arrow_move(object){
    //     object.setVelocityY(5);// 上方向の速度を設定
    //     object.setVelocityX(5);
    // }


    arrow_move1(cursors, object){
    
        if(cursors.left.isDown){
            // console.log("Left");
            object.setVelocityX(-5);// 左方向の速度を設定
        }else if(cursors.right.isDown){
            // console.log("Right!!");
            object.setVelocityX(5);// 右方向の速度を設定
    
        }else{
            object.setVelocity(0,0);// 横方向の速度を0
        }
    }

    arrow_move2(cursors, object){
    
        if(cursors.left.isDown){
            // console.log("Left");
            object.setVelocityX(5);// 左方向の速度を設定
        }else if(cursors.right.isDown){
            // console.log("Right!!");
            object.setVelocityX(-5);// 右方向の速度を設定
    
        }else{
            object.setVelocity(0,0);// 横方向の速度を0
        }
    }


    //wasdキーで移動
    wasd_move(keys,object){
        if(keys.keyA.isDown){  //Aが押されている時 
            this.Hello_Hey = this.add.text(100, 50, 'Hello!').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        }else if(keys.keyS.isDown){  //Sが押されている時
            this.Hello_Hey = this.add.text(100, 50, 'Hey!').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        }else if(keys.keyD.isDown){ //Dが押されている時 
            this.Hello_Hey.destroy();
        }
    }
    update() {
        // if (this.taro.x >= D_WIDTH - 100) this.taro_direction = -1;
        // if (this.taro.y >= D_HEIGHT - 100) this.taro_direction = -1;

        // if (this.taro.x <= 100) this.taro_direction = 1;
        // if (this.taro.y <= 100) this.taro_direction = 1;
        // //テキストオブジェクトにon()イベントを追加する
		// this.text1.on('pointerdown', function (pointer) {
        //     // 回転角度を更新
        //     this.taro.angle += 1;
        //     // 回転角度を設定
        //     this.taro.setAngle( this.taro.angle );
        // }, this);
        // if (this.taro_direction == 1) {
        //     this.taro.x += 5;
        //     this.taro.y += 5;
        // } else {
        //     this.taro.x -= 5;
        //     this.taro.y -= 5;
        // }

		// this.text2.on('pointerdown', function (pointer) {
        //     this.taro.angle += 1;
        //     this.player.setAngle(this.taro.angle );
        //     this.player.setVelocityX(20);   // 右方向の速度を設定
		// 	}, this);


        // // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();

        this.arrow_move1(cursors, this.taro);//矢印キーによるplayer1の移動
        this.arrow_move2(cursors, this.taro2);

        this.wasd_move(this.keys);
    }
}