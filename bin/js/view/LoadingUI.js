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
    var LoadingUI = (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.prototype.setProgress = function (progress) {
            var percent = Math.round(progress * 100);
            this.progressText.text = "(" + percent + "%)";
        };
        return LoadingUI;
    }(ui.LoadingUI));
    view.LoadingUI = LoadingUI;
})(view || (view = {}));
//# sourceMappingURL=LoadingUI.js.map