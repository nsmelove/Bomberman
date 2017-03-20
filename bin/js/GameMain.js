// 程序入口
var GameMain = (function () {
    function GameMain() {
        var assets = [
            "res/image/game_bg_2_hd.jpg",
            "res/image/bullet1.png",
            "res/image/bullet2.png",
            "res/image/bullet3.png",
            "res/image/bullet4.png",
            "res/image/bullet5.png",
            "res/image/bullet6.png",
            "res/image/bullet7.png",
            "res/image/bullet8.png",
            "res/image/cannon1.png",
            "res/image/cannon2.png",
            "res/image/web1.png",
            "res/image/web2.png",
            "res/image/web3.png",
            "res/image/web4.png",
            "res/image/web5.png",
            "res/image/bullet6.png",
            "res/image/bullet7.png",
            "res/image/bullet8.png",
            "res/image/cannon1.png",
            "res/image/cannon2.png",
            "res/image/cannon3.png",
            "res/image/cannon4.png",
            "res/image/cannon5.png",
            "res/image/cannon6.png",
            "res/image/cannon7.png",
            "res/image/cannon_minus.png",
            "res/image/cannon_minus_down.png",
            "res/image/cannon_plus.png",
            "res/image/cannon_plus_down.png",
            "res/image/energy-bar.png",
            { url: "res/image/coinAni1.json", type: Laya.Loader.ATLAS },
            { url: "res/image/coinAni2.json", type: Laya.Loader.ATLAS },
            { url: "res/image/coinText.json", type: Laya.Loader.ATLAS },
            { url: "res/image/number_black.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish1.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish2.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish3.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish4.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish5.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish6.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish7.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish8.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish9.json", type: Laya.Loader.ATLAS },
            { url: "res/image/fish10.json", type: Laya.Loader.ATLAS },
            { url: "res/image/shark1.json", type: Laya.Loader.ATLAS },
            { url: "res/image/shark2.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon1.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon2.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon3.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon4.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon5.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon6.json", type: Laya.Loader.ATLAS },
            { url: "res/image/cannon7.json", type: Laya.Loader.ATLAS },
        ];
        Laya.init(1024, 768, Laya.WebGL);
        Laya.Stat.show();
        //laya.debug.DebugTool.init();
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "middle";
        Laya.stage.bgColor = "#000000";
        this.loadingUI = new view.LoadingUI();
        Laya.loader.load(assets, Laya.Handler.create(this, this.onResComplete), Laya.Handler.create(this, this.onResProgress, null, false));
    }
    GameMain.prototype.onResComplete = function () {
        Laya.stage.removeChild(this.loadingUI);
        this.gameMainUI = new view.GameMainUI();
        Laya.stage.addChild(this.gameMainUI);
    };
    GameMain.prototype.onResProgress = function (progress) {
        //console.log(progress);
        if (!Laya.stage.contains(this.loadingUI)) {
            Laya.stage.addChild(this.loadingUI);
        }
        this.loadingUI.setProgress(progress);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map