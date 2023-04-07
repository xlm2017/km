(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ttt = {}));
})(this, (function (exports) { 'use strict';

  /*
   * @Description: 
   * @Author: xlm
   * @Date: 2023-03-20 14:26:34
   * @LastEditTime: 2023-03-20 14:28:38
   * @LastEditors: xlm
   */


  function getName() {
    return 'roooup';
  }

  exports.getName = getName;

}));
//# sourceMappingURL=index.js.map
