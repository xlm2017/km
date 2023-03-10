/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-10 13:48:34
 * @LastEditTime: 2023-03-10 14:37:18
 * @LastEditors: xlm
 */


class Locations {
  constructor(spine, request, pause) {
    this.spine = spine;
    this.request = request;
    this.pause = pause || 100;

    this.q = new Queue(this);
    this.epubcfi = new EpubCFI();

    this._locations = [];
    this._locationsWords = [];
    this.total = 0;

    this.break = 150;

    this._current = 0;

    this._wordCounter = 0;

    this.currentLocation = '';
    this._currentCfi = '';
    this.processingTimeout = undefined;
  }
  /**
   * Get the current location
   */
  get currentLocation () {
    return this._current;
  }

  /**
   * Set the current location
   */
  set currentLocation (curr) {
    this.setCurrent(curr);
  }
}


setTimeout(() => {
  console.log("dings")
  locations.currentLocation = 0.3;
  rendition.display();
}, 3000);

locations.on("changed", function (location) {
  console.log("地址改变", location);
});


// 但是这里的改变并没有渲染能力, 这个api不能为进度条跳转服务,  这是为了渲染器服务的 ????