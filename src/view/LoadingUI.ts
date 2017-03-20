/**
* name 
*/
module view {
	export class LoadingUI extends ui.LoadingUI {
		constructor() {
			super();
		}
		public setProgress(progress:number) {
			let percent = Math.round(progress * 100);
			this.progressText.text = "(" + percent + "%)";
		}
	}
}