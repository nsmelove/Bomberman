/**
* name 
*/
module view {
	export class CoinAni extends Laya.Animation {
		static cached = false;
		static coinDest = new Laya.Point(230,668);
		type: number;
		addNum:number;
		constructor(type?: number) {
			super();
			if (!CoinAni.cached) {
				Laya.Animation.createFrames(["coinAni1/coin1.png", "coinAni1/coin2.png", "coinAni1/coin3.png", "coinAni1/coin5.png", "coinAni1/coin5.png",
					"coinAni1/coin6.png", "coinAni1/coin7.png", "coinAni1/coin8.png", "coinAni1/coin9.png", "coinAni1/coin10.png"], "coinAni1");
				Laya.Animation.createFrames(["coinAni2/coin1.png", "coinAni2/coin2.png", "coinAni2/coin3.png", "coinAni2/coin5.png", "coinAni2/coin5.png",
					"coinAni2/coin6.png", "coinAni2/coin7.png", "coinAni2/coin8.png", "coinAni2/coin9.png", "coinAni2/coin10.png"], "coinAni2");
				CoinAni.cached = true;
			}
			this.interval = 100;
			this.pivot(30, 30);
			if(type) {
				this.setType(type);
			}
		}

		public setType(type: number){
			this.type = type;
			this.play(0,true,"coinAni"+type);
			let dis = CoinAni.coinDest.distance(this.x ,this.y);
			let timeLine:Laya.TimeLine = Laya.TimeLine.to(this, {x:CoinAni.coinDest.x ,y:CoinAni.coinDest.y},dis/0.5);
			timeLine.play();
			timeLine.once(Laya.Event.COMPLETE, this, this.onFinish);
		}

		public onFinish(){
			if(this.parent) {
				let gameMainUI:GameMainUI = this.parent as GameMainUI;
				gameMainUI.addCoinNum(this.addNum);
			}
			this.recycle();
		}

		public recycle(){
			this.removeSelf();
			Laya.Pool.recover("coinAni", this);
		}
	}
}