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
    var Fish = (function (_super) {
        __extends(Fish, _super);
        function Fish(name, speed, direction) {
            if (name === void 0) { name = "fish1"; }
            if (speed === void 0) { speed = 0.02; }
            if (direction === void 0) { direction = 0; }
            var _this = _super.call(this) || this;
            if (!Fish.cache) {
                _this.cacheFrames();
                Fish.cache = true;
            }
            //console.log("new fish");
            _this.zOrder = -1;
            _this.setName(name);
            _this.setSpeed(speed);
            _this.setDirection(direction);
            Laya.timer.frameLoop(1, _this, _this.onloop);
            _this.loopTime = Laya.Browser.now();
            _this.move();
            return _this;
        }
        Fish.prototype.setName = function (name) {
            var conf = Fish.fishConf[name];
            if (conf) {
                this.name = name;
                this.width = conf.width;
                this.height = conf.height;
                this.pivot(this.width / 2, this.height / 2);
            }
            else {
                //console.error("fish " + name + " not exit");
                return;
            }
            this.move();
        };
        Fish.prototype.setSpeed = function (speed) {
            this.speed = speed;
            this.interval = 4 / this.speed;
            //console.log(this.speed, this.interval);
        };
        Fish.prototype.setDirection = function (direction) {
            this.direction = direction;
            this.rotation = this.direction;
        };
        Fish.prototype.move = function () {
            var aniName = this.name + "_move";
            this.play(0, true, aniName);
        };
        Fish.prototype.struggle = function () {
            this.speed = 0;
            this.interval = 200;
            var aniName = this.name + "_struggle";
            this.play(0, true, aniName);
        };
        Fish.prototype.onloop = function () {
            var now = Laya.Browser.now();
            var dis = this.speed * (now - this.loopTime);
            if (dis > 0) {
                this.x += dis * Math.cos(this.direction * utils.util.RADIAN_PER_ANGLE);
                this.y += dis * Math.sin(this.direction * utils.util.RADIAN_PER_ANGLE);
            }
            this.loopTime = now;
            if (this.parent) {
                if (this.x < 0 - this.width || this.x > Laya.stage.width + this.width || this.y < 0 - this.height || this.y > Laya.stage.height + this.height) {
                    this.recycle();
                }
            }
        };
        Fish.prototype.recycle = function () {
            //Laya.timer.clear(this, this.onloop);
            this.removeSelf();
            Laya.Pool.recover("fish", this);
        };
        Fish.prototype.cacheFrames = function () {
            //fish1
            Laya.Animation.createFrames(["fish1/fish_move1.png", "fish1/fish_move2.png", "fish1/fish_move3.png", "fish1/fish_move4.png"], "fish1_move");
            Laya.Animation.createFrames(["fish1/fish_struggle1.png", "fish1/fish_struggle2.png", "fish1/fish_struggle3.png", "fish1/fish_struggle4.png"], "fish1_struggle");
            //fish2
            Laya.Animation.createFrames(["fish2/fish_move1.png", "fish2/fish_move2.png", "fish2/fish_move3.png", "fish2/fish_move4.png"], "fish2_move");
            Laya.Animation.createFrames(["fish2/fish_struggle1.png", "fish2/fish_struggle2.png", "fish2/fish_struggle3.png", "fish2/fish_struggle4.png"], "fish2_struggle");
            //fish3
            Laya.Animation.createFrames(["fish3/fish_move1.png", "fish3/fish_move2.png", "fish3/fish_move3.png", "fish3/fish_move4.png"], "fish3_move");
            Laya.Animation.createFrames(["fish3/fish_struggle1.png", "fish3/fish_struggle2.png", "fish3/fish_struggle3.png", "fish3/fish_struggle4.png"], "fish3_struggle");
            //fish4
            Laya.Animation.createFrames(["fish4/fish_move1.png", "fish4/fish_move2.png", "fish4/fish_move3.png", "fish4/fish_move4.png"], "fish4_move");
            Laya.Animation.createFrames(["fish4/fish_struggle1.png", "fish4/fish_struggle2.png", "fish4/fish_struggle3.png", "fish4/fish_struggle4.png"], "fish4_struggle");
            //fish5
            Laya.Animation.createFrames(["fish5/fish_move1.png", "fish5/fish_move2.png", "fish5/fish_move3.png", "fish5/fish_move4.png"], "fish5_move");
            Laya.Animation.createFrames(["fish5/fish_struggle1.png", "fish5/fish_struggle2.png", "fish5/fish_struggle3.png", "fish5/fish_struggle4.png"], "fish5_struggle");
            //fish6
            Laya.Animation.createFrames([
                "fish6/fish_move1.png", "fish6/fish_move2.png", "fish6/fish_move3.png", "fish6/fish_move4.png",
                "fish6/fish_move5.png", "fish6/fish_move6.png", "fish6/fish_move7.png", "fish6/fish_move8.png"
            ], "fish6_move");
            Laya.Animation.createFrames(["fish6/fish_struggle1.png", "fish6/fish_struggle2.png", "fish6/fish_struggle3.png", "fish6/fish_struggle4.png"], "fish6_struggle");
            //fish7
            Laya.Animation.createFrames([
                "fish7/fish_move1.png", "fish7/fish_move2.png", "fish7/fish_move3.png",
                "fish7/fish_move4.png", "fish7/fish_move5.png", "fish7/fish_move6.png"
            ], "fish7_move");
            Laya.Animation.createFrames(["fish7/fish_struggle1.png", "fish7/fish_struggle2.png", "fish7/fish_struggle3.png", "fish7/fish_struggle4.png"], "fish7_struggle");
            //fish8
            Laya.Animation.createFrames([
                "fish8/fish_move1.png", "fish8/fish_move2.png", "fish8/fish_move3.png", "fish8/fish_move4.png",
                "fish8/fish_move5.png", "fish8/fish_move6.png", "fish8/fish_move7.png", "fish8/fish_move8.png"
            ], "fish8_move");
            Laya.Animation.createFrames(["fish8/fish_struggle1.png", "fish8/fish_struggle2.png", "fish8/fish_struggle3.png", "fish8/fish_struggle4.png"], "fish8_struggle");
            //fish9
            Laya.Animation.createFrames([
                "fish9/fish_move1.png", "fish9/fish_move2.png", "fish9/fish_move3.png", "fish9/fish_move4.png",
                "fish9/fish_move5.png", "fish9/fish_move6.png", "fish9/fish_move7.png", "fish9/fish_move8.png"
            ], "fish9_move");
            Laya.Animation.createFrames(["fish9/fish_struggle1.png", "fish9/fish_struggle2.png", "fish9/fish_struggle3.png", "fish9/fish_struggle4.png"], "fish9_struggle");
            //fish10
            Laya.Animation.createFrames([
                "fish10/fish_move1.png", "fish10/fish_move2.png", "fish10/fish_move3.png",
                "fish10/fish_move4.png", "fish10/fish_move5.png", "fish10/fish_move6.png"
            ], "fish10_move");
            Laya.Animation.createFrames(["fish10/fish_struggle1.png", "fish10/fish_struggle2.png", "fish10/fish_struggle3.png", "fish10/fish_struggle4.png"], "fish10_struggle");
            //shark1
            Laya.Animation.createFrames([
                "shark1/shark_move1.png", "shark1/shark_move2.png", "shark1/shark_move3.png", "shark1/shark_move4.png",
                "shark1/shark_move5.png", "shark1/shark_move6.png", "shark1/shark_move7.png", "shark1/shark_move8.png"
            ], "shark1_move");
            Laya.Animation.createFrames(["shark1/shark_struggle1.png", "shark1/shark_struggle2.png", "shark1/shark_struggle3.png", "shark1/shark_struggle4.png"], "shark1_struggle");
            //shark2
            Laya.Animation.createFrames([
                "shark2/shark_move1.png", "shark2/shark_move2.png", "shark2/shark_move3.png", "shark2/shark_move4.png",
                "shark2/shark_move5.png", "shark2/shark_move6.png", "shark2/shark_move7.png", "shark2/shark_move8.png"
            ], "shark2_move");
            Laya.Animation.createFrames(["shark2/shark_struggle1.png", "shark2/shark_struggle2.png", "shark2/shark_struggle3.png", "shark2/shark_struggle4.png"], "shark2_struggle");
        };
        return Fish;
    }(Laya.Animation));
    Fish.cache = false;
    Fish.fishConf = {
        fish1: { width: 55, height: 37 / 3 * 2, coin: 5 },
        fish2: { width: 78, height: 64 / 3 * 2, coin: 5 },
        fish3: { width: 72, height: 56 / 2, coin: 10 },
        fish4: { width: 77, height: 59 / 2, coin: 10 },
        fish5: { width: 107, height: 122 / 3 * 2, coin: 20 },
        fish6: { width: 105, height: 79 / 3 * 2, coin: 20 },
        fish7: { width: 92, height: 151 / 3 * 2, coin: 50 },
        fish8: { width: 174 / 3 * 2, height: 126 / 3 * 2, coin: 50 },
        fish9: { width: 166, height: 183 / 4 * 3, coin: 100 },
        fish10: { width: 178, height: 187 / 3 * 2, coin: 100 },
        shark1: { width: 509, height: 270, coin: 200 },
        shark2: { width: 516, height: 273, coin: 200 },
    };
    view.Fish = Fish;
})(view || (view = {}));
//# sourceMappingURL=Fish.js.map