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
    var Web = (function (_super) {
        __extends(Web, _super);
        function Web(webIndex) {
            if (webIndex === void 0) { webIndex = 0; }
            return _super.call(this) || this;
        }
        Web.prototype.setWebIndex = function (webIndex) {
            if (webIndex === void 0) { webIndex = 0; }
            this.webIndex = webIndex;
            this.graphics.clear();
            var conf = Web.webConf[webIndex];
            if (conf) {
                this.loadImage(conf.image);
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 2;
            }
        };
        //捕到鱼
        Web.prototype.trap = function (fish) {
            var timeLine = Laya.TimeLine
                .to(this, { scaleX: 1.2, scaleY: 1.2 }, 100)
                .to(this, { scaleX: 1, scaleY: 1 }, 100);
            timeLine.play();
            fish.struggle();
            timeLine.once(Laya.Event.COMPLETE, this, this.onTrap, [fish]);
        };
        Web.prototype.onTrap = function (fish) {
            fish.once(Laya.Event.COMPLETE, fish, fish.recycle);
            var conf = view.Fish.fishConf[fish.name];
            if (conf) {
                var coinAdd = Laya.Pool.getItemByClass("coinText", view.CoinText);
                coinAdd.setValue(conf.coin);
                coinAdd.pos(this.x, this.y);
                fish.parent.addChild(coinAdd);
                coinAdd.recycle(500);
                var coinAni = Laya.Pool.getItemByClass("coinAni", view.CoinAni);
                coinAni.pos(this.x, this.y);
                if (conf.coin >= 50) {
                    coinAni.setType(2);
                }
                else {
                    coinAni.setType(1);
                }
                coinAni.addNum = conf.coin;
                fish.parent.addChild(coinAni);
            }
            this.recycle();
        };
        Web.prototype.recycle = function () {
            this.removeSelf();
            Laya.Pool.recover("web", this);
        };
        return Web;
    }(Laya.Sprite));
    Web.webConf = [
        { order: 1, image: "res/image/web1.png" },
        { order: 2, image: "res/image/web2.png" },
        { order: 3, image: "res/image/web3.png" },
        { order: 4, image: "res/image/web4.png" },
        { order: 5, image: "res/image/web5.png" },
        { order: 6, image: "res/image/web6.png" },
        { order: 7, image: "res/image/web7.png" }
    ];
    view.Web = Web;
})(view || (view = {}));
//# sourceMappingURL=Web.js.map