/**
* name 
*/
module view {
	export class CoinText extends Laya.Sprite {
		value: number
		unitX: Laya.Sprite;
		unit1: Laya.Sprite;
		unit2: Laya.Sprite;
		unit3: Laya.Sprite;
		constructor(value?: number, x: number = 0, y: number = 0) {
			super();
			this.pos(x, y);
			this.unitX = new Laya.Sprite();
			this.addChild(this.unitX);
			this.unit1 = new Laya.Sprite();
			this.unit1.x = 36;
			this.addChild(this.unit1);
			this.unit2 = new Laya.Sprite();
			this.unit2.x = 72;
			this.addChild(this.unit2);
			this.unit3 = new Laya.Sprite();
			this.unit3.x = 108;
			this.addChild(this.unit3);
			if (value) {
				this.setValue(value);
			}
		}

		public setValue(value: number) {
			value = Math.round(value);
			if (value < 0) {
				value = 0;
			}
			if (value >= 1000) {
				value = 999;
			}
			this.value = value;
			this.unitX.graphics.clear();
			this.unitX.loadImage("coinText/x.png");
			let text: string = this.value.toString();
			this.unit1.graphics.clear();
			this.unit1.loadImage("coinText/" + text[0] + ".png");
			this.unit2.graphics.clear();
			if (text.length >= 2) {
				this.unit2.loadImage("coinText/" + text[1] + ".png");
			}
			this.unit3.graphics.clear();
			if (text.length >= 3) {
				this.unit3.loadImage("coinText/" + text[2] + ".png");
			}
		}

		public recycle(delay: number = 0) {
			if (delay > 0) {
				Laya.timer.once(delay, this, this.recycle);
			} else {
				this.removeSelf();
				Laya.Pool.recover("coinText", this);
			}
		}
	}
}