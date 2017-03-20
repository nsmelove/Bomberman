/**
* name 
*/
module view {
	export class GameMainUI extends ui.GameMainUI {
		coinNum: number;
		energyNum:number;
		cannon: Cannon;
		constructor() {
			super();
			this.init();
		}

		public init() {
			this.graphics.drawTexture(Laya.loader.getRes("res/image/game_bg_2_hd.jpg"));
			this.setCoinNum(10000);
			this.setEnergy(0);
			this.cannon = new Cannon();
			this.cannon.pos(this.cannonView.width / 2, this.cannonView.height / 2);
			this.cannonView.addChild(this.cannon);
			this.on(Laya.Event.CLICK, this, this.onclick);
			
			this.cannonMinus.clickHandler = Laya.Handler.create(this, function () {
				let cannonIndex = this.cannon.cannonIndex -1;
				if(cannonIndex < 0) {
					cannonIndex += Cannon.cannonConf.length;
				}
				this.cannon.setCannonIndex(cannonIndex);
			}, null, false);
			this.cannonMinus.on(Laya.Event.MOUSE_DOWN, this.cannonMinus, function () {
				let image: Laya.Image = this.getChildAt(0);
				image.graphics.clear();
				image.loadImage("res/image/cannon_minus_down.png");
			});
			this.cannonMinus.on(Laya.Event.MOUSE_UP, this.cannonMinus, function () {
				let image: Laya.Image = this.getChildAt(0);
				image.graphics.clear();
				image.loadImage("res/image/cannon_minus.png");
			});
			this.cannonPlus.clickHandler = Laya.Handler.create(this, function () {
				let cannonIndex = this.cannon.cannonIndex + 1;
				if(cannonIndex >= Cannon.cannonConf.length) {
					cannonIndex -= Cannon.cannonConf.length;
				}
				this.cannon.setCannonIndex(cannonIndex);
			}, null, false);
			this.cannonPlus.on(Laya.Event.MOUSE_DOWN, this.cannonPlus, function () {
				let image: Laya.Image = this.getChildAt(0);
				image.graphics.clear();
				image.loadImage("res/image/cannon_plus_down.png");
			});
			this.cannonPlus.on(Laya.Event.MOUSE_UP, this.cannonPlus, function () {
				let image: Laya.Image = this.getChildAt(0);
				image.graphics.clear();
				image.loadImage("res/image/cannon_plus.png");
			});

			Laya.timer.loop(1000, this, this.onloop);
		}

		public onclick(event: Laya.Event) {
			if (event.target.mouseY < event.target.height - 40) {
				let detY = event.target.mouseY - this.cannon.y - this.cannonView.y;
				let detX = event.target.mouseX - this.cannon.x - this.cannonView.x;
				let radian = Math.atan2(detY, detX);
				this.cannon.setDirection(radian / utils.util.RADIAN_PER_ANGLE);
				if (this.coinNum > 0) {
					let bullet: Bullet = this.cannon.fire();
					bullet.x += this.cannonView.x;
					bullet.y += this.cannonView.y;
					this.addChildren(bullet);
					this.subCoinNum(1);
				}

			}
		}

		public onloop() {
			let names = new Array();
			for (let name in view.Fish.fishConf) {
				names.push(name);
			}
			let index = Math.floor(Math.random() * names.length);
			let fish: view.Fish = Laya.Pool.getItemByClass("fish", view.Fish);
			fish.setName(names[index]);
			fish.setSpeed(Math.random() * 0.08 + 0.02)
			let y = Math.random() * (Laya.stage.height - fish.height);
			let direction = Math.random() * 45;
			let left = Math.random() < 0.5 ? true : false
			if (y < (Laya.stage.height - fish.height) / 2) {
				fish.setDirection(direction + (left ? 0 : 180));
			} else {
				fish.setDirection(-direction + (left ? 0 : 180));
			}
			fish.pos(left ? (-2 - fish.width / 2) : (2 + fish.width / 2 + Laya.stage.width), y);
			//console.log(fish.width, fish.height);
			this.addChild(fish);
		}

		public setEnergy(value:number){
			if(value > 1) {
				value = 1;
			}else if(value < 0) {
				value = 0;
			}
			this.energyNum = value;
			let mask = this.energy.mask;
			if(!mask) {
				mask = new Laya.Sprite();
			}
			mask.graphics.clear();
			mask.graphics.drawRect(this.energy.width * (1 - value), 0, this.energy.width * value, this.energy.height, "#ff0000");
			this.energy.mask = mask;
		}

		public addEnergy(value:number){
			this.setEnergy(this.energyNum + value);
		}

		public reduceEnergy(value:number){
			this.setEnergy(this.energyNum - value);
		}

		public setCoinNum(num: number) {
			if (num < 0) {
				num = 0;
			}
			if (num > 999999) {
				num = 999999;
			}
			num = Math.round(num);
			this.coinNum = num;
			console.log(num);
			let number = num % 10;
			this.unit1.graphics.clear();
			this.unit1.loadImage("number_black/" + number + ".png");
			num = (num - number) / 10
			number = num % 10;
			this.unit2.graphics.clear();
			this.unit2.loadImage("number_black/" + number + ".png");
			num = (num - number) / 10
			number = num % 10;
			this.unit3.graphics.clear();
			this.unit3.loadImage("number_black/" + number + ".png");
			num = (num - number) / 10
			number = num % 10;
			this.unit4.graphics.clear();
			this.unit4.loadImage("number_black/" + number + ".png");
			num = (num - number) / 10
			number = num % 10;
			this.unit5.graphics.clear();
			this.unit5.loadImage("number_black/" + number + ".png");
			num = (num - number) / 10
			number = num % 10;
			this.unit6.graphics.clear();
			this.unit6.loadImage("number_black/" + number + ".png");
		}

		public addCoinNum(num: number) {
			this.setCoinNum(this.coinNum + num);
		}

		public subCoinNum(num: number) {
			this.setCoinNum(this.coinNum - num);
		}
	}
}