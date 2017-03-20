var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* name
*/
var view;
(function (view) {
    var GameMainUI = (function (_super) {
        __extends(GameMainUI, _super);
        function GameMainUI() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        GameMainUI.prototype.init = function () {
            this.graphics.drawTexture(Laya.loader.getRes("res/image/game_bg_2_hd.jpg"));
            this.setCoinNum(10000);
            this.setEnergy(0);
            this.cannon = new view.Cannon();
            this.cannon.pos(this.cannonView.width / 2, this.cannonView.height / 2);
            this.cannonView.addChild(this.cannon);
            this.on(Laya.Event.CLICK, this, this.onclick);
            this.cannonMinus.clickHandler = Laya.Handler.create(this, function () {
                var cannonIndex = this.cannon.cannonIndex - 1;
                if (cannonIndex < 0) {
                    cannonIndex += view.Cannon.cannonConf.length;
                }
                this.cannon.setCannonIndex(cannonIndex);
            }, null, false);
            this.cannonMinus.on(Laya.Event.MOUSE_DOWN, this.cannonMinus, function () {
                var image = this.getChildAt(0);
                image.graphics.clear();
                image.loadImage("res/image/cannon_minus_down.png");
            });
            this.cannonMinus.on(Laya.Event.MOUSE_UP, this.cannonMinus, function () {
                var image = this.getChildAt(0);
                image.graphics.clear();
                image.loadImage("res/image/cannon_minus.png");
            });
            this.cannonPlus.clickHandler = Laya.Handler.create(this, function () {
                var cannonIndex = this.cannon.cannonIndex + 1;
                if (cannonIndex >= view.Cannon.cannonConf.length) {
                    cannonIndex -= view.Cannon.cannonConf.length;
                }
                this.cannon.setCannonIndex(cannonIndex);
            }, null, false);
            this.cannonPlus.on(Laya.Event.MOUSE_DOWN, this.cannonPlus, function () {
                var image = this.getChildAt(0);
                image.graphics.clear();
                image.loadImage("res/image/cannon_plus_down.png");
            });
            this.cannonPlus.on(Laya.Event.MOUSE_UP, this.cannonPlus, function () {
                var image = this.getChildAt(0);
                image.graphics.clear();
                image.loadImage("res/image/cannon_plus.png");
            });
            Laya.timer.loop(1000, this, this.onloop);
        };
        GameMainUI.prototype.onclick = function (event) {
            if (event.target.mouseY < event.target.height - 40) {
                var detY = event.target.mouseY - this.cannon.y - this.cannonView.y;
                var detX = event.target.mouseX - this.cannon.x - this.cannonView.x;
                var radian = Math.atan2(detY, detX);
                this.cannon.setDirection(radian / utils.util.RADIAN_PER_ANGLE);
                if (this.coinNum > 0) {
                    var bullet = this.cannon.fire();
                    bullet.x += this.cannonView.x;
                    bullet.y += this.cannonView.y;
                    this.addChildren(bullet);
                    this.subCoinNum(1);
                }
            }
        };
        GameMainUI.prototype.onloop = function () {
            var names = new Array();
            for (var name_1 in view.Fish.fishConf) {
                names.push(name_1);
            }
            var index = Math.floor(Math.random() * names.length);
            var fish = Laya.Pool.getItemByClass("fish", view.Fish);
            fish.setName(names[index]);
            fish.setSpeed(Math.random() * 0.08 + 0.02);
            var y = Math.random() * (Laya.stage.height - fish.height);
            var direction = Math.random() * 45;
            var left = Math.random() < 0.5 ? true : false;
            if (y < (Laya.stage.height - fish.height) / 2) {
                fish.setDirection(direction + (left ? 0 : 180));
            }
            else {
                fish.setDirection(-direction + (left ? 0 : 180));
            }
            fish.pos(left ? (-2 - fish.width / 2) : (2 + fish.width / 2 + Laya.stage.width), y);
            //console.log(fish.width, fish.height);
            this.addChild(fish);
        };
        GameMainUI.prototype.setEnergy = function (value) {
            if (value > 1) {
                value = 1;
            }
            else if (value < 0) {
                value = 0;
            }
            this.energyNum = value;
            var mask = this.energy.mask;
            if (!mask) {
                mask = new Laya.Sprite();
            }
            mask.graphics.clear();
            mask.graphics.drawRect(this.energy.width * (1 - value), 0, this.energy.width * value, this.energy.height, "#ff0000");
            this.energy.mask = mask;
        };
        GameMainUI.prototype.addEnergy = function (value) {
            this.setEnergy(this.energyNum + value);
        };
        GameMainUI.prototype.reduceEnergy = function (value) {
            this.setEnergy(this.energyNum - value);
        };
        GameMainUI.prototype.setCoinNum = function (num) {
            if (num < 0) {
                num = 0;
            }
            if (num > 999999) {
                num = 999999;
            }
            num = Math.round(num);
            this.coinNum = num;
            console.log(num);
            var number = num % 10;
            this.unit1.graphics.clear();
            this.unit1.loadImage("number_black/" + number + ".png");
            num = (num - number) / 10;
            number = num % 10;
            this.unit2.graphics.clear();
            this.unit2.loadImage("number_black/" + number + ".png");
            num = (num - number) / 10;
            number = num % 10;
            this.unit3.graphics.clear();
            this.unit3.loadImage("number_black/" + number + ".png");
            num = (num - number) / 10;
            number = num % 10;
            this.unit4.graphics.clear();
            this.unit4.loadImage("number_black/" + number + ".png");
            num = (num - number) / 10;
            number = num % 10;
            this.unit5.graphics.clear();
            this.unit5.loadImage("number_black/" + number + ".png");
            num = (num - number) / 10;
            number = num % 10;
            this.unit6.graphics.clear();
            this.unit6.loadImage("number_black/" + number + ".png");
        };
        GameMainUI.prototype.addCoinNum = function (num) {
            this.setCoinNum(this.coinNum + num);
        };
        GameMainUI.prototype.subCoinNum = function (num) {
            this.setCoinNum(this.coinNum - num);
        };
        return GameMainUI;
    }(ui.GameMainUI));
    view.GameMainUI = GameMainUI;
})(view || (view = {}));
//# sourceMappingURL=GameMainUI.js.map