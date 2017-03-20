/**
* name 
*/
module view {
	export class Web extends Laya.Sprite {
		static webConf = [
			{ order: 1, image: "res/image/web1.png" },
			{ order: 2, image: "res/image/web2.png" },
			{ order: 3, image: "res/image/web3.png" },
			{ order: 4, image: "res/image/web4.png" },
			{ order: 5, image: "res/image/web5.png" },
			{ order: 6, image: "res/image/web6.png" },
			{ order: 7, image: "res/image/web7.png" }
		];
		webIndex: number;
		constructor(webIndex: number = 0) {
			super();
		}
		public setWebIndex(webIndex: number = 0) {
			this.webIndex = webIndex;
			this.graphics.clear();
			let conf = Web.webConf[webIndex];
			if (conf) {
				this.loadImage(conf.image);
				this.pivotX = this.width / 2;
				this.pivotY = this.height / 2;


			}
		}

		//捕到鱼
		public trap(fish: Fish) {
			let timeLine = Laya.TimeLine
				.to(this, { scaleX: 1.2, scaleY: 1.2 }, 100)
				.to(this, { scaleX: 1, scaleY: 1 }, 100);
			timeLine.play();
			fish.struggle();
			timeLine.once(Laya.Event.COMPLETE, this, this.onTrap, [fish]);
		}

		public onTrap(fish: Fish) {
			fish.once(Laya.Event.COMPLETE, fish, fish.recycle);
			let conf = Fish.fishConf[fish.name];
			if(conf) {
				let coinAdd:CoinText = Laya.Pool.getItemByClass("coinText",CoinText);
				coinAdd.setValue(conf.coin);
				coinAdd.pos(this.x, this.y);
				fish.parent.addChild(coinAdd);
				coinAdd.recycle(500);
				let coinAni:CoinAni = Laya.Pool.getItemByClass("coinAni",CoinAni);
				coinAni.pos(this.x, this.y);
				if(conf.coin >= 50) {
					coinAni.setType(2);
				}else {
					coinAni.setType(1);
				}
				coinAni.addNum = conf.coin;
				fish.parent.addChild(coinAni);
			}
			this.recycle();
		}

		public recycle() {
			this.removeSelf();
			Laya.Pool.recover("web", this);
		}
	}
}