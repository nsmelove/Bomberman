var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameMainUI = (function (_super) {
        __extends(GameMainUI, _super);
        function GameMainUI() {
            return _super.call(this) || this;
        }
        GameMainUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameMainUI.uiView);
        };
        return GameMainUI;
    }(View));
    GameMainUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 698, "x": 129.5, "skin": "res/image/bottom-bar.png" } }, { "type": "Sprite", "props": { "y": 746, "x": 546, "width": 20, "var": "cannonView", "height": 20 } }, { "type": "Button", "props": { "y": 734, "x": 474, "width": 44, "var": "cannonMinus", "stateNum": 2, "height": 32 }, "child": [{ "type": "Image", "props": { "skin": "res/image/cannon_minus.png" } }] }, { "type": "Button", "props": { "y": 734, "x": 595, "width": 44, "var": "cannonPlus", "stateNum": "2", "height": 32 }, "child": [{ "type": "Image", "props": { "skin": "res/image/cannon_plus.png" } }] }, { "type": "Sprite", "props": { "y": 743, "x": 145, "width": 144, "var": "coinNumView", "height": 24 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 4, "width": 20, "var": "unit6", "height": 24 } }, { "type": "Image", "props": { "y": 0, "x": 26, "width": 20, "var": "unit5", "height": 24 } }, { "type": "Image", "props": { "y": 0, "x": 49, "width": 20, "var": "unit4", "height": 24 } }, { "type": "Image", "props": { "y": 0, "x": 72, "width": 20, "var": "unit3", "height": 24 } }, { "type": "Image", "props": { "y": 0, "x": 96, "width": 20, "var": "unit2", "height": 24 } }, { "type": "Image", "props": { "y": 0, "x": 120, "width": 20, "var": "unit1", "height": "24" } }] }, { "type": "Image", "props": { "y": 742, "x": 672.5, "var": "energy", "skin": "res/image/energy-bar.png" } }] };
    ui.GameMainUI = GameMainUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingUI = (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingUI.uiView);
        };
        return LoadingUI;
    }(View));
    LoadingUI.uiView = { "type": "View", "props": { "width": 1024, "text": "正在加载资源中，请稍后...", "height": 768, "font": "SimHei" }, "child": [{ "type": "Label", "props": { "y": 358.5, "x": 415, "width": 194, "text": "正在加载资源中，请稍后...", "height": 51, "fontSize": 16, "font": "Arial", "color": "#ffffff", "bold": true }, "child": [{ "type": "Text", "props": { "y": 20, "x": 76, "width": 42, "var": "progressText", "text": "(99%)", "height": 22, "fontSize": "14", "font": "Arial", "color": "#ffffff" } }] }] };
    ui.LoadingUI = LoadingUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map