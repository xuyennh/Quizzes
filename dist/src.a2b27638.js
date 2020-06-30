// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/HomeScreen/home.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "container": "_container_85c01",
  "form": "_form_85c01",
  "title": "_title_85c01",
  "name": "_name_85c01",
  "inputname": "_inputname_85c01",
  "btn": "_btn_85c01"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/HomeScreen/HomeScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("./home.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeScreen() {
  return (
    /*html*/
    "\n      <div class=\"".concat(_home.default.container, "\">\n            <form class=\"").concat(_home.default.form, "\">\n                <h1 class=\"").concat(_home.default.title, "\">Ai La\u0300 Tri\xEA\u0323u Phu\u0301</h1>\n                <div class=\"").concat(_home.default.name, "\">Vui Lo\u0300ng nh\xE2\u0323p t\xEAn cu\u0309a ba\u0323n</div>\n                <input type=\"text\" id=\"inputname\" class=\"").concat(_home.default.inputname, "\">\n                <button id=\"start\" class=\"").concat(_home.default.btn, "\">B\u0103\u0301t \u0111\xE2\u0300u</button>\n            \n            </form>\n      </div>\n      ")
  );
}

var _default = HomeScreen;
exports.default = _default;
},{"./home.scss":"src/components/HomeScreen/home.scss"}],"src/components/Help/help.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "btn": "_btn_39b27",
  "inner": "_inner_39b27"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Help/Help.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _help = _interopRequireDefault(require("./help.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showHelp() {
  return (
    /*html*/
    "\n      <div class=\"".concat(_help.default.btn, "\">\n          <button id=\"help-5050\" class=\"").concat(_help.default.inner, "\">50:50</button>\n          <button id=\"helpcall\" class=\"").concat(_help.default.inner, "\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></button>\n          <button class=\"").concat(_help.default.inner, "\"><i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i></button>\n      </div>\n    ")
  );
}

var _default = showHelp;
exports.default = _default;
},{"./help.scss":"src/components/Help/help.scss"}],"src/components/Board/Board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Help = _interopRequireDefault(require("../Help/Help"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showBoard() {
  return (
    /*html*/
    "\n        <div>\n            <div>".concat((0, _Help.default)(), "</div>\n        </div>\n    ")
  );
}

var _default = showBoard;
exports.default = _default;
},{"../Help/Help":"src/components/Help/Help.js"}],"src/components/MainScreen/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "main": "_main_1b414",
  "game": "_game_1b414",
  "question": "_question_1b414",
  "questionnumber": "_questionnumber_1b414",
  "listanswer": "_listanswer_1b414",
  "name": "_name_1b414",
  "showhelp": "_showhelp_1b414",
  "showscore": "_showscore_1b414",
  "btn": "_btn_1b414",
  "score": "_score_1b414",
  "scorequestion": "_scorequestion_1b414",
  "btnstop": "_btnstop_1b414",
  "countdown": "_countdown_1b414",
  "modal": "_modal_1b414"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/MainScreen/MainScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Board = _interopRequireDefault(require("../Board/Board"));

var _main = _interopRequireDefault(require("./main.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  question: string,
 * id: number,
 * answer: [],
 * name: string,
 * score: number
 * }} props
 */
function MainScreen(props) {
  return (
    /*html*/
    "\n        <div class=\"".concat(_main.default.main, "\">\n            <div class=\"").concat(_main.default.game, "\">\n                <h2 class=\"").concat(_main.default.question, "\">").concat(props.question, "</h2>\n                <div class=\"").concat(_main.default.questionnumber, "\">C\xE2u s\xF4\u0301: ").concat(props.id, "</div>\n                <div class=\"").concat(_main.default.listanswer, "\">").concat(props.answer, "</div>\n                <div class=\"").concat(_main.default.name, "\">").concat(props.name, "</div>\n                <div id=\"help5050\" class=\"").concat(_main.default.showhelp, "\"></div>\n                <button id=\"btn-choose\" class=\"").concat(_main.default.btn, "\">Cho\u0323n</button>\n            </div>\n            <div class=\"").concat(_main.default.showscore, "\">\n            <div>").concat((0, _Board.default)(), "</div> \n            <div id=\"clock\" class=\"").concat(_main.default.countdown, "\"></div>\n            <div class=\"").concat(_main.default.score, "\">Score:</div>\n            <div class=\"").concat(_main.default.scorequestion, "\">").concat(props.score, "</div>\n            <button id=\"btn-stop\" class=\"").concat(_main.default.btnstop, "\">D\u01B0\u0300ng Cu\xF4\u0323c Ch\u01A1i</button>\n            </div>\n        </div>\n      ")
  );
}

var _default = MainScreen;
exports.default = _default;
},{"../Board/Board":"src/components/Board/Board.js","./main.scss":"src/components/MainScreen/main.scss"}],"src/components/EndGameScreen/EndGameScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("../HomeScreen/home.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function EndGame(props) {
  return (
    /*html*/
    "\n    <div class=\"".concat(_home.default.container, "\">\n      <div class=\"").concat(_home.default.form, "\">\n        <h2>Xin l\xF4\u0303i, Ba\u0323n \u0110a\u0303 Thua Cu\xF4\u0323c!</h2>\n        <div>T\xF4\u0309ng s\xF4\u0301 \u0111i\xEA\u0309m ba\u0323n \u0111a\u0323t \u0111\u01B0\u01A1\u0323c la\u0300: ").concat(props.totalScore, "</div>\n        <button id=\"restart\" class=\"").concat(_home.default.btn, "\">Ch\u01A1i La\u0323i</button>\n      </div>\n    </div>\n  ")
  );
}

var _default = EndGame;
exports.default = _default;
},{"../HomeScreen/home.scss":"src/components/HomeScreen/home.scss"}],"src/components/Answer/answer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "answer": "_answer_99fbf",
  "input": "_input_99fbf",
  "item": "_item_99fbf"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Answer/Answer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _answer = _interopRequireDefault(require("./answer.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  id: number,
 *  value: string,
 *  name: string
 * }} props
 */
function showAnswer(props) {
  return (
    /*html*/
    "\n    <label class=\"".concat(_answer.default.answer, "\">\n        <input type=\"radio\" id=\"input\" class=\"").concat(_answer.default.input, "\" name=\"").concat(props.id, "\" value=\"").concat(props.value, "\">\n        <span class=\"").concat(_answer.default.item, "\">").concat(props.name, "</span>\n    </label>\n  ")
  );
}

var _default = showAnswer;
exports.default = _default;
},{"./answer.scss":"src/components/Answer/answer.scss"}],"src/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT = void 0;
var ROOT = document.getElementById("root");
exports.ROOT = ROOT;
},{}],"src/components/ModalBase/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "container": "_container_efe00",
  "content": "_content_efe00",
  "overlay": "_overlay_efe00"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/ModalBase/ModalBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  visible: boolean,
 *  children: string,
 *  overlayColor: string,
 *  contentClassName: string,
 *  containerClassName: string
 *  }} props
 */
function ModalBase(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children,
      _ref$overlayColor = _ref.overlayColor,
      overlayColor = _ref$overlayColor === void 0 ? "rgba(0, 0, 0, 0.4)" : _ref$overlayColor,
      _ref$contentClassName = _ref.contentClassName,
      contentClassName = _ref$contentClassName === void 0 ? "" : _ref$contentClassName,
      _ref$containerClassNa = _ref.containerClassName,
      containerClassName = _ref$containerClassNa === void 0 ? "" : _ref$containerClassNa;
  var content =
  /*html*/
  "\n    <div class=\"".concat(_styles.default.container, " ").concat(containerClassName, "\">\n      <div class=\"").concat(_styles.default.overlay, "\" style=\"background-color: ").concat(overlayColor, "\"></div>\n      <div class=\"").concat(_styles.default.content, " ").concat(contentClassName, "\">").concat(children, "</div>\n    </div>\n  ");

  if (children && visible) {
    _constants.ROOT.insertAdjacentHTML("afterend", content);
  }
}

var _default = ModalBase;
exports.default = _default;
},{"../../constants":"src/constants.js","./styles.scss":"src/components/ModalBase/styles.scss"}],"src/components/Modal/modal.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "modal": "_modal_277f6",
  "animatetop": "_animatetop_277f6",
  "header": "_header_277f6",
  "content": "_content_277f6",
  "close": "_close_277f6",
  "title": "_title_277f6"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Modal/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ModalBase = _interopRequireDefault(require("../ModalBase/ModalBase"));

var _modal = _interopRequireDefault(require("./modal.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 *
 * @param {{
 *  name: string,
 *  children: string,
 *  onOk: (event: MouseEvent) => void,
 *  onCancel: (onClose: () => void, event: MouseEvent) => void,
 *  onClose: (onClose: () => void, event: MouseEvent) => void,
 *  textOk?: string,
 *  textCancel?: string
 * }} props
 */
function Modal(_ref) {
  var name = _ref.name,
      children = _ref.children,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === void 0 ? function () {} : _ref$onOk,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$textOk = _ref.textOk,
      textOk = _ref$textOk === void 0 ? "Ok" : _ref$textOk,
      _ref$textCancel = _ref.textCancel,
      textCancel = _ref$textCancel === void 0 ? "Cancel" : _ref$textCancel,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      rest = _objectWithoutProperties(_ref, ["name", "children", "onOk", "onCancel", "textOk", "textCancel", "onClose"]);

  var header =
  /*html*/
  "\n    <div class=\"".concat(_modal.default.header, "\">\n      <div>Xin Cha\u0300o: ").concat(name, "</div>\n      <div id=\"close\" class=").concat(_modal.default.close, ">&times;</div>\n    </div>\n  ");
  var content =
  /*html*/
  "\n    <div class=\"".concat(_modal.default.content, "\">").concat(children, "</div>\n  ");
  var footer =
  /*html*/
  "\n    <div>\n      <button id=\"modal_ok\">".concat(textOk, "</button>\n      <button id=\"modal_cancel\">").concat(textCancel, "</button>\n    </div>\n  ");
  (0, _ModalBase.default)(_objectSpread({
    children: header + content + footer,
    contentClassName: _modal.default.modal,
    containerClassName: "js-modal"
  }, rest));
  var modal = document.querySelector(".js-modal");
  var modalOk = document.getElementById("modal_ok");
  modalOk && modalOk.addEventListener("click", onOk);
  var modalCancel = document.getElementById("modal_cancel");

  var handleClose = function handleClose() {
    modal.remove();
  };

  modalCancel && modalCancel.addEventListener("click", function (event) {
    onCancel(handleClose, event);
  });
  var closeModal = document.getElementById("close");
  closeModal && closeModal.addEventListener("click", function (event) {
    onClose(handleClose, event);
  });
}

var _default = Modal;
exports.default = _default;
},{"../ModalBase/ModalBase":"src/components/ModalBase/ModalBase.js","./modal.scss":"src/components/Modal/modal.scss"}],"src/utils/counter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function counter(option) {
  var defaultOption = {
    from: 20,
    to: 0,
    onStart: function onStart() {},
    onChange: function onChange() {},
    onEnd: function onEnd() {}
  };

  var options = _objectSpread(_objectSpread({}, defaultOption), option);

  var from = options.from;
  var to = options.to,
      onStart = options.onStart,
      onChange = options.onChange,
      onEnd = options.onEnd;
  var ONE_SECONDS = 1000;

  if (from === to) {
    throw new Error("Bạn cần xét giá trị from và to khác nhau");
  }

  onStart();
  var id = setInterval(function () {
    if (from > to) {
      from--;
    } else {
      from++;
    }

    onChange(from);

    if (from === to) {
      onEnd();
      clearInterval(id);
    }
  }, ONE_SECONDS);
  return {
    clear: function clear() {
      onEnd();
      clearInterval(id);
    }
  };
}

var _default = counter;
exports.default = _default;
},{}],"src/utils/random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var random = {
  fromTo: function fromTo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  withArray: function withArray(arr) {
    var index = this.fromTo(0, arr.length - 1);
    return arr[index];
  }
};
var _default = random;
exports.default = _default;
},{}],"src/components/WinGameScreen/WinGameScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("../HomeScreen/home.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  totalScore: number
 * }} props
 */
function WinGame(props) {
  return (
    /*html*/
    "\n    <div class=\"".concat(_home.default.container, "\">\n      <div class=\"").concat(_home.default.form, "\">\n        <h2>Chu\u0301c M\u01B0\u0300ng Ba\u0323n, Ba\u0323n \u0110a\u0303 Chi\xEA\u0301n Th\u0103\u0301ng!</h2>\n        <div>T\xF4\u0309ng s\xF4\u0301 \u0111i\xEA\u0309m ba\u0323n \u0111a\u0323t \u0111\u01B0\u01A1\u0323c la\u0300: ").concat(props.totalScore, "</div>\n        <button id=\"restart\" class=\"").concat(_home.default.btn, "\">Ch\u01A1i La\u0323i</button>\n      </div>\n    </div>\n  ")
  );
}

var _default = WinGame;
exports.default = _default;
},{"../HomeScreen/home.scss":"src/components/HomeScreen/home.scss"}],"src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HomeScreen = _interopRequireDefault(require("./components/HomeScreen/HomeScreen"));

var _MainScreen = _interopRequireDefault(require("./components/MainScreen/MainScreen"));

var _EndGameScreen = _interopRequireDefault(require("./components/EndGameScreen/EndGameScreen"));

var _Answer = _interopRequireDefault(require("./components/Answer/Answer"));

var _Modal = _interopRequireDefault(require("./components/Modal/Modal"));

var _counter2 = _interopRequireDefault(require("./utils/counter"));

var _random = _interopRequireDefault(require("./utils/random"));

var _WinGameScreen = _interopRequireDefault(require("./components/WinGameScreen/WinGameScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function QuizzGame(quizzes) {
  this.quizzes = quizzes;
  this.index = 0;
  this.name = "John Doe";
  this.start = false;
  this.totalScore = 0;
  this.ramdomNumber = false;
  this.currentAnswer = null;
  this.helpCall = false;
  this.coundown = -1;
  this.answers = ["a", "b", "c", "d"];
  this.modalContent = "";
  this.modalVisible = false;
  this.$root = document.getElementById("root");
  this.handleName = this.handleName.bind(this);
  this.handleStart = this.handleStart.bind(this);
  this.handleInputSelected = this.handleInputSelected.bind(this);
  this.handleChooseAnswer = this.handleChooseAnswer.bind(this);
  this.handleRestart = this.handleRestart.bind(this);
  this.renderhelp5050 = this.renderhelp5050.bind(this);
  this.handleStopGame = this.handleStopGame.bind(this);
  this.handleHelpCallFriend = this.handleHelpCallFriend.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this); // this.renderRandomHelpCall = this.renderRandomHelpCall.bind(this);
}

QuizzGame.prototype = {
  handleStart: function handleStart() {
    this.start = true;
    this.coundown = this.counter();
    this.update();
  },
  renderAnswer: function renderAnswer(arr, id) {
    return arr.map(function (item) {
      return (0, _Answer.default)({
        id: id,
        name: item.name,
        value: item.value
      });
    }).join("");
  },
  // render ra màn hình giao diện bắt đầu game
  renderHomeScreen: function renderHomeScreen() {
    return this.$root.innerHTML = (0, _HomeScreen.default)();
  },
  // render ra mần hình giao diện kết thúc game
  renderRestart: function renderRestart() {
    return this.$root.innerHTML = (0, _EndGameScreen.default)({
      totalScore: this.totalScore
    });
  },
  ShowWinGame: function ShowWinGame() {
    return this.$root.innerHTML = (0, _WinGameScreen.default)({
      totalScore: this.totalScore
    });
  },
  renderWinGame: function renderWinGame() {
    this.ShowWinGame();
    this.handleDOM();
  },
  renderEndGame: function renderEndGame() {
    this.renderRestart();
    this.handleDOM();
  },
  // gán giá trị select với giá trị ở ô input
  handleInputSelected: function handleInputSelected(event) {
    this.currentAnswer = event.target.value;
  },
  // xử lí chọn đáp án
  handleChooseAnswer: function handleChooseAnswer() {
    var _this = this;

    var current = this.quizzes[this.index];
    var answer = current.quizze.answer;
    var score = current.quizze.score;
    var selectItem = answer.filter(function (item) {
      return item.value === _this.currentAnswer;
    })[0];

    if (this.currentAnswer === null) {
      return;
    }

    if (selectItem.isCorreect) {
      this.totalScore += score;

      if (this.index + 1 === this.quizzes.length) {
        this.coundown.clear();
        this.renderWinGame();
      } else {
        this.index++;
        this.coundown.clear();
        this.coundown = this.counter();
        this.update();
      }
    } else {
      this.renderEndGame();
      this.coundown.clear();
    }

    this.currentAnswer = null;
  },
  // xử lí nút chơi lại
  handleRestart: function handleRestart() {
    this.index = 0;
    this.currentAnswer = null;
    this.totalScore = 0;
    this.ramdomNumber = false;
    this.helpCall = false;
    this.coundown = this.counter();
    this.update();
  },
  // xử lí random đáp án
  handleRandom: function handleRandom() {
    var current = this.quizzes[this.index];
    var answer = current.quizze.answer;
    var itemCorrect = answer.filter(function (item) {
      return item.isCorreect;
    })[0];

    var randomanswer = _random.default.withArray(this.answers);

    if (randomanswer === itemCorrect.value) {
      return randomanswer;
    }

    var list = [].concat(_toConsumableArray(itemCorrect.value), _toConsumableArray(itemCorrect.value), _toConsumableArray(itemCorrect.value), _toConsumableArray(randomanswer));
    return {
      item: itemCorrect,
      answer: randomanswer,
      listrandom: list
    };
  },
  // hiển thị kết quả hỗ trợ 50:50
  renderhelp5050: function renderhelp5050() {
    var _this$handleRandom = this.handleRandom(),
        item = _this$handleRandom.item,
        answer = _this$handleRandom.answer;

    if (this.ramdomNumber) {
      return;
    }

    var $help = document.querySelector("#help5050");
    $help.innerHTML = "Chu\u0301ng t\xF4i xin tr\u01A1\u0323 giu\u0301p 50:50 la\u0300: ".concat(item.value.toUpperCase(), " ho\u0103\u0323c ").concat(answer.toUpperCase());
    this.ramdomNumber = true;
  },
  // xử lí hỗ trợ gọi điện thoại cho người thân
  handleHelpCallFriend: function handleHelpCallFriend() {
    if (this.helpCall) {
      return;
    } else {
      this.modalVisible = true;
      this.modalContent = "Tôi xin trợ giúp đáp án câu này là: " + this.renderRandomHelpCall();
      this.update();
    }

    this.helpCall = true;
  },
  // xử lí random kết quả hỗ trợ gọi điện thoại cho người thân tỉ lệ 3:1
  renderRandomHelpCall: function renderRandomHelpCall() {
    var listrandom = this.handleRandom().listrandom;

    var randomAnswerCallHelp = _random.default.withArray(listrandom);

    return randomAnswerCallHelp.toUpperCase();
  },
  // xử lí dừng cuộc chơi
  handleStopGame: function handleStopGame() {
    this.renderEndGame();
    this.coundown.clear();
  },
  // nhận giá trị tên nhập vào
  handleName: function handleName(event) {
    this.name = event.target.value;
  },
  // xử lí thời gian câu hỏi
  counter: function counter() {
    var _this2 = this;

    return (0, _counter2.default)({
      from: 20,
      to: 0,
      onStart: function onStart() {},
      onChange: function onChange(from) {
        document.getElementById("clock").innerHTML = from;
      },
      onEnd: function onEnd() {
        _this2.renderEndGame();
      }
    });
  },
  // render Tổng
  render: function render() {
    var current = this.quizzes[this.index];
    var question = current.quizze.question;
    var answer = current.quizze.answer;
    var score = current.quizze.score;
    var id = current.id;

    if (this.start) {
      this.$root.innerHTML = (0, _MainScreen.default)({
        question: question,
        answer: this.renderAnswer(answer, id),
        name: this.name,
        score: score,
        id: id
      });
    } else {
      this.$root.innerHTML = (0, _HomeScreen.default)();
    }
  },
  // Xử lí tổng
  handleDOM: function handleDOM() {
    var nameInput = document.querySelector("#inputname");
    var start = document.querySelector("#start");
    var inputs = Array.from(document.querySelectorAll("#input"));
    var choose = document.querySelector("#btn-choose");
    var restart = document.querySelector("#restart");
    var help = document.querySelector("#help-5050");
    var stopGame = document.querySelector("#btn-stop");
    var helpcallfriend = document.querySelector("#helpcall"); // input tên người nhập

    nameInput && nameInput.addEventListener("keyup", this.handleName); // sự kiện bắt đầu trò chơi

    start && start.addEventListener("click", this.handleStart); // select đáp án

    for (var i = 0; i < inputs.length; i++) {
      var inputSelected = inputs[i];
      inputSelected.addEventListener("change", this.handleInputSelected);
    } // Xử Lí nút chọn đáp án


    choose && choose.addEventListener("click", this.handleChooseAnswer); // Xử lí chơi lại

    restart && restart.addEventListener("click", this.handleRestart); // Trợ Giúp 50:50

    help && help.addEventListener("click", this.renderhelp5050); // Dừng Cuộc choi

    stopGame && stopGame.addEventListener("click", this.handleStopGame); // Gọi điện thoại cho người thân

    helpcallfriend && helpcallfriend.addEventListener("click", this.handleHelpCallFriend);
  },
  update: function update() {
    this.create();
  },
  handleCloseModal: function handleCloseModal(onClose) {
    this.modalVisible = false;
    onClose();
  },
  create: function create() {
    this.render();
    this.handleDOM();
    (0, _Modal.default)({
      name: this.name,
      visible: this.modalVisible,
      children: this.modalContent,
      onOk: function onOk() {},
      onCancel: this.handleCloseModal,
      onClose: this.handleCloseModal
    });
  }
};
var _default = QuizzGame;
exports.default = _default;
},{"./components/HomeScreen/HomeScreen":"src/components/HomeScreen/HomeScreen.js","./components/MainScreen/MainScreen":"src/components/MainScreen/MainScreen.js","./components/EndGameScreen/EndGameScreen":"src/components/EndGameScreen/EndGameScreen.js","./components/Answer/Answer":"src/components/Answer/Answer.js","./components/Modal/Modal":"src/components/Modal/Modal.js","./utils/counter":"src/utils/counter.js","./utils/random":"src/utils/random.js","./components/WinGameScreen/WinGameScreen":"src/components/WinGameScreen/WinGameScreen.js"}],"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = [{
  id: 1,
  quizze: {
    question: "Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?",
    answer: [{
      id: 1,
      name: "A: Hà Nội và Long An",
      value: "a",
      isCorreect: false
    }, {
      id: 2,
      name: "B: Hà nội và Quảng Ninh",
      value: "b",
      isCorreect: false
    }, {
      id: 3,
      name: "C: Thăng Long và Hạ Long",
      value: "c",
      isCorreect: true
    }, {
      id: 4,
      name: "D: Quảng Ninh và Long An",
      value: "d",
      isCorreect: false
    }],
    score: 100
  }
}, {
  id: 2,
  quizze: {
    question: "Người đẹp Monalisa không có thứ gì?",
    answer: [{
      id: 1,
      name: "A: Tiền",
      value: "a",
      isCorreect: false
    }, {
      id: 2,
      name: "B: Lông Chân",
      value: "b",
      isCorreect: false
    }, {
      id: 3,
      name: "C: Lông Mày",
      value: "c",
      isCorreect: false
    }, {
      id: 4,
      name: "D: Chồng",
      value: "d",
      isCorreect: true
    }],
    score: 300
  }
}, (_ref = {
  id: 2
}, _defineProperty(_ref, "id", 3), _defineProperty(_ref, "quizze", {
  question: "Bệnh gì bác sỹ bó tay?",
  answer: [{
    id: 1,
    name: "A: Gãy tay",
    value: "a",
    isCorreect: true
  }, {
    id: 2,
    name: "B: Siđa",
    value: "b",
    isCorreect: false
  }, {
    id: 3,
    name: "C: Bệnh sĩ",
    value: "c",
    isCorreect: false
  }, {
    id: 4,
    name: "D: HIV",
    value: "d",
    isCorreect: false
  }],
  score: 500
}), _ref), {
  id: 4,
  quizze: {
    question: "Sở thú bị cháy, con gì chạy ra đầu tiên?",
    answer: [{
      id: 1,
      name: "A: Con chim",
      value: "a",
      isCorreect: false
    }, {
      id: 2,
      name: "B: Con Người",
      value: "c",
      isCorreect: true
    }, {
      id: 3,
      name: "C: Con rắn",
      value: "b",
      isCorreect: false
    }, {
      id: 4,
      name: "D: Con Tê Giác",
      value: "d",
      isCorreect: false
    }],
    score: 1000
  }
}];
var _default = data;
exports.default = _default;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles/styles.scss");

var _App = _interopRequireDefault(require("./App"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newGame = new _App.default(_data.default);
newGame.create();
},{"./styles/styles.scss":"src/styles/styles.scss","./App":"src/App.js","./data":"src/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64747" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map