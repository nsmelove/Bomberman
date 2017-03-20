/**
* name 
*/
module view {
	export class Cannon extends Laya.Animation {
		static cache = false;
		static cannonConf = [
			{ order: 1, width: 74, height: 74 },
			{ order: 2, width: 74, height: 76 },
			{ order: 3, width: 74, height: 76 },
			{ order: 4, width: 74, height: 83 },
			{ order: 5, width: 74, height: 85 },
			{ order: 6, width: 74, height: 90 },
			{ order: 7, width: 74, height: 94 }
		];
		cannonIndex: number;
		direction: number;
		constructor(cannonIndex: number = 0, direction: number = -90) {
			super();
			if (!Cannon.cache) {
				this.cacheFrames();
				Cannon.cache = true;
			}
			this.interval = 100;
			this.setCannonIndex(cannonIndex);
			this.setDirection(direction);

		}
		public setDirection(direction: number){
			this.direction = direction;
			this.rotation = this.direction + 90;
		}

		public setCannonIndex(cannonIndex: number) {
			this.cannonIndex = cannonIndex;
			let conf = Cannon.cannonConf[cannonIndex];
			if (conf) {
				this.width = conf.width;
				this.height = conf.height;
				this.pivotX = this.width / 2;
				this.pivotY = this.height / 5 * 3;
				let aniName = "cannon" + conf.order + "_fire";
				this.play(4, false, aniName);
			}

		}

		public fire():Bullet {
			let conf = Cannon.cannonConf[this.cannonIndex];
			if (conf) {
				let aniName = "cannon" + conf.order + "_fire";
				this.play(0, false, aniName);
			}
			let bullet:Bullet = Laya.Pool.getItemByClass("bullet",Bullet);
			bullet.setBullectIndex(this.cannonIndex);
			bullet.setDirection(this.direction);
			bullet.x = this.x + this.height / 5 * 3 * Math.cos(this.direction * utils.util.RADIAN_PER_ANGLE);
			bullet.y = this.y + this.height / 5 * 3 * Math.sin(this.direction * utils.util.RADIAN_PER_ANGLE);
			//console.log(this.x, this.y);
			return bullet;
		}

		public cacheFrames() {
			//cannon1
			Laya.Animation.createFrames(["cannon1/cannon1.png", "cannon1/cannon2.png", "cannon1/cannon3.png", "cannon1/cannon4.png", "cannon1/cannon5.png"], "cannon1_fire");
			//cannon2
			Laya.Animation.createFrames(["cannon2/cannon1.png", "cannon2/cannon2.png", "cannon2/cannon3.png", "cannon2/cannon4.png", "cannon2/cannon5.png"], "cannon2_fire");
			//cannon3
			Laya.Animation.createFrames(["cannon3/cannon1.png", "cannon3/cannon2.png", "cannon3/cannon3.png", "cannon3/cannon4.png", "cannon3/cannon5.png"], "cannon3_fire");
			//cannon4
			Laya.Animation.createFrames(["cannon4/cannon1.png", "cannon4/cannon2.png", "cannon4/cannon3.png", "cannon4/cannon4.png", "cannon4/cannon5.png"], "cannon4_fire");
			//cannon5
			Laya.Animation.createFrames(["cannon5/cannon1.png", "cannon5/cannon2.png", "cannon5/cannon3.png", "cannon5/cannon4.png", "cannon5/cannon5.png"], "cannon5_fire");
			//cannon6
			Laya.Animation.createFrames(["cannon6/cannon1.png", "cannon6/cannon2.png", "cannon6/cannon3.png", "cannon6/cannon4.png", "cannon6/cannon5.png"], "cannon6_fire");
			//cannon7
			Laya.Animation.createFrames(["cannon7/cannon1.png", "cannon7/cannon2.png", "cannon7/cannon3.png", "cannon7/cannon4.png", "cannon7/cannon5.png"], "cannon7_fire");
		}
	}
}