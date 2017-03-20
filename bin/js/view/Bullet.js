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
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(bulletIndex, speed, direction) {
            if (bulletIndex === void 0) { bulletIndex = 0; }
            if (speed === void 0) { speed = 0.3; }
            if (direction === void 0) { direction = -90; }
            var _this = _super.call(this) || this;
            _this.speed = speed;
            _this.setDirection(direction);
            _this.setBullectIndex(bulletIndex);
            Laya.timer.frameLoop(1, _this, _this.onloop);
            _this.loopTime = Laya.Browser.now();
            return _this;
        }
        Bullet.prototype.setDirection = function (direction) {
            this.direction = direction;
            this.rotation = direction + 90;
        };
        Bullet.prototype.setBullectIndex = function (bulletIndex) {
            this.bulletIndex = bulletIndex;
            this.graphics.clear();
            var conf = Bullet.bulletConf[bulletIndex];
            if (conf) {
                this.loadImage(conf.image);
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 2;
            }
        };
        Bullet.prototype.onloop = function () {
            var now = Laya.Browser.now();
            var distValue = this.speed * (now - this.loopTime);
            this.x += distValue * Math.cos(utils.util.RADIAN_PER_ANGLE * this.direction);
            this.y += distValue * Math.sin(utils.util.RADIAN_PER_ANGLE * this.direction);
            this.loopTime = now;
            if (this.parent) {
                if (this.x < 0 - this.width || this.x > Laya.stage.width + this.width || this.y < 0 - this.height || this.y > Laya.stage.height + this.height) {
                    this.parent.addEnergy(0.01);
                    this.recycle();
                }
                else {
                    for (var i = this.parent.numChildren - 1, child = void 0; i >= 0; i--) {
                        child = this.parent.getChildAt(i);
                        if (child instanceof view.Fish && child.hitTestPoint(this.x, this.y)) {
                            var web = Laya.Pool.getItemByClass("web", view.Web);
                            web.setWebIndex(this.bulletIndex);
                            web.pos(this.x, this.y);
                            this.parent.addChild(web);
                            web.trap(child);
                            this.recycle();
                            break;
                        }
                    }
                }
            }
        };
        Bullet.prototype.recycle = function () {
            //Laya.timer.clear(this, this.onloop);
            this.removeSelf();
            Laya.Pool.recover("bullet", this);
        };
        return Bullet;
    }(Laya.Sprite));
    Bullet.bulletConf = [
        { order: 1, image: "res/image/bullet1.png" },
        { order: 2, image: "res/image/bullet2.png" },
        { order: 3, image: "res/image/bullet3.png" },
        { order: 4, image: "res/image/bullet4.png" },
        { order: 5, image: "res/image/bullet5.png" },
        { order: 6, image: "res/image/bullet6.png" },
        { order: 7, image: "res/image/bullet7.png" }
    ];
    view.Bullet = Bullet;
})(view || (view = {}));
//# sourceMappingURL=Bullet.js.map