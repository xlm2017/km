(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.myBundle = factory());
})(this, (function () { 'use strict';

  /*
   * @Description: 
   * @Author: xlm
   * @Date: 2023-03-20 14:26:34
   * @LastEditTime: 2023-03-21 11:11:21
   * @LastEditors: xlm
   */


  function getName() {
    return 'roooup';
  }

  var main = {
    getName
  };

  return main;

}));
