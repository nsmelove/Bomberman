/**
* name 
*/
module view {
	export class Bullet extends Laya.Sprite {
		static bulletConf = [
			{ order: 1, image: "res/image/bullet1.png" },
			{ order: 2, image: "res/image/bullet2.png" },
			{ order: 3, image: "res/image/bullet3.png" },
			{ order: 4, image: "res/image/bullet4.png" },
			{ order: 5, image: "res/image/bullet5.png" },
			{ order: 6, image: "res/image/bullet6.png" },
			{ order: 7, image: "res/image/bullet7.png" }
		];

		bulletIndex;
		speed: number;
		direction: number;
		private loopTime: number;
		constructor(bulletIndex: number = 0, speed: number = 0.3, direction: number = -90) {
			super();
			this.speed = speed;
			this.setDirection(direction);
			this.setBullectIndex(bulletIndex);
			Laya.timer.frameLoop(1, this, this.onloop);
			this.loopTime = Laya.Browser.now();
		}

		public setDirection(direction: number) {
			this.direction = direction;
			this.rotation = direction + 90;
		}

		public setBullectIndex(bulletIndex: number) {
			this.bulletIndex = bulletIndex;
			this.graphics.clear();
			let conf = Bullet.bulletConf[bulletIndex];
			if (conf) {
				this.loadImage(conf.image);
				this.pivotX = this.width / 2;
				this.pivotY = this.height / 2;
			}
		}

		public onloop() {
			let now = Laya.Browser.now();
			let distValue = this.speed * (now - this.loopTime);
			this.x += distValue * Math.cos(utils.util.RADIAN_PER_ANGLE * this.direction);
			this.y += distValue * Math.sin(utils.util.RADIAN_PER_ANGLE * this.direction);
			this.loopTime = now;
			if (this.parent) {
				if (this.x < 0 - this.width || this.x > Laya.stage.width + this.width || this.y < 0 - this.height || this.y > Laya.stage.height + this.height) {
					(<GameMainUI>this.parent).addEnergy(0.01);
					this.recycle();
				} else {
					for (let i = this.parent.numChildren - 1, child: Laya.Sprite; i >= 0; i--) {
						child = this.parent.getChildAt(i) as Laya.Sprite;
						if (child instanceof Fish && child.hitTestPoint(this.x, this.y)) {
							let web: Web = Laya.Pool.getItemByClass("web", Web);
							web.setWebIndex(this.bulletIndex);
							web.pos(this.x,this.y);
							this.parent.addChild(web);
							web.trap(<Fish>child);
							this.recycle();
							break;
						}
					}
				}
			}
		}

		public recycle() {
			//Laya.timer.clear(this, this.onloop);
			this.removeSelf();
			Laya.Pool.recover("bullet", this);
		}
	}
}