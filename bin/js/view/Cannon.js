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
    var Cannon = (function (_super) {
        __extends(Cannon, _super);
        function Cannon(cannonIndex, direction) {
            if (cannonIndex === void 0) { cannonIndex = 0; }
            if (direction === void 0) { direction = -90; }
            var _this = _super.call(this) || this;
            if (!Cannon.cache) {
                _this.cacheFrames();
                Cannon.cache = true;
            }
            _this.interval = 100;
            _this.setCannonIndex(cannonIndex);
            _this.setDirection(direction);
            return _this;
        }
        Cannon.prototype.setDirection = function (direction) {
            this.direction = direction;
            this.rotation = this.direction + 90;
        };
        Cannon.prototype.setCannonIndex = function (cannonIndex) {
            this.cannonIndex = cannonIndex;
            var conf = Cannon.cannonConf[cannonIndex];
            if (conf) {
                this.width = conf.width;
                this.height = conf.height;
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 5 * 3;
                var aniName = "cannon" + conf.order + "_fire";
                this.play(4, false, aniName);
            }
        };
        Cannon.prototype.fire = function () {
            var conf = Cannon.cannonConf[this.cannonIndex];
            if (conf) {
                var aniName = "cannon" + conf.order + "_fire";
                this.play(0, false, aniName);
            }
            var bullet = Laya.Pool.getItemByClass("bullet", view.Bullet);
            bullet.setBullectIndex(this.cannonIndex);
            bullet.setDirection(this.direction);
            bullet.x = this.x + this.height / 5 * 3 * Math.cos(this.direction * utils.util.RADIAN_PER_ANGLE);
            bullet.y = this.y + this.height / 5 * 3 * Math.sin(this.direction * utils.util.RADIAN_PER_ANGLE);
            //console.log(this.x, this.y);
            return bullet;
        };
        Cannon.prototype.cacheFrames = function () {
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
        };
        return Cannon;
    }(Laya.Animation));
    Cannon.cache = false;
    Cannon.cannonConf = [
        { order: 1, width: 74, height: 74 },
        { order: 2, width: 74, height: 76 },
        { order: 3, width: 74, height: 76 },
        { order: 4, width: 74, height: 83 },
        { order: 5, width: 74, height: 85 },
        { order: 6, width: 74, height: 90 },
        { order: 7, width: 74, height: 94 }
    ];
    view.Cannon = Cannon;
})(view || (view = {}));
//# sourceMappingURL=Cannon.js.map