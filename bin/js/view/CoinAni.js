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
    var CoinAni = (function (_super) {
        __extends(CoinAni, _super);
        function CoinAni(type) {
            var _this = _super.call(this) || this;
            if (!CoinAni.cached) {
                Laya.Animation.createFrames(["coinAni1/coin1.png", "coinAni1/coin2.png", "coinAni1/coin3.png", "coinAni1/coin5.png", "coinAni1/coin5.png",
                    "coinAni1/coin6.png", "coinAni1/coin7.png", "coinAni1/coin8.png", "coinAni1/coin9.png", "coinAni1/coin10.png"], "coinAni1");
                Laya.Animation.createFrames(["coinAni2/coin1.png", "coinAni2/coin2.png", "coinAni2/coin3.png", "coinAni2/coin5.png", "coinAni2/coin5.png",
                    "coinAni2/coin6.png", "coinAni2/coin7.png", "coinAni2/coin8.png", "coinAni2/coin9.png", "coinAni2/coin10.png"], "coinAni2");
                CoinAni.cached = true;
            }
            _this.interval = 100;
            _this.pivot(30, 30);
            if (type) {
                _this.setType(type);
            }
            return _this;
        }
        CoinAni.prototype.setType = function (type) {
            this.type = type;
            this.play(0, true, "coinAni" + type);
            var dis = CoinAni.coinDest.distance(this.x, this.y);
            var timeLine = Laya.TimeLine.to(this, { x: CoinAni.coinDest.x, y: CoinAni.coinDest.y }, dis / 0.5);
            timeLine.play();
            timeLine.once(Laya.Event.COMPLETE, this, this.onFinish);
        };
        CoinAni.prototype.onFinish = function () {
            if (this.parent) {
                var gameMainUI = this.parent;
                gameMainUI.addCoinNum(this.addNum);
            }
            this.recycle();
        };
        CoinAni.prototype.recycle = function () {
            this.removeSelf();
            Laya.Pool.recover("coinAni", this);
        };
        return CoinAni;
    }(Laya.Animation));
    CoinAni.cached = false;
    CoinAni.coinDest = new Laya.Point(230, 668);
    view.CoinAni = CoinAni;
})(view || (view = {}));
//# sourceMappingURL=CoinAni.js.map