
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameMainUI extends View {
		public cannonView:Laya.Sprite;
		public cannonMinus:Laya.Button;
		public cannonPlus:Laya.Button;
		public coinNumView:Laya.Sprite;
		public unit6:Laya.Image;
		public unit5:Laya.Image;
		public unit4:Laya.Image;
		public unit3:Laya.Image;
		public unit2:Laya.Image;
		public unit1:Laya.Image;
		public energy:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":698,"x":129.5,"skin":"res/image/bottom-bar.png"}},{"type":"Sprite","props":{"y":746,"x":546,"width":20,"var":"cannonView","height":20}},{"type":"Button","props":{"y":734,"x":474,"width":44,"var":"cannonMinus","stateNum":2,"height":32},"child":[{"type":"Image","props":{"skin":"res/image/cannon_minus.png"}}]},{"type":"Button","props":{"y":734,"x":595,"width":44,"var":"cannonPlus","stateNum":"2","height":32},"child":[{"type":"Image","props":{"skin":"res/image/cannon_plus.png"}}]},{"type":"Sprite","props":{"y":743,"x":145,"width":144,"var":"coinNumView","height":24},"child":[{"type":"Image","props":{"y":0,"x":4,"width":20,"var":"unit6","height":24}},{"type":"Image","props":{"y":0,"x":26,"width":20,"var":"unit5","height":24}},{"type":"Image","props":{"y":0,"x":49,"width":20,"var":"unit4","height":24}},{"type":"Image","props":{"y":0,"x":72,"width":20,"var":"unit3","height":24}},{"type":"Image","props":{"y":0,"x":96,"width":20,"var":"unit2","height":24}},{"type":"Image","props":{"y":0,"x":120,"width":20,"var":"unit1","height":"24"}}]},{"type":"Image","props":{"y":742,"x":672.5,"var":"energy","skin":"res/image/energy-bar.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameMainUI.uiView);
        }
    }
}

module ui {
    export class LoadingUI extends View {
		public progressText:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"text":"正在加载资源中，请稍后...","height":768,"font":"SimHei"},"child":[{"type":"Label","props":{"y":358.5,"x":415,"width":194,"text":"正在加载资源中，请稍后...","height":51,"fontSize":16,"font":"Arial","color":"#ffffff","bold":true},"child":[{"type":"Text","props":{"y":20,"x":76,"width":42,"var":"progressText","text":"(99%)","height":22,"fontSize":"14","font":"Arial","color":"#ffffff"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.LoadingUI.uiView);
        }
    }
}
