"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var a = 1;
[1, 2, 3].map(function (n) {
  return n + 1;
});

var Book = /*#__PURE__*/function () {
  function Book(name) {
    _classCallCheck(this, Book);

    this.name = name;
  }

  _createClass(Book, [{
    key: "getName",
    value: function getName() {
      return this.name || '默认';
    }
  }]);

  return Book;
}();
