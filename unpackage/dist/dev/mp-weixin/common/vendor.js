(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/common/city.data.js":
/*!*****************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/common/city.data.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = [{ "value": 610000, "label": "陕西省", "children": [{ "value": 610100, "label": "西安市" }, { "value": 610200, "label": "铜川市" }, { "value": 610300, "label": "宝鸡市" }, { "value": 610400, "label": "咸阳市" }, { "value": 610500, "label": "渭南市" }, { "value": 610600, "label": "延安市" }, { "value": 610700, "label": "汉中市" }, { "value": 610800, "label": "榆林市" }, { "value": 610900, "label": "安康市" }, { "value": 611000, "label": "商洛市" }] }, { "value": 450000, "label": "广西", "children": [{ "value": 450100, "label": "南宁市" }, { "value": 450200, "label": "柳州市" }, { "value": 450300, "label": "桂林市" }, { "value": 450400, "label": "梧州市" }, { "value": 450500, "label": "北海市" }, { "value": 450600, "label": "防城港市" }, { "value": 450700, "label": "钦州市" }, { "value": 450800, "label": "贵港市" }, { "value": 450900, "label": "玉林市" }, { "value": 451000, "label": "百色市" }, { "value": 451100, "label": "贺州市" }, { "value": 451200, "label": "河池市" }, { "value": 451300, "label": "来宾市" }, { "value": 451400, "label": "崇左市" }] }];exports.default = _default;

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/common/clipboard.min.js":
/*!*********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/common/clipboard.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /*!
               * clipboard.js v2.0.4
               * https://zenorocha.github.io/clipboard.js
               * 
               * Licensed MIT © Zeno Rocha
               */
!function (t, e) { true ? module.exports = e() : undefined;}(void 0, function () {return function (n) {var o = {};function r(t) {if (o[t]) return o[t].exports;var e = o[t] = { i: t, l: !1, exports: {} };return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;}return r.m = n, r.c = o, r.d = function (t, e, n) {r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });}, r.r = function (t) {"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });}, r.t = function (e, t) {if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {r.d(n, o, function (t) {return e[t];}.bind(null, o));}return n;}, r.n = function (t) {var e = t && t.__esModule ? function () {return t.default;} : function () {return t;};return r.d(e, "a", e), e;}, r.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, r.p = "", r(r.s = 0);}([function (t, e, n) {"use strict";var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;},i = function () {function o(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}return function (t, e, n) {return e && o(t.prototype, e), n && o(t, n), t;};}(),a = o(n(1)),c = o(n(3)),u = o(n(4));function o(t) {return t && t.__esModule ? t : { default: t };}var l = function (t) {function o(t, e) {!function (t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");}(this, o);var n = function (t, e) {if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != typeof e && "function" != typeof e ? t : e;}(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));return n.resolveOptions(e), n.listenClick(t), n;}return function (t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);}(o, c.default), i(o, [{ key: "resolveOptions", value: function value() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body;} }, { key: "listenClick", value: function value(t) {var e = this;this.listener = (0, u.default)(t, "click", function (t) {return e.onClick(t);});} }, { key: "onClick", value: function value(t) {var e = t.delegateTarget || t.currentTarget;this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this });} }, { key: "defaultAction", value: function value(t) {return s("action", t);} }, { key: "defaultTarget", value: function value(t) {var e = s("target", t);if (e) return document.querySelector(e);} }, { key: "defaultText", value: function value(t) {return s("text", t);} }, { key: "destroy", value: function value() {this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);} }], [{ key: "isSupported", value: function value() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],e = "string" == typeof t ? [t] : t,n = !!document.queryCommandSupported;return e.forEach(function (t) {n = n && !!document.queryCommandSupported(t);}), n;} }]), o;}();function s(t, e) {var n = "data-clipboard-" + t;if (e.hasAttribute(n)) return e.getAttribute(n);}t.exports = l;}, function (t, e, n) {"use strict";var o,r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {return typeof t;} : function (t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;},i = function () {function o(t, e) {for (var n = 0; n < e.length; n++) {var o = e[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);}}return function (t, e, n) {return e && o(t.prototype, e), n && o(t, n), t;};}(),a = n(2),c = (o = a) && o.__esModule ? o : { default: o };var u = function () {function e(t) {!function (t, e) {if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");}(this, e), this.resolveOptions(t), this.initSelection();}return i(e, [{ key: "resolveOptions", value: function value() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";} }, { key: "initSelection", value: function value() {this.text ? this.selectFake() : this.target && this.selectTarget();} }, { key: "selectFake", value: function value() {var t = this,e = "rtl" == document.documentElement.getAttribute("dir");this.removeFake(), this.fakeHandlerCallback = function () {return t.removeFake();}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";var n = window.pageYOffset || document.documentElement.scrollTop;this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem), this.copyText();} }, { key: "removeFake", value: function value() {this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);} }, { key: "selectTarget", value: function value() {this.selectedText = (0, c.default)(this.target), this.copyText();} }, { key: "copyText", value: function value() {var e = void 0;try {e = document.execCommand(this.action);} catch (t) {e = !1;}this.handleResult(e);} }, { key: "handleResult", value: function value(t) {this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });} }, { key: "clearSelection", value: function value() {this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();} }, { key: "destroy", value: function value() {this.removeFake();} }, { key: "action", set: function set() {var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');}, get: function get() {return this._action;} }, { key: "target", set: function set(t) {if (void 0 !== t) {if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target = t;}}, get: function get() {return this._target;} }]), e;}();t.exports = u;}, function (t, e) {t.exports = function (t) {var e;if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {var n = t.hasAttribute("readonly");n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;} else {t.hasAttribute("contenteditable") && t.focus();var o = window.getSelection(),r = document.createRange();r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();}return e;};}, function (t, e) {function n() {}n.prototype = { on: function on(t, e, n) {var o = this.e || (this.e = {});return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;}, once: function once(t, e, n) {var o = this;function r() {o.off(t, r), e.apply(n, arguments);}return r._ = e, this.on(t, r, n);}, emit: function emit(t) {for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {n[o].fn.apply(n[o].ctx, e);}return this;}, off: function off(t, e) {var n = this.e || (this.e = {}),o = n[t],r = [];if (o && e) for (var i = 0, a = o.length; i < a; i++) {o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);}return r.length ? n[t] = r : delete n[t], this;} }, t.exports = n;}, function (t, e, n) {var d = n(5),h = n(6);t.exports = function (t, e, n) {if (!t && !e && !n) throw new Error("Missing required arguments");if (!d.string(e)) throw new TypeError("Second argument must be a String");if (!d.fn(n)) throw new TypeError("Third argument must be a Function");if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), { destroy: function destroy() {l.removeEventListener(s, f);} };if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function (t) {t.addEventListener(c, u);}), { destroy: function destroy() {Array.prototype.forEach.call(a, function (t) {t.removeEventListener(c, u);});} };if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o, r, i, a, c, u, l, s, f;};}, function (t, n) {n.node = function (t) {return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;}, n.nodeList = function (t) {var e = Object.prototype.toString.call(t);return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));}, n.string = function (t) {return "string" == typeof t || t instanceof String;}, n.fn = function (t) {return "[object Function]" === Object.prototype.toString.call(t);};}, function (t, e, n) {var a = n(7);function i(t, e, n, o, r) {var i = function (e, n, t, o) {return function (t) {t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);};}.apply(this, arguments);return t.addEventListener(n, i, r), { destroy: function destroy() {t.removeEventListener(n, i, r);} };}t.exports = function (t, e, n, o, r) {return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {return i(t, e, n, o, r);}));};}, function (t, e) {if ("undefined" != typeof Element && !Element.prototype.matches) {var n = Element.prototype;n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;}t.exports = function (t, e) {for (; t && 9 !== t.nodeType;) {if ("function" == typeof t.matches && t.matches(e)) return t;t = t.parentNode;}};}]);});

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/components/tki-qrcode/qrcode.js":
/*!*****************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/components/tki-qrcode/qrcode.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var QRCode = {};
(function () {
  /**
               * 获取单个字符的utf8编码
               * unicode BMP平面约65535个字符
               * @param {num} code
               * return {array}
               */
  function unicodeFormat8(code) {
    // 1 byte
    var c0, c1, c2;
    if (code < 128) {
      return [code];
      // 2 bytes
    } else if (code < 2048) {
      c0 = 192 + (code >> 6);
      c1 = 128 + (code & 63);
      return [c0, c1];
      // 3 bytes
    } else {
      c0 = 224 + (code >> 12);
      c1 = 128 + (code >> 6 & 63);
      c2 = 128 + (code & 63);
      return [c0, c1, c2];
    }
  }
  /**
     * 获取字符串的utf8编码字节串
     * @param {string} string
     * @return {array}
     */
  function getUTF8Bytes(string) {
    var utf8codes = [];
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      var utf8 = unicodeFormat8(code);
      for (var j = 0; j < utf8.length; j++) {
        utf8codes.push(utf8[j]);
      }
    }
    return utf8codes;
  }
  /**
     * 二维码算法实现
     * @param {string} data              要编码的信息字符串
     * @param {num} errorCorrectLevel 纠错等级
     */
  function QRCodeAlg(data, errorCorrectLevel) {
    this.typeNumber = -1; //版本
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null; //二维矩阵，存放最终结果
    this.moduleCount = 0; //矩阵大小
    this.dataCache = null; //数据缓存
    this.rsBlocks = null; //版本数据信息
    this.totalDataCount = -1; //可使用的数据量
    this.data = data;
    this.utf8bytes = getUTF8Bytes(data);
    this.make();
  }
  QRCodeAlg.prototype = {
    constructor: QRCodeAlg,
    /**
                             * 获取二维码矩阵大小
                             * @return {num} 矩阵大小
                             */
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    /**
        * 编码
        */
    make: function make() {
      this.getRightType();
      this.dataCache = this.createData();
      this.createQrcode();
    },
    /**
        * 设置二位矩阵功能图形
        * @param  {bool} test 表示是否在寻找最好掩膜阶段
        * @param  {num} maskPattern 掩膜的版本
        */
    makeImpl: function makeImpl(maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(true, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(true);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    /**
        * 设置二维码的位置探测图形
        * @param  {num} row 探测图形的中心横坐标
        * @param  {num} col 探测图形的中心纵坐标
        */
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    /**
        * 创建二维码
        * @return {[type]} [description]
        */
    createQrcode: function createQrcode() {
      var minLostPoint = 0;
      var pattern = 0;
      var bestModules = null;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
          bestModules = this.modules;
        }
      }
      this.modules = bestModules;
      this.setupTypeInfo(false, pattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(false);
      }
    },
    /**
        * 设置定位图形
        * @return {[type]} [description]
        */
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
        if (this.modules[6][r] != null) {
          continue;
        }
        this.modules[6][r] = r % 2 == 0;
      }
    },
    /**
        * 设置矫正图形
        * @return {[type]} [description]
        */
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    /**
        * 设置版本信息（7以上版本才有）
        * @param  {bool} test 是否处于判断最佳掩膜阶段
        * @return {[type]}      [description]
        */
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    /**
        * 设置格式信息（纠错等级和掩膜版本）
        * @param  {bool} test
        * @param  {num} maskPattern 掩膜版本
        * @return {}
        */
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      // vertical
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        // horizontal
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }
      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    /**
        * 数据编码
        * @return {[type]} [description]
        */
    createData: function createData() {
      var buffer = new QRBitBuffer();
      var lengthBits = this.typeNumber > 9 ? 16 : 8;
      buffer.put(4, 4); //添加模式
      buffer.put(this.utf8bytes.length, lengthBits);
      for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
        buffer.put(this.utf8bytes[i], 8);
      }
      if (buffer.length + 4 <= this.totalDataCount * 8) {
        buffer.put(0, 4);
      }
      // padding
      while (buffer.length % 8 != 0) {
        buffer.putBit(false);
      }
      // padding
      while (true) {
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD0, 8);
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD1, 8);
      }
      return this.createBytes(buffer);
    },
    /**
        * 纠错码编码
        * @param  {buffer} buffer 数据编码
        * @return {[type]}
        */
    createBytes: function createBytes(buffer) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var length = this.rsBlock.length / 3;
      var rsBlocks = new Array();
      for (var i = 0; i < length; i++) {
        var count = this.rsBlock[i * 3 + 0];
        var totalCount = this.rsBlock[i * 3 + 1];
        var dataCount = this.rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
          rsBlocks.push([dataCount, totalCount]);
        }
      }
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r][0];
        var ecCount = rsBlocks[r][1] - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
          dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var data = new Array(this.totalDataCount);
      var index = 0;
      for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < dcdata[r].length) {
            data[index++] = dcdata[r][i];
          }
        }
      }
      for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < ecdata[r].length) {
            data[index++] = ecdata[r][i];
          }
        }
      }
      return data;

    },
    /**
        * 布置模块，构建最终信息
        * @param  {} data
        * @param  {} maskPattern
        * @return {}
        */
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };

  /**
          * 填充字段
          */
  QRCodeAlg.PAD0 = 0xEC;
  QRCodeAlg.PAD1 = 0x11;
  //---------------------------------------------------------------------
  // 纠错等级对应的编码
  //---------------------------------------------------------------------
  var QRErrorCorrectLevel = [1, 0, 3, 2];
  //---------------------------------------------------------------------
  // 掩膜版本
  //---------------------------------------------------------------------
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7 };

  //---------------------------------------------------------------------
  // 工具类
  //---------------------------------------------------------------------
  var QRUtil = {
    /*
                 每个版本矫正图形的位置
                  */
    PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]],

    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    /*
                                                             BCH编码格式信息
                                                              */
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    /*
       BCH编码版本信息
        */
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    /*
       获取BCH位信息
        */
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    /*
       获取版本对应的矫正图形位置
        */
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    /*
       掩膜算法
        */
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);}

    },
    /*
       获取RS的纠错多项式
        */
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    /*
       获取评价
        */
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount(),
      lostPoint = 0,
      darkCount = 0;
      for (var row = 0; row < moduleCount; row++) {
        var sameCount = 0;
        var head = qrCode.modules[row][0];
        for (var col = 0; col < moduleCount; col++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (col < moduleCount - 6) {
            if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
              if (col < moduleCount - 10) {
                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                  lostPoint += 40;
                }
              } else if (col > 3) {
                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 2 评价
          if (row < moduleCount - 1 && col < moduleCount - 1) {
            var count = 0;
            if (current) count++;
            if (qrCode.modules[row + 1][col]) count++;
            if (qrCode.modules[row][col + 1]) count++;
            if (qrCode.modules[row + 1][col + 1]) count++;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
          //level 4 评价
          if (current) {
            darkCount++;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var head = qrCode.modules[0][col];
        for (var row = 0; row < moduleCount; row++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (row < moduleCount - 6) {
            if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
              if (row < moduleCount - 10) {
                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                  lostPoint += 40;
                }
              } else if (row > 3) {
                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
        }
      }
      // LEVEL4
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };


  //---------------------------------------------------------------------
  // QRMath使用的数学工具
  //---------------------------------------------------------------------
  var QRMath = {
    /*
                 将n转化为a^m
                  */
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    /*
       将a^m转化为n
        */
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256) };


  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
  //---------------------------------------------------------------------
  // QRPolynomial 多项式
  //---------------------------------------------------------------------
  /**
   * 多项式类
   * @param {Array} num   系数
   * @param {num} shift a^shift
   */
  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    /**
        * 多项式乘法
        * @param  {QRPolynomial} e 被乘多项式
        * @return {[type]}   [description]
        */
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    /**
        * 多项式模运算
        * @param  {QRPolynomial} e 模多项式
        * @return {}
        */
    mod: function mod(e) {
      var tl = this.getLength(),
      el = e.getLength();
      if (tl - el < 0) {
        return this;
      }
      var num = new Array(tl);
      for (var i = 0; i < tl; i++) {
        num[i] = this.get(i);
      }
      while (num.length >= el) {
        var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

        for (var i = 0; i < e.getLength(); i++) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        while (num[0] == 0) {
          num.shift();
        }
      }
      return new QRPolynomial(num, 0);
    } };


  //---------------------------------------------------------------------
  // RS_BLOCK_TABLE
  //---------------------------------------------------------------------
  /*
  二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
   */
  var RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],

  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],

  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],

  // 4
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],

  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],

  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],

  // 7
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],

  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],

  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],

  // 10
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],

  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],

  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],

  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],

  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],

  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],

  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],

  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],

  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],

  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],

  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],

  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],

  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],

  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],

  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],

  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],

  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],

  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],

  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],

  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],

  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],

  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],

  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],

  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],

  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],

  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],

  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],

  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],

  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],

  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],

  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]];


  /**
                              * 根据数据获取对应版本
                              * @return {[type]} [description]
                              */
  QRCodeAlg.prototype.getRightType = function () {
    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
      var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
      if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var totalDataCount = 0;
      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var dataCount = rsBlock[i * 3 + 2];
        totalDataCount += dataCount * count;
      }
      var lengthBytes = typeNumber > 9 ? 2 : 1;
      if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
        this.typeNumber = typeNumber;
        this.rsBlock = rsBlock;
        this.totalDataCount = totalDataCount;
        break;
      }
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------
  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit(num >>> length - i - 1 & 1);
      }
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    } };




  // xzedit
  var qrcodeAlgObjCache = [];
  /**
                               * 二维码构造函数，主要用于绘制
                               * @param  {参数列表} opt 传递参数
                               * @return {}
                               */
  QRCode = function QRCode(opt) {
    //设置默认参数
    this.options = {
      text: '',
      size: 256,
      correctLevel: 3,
      background: '#ffffff',
      foreground: '#000000',
      pdground: '#000000',
      image: '',
      imageSize: 30,
      canvasId: '_myQrCodeCanvas',
      context: opt.context };

    if (typeof opt === 'string') {// 只编码ASCII字符串
      opt = {
        text: opt };

    }
    if (opt) {
      for (var i in opt) {
        this.options[i] = opt[i];
      }
    }
    //使用QRCodeAlg创建二维码结构
    var qrCodeAlg = null;
    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
      if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
        qrCodeAlg = qrcodeAlgObjCache[i].obj;
        break;
      }
    }
    if (i == l) {
      qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
      qrcodeAlgObjCache.push({
        text: this.options.text,
        correctLevel: this.options.correctLevel,
        obj: qrCodeAlg });

    }
    /**
       * 计算矩阵点的前景色
       * @param {Obj} config
       * @param {Number} config.row 点x坐标
       * @param {Number} config.col 点y坐标
       * @param {Number} config.count 矩阵大小
       * @param {Number} config.options 组件的options
       * @return {String}
       */
    var getForeGround = function getForeGround(config) {
      var options = config.options;
      if (options.pdground && (
      config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
      config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
      config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
      {
        return options.pdground;
      }
      return options.foreground;
    };
    // 创建canvas
    var createCanvas = function createCanvas(options) {
      uni.showLoading({
        title: "二维码生成中",
        mask: true });

      var ctx = uni.createCanvasContext(options.canvasId, options.context);
      var count = qrCodeAlg.getModuleCount();
      var ratioSize = options.size;
      var ratioImgSize = options.imageSize;
      //计算每个点的长宽
      var tileW = (ratioSize / count).toPrecision(4);
      var tileH = (ratioSize / count).toPrecision(4);
      //绘制
      for (var row = 0; row < count; row++) {
        for (var col = 0; col < count; col++) {
          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
          var foreground = getForeGround({
            row: row,
            col: col,
            count: count,
            options: options });

          ctx.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        }
      }
      if (options.image) {




        // 画圆角矩形
        var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
          ctxi.setLineWidth(lineWidth);
          ctxi.setFillStyle(options.background);
          ctxi.setStrokeStyle(options.background);
          ctxi.beginPath(); // draw top and top right corner 
          ctxi.moveTo(x + r, y);
          ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
          ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
          ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
          ctxi.arcTo(x, y, x + r, y, r);
          ctxi.closePath();
          if (fill) {
            ctxi.fill();
          }
          if (stroke) {
            ctxi.stroke();
          }
        };var x = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(ctx, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);ctx.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
      }
      ctx.draw(false, function () {
        // 保存到临时区域
        setTimeout(function () {
          uni.canvasToTempFilePath({
            width: options.width,
            height: options.height,
            destWidth: options.width,
            destHeight: options.height,
            canvasId: options.canvasId,
            quality: Number(1),
            success: function success(res) {
              if (options.cbResult) {
                // 由于官方还没有统一此接口的输出字段，所以先判定下  支付宝为 res.apFilePath
                if (!empty(res.tempFilePath)) {
                  options.cbResult(res.tempFilePath);
                } else if (!empty(res.apFilePath)) {
                  options.cbResult(res.apFilePath);
                } else {
                  options.cbResult(res.tempFilePath);
                }
              }
            },
            fail: function fail(res) {
              if (options.cbResult) {
                options.cbResult(res);
              }
            },
            complete: function complete() {
              uni.hideLoading();
            } },
          options.context);
        }, options.text.length + 100);
      });
    };
    createCanvas(this.options);
    // 空判定
    var empty = function empty(v) {
      var tp = typeof v,
      rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    };
  };
  QRCode.prototype.clear = function (fn) {
    var ctx = uni.createCanvasContext(this.options.canvasId, this.options.context);
    ctx.clearRect(0, 0, this.options.size, this.options.size);
    ctx.draw(false, function () {
      if (fn) {
        fn();
      }
    });
  };
})();var _default =

QRCode;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js":
/*!*****************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/App.vue"));

var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/store/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

_vue.default.prototype.$store = _store.default;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({
  store: _store.default },
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createApp"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fbaojia%2Fbaojia\"}":
/*!****************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fbaojia%2Fbaojia"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _baojia = _interopRequireDefault(__webpack_require__(/*! ./pages/baojia/baojia.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/baojia/baojia.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_baojia.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fbill_detail%2Fbill_detail\"}":
/*!**************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fbill_detail%2Fbill_detail"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _bill_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/bill_detail/bill_detail.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/bill_detail/bill_detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bill_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fcarmodal%2Fcarmodal\"}":
/*!********************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fcarmodal%2Fcarmodal"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _carmodal = _interopRequireDefault(__webpack_require__(/*! ./pages/carmodal/carmodal.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/carmodal/carmodal.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_carmodal.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_card_info%2Fdlr_card_info\"}":
/*!******************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_card_info%2Fdlr_card_info"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_card_info = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_card_info/dlr_card_info.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_card_info/dlr_card_info.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_card_info.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_card_list%2Fdlr_card_list\"}":
/*!******************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_card_list%2Fdlr_card_list"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_card_list = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_card_list/dlr_card_list.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_card_list/dlr_card_list.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_card_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_detailed%2Fdlr_detailed\"}":
/*!****************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_detailed%2Fdlr_detailed"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_detailed = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_detailed/dlr_detailed.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_detailed/dlr_detailed.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_detailed.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_login%2Fdlr_login\"}":
/*!**********************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_login%2Fdlr_login"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_login = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_login/dlr_login.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_login/dlr_login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_my_assets%2Fdlr_my_assets\"}":
/*!******************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_my_assets%2Fdlr_my_assets"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_my_assets = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_my_assets/dlr_my_assets.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_my_assets/dlr_my_assets.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_my_assets.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_poster%2Fdlr_poster\"}":
/*!************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_poster%2Fdlr_poster"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_poster = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_poster/dlr_poster.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_poster/dlr_poster.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_poster.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_register%2Fdlr_register\"}":
/*!****************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_register%2Fdlr_register"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_register = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_register/dlr_register.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_register/dlr_register.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_register.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_withdraw%2Fdlr_withdraw\"}":
/*!****************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_withdraw%2Fdlr_withdraw"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_withdraw = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_withdraw/dlr_withdraw.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_withdraw/dlr_withdraw.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_withdraw.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fdlr_withdraw_success%2Fdlr_withdraw_success\"}":
/*!********************************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fdlr_withdraw_success%2Fdlr_withdraw_success"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _dlr_withdraw_success = _interopRequireDefault(__webpack_require__(/*! ./pages/dlr_withdraw_success/dlr_withdraw_success.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/dlr_withdraw_success/dlr_withdraw_success.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_dlr_withdraw_success.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fer_wei_ma%2Fer_wei_ma\"}":
/*!**********************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fer_wei_ma%2Fer_wei_ma"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _er_wei_ma = _interopRequireDefault(__webpack_require__(/*! ./pages/er_wei_ma/er_wei_ma.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/er_wei_ma/er_wei_ma.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_er_wei_ma.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Flogin%2Flogin\"}":
/*!**************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/login/login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fmain%2Fmain\"}":
/*!************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fmain%2Fmain"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _main = _interopRequireDefault(__webpack_require__(/*! ./pages/main/main.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/main/main.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_main.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Forder_one_detail%2Forder_one_detail\"}":
/*!************************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Forder_one_detail%2Forder_one_detail"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _order_one_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/order_one_detail/order_one_detail.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/order_one_detail/order_one_detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_order_one_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Forder_two_detail%2Forder_two_detail\"}":
/*!************************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Forder_two_detail%2Forder_two_detail"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _order_two_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/order_two_detail/order_two_detail.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/order_two_detail/order_two_detail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_order_two_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fpay_address%2Fpay_address\"}":
/*!**************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fpay_address%2Fpay_address"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _pay_address = _interopRequireDefault(__webpack_require__(/*! ./pages/pay_address/pay_address.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/pay_address/pay_address.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_pay_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fpay_all%2Fpay_all\"}":
/*!******************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fpay_all%2Fpay_all"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _pay_all = _interopRequireDefault(__webpack_require__(/*! ./pages/pay_all/pay_all.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/pay_all/pay_all.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_pay_all.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fpay_one%2Fpay_one\"}":
/*!******************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fpay_one%2Fpay_one"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _pay_one = _interopRequireDefault(__webpack_require__(/*! ./pages/pay_one/pay_one.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/pay_one/pay_one.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_pay_one.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fpay_success%2Fpay_success\"}":
/*!**************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fpay_success%2Fpay_success"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _pay_success = _interopRequireDefault(__webpack_require__(/*! ./pages/pay_success/pay_success.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/pay_success/pay_success.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_pay_success.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fpay_two%2Fpay_two\"}":
/*!******************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fpay_two%2Fpay_two"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _pay_two = _interopRequireDefault(__webpack_require__(/*! ./pages/pay_two/pay_two.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/pay_two/pay_two.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_pay_two.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fquote_bill%2Fquote_bill\"}":
/*!************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fquote_bill%2Fquote_bill"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _quote_bill = _interopRequireDefault(__webpack_require__(/*! ./pages/quote_bill/quote_bill.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/quote_bill/quote_bill.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_quote_bill.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Freg%2Freg\"}":
/*!**********************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Freg%2Freg"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _reg = _interopRequireDefault(__webpack_require__(/*! ./pages/reg/reg.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/reg/reg.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_reg.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fservice_confirm%2Fservice_confirm\"}":
/*!**********************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fservice_confirm%2Fservice_confirm"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _service_confirm = _interopRequireDefault(__webpack_require__(/*! ./pages/service_confirm/service_confirm.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/service_confirm/service_confirm.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_service_confirm.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fservice_confirm_new%2Fservice_confirm_new\"}":
/*!******************************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fservice_confirm_new%2Fservice_confirm_new"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _service_confirm_new = _interopRequireDefault(__webpack_require__(/*! ./pages/service_confirm_new/service_confirm_new.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/service_confirm_new/service_confirm_new.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_service_confirm_new.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fservice_month_fee%2Fservice_month_fee\"}":
/*!**************************************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fservice_month_fee%2Fservice_month_fee"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _service_month_fee = _interopRequireDefault(__webpack_require__(/*! ./pages/service_month_fee/service_month_fee.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/service_month_fee/service_month_fee.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_service_month_fee.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/main.js?{\"page\":\"pages%2Fuser%2Fuser\"}":
/*!************************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/main.js?{"page":"pages%2Fuser%2Fuser"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _user = _interopRequireDefault(__webpack_require__(/*! ./pages/user/user.vue */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages/user/user.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_user.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/pages.json":
/*!********************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/service.js":
/*!********************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/service.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 管理账号信息
var USERS_KEY = 'USERS_KEY';
var STATE_KEY = 'STATE_KEY';

var getUsers = function getUsers() {
  var ret = '';
  ret = uni.getStorageSync(USERS_KEY);
  if (!ret) {
    ret = '[]';
  }
  return JSON.parse(ret);
};

var addUser = function addUser(userInfo) {
  var users = getUsers();
  users.push({
    account: userInfo.account,
    password: userInfo.password });

  uni.setStorageSync(USERS_KEY, JSON.stringify(users));
};var _default =

{
  getUsers: getUsers,
  addUser: addUser };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/about.png":
/*!******************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/about.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/call_img.png":
/*!*********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/call_img.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/close.png":
/*!******************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/close.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/delete_icon.png":
/*!************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/delete_icon.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADIUlEQVRYR8WXO0wUURSG/38f+MBiTVAKTDRGSitJjEajhRoC1ja2GkPBzGxAjY9iCh9RlzAzW2BQExo77USJNj4SrdTCxggFJlqomB2iCOJyj7m6g+u6uzOLC2y3u+ec/7v3nnvuOUTETzqdXqWU6iB5SERaSTaJyHqSSkQ+k5wQkdckb/u+f2doaGgmSmiGGXV3d6+Lx+MXABwGsCrMvvD/NICbc3Nzp7PZ7KdqPhUBbNtO+L5/EsApAI0RhUvNpgBcTKVSl2zbzpeLURagq6trbUNDwx2SOxco/JebiDydnZ09ODAwkCuN9w+AYRitsVjsPoBN9RAvijGulDrged5ocdy/AEzTbCb5HEBLncWDcO9FZJvruh+CH+YBent7G/P5/DMAWxdJPAj7KpFI7MhkMjo/MA9gWdYlACcWWTwIf9lxHJ3gvwHS6XSLUmqM5MqlABCRGaVUazabffcLwLKsawCOhIhPi0iCZLKanYj8IKmvXNWaISI3XNc9Qtu2G3zf90McppVS+0jqejBcCUKLA+gk+UNERkiuqAI7nUqlUjQMoyMWiw2HrV4DeJ731DTN/eUgAnHXdR9YlrUXwN2wXVBKddI0zaskj0U4e11eOxzHeVgKUSoeYfWB3CAty3oIYE8EAIjId5LtxRAFv85g5TWIa9dHegfekGyNAqBtiiEMw2gnObdAcR1rVANMkVwdFaAUonCL9ta48kBuSgN8IblmOQBE5KvOAf04bIkKUHoE2s/zvBGd+QvYhTEN8BjA7igAi5CET5b/Gi57IdKlOJfL5UJuQs2lOEIl/F2K9dmbpjlI8mjII/MNQLJejxGA647jHA0AmgGML+VznEwmN2YymY/zDYlpmpdJHo9yG/7XRkSuuK77q/mZB9CDh4joK9n2vwIh/i9I7urv79eP2x8A/aWnp6cpn8+/JLlhkSDexuPxtr6+vokgfqW2fATA5jpDhLflgWBhMLlHcns9IGoaTALBQqumk/JMWGdTre0CcL7m0aw4YGFYObeQ4VREzhYPIeVAQ6fjwKnSeK57FAATwXgO4Nbk5ORw1PH8JyZx4i5DTksaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_blue.png":
/*!************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_blue.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_gray.png":
/*!************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_gray.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_pay.png":
/*!***********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_pay.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/finish_pay.d38796b4.png";

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_ready.png":
/*!*************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/finish_ready.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/info_blue.png":
/*!**********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/info_blue.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAClklEQVRIS72WO2gUURSGv382CYIiCBFfKCqYnQVfoAiitjYJKIiNCoqFQqJgYWVkczdoZ6EQBS1EQW0EiZBY2KoIPkBEzGwsfBuFiCAKIcneIzNmwybZrBNBp5ni/Pf8557Xf0WNr+mULcmMsgNo8cYaifkx3DyDQcBzoKdUx+3+k/o4nRtVM+RO2yIbxgEHgTozShLvgU9j+MVmLJXIAKOIy6rH9bVrYLK/KQShsxYzrgvmmngiTxez6IlO6Gvl4SZnjYGn2QKOyNho8F1ib+TUU4mbQJArWJsvcQ7xA6Ot2MkNkNVKI5iyefYgzmPMUcCxyKmrfGacIInc0y3xrq5E84tT6qvteKJ19UnLjWboNWOZAnaWb5IQxDn3w0Rx/epLbK7mfMFxmz1vNrcQ9u0Hu76c0c/JAcQkIxkeAhpqIHzbroGEIHR2EeOQGfuKnbpeLfKmDtsawL3Y5mFbf0H3q+GyedsrcQ1xKXI6rLgVgxHemHhWdGyaNufOgtA4HTuNRDtOvnoKTWGex4h1vp7lyjlrNUsKdCDq1NWZ5H06bJi3/YgrEm0xwR3v2a5ZLJjcipMdZAu2O1OCl526WXNAnTXK8zkIuKts3j5IDEcFrfxT9GGHFZMUFZRNgX1tRr1CZ0MYT6OCtqQ49GqMYFUK7APEhn9PMJaikaigFSmimskNfqeoXGQLWNjvNFiLJOywVATxnhov8kzaNC3BhDZNPWjxxKe6gSnreCRjfTJoaVdFgktBMGVVpF12MS7r7EL8Lzq1VqtV5bILGghjAfo/67ocTejsiHnO/hPBqSCZkWQCR+OJTSWZZZJE9Edw2ATRfweURf3vRb+yeMmzZZidBDR7z1oFNMb28WeLp7fUQHetZ8svP5+I3l2dKOcAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/month_fee_group.png":
/*!****************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/month_fee_group.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/month_fee_group.49d0d971.png";

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/no_data.png":
/*!********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/no_data.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/pay_success.png":
/*!************************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/pay_success.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/read_pay.png":
/*!*********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/read_pay.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/read_pay.4da9ebb6.png";

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/static/img/take_photo.png":
/*!***********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/static/img/take_photo.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/store/index.js":
/*!************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/store/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    /**
            * 是否需要强制登录
            */
    forcedLogin: false,
    hasLogin: false,
    userName: "" },

  mutations: {
    login: function login(state, userName) {
      state.userName = userName || '新用户';
      state.hasLogin = true;
    },
    logout: function logout(state) {
      state.userName = "";
      state.hasLogin = false;
    } } });var _default =



store;exports.default = _default;

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/api.js":
/*!**********************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/utils/api.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.grant = grant;exports.login = login;exports.H5login = H5login;exports.activation = activation;exports.devices = devices;exports.mileage = mileage;exports.getBrands = getBrands;exports.getSeries = getSeries;exports.getModels = getModels;exports.getDevice = getDevice;exports.getLoc = getLoc;exports.getInsurance = getInsurance;exports.getTriplatest = getTriplatest;exports.getDayTrip = getDayTrip;exports.getScorelatest = getScorelatest;exports.getDayScore = getDayScore;exports.getBills = getBills;exports.getBilling = getBilling;exports.getPrices = getPrices;exports.alarm = alarm;exports.getOrders = getOrders;exports.getOrderDetail = getOrderDetail;exports.quotations = quotations;exports.getVechileData = getVechileData;exports.getModelExactness = getModelExactness;exports.getModelMistiness = getModelMistiness;exports.getEffectiveDate = getEffectiveDate;exports.getExactQoute = getExactQoute;exports.applyUnderwrite = applyUnderwrite;exports.deposit = deposit;exports.recurring = recurring;exports.basic = basic;exports.result = result;exports.quotationsToOrder = quotationsToOrder;exports.pay = pay;exports.insurance = insurance;exports.ocr = ocr;exports.vehicle = vehicle;exports.getQuotations = getQuotations;exports.history = history;exports.orderStaus = orderStaus;exports.dlrLogin = dlrLogin;exports.dlrLoginCode = dlrLoginCode;exports.dlrHandleLogin = dlrHandleLogin;exports.dlrRegisterCode = dlrRegisterCode;exports.dlrRegister = dlrRegister;exports.getRegions = getRegions;exports.getPosterImg = getPosterImg;exports.getMyAssets = getMyAssets;exports.bindCard = bindCard;exports.withdraw = withdraw;exports.getWithdrawRecord = getWithdrawRecord;exports.getIncomeRecord = getIncomeRecord;exports.BASE_IMAGE_URL = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/request.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

var BASE_IMAGE_URL = 'https://api.kaikaibao.com.cn/lccx/images/';

/**
                                                                   * 小程序授权
                                                                   */exports.BASE_IMAGE_URL = BASE_IMAGE_URL;
function grant(params) {
  return _request.default.post('3.1/mina/grant', qs.stringify(params));
}

/**
   * 小程序登录
   */
function login(params) {
  return _request.default.post('3.1/mina/login', qs.stringify(params));
}

/**
   * H5登录
   */
function H5login(params) {
  return _request.default.post('3.1/login', qs.stringify(params));
}

/**
   * 手机号获取验证码
   */
function activation(params) {
  return _request.default.post('3.1/send/device/activation', qs.stringify(params));
}

/**
   * 设备激活
   */
function devices(params) {
  return _request.default.post('3.1/devices', qs.stringify(params));
}

/**
   * 总里程照片上传
   */
function mileage(path) {
  return _request.default.upload('3.1/device/mileage', { image: fs.createReadStream(path) });
}

/**
   * 车辆品牌
   */
function getBrands() {
  return _request.default.get('3.1/vehicle/brands');
}

/**
   * 车辆系列
   */
function getSeries(brand_id) {
  return _request.default.get('3.1/vehicle/series/' + brand_id);
}

/**
   * 车辆型号
   */
function getModels(series_id) {
  return _request.default.get('3.1/vehicle/models/' + series_id);
}

/**
   * 设备列表
   */
function getDevice() {
  return _request.default.get('3.1/devices');
}

/**
   * 得到当前位置
   */
function getLoc() {
  return _request.default.get('3.1/loc');
}

/**
   * 保险相关数据
   */
function getInsurance() {
  return _request.default.get('3.1/insurance');
}

/**
   * 最新行程
   */
function getTriplatest() {
  return _request.default.get('3.1/triplatest');
}

/**
   * 每日行程
   */
function getDayTrip(dateString) {
  return _request.default.get('3.1/trips/' + dateString);
}

/**
   * 最新评分
   */
function getScorelatest() {
  return _request.default.get('3.1/scorelatest');
}

/**
   * 每日评分
   */
function getDayScore(dateString) {
  return _request.default.get('3.1/score/' + dateString);
}

/**
   * 账单
   */
function getBills() {
  return _request.default.get('3.1/bills');
}

/**
   * 购买记录
   */
function getBilling() {
  return _request.default.get('3.1/billing/history');
}

/**
   * 里程价格
   */
function getPrices() {
  return _request.default.get('3.1/prices');
}

/**
   * 里程价格
   */
function alarm(params) {
  return _request.default.put('3.1/alarm', qs.stringify(params));
}

/**
   * 保单列表
   */
function getOrders() {
  return _request.default.get('3.1/orders');
}

/**
   * 保单详情
   */
function getOrderDetail(orderId) {
  return _request.default.get('3.1/orders/' + orderId);
}

/**
   * 快速报价
   */
function quotations(params) {
  return _request.default.post('3.1/quotations', qs.stringify(params));
}

/**
   * 报价 获取车辆信息
   */
function getVechileData(params) {
  return _request.default.post('3.1/getVechileData', qs.stringify(params));
}

/**
   * 报价 获取车辆品牌 (精确)
   */
function getModelExactness(params) {
  return _request.default.post('3.1/getModelExactness', qs.stringify(params));
}

/**
   * 报价 获取车辆品牌 (模糊)
   */
function getModelMistiness(params) {
  return _request.default.post('3.1/getModelMistiness', qs.stringify(params));
}

/**
   * 报价 获取投保起期
   */
function getEffectiveDate(params) {
  return _request.default.post('3.1/getEffectiveDate', qs.stringify(params));
}

/**
   * 报价 精准报价
   */
function getExactQoute(params) {
  return _request.default.post('3.1/getExactQoute', qs.stringify(params));
}

/**
   * 报价 核保
   */
function applyUnderwrite(params) {
  return _request.default.post('3.1/applyUnderwrite', qs.stringify(params));
}

/**
   * 报价 充值
   */
function deposit(params) {
  return _request.default.post('3.1/deposit', qs.stringify(params));
}

/**
   * 报价 自动续费
   */
function recurring(params) {
  return _request.default.post('3.1/recurring', qs.stringify(params));
}

/**
   * 快速报价 / 填写基本信息
   */
function basic(id, params) {
  return _request.default.put('3.1/quotations/' + id + '/basic', qs.stringify(params));
}

/**
   * 快速报价 / 结果
   */
function result(id) {
  return _request.default.get('3.1/quotations/' + id + '/result', {}, { timeout: 20000 });
}

/**
   * 保单转订单
   */
function quotationsToOrder(id, params) {
  return _request.default.put('3.1/quotations/' + id + '/order', qs.stringify(params));
}

/**
   * 快速报价 / 保单支付
   */
function pay(id, params) {
  return _request.default.post('3.1/orders/' + id + '/pay', qs.stringify(params));
}

/**
   * 快速报价 / 险种
   */
function insurance(id, params) {
  return _request.default.put('3.1/quotations/' + id + '/insurance', params);
}

/**
   * OCR
   */
function ocr(params) {
  return _request.default.post('3.1/ocr', qs.stringify(params));
}


/**
   * 快速报价 / 车辆信息
   */
function vehicle(id, params) {
  return _request.default.put('3.1/quotations/' + id + '/vehicle', qs.stringify(params));
}

/**
   * get 保单信息
   */
function getQuotations(id) {
  return _request.default.get('3.1/quotations/' + id);
}

/**
   * get 历史账单
   */
function history(time) {
  return _request.default.get('3.1/billing/history/' + time);
}

function orderStaus(params) {
  return _request.default.post('3.1/orderStaus', qs.stringify(params));
}


//代理人平台接口
/**
 * get 根据openid登录
 */
function dlrLogin(params) {
  return _request.default.get('3.1/agents/session?openid=' + params);
}

/**
   * post 代理人登录获取验证码
   */
function dlrLoginCode(params) {
  return _request.default.post('1.0/send/login', qs.stringify(params));
}

/**
   * post 代理人登录
   */
function dlrHandleLogin(params) {
  return _request.default.post('3.1/agents/login', qs.stringify(params));
}

/**
   * post 代理人注册获取验证码
   */
function dlrRegisterCode(params) {
  return _request.default.post('1.0/send/register', qs.stringify(params));
}

/**
   * post 代理人注册
   */
function dlrRegister(params) {
  return _request.default.post('3.1/agents/register', qs.stringify(params));
}

/**
   * get 获取地区
   */
function getRegions() {
  return _request.default.get('3.1/agents/regions');
}

/**
   * get 获取海报
   */
function getPosterImg() {
  return _request.default.get('3.1/agents/posters');
}

/**
   * get 获取我的资产
   */
function getMyAssets() {
  return _request.default.get('3.1/agents/assets');
}

/**
   * put 修改银行卡
   */
function bindCard(params) {
  return _request.default.put('3.1/agents/bank_card', qs.stringify(params));
}

/**
   * post 提现
   */
function withdraw(params) {
  return _request.default.post('3.1/agents/withdraw', qs.stringify(params));
}

/**
   * get 获取提现记录
   */
function getWithdrawRecord() {
  return _request.default.get('3.1/agents/withdrew');
}

/**
   * get 获取收入记录
   */
function getIncomeRecord() {
  return _request.default.get('3.1/agents/incomes');
}

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/check_code.js":
/*!*****************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/utils/check_code.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.check_card = check_card; /**
                                                                                                             * 身份证校验算法
                                                                                                             */

var vcity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
  21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
  33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南",
  42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆",
  51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
  63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };

function check_card(card) {
  //是否为空
  if (card === '')
  {
    return false;
  }
  //校验长度，类型
  if (isCardNo(card) === false)
  {
    return false;
  }
  //检查省份
  if (checkProvince(card) === false)
  {
    return false;
  }
  //校验生日
  if (checkBirthday(card) === false)
  {
    return false;
  }
  //检验位的检测
  if (checkParity(card) === false)
  {
    return false;
  }
  return true;
};
//检查号码是否符合规范，包括长度，类型
function isCardNo(card)
{
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
  if (reg.test(card) === false)
  {
    return false;
  }
  return true;
};
//取身份证前两位,校验省份
function checkProvince(card)
{
  var province = card.substr(0, 2);
  if (vcity[province] == undefined)
  {
    return false;
  }
  return true;
};
//检查生日是否正确
function checkBirthday(card)
{
  var len = card.length;
  //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
  if (len == '15')
  {
    var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
    var arr_data = card.match(re_fifteen);
    var year = arr_data[2];
    var month = arr_data[3];
    var day = arr_data[4];
    var birthday = new Date('19' + year + '/' + month + '/' + day);
    return verifyBirthday('19' + year, month, day, birthday);
  }
  //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
  if (len == '18')
  {
    var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
    var arr_data = card.match(re_eighteen);
    var year = arr_data[2];
    var month = arr_data[3];
    var day = arr_data[4];
    var birthday = new Date(year + '/' + month + '/' + day);
    return verifyBirthday(year, month, day, birthday);
  }
  return false;
};
//校验日期
function verifyBirthday(year, month, day, birthday)
{
  var now = new Date();
  var now_year = now.getFullYear();
  //年月日是否合理
  if (birthday.getFullYear() == year && birthday.getMonth() + 1 == month && birthday.getDate() == day)
  {
    //判断年份的范围（3岁到100岁之间)
    var time = now_year - year;
    if (time >= 3 && time <= 100)
    {
      return true;
    }
    return false;
  }
  return false;
};
//校验位的检测
function checkParity(card)
{
  //15位转18位
  card = changeFivteenToEighteen(card);
  var len = card.length;
  if (len == '18')
  {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    var cardTemp = 0,i,valnum;
    for (i = 0; i < 17; i++)
    {
      cardTemp += card.substr(i, 1) * arrInt[i];
    }
    valnum = arrCh[cardTemp % 11];
    if (valnum == card.substr(17, 1))
    {
      return true;
    }
    return false;
  }
  return false;
};
//15位转18位身份证号
function changeFivteenToEighteen(card)
{
  if (card.length == '15')
  {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    var cardTemp = 0,i;
    card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
    for (i = 0; i < 17; i++)
    {
      cardTemp += card.substr(i, 1) * arrInt[i];
    }
    card += arrCh[cardTemp % 11];
    return card;
  }
  return card;
};

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/dateTimePicker.js":
/*!*********************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/utils/dateTimePicker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getMonthDay = getMonthDay;exports.getNewDateArry = getNewDateArry;exports.dateTimePicker = dateTimePicker;exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function withData(param) {
  return param < 10 ? '0' + param : '' + param;
}

function getLoopArray(start, end) {
  var start = start || 0;
  var end = end || 1;
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(withData(i));
  }
  return array;
}

function getMonthDay(year, month) {
  var flag = year % 400 == 0 || year % 4 == 0 && year % 100 != 0,
  array = null;

  switch (month) {
    case '01':
    case '03':
    case '05':
    case '07':
    case '08':
    case '10':
    case '12':
      array = getLoopArray(1, 31);
      break;
    case '04':
    case '06':
    case '09':
    case '11':
      array = getLoopArray(1, 30);
      break;
    case '02':
      array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28);
      break;
    default:
      array = '月份格式不正确，请重新输入！';}

  return array;
}

function getNewDateArry() {
  // 当前时间的处理
  var newDate = new Date();
  var year = withData(newDate.getFullYear()),
  mont = withData(newDate.getMonth() + 1),
  date = withData(newDate.getDate()),
  hour = withData(newDate.getHours()),
  minu = withData(newDate.getMinutes()),
  seco = withData(newDate.getSeconds());

  return [year, mont, date, hour, minu, seco];
}

function dateTimePicker(startYear, endYear, date) {
  // 返回默认显示的数组和联动数组的声明
  var dateTime = [],
  dateTimeArray = [
  [],
  [],
  [],
  [],
  [],
  []];

  var start = startYear || 1978;
  var end = endYear || 2100;
  // 默认开始显示数据
  var defaultDate = date ? [].concat(_toConsumableArray(date.split(' ')[0].split('-')), _toConsumableArray(date.split(' ')[1].split(':'))) : getNewDateArry();
  // 处理联动列表数据
  /*年月日 时分秒*/
  dateTimeArray[0] = getLoopArray(start, end);
  dateTimeArray[1] = getLoopArray(1, 12);
  dateTimeArray[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray[3] = getLoopArray(0, 23);
  dateTimeArray[4] = getLoopArray(0, 59);
  dateTimeArray[5] = getLoopArray(0, 59);

  dateTimeArray.forEach(function (current, index) {
    dateTime.push(current.indexOf(defaultDate[index]));
  });

  return {
    dateTimeArray: dateTimeArray,
    dateTime: dateTime };

}var _default =

{
  dateTimePicker: dateTimePicker,
  getMonthDay: getMonthDay };exports.default = _default;

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/index.js":
/*!************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/utils/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.formatTime = formatTime;exports.getDay = getDay;exports.isChinese = isChinese;exports.getDistance = getDistance;exports.isWeiXin = isWeiXin;exports.default = void 0;function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : "0".concat(str);
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('/');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return "".concat(t1, " ").concat(t2);
}

function doHandleMonth(month) {
  var m = month;
  if (month.toString().length == 1) {m = "0" + month;}
  return m;
}

function stringToDate(dateStr) {
  var separator = "-";
  var dateArr = dateStr.split(separator);
  var year = parseInt(dateArr[0]);
  var month;
  //处理月份为04这样的情况                         
  if (dateArr[1].indexOf("0") == 0) {
    month = parseInt(dateArr[1].substring(1));
  } else {
    month = parseInt(dateArr[1]);
  }
  var day = parseInt(dateArr[2]);
  var date = new Date(year, month - 1, day);
  return date;
}

/**
   * 
   * 得到几天前的日期
   */
function getDay(day, dateString) {
  var today;
  if (dateString) {
    today = stringToDate(dateString);
  } else
  {
    today = new Date();
  }
  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); //注意，这行是关键代码

  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}

/**
   * 判断是否为汉字
   */
function isChinese(temp) {
  if (escape(temp).indexOf("%u") < 0) {
    //没有
    return false;
  } else {
    return true;
  }
}


function getDistance(lat1, lng1, lat2, lng2) {
  var lat = [lat1, lat2];
  var lng = [lng1, lng2];
  var R = 6378137;
  var dLat = (lat[1] - lat[0]) * Math.PI / 180;
  var dLng = (lng[1] - lng[0]) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return Math.round(d);
}

function isWeiXin() {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}var _default =


{
  formatNumber: formatNumber,
  formatTime: formatTime,
  getDay: getDay,
  isWeiXin: isWeiXin };exports.default = _default;

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/request.js":
/*!**************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/utils/request.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var Fly = __webpack_require__(/*! flyio/dist/npm/wx */ "./node_modules/flyio/dist/npm/wx.js");
// const Fly = require('./fly.js')
var request = new Fly();
var tokenFly = new Fly();
var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

// 网络超时时间
request.config.timeout = 60 * 1000;
request.config.baseURL = 'https://api.kaikaibao.com.cn';

tokenFly.config = request.config;

request.interceptors.request.use(function (request) {
  uni.showLoading({ title: '加载中...' });

  console.log('----------------');
  var token = uni.getStorageSync('token');
  if (token) {
    request.headers["Authorization"] = 'Bearer ' + token;
  }

  console.log(request.url);
  if (request.url.indexOf("result") != -1) {
    request.headers["Content-Type"] = 'application/json';
  }
  // 	else{
  // 		request.headers["Content-Type"] = 'application/x-www-form-urlencoded';
  // 	}

  // request.headers["Content-Type"] = 'application/x-www-form-urlencoded';

  // request.headers["Content-Type"] = 'application/json';

  // request.headers["x-lccx-did"] = 2
  //     if (uni.getStorageSync('device_id')) {
  //         request.headers["x-lccx-did"] = uni.getStorageSync('device_id')
  //     }
  return request;
});

request.interceptors.response.use(
function (response, promise) {// 不要使用箭头函数，否则调用this.lock()时，this指向不对
  console.log('interceptors.response', response);
  uni.hideLoading();
  return promise.resolve(response.data);
},
function (err, promise) {
  console.log('error-interceptor', err);

  uni.hideLoading();

  if (err.request.url.indexOf("result") != -1) {
    //包含
    // 			uni.showToast({
    //                 title: "status: "+err.status+"--message: "+err.message,
    //                 icon: 'none',
    //                 duration: 5000
    //             })

    // 			uni.showModal({
    // 				title: '提示',
    // 				content: "status: "+err.status+"--message: "+err.message,
    // 				success: function (res) {
    // 					if (res.confirm) {
    // 						
    // 					} else if (res.cancel) {
    // 						console.log('用户点击取消');
    // 					}
    // 				}
    // 			});

  }

  var errorMsg = '';
  if (err.status == 401) {
    console.log('token失效，重新请求token...');
    // this.lock() // 锁定响应拦截器，
    var params = {
      partner_id: uni.getStorageSync("partner_id"),
      imei: uni.getStorageSync("imei") };

    loginAgain(params).
    then(function (d) {
      console.log(JSON.stringify(d.data));
      var token = d.data.data.token;
      console.log('token已更新，值为: ' + token);
      uni.setStorageSync('token', token);
    });
  } else if (err.status == 500) {
    errorMsg = err.response.data.msg;
    console.log(errorMsg);
  } else if (err.status == 0) {
    errorMsg = '服务器异常';
  } else if (err.status == 1) {
    errorMsg = '网络连接超时';
  } else if (err.status == 422) {
    if (err.response.data.errors) {
      for (var key in err.response.data.errors) {
        if (key) {
          errorMsg = err.response.data.errors[key][0];
          break;
        }
      }
    } else {
      errorMsg = err.response.data.msg;
    }
  } else {
    if (err.response.data.errors && err.response.data.errors.code) {
      errorMsg = err.response.data.errors.code[0];
    } else {
      errorMsg = '请求数据失败,请稍后再试';
    }
  }
  if (errorMsg) {
    uni.showToast({
      title: errorMsg,
      icon: 'none',
      duration: 2000 });

  }


  return promise.reject();
});function


loginAgain(_x) {return _loginAgain.apply(this, arguments);}function _loginAgain() {_loginAgain = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              tokenFly.post('3.1/login', qs.stringify(params)));case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));return _loginAgain.apply(this, arguments);}var _default =


request;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "../../../../../wb/lccx2-h5-master/lccx2-h5-master/utils/weixin-jsapi.js":
/*!*******************************************************************!*\
  !*** D:/wb/lccx2-h5-master/lccx2-h5-master/utils/weixin-jsapi.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}!function (e, n) { true ? module.exports = n(e) : undefined;}(window, function (o, e) {function c(n, e, i) {o.WeixinJSBridge ? WeixinJSBridge.invoke(n, r(e), function (e) {a(n, e, i);}) : d(n, i);}function i(n, i, t) {o.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {t && t.trigger && t.trigger(e), a(n, e, i);}) : d(n, t || i);}function r(e) {return (e = e || {}).appId = M.appId, e.verifyAppId = M.appId, e.verifySignType = "sha1", e.verifyTimestamp = M.timestamp + "", e.verifyNonceStr = M.nonceStr, e.verifySignature = M.signature, e;}function n(e) {return { timeStamp: e.timestamp + "", nonceStr: e.nonceStr, package: e.package, paySign: e.paySign, signType: e.signType || "SHA1" };}function a(e, n, i) {"openEnterpriseChat" == e && (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail;var t = n.errMsg;t || (t = n.err_msg, delete n.err_msg, t = function (e, n) {var i = e,t = f[i];t && (i = t);var o = "ok";if (n) {var r = n.indexOf(":");"confirm" == (o = n.substring(r + 1)) && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"), "config" == i && "function not exist" == o && (o = "ok"), "" == o && (o = "fail");}return n = i + ":" + o;}(e, t), n.errMsg = t), (i = i || {})._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", M.debug && !i.isInnerInvoke && alert(JSON.stringify(n));var o = t.indexOf(":");switch (t.substring(o + 1)) {case "ok":i.success && i.success(n);break;case "cancel":i.cancel && i.cancel(n);break;default:i.fail && i.fail(n);}i.complete && i.complete(n);}function s(e) {if (e) {for (var n = 0, i = e.length; n < i; ++n) {var t = e[n],o = p[t];o && (e[n] = o);}return e;}}function d(e, n) {if (!(!M.debug || n && n.isInnerInvoke)) {var i = f[e];i && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "");}}function l() {return new Date().getTime();}function u(e) {I && (o.WeixinJSBridge ? e() : t.addEventListener && t.addEventListener("WeixinJSBridgeReady", e, !1));}if (!o.jWeixin) {var _C;var p = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest", openEnterpriseRedPacket: "getRecevieBizHongBaoRequest", startSearchBeacons: "startMonitoringBeacons", stopSearchBeacons: "stopMonitoringBeacons", onSearchBeacons: "onBeaconsInRange", consumeAndShareCard: "consumedShareCard", openAddress: "editAddress" },f = function () {var e = {};for (var n in p) {e[p[n]] = n;}return e;}(),t = o.document,m = t.title,g = navigator.userAgent.toLowerCase(),h = navigator.platform.toLowerCase(),v = !(!h.match("mac") && !h.match("win")),S = -1 != g.indexOf("wxdebugger"),I = -1 != g.indexOf("micromessenger"),y = -1 != g.indexOf("android"),_ = -1 != g.indexOf("iphone") || -1 != g.indexOf("ipad"),w = (O = g.match(/micromessenger\/(\d+\.\d+\.\d+)/) || g.match(/micromessenger\/(\d+\.\d+)/)) ? O[1] : "",k = { initStartTime: l(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 },T = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", isPreVerifyOk: 1, systemType: _ ? 1 : y ? 2 : -1, clientVersion: w, url: encodeURIComponent(location.href) },M = {},P = { _completes: [] },x = { state: 0, data: {} };u(function () {k.initEndTime = l();});var A = !1,V = [],C = (_C = { config: function config(e) {d("config", M = e);var t = !1 !== M.check;u(function () {if (t) c(p.config, { verifyJsApiList: s(M.jsApiList) }, function () {P._complete = function (e) {k.preVerifyEndTime = l(), x.state = 1, x.data = e;}, P.success = function (e) {T.isPreVerifyOk = 0;}, P.fail = function (e) {P._fail ? P._fail(e) : x.state = -1;};var t = P._completes;return t.push(function () {!function (e) {if (!(v || S || M.debug || w < "6.0.2" || T.systemType < 0)) {var i = new Image();T.appId = M.appId, T.initTime = k.initEndTime - k.initStartTime, T.preVerifyTime = k.preVerifyEndTime - k.preVerifyStartTime, C.getNetworkType({ isInnerInvoke: !0, success: function success(e) {T.networkType = e.networkType;var n = "https://open.weixin.qq.com/sdk/report?v=" + T.version + "&o=" + T.isPreVerifyOk + "&s=" + T.systemType + "&c=" + T.clientVersion + "&a=" + T.appId + "&n=" + T.networkType + "&i=" + T.initTime + "&p=" + T.preVerifyTime + "&u=" + T.url;i.src = n;} });}}();}), P.complete = function (e) {for (var n = 0, i = t.length; n < i; ++n) {t[n]();}P._completes = [];}, P;}()), k.preVerifyStartTime = l();else {x.state = 1;for (var e = P._completes, n = 0, i = e.length; n < i; ++n) {e[n]();}P._completes = [];}}), C.invoke || (C.invoke = function (e, n, i) {o.WeixinJSBridge && WeixinJSBridge.invoke(e, r(n), i);}, C.on = function (e, n) {o.WeixinJSBridge && WeixinJSBridge.on(e, n);});}, ready: function ready(e) {0 != x.state ? e() : (P._completes.push(e), !I && M.debug && e());}, error: function error(e) {w < "6.0.2" || (-1 == x.state ? e(x.data) : P._fail = e);}, checkJsApi: function checkJsApi(e) {c("checkJsApi", { jsApiList: s(e.jsApiList) }, (e._complete = function (e) {if (y) {var n = e.checkResult;n && (e.checkResult = JSON.parse(n));}e = function (e) {var n = e.checkResult;for (var i in n) {var t = f[i];t && (n[t] = n[i], delete n[i]);}return e;}(e);}, e));}, onMenuShareTimeline: function onMenuShareTimeline(e) {i(p.onMenuShareTimeline, { complete: function complete() {c("shareTimeline", { title: e.title || m, desc: e.title || m, img_url: e.imgUrl || "", link: e.link || location.href, type: e.type || "link", data_url: e.dataUrl || "" }, e);} }, e);}, onMenuShareAppMessage: function onMenuShareAppMessage(n) {i(p.onMenuShareAppMessage, { complete: function complete(e) {"favorite" === e.scene ? c("sendAppMessage", { title: n.title || m, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }) : c("sendAppMessage", { title: n.title || m, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }, n);} }, n);}, onMenuShareQQ: function onMenuShareQQ(e) {i(p.onMenuShareQQ, { complete: function complete() {c("shareQQ", { title: e.title || m, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareWeibo: function onMenuShareWeibo(e) {i(p.onMenuShareWeibo, { complete: function complete() {c("shareWeiboApp", { title: e.title || m, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareQZone: function onMenuShareQZone(e) {i(p.onMenuShareQZone, { complete: function complete() {c("shareQZone", { title: e.title || m, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, updateTimelineShareData: function updateTimelineShareData(e) {c("updateTimelineShareData", { title: e.title, link: e.link, imgUrl: e.imgUrl }, e);}, updateAppMessageShareData: function updateAppMessageShareData(e) {c("updateAppMessageShareData", { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl }, e);}, startRecord: function startRecord(e) {c("startRecord", {}, e);}, stopRecord: function stopRecord(e) {c("stopRecord", {}, e);}, onVoiceRecordEnd: function onVoiceRecordEnd(e) {i("onVoiceRecordEnd", e);}, playVoice: function playVoice(e) {c("playVoice", { localId: e.localId }, e);}, pauseVoice: function pauseVoice(e) {c("pauseVoice", { localId: e.localId }, e);}, stopVoice: function stopVoice(e) {c("stopVoice", { localId: e.localId }, e);}, onVoicePlayEnd: function onVoicePlayEnd(e) {i("onVoicePlayEnd", e);}, uploadVoice: function uploadVoice(e) {c("uploadVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadVoice: function downloadVoice(e) {c("downloadVoice", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, translateVoice: function translateVoice(e) {c("translateVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, chooseImage: function chooseImage(e) {c("chooseImage", { scene: "1|2", count: e.count || 9, sizeType: e.sizeType || ["original", "compressed"], sourceType: e.sourceType || ["album", "camera"] }, (e._complete = function (e) {if (y) {var n = e.localIds;try {n && (e.localIds = JSON.parse(n));} catch (e) {}}}, e));}, getLocation: function getLocation(e) {}, previewImage: function previewImage(e) {c(p.previewImage, { current: e.current, urls: e.urls }, e);}, uploadImage: function uploadImage(e) {c("uploadImage", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadImage: function downloadImage(e) {c("downloadImage", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, getLocalImgData: function getLocalImgData(e) {!1 === A ? (A = !0, c("getLocalImgData", { localId: e.localId }, (e._complete = function (e) {if (A = !1, 0 < V.length) {var n = V.shift();wx.getLocalImgData(n);}}, e))) : V.push(e);}, getNetworkType: function getNetworkType(e) {c("getNetworkType", {}, (e._complete = function (e) {e = function (e) {var n = e.errMsg;e.errMsg = "getNetworkType:ok";var i = e.subtype;if (delete e.subtype, i) e.networkType = i;else {var t = n.indexOf(":"),o = n.substring(t + 1);switch (o) {case "wifi":case "edge":case "wwan":e.networkType = o;break;default:e.errMsg = "getNetworkType:fail";}}return e;}(e);}, e));}, openLocation: function openLocation(e) {c("openLocation", { latitude: e.latitude, longitude: e.longitude, name: e.name || "", address: e.address || "", scale: e.scale || 28, infoUrl: e.infoUrl || "" }, e);} }, _defineProperty(_C, "getLocation", function getLocation(e) {c(p.getLocation, { type: (e = e || {}).type || "wgs84" }, (e._complete = function (e) {delete e.type;}, e));}), _defineProperty(_C, "hideOptionMenu", function hideOptionMenu(e) {c("hideOptionMenu", {}, e);}), _defineProperty(_C, "showOptionMenu", function showOptionMenu(e) {c("showOptionMenu", {}, e);}), _defineProperty(_C, "closeWindow", function closeWindow(e) {c("closeWindow", {}, e = e || {});}), _defineProperty(_C, "hideMenuItems", function hideMenuItems(e) {c("hideMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_C, "showMenuItems", function showMenuItems(e) {c("showMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_C, "hideAllNonBaseMenuItem", function hideAllNonBaseMenuItem(e) {c("hideAllNonBaseMenuItem", {}, e);}), _defineProperty(_C, "showAllNonBaseMenuItem", function showAllNonBaseMenuItem(e) {c("showAllNonBaseMenuItem", {}, e);}), _defineProperty(_C, "scanQRCode", function scanQRCode(e) {c("scanQRCode", { needResult: (e = e || {}).needResult || 0, scanType: e.scanType || ["qrCode", "barCode"] }, (e._complete = function (e) {if (_) {var n = e.resultStr;if (n) {var i = JSON.parse(n);e.resultStr = i && i.scan_code && i.scan_code.scan_result;}}}, e));}), _defineProperty(_C, "openAddress", function openAddress(e) {c(p.openAddress, {}, (e._complete = function (e) {var n;(n = e).postalCode = n.addressPostalCode, delete n.addressPostalCode, n.provinceName = n.proviceFirstStageName, delete n.proviceFirstStageName, n.cityName = n.addressCitySecondStageName, delete n.addressCitySecondStageName, n.countryName = n.addressCountiesThirdStageName, delete n.addressCountiesThirdStageName, n.detailInfo = n.addressDetailInfo, delete n.addressDetailInfo, e = n;}, e));}), _defineProperty(_C, "openProductSpecificView", function openProductSpecificView(e) {c(p.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e);}), _defineProperty(_C, "addCard", function addCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, card_ext: r.cardExt };i.push(a);}c(p.addCard, { card_list: i }, (e._complete = function (e) {var n = e.card_list;if (n) {for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {var o = n[i];o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ;}e.cardList = n, delete e.card_list;}}, e));}), _defineProperty(_C, "chooseCard", function chooseCard(e) {c("chooseCard", { app_id: M.appId, location_id: e.shopId || "", sign_type: e.signType || "SHA1", card_id: e.cardId || "", card_type: e.cardType || "", card_sign: e.cardSign, time_stamp: e.timestamp + "", nonce_str: e.nonceStr }, (e._complete = function (e) {e.cardList = e.choose_card_info, delete e.choose_card_info;}, e));}), _defineProperty(_C, "openCard", function openCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, code: r.code };i.push(a);}c(p.openCard, { card_list: i }, e);}), _defineProperty(_C, "consumeAndShareCard", function consumeAndShareCard(e) {c(p.consumeAndShareCard, { consumedCardId: e.cardId, consumedCode: e.code }, e);}), _defineProperty(_C, "chooseWXPay", function chooseWXPay(e) {c(p.chooseWXPay, n(e), e);}), _defineProperty(_C, "openEnterpriseRedPacket", function openEnterpriseRedPacket(e) {c(p.openEnterpriseRedPacket, n(e), e);}), _defineProperty(_C, "startSearchBeacons", function startSearchBeacons(e) {c(p.startSearchBeacons, { ticket: e.ticket }, e);}), _defineProperty(_C, "stopSearchBeacons", function stopSearchBeacons(e) {c(p.stopSearchBeacons, {}, e);}), _defineProperty(_C, "onSearchBeacons", function onSearchBeacons(e) {i(p.onSearchBeacons, e);}), _defineProperty(_C, "openEnterpriseChat", function openEnterpriseChat(e) {c("openEnterpriseChat", { useridlist: e.userIds, chatname: e.groupName }, e);}), _defineProperty(_C, "launchMiniProgram", function launchMiniProgram(e) {c("launchMiniProgram", { targetAppId: e.targetAppId, path: function (e) {if ("string" == typeof e && 0 < e.length) {var n = e.split("?")[0],i = e.split("?")[1];return n += ".html", void 0 !== i ? n + "?" + i : n;}}(e.path), envVersion: e.envVersion }, e);}), _defineProperty(_C, "miniProgram", { navigateBack: function navigateBack(e) {e = e || {}, u(function () {c("invokeMiniProgramAPI", { name: "navigateBack", arg: { delta: e.delta || 1 } }, e);});}, navigateTo: function navigateTo(e) {u(function () {c("invokeMiniProgramAPI", { name: "navigateTo", arg: { url: e.url } }, e);});}, redirectTo: function redirectTo(e) {u(function () {c("invokeMiniProgramAPI", { name: "redirectTo", arg: { url: e.url } }, e);});}, switchTab: function switchTab(e) {u(function () {c("invokeMiniProgramAPI", { name: "switchTab", arg: { url: e.url } }, e);});}, reLaunch: function reLaunch(e) {u(function () {c("invokeMiniProgramAPI", { name: "reLaunch", arg: { url: e.url } }, e);});}, postMessage: function postMessage(e) {u(function () {c("invokeMiniProgramAPI", { name: "postMessage", arg: e.data || {} }, e);});}, getEnv: function getEnv(e) {u(function () {e({ miniprogram: "miniprogram" === o.__wxjs_environment });});} }), _C),L = 1,B = {};return t.addEventListener("error", function (e) {if (!y) {var n = e.target,i = n.tagName,t = n.src;if (("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) && -1 != t.indexOf("wxlocalresource://")) {e.preventDefault(), e.stopPropagation();var o = n["wx-id"];if (o || (o = L++, n["wx-id"] = o), B[o]) return;B[o] = !0, wx.ready(function () {wx.getLocalImgData({ localId: t, success: function success(e) {n.src = e.localData;} });});}}}, !0), t.addEventListener("load", function (e) {if (!y) {var n = e.target,i = n.tagName;if (n.src, "IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {var t = n["wx-id"];t && (B[t] = !1);}}}, !0), e && (o.wx = o.jWeixin = C), C;}var O;});

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref5.isPage,initRelation$$1 = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  uni.upx2px = upx2px;

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
    // 确保当前 vm 所有数据被同步
    var dataKeys = [].concat(
        Object.keys(vm._data || {}),
        Object.keys(vm._computedWatchers || {}));

    var ret = dataKeys.reduce(function(ret, key) {
        ret[key] = vm[key];
        return ret
    }, Object.create(null));
    //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
    Object.assign(ret, vm.$mp.data || {});
    if (
        Array.isArray(vm.$options.behaviors) &&
        vm.$options.behaviors.indexOf('uni://form-field') !== -1
    ) { //form-field
        ret['name'] = vm.name;
        ret['value'] = vm.value;
    }
    return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
    var this$1 = this;

    if (vnode === null) { //destroy
        return
    }
    if (this.mpType === 'page' || this.mpType === 'component') {
        var mpInstance = this.$scope;
        var data = cloneWithData(this);
        data.__webviewId__ = mpInstance.data.__webviewId__;
        var mpData = Object.create(null);
        Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
            mpData[key] = mpInstance.data[key];
        });
        var diffData = diff(data, mpData);
        if (Object.keys(diffData).length) {
            if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
                console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
                    ']差量更新',
                    JSON.stringify(diffData));
            }
            this.__next_tick_pending = true;
            mpInstance.setData(diffData, function () {
                this$1.__next_tick_pending = false;
                flushCallbacks$1(this$1);
            });
        } else {
            flushCallbacks$1(this);
        }
    }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
    var parts = path.split('.');
    var key = parts[0];
    if (key.indexOf('__$n') === 0) { //number index
        key = parseInt(key.replace('__$n', ''));
    }
    if (parts.length === 1) {
        return obj[key]
    }
    return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

    var oldEmit = Vue.prototype.$emit;

    Vue.prototype.$emit = function(event) {
        if (this.$scope && event) {
            this.$scope['triggerEvent'](event, {
                __args__: toArray(arguments, 1)
            });
        }
        return oldEmit.apply(this, arguments)
    };

    Vue.prototype.$nextTick = function(fn) {
        return nextTick$1(this, fn)
    };

    MP_METHODS.forEach(function (method) {
        Vue.prototype[method] = function(args) {
            if (this.$scope) {
                return this.$scope[method](args)
            }
        };
    });

    Vue.prototype.__init_provide = initProvide;

    Vue.prototype.__init_injections = initInjections;

    Vue.prototype.__call_hook = function(hook, args) {
        var vm = this;
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        var ret;
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook);
        }
        popTarget();
        return ret
    };

    Vue.prototype.__set_model = function(target, key, value, modifiers) {
        if (Array.isArray(modifiers)) {
            if (modifiers.indexOf('trim') !== -1) {
                value = value.trim();
            }
            if (modifiers.indexOf('number') !== -1) {
                value = this._n(value);
            }
        }
        if (!target) {
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__set_sync = function(target, key, value) {
        if (!target) {
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__get_orig = function(item) {
        if (isPlainObject(item)) {
            return item['$orig'] || item
        }
        return item
    };

    Vue.prototype.__get_value = function(dataPath, target) {
        return getTarget(target || this, dataPath)
    };


    Vue.prototype.__get_class = function(dynamicClass, staticClass) {
        return renderClass(staticClass, dynamicClass)
    };

    Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
        if (!dynamicStyle && !staticStyle) {
            return ''
        }
        var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
        var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
        return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
    };

    Vue.prototype.__map = function(val, iteratee) {
        //TODO 暂不考虑 string,number
        var ret, i, l, keys, key;
        if (Array.isArray(val)) {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
                ret[i] = iteratee(val[i], i);
            }
            return ret
        } else if (isObject(val)) {
            keys = Object.keys(val);
            ret = Object.create(null);
            for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[key] = iteratee(val[key], key, i);
            }
            return ret
        }
        return []
    };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/flyio/dist/npm/wx.js":
/*!*******************************************!*\
  !*** ./node_modules/flyio/dist/npm/wx.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
    type: function type(ob) {
        return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
    },
    isObject: function isObject(ob, real) {
        if (real) {
            return this.type(ob) === "object";
        } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
        }
    },
    isFormData: function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    encode: function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    },
    formatParams: function formatParams(data) {
        var str = "";
        var first = true;
        var that = this;
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != "object") {
            return data;
        }
        function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);
            if (type == "array") {
                sub.forEach(function (e, i) {
                    _encode(e, path + "%5B%5D");
                });
            } else if (type == "object") {
                for (var key in sub) {
                    if (path) {
                        _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                    } else {
                        _encode(sub[key], encode(key));
                    }
                }
            } else {
                if (!first) {
                    str += "&";
                }
                first = false;
                str += path + "=" + encode(sub);
            }
        }

        _encode(data, "");
        return str;
    },

    // Do not overwrite existing attributes
    merge: function merge(a, b) {
        for (var key in b) {
            if (!a.hasOwnProperty(key)) {
                a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                this.merge(a[key], b[key]);
            }
        }
        return a;
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * author: wendu
 * email: 824783146@qq.com
 **/

var util = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

//EngineWrapper can help  generating  a  http engine quickly through a adapter
function EngineWrapper(adapter) {
    var AjaxEngine = function () {
        function AjaxEngine() {
            _classCallCheck(this, AjaxEngine);

            this.requestHeaders = {};
            this.readyState = 0;
            this.timeout = 0; // 0 stands for no timeout
            this.responseURL = "";
            this.responseHeaders = {};
        }

        _createClass(AjaxEngine, [{
            key: "_call",
            value: function _call(name) {
                this[name] && this[name].apply(this, [].splice.call(arguments, 1));
            }
        }, {
            key: "_changeReadyState",
            value: function _changeReadyState(state) {
                this.readyState = state;
                this._call("onreadystatechange");
            }
        }, {
            key: "open",
            value: function open(method, url) {
                this.method = method;
                if (!url) {
                    url = location.href;
                } else {
                    url = util.trim(url);
                    if (url.indexOf("http") !== 0) {
                        // Normalize the request url
                        if (isBrowser) {
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }
                }
                this.responseURL = url;
                this._changeReadyState(1);
            }
        }, {
            key: "send",
            value: function send(arg) {
                var _this = this;

                arg = arg || null;
                var self = this;
                if (adapter) {
                    var request = {
                        method: self.method,
                        url: self.responseURL,
                        headers: self.requestHeaders || {},
                        body: arg
                    };
                    util.merge(request, self._options || {});
                    if (request.method === "GET") {
                        request.body = null;
                    }
                    self._changeReadyState(3);
                    var timer;
                    self.timeout = self.timeout || 0;
                    if (self.timeout > 0) {
                        timer = setTimeout(function () {
                            if (self.readyState === 3) {
                                _this._call("onloadend");
                                self._changeReadyState(0);
                                self._call("ontimeout");
                            }
                        }, self.timeout);
                    }
                    request.timeout = self.timeout;
                    adapter(request, function (response) {

                        function getAndDelete(key) {
                            var t = response[key];
                            delete response[key];
                            return t;
                        }

                        // If the request has already timeout, return
                        if (self.readyState !== 3) return;
                        clearTimeout(timer);

                        // Make sure the type of status is integer
                        self.status = getAndDelete("statusCode") - 0;

                        var responseText = getAndDelete("responseText");
                        var statusMessage = getAndDelete("statusMessage");

                        // Network error, set the status code 0
                        if (!self.status) {
                            self.statusText = responseText;
                            self._call("onerror", { msg: statusMessage });
                        } else {
                            // Parsing the response headers to array in a object,  because
                            // there may be multiple values with the same header name
                            var responseHeaders = getAndDelete("headers");
                            var headers = {};
                            for (var field in responseHeaders) {
                                var value = responseHeaders[field];
                                var key = field.toLowerCase();
                                // Is array
                                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                                    headers[key] = value;
                                } else {
                                    headers[key] = headers[key] || [];
                                    headers[key].push(value);
                                }
                            }
                            var cookies = headers["set-cookie"];
                            if (isBrowser && cookies) {
                                cookies.forEach(function (e) {
                                    // Remove the http-Only property of the  cookie
                                    // so that JavaScript can operate it.
                                    document.cookie = e.replace(/;\s*httpOnly/ig, "");
                                });
                            }
                            self.responseHeaders = headers;
                            // Set the fields of engine from response
                            self.statusText = statusMessage || "";
                            self.response = self.responseText = responseText;
                            self._response = response;
                            self._changeReadyState(4);
                            self._call("onload");
                        }
                        self._call("onloadend");
                    });
                } else {
                    console.error("Ajax require adapter");
                }
            }
        }, {
            key: "setRequestHeader",
            value: function setRequestHeader(key, value) {
                this.requestHeaders[util.trim(key)] = value;
            }
        }, {
            key: "getResponseHeader",
            value: function getResponseHeader(key) {
                return (this.responseHeaders[key.toLowerCase()] || "").toString() || null;
            }
        }, {
            key: "getAllResponseHeaders",
            value: function getAllResponseHeaders() {
                var str = "";
                for (var key in this.responseHeaders) {
                    str += key + ":" + this.getResponseHeader(key) + "\r\n";
                }
                return str || null;
            }
        }, {
            key: "abort",
            value: function abort(msg) {
                this._changeReadyState(0);
                this._call("onerror", { msg: msg });
                this._call("onloadend");
            }
        }], [{
            key: "setAdapter",
            value: function setAdapter(requestAdapter) {
                adapter = requestAdapter;
            }
        }]);

        return AjaxEngine;
    }();

    return AjaxEngine;
}

// learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = EngineWrapper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

var Fly = function () {
    function Fly(engine) {
        _classCallCheck(this, Fly);

        this.engine = engine || XMLHttpRequest;

        this.default = this; //For typeScript

        /**
         * Add  lock/unlock API for interceptor.
         *
         * Once an request/response interceptor is locked, the incoming request/response
         * will be added to a queue before they enter the interceptor, they will not be
         * continued  until the interceptor is unlocked.
         *
         * @param [interceptor] either is interceptors.request or interceptors.response
         */
        function wrap(interceptor) {
            var resolve;
            var reject;

            function _clear() {
                interceptor.p = resolve = reject = null;
            }

            utils.merge(interceptor, {
                lock: function lock() {
                    if (!resolve) {
                        interceptor.p = new Promise(function (_resolve, _reject) {
                            resolve = _resolve;
                            reject = _reject;
                        });
                    }
                },
                unlock: function unlock() {
                    if (resolve) {
                        resolve();
                        _clear();
                    }
                },
                clear: function clear() {
                    if (reject) {
                        reject("cancel");
                        _clear();
                    }
                }
            });
        }

        var interceptors = this.interceptors = {
            response: {
                use: function use(handler, onerror) {
                    this.handler = handler;
                    this.onerror = onerror;
                }
            },
            request: {
                use: function use(handler) {
                    this.handler = handler;
                }
            }
        };

        var irq = interceptors.request;
        var irp = interceptors.response;
        wrap(irp);
        wrap(irq);

        this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            params: {}, // Default Url params
            parseJson: true, // Convert response data to JSON object automatically.
            withCredentials: false
        };
    }

    _createClass(Fly, [{
        key: "request",
        value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
                if (utils.isObject(url)) {
                    options = url;
                    url = options.url;
                }
                options = options || {};
                options.headers = options.headers || {};

                function isPromise(p) {
                    // some  polyfill implementation of Promise may be not standard,
                    // so, we test by duck-typing
                    return p && p.then && p.catch;
                }

                /**
                 * If the request/response interceptor has been locked，
                 * the new request/response will enter a queue. otherwise, it will be performed directly.
                 * @param [promise] if the promise exist, means the interceptor is  locked.
                 * @param [callback]
                 */
                function enqueueIfLocked(promise, callback) {
                    if (promise) {
                        promise.then(function () {
                            callback();
                        });
                    } else {
                        callback();
                    }
                }

                // make the http request
                function makeRequest(options) {
                    data = options.body;
                    // Normalize the request url
                    url = utils.trim(options.url);
                    var baseUrl = utils.trim(options.baseURL || "");
                    if (!url && isBrowser && !baseUrl) url = location.href;
                    if (url.indexOf("http") !== 0) {
                        var isAbsolute = url[0] === "/";
                        if (!baseUrl && isBrowser) {
                            var arr = location.pathname.split("/");
                            arr.pop();
                            baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                        }
                        if (baseUrl[baseUrl.length - 1] !== "/") {
                            baseUrl += "/";
                        }
                        url = baseUrl + (isAbsolute ? url.substr(1) : url);
                        if (isBrowser) {

                            // Normalize the url which contains the ".." or ".", such as
                            // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }

                    var responseType = utils.trim(options.responseType || "");
                    var isGet = options.method === "GET";
                    var dataType = utils.type(data);
                    var params = options.params || {};

                    // merge url params when the method is "GET" (data is object)
                    if (isGet && dataType === "object") {
                        params = utils.merge(data, params);
                    }
                    // encode params to String
                    params = utils.formatParams(params);

                    // save url params
                    var _params = [];
                    if (params) {
                        _params.push(params);
                    }
                    // Add data to url params when the method is "GET" (data is String)
                    if (isGet && data && dataType === "string") {
                        _params.push(data);
                    }

                    // make the final url
                    if (_params.length > 0) {
                        url += (url.indexOf("?") === -1 ? "?" : "&") + _params.join("&");
                    }

                    engine.open(options.method, url);

                    // try catch for ie >=9
                    try {
                        engine.withCredentials = !!options.withCredentials;
                        engine.timeout = options.timeout || 0;
                        if (responseType !== "stream") {
                            engine.responseType = responseType;
                        }
                    } catch (e) {}

                    var customContentType = options.headers[contentType] || options.headers[contentTypeLowerCase];

                    // default content type
                    var _contentType = "application/x-www-form-urlencoded";
                    // If the request data is json object, transforming it  to json string,
                    // and set request content-type to "json". In browser,  the data will
                    // be sent as RequestBody instead of FormData
                    if (utils.trim((customContentType || "").toLowerCase()) === _contentType) {
                        data = utils.formatParams(data);
                    } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                        _contentType = 'application/json;charset=utf-8';
                        data = JSON.stringify(data);
                    }
                    //If user doesn't set content-type, set default.
                    if (!(customContentType || isGet)) {
                        options.headers[contentType] = _contentType;
                    }

                    for (var k in options.headers) {
                        if (k === contentType && utils.isFormData(data)) {
                            // Delete the content-type, Let the browser set it
                            delete options.headers[k];
                        } else {
                            try {
                                // In browser environment, some header fields are readonly,
                                // write will cause the exception .
                                engine.setRequestHeader(k, options.headers[k]);
                            } catch (e) {}
                        }
                    }

                    function onresult(handler, data, type) {
                        enqueueIfLocked(responseInterceptor.p, function () {
                            if (handler) {
                                //如果失败，添加请求信息
                                if (type) {
                                    data.request = options;
                                }
                                var ret = handler.call(responseInterceptor, data, Promise);
                                data = ret === undefined ? data : ret;
                            }
                            if (!isPromise(data)) {
                                data = Promise[type === 0 ? "resolve" : "reject"](data);
                            }
                            data.then(function (d) {
                                resolve(d);
                            }).catch(function (e) {
                                reject(e);
                            });
                        });
                    }

                    function onerror(e) {
                        e.engine = engine;
                        onresult(responseInterceptor.onerror, e, -1);
                    }

                    function Err(msg, status) {
                        this.message = msg;
                        this.status = status;
                    }

                    engine.onload = function () {
                        // The xhr of IE9 has not response field
                        var response = engine.response || engine.responseText;
                        if (response && options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                        // Some third engine implementation may transform the response text to json object automatically,
                        // so we should test the type of response before transforming it
                        && !utils.isObject(response)) {
                            response = JSON.parse(response);
                        }

                        var headers = engine.responseHeaders;
                        // In browser
                        if (!headers) {
                            headers = {};
                            var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                            items.pop();
                            items.forEach(function (e) {
                                if (!e) return;
                                var key = e.split(":")[0];
                                headers[key] = engine.getResponseHeader(key);
                            });
                        }
                        var status = engine.status;
                        var statusText = engine.statusText;
                        var data = { data: response, headers: headers, status: status, statusText: statusText };
                        // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                        utils.merge(data, engine._response);
                        if (status >= 200 && status < 300 || status === 304) {
                            data.engine = engine;
                            data.request = options;
                            onresult(responseInterceptor.handler, data, 0);
                        } else {
                            var e = new Err(statusText, status);
                            e.response = data;
                            onerror(e);
                        }
                    };

                    engine.onerror = function (e) {
                        onerror(new Err(e.msg || "Network Error", 0));
                    };

                    engine.ontimeout = function () {
                        onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                    };
                    engine._options = options;
                    setTimeout(function () {
                        engine.send(isGet ? null : data);
                    }, 0);
                }

                enqueueIfLocked(requestInterceptor.p, function () {
                    utils.merge(options, _this.config);
                    var headers = options.headers;
                    headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                    delete headers[contentTypeLowerCase];
                    options.body = data || options.body;
                    url = utils.trim(url || "");
                    options.method = options.method.toUpperCase();
                    options.url = url;
                    var ret = options;
                    if (requestInterceptorHandler) {
                        ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                    }
                    if (!isPromise(ret)) {
                        ret = Promise.resolve(ret);
                    }
                    ret.then(function (d) {
                        //if options continue
                        if (d === options) {
                            makeRequest(d);
                        } else {
                            resolve(d);
                        }
                    }, function (err) {
                        reject(err);
                    });
                });
            });
            promise.engine = engine;
            return promise;
        }
    }, {
        key: "all",
        value: function all(promises) {
            return Promise.all(promises);
        }
    }, {
        key: "spread",
        value: function spread(callback) {
            return function (arr) {
                return callback.apply(null, arr);
            };
        }
    }]);

    return Fly;
}();

//For typeScript


Fly.default = Fly;

["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
    Fly.prototype[e] = function (url, data, option) {
        return this.request(url, data, utils.merge({ method: e }, option));
    };
});
        ["lock", "unlock", "clear"].forEach(function (e) {
            Fly.prototype[e] = function () {
                this.interceptors.request[e]();
            };
        });
// Learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = Fly;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//微信小程序适配器
module.exports = function (request, responseCallback) {
    var con = {
        method: request.method,
        url: request.url,
        dataType: request.dataType || undefined,
        header: request.headers,
        data: request.body || {},
        success: function success(res) {
            responseCallback({
                statusCode: res.statusCode,
                responseText: res.data,
                headers: res.header,
                statusMessage: res.errMsg
            });
        },
        fail: function fail(res) {
            responseCallback({
                statusCode: res.statusCode || 0,
                statusMessage: res.errMsg
            });
        }
    };
    wx.request(con);
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//微信小程序入口
var Fly = __webpack_require__(2);
var EngineWrapper = __webpack_require__(1);
var adapter = __webpack_require__(6);
var wxEngine = EngineWrapper(adapter);
module.exports = function (engine) {
    return new Fly(engine || wxEngine);
};

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map