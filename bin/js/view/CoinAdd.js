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
    var CoinAdd = (function (_super) {
        __extends(CoinAdd, _super);
        function CoinAdd(value, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this) || this;
            _this.pos(x, y);
            _this.unitX = new Laya.Sprite();
            _this.addChild(_this.unitX);
            _this.unit1 = new Laya.Sprite();
            _this.unit1.x = 36;
            _this.addChild(_this.unit1);
            _this.unit2 = new Laya.Sprite();
            _this.unit2.x = 72;
            _this.addChild(_this.unit2);
            _this.unit3 = new Laya.Sprite();
            _this.unit3.x = 108;
            _this.addChild(_this.unit3);
            if (value) {
                _this.setValue(value);
            }
            return _this;
        }
        CoinAdd.prototype.setValue = function (value) {
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
            var text = this.value.toString();
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
        };
        CoinAdd.prototype.recycle = function (delay) {
            if (delay === void 0) { delay = 0; }
            if (delay > 0) {
                Laya.timer.once(delay, this, this.recycle);
            }
            else {
                this.removeSelf();
                Laya.Pool.recover("coinAdd", this);
            }
        };
        return CoinAdd;
    }(Laya.Sprite));
    view.CoinAdd = CoinAdd;
})(view || (view = {}));
//# sourceMappingURL=CoinAdd.js.map