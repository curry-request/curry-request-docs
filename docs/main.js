/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default && _css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  --main-color: #fff;\n  --main-bg: #008700;\n  --shadow-color: rgba(101, 99, 96, 0.36);\n  --primary-color: rgb(79, 75, 73);\n  --header-height: 4rem;\n}\n\n\nheader {\n  letter-spacing: .13rem;\n  background: var(--main-bg);\n  color: var(--main-color);\n  display: flex;\n  flex-wrap: nowrap;\n  position: sticky;\n  padding: .5rem 1rem;\n  height: var(--header-height);\n  justify-content: space-between;\n  top: 0;\n  z-index: 3;\n}\n\nmain{\n  height: calc(100vh - var(--header-height))\n}\n\nmain::after {\n  position: absolute;\n  content: '';\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1.5rem;\n  z-index: -1;\n  background: #f5f5f5;\n  border-right: 1px solid rgba(0, 0, 0,.1);\n}\n\nmain::before {\n  position: absolute;\n  content: '';\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 50%;\n  z-index: -2;\n  background-color: #ddd;\n}\n\n.title {\n  font-family: 'Oswald', sans-serif;\n  margin: 0;\n}\n\n.title-sub{\n  margin: 0;\n}\n\n.github.navbar-icon  {\n  height: 3rem;\n  fill: #fff;\n}\n\n.header-details {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.header-details__version {\n  margin-right: 1rem;\n  padding-right: 1rem;\n  border-right: 1px solid #fff;\n}\n\n.feature {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.feature p{\n  margin: 0;\n  font-size: .9rem;\n}\n\n.feature__desc {\n  flex: 0 0 50%;\n  padding-right: 2rem;\n  padding-left: 1rem;\n  padding-bottom: 1rem;\n}\n\n.feature__demo {\n  width: 50%;\n  flex: 0 0 50%;\n  background: #ddd;\n  position: relative;\n}\n\n.feature__demo::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 1.5rem;\n  background: #f5f5f5;\n  border-right: 1px solid rgba(0, 0, 0,.1);\n}\n\n.editor-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.editor-actions__btn {\n  margin-top: 1rem;\n  padding: .5rem 1rem;\n  box-shadow: 0px 1rem 3rem var(--shadow-color);\n  border: 0;\n  background-color: var(--primary-color);\n  color: #fff;\n  font-weight: 700;\n  transition: .2s all;\n  cursor: pointer;\n  margin-right: .5rem;\n}\n\n.editor-actions__btn[disabled] {\n  opacity: .3;\n  pointer-events: none;\n}\n\n.editor-actions__btn:hover {\n  transform: scaleX(1.05);\n  opacity: .8;\n}\n\n.editor-actions__btn.run-example {\n  margin-right: 0;\n}\n\n.feature .output {\n  background: #3d3d3d;\n  color: lime;\n  width: 100%;\n  padding: 0 2rem;\n}\n\n.feature .output pre {\n  margin: 0;\n  font-size: .9rem;\n}\n\n\n@media screen and (min-width: 768px) {\n  .feature__desc {\n    padding-left: 2rem;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .feature__desc {\n    padding-left: 3rem;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_index_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _example_contents_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _example_contents_actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _example_contents_http_call_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _example_contents_post_payload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _example_contents_jwt_injection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _example_contents_abortion_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _example_contents_example_from_motivation_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43);












// we need to treat the 'config' and 'actions' sections independently because it is used afterward and we need a reference here
const configDocLinesLength = _example_contents_config_js__WEBPACK_IMPORTED_MODULE_1__.doc.split("\n").length
const actionsDocLinesLength = _example_contents_actions_js__WEBPACK_IMPORTED_MODULE_2__.doc.split("\n").length
const confDocLinesLength = configDocLinesLength + actionsDocLinesLength

const configEditor = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.bootstrapEditor)(
  document.querySelector(".config .feature__demo"),
  _example_contents_config_js__WEBPACK_IMPORTED_MODULE_1__.doc
)
const actionsEditor = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.bootstrapEditor)(
  document.querySelector(".actions .feature__demo"),
  _example_contents_actions_js__WEBPACK_IMPORTED_MODULE_2__.doc,
  configDocLinesLength
)
;(0,_util_js__WEBPACK_IMPORTED_MODULE_8__.sectionMarkdownInjector)("config")
;(0,_util_js__WEBPACK_IMPORTED_MODULE_8__.sectionMarkdownInjector)("actions")

// this is a list of all sections
const sections = [
  { selector: "http-call", editorDoc: _example_contents_http_call_js__WEBPACK_IMPORTED_MODULE_3__.doc },
  { selector: "post-payload", editorDoc: _example_contents_post_payload_js__WEBPACK_IMPORTED_MODULE_4__.doc },
  { selector: "jwt-injection", editorDoc: _example_contents_jwt_injection_js__WEBPACK_IMPORTED_MODULE_5__.doc },
  { selector: "abortion", editorDoc: _example_contents_abortion_js__WEBPACK_IMPORTED_MODULE_6__.doc },
  { selector: "example-from-motivation-post", editorDoc: _example_contents_example_from_motivation_post__WEBPACK_IMPORTED_MODULE_7__.doc }
]

const logger = new _Logger_js__WEBPACK_IMPORTED_MODULE_9__.default()

const actionsLogic = ({ selector, editorDoc }) => {
  ;(0,_util_js__WEBPACK_IMPORTED_MODULE_8__.prepareMarkup)(selector)
  ;(0,_util_js__WEBPACK_IMPORTED_MODULE_8__.sectionMarkdownInjector)(selector)

  const parent = document.querySelector(`.${selector} .feature__demo`)
  const editor = (0,_util_js__WEBPACK_IMPORTED_MODULE_8__.bootstrapEditor)(
    parent,
    editorDoc,
    confDocLinesLength
  )

  /** run snippet **/
  const runBtn = document.querySelector(`.${selector} .run-example`)

  if (runBtn) {
    runBtn.addEventListener("click", (e) => {
      const configStateDoc = configEditor.state.doc.toString()
      const actionsStateDoc = actionsEditor.state.doc.toString()
      const editorState = editor.state.doc.toString()
      const script = [configStateDoc, actionsStateDoc, editorState].join("\n")

      const log = logger.setBlock(
        `.${selector} .output > pre`,
        `.${selector} .clear-example`
      )

      // we evaluate the script in a scoped context
      Function(
        `"use strict"; return function(console, curryReq){ ${script} }`
      )()(
        {
          ...console,
          log
        },
        _lib_index_es_js__WEBPACK_IMPORTED_MODULE_0__.default
      )
    })
  }

  /** reset action **/
  const resetBtn = document.querySelector(`.${selector} .reset-example`)
  resetBtn.addEventListener("click", () => {
    editor.dispatch({
      changes: { from: 0, to: editor.state.doc.length, insert: editorDoc }
    })
  })

  const clearBtn = document.querySelector(`.${selector} .clear-example`)
  const preNode = document.querySelector(`.${selector} .output > pre`)
  if (clearBtn || preNode) {
    clearBtn.addEventListener("click", () => {
      preNode.textContent = ""
      clearBtn.setAttribute("disabled", "")
    })
  }
}

// we run all the action logic for all interested sections
sections.forEach(actionsLogic)
;(0,_util_js__WEBPACK_IMPORTED_MODULE_8__.eventuallyScrollTo)()


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var abort_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var abort_controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(abort_controller__WEBPACK_IMPORTED_MODULE_1__);


const request = (baseUrl = "", alternativeFetchImpl) => (baseHeaders) => (method) => (route) => (payload) => (token) => {
    const headers = baseHeaders || {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const fetch = alternativeFetchImpl || (cross_fetch__WEBPACK_IMPORTED_MODULE_0___default());
    const abortCtrl = new (abort_controller__WEBPACK_IMPORTED_MODULE_1___default())();
    const signal = abortCtrl.signal;
    const httpConfig = {
        method,
        headers,
        signal
    };
    if (payload) {
        httpConfig.body =
            typeof payload === "object" ? JSON.stringify(payload) : payload;
    }
    const res = fetch(`${baseUrl}${route || ""}`, httpConfig);
    res.abort = () => {
        abortCtrl.abort();
    };
    return res;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports.default = AbortController


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });


const doc = `// example configuration
// import curryReq from 'curry-request' /*curryReq is already in scope*/
// we place the web api base url & the base headers
  
const baseUrl = "https://jsonplaceholder.typicode.com"
const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
}

const apiRequest = curryReq(baseUrl)(baseHeaders)

// we prepare the methods we'll need
// differently from axios this is a manual operation
const get = apiRequest('GET')
const post = apiRequest('POST')
const put = apiRequest('PUT')
const del = apiRequest('DELETE')
`




/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });

const doc = ` 
const getTodos = get('/todos/')()
`


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });
const doc = ` 
// these examples are interactive
// the configuration defined above is used
getTodos()
  .then(x => x.json())
  .then(res => console.log(res))
`


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });
const doc = ` 
const payload = { title: 'Day at the park', content: 'Once upon a time ...', author: 'Celine' }
const createTodo = post('/todos')

createTodo(payload)()
  .then(x => {
    console.log('first', x)
  })

createTodo(JSON.stringify(payload))()
  .then(x => {
    console.log('second', x)
  })
`


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });
const doc = `
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const getTodo1 = get('/todos/1')()
getTodo1(token)
  .then(x => x.json())
  .then(x => {
    console.log(x)
  })
`


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });
const doc = `
const req = getTodos()

req.catch(x => {
  console.log(x.toString())
})
  
setTimeout(req.abort, 1)
`


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doc": () => (/* binding */ doc)
/* harmony export */ });

const doc = ` 

// get                                                                                                                                                                                                                                    
const getTodosById = (id) => get("/todos/" + id)()()                                                                                                                                                                            
                                                                                                                                                                                                                                          
// post                                                                                                                                                                                                                                   
const postTodo = (payload) => post("/todos")(payload)()                                                                                                                                                                         
                                                                                                                                                                                                                                          
// post                                                                                                                                                                                                                                   
const putTodo = (id, payload) => put("/todos/" + id)(payload)()                                                                                                                                                                           
                                                                                                                                                                                                                                          
// delete                                                                                                                                                                                                                                 
const deleteTodosById = (id) => del("/todos/" + id)()();

(async () =>  {
  const postedTodo = await postTodo({ title: 'New activity' }).then(x => x.json())
  console.log('postedTodo', postedTodo)
  
  const post1 = await getTodosById(1).then(x => x.json()) 
  console.log('post1',post1)
  
  const updatedTodo = await putTodo(1, { title: 'Buy milk' }).then(x => x.json())
  console.log('updatedTodo', updatedTodo)

  const delResponse = await deleteTodosById(1)
  console.log('delResponse', delResponse)
})()
`


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrapEditor": () => (/* binding */ bootstrapEditor),
/* harmony export */   "sectionMarkdownInjector": () => (/* binding */ sectionMarkdownInjector),
/* harmony export */   "prepareMarkup": () => (/* binding */ prepareMarkup),
/* harmony export */   "eventuallyScrollTo": () => (/* binding */ eventuallyScrollTo)
/* harmony export */ });
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _codemirror_gutter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var _codemirror_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _codemirror_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _example_contents_cachedMdToHtmlFiles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);









let playgroundTheme = _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.EditorView.theme({
  "&": {
    backgroundColor: "#ddd"
  },
  ".cm-gutters": {
    border: "none",
    marginRight: ".5rem",
    width: "1.5rem"
  },
  ".cm-scroller": {
    overflow: "hidden"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    textAlign: "initial"
  }
})

const bootstrapEditor = (parent, doc, lineNumberOffset = 0) => {
  return new _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.EditorView({
    state: _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorState.create({
      doc,
      extensions: [
        (0,_codemirror_gutter__WEBPACK_IMPORTED_MODULE_3__.lineNumbers)({
          formatNumber: (n) => String(n + lineNumberOffset).padStart(2, "0")
        }),
        (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_1__.highlightSpecialChars)(),
        (0,_codemirror_history__WEBPACK_IMPORTED_MODULE_4__.history)(),
        (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_1__.drawSelection)(),
        _codemirror_highlight__WEBPACK_IMPORTED_MODULE_5__.defaultHighlightStyle.fallback,
        _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.keymap.of(_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__.defaultKeymap),
        (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__.javascript)(),
        playgroundTheme
      ]
    }),
    parent
  })
}

const sectionMarkdownInjector = (selector) => {
  const sectionMdNode = document.querySelector(
    `.feature.${selector} .feature__desc__txt`
  )
  const fileName = `${selector}.md`
  sectionMdNode.innerHTML = _example_contents_cachedMdToHtmlFiles_json__WEBPACK_IMPORTED_MODULE_0__[fileName] || ""
}

const placeholderBlock = document.querySelector(".example-placeholder")
const placeholderBlockParent = placeholderBlock.parentNode
placeholderBlock.remove()
const prepareMarkup = (selector) => {
  const cloned = placeholderBlock.cloneNode(true)
  cloned.classList.add(selector)
  placeholderBlockParent.append(cloned)
}

const eventuallyScrollTo = () => {
  const hash = window.location.hash
  if (!hash) return

  const node = document.querySelector(hash)
  if (!node) return

  const distanceFromTop = node.getBoundingClientRect().top
  window.scrollTo({
    top: distanceFromTop,
    behavior: "smooth"
  })
}

/***/ }),
/* 24 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"abortion.md":"<h3 id=\\"abortion\\">Abortion</h3>\\n<p>The returned promise also has an <strong>abort</strong> method for aborting the request.</p>\\n","actions.md":"<h3 id=\\"action-setup\\">Action setup</h3>\\n<p>Preparation of our actions (as controller-actions) is quite terse.</p>\\n","config.md":"<h3 id=\\"base-configuration\\">Base Configuration</h3>\\n<p>Curry Request is conceived to centralize the management of api calls to common services (both in Node and in the browser);<br>in the js ecosystem the most popular package for dealing with XHR is Axios, but we weren&#39;t satisfied with it so this module.<br><br/><br>Similar to Axios you can configure instances, and through the pluggable fetch module it can easily implement interceptors.<br><br/><br>Differently from Axios, it is not such a high abstraction,<br>it is built with the assumption that <strong>fetch is good enough</strong>, and it doesn&#39;t transform inputs and outputs so drastically.<br>this is done through a simple curried function, with the fetch parameters ordered for our convenience.</p>\\n","example-from-motivation-post.md":"<h3 id=\\"random-examples\\">Random examples</h3>\\n<p>These are some examples from the <a href=\\"https://fcalo.com\\">package motivation post</a>.</p>\\n","http-call.md":"<h3 id=\\"http-call\\">Http call</h3>\\n<p>The returning function is the one that actually makes the http-request,<br>keep in mind that you can supply the optional token value that will be used in authorization header, with the<br><em>Bearer</em> prefix.</p>\\n","jwt-injection.md":"<h3 id=\\"jwt-injection\\">JWT injection</h3>\\n<p>The last function of the curried chain takes one optional parameter we called <strong>token</strong>;<br>if present, this wiil be concatenated with the <strong>Bearer</strong> prefix and used as value for the <strong>Authorization</strong> header.</p>\\n","post-payload.md":"<h3 id=\\"post-payload\\">Post payload</h3>\\n<p>Passing a string in the payload body parameter will be simply attached as-is,<br>but if we pass ad object or array it will be automatically serialized.</p>\\n"}');

/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => (/* reexport safe */ _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.Range),
/* harmony export */   "BidiSpan": () => (/* binding */ BidiSpan),
/* harmony export */   "BlockInfo": () => (/* binding */ BlockInfo),
/* harmony export */   "BlockType": () => (/* binding */ BlockType),
/* harmony export */   "Decoration": () => (/* binding */ Decoration),
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "EditorView": () => (/* binding */ EditorView),
/* harmony export */   "MatchDecorator": () => (/* binding */ MatchDecorator),
/* harmony export */   "PluginField": () => (/* binding */ PluginField),
/* harmony export */   "PluginFieldProvider": () => (/* binding */ PluginFieldProvider),
/* harmony export */   "ViewPlugin": () => (/* binding */ ViewPlugin),
/* harmony export */   "ViewUpdate": () => (/* binding */ ViewUpdate),
/* harmony export */   "WidgetType": () => (/* binding */ WidgetType),
/* harmony export */   "__test": () => (/* binding */ __test),
/* harmony export */   "drawSelection": () => (/* binding */ drawSelection),
/* harmony export */   "highlightActiveLine": () => (/* binding */ highlightActiveLine),
/* harmony export */   "highlightSpecialChars": () => (/* binding */ highlightSpecialChars),
/* harmony export */   "keymap": () => (/* binding */ keymap),
/* harmony export */   "logException": () => (/* binding */ logException),
/* harmony export */   "placeholder": () => (/* binding */ placeholder),
/* harmony export */   "runScopeHandlers": () => (/* binding */ runScopeHandlers)
/* harmony export */ });
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _codemirror_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var style_mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var w3c_keyname__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);







function getSelection(root) {
    return (root.getSelection ? root.getSelection() : document.getSelection());
}
function contains(dom, node) {
    return node ? dom.contains(node.nodeType != 1 ? node.parentNode : node) : false;
}
function deepActiveElement() {
    let elt = document.activeElement;
    while (elt && elt.shadowRoot)
        elt = elt.shadowRoot.activeElement;
    return elt;
}
function hasSelection(dom, selection) {
    if (!selection.anchorNode)
        return false;
    try {
        // Firefox will raise 'permission denied' errors when accessing
        // properties of `sel.anchorNode` when it's in a generated CSS
        // element.
        return contains(dom, selection.anchorNode);
    }
    catch (_) {
        return false;
    }
}
function clientRectsFor(dom) {
    if (dom.nodeType == 3)
        return textRange(dom, 0, dom.nodeValue.length).getClientRects();
    else if (dom.nodeType == 1)
        return dom.getClientRects();
    else
        return [];
}
// Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)
function isEquivalentPosition(node, off, targetNode, targetOff) {
    return targetNode ? (scanFor(node, off, targetNode, targetOff, -1) ||
        scanFor(node, off, targetNode, targetOff, 1)) : false;
}
function domIndex(node) {
    for (var index = 0;; index++) {
        node = node.previousSibling;
        if (!node)
            return index;
    }
}
function scanFor(node, off, targetNode, targetOff, dir) {
    for (;;) {
        if (node == targetNode && off == targetOff)
            return true;
        if (off == (dir < 0 ? 0 : maxOffset(node))) {
            if (node.nodeName == "DIV")
                return false;
            let parent = node.parentNode;
            if (!parent || parent.nodeType != 1)
                return false;
            off = domIndex(node) + (dir < 0 ? 0 : 1);
            node = parent;
        }
        else if (node.nodeType == 1) {
            node = node.childNodes[off + (dir < 0 ? -1 : 0)];
            if (node.nodeType == 1 && node.contentEditable == "false")
                return false;
            off = dir < 0 ? maxOffset(node) : 0;
        }
        else {
            return false;
        }
    }
}
function maxOffset(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
const Rect0 = { left: 0, right: 0, top: 0, bottom: 0 };
function flattenRect(rect, left) {
    let x = left ? rect.left : rect.right;
    return { left: x, right: x, top: rect.top, bottom: rect.bottom };
}
function windowRect(win) {
    return { left: 0, right: win.innerWidth,
        top: 0, bottom: win.innerHeight };
}
const ScrollSpace = 5;
function scrollRectIntoView(dom, rect) {
    let doc = dom.ownerDocument, win = doc.defaultView;
    for (let cur = dom.parentNode; cur;) {
        if (cur.nodeType == 1) { // Element
            let bounding, top = cur == document.body;
            if (top) {
                bounding = windowRect(win);
            }
            else {
                if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
                    cur = cur.parentNode;
                    continue;
                }
                let rect = cur.getBoundingClientRect();
                // Make sure scrollbar width isn't included in the rectangle
                bounding = { left: rect.left, right: rect.left + cur.clientWidth,
                    top: rect.top, bottom: rect.top + cur.clientHeight };
            }
            let moveX = 0, moveY = 0;
            if (rect.top < bounding.top)
                moveY = -(bounding.top - rect.top + ScrollSpace);
            else if (rect.bottom > bounding.bottom)
                moveY = rect.bottom - bounding.bottom + ScrollSpace;
            if (rect.left < bounding.left)
                moveX = -(bounding.left - rect.left + ScrollSpace);
            else if (rect.right > bounding.right)
                moveX = rect.right - bounding.right + ScrollSpace;
            if (moveX || moveY) {
                if (top) {
                    win.scrollBy(moveX, moveY);
                }
                else {
                    if (moveY) {
                        let start = cur.scrollTop;
                        cur.scrollTop += moveY;
                        moveY = cur.scrollTop - start;
                    }
                    if (moveX) {
                        let start = cur.scrollLeft;
                        cur.scrollLeft += moveX;
                        moveX = cur.scrollLeft - start;
                    }
                    rect = { left: rect.left - moveX, top: rect.top - moveY,
                        right: rect.right - moveX, bottom: rect.bottom - moveY };
                }
            }
            if (top)
                break;
            cur = cur.assignedSlot || cur.parentNode;
        }
        else if (cur.nodeType == 11) { // A shadow root
            cur = cur.host;
        }
        else {
            break;
        }
    }
}
class DOMSelection {
    constructor() {
        this.anchorNode = null;
        this.anchorOffset = 0;
        this.focusNode = null;
        this.focusOffset = 0;
    }
    eq(domSel) {
        return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset &&
            this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
    }
    set(domSel) {
        this.anchorNode = domSel.anchorNode;
        this.anchorOffset = domSel.anchorOffset;
        this.focusNode = domSel.focusNode;
        this.focusOffset = domSel.focusOffset;
    }
}
let preventScrollSupported = null;
// Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.
function focusPreventScroll(dom) {
    if (dom.setActive)
        return dom.setActive(); // in IE
    if (preventScrollSupported)
        return dom.focus(preventScrollSupported);
    let stack = [];
    for (let cur = dom; cur; cur = cur.parentNode) {
        stack.push(cur, cur.scrollTop, cur.scrollLeft);
        if (cur == cur.ownerDocument)
            break;
    }
    dom.focus(preventScrollSupported == null ? {
        get preventScroll() {
            preventScrollSupported = { preventScroll: true };
            return true;
        }
    } : undefined);
    if (!preventScrollSupported) {
        preventScrollSupported = false;
        for (let i = 0; i < stack.length;) {
            let elt = stack[i++], top = stack[i++], left = stack[i++];
            if (elt.scrollTop != top)
                elt.scrollTop = top;
            if (elt.scrollLeft != left)
                elt.scrollLeft = left;
        }
    }
}
let scratchRange;
function textRange(node, from, to = from) {
    let range = scratchRange || (scratchRange = document.createRange());
    range.setEnd(node, to);
    range.setStart(node, from);
    return range;
}
function dispatchKey(elt, name, code) {
    let options = { key: name, code: name, keyCode: code, which: code, cancelable: true };
    let down = new KeyboardEvent("keydown", options);
    down.synthetic = true;
    elt.dispatchEvent(down);
    let up = new KeyboardEvent("keyup", options);
    up.synthetic = true;
    elt.dispatchEvent(up);
    return down.defaultPrevented || up.defaultPrevented;
}
let _plainTextSupported = null;
function contentEditablePlainTextSupported() {
    if (_plainTextSupported == null) {
        _plainTextSupported = false;
        let dummy = document.createElement("div");
        try {
            dummy.contentEditable = "plaintext-only";
            _plainTextSupported = dummy.contentEditable == "plaintext-only";
        }
        catch (_) { }
    }
    return _plainTextSupported;
}

class DOMPos {
    constructor(node, offset, precise = true) {
        this.node = node;
        this.offset = offset;
        this.precise = precise;
    }
    static before(dom, precise) { return new DOMPos(dom.parentNode, domIndex(dom), precise); }
    static after(dom, precise) { return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise); }
}
const none$3 = [];
class ContentView {
    constructor() {
        this.parent = null;
        this.dom = null;
        this.dirty = 2 /* Node */;
    }
    get editorView() {
        if (!this.parent)
            throw new Error("Accessing view in orphan content view");
        return this.parent.editorView;
    }
    get overrideDOMText() { return null; }
    get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
        return this.posAtStart + this.length;
    }
    posBefore(view) {
        let pos = this.posAtStart;
        for (let child of this.children) {
            if (child == view)
                return pos;
            pos += child.length + child.breakAfter;
        }
        throw new RangeError("Invalid child in posBefore");
    }
    posAfter(view) {
        return this.posBefore(view) + view.length;
    }
    // Will return a rectangle directly before (when side < 0), after
    // (side > 0) or directly on (when the browser supports it) the
    // given position.
    coordsAt(_pos, _side) { return null; }
    sync(track) {
        var _a;
        if (this.dirty & 2 /* Node */) {
            let parent = this.dom, pos = null;
            for (let child of this.children) {
                if (child.dirty) {
                    let next = pos ? pos.nextSibling : parent.firstChild;
                    if (!child.dom && next && !((_a = ContentView.get(next)) === null || _a === void 0 ? void 0 : _a.parent))
                        child.reuseDOM(next);
                    child.sync(track);
                    child.dirty = 0 /* Not */;
                }
                if (track && track.node == parent && pos != child.dom)
                    track.written = true;
                syncNodeInto(parent, pos, child.dom);
                pos = child.dom;
            }
            let next = pos ? pos.nextSibling : parent.firstChild;
            if (next && track && track.node == parent)
                track.written = true;
            while (next)
                next = rm(next);
        }
        else if (this.dirty & 1 /* Child */) {
            for (let child of this.children)
                if (child.dirty) {
                    child.sync(track);
                    child.dirty = 0 /* Not */;
                }
        }
    }
    reuseDOM(_dom) { return false; }
    localPosFromDOM(node, offset) {
        let after;
        if (node == this.dom) {
            after = this.dom.childNodes[offset];
        }
        else {
            let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;
            for (;;) {
                let parent = node.parentNode;
                if (parent == this.dom)
                    break;
                if (bias == 0 && parent.firstChild != parent.lastChild) {
                    if (node == parent.firstChild)
                        bias = -1;
                    else
                        bias = 1;
                }
                node = parent;
            }
            if (bias < 0)
                after = node;
            else
                after = node.nextSibling;
        }
        if (after == this.dom.firstChild)
            return 0;
        while (after && !ContentView.get(after))
            after = after.nextSibling;
        if (!after)
            return this.length;
        for (let i = 0, pos = 0;; i++) {
            let child = this.children[i];
            if (child.dom == after)
                return pos;
            pos += child.length + child.breakAfter;
        }
    }
    domBoundsAround(from, to, offset = 0) {
        let fromI = -1, fromStart = -1, toI = -1, toEnd = -1;
        for (let i = 0, pos = offset, prevEnd = offset; i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (pos < from && end > to)
                return child.domBoundsAround(from, to, pos);
            if (end >= from && fromI == -1) {
                fromI = i;
                fromStart = pos;
            }
            if (pos > to && child.dom.parentNode == this.dom) {
                toI = i;
                toEnd = prevEnd;
                break;
            }
            prevEnd = end;
            pos = end + child.breakAfter;
        }
        return { from: fromStart, to: toEnd < 0 ? offset + this.length : toEnd,
            startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: toI < this.children.length && toI >= 0 ? this.children[toI].dom : null };
    }
    markDirty(andParent = false) {
        if (this.dirty & 2 /* Node */)
            return;
        this.dirty |= 2 /* Node */;
        this.markParentsDirty(andParent);
    }
    markParentsDirty(childList) {
        for (let parent = this.parent; parent; parent = parent.parent) {
            if (childList)
                parent.dirty |= 2 /* Node */;
            if (parent.dirty & 1 /* Child */)
                return;
            parent.dirty |= 1 /* Child */;
            childList = false;
        }
    }
    setParent(parent) {
        if (this.parent != parent) {
            this.parent = parent;
            if (this.dirty)
                this.markParentsDirty(true);
        }
    }
    setDOM(dom) {
        this.dom = dom;
        dom.cmView = this;
    }
    get rootView() {
        for (let v = this;;) {
            let parent = v.parent;
            if (!parent)
                return v;
            v = parent;
        }
    }
    replaceChildren(from, to, children = none$3) {
        this.markDirty();
        for (let i = from; i < to; i++) {
            let child = this.children[i];
            if (child.parent == this)
                child.parent = null;
        }
        this.children.splice(from, to - from, ...children);
        for (let i = 0; i < children.length; i++)
            children[i].setParent(this);
    }
    ignoreMutation(_rec) { return false; }
    ignoreEvent(_event) { return false; }
    childCursor(pos = this.length) {
        return new ChildCursor(this.children, pos, this.children.length);
    }
    childPos(pos, bias = 1) {
        return this.childCursor().findPos(pos, bias);
    }
    toString() {
        let name = this.constructor.name.replace("View", "");
        return name + (this.children.length ? "(" + this.children.join() + ")" :
            this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") +
            (this.breakAfter ? "#" : "");
    }
    static get(node) { return node.cmView; }
}
ContentView.prototype.breakAfter = 0;
// Remove a DOM node and return its next sibling.
function rm(dom) {
    let next = dom.nextSibling;
    dom.parentNode.removeChild(dom);
    return next;
}
function syncNodeInto(parent, after, dom) {
    let next = after ? after.nextSibling : parent.firstChild;
    if (dom.parentNode == parent)
        while (next != dom)
            next = rm(next);
    else
        parent.insertBefore(dom, next);
}
class ChildCursor {
    constructor(children, pos, i) {
        this.children = children;
        this.pos = pos;
        this.i = i;
        this.off = 0;
    }
    findPos(pos, bias = 1) {
        for (;;) {
            if (pos > this.pos || pos == this.pos &&
                (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
                this.off = pos - this.pos;
                return this;
            }
            let next = this.children[--this.i];
            this.pos -= next.length + next.breakAfter;
        }
    }
}

let [nav, doc] = typeof navigator != "undefined"
    ? [navigator, document]
    : [{ userAgent: "", vendor: "", platform: "" }, { documentElement: { style: {} } }];
const ie_edge = /*@__PURE__*//Edge\/(\d+)/.exec(nav.userAgent);
const ie_upto10 = /*@__PURE__*//MSIE \d/.test(nav.userAgent);
const ie_11up = /*@__PURE__*//Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
const ie = !!(ie_upto10 || ie_11up || ie_edge);
const gecko = !ie && /*@__PURE__*//gecko\/(\d+)/i.test(nav.userAgent);
const chrome = !ie && /*@__PURE__*//Chrome\/(\d+)/.exec(nav.userAgent);
const webkit = "webkitFontSmoothing" in doc.documentElement.style;
const safari = !ie && /*@__PURE__*//Apple Computer/.test(nav.vendor);
var browser = {
    mac: /*@__PURE__*//Mac/.test(nav.platform),
    ie,
    ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
    gecko,
    gecko_version: gecko ? +(/*@__PURE__*//Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
    chrome: !!chrome,
    chrome_version: chrome ? +chrome[1] : 0,
    ios: safari && (/*@__PURE__*//Mobile\/\w+/.test(nav.userAgent) || nav.maxTouchPoints > 2),
    android: /*@__PURE__*//Android\b/.test(nav.userAgent),
    webkit,
    safari,
    webkit_version: webkit ? +(/*@__PURE__*//\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
    tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};

const none$2 = [];
class InlineView extends ContentView {
    /**
    Return true when this view is equivalent to `other` and can take
    on its role.
    */
    become(_other) { return false; }
    // When this is a zero-length view with a side, this should return a
    // negative number to indicate it is before its position, or a
    // positive number when after its position.
    getSide() { return 0; }
}
InlineView.prototype.children = none$2;
const MaxJoinLen = 256;
class TextView extends InlineView {
    constructor(text) {
        super();
        this.text = text;
    }
    get length() { return this.text.length; }
    createDOM(textDOM) {
        this.setDOM(textDOM || document.createTextNode(this.text));
    }
    sync(track) {
        if (!this.dom)
            this.createDOM();
        if (this.dom.nodeValue != this.text) {
            if (track && track.node == this.dom)
                track.written = true;
            this.dom.nodeValue = this.text;
        }
    }
    reuseDOM(dom) {
        if (dom.nodeType != 3)
            return false;
        this.createDOM(dom);
        return true;
    }
    merge(from, to, source) {
        if (source && (!(source instanceof TextView) || this.length - (to - from) + source.length > MaxJoinLen))
            return false;
        this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
        this.markDirty();
        return true;
    }
    slice(from) {
        return new TextView(this.text.slice(from));
    }
    localPosFromDOM(node, offset) {
        return node == this.dom ? offset : offset ? this.text.length : 0;
    }
    domAtPos(pos) { return new DOMPos(this.dom, pos); }
    domBoundsAround(_from, _to, offset) {
        return { from: offset, to: offset + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
    }
    coordsAt(pos, side) {
        return textCoords(this.dom, pos, side);
    }
}
class MarkView extends InlineView {
    constructor(mark, children = [], length = 0) {
        super();
        this.mark = mark;
        this.children = children;
        this.length = length;
        for (let ch of children)
            ch.setParent(this);
    }
    createDOM() {
        let dom = document.createElement(this.mark.tagName);
        if (this.mark.class)
            dom.className = this.mark.class;
        if (this.mark.attrs)
            for (let name in this.mark.attrs)
                dom.setAttribute(name, this.mark.attrs[name]);
        this.setDOM(dom);
    }
    sync(track) {
        if (!this.dom)
            this.createDOM();
        super.sync(track);
    }
    merge(from, to, source, openStart, openEnd) {
        if (source && (!(source instanceof MarkView && source.mark.eq(this.mark)) ||
            (from && openStart <= 0) || (to < this.length && openEnd <= 0)))
            return false;
        mergeInlineChildren(this, from, to, source ? source.children : none$2, openStart - 1, openEnd - 1);
        this.markDirty();
        return true;
    }
    slice(from) {
        return new MarkView(this.mark, sliceInlineChildren(this.children, from), this.length - from);
    }
    domAtPos(pos) {
        return inlineDOMAtPos(this.dom, this.children, pos);
    }
    coordsAt(pos, side) {
        return coordsInChildren(this, pos, side);
    }
}
function textCoords(text, pos, side) {
    let length = text.nodeValue.length;
    if (pos > length)
        pos = length;
    let from = pos, to = pos, flatten = 0;
    if (pos == 0 && side < 0 || pos == length && side >= 0) {
        if (!(browser.chrome || browser.gecko)) { // These browsers reliably return valid rectangles for empty ranges
            if (pos) {
                from--;
                flatten = 1;
            } // FIXME this is wrong in RTL text
            else {
                to++;
                flatten = -1;
            }
        }
    }
    else {
        if (side < 0)
            from--;
        else
            to++;
    }
    let rects = textRange(text, from, to).getClientRects();
    if (!rects.length)
        return Rect0;
    let rect = rects[(flatten ? flatten < 0 : side >= 0) ? 0 : rects.length - 1];
    if (browser.safari && !flatten && rect.width == 0)
        rect = Array.prototype.find.call(rects, r => r.width) || rect;
    return flatten ? flattenRect(rect, flatten < 0) : rect;
}
// Also used for collapsed ranges that don't have a placeholder widget!
class WidgetView extends InlineView {
    constructor(widget, length, side) {
        super();
        this.widget = widget;
        this.length = length;
        this.side = side;
    }
    static create(widget, length, side) {
        return new (widget.customView || WidgetView)(widget, length, side);
    }
    slice(from) { return WidgetView.create(this.widget, this.length - from, this.side); }
    sync() {
        if (!this.dom || !this.widget.updateDOM(this.dom)) {
            this.setDOM(this.widget.toDOM(this.editorView));
            this.dom.contentEditable = "false";
        }
    }
    getSide() { return this.side; }
    merge(from, to, source, openStart, openEnd) {
        if (source && (!(source instanceof WidgetView) || !this.widget.compare(source.widget) ||
            from > 0 && openStart <= 0 || to < this.length && openEnd <= 0))
            return false;
        this.length = from + (source ? source.length : 0) + (this.length - to);
        return true;
    }
    become(other) {
        if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
            if (this.widget.constructor == other.widget.constructor) {
                if (!this.widget.eq(other.widget))
                    this.markDirty(true);
                this.widget = other.widget;
                return true;
            }
        }
        return false;
    }
    ignoreMutation() { return true; }
    ignoreEvent(event) { return this.widget.ignoreEvent(event); }
    get overrideDOMText() {
        if (this.length == 0)
            return _codemirror_text__WEBPACK_IMPORTED_MODULE_3__.Text.empty;
        let top = this;
        while (top.parent)
            top = top.parent;
        let view = top.editorView, text = view && view.state.doc, start = this.posAtStart;
        return text ? text.slice(start, start + this.length) : _codemirror_text__WEBPACK_IMPORTED_MODULE_3__.Text.empty;
    }
    domAtPos(pos) {
        return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
    domBoundsAround() { return null; }
    coordsAt(pos, side) {
        let rects = this.dom.getClientRects(), rect = null;
        if (!rects.length)
            return Rect0;
        for (let i = pos > 0 ? rects.length - 1 : 0;; i += (pos > 0 ? -1 : 1)) {
            rect = rects[i];
            if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom)
                break;
        }
        return (pos == 0 && side > 0 || pos == this.length && side <= 0) ? rect : flattenRect(rect, pos == 0);
    }
}
class CompositionView extends WidgetView {
    domAtPos(pos) { return new DOMPos(this.widget.text, pos); }
    sync() { if (!this.dom)
        this.setDOM(this.widget.toDOM()); }
    localPosFromDOM(node, offset) {
        return !offset ? 0 : node.nodeType == 3 ? Math.min(offset, this.length) : this.length;
    }
    ignoreMutation() { return false; }
    get overrideDOMText() { return null; }
    coordsAt(pos, side) { return textCoords(this.widget.text, pos, side); }
}
function mergeInlineChildren(parent, from, to, elts, openStart, openEnd) {
    let cur = parent.childCursor();
    let { i: toI, off: toOff } = cur.findPos(to, 1);
    let { i: fromI, off: fromOff } = cur.findPos(from, -1);
    let dLen = from - to;
    for (let view of elts)
        dLen += view.length;
    parent.length += dLen;
    let { children } = parent;
    // Both from and to point into the same text view
    if (fromI == toI && fromOff) {
        let start = children[fromI];
        // Maybe just update that view and be done
        if (elts.length == 1 && start.merge(fromOff, toOff, elts[0], openStart, openEnd))
            return;
        if (elts.length == 0) {
            start.merge(fromOff, toOff, null, openStart, openEnd);
            return;
        }
        // Otherwise split it, so that we don't have to worry about aliasing front/end afterwards
        let after = start.slice(toOff);
        if (after.merge(0, 0, elts[elts.length - 1], 0, openEnd))
            elts[elts.length - 1] = after;
        else
            elts.push(after);
        toI++;
        openEnd = toOff = 0;
    }
    // Make sure start and end positions fall on node boundaries
    // (fromOff/toOff are no longer used after this), and that if the
    // start or end of the elts can be merged with adjacent nodes,
    // this is done
    if (toOff) {
        let end = children[toI];
        if (elts.length && end.merge(0, toOff, elts[elts.length - 1], 0, openEnd)) {
            elts.pop();
            openEnd = elts.length ? 0 : openStart;
        }
        else {
            end.merge(0, toOff, null, 0, 0);
        }
    }
    else if (toI < children.length && elts.length &&
        children[toI].merge(0, 0, elts[elts.length - 1], 0, openEnd)) {
        elts.pop();
        openEnd = elts.length ? 0 : openStart;
    }
    if (fromOff) {
        let start = children[fromI];
        if (elts.length && start.merge(fromOff, start.length, elts[0], openStart, 0)) {
            elts.shift();
            openStart = elts.length ? 0 : openEnd;
        }
        else {
            start.merge(fromOff, start.length, null, 0, 0);
        }
        fromI++;
    }
    else if (fromI && elts.length) {
        let end = children[fromI - 1];
        if (end.merge(end.length, end.length, elts[0], openStart, 0)) {
            elts.shift();
            openStart = elts.length ? 0 : openEnd;
        }
    }
    // Then try to merge any mergeable nodes at the start and end of
    // the changed range
    while (fromI < toI && elts.length && children[toI - 1].become(elts[elts.length - 1])) {
        elts.pop();
        toI--;
        openEnd = elts.length ? 0 : openStart;
    }
    while (fromI < toI && elts.length && children[fromI].become(elts[0])) {
        elts.shift();
        fromI++;
        openStart = elts.length ? 0 : openEnd;
    }
    if (!elts.length && fromI && toI < children.length && openStart && openEnd &&
        children[toI].merge(0, 0, children[fromI - 1], openStart, openEnd))
        fromI--;
    // And if anything remains, splice the child array to insert the new elts
    if (elts.length || fromI != toI)
        parent.replaceChildren(fromI, toI, elts);
}
function sliceInlineChildren(children, from) {
    let result = [], off = 0;
    for (let elt of children) {
        let end = off + elt.length;
        if (end > from)
            result.push(off < from ? elt.slice(from - off) : elt);
        off = end;
    }
    return result;
}
function inlineDOMAtPos(dom, children, pos) {
    let i = 0;
    for (let off = 0; i < children.length; i++) {
        let child = children[i], end = off + child.length;
        if (end == off && child.getSide() <= 0)
            continue;
        if (pos > off && pos < end && child.dom.parentNode == dom)
            return child.domAtPos(pos - off);
        if (pos <= off)
            break;
        off = end;
    }
    for (; i > 0; i--) {
        let before = children[i - 1].dom;
        if (before.parentNode == dom)
            return DOMPos.after(before);
    }
    return new DOMPos(dom, 0);
}
// Assumes `view`, if a mark view, has precisely 1 child.
function joinInlineInto(parent, view, open) {
    let last, { children } = parent;
    if (open > 0 && view instanceof MarkView && children.length &&
        (last = children[children.length - 1]) instanceof MarkView && last.mark.eq(view.mark)) {
        joinInlineInto(last, view.children[0], open - 1);
    }
    else {
        children.push(view);
        view.setParent(parent);
    }
    parent.length += view.length;
}
function coordsInChildren(view, pos, side) {
    for (let off = 0, i = 0; i < view.children.length; i++) {
        let child = view.children[i], end = off + child.length;
        if (end == off && child.getSide() <= 0)
            continue;
        if (side <= 0 || end == view.length ? end >= pos : end > pos)
            return child.coordsAt(pos - off, side);
        off = end;
    }
    let last = view.dom.lastChild;
    if (!last)
        return view.dom.getBoundingClientRect();
    let rects = clientRectsFor(last);
    return rects[rects.length - 1];
}

function combineAttrs(source, target) {
    for (let name in source) {
        if (name == "class" && target.class)
            target.class += " " + source.class;
        else if (name == "style" && target.style)
            target.style += ";" + source.style;
        else
            target[name] = source[name];
    }
    return target;
}
function attrsEq(a, b) {
    if (a == b)
        return true;
    if (!a || !b)
        return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
        return false;
    for (let key of keysA) {
        if (keysB.indexOf(key) == -1 || a[key] !== b[key])
            return false;
    }
    return true;
}
function updateAttrs(dom, prev, attrs) {
    if (prev)
        for (let name in prev)
            if (!(attrs && name in attrs))
                dom.removeAttribute(name);
    if (attrs)
        for (let name in attrs)
            if (!(prev && prev[name] == attrs[name]))
                dom.setAttribute(name, attrs[name]);
}

/**
Widgets added to the content are described by subclasses of this
class. Using a description object like that makes it possible to
delay creating of the DOM structure for a widget until it is
needed, and to avoid redrawing widgets even when the decorations
that define them are recreated.
*/
class WidgetType {
    /**
    Compare this instance to another instance of the same type.
    (TypeScript can't express this, but only instances of the same
    specific class will be passed to this method.) This is used to
    avoid redrawing widgets when they are replaced by a new
    decoration of the same type. The default implementation just
    returns `false`, which will cause new instances of the widget to
    always be redrawn.
    */
    eq(_widget) { return false; }
    /**
    Update a DOM element created by a widget of the same type (but
    different, non-`eq` content) to reflect this widget. May return
    true to indicate that it could update, false to indicate it
    couldn't (in which case the widget will be redrawn). The default
    implementation just returns false.
    */
    updateDOM(_dom) { return false; }
    /**
    @internal
    */
    compare(other) {
        return this == other || this.constructor == other.constructor && this.eq(other);
    }
    /**
    The estimated height this widget will have, to be used when
    estimating the height of content that hasn't been drawn. May
    return -1 to indicate you don't know. The default implementation
    returns -1.
    */
    get estimatedHeight() { return -1; }
    /**
    Can be used to configure which kinds of events inside the widget
    should be ignored by the editor. The default is to ignore all
    events.
    */
    ignoreEvent(_event) { return true; }
    /**
    / @internal
    */
    get customView() { return null; }
}
/**
The different types of blocks that can occur in an editor view.
*/
var BlockType = /*@__PURE__*/(function (BlockType) {
    /**
    A line of text.
    */
    BlockType[BlockType["Text"] = 0] = "Text";
    /**
    A block widget associated with the position after it.
    */
    BlockType[BlockType["WidgetBefore"] = 1] = "WidgetBefore";
    /**
    A block widget associated with the position before it.
    */
    BlockType[BlockType["WidgetAfter"] = 2] = "WidgetAfter";
    /**
    A block widget [replacing](https://codemirror.net/6/docs/ref/#view.Decoration^replace) a range of content.
    */
    BlockType[BlockType["WidgetRange"] = 3] = "WidgetRange";
return BlockType})(BlockType || (BlockType = {}));
/**
A decoration provides information on how to draw or style a piece
of content. You'll usually use it wrapped in a
[`Range`](https://codemirror.net/6/docs/ref/#rangeset.Range), which adds a start and end position.
*/
class Decoration extends _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeValue {
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    startSide, 
    /**
    @internal
    */
    endSide, 
    /**
    @internal
    */
    widget, 
    /**
    The config object used to create this decoration. You can
    include additional properties in there to store metadata about
    your decoration.
    */
    spec) {
        super();
        this.startSide = startSide;
        this.endSide = endSide;
        this.widget = widget;
        this.spec = spec;
    }
    /**
    @internal
    */
    get heightRelevant() { return false; }
    /**
    Create a mark decoration, which influences the styling of the
    content in its range. Nested mark decorations will cause nested
    DOM elements to be created. Nesting order is determined by
    precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations) or
    (below the facet-provided decorations) [view
    plugin](https://codemirror.net/6/docs/ref/#view.PluginSpec.decorations). Such elements are split
    on line boundaries and on the boundaries of higher-precedence
    decorations.
    */
    static mark(spec) {
        return new MarkDecoration(spec);
    }
    /**
    Create a widget decoration, which adds an element at the given
    position.
    */
    static widget(spec) {
        let side = spec.side || 0;
        if (spec.block)
            side += (200000000 /* BigBlock */ + 1) * (side > 0 ? 1 : -1);
        return new PointDecoration(spec, side, side, !!spec.block, spec.widget || null, false);
    }
    /**
    Create a replace decoration which replaces the given range with
    a widget, or simply hides it.
    */
    static replace(spec) {
        let block = !!spec.block;
        let { start, end } = getInclusive(spec);
        let startSide = block ? -200000000 /* BigBlock */ * (start ? 2 : 1) : 100000000 /* BigInline */ * (start ? -1 : 1);
        let endSide = block ? 200000000 /* BigBlock */ * (end ? 2 : 1) : 100000000 /* BigInline */ * (end ? 1 : -1);
        return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
    }
    /**
    Create a line decoration, which can add DOM attributes to the
    line starting at the given position.
    */
    static line(spec) {
        return new LineDecoration(spec);
    }
    /**
    Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
    decorated range or ranges. If the ranges aren't already sorted,
    pass `true` for `sort` to make the library sort them for you.
    */
    static set(of, sort = false) {
        return _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.of(of, sort);
    }
    /**
    @internal
    */
    hasHeight() { return this.widget ? this.widget.estimatedHeight > -1 : false; }
}
/**
The empty set of decorations.
*/
Decoration.none = _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.empty;
class MarkDecoration extends Decoration {
    constructor(spec) {
        let { start, end } = getInclusive(spec);
        super(100000000 /* BigInline */ * (start ? -1 : 1), 100000000 /* BigInline */ * (end ? 1 : -1), null, spec);
        this.tagName = spec.tagName || "span";
        this.class = spec.class || "";
        this.attrs = spec.attributes || null;
    }
    eq(other) {
        return this == other ||
            other instanceof MarkDecoration &&
                this.tagName == other.tagName &&
                this.class == other.class &&
                attrsEq(this.attrs, other.attrs);
    }
    range(from, to = from) {
        if (from >= to)
            throw new RangeError("Mark decorations may not be empty");
        return super.range(from, to);
    }
}
MarkDecoration.prototype.point = false;
class LineDecoration extends Decoration {
    constructor(spec) {
        super(-100000000 /* BigInline */, -100000000 /* BigInline */, null, spec);
    }
    eq(other) {
        return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
    }
    range(from, to = from) {
        if (to != from)
            throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(from, to);
    }
}
LineDecoration.prototype.mapMode = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.MapMode.TrackBefore;
LineDecoration.prototype.point = true;
class PointDecoration extends Decoration {
    constructor(spec, startSide, endSide, block, widget, isReplace) {
        super(startSide, endSide, widget, spec);
        this.block = block;
        this.isReplace = isReplace;
        this.mapMode = !block ? _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.MapMode.TrackDel : startSide < 0 ? _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.MapMode.TrackBefore : _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.MapMode.TrackAfter;
    }
    // Only relevant when this.block == true
    get type() {
        return this.startSide < this.endSide ? BlockType.WidgetRange
            : this.startSide < 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
    }
    get heightRelevant() { return this.block || !!this.widget && this.widget.estimatedHeight >= 5; }
    eq(other) {
        return other instanceof PointDecoration &&
            widgetsEq(this.widget, other.widget) &&
            this.block == other.block &&
            this.startSide == other.startSide && this.endSide == other.endSide;
    }
    range(from, to = from) {
        if (this.isReplace && (from > to || (from == to && this.startSide > 0 && this.endSide < 0)))
            throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && to != from)
            throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(from, to);
    }
}
PointDecoration.prototype.point = true;
function getInclusive(spec) {
    let { inclusiveStart: start, inclusiveEnd: end } = spec;
    if (start == null)
        start = spec.inclusive;
    if (end == null)
        end = spec.inclusive;
    return { start: start || false, end: end || false };
}
function widgetsEq(a, b) {
    return a == b || !!(a && b && a.compare(b));
}
function addRange(from, to, ranges, margin = 0) {
    let last = ranges.length - 1;
    if (last >= 0 && ranges[last] + margin > from)
        ranges[last] = Math.max(ranges[last], to);
    else
        ranges.push(from, to);
}

class LineView extends ContentView {
    constructor() {
        super(...arguments);
        this.children = [];
        this.length = 0;
        this.prevAttrs = undefined;
        this.attrs = null;
        this.breakAfter = 0;
    }
    // Consumes source
    merge(from, to, source, takeDeco, openStart, openEnd) {
        if (source) {
            if (!(source instanceof LineView))
                return false;
            if (!this.dom)
                source.transferDOM(this); // Reuse source.dom when appropriate
        }
        if (takeDeco)
            this.setDeco(source ? source.attrs : null);
        mergeInlineChildren(this, from, to, source ? source.children : none$1, openStart, openEnd);
        return true;
    }
    split(at) {
        let end = new LineView;
        end.breakAfter = this.breakAfter;
        if (this.length == 0)
            return end;
        let { i, off } = this.childPos(at);
        if (off) {
            end.append(this.children[i].slice(off), 0);
            this.children[i].merge(off, this.children[i].length, null, 0, 0);
            i++;
        }
        for (let j = i; j < this.children.length; j++)
            end.append(this.children[j], 0);
        while (i > 0 && this.children[i - 1].length == 0) {
            this.children[i - 1].parent = null;
            i--;
        }
        this.children.length = i;
        this.markDirty();
        this.length = at;
        return end;
    }
    transferDOM(other) {
        if (!this.dom)
            return;
        other.setDOM(this.dom);
        other.prevAttrs = this.prevAttrs === undefined ? this.attrs : this.prevAttrs;
        this.prevAttrs = undefined;
        this.dom = null;
    }
    setDeco(attrs) {
        if (!attrsEq(this.attrs, attrs)) {
            if (this.dom) {
                this.prevAttrs = this.attrs;
                this.markDirty();
            }
            this.attrs = attrs;
        }
    }
    // Only called when building a line view in ContentBuilder
    append(child, openStart) {
        joinInlineInto(this, child, openStart);
    }
    // Only called when building a line view in ContentBuilder
    addLineDeco(deco) {
        let attrs = deco.spec.attributes;
        if (attrs)
            this.attrs = combineAttrs(attrs, this.attrs || {});
    }
    domAtPos(pos) {
        return inlineDOMAtPos(this.dom, this.children, pos);
    }
    sync(track) {
        if (!this.dom) {
            this.setDOM(document.createElement("div"));
            this.dom.className = "cm-line";
            this.prevAttrs = this.attrs ? null : undefined;
        }
        if (this.prevAttrs !== undefined) {
            updateAttrs(this.dom, this.prevAttrs, this.attrs);
            this.dom.classList.add("cm-line");
            this.prevAttrs = undefined;
        }
        super.sync(track);
        let last = this.dom.lastChild;
        if (!last ||
            last.nodeName != "BR" && ContentView.get(last) instanceof WidgetView &&
                (!browser.ios || !this.children.some(ch => ch instanceof TextView))) {
            let hack = document.createElement("BR");
            hack.cmIgnore = true;
            this.dom.appendChild(hack);
        }
    }
    measureTextSize() {
        if (this.children.length == 0 || this.length > 20)
            return null;
        let totalWidth = 0;
        for (let child of this.children) {
            if (!(child instanceof TextView))
                return null;
            let rects = clientRectsFor(child.dom);
            if (rects.length != 1)
                return null;
            totalWidth += rects[0].width;
        }
        return { lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: totalWidth / this.length };
    }
    coordsAt(pos, side) {
        return coordsInChildren(this, pos, side);
    }
    match(_other) { return false; }
    get type() { return BlockType.Text; }
    static find(docView, pos) {
        for (let i = 0, off = 0;; i++) {
            let block = docView.children[i], end = off + block.length;
            if (end >= pos) {
                if (block instanceof LineView)
                    return block;
                if (block.length)
                    return null;
            }
            off = end + block.breakAfter;
        }
    }
}
const none$1 = [];
class BlockWidgetView extends ContentView {
    constructor(widget, length, type) {
        super();
        this.widget = widget;
        this.length = length;
        this.type = type;
        this.breakAfter = 0;
    }
    merge(from, to, source, _takeDeco, openStart, openEnd) {
        if (source && (!(source instanceof BlockWidgetView) || !this.widget.compare(source.widget) ||
            from > 0 && openStart <= 0 || to < this.length && openEnd <= 0))
            return false;
        this.length = from + (source ? source.length : 0) + (this.length - to);
        return true;
    }
    domAtPos(pos) {
        return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
    split(at) {
        let len = this.length - at;
        this.length = at;
        return new BlockWidgetView(this.widget, len, this.type);
    }
    get children() { return none$1; }
    sync() {
        if (!this.dom || !this.widget.updateDOM(this.dom)) {
            this.setDOM(this.widget.toDOM(this.editorView));
            this.dom.contentEditable = "false";
        }
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : _codemirror_text__WEBPACK_IMPORTED_MODULE_3__.Text.empty;
    }
    domBoundsAround() { return null; }
    match(other) {
        if (other instanceof BlockWidgetView && other.type == this.type &&
            other.widget.constructor == this.widget.constructor) {
            if (!other.widget.eq(this.widget))
                this.markDirty(true);
            this.widget = other.widget;
            this.length = other.length;
            this.breakAfter = other.breakAfter;
            return true;
        }
        return false;
    }
    ignoreMutation() { return true; }
    ignoreEvent(event) { return this.widget.ignoreEvent(event); }
}

class ContentBuilder {
    constructor(doc, pos, end) {
        this.doc = doc;
        this.pos = pos;
        this.end = end;
        this.content = [];
        this.curLine = null;
        this.breakAtStart = 0;
        this.openStart = -1;
        this.openEnd = -1;
        this.text = "";
        this.textOff = 0;
        this.cursor = doc.iter();
        this.skip = pos;
    }
    posCovered() {
        if (this.content.length == 0)
            return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        let last = this.content[this.content.length - 1];
        return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);
    }
    getLine() {
        if (!this.curLine)
            this.content.push(this.curLine = new LineView);
        return this.curLine;
    }
    addWidget(view) {
        this.curLine = null;
        this.content.push(view);
    }
    finish() {
        if (!this.posCovered())
            this.getLine();
    }
    wrapMarks(view, active) {
        for (let mark of active)
            view = new MarkView(mark, [view], view.length);
        return view;
    }
    buildText(length, active, openStart) {
        while (length > 0) {
            if (this.textOff == this.text.length) {
                let { value, lineBreak, done } = this.cursor.next(this.skip);
                this.skip = 0;
                if (done)
                    throw new Error("Ran out of text content when drawing inline views");
                if (lineBreak) {
                    if (!this.posCovered())
                        this.getLine();
                    if (this.content.length)
                        this.content[this.content.length - 1].breakAfter = 1;
                    else
                        this.breakAtStart = 1;
                    this.curLine = null;
                    length--;
                    continue;
                }
                else {
                    this.text = value;
                    this.textOff = 0;
                }
            }
            let take = Math.min(this.text.length - this.textOff, length, 512 /* Chunk */);
            this.getLine().append(this.wrapMarks(new TextView(this.text.slice(this.textOff, this.textOff + take)), active), openStart);
            this.textOff += take;
            length -= take;
            openStart = 0;
        }
    }
    span(from, to, active, openStart) {
        this.buildText(to - from, active, openStart);
        this.pos = to;
        if (this.openStart < 0)
            this.openStart = openStart;
    }
    point(from, to, deco, active, openStart) {
        let len = to - from;
        if (deco instanceof PointDecoration) {
            if (deco.block) {
                let { type } = deco;
                if (type == BlockType.WidgetAfter && !this.posCovered())
                    this.getLine();
                this.addWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type));
            }
            else {
                let widget = this.wrapMarks(WidgetView.create(deco.widget || new NullWidget("span"), len, deco.startSide), active);
                this.getLine().append(widget, openStart);
            }
        }
        else if (this.doc.lineAt(this.pos).from == this.pos) { // Line decoration
            this.getLine().addLineDeco(deco);
        }
        if (len) {
            // Advance the iterator past the replaced content
            if (this.textOff + len <= this.text.length) {
                this.textOff += len;
            }
            else {
                this.skip += len - (this.text.length - this.textOff);
                this.text = "";
                this.textOff = 0;
            }
            this.pos = to;
        }
        if (this.openStart < 0)
            this.openStart = openStart;
    }
    static build(text, from, to, decorations) {
        let builder = new ContentBuilder(text, from, to);
        builder.openEnd = _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.spans(decorations, from, to, builder);
        if (builder.openStart < 0)
            builder.openStart = builder.openEnd;
        builder.finish();
        return builder;
    }
}
class NullWidget extends WidgetType {
    constructor(tag) {
        super();
        this.tag = tag;
    }
    eq(other) { return other.tag == this.tag; }
    toDOM() { return document.createElement(this.tag); }
    updateDOM(elt) { return elt.nodeName.toLowerCase() == this.tag; }
}

const none = [];
const clickAddsSelectionRange = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
const dragMovesSelection$1 = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
const mouseSelectionStyle = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
const exceptionSink = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
const updateListener = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
const inputHandler = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
/**
Log or report an unhandled exception in client code. Should
probably only be used by extension code that allows client code to
provide functions, and calls those functions in a context where an
exception can't be propagated to calling code in a reasonable way
(for example when in an event handler).

Either calls a handler registered with
[`EditorView.exceptionSink`](https://codemirror.net/6/docs/ref/#view.EditorView^exceptionSink),
`window.onerror`, if defined, or `console.error` (in which case
it'll pass `context`, when given, as first argument).
*/
function logException(state, exception, context) {
    let handler = state.facet(exceptionSink);
    if (handler.length)
        handler[0](exception);
    else if (window.onerror)
        window.onerror(String(exception), context, undefined, undefined, exception);
    else if (context)
        console.error(context + ":", exception);
    else
        console.error(exception);
}
const editable = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({ combine: values => values.length ? values[0] : true });
/**
Used to [declare](https://codemirror.net/6/docs/ref/#view.PluginSpec.provide) which
[fields](https://codemirror.net/6/docs/ref/#view.PluginValue) a [view plugin](https://codemirror.net/6/docs/ref/#view.ViewPlugin)
provides.
*/
class PluginFieldProvider {
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    field, 
    /**
    @internal
    */
    get) {
        this.field = field;
        this.get = get;
    }
}
/**
Plugin fields are a mechanism for allowing plugins to provide
values that can be retrieved through the
[`pluginField`](https://codemirror.net/6/docs/ref/#view.EditorView.pluginField) view method.
*/
class PluginField {
    /**
    Create a [provider](https://codemirror.net/6/docs/ref/#view.PluginFieldProvider) for this field,
    to use with a plugin's [provide](https://codemirror.net/6/docs/ref/#view.PluginSpec.provide)
    option.
    */
    from(get) {
        return new PluginFieldProvider(this, get);
    }
    /**
    Define a new plugin field.
    */
    static define() { return new PluginField(); }
}
/**
This field can be used by plugins to provide
[decorations](https://codemirror.net/6/docs/ref/#view.Decoration).

**Note**: For reasons of data flow (plugins are only updated
after the viewport is computed), decorations produced by plugins
are _not_ taken into account when predicting the vertical layout
structure of the editor. Thus, things like large widgets or big
replacements (i.e. code folding) should be provided through the
state-level [`decorations` facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations),
not this plugin field. Specifically, replacing decorations that
cross line boundaries will break if provided through a plugin.
*/
PluginField.decorations = /*@__PURE__*/PluginField.define();
/**
Used to provide ranges that should be treated as atoms as far as
cursor motion is concerned. This causes methods like
[`moveByChar`](https://codemirror.net/6/docs/ref/#view.EditorView.moveByChar) and
[`moveVertically`](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) (and the
commands built on top of them) to skip across such regions when
a selection endpoint would enter them. This does _not_ prevent
direct programmatic [selection
updates](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) from moving into such
regions.
*/
PluginField.atomicRanges = /*@__PURE__*/PluginField.define();
/**
Plugins can provide additional scroll margins (space around the
sides of the scrolling element that should be considered
invisible) through this field. This can be useful when the
plugin introduces elements that cover part of that element (for
example a horizontally fixed gutter).
*/
PluginField.scrollMargins = /*@__PURE__*/PluginField.define();
let nextPluginID = 0;
const viewPlugin = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
/**
View plugins associate stateful values with a view. They can
influence the way the content is drawn, and are notified of things
that happen in the view.
*/
class ViewPlugin {
    constructor(
    /**
    @internal
    */
    id, 
    /**
    @internal
    */
    create, 
    /**
    @internal
    */
    fields) {
        this.id = id;
        this.create = create;
        this.fields = fields;
        this.extension = viewPlugin.of(this);
    }
    /**
    Define a plugin from a constructor function that creates the
    plugin's value, given an editor view.
    */
    static define(create, spec) {
        let { eventHandlers, provide, decorations } = spec || {};
        let fields = [];
        if (provide)
            for (let provider of Array.isArray(provide) ? provide : [provide])
                fields.push(provider);
        if (eventHandlers)
            fields.push(domEventHandlers.from((value) => ({ plugin: value, handlers: eventHandlers })));
        if (decorations)
            fields.push(PluginField.decorations.from(decorations));
        return new ViewPlugin(nextPluginID++, create, fields);
    }
    /**
    Create a plugin for a class whose constructor takes a single
    editor view as argument.
    */
    static fromClass(cls, spec) {
        return ViewPlugin.define(view => new cls(view), spec);
    }
}
const domEventHandlers = /*@__PURE__*/PluginField.define();
class PluginInstance {
    constructor(spec) {
        this.spec = spec;
        // When starting an update, all plugins have this field set to the
        // update object, indicating they need to be updated. When finished
        // updating, it is set to `false`. Retrieving a plugin that needs to
        // be updated with `view.plugin` forces an eager update.
        this.mustUpdate = null;
        // This is null when the plugin is initially created, but
        // initialized on the first update.
        this.value = null;
    }
    takeField(type, target) {
        for (let { field, get } of this.spec.fields)
            if (field == type)
                target.push(get(this.value));
    }
    update(view) {
        if (!this.value) {
            try {
                this.value = this.spec.create(view);
            }
            catch (e) {
                logException(view.state, e, "CodeMirror plugin crashed");
                return PluginInstance.dummy;
            }
        }
        else if (this.mustUpdate) {
            let update = this.mustUpdate;
            this.mustUpdate = null;
            if (!this.value.update)
                return this;
            try {
                this.value.update(update);
            }
            catch (e) {
                logException(update.state, e, "CodeMirror plugin crashed");
                if (this.value.destroy)
                    try {
                        this.value.destroy();
                    }
                    catch (_) { }
                return PluginInstance.dummy;
            }
        }
        return this;
    }
    destroy(view) {
        var _a;
        if ((_a = this.value) === null || _a === void 0 ? void 0 : _a.destroy) {
            try {
                this.value.destroy();
            }
            catch (e) {
                logException(view.state, e, "CodeMirror plugin crashed");
            }
        }
    }
}
PluginInstance.dummy = /*@__PURE__*/new PluginInstance(/*@__PURE__*/ViewPlugin.define(() => ({})));
const editorAttributes = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({
    combine: values => values.reduce((a, b) => combineAttrs(b, a), {})
});
const contentAttributes = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({
    combine: values => values.reduce((a, b) => combineAttrs(b, a), {})
});
// Provide decorations
const decorations = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
const styleModule = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define();
class ChangedRange {
    constructor(fromA, toA, fromB, toB) {
        this.fromA = fromA;
        this.toA = toA;
        this.fromB = fromB;
        this.toB = toB;
    }
    join(other) {
        return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
    }
    addToSet(set) {
        let i = set.length, me = this;
        for (; i > 0; i--) {
            let range = set[i - 1];
            if (range.fromA > me.toA)
                continue;
            if (range.toA < me.fromA)
                break;
            me = me.join(range);
            set.splice(i - 1, 1);
        }
        set.splice(i, 0, me);
        return set;
    }
    static extendWithRanges(diff, ranges) {
        if (ranges.length == 0)
            return diff;
        let result = [];
        for (let dI = 0, rI = 0, posA = 0, posB = 0;; dI++) {
            let next = dI == diff.length ? null : diff[dI], off = posA - posB;
            let end = next ? next.fromB : 1e9;
            while (rI < ranges.length && ranges[rI] < end) {
                let from = ranges[rI], to = ranges[rI + 1];
                let fromB = Math.max(posB, from), toB = Math.min(end, to);
                if (fromB <= toB)
                    new ChangedRange(fromB + off, toB + off, fromB, toB).addToSet(result);
                if (to > end)
                    break;
                else
                    rI += 2;
            }
            if (!next)
                return result;
            new ChangedRange(next.fromA, next.toA, next.fromB, next.toB).addToSet(result);
            posA = next.toA;
            posB = next.toB;
        }
    }
}
/**
View [plugins](https://codemirror.net/6/docs/ref/#view.ViewPlugin) are given instances of this
class, which describe what happened, whenever the view is updated.
*/
class ViewUpdate {
    /**
    @internal
    */
    constructor(
    /**
    The editor view that the update is associated with.
    */
    view, 
    /**
    The new editor state.
    */
    state, 
    /**
    The transactions involved in the update. May be empty.
    */
    transactions = none) {
        this.view = view;
        this.state = state;
        this.transactions = transactions;
        /**
        @internal
        */
        this.flags = 0;
        this.startState = view.state;
        this.changes = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.ChangeSet.empty(this.startState.doc.length);
        for (let tr of transactions)
            this.changes = this.changes.compose(tr.changes);
        let changedRanges = [];
        this.changes.iterChangedRanges((fromA, toA, fromB, toB) => changedRanges.push(new ChangedRange(fromA, toA, fromB, toB)));
        this.changedRanges = changedRanges;
        let focus = view.hasFocus;
        if (focus != view.inputState.notifiedFocused) {
            view.inputState.notifiedFocused = focus;
            this.flags |= 1 /* Focus */;
        }
        if (this.docChanged)
            this.flags |= 2 /* Height */;
    }
    /**
    Tells you whether the viewport changed in this update.
    */
    get viewportChanged() {
        return (this.flags & 4 /* Viewport */) > 0;
    }
    /**
    Indicates whether the line height in the editor changed in this update.
    */
    get heightChanged() {
        return (this.flags & 2 /* Height */) > 0;
    }
    /**
    Returns true when the document changed or the size of the editor
    or the lines or characters within it has changed.
    */
    get geometryChanged() {
        return this.docChanged || (this.flags & (16 /* Geometry */ | 2 /* Height */)) > 0;
    }
    /**
    True when this update indicates a focus change.
    */
    get focusChanged() {
        return (this.flags & 1 /* Focus */) > 0;
    }
    /**
    Whether the document changed in this update.
    */
    get docChanged() {
        return this.transactions.some(tr => tr.docChanged);
    }
    /**
    Whether the selection was explicitly set in this update.
    */
    get selectionSet() {
        return this.transactions.some(tr => tr.selection);
    }
    /**
    @internal
    */
    get empty() { return this.flags == 0 && this.transactions.length == 0; }
}

class DocView extends ContentView {
    constructor(view) {
        super();
        this.view = view;
        this.compositionDeco = Decoration.none;
        this.decorations = [];
        // Track a minimum width for the editor. When measuring sizes in
        // checkLayout, this is updated to point at the width of a given
        // element and its extent in the document. When a change happens in
        // that range, these are reset. That way, once we've seen a
        // line/element of a given length, we keep the editor wide enough to
        // fit at least that element, until it is changed, at which point we
        // forget it again.
        this.minWidth = 0;
        this.minWidthFrom = 0;
        this.minWidthTo = 0;
        // Track whether the DOM selection was set in a lossy way, so that
        // we don't mess it up when reading it back it
        this.impreciseAnchor = null;
        this.impreciseHead = null;
        this.setDOM(view.contentDOM);
        this.children = [new LineView];
        this.children[0].setParent(this);
        this.updateInner([new ChangedRange(0, 0, 0, view.state.doc.length)], this.updateDeco(), 0);
    }
    get root() { return this.view.root; }
    get editorView() { return this.view; }
    get length() { return this.view.state.doc.length; }
    // Update the document view to a given state. scrollIntoView can be
    // used as a hint to compute a new viewport that includes that
    // position, if we know the editor is going to scroll that position
    // into view.
    update(update) {
        let changedRanges = update.changedRanges;
        if (this.minWidth > 0 && changedRanges.length) {
            if (!changedRanges.every(({ fromA, toA }) => toA < this.minWidthFrom || fromA > this.minWidthTo)) {
                this.minWidth = 0;
            }
            else {
                this.minWidthFrom = update.changes.mapPos(this.minWidthFrom, 1);
                this.minWidthTo = update.changes.mapPos(this.minWidthTo, 1);
            }
        }
        if (this.view.inputState.composing < 0)
            this.compositionDeco = Decoration.none;
        else if (update.transactions.length)
            this.compositionDeco = computeCompositionDeco(this.view, update.changes);
        // When the DOM nodes around the selection are moved to another
        // parent, Chrome sometimes reports a different selection through
        // getSelection than the one that it actually shows to the user.
        // This forces a selection update when lines are joined to work
        // around that. Issue #54
        let forceSelection = (browser.ie || browser.chrome) && !this.compositionDeco.size && update &&
            update.state.doc.lines != update.startState.doc.lines;
        let prevDeco = this.decorations, deco = this.updateDeco();
        let decoDiff = findChangedDeco(prevDeco, deco, update.changes);
        changedRanges = ChangedRange.extendWithRanges(changedRanges, decoDiff);
        let pointerSel = update.transactions.some(tr => tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent) == "pointerselection");
        if (this.dirty == 0 /* Not */ && changedRanges.length == 0 &&
            !(update.flags & (4 /* Viewport */ | 8 /* LineGaps */)) &&
            update.state.selection.main.from >= this.view.viewport.from &&
            update.state.selection.main.to <= this.view.viewport.to) {
            this.updateSelection(forceSelection, pointerSel);
            return false;
        }
        else {
            this.updateInner(changedRanges, deco, update.startState.doc.length, forceSelection, pointerSel);
            return true;
        }
    }
    // Used both by update and checkLayout do perform the actual DOM
    // update
    updateInner(changes, deco, oldLength, forceSelection = false, pointerSel = false) {
        this.updateChildren(changes, deco, oldLength);
        let { observer } = this.view;
        observer.ignore(() => {
            // Lock the height during redrawing, since Chrome sometimes
            // messes with the scroll position during DOM mutation (though
            // no relayout is triggered and I cannot imagine how it can
            // recompute the scroll position without a layout)
            this.dom.style.height = this.view.viewState.domHeight + "px";
            this.dom.style.minWidth = this.minWidth ? this.minWidth + "px" : "";
            // Chrome will sometimes, when DOM mutations occur directly
            // around the selection, get confused and report a different
            // selection from the one it displays (issue #218). This tries
            // to detect that situation.
            let track = browser.chrome || browser.ios ? { node: observer.selectionRange.focusNode, written: false } : undefined;
            this.sync(track);
            this.dirty = 0 /* Not */;
            if (track && (track.written || observer.selectionRange.focusNode != track.node))
                forceSelection = true;
            this.updateSelection(forceSelection, pointerSel);
            this.dom.style.height = "";
        });
    }
    updateChildren(changes, deco, oldLength) {
        let cursor = this.childCursor(oldLength);
        for (let i = changes.length - 1;; i--) {
            let next = i >= 0 ? changes[i] : null;
            if (!next)
                break;
            let { fromA, toA, fromB, toB } = next;
            let { content, breakAtStart, openStart, openEnd } = ContentBuilder.build(this.view.state.doc, fromB, toB, deco);
            let { i: toI, off: toOff } = cursor.findPos(toA, 1);
            let { i: fromI, off: fromOff } = cursor.findPos(fromA, -1);
            this.replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd);
        }
    }
    replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart, openStart, openEnd) {
        let before = this.children[fromI], last = content.length ? content[content.length - 1] : null;
        let breakAtEnd = last ? last.breakAfter : breakAtStart;
        // Change within a single line
        if (fromI == toI && !breakAtStart && !breakAtEnd && content.length < 2 &&
            before.merge(fromOff, toOff, content.length ? last : null, fromOff == 0, openStart, openEnd))
            return;
        let after = this.children[toI];
        // Make sure the end of the line after the update is preserved in `after`
        if (toOff < after.length || after.children.length && after.children[after.children.length - 1].length == 0) {
            // If we're splitting a line, separate part of the start line to
            // avoid that being mangled when updating the start line.
            if (fromI == toI) {
                after = after.split(toOff);
                toOff = 0;
            }
            // If the element after the replacement should be merged with
            // the last replacing element, update `content`
            if (!breakAtEnd && last && after.merge(0, toOff, last, true, 0, openEnd)) {
                content[content.length - 1] = after;
            }
            else {
                // Remove the start of the after element, if necessary, and
                // add it to `content`.
                if (toOff || after.children.length && after.children[0].length == 0)
                    after.merge(0, toOff, null, false, 0, openEnd);
                content.push(after);
            }
        }
        else if (after.breakAfter) {
            // The element at `toI` is entirely covered by this range.
            // Preserve its line break, if any.
            if (last)
                last.breakAfter = 1;
            else
                breakAtStart = 1;
        }
        // Since we've handled the next element from the current elements
        // now, make sure `toI` points after that.
        toI++;
        before.breakAfter = breakAtStart;
        if (fromOff > 0) {
            if (!breakAtStart && content.length && before.merge(fromOff, before.length, content[0], false, openStart, 0)) {
                before.breakAfter = content.shift().breakAfter;
            }
            else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {
                before.merge(fromOff, before.length, null, false, openStart, 0);
            }
            fromI++;
        }
        // Try to merge widgets on the boundaries of the replacement
        while (fromI < toI && content.length) {
            if (this.children[toI - 1].match(content[content.length - 1]))
                toI--, content.pop();
            else if (this.children[fromI].match(content[0]))
                fromI++, content.shift();
            else
                break;
        }
        if (fromI < toI || content.length)
            this.replaceChildren(fromI, toI, content);
    }
    // Sync the DOM selection to this.state.selection
    updateSelection(force = false, fromPointer = false) {
        if (!(fromPointer || this.mayControlSelection()) ||
            browser.ios && this.view.inputState.rapidCompositionStart)
            return;
        let main = this.view.state.selection.main;
        // FIXME need to handle the case where the selection falls inside a block range
        let anchor = this.domAtPos(main.anchor);
        let head = main.empty ? anchor : this.domAtPos(main.head);
        // Always reset on Firefox when next to an uneditable node to
        // avoid invisible cursor bugs (#111)
        if (browser.gecko && main.empty && betweenUneditable(anchor)) {
            let dummy = document.createTextNode("");
            this.view.observer.ignore(() => anchor.node.insertBefore(dummy, anchor.node.childNodes[anchor.offset] || null));
            anchor = head = new DOMPos(dummy, 0);
            force = true;
        }
        let domSel = this.view.observer.selectionRange;
        // If the selection is already here, or in an equivalent position, don't touch it
        if (force || !domSel.focusNode ||
            !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) ||
            !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
            this.view.observer.ignore(() => {
                let rawSel = getSelection(this.root);
                if (main.empty) {
                    // Work around https://bugzilla.mozilla.org/show_bug.cgi?id=1612076
                    if (browser.gecko) {
                        let nextTo = nextToUneditable(anchor.node, anchor.offset);
                        if (nextTo && nextTo != (1 /* Before */ | 2 /* After */)) {
                            let text = nearbyTextNode(anchor.node, anchor.offset, nextTo == 1 /* Before */ ? 1 : -1);
                            if (text)
                                anchor = new DOMPos(text, nextTo == 1 /* Before */ ? 0 : text.nodeValue.length);
                        }
                    }
                    rawSel.collapse(anchor.node, anchor.offset);
                    if (main.bidiLevel != null && domSel.cursorBidiLevel != null)
                        domSel.cursorBidiLevel = main.bidiLevel;
                }
                else if (rawSel.extend) {
                    // Selection.extend can be used to create an 'inverted' selection
                    // (one where the focus is before the anchor), but not all
                    // browsers support it yet.
                    rawSel.collapse(anchor.node, anchor.offset);
                    rawSel.extend(head.node, head.offset);
                }
                else {
                    // Primitive (IE) way
                    let range = document.createRange();
                    if (main.anchor > main.head)
                        [anchor, head] = [head, anchor];
                    range.setEnd(head.node, head.offset);
                    range.setStart(anchor.node, anchor.offset);
                    rawSel.removeAllRanges();
                    rawSel.addRange(range);
                }
            });
            this.view.observer.setSelectionRange(anchor, head);
        }
        this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
        this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
    }
    enforceCursorAssoc() {
        if (this.view.composing)
            return;
        let cursor = this.view.state.selection.main;
        let sel = getSelection(this.root);
        if (!cursor.empty || !cursor.assoc || !sel.modify)
            return;
        let line = LineView.find(this, cursor.head); // FIXME provide view-line-range finding helper
        if (!line)
            return;
        let lineStart = line.posAtStart;
        if (cursor.head == lineStart || cursor.head == lineStart + line.length)
            return;
        let before = this.coordsAt(cursor.head, -1), after = this.coordsAt(cursor.head, 1);
        if (!before || !after || before.bottom > after.top)
            return;
        let dom = this.domAtPos(cursor.head + cursor.assoc);
        sel.collapse(dom.node, dom.offset);
        sel.modify("move", cursor.assoc < 0 ? "forward" : "backward", "lineboundary");
    }
    mayControlSelection() {
        return this.view.state.facet(editable) ? this.root.activeElement == this.dom
            : hasSelection(this.dom, this.view.observer.selectionRange);
    }
    nearest(dom) {
        for (let cur = dom; cur;) {
            let domView = ContentView.get(cur);
            if (domView && domView.rootView == this)
                return domView;
            cur = cur.parentNode;
        }
        return null;
    }
    posFromDOM(node, offset) {
        let view = this.nearest(node);
        if (!view)
            throw new RangeError("Trying to find position for a DOM position outside of the document");
        return view.localPosFromDOM(node, offset) + view.posAtStart;
    }
    domAtPos(pos) {
        let { i, off } = this.childCursor().findPos(pos, -1);
        for (; i < this.children.length - 1;) {
            let child = this.children[i];
            if (off < child.length || child instanceof LineView)
                break;
            i++;
            off = 0;
        }
        return this.children[i].domAtPos(off);
    }
    coordsAt(pos, side) {
        for (let off = this.length, i = this.children.length - 1;; i--) {
            let child = this.children[i], start = off - child.breakAfter - child.length;
            if (pos > start ||
                (pos == start && child.type != BlockType.WidgetBefore && child.type != BlockType.WidgetAfter &&
                    (!i || side == 2 || this.children[i - 1].breakAfter ||
                        (this.children[i - 1].type == BlockType.WidgetBefore && side > -2))))
                return child.coordsAt(pos - start, side);
            off = start;
        }
    }
    measureVisibleLineHeights() {
        let result = [], { from, to } = this.view.viewState.viewport;
        let minWidth = Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
        for (let pos = 0, i = 0; i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (end > to)
                break;
            if (pos >= from) {
                result.push(child.dom.getBoundingClientRect().height);
                let width = child.dom.scrollWidth;
                if (width > minWidth) {
                    this.minWidth = minWidth = width;
                    this.minWidthFrom = pos;
                    this.minWidthTo = end;
                }
            }
            pos = end + child.breakAfter;
        }
        return result;
    }
    measureTextSize() {
        for (let child of this.children) {
            if (child instanceof LineView) {
                let measure = child.measureTextSize();
                if (measure)
                    return measure;
            }
        }
        // If no workable line exists, force a layout of a measurable element
        let dummy = document.createElement("div"), lineHeight, charWidth;
        dummy.className = "cm-line";
        dummy.textContent = "abc def ghi jkl mno pqr stu";
        this.view.observer.ignore(() => {
            this.dom.appendChild(dummy);
            let rect = clientRectsFor(dummy.firstChild)[0];
            lineHeight = dummy.getBoundingClientRect().height;
            charWidth = rect ? rect.width / 27 : 7;
            dummy.remove();
        });
        return { lineHeight, charWidth };
    }
    childCursor(pos = this.length) {
        // Move back to start of last element when possible, so that
        // `ChildCursor.findPos` doesn't have to deal with the edge case
        // of being after the last element.
        let i = this.children.length;
        if (i)
            pos -= this.children[--i].length;
        return new ChildCursor(this.children, pos, i);
    }
    computeBlockGapDeco() {
        let deco = [], vs = this.view.viewState;
        for (let pos = 0, i = 0;; i++) {
            let next = i == vs.viewports.length ? null : vs.viewports[i];
            let end = next ? next.from - 1 : this.length;
            if (end > pos) {
                let height = vs.lineAt(end, 0).bottom - vs.lineAt(pos, 0).top;
                deco.push(Decoration.replace({ widget: new BlockGapWidget(height), block: true, inclusive: true }).range(pos, end));
            }
            if (!next)
                break;
            pos = next.to + 1;
        }
        return Decoration.set(deco);
    }
    updateDeco() {
        return this.decorations = [
            ...this.view.pluginField(PluginField.decorations),
            ...this.view.state.facet(decorations),
            this.compositionDeco,
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco
        ];
    }
    scrollPosIntoView(pos, side) {
        let rect = this.coordsAt(pos, side);
        if (!rect)
            return;
        let mLeft = 0, mRight = 0, mTop = 0, mBottom = 0;
        for (let margins of this.view.pluginField(PluginField.scrollMargins))
            if (margins) {
                let { left, right, top, bottom } = margins;
                if (left != null)
                    mLeft = Math.max(mLeft, left);
                if (right != null)
                    mRight = Math.max(mRight, right);
                if (top != null)
                    mTop = Math.max(mTop, top);
                if (bottom != null)
                    mBottom = Math.max(mBottom, bottom);
            }
        scrollRectIntoView(this.dom, {
            left: rect.left - mLeft, top: rect.top - mTop,
            right: rect.right + mRight, bottom: rect.bottom + mBottom
        });
    }
}
function betweenUneditable(pos) {
    return pos.node.nodeType == 1 && pos.node.firstChild &&
        (pos.offset == 0 || pos.node.childNodes[pos.offset - 1].contentEditable == "false") &&
        (pos.offset == pos.node.childNodes.length || pos.node.childNodes[pos.offset].contentEditable == "false");
}
class BlockGapWidget extends WidgetType {
    constructor(height) {
        super();
        this.height = height;
    }
    toDOM() {
        let elt = document.createElement("div");
        this.updateDOM(elt);
        return elt;
    }
    eq(other) { return other.height == this.height; }
    updateDOM(elt) {
        elt.style.height = this.height + "px";
        return true;
    }
    get estimatedHeight() { return this.height; }
}
function computeCompositionDeco(view, changes) {
    let sel = view.observer.selectionRange;
    let textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset, 0);
    if (!textNode)
        return Decoration.none;
    let cView = view.docView.nearest(textNode);
    let from, to, topNode = textNode;
    if (cView instanceof InlineView) {
        while (cView.parent instanceof InlineView)
            cView = cView.parent;
        from = cView.posAtStart;
        to = from + cView.length;
        topNode = cView.dom;
    }
    else if (cView instanceof LineView) {
        while (topNode.parentNode != cView.dom)
            topNode = topNode.parentNode;
        let prev = topNode.previousSibling;
        while (prev && !ContentView.get(prev))
            prev = prev.previousSibling;
        from = to = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
    }
    else {
        return Decoration.none;
    }
    let newFrom = changes.mapPos(from, 1), newTo = Math.max(newFrom, changes.mapPos(to, -1));
    let text = textNode.nodeValue, { state } = view;
    if (newTo - newFrom < text.length) {
        if (state.sliceDoc(newFrom, Math.min(state.doc.length, newFrom + text.length)) == text)
            newTo = newFrom + text.length;
        else if (state.sliceDoc(Math.max(0, newTo - text.length), newTo) == text)
            newFrom = newTo - text.length;
        else
            return Decoration.none;
    }
    else if (state.sliceDoc(newFrom, newTo) != text) {
        return Decoration.none;
    }
    return Decoration.set(Decoration.replace({ widget: new CompositionWidget(topNode, textNode) }).range(newFrom, newTo));
}
class CompositionWidget extends WidgetType {
    constructor(top, text) {
        super();
        this.top = top;
        this.text = text;
    }
    eq(other) { return this.top == other.top && this.text == other.text; }
    toDOM() { return this.top; }
    ignoreEvent() { return false; }
    get customView() { return CompositionView; }
}
function nearbyTextNode(node, offset, side) {
    for (;;) {
        if (node.nodeType == 3)
            return node;
        if (node.nodeType == 1 && offset > 0 && side <= 0) {
            node = node.childNodes[offset - 1];
            offset = maxOffset(node);
        }
        else if (node.nodeType == 1 && offset < node.childNodes.length && side >= 0) {
            node = node.childNodes[offset];
            offset = 0;
        }
        else {
            return null;
        }
    }
}
function nextToUneditable(node, offset) {
    if (node.nodeType != 1)
        return 0;
    return (offset && node.childNodes[offset - 1].contentEditable == "false" ? 1 /* Before */ : 0) |
        (offset < node.childNodes.length && node.childNodes[offset].contentEditable == "false" ? 2 /* After */ : 0);
}
class DecorationComparator$1 {
    constructor() {
        this.changes = [];
    }
    compareRange(from, to) { addRange(from, to, this.changes); }
    comparePoint(from, to) { addRange(from, to, this.changes); }
}
function findChangedDeco(a, b, diff) {
    let comp = new DecorationComparator$1;
    _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.compare(a, b, diff, comp);
    return comp.changes;
}

/**
Used to indicate [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
*/
var Direction = /*@__PURE__*/(function (Direction) {
    // (These are chosen to match the base levels, in bidi algorithm
    // terms, of spans in that direction.)
    /**
    Left-to-right.
    */
    Direction[Direction["LTR"] = 0] = "LTR";
    /**
    Right-to-left.
    */
    Direction[Direction["RTL"] = 1] = "RTL";
return Direction})(Direction || (Direction = {}));
const LTR = Direction.LTR, RTL = Direction.RTL;
// Decode a string with each type encoded as log2(type)
function dec(str) {
    let result = [];
    for (let i = 0; i < str.length; i++)
        result.push(1 << +str[i]);
    return result;
}
// Character types for codepoints 0 to 0xf8
const LowTypes = /*@__PURE__*/dec("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008");
// Character types for codepoints 0x600 to 0x6f9
const ArabicTypes = /*@__PURE__*/dec("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333");
const Brackets = /*@__PURE__*/Object.create(null), BracketStack = [];
// There's a lot more in
// https://www.unicode.org/Public/UCD/latest/ucd/BidiBrackets.txt,
// which are left out to keep code size down.
for (let p of ["()", "[]", "{}"]) {
    let l = /*@__PURE__*/p.charCodeAt(0), r = /*@__PURE__*/p.charCodeAt(1);
    Brackets[l] = r;
    Brackets[r] = -l;
}
function charType(ch) {
    return ch <= 0xf7 ? LowTypes[ch] :
        0x590 <= ch && ch <= 0x5f4 ? 2 /* R */ :
            0x600 <= ch && ch <= 0x6f9 ? ArabicTypes[ch - 0x600] :
                0x6ee <= ch && ch <= 0x8ac ? 4 /* AL */ :
                    0x2000 <= ch && ch <= 0x200b ? 256 /* NI */ :
                        ch == 0x200c ? 256 /* NI */ : 1 /* L */;
}
const BidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
/**
Represents a contiguous range of text that has a single direction
(as in left-to-right or right-to-left).
*/
class BidiSpan {
    /**
    @internal
    */
    constructor(
    /**
    The start of the span (relative to the start of the line).
    */
    from, 
    /**
    The end of the span.
    */
    to, 
    /**
    The ["bidi
    level"](https://unicode.org/reports/tr9/#Basic_Display_Algorithm)
    of the span (in this context, 0 means
    left-to-right, 1 means right-to-left, 2 means left-to-right
    number inside right-to-left text).
    */
    level) {
        this.from = from;
        this.to = to;
        this.level = level;
    }
    /**
    The direction of this span.
    */
    get dir() { return this.level % 2 ? RTL : LTR; }
    /**
    @internal
    */
    side(end, dir) { return (this.dir == dir) == end ? this.to : this.from; }
    /**
    @internal
    */
    static find(order, index, level, assoc) {
        let maybe = -1;
        for (let i = 0; i < order.length; i++) {
            let span = order[i];
            if (span.from <= index && span.to >= index) {
                if (span.level == level)
                    return i;
                // When multiple spans match, if assoc != 0, take the one that
                // covers that side, otherwise take the one with the minimum
                // level.
                if (maybe < 0 || (assoc != 0 ? (assoc < 0 ? span.from < index : span.to > index) : order[maybe].level > span.level))
                    maybe = i;
            }
        }
        if (maybe < 0)
            throw new RangeError("Index out of range");
        return maybe;
    }
}
// Reused array of character types
const types = [];
function computeOrder(line, direction) {
    let len = line.length, outerType = direction == LTR ? 1 /* L */ : 2 /* R */, oppositeType = direction == LTR ? 2 /* R */ : 1 /* L */;
    if (!line || outerType == 1 /* L */ && !BidiRE.test(line))
        return trivialOrder(len);
    // W1. Examine each non-spacing mark (NSM) in the level run, and
    // change the type of the NSM to the type of the previous
    // character. If the NSM is at the start of the level run, it will
    // get the type of sor.
    // W2. Search backwards from each instance of a European number
    // until the first strong type (R, L, AL, or sor) is found. If an
    // AL is found, change the type of the European number to Arabic
    // number.
    // W3. Change all ALs to R.
    // (Left after this: L, R, EN, AN, ET, CS, NI)
    for (let i = 0, prev = outerType, prevStrong = outerType; i < len; i++) {
        let type = charType(line.charCodeAt(i));
        if (type == 512 /* NSM */)
            type = prev;
        else if (type == 8 /* EN */ && prevStrong == 4 /* AL */)
            type = 16 /* AN */;
        types[i] = type == 4 /* AL */ ? 2 /* R */ : type;
        if (type & 7 /* Strong */)
            prevStrong = type;
        prev = type;
    }
    // W5. A sequence of European terminators adjacent to European
    // numbers changes to all European numbers.
    // W6. Otherwise, separators and terminators change to Other
    // Neutral.
    // W7. Search backwards from each instance of a European number
    // until the first strong type (R, L, or sor) is found. If an L is
    // found, then change the type of the European number to L.
    // (Left after this: L, R, EN+AN, NI)
    for (let i = 0, prev = outerType, prevStrong = outerType; i < len; i++) {
        let type = types[i];
        if (type == 128 /* CS */) {
            if (i < len - 1 && prev == types[i + 1] && (prev & 24 /* Num */))
                type = types[i] = prev;
            else
                types[i] = 256 /* NI */;
        }
        else if (type == 64 /* ET */) {
            let end = i + 1;
            while (end < len && types[end] == 64 /* ET */)
                end++;
            let replace = (i && prev == 8 /* EN */) || (end < len && types[end] == 8 /* EN */) ? (prevStrong == 1 /* L */ ? 1 /* L */ : 8 /* EN */) : 256 /* NI */;
            for (let j = i; j < end; j++)
                types[j] = replace;
            i = end - 1;
        }
        else if (type == 8 /* EN */ && prevStrong == 1 /* L */) {
            types[i] = 1 /* L */;
        }
        prev = type;
        if (type & 7 /* Strong */)
            prevStrong = type;
    }
    // N0. Process bracket pairs in an isolating run sequence
    // sequentially in the logical order of the text positions of the
    // opening paired brackets using the logic given below. Within this
    // scope, bidirectional types EN and AN are treated as R.
    for (let i = 0, sI = 0, context = 0, ch, br, type; i < len; i++) {
        // Keeps [startIndex, type, strongSeen] triples for each open
        // bracket on BracketStack.
        if (br = Brackets[ch = line.charCodeAt(i)]) {
            if (br < 0) { // Closing bracket
                for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
                    if (BracketStack[sJ + 1] == -br) {
                        let flags = BracketStack[sJ + 2];
                        let type = (flags & 2 /* EmbedInside */) ? outerType :
                            !(flags & 4 /* OppositeInside */) ? 0 :
                                (flags & 1 /* OppositeBefore */) ? oppositeType : outerType;
                        if (type)
                            types[i] = types[BracketStack[sJ]] = type;
                        sI = sJ;
                        break;
                    }
                }
            }
            else if (BracketStack.length == 189 /* MaxDepth */) {
                break;
            }
            else {
                BracketStack[sI++] = i;
                BracketStack[sI++] = ch;
                BracketStack[sI++] = context;
            }
        }
        else if ((type = types[i]) == 2 /* R */ || type == 1 /* L */) {
            let embed = type == outerType;
            context = embed ? 0 : 1 /* OppositeBefore */;
            for (let sJ = sI - 3; sJ >= 0; sJ -= 3) {
                let cur = BracketStack[sJ + 2];
                if (cur & 2 /* EmbedInside */)
                    break;
                if (embed) {
                    BracketStack[sJ + 2] |= 2 /* EmbedInside */;
                }
                else {
                    if (cur & 4 /* OppositeInside */)
                        break;
                    BracketStack[sJ + 2] |= 4 /* OppositeInside */;
                }
            }
        }
    }
    // N1. A sequence of neutrals takes the direction of the
    // surrounding strong text if the text on both sides has the same
    // direction. European and Arabic numbers act as if they were R in
    // terms of their influence on neutrals. Start-of-level-run (sor)
    // and end-of-level-run (eor) are used at level run boundaries.
    // N2. Any remaining neutrals take the embedding direction.
    // (Left after this: L, R, EN+AN)
    for (let i = 0; i < len; i++) {
        if (types[i] == 256 /* NI */) {
            let end = i + 1;
            while (end < len && types[end] == 256 /* NI */)
                end++;
            let beforeL = (i ? types[i - 1] : outerType) == 1 /* L */;
            let afterL = (end < len ? types[end] : outerType) == 1 /* L */;
            let replace = beforeL == afterL ? (beforeL ? 1 /* L */ : 2 /* R */) : outerType;
            for (let j = i; j < end; j++)
                types[j] = replace;
            i = end - 1;
        }
    }
    // Here we depart from the documented algorithm, in order to avoid
    // building up an actual levels array. Since there are only three
    // levels (0, 1, 2) in an implementation that doesn't take
    // explicit embedding into account, we can build up the order on
    // the fly, without following the level-based algorithm.
    let order = [];
    if (outerType == 1 /* L */) {
        for (let i = 0; i < len;) {
            let start = i, rtl = types[i++] != 1 /* L */;
            while (i < len && rtl == (types[i] != 1 /* L */))
                i++;
            if (rtl) {
                for (let j = i; j > start;) {
                    let end = j, l = types[--j] != 2 /* R */;
                    while (j > start && l == (types[j - 1] != 2 /* R */))
                        j--;
                    order.push(new BidiSpan(j, end, l ? 2 : 1));
                }
            }
            else {
                order.push(new BidiSpan(start, i, 0));
            }
        }
    }
    else {
        for (let i = 0; i < len;) {
            let start = i, rtl = types[i++] == 2 /* R */;
            while (i < len && rtl == (types[i] == 2 /* R */))
                i++;
            order.push(new BidiSpan(start, i, rtl ? 1 : 2));
        }
    }
    return order;
}
function trivialOrder(length) {
    return [new BidiSpan(0, length, 0)];
}
let movedOver = "";
function moveVisually(line, order, dir, start, forward) {
    var _a;
    let startIndex = start.head - line.from, spanI = -1;
    if (startIndex == 0) {
        if (!forward || !line.length)
            return null;
        if (order[0].level != dir) {
            startIndex = order[0].side(false, dir);
            spanI = 0;
        }
    }
    else if (startIndex == line.length) {
        if (forward)
            return null;
        let last = order[order.length - 1];
        if (last.level != dir) {
            startIndex = last.side(true, dir);
            spanI = order.length - 1;
        }
    }
    if (spanI < 0)
        spanI = BidiSpan.find(order, startIndex, (_a = start.bidiLevel) !== null && _a !== void 0 ? _a : -1, start.assoc);
    let span = order[spanI];
    // End of span. (But not end of line--that was checked for above.)
    if (startIndex == span.side(forward, dir)) {
        span = order[spanI += forward ? 1 : -1];
        startIndex = span.side(!forward, dir);
    }
    let indexForward = forward == (span.dir == dir);
    let nextIndex = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.findClusterBreak)(line.text, startIndex, indexForward);
    movedOver = line.text.slice(Math.min(startIndex, nextIndex), Math.max(startIndex, nextIndex));
    if (nextIndex != span.side(forward, dir))
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(nextIndex + line.from, indexForward ? -1 : 1, span.level);
    let nextSpan = spanI == (forward ? order.length - 1 : 0) ? null : order[spanI + (forward ? 1 : -1)];
    if (!nextSpan && span.level != dir)
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(forward ? line.to : line.from, forward ? -1 : 1, dir);
    if (nextSpan && nextSpan.level < span.level)
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(nextSpan.side(!forward, dir) + line.from, forward ? 1 : -1, nextSpan.level);
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(nextIndex + line.from, forward ? -1 : 1, span.level);
}

function groupAt(state, pos, bias = 1) {
    let categorize = state.charCategorizer(pos);
    let line = state.doc.lineAt(pos), linePos = pos - line.from;
    if (line.length == 0)
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(pos);
    if (linePos == 0)
        bias = 1;
    else if (linePos == line.length)
        bias = -1;
    let from = linePos, to = linePos;
    if (bias < 0)
        from = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.findClusterBreak)(line.text, linePos, false);
    else
        to = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.findClusterBreak)(line.text, linePos);
    let cat = categorize(line.text.slice(from, to));
    while (from > 0) {
        let prev = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.findClusterBreak)(line.text, from, false);
        if (categorize(line.text.slice(prev, from)) != cat)
            break;
        from = prev;
    }
    while (to < line.length) {
        let next = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.findClusterBreak)(line.text, to);
        if (categorize(line.text.slice(to, next)) != cat)
            break;
        to = next;
    }
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.range(from + line.from, to + line.from);
}
// Search the DOM for the {node, offset} position closest to the given
// coordinates. Very inefficient and crude, but can usually be avoided
// by calling caret(Position|Range)FromPoint instead.
// FIXME holding arrow-up/down at the end of the viewport is a rather
// common use case that will repeatedly trigger this code. Maybe
// introduce some element of binary search after all?
function getdx(x, rect) {
    return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
}
function getdy(y, rect) {
    return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
}
function yOverlap(a, b) {
    return a.top < b.bottom - 1 && a.bottom > b.top + 1;
}
function upTop(rect, top) {
    return top < rect.top ? { top, left: rect.left, right: rect.right, bottom: rect.bottom } : rect;
}
function upBot(rect, bottom) {
    return bottom > rect.bottom ? { top: rect.top, left: rect.left, right: rect.right, bottom } : rect;
}
function domPosAtCoords(parent, x, y) {
    let closest, closestRect, closestX, closestY;
    let above, below, aboveRect, belowRect;
    for (let child = parent.firstChild; child; child = child.nextSibling) {
        let rects = clientRectsFor(child);
        for (let i = 0; i < rects.length; i++) {
            let rect = rects[i];
            if (closestRect && yOverlap(closestRect, rect))
                rect = upTop(upBot(rect, closestRect.bottom), closestRect.top);
            let dx = getdx(x, rect), dy = getdy(y, rect);
            if (dx == 0 && dy == 0)
                return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);
            if (!closest || closestY > dy || closestY == dy && closestX > dx) {
                closest = child;
                closestRect = rect;
                closestX = dx;
                closestY = dy;
            }
            if (dx == 0) {
                if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
                    above = child;
                    aboveRect = rect;
                }
                else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
                    below = child;
                    belowRect = rect;
                }
            }
            else if (aboveRect && yOverlap(aboveRect, rect)) {
                aboveRect = upBot(aboveRect, rect.bottom);
            }
            else if (belowRect && yOverlap(belowRect, rect)) {
                belowRect = upTop(belowRect, rect.top);
            }
        }
    }
    if (aboveRect && aboveRect.bottom >= y) {
        closest = above;
        closestRect = aboveRect;
    }
    else if (belowRect && belowRect.top <= y) {
        closest = below;
        closestRect = belowRect;
    }
    if (!closest)
        return { node: parent, offset: 0 };
    let clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
    if (closest.nodeType == 3)
        return domPosInText(closest, clipX, y);
    if (!closestX && closest.contentEditable == "true")
        return domPosAtCoords(closest, clipX, y);
    let offset = Array.prototype.indexOf.call(parent.childNodes, closest) +
        (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
    return { node: parent, offset };
}
function domPosInText(node, x, y) {
    let len = node.nodeValue.length;
    let closestOffset = -1, closestDY = 1e9, generalSide = 0;
    for (let i = 0; i < len; i++) {
        let rects = textRange(node, i, i + 1).getClientRects();
        for (let j = 0; j < rects.length; j++) {
            let rect = rects[j];
            if (rect.top == rect.bottom)
                continue;
            if (!generalSide)
                generalSide = x - rect.left;
            let dy = (rect.top > y ? rect.top - y : y - rect.bottom) - 1;
            if (rect.left - 1 <= x && rect.right + 1 >= x && dy < closestDY) {
                let right = x >= (rect.left + rect.right) / 2, after = right;
                if (browser.chrome || browser.gecko) {
                    // Check for RTL on browsers that support getting client
                    // rects for empty ranges.
                    let rectBefore = textRange(node, i).getBoundingClientRect();
                    if (rectBefore.left == rect.right)
                        after = !right;
                }
                if (dy <= 0)
                    return { node, offset: i + (after ? 1 : 0) };
                closestOffset = i + (after ? 1 : 0);
                closestDY = dy;
            }
        }
    }
    return { node, offset: closestOffset > -1 ? closestOffset : generalSide > 0 ? node.nodeValue.length : 0 };
}
function posAtCoords(view, { x, y }, precise, bias = -1) {
    let content = view.contentDOM.getBoundingClientRect(), block;
    let halfLine = view.defaultLineHeight / 2;
    for (let bounced = false;;) {
        block = view.blockAtHeight(y, content.top);
        if (block.top > y || block.bottom < y) {
            bias = block.top > y ? -1 : 1;
            y = Math.min(block.bottom - halfLine, Math.max(block.top + halfLine, y));
            if (bounced)
                return precise ? null : 0;
            else
                bounced = true;
        }
        if (block.type == BlockType.Text)
            break;
        y = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
    }
    let lineStart = block.from;
    x = Math.max(content.left + 1, Math.min(content.right - 1, x));
    // If this is outside of the rendered viewport, we can't determine a position
    if (lineStart < view.viewport.from)
        return view.viewport.from == 0 ? 0 : posAtCoordsImprecise(view, content, block, x, y);
    if (lineStart > view.viewport.to)
        return view.viewport.to == view.state.doc.length ? view.state.doc.length : posAtCoordsImprecise(view, content, block, x, y);
    // Clip x to the viewport sides
    let root = view.root, element = root.elementFromPoint(x, y);
    // There's visible editor content under the point, so we can try
    // using caret(Position|Range)FromPoint as a shortcut
    let node, offset = -1;
    if (element && view.contentDOM.contains(element) && !(view.docView.nearest(element) instanceof WidgetView)) {
        if (root.caretPositionFromPoint) {
            let pos = root.caretPositionFromPoint(x, y);
            if (pos)
                ({ offsetNode: node, offset } = pos);
        }
        else if (root.caretRangeFromPoint) {
            let range = root.caretRangeFromPoint(x, y);
            if (range) {
                ({ startContainer: node, startOffset: offset } = range);
                if (browser.safari && isSuspiciousCaretResult(node, offset, x))
                    node = undefined;
            }
        }
    }
    // No luck, do our own (potentially expensive) search
    if (!node || !view.docView.dom.contains(node)) {
        let line = LineView.find(view.docView, lineStart);
        ({ node, offset } = domPosAtCoords(line.dom, x, y));
    }
    return view.docView.posFromDOM(node, offset);
}
function posAtCoordsImprecise(view, contentRect, block, x, y) {
    let into = Math.round((x - contentRect.left) * view.defaultCharacterWidth);
    if (view.lineWrapping && block.height > view.defaultLineHeight * 1.5) {
        let line = Math.floor((y - block.top) / view.defaultLineHeight);
        into += line * view.viewState.heightOracle.lineLength;
    }
    let content = view.state.sliceDoc(block.from, block.to);
    return block.from + (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.findColumn)(content, into, view.state.tabSize);
}
// In case of a high line height, Safari's caretRangeFromPoint treats
// the space between lines as belonging to the last character of the
// line before. This is used to detect such a result so that it can be
// ignored (issue #401).
function isSuspiciousCaretResult(node, offset, x) {
    let len;
    if (node.nodeType != 3 || offset != (len = node.nodeValue.length))
        return false;
    for (let next = node.nextSibling; next; next = next.nextSibling)
        if (next.nodeType != 1 || next.nodeName != "BR")
            return false;
    return textRange(node, len - 1, len).getBoundingClientRect().left > x;
}
function moveToLineBoundary(view, start, forward, includeWrap) {
    let line = view.state.doc.lineAt(start.head);
    let coords = !includeWrap || !view.lineWrapping ? null
        : view.coordsAtPos(start.assoc < 0 && start.head > line.from ? start.head - 1 : start.head);
    if (coords) {
        let editorRect = view.dom.getBoundingClientRect();
        let pos = view.posAtCoords({ x: forward == (view.textDirection == Direction.LTR) ? editorRect.right - 1 : editorRect.left + 1,
            y: (coords.top + coords.bottom) / 2 });
        if (pos != null)
            return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(pos, forward ? -1 : 1);
    }
    let lineView = LineView.find(view.docView, start.head);
    let end = lineView ? (forward ? lineView.posAtEnd : lineView.posAtStart) : (forward ? line.to : line.from);
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(end, forward ? -1 : 1);
}
function moveByChar(view, start, forward, by) {
    let line = view.state.doc.lineAt(start.head), spans = view.bidiSpans(line);
    for (let cur = start, check = null;;) {
        let next = moveVisually(line, spans, view.textDirection, cur, forward), char = movedOver;
        if (!next) {
            if (line.number == (forward ? view.state.doc.lines : 1))
                return cur;
            char = "\n";
            line = view.state.doc.line(line.number + (forward ? 1 : -1));
            spans = view.bidiSpans(line);
            next = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(forward ? line.from : line.to);
        }
        if (!check) {
            if (!by)
                return next;
            check = by(char);
        }
        else if (!check(char)) {
            return cur;
        }
        cur = next;
    }
}
function byGroup(view, pos, start) {
    let categorize = view.state.charCategorizer(pos);
    let cat = categorize(start);
    return (next) => {
        let nextCat = categorize(next);
        if (cat == _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.CharCategory.Space)
            cat = nextCat;
        return cat == nextCat;
    };
}
function moveVertically(view, start, forward, distance) {
    let startPos = start.head, dir = forward ? 1 : -1;
    if (startPos == (forward ? view.state.doc.length : 0))
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(startPos);
    let goal = start.goalColumn, startY;
    let rect = view.contentDOM.getBoundingClientRect();
    let startCoords = view.coordsAtPos(startPos);
    if (startCoords) {
        if (goal == null)
            goal = startCoords.left - rect.left;
        startY = dir < 0 ? startCoords.top : startCoords.bottom;
    }
    else {
        let line = view.viewState.lineAt(startPos, view.dom.getBoundingClientRect().top);
        if (goal == null)
            goal = Math.min(rect.right - rect.left, view.defaultCharacterWidth * (startPos - line.from));
        startY = dir < 0 ? line.top : line.bottom;
    }
    let resolvedGoal = rect.left + goal;
    let dist = distance !== null && distance !== void 0 ? distance : (view.defaultLineHeight >> 1);
    for (let extra = 0;; extra += 10) {
        let curY = startY + (dist + extra) * dir;
        let pos = posAtCoords(view, { x: resolvedGoal, y: curY }, false, dir);
        if (curY < rect.top || curY > rect.bottom || (dir < 0 ? pos < startPos : pos > startPos))
            return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(pos, undefined, undefined, goal);
    }
}
function skipAtoms(view, oldPos, pos) {
    let atoms = view.pluginField(PluginField.atomicRanges);
    for (;;) {
        let moved = false;
        for (let set of atoms) {
            set.between(pos.from - 1, pos.from + 1, (from, to, value) => {
                if (pos.from > from && pos.from < to) {
                    pos = oldPos.from > pos.from ? _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(from, 1) : _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(to, -1);
                    moved = true;
                }
            });
        }
        if (!moved)
            return pos;
    }
}

// This will also be where dragging info and such goes
class InputState {
    constructor(view) {
        this.lastKeyCode = 0;
        this.lastKeyTime = 0;
        this.pendingIOSKey = null;
        this.lastSelectionOrigin = null;
        this.lastSelectionTime = 0;
        this.lastEscPress = 0;
        this.lastContextMenu = 0;
        this.scrollHandlers = [];
        this.registeredEvents = [];
        this.customHandlers = [];
        // -1 means not in a composition. Otherwise, this counts the number
        // of changes made during the composition. The count is used to
        // avoid treating the start state of the composition, before any
        // changes have been made, as part of the composition.
        this.composing = -1;
        this.compositionEndedAt = 0;
        this.rapidCompositionStart = false;
        this.mouseSelection = null;
        for (let type in handlers) {
            let handler = handlers[type];
            view.contentDOM.addEventListener(type, (event) => {
                if (type == "keydown" && this.keydown(view, event))
                    return;
                if (!eventBelongsToEditor(view, event) || this.ignoreDuringComposition(event))
                    return;
                if (this.mustFlushObserver(event))
                    view.observer.forceFlush();
                if (this.runCustomHandlers(type, view, event))
                    event.preventDefault();
                else
                    handler(view, event);
            });
            this.registeredEvents.push(type);
        }
        this.notifiedFocused = view.hasFocus;
        this.ensureHandlers(view);
        // On Safari adding an input event handler somehow prevents an
        // issue where the composition vanishes when you press enter.
        if (browser.safari)
            view.contentDOM.addEventListener("input", () => null);
    }
    setSelectionOrigin(origin) {
        this.lastSelectionOrigin = origin;
        this.lastSelectionTime = Date.now();
    }
    ensureHandlers(view) {
        let handlers = this.customHandlers = view.pluginField(domEventHandlers);
        for (let set of handlers) {
            for (let type in set.handlers)
                if (this.registeredEvents.indexOf(type) < 0 && type != "scroll") {
                    this.registeredEvents.push(type);
                    view.contentDOM.addEventListener(type, (event) => {
                        if (!eventBelongsToEditor(view, event))
                            return;
                        if (this.runCustomHandlers(type, view, event))
                            event.preventDefault();
                    });
                }
        }
    }
    runCustomHandlers(type, view, event) {
        for (let set of this.customHandlers) {
            let handler = set.handlers[type], handled = false;
            if (handler) {
                try {
                    handled = handler.call(set.plugin, event, view);
                }
                catch (e) {
                    logException(view.state, e);
                }
                if (handled || event.defaultPrevented) {
                    // Chrome for Android often applies a bunch of nonsensical
                    // DOM changes after an enter press, even when
                    // preventDefault-ed. This tries to ignore those.
                    if (browser.android && type == "keydown" && event.keyCode == 13)
                        view.observer.flushSoon();
                    return true;
                }
            }
        }
        return false;
    }
    runScrollHandlers(view, event) {
        for (let set of this.customHandlers) {
            let handler = set.handlers.scroll;
            if (handler) {
                try {
                    handler.call(set.plugin, event, view);
                }
                catch (e) {
                    logException(view.state, e);
                }
            }
        }
    }
    keydown(view, event) {
        // Must always run, even if a custom handler handled the event
        this.lastKeyCode = event.keyCode;
        this.lastKeyTime = Date.now();
        if (this.screenKeyEvent(view, event))
            return true;
        // Prevent the default behavior of Enter on iOS makes the
        // virtual keyboard get stuck in the wrong (lowercase)
        // state. So we let it go through, and then, in
        // applyDOMChange, notify key handlers of it and reset to
        // the state they produce.
        if (browser.ios && (event.keyCode == 13 || event.keyCode == 8) &&
            !(event.ctrlKey || event.altKey || event.metaKey) && !event.synthetic) {
            this.pendingIOSKey = event.keyCode == 13 ? "enter" : "backspace";
            setTimeout(() => this.flushIOSKey(view), 250);
            return true;
        }
        return false;
    }
    flushIOSKey(view) {
        if (!this.pendingIOSKey)
            return false;
        let dom = view.contentDOM, key = this.pendingIOSKey;
        this.pendingIOSKey = null;
        return key == "enter" ? dispatchKey(dom, "Enter", 13) : dispatchKey(dom, "Backspace", 8);
    }
    ignoreDuringComposition(event) {
        if (!/^key/.test(event.type))
            return false;
        if (this.composing > 0)
            return true;
        // See https://www.stum.de/2016/06/24/handling-ime-events-in-javascript/.
        // On some input method editors (IMEs), the Enter key is used to
        // confirm character selection. On Safari, when Enter is pressed,
        // compositionend and keydown events are sometimes emitted in the
        // wrong order. The key event should still be ignored, even when
        // it happens after the compositionend event.
        if (browser.safari && Date.now() - this.compositionEndedAt < 500) {
            this.compositionEndedAt = 0;
            return true;
        }
        return false;
    }
    screenKeyEvent(view, event) {
        let protectedTab = event.keyCode == 9 && Date.now() < this.lastEscPress + 2000;
        if (event.keyCode == 27)
            this.lastEscPress = Date.now();
        else if (modifierCodes.indexOf(event.keyCode) < 0)
            this.lastEscPress = 0;
        return protectedTab;
    }
    mustFlushObserver(event) {
        return (event.type == "keydown" && event.keyCode != 229) ||
            event.type == "compositionend" && !browser.ios;
    }
    startMouseSelection(view, event, style) {
        if (this.mouseSelection)
            this.mouseSelection.destroy();
        this.mouseSelection = new MouseSelection(this, view, event, style);
    }
    update(update) {
        if (this.mouseSelection)
            this.mouseSelection.update(update);
        if (update.transactions.length)
            this.lastKeyCode = this.lastSelectionTime = 0;
    }
    destroy() {
        if (this.mouseSelection)
            this.mouseSelection.destroy();
    }
}
// Key codes for modifier keys
const modifierCodes = [16, 17, 18, 20, 91, 92, 224, 225];
class MouseSelection {
    constructor(inputState, view, startEvent, style) {
        this.inputState = inputState;
        this.view = view;
        this.style = style;
        this.lastEvent = startEvent;
        let doc = view.contentDOM.ownerDocument;
        doc.addEventListener("mousemove", this.move = this.move.bind(this));
        doc.addEventListener("mouseup", this.up = this.up.bind(this));
        this.extend = startEvent.shiftKey;
        this.multiple = view.state.facet(_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorState.allowMultipleSelections) && addsSelectionRange(view, startEvent);
        this.dragMove = dragMovesSelection(view, startEvent);
        this.dragging = isInPrimarySelection(view, startEvent) ? null : false;
        // When clicking outside of the selection, immediately apply the
        // effect of starting the selection
        if (this.dragging === false) {
            startEvent.preventDefault();
            this.select(startEvent);
        }
    }
    move(event) {
        if (event.buttons == 0)
            return this.destroy();
        if (this.dragging !== false)
            return;
        this.select(this.lastEvent = event);
    }
    up(event) {
        if (this.dragging == null)
            this.select(this.lastEvent);
        if (!this.dragging)
            event.preventDefault();
        this.destroy();
    }
    destroy() {
        let doc = this.view.contentDOM.ownerDocument;
        doc.removeEventListener("mousemove", this.move);
        doc.removeEventListener("mouseup", this.up);
        this.inputState.mouseSelection = null;
    }
    select(event) {
        let selection = this.style.get(event, this.extend, this.multiple);
        if (!selection.eq(this.view.state.selection) || selection.main.assoc != this.view.state.selection.main.assoc)
            this.view.dispatch({
                selection,
                annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent.of("pointerselection"),
                scrollIntoView: true
            });
    }
    update(update) {
        if (update.docChanged && this.dragging)
            this.dragging = this.dragging.map(update.changes);
        if (this.style.update(update))
            setTimeout(() => this.select(this.lastEvent), 20);
    }
}
function addsSelectionRange(view, event) {
    let facet = view.state.facet(clickAddsSelectionRange);
    return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
}
function dragMovesSelection(view, event) {
    let facet = view.state.facet(dragMovesSelection$1);
    return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
}
function isInPrimarySelection(view, event) {
    let { main } = view.state.selection;
    if (main.empty)
        return false;
    // On boundary clicks, check whether the coordinates are inside the
    // selection's client rectangles
    let sel = getSelection(view.root);
    if (sel.rangeCount == 0)
        return true;
    let rects = sel.getRangeAt(0).getClientRects();
    for (let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        if (rect.left <= event.clientX && rect.right >= event.clientX &&
            rect.top <= event.clientY && rect.bottom >= event.clientY)
            return true;
    }
    return false;
}
function eventBelongsToEditor(view, event) {
    if (!event.bubbles)
        return true;
    if (event.defaultPrevented)
        return false;
    for (let node = event.target, cView; node != view.contentDOM; node = node.parentNode)
        if (!node || node.nodeType == 11 || ((cView = ContentView.get(node)) && cView.ignoreEvent(event)))
            return false;
    return true;
}
const handlers = /*@__PURE__*/Object.create(null);
// This is very crude, but unfortunately both these browsers _pretend_
// that they have a clipboard API—all the objects and methods are
// there, they just don't work, and they are hard to test.
const brokenClipboardAPI = (browser.ie && browser.ie_version < 15) ||
    (browser.ios && browser.webkit_version < 604);
function capturePaste(view) {
    let parent = view.dom.parentNode;
    if (!parent)
        return;
    let target = parent.appendChild(document.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.focus();
    setTimeout(() => {
        view.focus();
        target.remove();
        doPaste(view, target.value);
    }, 50);
}
function doPaste(view, input) {
    let { state } = view, changes, i = 1, text = state.toText(input);
    let byLine = text.lines == state.selection.ranges.length;
    let linewise = lastLinewiseCopy && state.selection.ranges.every(r => r.empty) && lastLinewiseCopy == text.toString();
    if (linewise) {
        let lastLine = -1;
        changes = state.changeByRange(range => {
            let line = state.doc.lineAt(range.from);
            if (line.from == lastLine)
                return { range };
            lastLine = line.from;
            let insert = state.toText((byLine ? text.line(i++).text : input) + state.lineBreak);
            return { changes: { from: line.from, insert },
                range: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(range.from + insert.length) };
        });
    }
    else if (byLine) {
        changes = state.changeByRange(range => {
            let line = text.line(i++);
            return { changes: { from: range.from, to: range.to, insert: line.text },
                range: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(range.from + line.length) };
        });
    }
    else {
        changes = state.replaceSelection(text);
    }
    view.dispatch(changes, {
        annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent.of("paste"),
        scrollIntoView: true
    });
}
handlers.keydown = (view, event) => {
    view.inputState.setSelectionOrigin("keyboardselection");
};
let lastTouch = 0;
handlers.touchstart = (view, e) => {
    lastTouch = Date.now();
    view.inputState.setSelectionOrigin("pointerselection");
};
handlers.touchmove = view => {
    view.inputState.setSelectionOrigin("pointerselection");
};
handlers.mousedown = (view, event) => {
    view.observer.flush();
    if (lastTouch > Date.now() - 2000)
        return; // Ignore touch interaction
    let style = null;
    for (let makeStyle of view.state.facet(mouseSelectionStyle)) {
        style = makeStyle(view, event);
        if (style)
            break;
    }
    if (!style && event.button == 0)
        style = basicMouseSelection(view, event);
    if (style) {
        if (view.root.activeElement != view.contentDOM)
            view.observer.ignore(() => focusPreventScroll(view.contentDOM));
        view.inputState.startMouseSelection(view, event, style);
    }
};
function rangeForClick(view, pos, bias, type) {
    if (type == 1) { // Single click
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(pos, bias);
    }
    else if (type == 2) { // Double click
        return groupAt(view.state, pos, bias);
    }
    else { // Triple click
        let visual = LineView.find(view.docView, pos), line = view.state.doc.lineAt(visual ? visual.posAtEnd : pos);
        let from = visual ? visual.posAtStart : line.from, to = visual ? visual.posAtEnd : line.to;
        if (to < view.state.doc.length && to == line.to)
            to++;
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.range(from, to);
    }
}
let insideY = (y, rect) => y >= rect.top && y <= rect.bottom;
let inside = (x, y, rect) => insideY(y, rect) && x >= rect.left && x <= rect.right;
// Try to determine, for the given coordinates, associated with the
// given position, whether they are related to the element before or
// the element after the position.
function findPositionSide(view, pos, x, y) {
    let line = LineView.find(view.docView, pos);
    if (!line)
        return 1;
    let off = pos - line.posAtStart;
    // Line boundaries point into the line
    if (off == 0)
        return 1;
    if (off == line.length)
        return -1;
    // Positions on top of an element point at that element
    let before = line.coordsAt(off, -1);
    if (before && inside(x, y, before))
        return -1;
    let after = line.coordsAt(off, 1);
    if (after && inside(x, y, after))
        return 1;
    // This is probably a line wrap point. Pick before if the point is
    // beside it.
    return before && insideY(y, before) ? -1 : 1;
}
function queryPos(view, event) {
    let pos = view.posAtCoords({ x: event.clientX, y: event.clientY }, false);
    return { pos, bias: findPositionSide(view, pos, event.clientX, event.clientY) };
}
const BadMouseDetail = browser.ie && browser.ie_version <= 11;
let lastMouseDown = null, lastMouseDownCount = 0, lastMouseDownTime = 0;
function getClickType(event) {
    if (!BadMouseDetail)
        return event.detail;
    let last = lastMouseDown, lastTime = lastMouseDownTime;
    lastMouseDown = event;
    lastMouseDownTime = Date.now();
    return lastMouseDownCount = !last || (lastTime > Date.now() - 400 && Math.abs(last.clientX - event.clientX) < 2 &&
        Math.abs(last.clientY - event.clientY) < 2) ? (lastMouseDownCount + 1) % 3 : 1;
}
function basicMouseSelection(view, event) {
    let start = queryPos(view, event), type = getClickType(event);
    let startSel = view.state.selection;
    let last = start, lastEvent = event;
    return {
        update(update) {
            if (update.changes) {
                if (start)
                    start.pos = update.changes.mapPos(start.pos);
                startSel = startSel.map(update.changes);
                lastEvent = null;
            }
        },
        get(event, extend, multiple) {
            let cur;
            if (lastEvent && event.clientX == lastEvent.clientX && event.clientY == lastEvent.clientY)
                cur = last;
            else {
                cur = last = queryPos(view, event);
                lastEvent = event;
            }
            if (!cur || !start)
                return startSel;
            let range = rangeForClick(view, cur.pos, cur.bias, type);
            if (start.pos != cur.pos && !extend) {
                let startRange = rangeForClick(view, start.pos, start.bias, type);
                let from = Math.min(startRange.from, range.from), to = Math.max(startRange.to, range.to);
                range = from < range.from ? _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.range(from, to) : _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.range(to, from);
            }
            if (extend)
                return startSel.replaceRange(startSel.main.extend(range.from, range.to));
            else if (multiple)
                return startSel.addRange(range);
            else
                return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.create([range]);
        }
    };
}
handlers.dragstart = (view, event) => {
    let { selection: { main } } = view.state;
    let { mouseSelection } = view.inputState;
    if (mouseSelection)
        mouseSelection.dragging = main;
    if (event.dataTransfer) {
        event.dataTransfer.setData("Text", view.state.sliceDoc(main.from, main.to));
        event.dataTransfer.effectAllowed = "copyMove";
    }
};
function dropText(view, event, text, direct) {
    let dropPos = view.posAtCoords({ x: event.clientX, y: event.clientY });
    if (dropPos == null || !text)
        return;
    event.preventDefault();
    let { mouseSelection } = view.inputState;
    let del = direct && mouseSelection && mouseSelection.dragging && mouseSelection.dragMove ?
        { from: mouseSelection.dragging.from, to: mouseSelection.dragging.to } : null;
    let ins = { from: dropPos, insert: text };
    let changes = view.state.changes(del ? [del, ins] : ins);
    view.focus();
    view.dispatch({
        changes,
        selection: { anchor: changes.mapPos(dropPos, -1), head: changes.mapPos(dropPos, 1) },
        annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent.of("drop")
    });
}
handlers.drop = (view, event) => {
    if (!event.dataTransfer || !view.state.facet(editable))
        return;
    let files = event.dataTransfer.files;
    if (files && files.length) { // For a file drop, read the file's text.
        event.preventDefault();
        let text = Array(files.length), read = 0;
        let finishFile = () => {
            if (++read == files.length)
                dropText(view, event, text.filter(s => s != null).join(view.state.lineBreak), false);
        };
        for (let i = 0; i < files.length; i++) {
            let reader = new FileReader;
            reader.onerror = finishFile;
            reader.onload = () => {
                if (!/[\x00-\x08\x0e-\x1f]{2}/.test(reader.result))
                    text[i] = reader.result;
                finishFile();
            };
            reader.readAsText(files[i]);
        }
    }
    else {
        dropText(view, event, event.dataTransfer.getData("Text"), true);
    }
};
handlers.paste = (view, event) => {
    if (!view.state.facet(editable))
        return;
    view.observer.flush();
    let data = brokenClipboardAPI ? null : event.clipboardData;
    let text = data && data.getData("text/plain");
    if (text) {
        doPaste(view, text);
        event.preventDefault();
    }
    else {
        capturePaste(view);
    }
};
function captureCopy(view, text) {
    // The extra wrapper is somehow necessary on IE/Edge to prevent the
    // content from being mangled when it is put onto the clipboard
    let parent = view.dom.parentNode;
    if (!parent)
        return;
    let target = parent.appendChild(document.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.value = text;
    target.focus();
    target.selectionEnd = text.length;
    target.selectionStart = 0;
    setTimeout(() => {
        target.remove();
        view.focus();
    }, 50);
}
function copiedRange(state) {
    let content = [], ranges = [], linewise = false;
    for (let range of state.selection.ranges)
        if (!range.empty) {
            content.push(state.sliceDoc(range.from, range.to));
            ranges.push(range);
        }
    if (!content.length) {
        // Nothing selected, do a line-wise copy
        let upto = -1;
        for (let { from } of state.selection.ranges) {
            let line = state.doc.lineAt(from);
            if (line.number > upto) {
                content.push(line.text);
                ranges.push({ from: line.from, to: Math.min(state.doc.length, line.to + 1) });
            }
            upto = line.number;
        }
        linewise = true;
    }
    return { text: content.join(state.lineBreak), ranges, linewise };
}
let lastLinewiseCopy = null;
handlers.copy = handlers.cut = (view, event) => {
    let { text, ranges, linewise } = copiedRange(view.state);
    if (!text)
        return;
    lastLinewiseCopy = linewise ? text : null;
    let data = brokenClipboardAPI ? null : event.clipboardData;
    if (data) {
        event.preventDefault();
        data.clearData();
        data.setData("text/plain", text);
    }
    else {
        captureCopy(view, text);
    }
    if (event.type == "cut" && view.state.facet(editable))
        view.dispatch({
            changes: ranges,
            scrollIntoView: true,
            annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent.of("cut")
        });
};
handlers.focus = handlers.blur = view => {
    setTimeout(() => {
        if (view.hasFocus != view.inputState.notifiedFocused)
            view.update([]);
    }, 10);
};
handlers.beforeprint = view => {
    view.viewState.printing = true;
    view.requestMeasure();
    setTimeout(() => {
        view.viewState.printing = false;
        view.requestMeasure();
    }, 2000);
};
function forceClearComposition(view, rapid) {
    if (view.docView.compositionDeco.size) {
        view.inputState.rapidCompositionStart = rapid;
        try {
            view.update([]);
        }
        finally {
            view.inputState.rapidCompositionStart = false;
        }
    }
}
handlers.compositionstart = handlers.compositionupdate = view => {
    if (view.inputState.composing < 0) {
        if (view.docView.compositionDeco.size) {
            view.observer.flush();
            forceClearComposition(view, true);
        }
        // FIXME possibly set a timeout to clear it again on Android
        view.inputState.composing = 0;
    }
};
handlers.compositionend = view => {
    view.inputState.composing = -1;
    view.inputState.compositionEndedAt = Date.now();
    setTimeout(() => {
        if (view.inputState.composing < 0)
            forceClearComposition(view, false);
    }, 50);
};
handlers.contextmenu = view => {
    view.inputState.lastContextMenu = Date.now();
};

const wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line"];
class HeightOracle {
    constructor() {
        this.doc = _codemirror_text__WEBPACK_IMPORTED_MODULE_3__.Text.empty;
        this.lineWrapping = false;
        this.direction = Direction.LTR;
        this.heightSamples = {};
        this.lineHeight = 14;
        this.charWidth = 7;
        this.lineLength = 30;
        // Used to track, during updateHeight, if any actual heights changed
        this.heightChanged = false;
    }
    heightForGap(from, to) {
        let lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
        if (this.lineWrapping)
            lines += Math.ceil(((to - from) - (lines * this.lineLength * 0.5)) / this.lineLength);
        return this.lineHeight * lines;
    }
    heightForLine(length) {
        if (!this.lineWrapping)
            return this.lineHeight;
        let lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
        return lines * this.lineHeight;
    }
    setDoc(doc) { this.doc = doc; return this; }
    mustRefresh(lineHeights, whiteSpace, direction) {
        let newHeight = false;
        for (let i = 0; i < lineHeights.length; i++) {
            let h = lineHeights[i];
            if (h < 0) {
                i++;
            }
            else if (!this.heightSamples[Math.floor(h * 10)]) { // Round to .1 pixels
                newHeight = true;
                this.heightSamples[Math.floor(h * 10)] = true;
            }
        }
        return newHeight || (wrappingWhiteSpace.indexOf(whiteSpace) > -1) != this.lineWrapping || this.direction != direction;
    }
    refresh(whiteSpace, direction, lineHeight, charWidth, lineLength, knownHeights) {
        let lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
        let changed = Math.round(lineHeight) != Math.round(this.lineHeight) ||
            this.lineWrapping != lineWrapping ||
            this.direction != direction;
        this.lineWrapping = lineWrapping;
        this.direction = direction;
        this.lineHeight = lineHeight;
        this.charWidth = charWidth;
        this.lineLength = lineLength;
        if (changed) {
            this.heightSamples = {};
            for (let i = 0; i < knownHeights.length; i++) {
                let h = knownHeights[i];
                if (h < 0)
                    i++;
                else
                    this.heightSamples[Math.floor(h * 10)] = true;
            }
        }
        return changed;
    }
}
// This object is used by `updateHeight` to make DOM measurements
// arrive at the right nides. The `heights` array is a sequence of
// block heights, starting from position `from`.
class MeasuredHeights {
    constructor(from, heights) {
        this.from = from;
        this.heights = heights;
        this.index = 0;
    }
    get more() { return this.index < this.heights.length; }
}
/**
Record used to represent information about a block-level element
in the editor view.
*/
class BlockInfo {
    /**
    @internal
    */
    constructor(
    /**
    The start of the element in the document.
    */
    from, 
    /**
    The length of the element.
    */
    length, 
    /**
    The top position of the element.
    */
    top, 
    /**
    Its height.
    */
    height, 
    /**
    The type of element this is. When querying lines, this may be
    an array of all the blocks that make up the line.
    */
    type) {
        this.from = from;
        this.length = length;
        this.top = top;
        this.height = height;
        this.type = type;
    }
    /**
    The end of the element as a document position.
    */
    get to() { return this.from + this.length; }
    /**
    The bottom position of the element.
    */
    get bottom() { return this.top + this.height; }
    /**
    @internal
    */
    join(other) {
        let detail = (Array.isArray(this.type) ? this.type : [this])
            .concat(Array.isArray(other.type) ? other.type : [other]);
        return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
    }
}
var QueryType = /*@__PURE__*/(function (QueryType) {
    QueryType[QueryType["ByPos"] = 0] = "ByPos";
    QueryType[QueryType["ByHeight"] = 1] = "ByHeight";
    QueryType[QueryType["ByPosNoHeight"] = 2] = "ByPosNoHeight";
return QueryType})(QueryType || (QueryType = {}));
const Epsilon = 1e-4;
class HeightMap {
    constructor(length, // The number of characters covered
    height, // Height of this part of the document
    flags = 2 /* Outdated */) {
        this.length = length;
        this.height = height;
        this.flags = flags;
    }
    get outdated() { return (this.flags & 2 /* Outdated */) > 0; }
    set outdated(value) { this.flags = (value ? 2 /* Outdated */ : 0) | (this.flags & ~2 /* Outdated */); }
    setHeight(oracle, height) {
        if (this.height != height) {
            if (Math.abs(this.height - height) > Epsilon)
                oracle.heightChanged = true;
            this.height = height;
        }
    }
    // Base case is to replace a leaf node, which simply builds a tree
    // from the new nodes and returns that (HeightMapBranch and
    // HeightMapGap override this to actually use from/to)
    replace(_from, _to, nodes) {
        return HeightMap.of(nodes);
    }
    // Again, these are base cases, and are overridden for branch and gap nodes.
    decomposeLeft(_to, result) { result.push(this); }
    decomposeRight(_from, result) { result.push(this); }
    applyChanges(decorations, oldDoc, oracle, changes) {
        let me = this;
        for (let i = changes.length - 1; i >= 0; i--) {
            let { fromA, toA, fromB, toB } = changes[i];
            let start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            let end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            toB += end.to - toA;
            toA = end.to;
            while (i > 0 && start.from <= changes[i - 1].toA) {
                fromA = changes[i - 1].fromA;
                fromB = changes[i - 1].fromB;
                i--;
                if (fromA < start.from)
                    start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            }
            fromB += start.from - fromA;
            fromA = start.from;
            let nodes = NodeBuilder.build(oracle, decorations, fromB, toB);
            me = me.replace(fromA, toA, nodes);
        }
        return me.updateHeight(oracle, 0);
    }
    static empty() { return new HeightMapText(0, 0); }
    // nodes uses null values to indicate the position of line breaks.
    // There are never line breaks at the start or end of the array, or
    // two line breaks next to each other, and the array isn't allowed
    // to be empty (same restrictions as return value from the builder).
    static of(nodes) {
        if (nodes.length == 1)
            return nodes[0];
        let i = 0, j = nodes.length, before = 0, after = 0;
        for (;;) {
            if (i == j) {
                if (before > after * 2) {
                    let split = nodes[i - 1];
                    if (split.break)
                        nodes.splice(--i, 1, split.left, null, split.right);
                    else
                        nodes.splice(--i, 1, split.left, split.right);
                    j += 1 + split.break;
                    before -= split.size;
                }
                else if (after > before * 2) {
                    let split = nodes[j];
                    if (split.break)
                        nodes.splice(j, 1, split.left, null, split.right);
                    else
                        nodes.splice(j, 1, split.left, split.right);
                    j += 2 + split.break;
                    after -= split.size;
                }
                else {
                    break;
                }
            }
            else if (before < after) {
                let next = nodes[i++];
                if (next)
                    before += next.size;
            }
            else {
                let next = nodes[--j];
                if (next)
                    after += next.size;
            }
        }
        let brk = 0;
        if (nodes[i - 1] == null) {
            brk = 1;
            i--;
        }
        else if (nodes[i] == null) {
            brk = 1;
            j++;
        }
        return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
    }
}
HeightMap.prototype.size = 1;
class HeightMapBlock extends HeightMap {
    constructor(length, height, type) {
        super(length, height);
        this.type = type;
    }
    blockAt(_height, _doc, top, offset) {
        return new BlockInfo(offset, this.length, top, this.height, this.type);
    }
    lineAt(_value, _type, doc, top, offset) {
        return this.blockAt(0, doc, top, offset);
    }
    forEachLine(_from, _to, doc, top, offset, f) {
        f(this.blockAt(0, doc, top, offset));
    }
    updateHeight(oracle, offset = 0, _force = false, measured) {
        if (measured && measured.from <= offset && measured.more)
            this.setHeight(oracle, measured.heights[measured.index++]);
        this.outdated = false;
        return this;
    }
    toString() { return `block(${this.length})`; }
}
class HeightMapText extends HeightMapBlock {
    constructor(length, height) {
        super(length, height, BlockType.Text);
        this.collapsed = 0; // Amount of collapsed content in the line
        this.widgetHeight = 0; // Maximum inline widget height
    }
    replace(_from, _to, nodes) {
        let node = nodes[0];
        if (nodes.length == 1 && (node instanceof HeightMapText || node instanceof HeightMapGap && (node.flags & 4 /* SingleLine */)) &&
            Math.abs(this.length - node.length) < 10) {
            if (node instanceof HeightMapGap)
                node = new HeightMapText(node.length, this.height);
            else
                node.height = this.height;
            if (!this.outdated)
                node.outdated = false;
            return node;
        }
        else {
            return HeightMap.of(nodes);
        }
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
        if (measured && measured.from <= offset && measured.more)
            this.setHeight(oracle, measured.heights[measured.index++]);
        else if (force || this.outdated)
            this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)));
        this.outdated = false;
        return this;
    }
    toString() {
        return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
}
class HeightMapGap extends HeightMap {
    constructor(length) { super(length, 0); }
    lines(doc, offset) {
        let firstLine = doc.lineAt(offset).number, lastLine = doc.lineAt(offset + this.length).number;
        return { firstLine, lastLine, lineHeight: this.height / (lastLine - firstLine + 1) };
    }
    blockAt(height, doc, top, offset) {
        let { firstLine, lastLine, lineHeight } = this.lines(doc, offset);
        let line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top) / lineHeight)));
        let { from, length } = doc.line(firstLine + line);
        return new BlockInfo(from, length, top + lineHeight * line, lineHeight, BlockType.Text);
    }
    lineAt(value, type, doc, top, offset) {
        if (type == QueryType.ByHeight)
            return this.blockAt(value, doc, top, offset);
        if (type == QueryType.ByPosNoHeight) {
            let { from, to } = doc.lineAt(value);
            return new BlockInfo(from, to - from, 0, 0, BlockType.Text);
        }
        let { firstLine, lineHeight } = this.lines(doc, offset);
        let { from, length, number } = doc.lineAt(value);
        return new BlockInfo(from, length, top + lineHeight * (number - firstLine), lineHeight, BlockType.Text);
    }
    forEachLine(from, to, doc, top, offset, f) {
        let { firstLine, lineHeight } = this.lines(doc, offset);
        for (let pos = Math.max(from, offset), end = Math.min(offset + this.length, to); pos <= end;) {
            let line = doc.lineAt(pos);
            if (pos == from)
                top += lineHeight * (line.number - firstLine);
            f(new BlockInfo(line.from, line.length, top, lineHeight, BlockType.Text));
            top += lineHeight;
            pos = line.to + 1;
        }
    }
    replace(from, to, nodes) {
        let after = this.length - to;
        if (after > 0) {
            let last = nodes[nodes.length - 1];
            if (last instanceof HeightMapGap)
                nodes[nodes.length - 1] = new HeightMapGap(last.length + after);
            else
                nodes.push(null, new HeightMapGap(after - 1));
        }
        if (from > 0) {
            let first = nodes[0];
            if (first instanceof HeightMapGap)
                nodes[0] = new HeightMapGap(from + first.length);
            else
                nodes.unshift(new HeightMapGap(from - 1), null);
        }
        return HeightMap.of(nodes);
    }
    decomposeLeft(to, result) {
        result.push(new HeightMapGap(to - 1), null);
    }
    decomposeRight(from, result) {
        result.push(null, new HeightMapGap(this.length - from - 1));
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
        let end = offset + this.length;
        if (measured && measured.from <= offset + this.length && measured.more) {
            // Fill in part of this gap with measured lines. We know there
            // can't be widgets or collapsed ranges in those lines, because
            // they would already have been added to the heightmap (gaps
            // only contain plain text).
            let nodes = [], pos = Math.max(offset, measured.from);
            if (measured.from > offset)
                nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));
            while (pos <= end && measured.more) {
                let len = oracle.doc.lineAt(pos).length;
                if (nodes.length)
                    nodes.push(null);
                let line = new HeightMapText(len, measured.heights[measured.index++]);
                line.outdated = false;
                nodes.push(line);
                pos += len + 1;
            }
            if (pos <= end)
                nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
            oracle.heightChanged = true;
            return HeightMap.of(nodes);
        }
        else if (force || this.outdated) {
            this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
            this.outdated = false;
        }
        return this;
    }
    toString() { return `gap(${this.length})`; }
}
class HeightMapBranch extends HeightMap {
    constructor(left, brk, right) {
        super(left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 /* Outdated */ : 0));
        this.left = left;
        this.right = right;
        this.size = left.size + right.size;
    }
    get break() { return this.flags & 1 /* Break */; }
    blockAt(height, doc, top, offset) {
        let mid = top + this.left.height;
        return height < mid || this.right.height == 0 ? this.left.blockAt(height, doc, top, offset)
            : this.right.blockAt(height, doc, mid, offset + this.left.length + this.break);
    }
    lineAt(value, type, doc, top, offset) {
        let rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
        let left = type == QueryType.ByHeight ? value < rightTop || this.right.height == 0 : value < rightOffset;
        let base = left ? this.left.lineAt(value, type, doc, top, offset)
            : this.right.lineAt(value, type, doc, rightTop, rightOffset);
        if (this.break || (left ? base.to < rightOffset : base.from > rightOffset))
            return base;
        let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
        if (left)
            return base.join(this.right.lineAt(rightOffset, subQuery, doc, rightTop, rightOffset));
        else
            return this.left.lineAt(rightOffset, subQuery, doc, top, offset).join(base);
    }
    forEachLine(from, to, doc, top, offset, f) {
        let rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
        if (this.break) {
            if (from < rightOffset)
                this.left.forEachLine(from, to, doc, top, offset, f);
            if (to >= rightOffset)
                this.right.forEachLine(from, to, doc, rightTop, rightOffset, f);
        }
        else {
            let mid = this.lineAt(rightOffset, QueryType.ByPos, doc, top, offset);
            if (from < mid.from)
                this.left.forEachLine(from, mid.from - 1, doc, top, offset, f);
            if (mid.to >= from && mid.from <= to)
                f(mid);
            if (to > mid.to)
                this.right.forEachLine(mid.to + 1, to, doc, rightTop, rightOffset, f);
        }
    }
    replace(from, to, nodes) {
        let rightStart = this.left.length + this.break;
        if (to < rightStart)
            return this.balanced(this.left.replace(from, to, nodes), this.right);
        if (from > this.left.length)
            return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
        let result = [];
        if (from > 0)
            this.decomposeLeft(from, result);
        let left = result.length;
        for (let node of nodes)
            result.push(node);
        if (from > 0)
            mergeGaps(result, left - 1);
        if (to < this.length) {
            let right = result.length;
            this.decomposeRight(to, result);
            mergeGaps(result, right);
        }
        return HeightMap.of(result);
    }
    decomposeLeft(to, result) {
        let left = this.left.length;
        if (to <= left)
            return this.left.decomposeLeft(to, result);
        result.push(this.left);
        if (this.break) {
            left++;
            if (to >= left)
                result.push(null);
        }
        if (to > left)
            this.right.decomposeLeft(to - left, result);
    }
    decomposeRight(from, result) {
        let left = this.left.length, right = left + this.break;
        if (from >= right)
            return this.right.decomposeRight(from - right, result);
        if (from < left)
            this.left.decomposeRight(from, result);
        if (this.break && from < right)
            result.push(null);
        result.push(this.right);
    }
    balanced(left, right) {
        if (left.size > 2 * right.size || right.size > 2 * left.size)
            return HeightMap.of(this.break ? [left, null, right] : [left, right]);
        this.left = left;
        this.right = right;
        this.height = left.height + right.height;
        this.outdated = left.outdated || right.outdated;
        this.size = left.size + right.size;
        this.length = left.length + this.break + right.length;
        return this;
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
        let { left, right } = this, rightStart = offset + left.length + this.break, rebalance = null;
        if (measured && measured.from <= offset + left.length && measured.more)
            rebalance = left = left.updateHeight(oracle, offset, force, measured);
        else
            left.updateHeight(oracle, offset, force);
        if (measured && measured.from <= rightStart + right.length && measured.more)
            rebalance = right = right.updateHeight(oracle, rightStart, force, measured);
        else
            right.updateHeight(oracle, rightStart, force);
        if (rebalance)
            return this.balanced(left, right);
        this.height = this.left.height + this.right.height;
        this.outdated = false;
        return this;
    }
    toString() { return this.left + (this.break ? " " : "-") + this.right; }
}
function mergeGaps(nodes, around) {
    let before, after;
    if (nodes[around] == null &&
        (before = nodes[around - 1]) instanceof HeightMapGap &&
        (after = nodes[around + 1]) instanceof HeightMapGap)
        nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));
}
const relevantWidgetHeight = 5;
class NodeBuilder {
    constructor(pos, oracle) {
        this.pos = pos;
        this.oracle = oracle;
        this.nodes = [];
        this.lineStart = -1;
        this.lineEnd = -1;
        this.covering = null;
        this.writtenTo = pos;
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(_from, to) {
        if (this.lineStart > -1) {
            let end = Math.min(to, this.lineEnd), last = this.nodes[this.nodes.length - 1];
            if (last instanceof HeightMapText)
                last.length += end - this.pos;
            else if (end > this.pos || !this.isCovered)
                this.nodes.push(new HeightMapText(end - this.pos, -1));
            this.writtenTo = end;
            if (to > end) {
                this.nodes.push(null);
                this.writtenTo++;
                this.lineStart = -1;
            }
        }
        this.pos = to;
    }
    point(from, to, deco) {
        if (from < to || deco.heightRelevant) {
            let height = deco.widget ? Math.max(0, deco.widget.estimatedHeight) : 0;
            let len = to - from;
            if (deco.block) {
                this.addBlock(new HeightMapBlock(len, height, deco.type));
            }
            else if (len || height >= relevantWidgetHeight) {
                this.addLineDeco(height, len);
            }
        }
        else if (to > from) {
            this.span(from, to);
        }
        if (this.lineEnd > -1 && this.lineEnd < this.pos)
            this.lineEnd = this.oracle.doc.lineAt(this.pos).to;
    }
    enterLine() {
        if (this.lineStart > -1)
            return;
        let { from, to } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = from;
        this.lineEnd = to;
        if (this.writtenTo < from) {
            if (this.writtenTo < from - 1 || this.nodes[this.nodes.length - 1] == null)
                this.nodes.push(this.blankContent(this.writtenTo, from - 1));
            this.nodes.push(null);
        }
        if (this.pos > from)
            this.nodes.push(new HeightMapText(this.pos - from, -1));
        this.writtenTo = this.pos;
    }
    blankContent(from, to) {
        let gap = new HeightMapGap(to - from);
        if (this.oracle.doc.lineAt(from).to == to)
            gap.flags |= 4 /* SingleLine */;
        return gap;
    }
    ensureLine() {
        this.enterLine();
        let last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (last instanceof HeightMapText)
            return last;
        let line = new HeightMapText(0, -1);
        this.nodes.push(line);
        return line;
    }
    addBlock(block) {
        this.enterLine();
        if (block.type == BlockType.WidgetAfter && !this.isCovered)
            this.ensureLine();
        this.nodes.push(block);
        this.writtenTo = this.pos = this.pos + block.length;
        if (block.type != BlockType.WidgetBefore)
            this.covering = block;
    }
    addLineDeco(height, length) {
        let line = this.ensureLine();
        line.length += length;
        line.collapsed += length;
        line.widgetHeight = Math.max(line.widgetHeight, height);
        this.writtenTo = this.pos = this.pos + length;
    }
    finish(from) {
        let last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered)
            this.nodes.push(new HeightMapText(0, -1));
        else if (this.writtenTo < this.pos || last == null)
            this.nodes.push(this.blankContent(this.writtenTo, this.pos));
        let pos = from;
        for (let node of this.nodes) {
            if (node instanceof HeightMapText)
                node.updateHeight(this.oracle, pos);
            pos += node ? node.length : 1;
        }
        return this.nodes;
    }
    // Always called with a region that on both sides either stretches
    // to a line break or the end of the document.
    // The returned array uses null to indicate line breaks, but never
    // starts or ends in a line break, or has multiple line breaks next
    // to each other.
    static build(oracle, decorations, from, to) {
        let builder = new NodeBuilder(from, oracle);
        _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.spans(decorations, from, to, builder, 0);
        return builder.finish(from);
    }
}
function heightRelevantDecoChanges(a, b, diff) {
    let comp = new DecorationComparator;
    _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.compare(a, b, diff, comp, 0);
    return comp.changes;
}
class DecorationComparator {
    constructor() {
        this.changes = [];
    }
    compareRange() { }
    comparePoint(from, to, a, b) {
        if (from < to || a && a.heightRelevant || b && b.heightRelevant)
            addRange(from, to, this.changes, 5);
    }
}

function visiblePixelRange(dom, paddingTop) {
    let rect = dom.getBoundingClientRect();
    let left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right);
    let top = Math.max(0, rect.top), bottom = Math.min(innerHeight, rect.bottom);
    for (let parent = dom.parentNode; parent;) { // (Cast to any because TypeScript is useless with Node types)
        if (parent.nodeType == 1) {
            let style = window.getComputedStyle(parent);
            if ((parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) &&
                style.overflow != "visible") {
                let parentRect = parent.getBoundingClientRect();
                left = Math.max(left, parentRect.left);
                right = Math.min(right, parentRect.right);
                top = Math.max(top, parentRect.top);
                bottom = Math.min(bottom, parentRect.bottom);
            }
            parent = style.position == "absolute" || style.position == "fixed" ? parent.offsetParent : parent.parentNode;
        }
        else if (parent.nodeType == 11) { // Shadow root
            parent = parent.host;
        }
        else {
            break;
        }
    }
    return { left: left - rect.left, right: right - rect.left,
        top: top - (rect.top + paddingTop), bottom: bottom - (rect.top + paddingTop) };
}
// Line gaps are placeholder widgets used to hide pieces of overlong
// lines within the viewport, as a kludge to keep the editor
// responsive when a ridiculously long line is loaded into it.
class LineGap {
    constructor(from, to, size) {
        this.from = from;
        this.to = to;
        this.size = size;
    }
    static same(a, b) {
        if (a.length != b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            let gA = a[i], gB = b[i];
            if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size)
                return false;
        }
        return true;
    }
    draw(wrapping) {
        return Decoration.replace({ widget: new LineGapWidget(this.size, wrapping) }).range(this.from, this.to);
    }
}
class LineGapWidget extends WidgetType {
    constructor(size, vertical) {
        super();
        this.size = size;
        this.vertical = vertical;
    }
    eq(other) { return other.size == this.size && other.vertical == this.vertical; }
    toDOM() {
        let elt = document.createElement("div");
        if (this.vertical) {
            elt.style.height = this.size + "px";
        }
        else {
            elt.style.width = this.size + "px";
            elt.style.height = "2px";
            elt.style.display = "inline-block";
        }
        return elt;
    }
    get estimatedHeight() { return this.vertical ? this.size : -1; }
}
class ViewState {
    constructor(state) {
        this.state = state;
        // These are contentDOM-local coordinates
        this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 };
        this.inView = true;
        this.paddingTop = 0;
        this.paddingBottom = 0;
        this.contentWidth = 0;
        this.heightOracle = new HeightOracle;
        // See VP.MaxDOMHeight
        this.scaler = IdScaler;
        this.scrollTo = null;
        // Briefly set to true when printing, to disable viewport limiting
        this.printing = false;
        this.visibleRanges = [];
        // Cursor 'assoc' is only significant when the cursor is on a line
        // wrap point, where it must stick to the character that it is
        // associated with. Since browsers don't provide a reasonable
        // interface to set or query this, when a selection is set that
        // might cause this to be significant, this flag is set. The next
        // measure phase will check whether the cursor is on a line-wrapping
        // boundary and, if so, reset it to make sure it is positioned in
        // the right place.
        this.mustEnforceCursorAssoc = false;
        this.heightMap = HeightMap.empty().applyChanges(state.facet(decorations), _codemirror_text__WEBPACK_IMPORTED_MODULE_3__.Text.empty, this.heightOracle.setDoc(state.doc), [new ChangedRange(0, 0, 0, state.doc.length)]);
        this.viewport = this.getViewport(0, null);
        this.updateForViewport();
        this.lineGaps = this.ensureLineGaps([]);
        this.lineGapDeco = Decoration.set(this.lineGaps.map(gap => gap.draw(false)));
        this.computeVisibleRanges();
    }
    updateForViewport() {
        let viewports = [this.viewport], { main } = this.state.selection;
        for (let i = 0; i <= 1; i++) {
            let pos = i ? main.head : main.anchor;
            if (!viewports.some(({ from, to }) => pos >= from && pos <= to)) {
                let { from, to } = this.lineAt(pos, 0);
                viewports.push(new Viewport(from, to));
            }
        }
        this.viewports = viewports.sort((a, b) => a.from - b.from);
        this.scaler = this.heightMap.height <= 7000000 /* MaxDOMHeight */ ? IdScaler :
            new BigScaler(this.heightOracle.doc, this.heightMap, this.viewports);
    }
    update(update, scrollTo = null) {
        let prev = this.state;
        this.state = update.state;
        let newDeco = this.state.facet(decorations);
        let contentChanges = update.changedRanges;
        let heightChanges = ChangedRange.extendWithRanges(contentChanges, heightRelevantDecoChanges(update.startState.facet(decorations), newDeco, update ? update.changes : _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.ChangeSet.empty(this.state.doc.length)));
        let prevHeight = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(newDeco, prev.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
        if (this.heightMap.height != prevHeight)
            update.flags |= 2 /* Height */;
        let viewport = heightChanges.length ? this.mapViewport(this.viewport, update.changes) : this.viewport;
        if (scrollTo && (scrollTo.head < viewport.from || scrollTo.head > viewport.to) || !this.viewportIsAppropriate(viewport))
            viewport = this.getViewport(0, scrollTo);
        if (!viewport.eq(this.viewport)) {
            this.viewport = viewport;
            update.flags |= 4 /* Viewport */;
        }
        this.updateForViewport();
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000 /* MinViewPort */)
            update.flags |= this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, update.changes)));
        this.computeVisibleRanges();
        if (scrollTo)
            this.scrollTo = scrollTo;
        if (!this.mustEnforceCursorAssoc && update.selectionSet && update.view.lineWrapping &&
            update.state.selection.main.empty && update.state.selection.main.assoc)
            this.mustEnforceCursorAssoc = true;
    }
    measure(docView, repeated) {
        let dom = docView.dom, whiteSpace = "", direction = Direction.LTR;
        if (!repeated) {
            // Vertical padding
            let style = window.getComputedStyle(dom);
            whiteSpace = style.whiteSpace, direction = (style.direction == "rtl" ? Direction.RTL : Direction.LTR);
            this.paddingTop = parseInt(style.paddingTop) || 0;
            this.paddingBottom = parseInt(style.paddingBottom) || 0;
        }
        // Pixel viewport
        let pixelViewport = this.printing ? { top: -1e8, bottom: 1e8, left: -1e8, right: 1e8 } : visiblePixelRange(dom, this.paddingTop);
        let dTop = pixelViewport.top - this.pixelViewport.top, dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
        this.pixelViewport = pixelViewport;
        this.inView = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (!this.inView)
            return 0;
        let lineHeights = docView.measureVisibleLineHeights();
        let refresh = false, bias = 0, result = 0, oracle = this.heightOracle;
        if (!repeated) {
            let contentWidth = docView.dom.clientWidth;
            if (oracle.mustRefresh(lineHeights, whiteSpace, direction) ||
                oracle.lineWrapping && Math.abs(contentWidth - this.contentWidth) > oracle.charWidth) {
                let { lineHeight, charWidth } = docView.measureTextSize();
                refresh = oracle.refresh(whiteSpace, direction, lineHeight, charWidth, contentWidth / charWidth, lineHeights);
                if (refresh) {
                    docView.minWidth = 0;
                    result |= 16 /* Geometry */;
                }
            }
            if (this.contentWidth != contentWidth) {
                this.contentWidth = contentWidth;
                result |= 16 /* Geometry */;
            }
            if (dTop > 0 && dBottom > 0)
                bias = Math.max(dTop, dBottom);
            else if (dTop < 0 && dBottom < 0)
                bias = Math.min(dTop, dBottom);
        }
        oracle.heightChanged = false;
        this.heightMap = this.heightMap.updateHeight(oracle, 0, refresh, new MeasuredHeights(this.viewport.from, lineHeights));
        if (oracle.heightChanged)
            result |= 2 /* Height */;
        if (!this.viewportIsAppropriate(this.viewport, bias) ||
            this.scrollTo && (this.scrollTo.head < this.viewport.from || this.scrollTo.head > this.viewport.to)) {
            let newVP = this.getViewport(bias, this.scrollTo);
            if (newVP.from != this.viewport.from || newVP.to != this.viewport.to) {
                this.viewport = newVP;
                result |= 4 /* Viewport */;
            }
        }
        this.updateForViewport();
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000 /* MinViewPort */)
            result |= this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps));
        this.computeVisibleRanges();
        if (this.mustEnforceCursorAssoc) {
            this.mustEnforceCursorAssoc = false;
            // This is done in the read stage, because moving the selection
            // to a line end is going to trigger a layout anyway, so it
            // can't be a pure write. It should be rare that it does any
            // writing.
            docView.enforceCursorAssoc();
        }
        return result;
    }
    get visibleTop() { return this.scaler.fromDOM(this.pixelViewport.top, 0); }
    get visibleBottom() { return this.scaler.fromDOM(this.pixelViewport.bottom, 0); }
    getViewport(bias, scrollTo) {
        // This will divide VP.Margin between the top and the
        // bottom, depending on the bias (the change in viewport position
        // since the last update). It'll hold a number between 0 and 1
        let marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1000 /* Margin */ / 2));
        let map = this.heightMap, doc = this.state.doc, { visibleTop, visibleBottom } = this;
        let viewport = new Viewport(map.lineAt(visibleTop - marginTop * 1000 /* Margin */, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(visibleBottom + (1 - marginTop) * 1000 /* Margin */, QueryType.ByHeight, doc, 0, 0).to);
        // If scrollTo is given, make sure the viewport includes that position
        if (scrollTo) {
            if (scrollTo.head < viewport.from) {
                let { top: newTop } = map.lineAt(scrollTo.head, QueryType.ByPos, doc, 0, 0);
                viewport = new Viewport(map.lineAt(newTop - 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newTop + (visibleBottom - visibleTop) + 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).to);
            }
            else if (scrollTo.head > viewport.to) {
                let { bottom: newBottom } = map.lineAt(scrollTo.head, QueryType.ByPos, doc, 0, 0);
                viewport = new Viewport(map.lineAt(newBottom - (visibleBottom - visibleTop) - 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newBottom + 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).to);
            }
        }
        return viewport;
    }
    mapViewport(viewport, changes) {
        let from = changes.mapPos(viewport.from, -1), to = changes.mapPos(viewport.to, 1);
        return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
    }
    // Checks if a given viewport covers the visible part of the
    // document and not too much beyond that.
    viewportIsAppropriate({ from, to }, bias = 0) {
        let { top } = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0);
        let { bottom } = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0);
        let { visibleTop, visibleBottom } = this;
        return (from == 0 || top <= visibleTop - Math.max(10 /* MinCoverMargin */, Math.min(-bias, 250 /* MaxCoverMargin */))) &&
            (to == this.state.doc.length ||
                bottom >= visibleBottom + Math.max(10 /* MinCoverMargin */, Math.min(bias, 250 /* MaxCoverMargin */))) &&
            (top > visibleTop - 2 * 1000 /* Margin */ && bottom < visibleBottom + 2 * 1000 /* Margin */);
    }
    mapLineGaps(gaps, changes) {
        if (!gaps.length || changes.empty)
            return gaps;
        let mapped = [];
        for (let gap of gaps)
            if (!changes.touchesRange(gap.from, gap.to))
                mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
        return mapped;
    }
    // Computes positions in the viewport where the start or end of a
    // line should be hidden, trying to reuse existing line gaps when
    // appropriate to avoid unneccesary redraws.
    // Uses crude character-counting for the positioning and sizing,
    // since actual DOM coordinates aren't always available and
    // predictable. Relies on generous margins (see LG.Margin) to hide
    // the artifacts this might produce from the user.
    ensureLineGaps(current) {
        let gaps = [];
        // This won't work at all in predominantly right-to-left text.
        if (this.heightOracle.direction != Direction.LTR)
            return gaps;
        this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, line => {
            if (line.length < 10000 /* Margin */)
                return;
            let structure = lineStructure(line.from, line.to, this.state);
            if (structure.total < 10000 /* Margin */)
                return;
            let viewFrom, viewTo;
            if (this.heightOracle.lineWrapping) {
                if (line.from != this.viewport.from)
                    viewFrom = line.from;
                else
                    viewFrom = findPosition(structure, (this.visibleTop - line.top) / line.height);
                if (line.to != this.viewport.to)
                    viewTo = line.to;
                else
                    viewTo = findPosition(structure, (this.visibleBottom - line.top) / line.height);
            }
            else {
                let totalWidth = structure.total * this.heightOracle.charWidth;
                viewFrom = findPosition(structure, this.pixelViewport.left / totalWidth);
                viewTo = findPosition(structure, this.pixelViewport.right / totalWidth);
            }
            let sel = this.state.selection.main;
            // Make sure the gap doesn't cover a selection end
            if (sel.from <= viewFrom && sel.to >= line.from)
                viewFrom = sel.from;
            if (sel.from <= line.to && sel.to >= viewTo)
                viewTo = sel.to;
            let gapTo = viewFrom - 10000 /* Margin */, gapFrom = viewTo + 10000 /* Margin */;
            if (gapTo > line.from + 5000 /* HalfMargin */)
                gaps.push(find(current, gap => gap.from == line.from && gap.to > gapTo - 5000 /* HalfMargin */ && gap.to < gapTo + 5000 /* HalfMargin */) ||
                    new LineGap(line.from, gapTo, this.gapSize(line, gapTo, true, structure)));
            if (gapFrom < line.to - 5000 /* HalfMargin */)
                gaps.push(find(current, gap => gap.to == line.to && gap.from > gapFrom - 5000 /* HalfMargin */ &&
                    gap.from < gapFrom + 5000 /* HalfMargin */) ||
                    new LineGap(gapFrom, line.to, this.gapSize(line, gapFrom, false, structure)));
        });
        return gaps;
    }
    gapSize(line, pos, start, structure) {
        if (this.heightOracle.lineWrapping) {
            let height = line.height * findFraction(structure, pos);
            return start ? height : line.height - height;
        }
        else {
            let ratio = findFraction(structure, pos);
            return structure.total * this.heightOracle.charWidth * (start ? ratio : 1 - ratio);
        }
    }
    updateLineGaps(gaps) {
        if (!LineGap.same(gaps, this.lineGaps)) {
            this.lineGaps = gaps;
            this.lineGapDeco = Decoration.set(gaps.map(gap => gap.draw(this.heightOracle.lineWrapping)));
            return 8 /* LineGaps */;
        }
        return 0;
    }
    computeVisibleRanges() {
        let deco = this.state.facet(decorations);
        if (this.lineGaps.length)
            deco = deco.concat(this.lineGapDeco);
        let ranges = [];
        _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.spans(deco, this.viewport.from, this.viewport.to, {
            span(from, to) { ranges.push({ from, to }); },
            point() { }
        }, 20);
        this.visibleRanges = ranges;
    }
    lineAt(pos, editorTop) {
        editorTop += this.paddingTop;
        return scaleBlock(this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, editorTop, 0), this.scaler, editorTop);
    }
    lineAtHeight(height, editorTop) {
        editorTop += this.paddingTop;
        return scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(height, editorTop), QueryType.ByHeight, this.state.doc, editorTop, 0), this.scaler, editorTop);
    }
    blockAtHeight(height, editorTop) {
        editorTop += this.paddingTop;
        return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(height, editorTop), this.state.doc, editorTop, 0), this.scaler, editorTop);
    }
    forEachLine(from, to, f, editorTop) {
        editorTop += this.paddingTop;
        return this.heightMap.forEachLine(from, to, this.state.doc, editorTop, 0, this.scaler.scale == 1 ? f : b => f(scaleBlock(b, this.scaler, editorTop)));
    }
    get contentHeight() {
        return this.domHeight + this.paddingTop + this.paddingBottom;
    }
    get domHeight() {
        return this.scaler.toDOM(this.heightMap.height, this.paddingTop);
    }
}
/**
Indicates the range of the document that is in the visible
viewport.
*/
class Viewport {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    eq(b) { return this.from == b.from && this.to == b.to; }
}
function lineStructure(from, to, state) {
    let ranges = [], pos = from, total = 0;
    _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSet.spans(state.facet(decorations), from, to, {
        span() { },
        point(from, to) {
            if (from > pos) {
                ranges.push({ from: pos, to: from });
                total += from - pos;
            }
            pos = to;
        }
    }, 20); // We're only interested in collapsed ranges of a significant size
    if (pos < to) {
        ranges.push({ from: pos, to });
        total += to - pos;
    }
    return { total, ranges };
}
function findPosition({ total, ranges }, ratio) {
    if (ratio <= 0)
        return ranges[0].from;
    if (ratio >= 1)
        return ranges[ranges.length - 1].to;
    let dist = Math.floor(total * ratio);
    for (let i = 0;; i++) {
        let { from, to } = ranges[i], size = to - from;
        if (dist <= size)
            return from + dist;
        dist -= size;
    }
}
function findFraction(structure, pos) {
    let counted = 0;
    for (let { from, to } of structure.ranges) {
        if (pos <= to) {
            counted += pos - from;
            break;
        }
        counted += to - from;
    }
    return counted / structure.total;
}
function find(array, f) {
    for (let val of array)
        if (f(val))
            return val;
    return undefined;
}
// Don't scale when the document height is within the range of what
// the DOM can handle.
const IdScaler = {
    toDOM(n) { return n; },
    fromDOM(n) { return n; },
    scale: 1
};
// When the height is too big (> VP.MaxDOMHeight), scale down the
// regions outside the viewports so that the total height is
// VP.MaxDOMHeight.
class BigScaler {
    constructor(doc, heightMap, viewports) {
        let vpHeight = 0, base = 0, domBase = 0;
        this.viewports = viewports.map(({ from, to }) => {
            let top = heightMap.lineAt(from, QueryType.ByPos, doc, 0, 0).top;
            let bottom = heightMap.lineAt(to, QueryType.ByPos, doc, 0, 0).bottom;
            vpHeight += bottom - top;
            return { from, to, top, bottom, domTop: 0, domBottom: 0 };
        });
        this.scale = (7000000 /* MaxDOMHeight */ - vpHeight) / (heightMap.height - vpHeight);
        for (let obj of this.viewports) {
            obj.domTop = domBase + (obj.top - base) * this.scale;
            domBase = obj.domBottom = obj.domTop + (obj.bottom - obj.top);
            base = obj.bottom;
        }
    }
    toDOM(n, top) {
        n -= top;
        for (let i = 0, base = 0, domBase = 0;; i++) {
            let vp = i < this.viewports.length ? this.viewports[i] : null;
            if (!vp || n < vp.top)
                return domBase + (n - base) * this.scale + top;
            if (n <= vp.bottom)
                return vp.domTop + (n - vp.top) + top;
            base = vp.bottom;
            domBase = vp.domBottom;
        }
    }
    fromDOM(n, top) {
        n -= top;
        for (let i = 0, base = 0, domBase = 0;; i++) {
            let vp = i < this.viewports.length ? this.viewports[i] : null;
            if (!vp || n < vp.domTop)
                return base + (n - domBase) / this.scale + top;
            if (n <= vp.domBottom)
                return vp.top + (n - vp.domTop) + top;
            base = vp.bottom;
            domBase = vp.domBottom;
        }
    }
}
function scaleBlock(block, scaler, top) {
    if (scaler.scale == 1)
        return block;
    let bTop = scaler.toDOM(block.top, top), bBottom = scaler.toDOM(block.bottom, top);
    return new BlockInfo(block.from, block.length, bTop, bBottom - bTop, Array.isArray(block.type) ? block.type.map(b => scaleBlock(b, scaler, top)) : block.type);
}

const theme = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({ combine: strs => strs.join(" ") });
const darkTheme = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({ combine: values => values.indexOf(true) > -1 });
const baseThemeID = /*@__PURE__*/style_mod__WEBPACK_IMPORTED_MODULE_0__.StyleModule.newName(), baseLightID = /*@__PURE__*/style_mod__WEBPACK_IMPORTED_MODULE_0__.StyleModule.newName(), baseDarkID = /*@__PURE__*/style_mod__WEBPACK_IMPORTED_MODULE_0__.StyleModule.newName();
const lightDarkIDs = { "&light": "." + baseLightID, "&dark": "." + baseDarkID };
function buildTheme(main, spec, scopes) {
    return new style_mod__WEBPACK_IMPORTED_MODULE_0__.StyleModule(spec, {
        finish(sel) {
            return /&/.test(sel) ? sel.replace(/&\w*/, m => {
                if (m == "&")
                    return main;
                if (!scopes || !scopes[m])
                    throw new RangeError(`Unsupported selector: ${m}`);
                return scopes[m];
            }) : main + " " + sel;
        }
    });
}
const baseTheme = /*@__PURE__*/buildTheme("." + baseThemeID, {
    "&": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": {
            // Provide a simple default outline to make sure a focused
            // editor is visually distinct. Can't leave the default behavior
            // because that will apply to the content element, which is
            // inside the scrollable container and doesn't include the
            // gutters. We also can't use an 'auto' outline, since those
            // are, for some reason, drawn behind the element content, which
            // will cause things like the active line background to cover
            // the outline (#297).
            outline: "1px dotted #212121"
        },
        display: "flex !important",
        flexDirection: "column"
    },
    ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0
    },
    ".cm-content": {
        margin: 0,
        flexGrow: 2,
        minHeight: "100%",
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        padding: "4px 0",
        outline: "none"
    },
    ".cm-lineWrapping": {
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowWrap: "anywhere"
    },
    "&light .cm-content": { caretColor: "black" },
    "&dark .cm-content": { caretColor: "white" },
    ".cm-line": {
        display: "block",
        padding: "0 2px 0 4px"
    },
    ".cm-selectionLayer": {
        zIndex: -1,
        contain: "size style"
    },
    ".cm-selectionBackground": {
        position: "absolute",
    },
    "&light .cm-selectionBackground": {
        background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
        background: "#222"
    },
    "&light.cm-focused .cm-selectionBackground": {
        background: "#d7d4f0"
    },
    "&dark.cm-focused .cm-selectionBackground": {
        background: "#233"
    },
    ".cm-cursorLayer": {
        zIndex: 100,
        contain: "size style",
        pointerEvents: "none"
    },
    "&.cm-focused .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite"
    },
    // Two animations defined so that we can switch between them to
    // restart the animation without forcing another style
    // recomputation.
    "@keyframes cm-blink": { "0%": {}, "50%": { visibility: "hidden" }, "100%": {} },
    "@keyframes cm-blink2": { "0%": {}, "50%": { visibility: "hidden" }, "100%": {} },
    ".cm-cursor": {
        position: "absolute",
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none",
        display: "none"
    },
    "&dark .cm-cursor": {
        borderLeftColor: "#444"
    },
    "&.cm-focused .cm-cursor": {
        display: "block"
    },
    "&light .cm-activeLine": { backgroundColor: "#f3f9ff" },
    "&dark .cm-activeLine": { backgroundColor: "#223039" },
    "&light .cm-specialChar": { color: "red" },
    "&dark .cm-specialChar": { color: "#f78" },
    ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom"
    },
    ".cm-placeholder": {
        color: "#888",
        display: "inline-block"
    },
    ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "3px"
    },
    "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
        }
    },
    "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#111, #333)"
        }
    },
    ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em"
    },
    "&light .cm-textfield": {
        backgroundColor: "white"
    },
    "&dark .cm-textfield": {
        border: "1px solid #555",
        backgroundColor: "inherit"
    }
}, lightDarkIDs);

const observeOptions = {
    childList: true,
    characterData: true,
    subtree: true,
    characterDataOldValue: true
};
// IE11 has very broken mutation observers, so we also listen to
// DOMCharacterDataModified there
const useCharData = browser.ie && browser.ie_version <= 11;
class DOMObserver {
    constructor(view, onChange, onScrollChanged) {
        this.view = view;
        this.onChange = onChange;
        this.onScrollChanged = onScrollChanged;
        this.active = false;
        this.ignoreSelection = new DOMSelection;
        this.delayedFlush = -1;
        this.queue = [];
        this.lastFlush = 0;
        this.scrollTargets = [];
        this.intersection = null;
        this.intersecting = false;
        // Used to work around a Safari Selection/shadow DOM bug (#414)
        this._selectionRange = null;
        // Timeout for scheduling check of the parents that need scroll handlers
        this.parentCheck = -1;
        this.dom = view.contentDOM;
        this.observer = new MutationObserver(mutations => {
            for (let mut of mutations)
                this.queue.push(mut);
            this._selectionRange = null;
            // IE11 will sometimes (on typing over a selection or
            // backspacing out a single character text node) call the
            // observer callback before actually updating the DOM.
            //
            // Unrelatedly, iOS Safari will, when ending a composition,
            // sometimes first clear it, deliver the mutations, and then
            // reinsert the finished text. CodeMirror's handling of the
            // deletion will prevent the reinsertion from happening,
            // breaking composition.
            if ((browser.ie && browser.ie_version <= 11 || browser.ios && view.composing) &&
                mutations.some(m => m.type == "childList" && m.removedNodes.length ||
                    m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length))
                this.flushSoon();
            else
                this.flush();
        });
        if (useCharData)
            this.onCharData = (event) => {
                this.queue.push({ target: event.target,
                    type: "characterData",
                    oldValue: event.prevValue });
                this.flushSoon();
            };
        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.start();
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll);
        if (typeof IntersectionObserver == "function") {
            this.intersection = new IntersectionObserver(entries => {
                if (this.parentCheck < 0)
                    this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1000);
                if (entries[entries.length - 1].intersectionRatio > 0 != this.intersecting) {
                    this.intersecting = !this.intersecting;
                    if (this.intersecting != this.view.inView)
                        this.onScrollChanged(document.createEvent("Event"));
                }
            }, {});
            this.intersection.observe(this.dom);
        }
        this.listenForScroll();
    }
    onScroll(e) {
        if (this.intersecting)
            this.flush();
        this.onScrollChanged(e);
    }
    onSelectionChange(event) {
        if (this.lastFlush < Date.now() - 50)
            this._selectionRange = null;
        let { view } = this, sel = this.selectionRange;
        if (view.state.facet(editable) ? view.root.activeElement != this.dom : !hasSelection(view.dom, sel))
            return;
        let context = sel.anchorNode && view.docView.nearest(sel.anchorNode);
        if (context && context.ignoreEvent(event))
            return;
        // Deletions on IE11 fire their events in the wrong order, giving
        // us a selection change event before the DOM changes are
        // reported.
        // (Selection.isCollapsed isn't reliable on IE)
        if (browser.ie && browser.ie_version <= 11 && !view.state.selection.main.empty &&
            sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset))
            this.flushSoon();
        else
            this.flush();
    }
    get selectionRange() {
        if (!this._selectionRange) {
            let { root } = this.view, sel = getSelection(root);
            // The Selection object is broken in shadow roots in Safari. See
            // https://github.com/codemirror/codemirror.next/issues/414
            if (browser.safari && root.nodeType == 11 && deepActiveElement() == this.view.contentDOM)
                sel = safariSelectionRangeHack(this.view) || sel;
            this._selectionRange = sel;
        }
        return this._selectionRange;
    }
    setSelectionRange(anchor, head) {
        var _a;
        if (!((_a = this._selectionRange) === null || _a === void 0 ? void 0 : _a.type))
            this._selectionRange = { anchorNode: anchor.node, anchorOffset: anchor.offset,
                focusNode: head.node, focusOffset: head.offset };
    }
    listenForScroll() {
        this.parentCheck = -1;
        let i = 0, changed = null;
        for (let dom = this.dom; dom;) {
            if (dom.nodeType == 1) {
                if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom)
                    i++;
                else if (!changed)
                    changed = this.scrollTargets.slice(0, i);
                if (changed)
                    changed.push(dom);
                dom = dom.assignedSlot || dom.parentNode;
            }
            else if (dom.nodeType == 11) { // Shadow root
                dom = dom.host;
            }
            else {
                break;
            }
        }
        if (i < this.scrollTargets.length && !changed)
            changed = this.scrollTargets.slice(0, i);
        if (changed) {
            for (let dom of this.scrollTargets)
                dom.removeEventListener("scroll", this.onScroll);
            for (let dom of this.scrollTargets = changed)
                dom.addEventListener("scroll", this.onScroll);
        }
    }
    ignore(f) {
        if (!this.active)
            return f();
        try {
            this.stop();
            return f();
        }
        finally {
            this.start();
            this.clear();
        }
    }
    start() {
        if (this.active)
            return;
        this.observer.observe(this.dom, observeOptions);
        this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        if (useCharData)
            this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
        this.active = true;
    }
    stop() {
        if (!this.active)
            return;
        this.active = false;
        this.observer.disconnect();
        this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        if (useCharData)
            this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
    clearSelection() {
        this.ignoreSelection.set(this.selectionRange);
    }
    // Throw away any pending changes
    clear() {
        this.observer.takeRecords();
        this.queue.length = 0;
        this.clearSelection();
    }
    flushSoon() {
        if (this.delayedFlush < 0)
            this.delayedFlush = window.setTimeout(() => { this.delayedFlush = -1; this.flush(); }, 20);
    }
    forceFlush() {
        if (this.delayedFlush >= 0) {
            window.clearTimeout(this.delayedFlush);
            this.delayedFlush = -1;
            this.flush();
        }
    }
    // Apply pending changes, if any
    flush() {
        if (this.delayedFlush >= 0)
            return;
        this.lastFlush = Date.now();
        let records = this.queue;
        for (let mut of this.observer.takeRecords())
            records.push(mut);
        if (records.length)
            this.queue = [];
        let selection = this.selectionRange;
        let newSel = !this.ignoreSelection.eq(selection) && hasSelection(this.dom, selection);
        if (records.length == 0 && !newSel)
            return;
        let from = -1, to = -1, typeOver = false;
        for (let record of records) {
            let range = this.readMutation(record);
            if (!range)
                continue;
            if (range.typeOver)
                typeOver = true;
            if (from == -1) {
                ({ from, to } = range);
            }
            else {
                from = Math.min(range.from, from);
                to = Math.max(range.to, to);
            }
        }
        let startState = this.view.state;
        if (from > -1 || newSel)
            this.onChange(from, to, typeOver);
        if (this.view.state == startState) { // The view wasn't updated
            if (this.view.docView.dirty) {
                this.ignore(() => this.view.docView.sync());
                this.view.docView.dirty = 0 /* Not */;
            }
            if (newSel)
                this.view.docView.updateSelection();
        }
        this.clearSelection();
    }
    readMutation(rec) {
        let cView = this.view.docView.nearest(rec.target);
        if (!cView || cView.ignoreMutation(rec))
            return null;
        cView.markDirty();
        if (rec.type == "childList") {
            let childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
            let childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
            return { from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
                to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd, typeOver: false };
        }
        else { // "characterData"
            return { from: cView.posAtStart, to: cView.posAtEnd, typeOver: rec.target.nodeValue == rec.oldValue };
        }
    }
    destroy() {
        this.stop();
        if (this.intersection)
            this.intersection.disconnect();
        for (let dom of this.scrollTargets)
            dom.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("scroll", this.onScroll);
        clearTimeout(this.parentCheck);
    }
}
function findChild(cView, dom, dir) {
    while (dom) {
        let curView = ContentView.get(dom);
        if (curView && curView.parent == cView)
            return curView;
        let parent = dom.parentNode;
        dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
    }
    return null;
}
function safariSelectionRangeHack(view) {
    let found = null;
    // Because Safari (at least in 2018-2021) doesn't provide regular
    // access to the selection inside a shadowroot, we have to perform a
    // ridiculous hack to get at it—using `execCommand` to trigger a
    // `beforeInput` event so that we can read the target range from the
    // event.
    function read(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        found = event.getTargetRanges()[0];
    }
    view.contentDOM.addEventListener("beforeinput", read, true);
    document.execCommand("indent");
    view.contentDOM.removeEventListener("beforeinput", read, true);
    if (!found)
        return null;
    let anchorNode = found.startContainer, anchorOffset = found.startOffset;
    let focusNode = found.endContainer, focusOffset = found.endOffset;
    let curAnchor = view.docView.domAtPos(view.state.selection.main.anchor);
    // Since such a range doesn't distinguish between anchor and head,
    // use a heuristic that flips it around if its end matches the
    // current anchor.
    if (isEquivalentPosition(curAnchor.node, curAnchor.offset, focusNode, focusOffset))
        [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
    return { anchorNode, anchorOffset, focusNode, focusOffset };
}

function applyDOMChange(view, start, end, typeOver) {
    let change, newSel;
    let sel = view.state.selection.main, bounds;
    if (start > -1 && (bounds = view.docView.domBoundsAround(start, end, 0))) {
        let { from, to } = bounds;
        let selPoints = view.docView.impreciseHead || view.docView.impreciseAnchor ? [] : selectionPoints(view);
        let reader = new DOMReader(selPoints, view);
        reader.readRange(bounds.startDOM, bounds.endDOM);
        newSel = selectionFromPoints(selPoints, from);
        let preferredPos = sel.from, preferredSide = null;
        // Prefer anchoring to end when Backspace is pressed (or, on
        // Android, when something was deleted)
        if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100 ||
            browser.android && reader.text.length < to - from) {
            preferredPos = sel.to;
            preferredSide = "end";
        }
        let diff = findDiff(view.state.sliceDoc(from, to), reader.text, preferredPos - from, preferredSide);
        if (diff)
            change = { from: from + diff.from, to: from + diff.toA,
                insert: view.state.toText(reader.text.slice(diff.from, diff.toB)) };
    }
    else if (view.hasFocus || !view.state.facet(editable)) {
        let domSel = view.observer.selectionRange;
        let { impreciseHead: iHead, impreciseAnchor: iAnchor } = view.docView;
        let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset ||
            !contains(view.contentDOM, domSel.focusNode)
            ? view.state.selection.main.head
            : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
        let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset ||
            !contains(view.contentDOM, domSel.anchorNode)
            ? view.state.selection.main.anchor
            : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
        if (head != sel.head || anchor != sel.anchor)
            newSel = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.single(anchor, head);
    }
    if (!change && !newSel)
        return;
    // Heuristic to notice typing over a selected character
    if (!change && typeOver && !sel.empty && newSel && newSel.main.empty)
        change = { from: sel.from, to: sel.to, insert: view.state.doc.slice(sel.from, sel.to) };
    // If the change is inside the selection and covers most of it,
    // assume it is a selection replace (with identical characters at
    // the start/end not included in the diff)
    else if (change && change.from >= sel.from && change.to <= sel.to &&
        (change.from != sel.from || change.to != sel.to) &&
        (sel.to - sel.from) - (change.to - change.from) <= 4)
        change = {
            from: sel.from, to: sel.to,
            insert: view.state.doc.slice(sel.from, change.from).append(change.insert).append(view.state.doc.slice(change.to, sel.to))
        };
    if (change) {
        let startState = view.state;
        // Android browsers don't fire reasonable key events for enter,
        // backspace, or delete. So this detects changes that look like
        // they're caused by those keys, and reinterprets them as key
        // events.
        if (browser.android &&
            ((change.from == sel.from && change.to == sel.to &&
                change.insert.length == 1 && change.insert.lines == 2 &&
                dispatchKey(view.contentDOM, "Enter", 13)) ||
                (change.from == sel.from - 1 && change.to == sel.to && change.insert.length == 0 &&
                    dispatchKey(view.contentDOM, "Backspace", 8)) ||
                (change.from == sel.from && change.to == sel.to + 1 && change.insert.length == 0 &&
                    dispatchKey(view.contentDOM, "Delete", 46))) ||
            browser.ios && view.inputState.flushIOSKey(view))
            return;
        let text = change.insert.toString();
        if (view.state.facet(inputHandler).some(h => h(view, change.from, change.to, text)))
            return;
        if (view.inputState.composing >= 0)
            view.inputState.composing++;
        let tr;
        if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3 &&
            (!newSel || newSel.main.empty && newSel.main.from == change.from + change.insert.length)) {
            let before = sel.from < change.from ? startState.sliceDoc(sel.from, change.from) : "";
            let after = sel.to > change.to ? startState.sliceDoc(change.to, sel.to) : "";
            tr = startState.replaceSelection(view.state.toText(before + change.insert.sliceString(0, undefined, view.state.lineBreak) +
                after));
        }
        else {
            let changes = startState.changes(change);
            tr = {
                changes,
                selection: newSel && !startState.selection.main.eq(newSel.main) && newSel.main.to <= changes.newLength
                    ? startState.selection.replaceRange(newSel.main) : undefined
            };
        }
        view.dispatch(tr, { scrollIntoView: true, annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent.of("input") });
    }
    else if (newSel && !newSel.main.eq(sel)) {
        let scrollIntoView = false, annotations;
        if (view.inputState.lastSelectionTime > Date.now() - 50) {
            if (view.inputState.lastSelectionOrigin == "keyboardselection")
                scrollIntoView = true;
            else
                annotations = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction.userEvent.of(view.inputState.lastSelectionOrigin);
        }
        view.dispatch({ selection: newSel, scrollIntoView, annotations });
    }
}
function findDiff(a, b, preferredPos, preferredSide) {
    let minLen = Math.min(a.length, b.length);
    let from = 0;
    while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from))
        from++;
    if (from == minLen && a.length == b.length)
        return null;
    let toA = a.length, toB = b.length;
    while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
        toA--;
        toB--;
    }
    if (preferredSide == "end") {
        let adjust = Math.max(0, from - Math.min(toA, toB));
        preferredPos -= toA + adjust - from;
    }
    if (toA < from && a.length < b.length) {
        let move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
        from -= move;
        toB = from + (toB - toA);
        toA = from;
    }
    else if (toB < from) {
        let move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;
        from -= move;
        toA = from + (toA - toB);
        toB = from;
    }
    return { from, toA, toB };
}
class DOMReader {
    constructor(points, view) {
        this.points = points;
        this.view = view;
        this.text = "";
        this.lineBreak = view.state.lineBreak;
    }
    readRange(start, end) {
        if (!start)
            return;
        let parent = start.parentNode;
        for (let cur = start;;) {
            this.findPointBefore(parent, cur);
            this.readNode(cur);
            let next = cur.nextSibling;
            if (next == end)
                break;
            let view = ContentView.get(cur), nextView = ContentView.get(next);
            if ((view ? view.breakAfter : isBlockElement(cur)) ||
                ((nextView ? nextView.breakAfter : isBlockElement(next)) && !(cur.nodeName == "BR" && !cur.cmIgnore)))
                this.text += this.lineBreak;
            cur = next;
        }
        this.findPointBefore(parent, end);
    }
    readNode(node) {
        if (node.cmIgnore)
            return;
        let view = ContentView.get(node);
        let fromView = view && view.overrideDOMText;
        let text;
        if (fromView != null)
            text = fromView.sliceString(0, undefined, this.lineBreak);
        else if (node.nodeType == 3)
            text = node.nodeValue;
        else if (node.nodeName == "BR")
            text = node.nextSibling ? this.lineBreak : "";
        else if (node.nodeType == 1)
            this.readRange(node.firstChild, null);
        if (text != null) {
            this.findPointIn(node, text.length);
            this.text += text;
            // Chrome inserts two newlines when pressing shift-enter at the
            // end of a line. This drops one of those.
            if (browser.chrome && this.view.inputState.lastKeyCode == 13 && !node.nextSibling && /\n\n$/.test(this.text))
                this.text = this.text.slice(0, -1);
        }
    }
    findPointBefore(node, next) {
        for (let point of this.points)
            if (point.node == node && node.childNodes[point.offset] == next)
                point.pos = this.text.length;
    }
    findPointIn(node, maxLen) {
        for (let point of this.points)
            if (point.node == node)
                point.pos = this.text.length + Math.min(point.offset, maxLen);
    }
}
function isBlockElement(node) {
    return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
}
class DOMPoint {
    constructor(node, offset) {
        this.node = node;
        this.offset = offset;
        this.pos = -1;
    }
}
function selectionPoints(view) {
    let result = [];
    if (view.root.activeElement != view.contentDOM)
        return result;
    let { anchorNode, anchorOffset, focusNode, focusOffset } = view.observer.selectionRange;
    if (anchorNode) {
        result.push(new DOMPoint(anchorNode, anchorOffset));
        if (focusNode != anchorNode || focusOffset != anchorOffset)
            result.push(new DOMPoint(focusNode, focusOffset));
    }
    return result;
}
function selectionFromPoints(points, base) {
    if (points.length == 0)
        return null;
    let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;
    return anchor > -1 && head > -1 ? _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.single(anchor + base, head + base) : null;
}

// The editor's update state machine looks something like this:
//
//     Idle → Updating ⇆ Idle (unchecked) → Measuring → Idle
//                                         ↑      ↓
//                                         Updating (measure)
//
// The difference between 'Idle' and 'Idle (unchecked)' lies in
// whether a layout check has been scheduled. A regular update through
// the `update` method updates the DOM in a write-only fashion, and
// relies on a check (scheduled with `requestAnimationFrame`) to make
// sure everything is where it should be and the viewport covers the
// visible code. That check continues to measure and then optionally
// update until it reaches a coherent state.
/**
An editor view represents the editor's user interface. It holds
the editable DOM surface, and possibly other elements such as the
line number gutter. It handles events and dispatches state
transactions for editing actions.
*/
class EditorView {
    /**
    Construct a new view. You'll usually want to put `view.dom` into
    your document after creating a view, so that the user can see
    it.
    */
    constructor(
    /**
    Initialization options.
    */
    config = {}) {
        this.plugins = [];
        this.editorAttrs = {};
        this.contentAttrs = {};
        this.bidiCache = [];
        /**
        @internal
        */
        this.updateState = 2 /* Updating */;
        /**
        @internal
        */
        this.measureScheduled = -1;
        /**
        @internal
        */
        this.measureRequests = [];
        this.contentDOM = document.createElement("div");
        this.scrollDOM = document.createElement("div");
        this.scrollDOM.tabIndex = -1;
        this.scrollDOM.className = "cm-scroller";
        this.scrollDOM.appendChild(this.contentDOM);
        this.announceDOM = document.createElement("div");
        this.announceDOM.style.cssText = "position: absolute; top: -10000px";
        this.announceDOM.setAttribute("aria-live", "polite");
        this.dom = document.createElement("div");
        this.dom.appendChild(this.announceDOM);
        this.dom.appendChild(this.scrollDOM);
        this._dispatch = config.dispatch || ((tr) => this.update([tr]));
        this.dispatch = this.dispatch.bind(this);
        this.root = (config.root || document);
        this.viewState = new ViewState(config.state || _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorState.create());
        this.plugins = this.state.facet(viewPlugin).map(spec => new PluginInstance(spec).update(this));
        this.observer = new DOMObserver(this, (from, to, typeOver) => {
            applyDOMChange(this, from, to, typeOver);
        }, event => {
            this.inputState.runScrollHandlers(this, event);
            if (this.observer.intersecting)
                this.measure();
        });
        this.inputState = new InputState(this);
        this.docView = new DocView(this);
        this.mountStyles();
        this.updateAttrs();
        this.updateState = 0 /* Idle */;
        ensureGlobalHandler();
        this.requestMeasure();
        if (config.parent)
            config.parent.appendChild(this.dom);
    }
    /**
    The current editor state.
    */
    get state() { return this.viewState.state; }
    /**
    To be able to display large documents without consuming too much
    memory or overloading the browser, CodeMirror only draws the
    code that is visible (plus a margin around it) to the DOM. This
    property tells you the extent of the current drawn viewport, in
    document positions.
    */
    get viewport() { return this.viewState.viewport; }
    /**
    When there are, for example, large collapsed ranges in the
    viewport, its size can be a lot bigger than the actual visible
    content. Thus, if you are doing something like styling the
    content in the viewport, it is preferable to only do so for
    these ranges, which are the subset of the viewport that is
    actually drawn.
    */
    get visibleRanges() { return this.viewState.visibleRanges; }
    /**
    Returns false when the editor is entirely scrolled out of view
    or otherwise hidden.
    */
    get inView() { return this.viewState.inView; }
    /**
    Indicates whether the user is currently composing text via
    [IME](https://developer.mozilla.org/en-US/docs/Mozilla/IME_handling_guide).
    */
    get composing() { return this.inputState.composing > 0; }
    dispatch(...input) {
        this._dispatch(input.length == 1 && input[0] instanceof _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Transaction ? input[0]
            : this.state.update(...input));
    }
    /**
    Update the view for the given array of transactions. This will
    update the visible document and selection to match the state
    produced by the transactions, and notify view plugins of the
    change. You should usually call
    [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
    as a primitive.
    */
    update(transactions) {
        if (this.updateState != 0 /* Idle */)
            throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let redrawn = false, update;
        let state = this.state;
        for (let tr of transactions) {
            if (tr.startState != state)
                throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            state = tr.state;
        }
        // When the phrases change, redraw the editor
        if (state.facet(_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorState.phrases) != this.state.facet(_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorState.phrases))
            return this.setState(state);
        update = new ViewUpdate(this, state, transactions);
        let scrollTo;
        try {
            this.updateState = 2 /* Updating */;
            scrollTo = transactions.some(tr => tr.scrollIntoView) ? state.selection.main : null;
            this.viewState.update(update, scrollTo);
            this.bidiCache = CachedOrder.update(this.bidiCache, update.changes);
            if (!update.empty) {
                this.updatePlugins(update);
                this.inputState.update(update);
            }
            redrawn = this.docView.update(update);
            if (this.state.facet(styleModule) != this.styleModules)
                this.mountStyles();
            this.updateAttrs();
            this.showAnnouncements(transactions);
        }
        finally {
            this.updateState = 0 /* Idle */;
        }
        if (redrawn || scrollTo || this.viewState.mustEnforceCursorAssoc)
            this.requestMeasure();
        if (!update.empty)
            for (let listener of this.state.facet(updateListener))
                listener(update);
    }
    /**
    Reset the view to the given state. (This will cause the entire
    document to be redrawn and all view plugins to be reinitialized,
    so you should probably only use it when the new state isn't
    derived from the old state. Otherwise, use
    [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
    */
    setState(newState) {
        if (this.updateState != 0 /* Idle */)
            throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        this.updateState = 2 /* Updating */;
        try {
            for (let plugin of this.plugins)
                plugin.destroy(this);
            this.viewState = new ViewState(newState);
            this.plugins = newState.facet(viewPlugin).map(spec => new PluginInstance(spec).update(this));
            this.docView = new DocView(this);
            this.inputState.ensureHandlers(this);
            this.mountStyles();
            this.updateAttrs();
            this.bidiCache = [];
        }
        finally {
            this.updateState = 0 /* Idle */;
        }
        this.requestMeasure();
    }
    updatePlugins(update) {
        let prevSpecs = update.startState.facet(viewPlugin), specs = update.state.facet(viewPlugin);
        if (prevSpecs != specs) {
            let newPlugins = [];
            for (let spec of specs) {
                let found = prevSpecs.indexOf(spec);
                if (found < 0) {
                    newPlugins.push(new PluginInstance(spec));
                }
                else {
                    let plugin = this.plugins[found];
                    plugin.mustUpdate = update;
                    newPlugins.push(plugin);
                }
            }
            for (let plugin of this.plugins)
                if (plugin.mustUpdate != update)
                    plugin.destroy(this);
            this.plugins = newPlugins;
            this.inputState.ensureHandlers(this);
        }
        else {
            for (let p of this.plugins)
                p.mustUpdate = update;
        }
        for (let i = 0; i < this.plugins.length; i++)
            this.plugins[i] = this.plugins[i].update(this);
    }
    /**
    @internal
    */
    measure(flush = true) {
        if (this.measureScheduled > -1)
            cancelAnimationFrame(this.measureScheduled);
        this.measureScheduled = -1; // Prevent requestMeasure calls from scheduling another animation frame
        if (flush)
            this.observer.flush();
        let updated = null;
        try {
            for (let i = 0;; i++) {
                this.updateState = 1 /* Measuring */;
                let changed = this.viewState.measure(this.docView, i > 0);
                let measuring = this.measureRequests;
                if (!changed && !measuring.length && this.viewState.scrollTo == null)
                    break;
                this.measureRequests = [];
                if (i > 5) {
                    console.warn("Viewport failed to stabilize");
                    break;
                }
                let measured = measuring.map(m => {
                    try {
                        return m.read(this);
                    }
                    catch (e) {
                        logException(this.state, e);
                        return BadMeasure;
                    }
                });
                let update = new ViewUpdate(this, this.state);
                update.flags |= changed;
                if (!updated)
                    updated = update;
                else
                    updated.flags |= changed;
                this.updateState = 2 /* Updating */;
                if (!update.empty) {
                    this.updatePlugins(update);
                    this.inputState.update(update);
                }
                this.updateAttrs();
                if (changed)
                    this.docView.update(update);
                for (let i = 0; i < measuring.length; i++)
                    if (measured[i] != BadMeasure) {
                        try {
                            measuring[i].write(measured[i], this);
                        }
                        catch (e) {
                            logException(this.state, e);
                        }
                    }
                if (this.viewState.scrollTo) {
                    this.docView.scrollPosIntoView(this.viewState.scrollTo.head, this.viewState.scrollTo.assoc);
                    this.viewState.scrollTo = null;
                }
                if (!(changed & 4 /* Viewport */) && this.measureRequests.length == 0)
                    break;
            }
        }
        finally {
            this.updateState = 0 /* Idle */;
        }
        this.measureScheduled = -1;
        if (updated && !updated.empty)
            for (let listener of this.state.facet(updateListener))
                listener(updated);
    }
    /**
    Get the CSS classes for the currently active editor themes.
    */
    get themeClasses() {
        return baseThemeID + " " +
            (this.state.facet(darkTheme) ? baseDarkID : baseLightID) + " " +
            this.state.facet(theme);
    }
    updateAttrs() {
        let editorAttrs = combineAttrs(this.state.facet(editorAttributes), {
            // FIXME drop cm-wrap in next major release
            class: "cm-editor cm-wrap" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
        });
        updateAttrs(this.dom, this.editorAttrs, editorAttrs);
        this.editorAttrs = editorAttrs;
        let contentAttrs = combineAttrs(this.state.facet(contentAttributes), {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            contenteditable: !this.state.facet(editable) ? "false" : contentEditablePlainTextSupported() ? "plaintext-only" : "true",
            class: "cm-content",
            style: `${browser.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
        });
        updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);
        this.contentAttrs = contentAttrs;
    }
    showAnnouncements(trs) {
        let first = true;
        for (let tr of trs)
            for (let effect of tr.effects)
                if (effect.is(EditorView.announce)) {
                    if (first)
                        this.announceDOM.textContent = "";
                    first = false;
                    let div = this.announceDOM.appendChild(document.createElement("div"));
                    div.textContent = effect.value;
                }
    }
    mountStyles() {
        this.styleModules = this.state.facet(styleModule);
        style_mod__WEBPACK_IMPORTED_MODULE_0__.StyleModule.mount(this.root, this.styleModules.concat(baseTheme).reverse());
    }
    readMeasured() {
        if (this.updateState == 2 /* Updating */)
            throw new Error("Reading the editor layout isn't allowed during an update");
        if (this.updateState == 0 /* Idle */ && this.measureScheduled > -1)
            this.measure(false);
    }
    /**
    Schedule a layout measurement, optionally providing callbacks to
    do custom DOM measuring followed by a DOM write phase. Using
    this is preferable reading DOM layout directly from, for
    example, an event handler, because it'll make sure measuring and
    drawing done by other components is synchronized, avoiding
    unnecessary DOM layout computations.
    */
    requestMeasure(request) {
        if (this.measureScheduled < 0)
            this.measureScheduled = requestAnimationFrame(() => this.measure());
        if (request) {
            if (request.key != null)
                for (let i = 0; i < this.measureRequests.length; i++) {
                    if (this.measureRequests[i].key === request.key) {
                        this.measureRequests[i] = request;
                        return;
                    }
                }
            this.measureRequests.push(request);
        }
    }
    /**
    Collect all values provided by the active plugins for a given
    field.
    */
    pluginField(field) {
        let result = [];
        for (let plugin of this.plugins)
            plugin.update(this).takeField(field, result);
        return result;
    }
    /**
    Get the value of a specific plugin, if present. Note that
    plugins that crash can be dropped from a view, so even when you
    know you registered a given plugin, it is recommended to check
    the return value of this method.
    */
    plugin(plugin) {
        for (let inst of this.plugins)
            if (inst.spec == plugin)
                return inst.update(this).value;
        return null;
    }
    /**
    Find the line or block widget at the given vertical position.
    
    By default, this position is interpreted as a screen position,
    meaning `docTop` is set to the DOM top position of the editor
    content (forcing a layout). You can pass a different `docTop`
    value—for example 0 to interpret `height` as a document-relative
    position, or a precomputed document top
    (`view.contentDOM.getBoundingClientRect().top`) to limit layout
    queries.
    */
    blockAtHeight(height, docTop) {
        this.readMeasured();
        return this.viewState.blockAtHeight(height, ensureTop(docTop, this.contentDOM));
    }
    /**
    Find information for the visual line (see
    [`visualLineAt`](https://codemirror.net/6/docs/ref/#view.EditorView.visualLineAt)) at the given
    vertical position. The resulting block info might hold another
    array of block info structs in its `type` field if this line
    consists of more than one block.
    
    Defaults to treating `height` as a screen position. See
    [`blockAtHeight`](https://codemirror.net/6/docs/ref/#view.EditorView.blockAtHeight) for the
    interpretation of the `docTop` parameter.
    */
    visualLineAtHeight(height, docTop) {
        this.readMeasured();
        return this.viewState.lineAtHeight(height, ensureTop(docTop, this.contentDOM));
    }
    /**
    Iterate over the height information of the visual lines in the
    viewport. The heights of lines are reported relative to the
    given document top, which defaults to the screen position of the
    document (forcing a layout).
    */
    viewportLines(f, docTop) {
        let { from, to } = this.viewport;
        this.viewState.forEachLine(from, to, f, ensureTop(docTop, this.contentDOM));
    }
    /**
    Find the extent and height of the visual line (a range delimited
    on both sides by either non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^range)
    line breaks, or the start/end of the document) at the given position.
    
    Vertical positions are computed relative to the `docTop`
    argument, which defaults to 0 for this method. You can pass
    `view.contentDOM.getBoundingClientRect().top` here to get screen
    coordinates.
    */
    visualLineAt(pos, docTop = 0) {
        return this.viewState.lineAt(pos, docTop);
    }
    /**
    The editor's total content height.
    */
    get contentHeight() {
        return this.viewState.contentHeight;
    }
    /**
    Move a cursor position by [grapheme
    cluster](https://codemirror.net/6/docs/ref/#text.findClusterBreak). `forward` determines whether
    the motion is away from the line start, or towards it. Motion in
    bidirectional text is in visual order, in the editor's [text
    direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). When the start
    position was the last one on the line, the returned position
    will be across the line break. If there is no further line, the
    original position is returned.
    
    By default, this method moves over a single cluster. The
    optional `by` argument can be used to move across more. It will
    be called with the first cluster as argument, and should return
    a predicate that determines, for each subsequent cluster,
    whether it should also be moved over.
    */
    moveByChar(start, forward, by) {
        return skipAtoms(this, start, moveByChar(this, start, forward, by));
    }
    /**
    Move a cursor position across the next group of either
    [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
    non-whitespace characters.
    */
    moveByGroup(start, forward) {
        return skipAtoms(this, start, moveByChar(this, start, forward, initial => byGroup(this, start.head, initial)));
    }
    /**
    Move to the next line boundary in the given direction. If
    `includeWrap` is true, line wrapping is on, and there is a
    further wrap point on the current line, the wrap point will be
    returned. Otherwise this function will return the start or end
    of the line.
    */
    moveToLineBoundary(start, forward, includeWrap = true) {
        return moveToLineBoundary(this, start, forward, includeWrap);
    }
    /**
    Move a cursor position vertically. When `distance` isn't given,
    it defaults to moving to the next line (including wrapped
    lines). Otherwise, `distance` should provide a positive distance
    in pixels.
    
    When `start` has a
    [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
    motion will use that as a target horizontal position. Otherwise,
    the cursor's own horizontal position is used. The returned
    cursor will have its goal column set to whichever column was
    used.
    */
    moveVertically(start, forward, distance) {
        return skipAtoms(this, start, moveVertically(this, start, forward, distance));
    }
    /**
    Scroll the given document position into view.
    */
    scrollPosIntoView(pos) {
        this.viewState.scrollTo = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(pos);
        this.requestMeasure();
    }
    /**
    Find the DOM parent node and offset (child offset if `node` is
    an element, character offset when it is a text node) at the
    given document position.
    */
    domAtPos(pos) {
        return this.docView.domAtPos(pos);
    }
    /**
    Find the document position at the given DOM node. Can be useful
    for associating positions with DOM events. Will raise an error
    when `node` isn't part of the editor content.
    */
    posAtDOM(node, offset = 0) {
        return this.docView.posFromDOM(node, offset);
    }
    posAtCoords(coords, precise = true) {
        this.readMeasured();
        return posAtCoords(this, coords, precise);
    }
    /**
    Get the screen coordinates at the given document position.
    `side` determines whether the coordinates are based on the
    element before (-1) or after (1) the position (if no element is
    available on the given side, the method will transparently use
    another strategy to get reasonable coordinates).
    */
    coordsAtPos(pos, side = 1) {
        this.readMeasured();
        let rect = this.docView.coordsAt(pos, side);
        if (!rect || rect.left == rect.right)
            return rect;
        let line = this.state.doc.lineAt(pos), order = this.bidiSpans(line);
        let span = order[BidiSpan.find(order, pos - line.from, -1, side)];
        return flattenRect(rect, (span.dir == Direction.LTR) == (side > 0));
    }
    /**
    The default width of a character in the editor. May not
    accurately reflect the width of all characters (given variable
    width fonts or styling of invididual ranges).
    */
    get defaultCharacterWidth() { return this.viewState.heightOracle.charWidth; }
    /**
    The default height of a line in the editor. May not be accurate
    for all lines.
    */
    get defaultLineHeight() { return this.viewState.heightOracle.lineHeight; }
    /**
    The text direction
    ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
    CSS property) of the editor.
    */
    get textDirection() { return this.viewState.heightOracle.direction; }
    /**
    Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
    (as determined by the
    [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
    CSS property of its content element).
    */
    get lineWrapping() { return this.viewState.heightOracle.lineWrapping; }
    /**
    Returns the bidirectional text structure of the given line
    (which should be in the current document) as an array of span
    objects. The order of these spans matches the [text
    direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
    left-to-right, the leftmost spans come first, otherwise the
    rightmost spans come first.
    */
    bidiSpans(line) {
        if (line.length > MaxBidiLine)
            return trivialOrder(line.length);
        let dir = this.textDirection;
        for (let entry of this.bidiCache)
            if (entry.from == line.from && entry.dir == dir)
                return entry.order;
        let order = computeOrder(line.text, this.textDirection);
        this.bidiCache.push(new CachedOrder(line.from, line.to, dir, order));
        return order;
    }
    /**
    Check whether the editor has focus.
    */
    get hasFocus() {
        var _a;
        // Safari return false for hasFocus when the context menu is open
        // or closing, which leads us to ignore selection changes from the
        // context menu because it looks like the editor isn't focused.
        // This kludges around that.
        return (document.hasFocus() || browser.safari && ((_a = this.inputState) === null || _a === void 0 ? void 0 : _a.lastContextMenu) > Date.now() - 3e4) &&
            this.root.activeElement == this.contentDOM;
    }
    /**
    Put focus on the editor.
    */
    focus() {
        this.observer.ignore(() => {
            focusPreventScroll(this.contentDOM);
            this.docView.updateSelection();
        });
    }
    /**
    Clean up this editor view, removing its element from the
    document, unregistering event handlers, and notifying
    plugins. The view instance can no longer be used after
    calling this.
    */
    destroy() {
        for (let plugin of this.plugins)
            plugin.destroy(this);
        this.inputState.destroy();
        this.dom.remove();
        this.observer.destroy();
        if (this.measureScheduled > -1)
            cancelAnimationFrame(this.measureScheduled);
    }
    /**
    Facet that can be used to add DOM event handlers. The value
    should be an object mapping event names to handler functions. The
    first such function to return true will be assumed to have handled
    that event, and no other handlers or built-in behavior will be
    activated for it.
    These are registered on the [content
    element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except for `scroll`
    handlers, which will be called any time the editor's [scroll
    element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of its parent nodes
    is scrolled.
    */
    static domEventHandlers(handlers) {
        return ViewPlugin.define(() => ({}), { eventHandlers: handlers });
    }
    /**
    Create a theme extension. The first argument can be a
    [`style-mod`](https://github.com/marijnh/style-mod#documentation)
    style spec providing the styles for the theme. These will be
    prefixed with a generated class for the style.
    
    Because the selectors will be prefixed with a scope class, rule
    that directly match the editor's [wrapper
    element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
    added—need to be explicitly differentiated by adding an `&` to
    the selector for that element—for example
    `&.cm-focused`.
    
    When `dark` is set to true, the theme will be marked as dark,
    which will cause the `&dark` rules from [base
    themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
    `&light` when a light theme is active).
    */
    static theme(spec, options) {
        let prefix = style_mod__WEBPACK_IMPORTED_MODULE_0__.StyleModule.newName();
        let result = [theme.of(prefix), styleModule.of(buildTheme(`.${prefix}`, spec))];
        if (options && options.dark)
            result.push(darkTheme.of(true));
        return result;
    }
    /**
    Create an extension that adds styles to the base theme. Like
    with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
    place of the editor wrapper element when directly targeting
    that. You can also use `&dark` or `&light` instead to only
    target editors with a dark or light theme.
    */
    static baseTheme(spec) {
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Prec.fallback(styleModule.of(buildTheme("." + baseThemeID, spec, lightDarkIDs)));
    }
}
/**
Facet to add a [style
module](https://github.com/marijnh/style-mod#documentation) to
an editor view. The view will ensure that the module is
mounted in its [document
root](https://codemirror.net/6/docs/ref/#view.EditorView.constructor^config.root).
*/
EditorView.styleModule = styleModule;
/**
An input handler can override the way changes to the editable
DOM content are handled. Handlers are passed the document
positions between which the change was found, and the new
content. When one returns true, no further input handlers are
called and the default behavior is prevented.
*/
EditorView.inputHandler = inputHandler;
/**
Allows you to provide a function that should be called when the
library catches an exception from an extension (mostly from view
plugins, but may be used by other extensions to route exceptions
from user-code-provided callbacks). This is mostly useful for
debugging and logging. See [`logException`](https://codemirror.net/6/docs/ref/#view.logException).
*/
EditorView.exceptionSink = exceptionSink;
/**
A facet that can be used to register a function to be called
every time the view updates.
*/
EditorView.updateListener = updateListener;
/**
Facet that controls whether the editor content is editable. When
its highest-precedence value is `false`, editing is disabled,
and the content element will no longer have its
`contenteditable` attribute set to `true`. (Note that this
doesn't affect API calls that change the editor content, even
when those are bound to keys or buttons.)
*/
EditorView.editable = editable;
/**
Allows you to influence the way mouse selection happens. The
functions in this facet will be called for a `mousedown` event
on the editor, and can return an object that overrides the way a
selection is computed from that mouse click or drag.
*/
EditorView.mouseSelectionStyle = mouseSelectionStyle;
/**
Facet used to configure whether a given selection drag event
should move or copy the selection. The given predicate will be
called with the `mousedown` event, and can return `true` when
the drag should move the content.
*/
EditorView.dragMovesSelection = dragMovesSelection$1;
/**
Facet used to configure whether a given selecting click adds
a new range to the existing selection or replaces it entirely.
*/
EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
/**
A facet that determines which [decorations](https://codemirror.net/6/docs/ref/#view.Decoration)
are shown in the view. See also [view
plugins](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), which have a separate
mechanism for providing decorations.
*/
EditorView.decorations = decorations;
/**
Facet that provides additional DOM attributes for the editor's
editable DOM element.
*/
EditorView.contentAttributes = contentAttributes;
/**
Facet that provides DOM attributes for the editor's outer
element.
*/
EditorView.editorAttributes = editorAttributes;
/**
An extension that enables line wrapping in the editor (by
setting CSS `white-space` to `pre-wrap` in the content).
*/
EditorView.lineWrapping = /*@__PURE__*/EditorView.contentAttributes.of({ "class": "cm-lineWrapping" });
/**
State effect used to include screen reader announcements in a
transaction. These will be added to the DOM in a visually hidden
element with `aria-live="polite"` set, and should be used to
describe effects that are visually obvious but may not be
noticed by screen reader users (such as moving to the next
search match).
*/
EditorView.announce = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.StateEffect.define();
// Maximum line length for which we compute accurate bidi info
const MaxBidiLine = 4096;
function ensureTop(given, dom) {
    return given == null ? dom.getBoundingClientRect().top : given;
}
let resizeDebounce = -1;
function ensureGlobalHandler() {
    window.addEventListener("resize", () => {
        if (resizeDebounce == -1)
            resizeDebounce = setTimeout(handleResize, 50);
    });
}
function handleResize() {
    resizeDebounce = -1;
    let found = document.querySelectorAll(".cm-content");
    for (let i = 0; i < found.length; i++) {
        let docView = ContentView.get(found[i]);
        if (docView)
            docView.editorView.requestMeasure();
    }
}
const BadMeasure = {};
class CachedOrder {
    constructor(from, to, dir, order) {
        this.from = from;
        this.to = to;
        this.dir = dir;
        this.order = order;
    }
    static update(cache, changes) {
        if (changes.empty)
            return cache;
        let result = [], lastDir = cache.length ? cache[cache.length - 1].dir : Direction.LTR;
        for (let i = Math.max(0, cache.length - 10); i < cache.length; i++) {
            let entry = cache[i];
            if (entry.dir == lastDir && !changes.touchesRange(entry.from, entry.to))
                result.push(new CachedOrder(changes.mapPos(entry.from, 1), changes.mapPos(entry.to, -1), entry.dir, entry.order));
        }
        return result;
    }
}

const currentPlatform = typeof navigator == "undefined" ? "key"
    : /*@__PURE__*//Mac/.test(navigator.platform) ? "mac"
        : /*@__PURE__*//Win/.test(navigator.platform) ? "win"
            : /*@__PURE__*//Linux|X11/.test(navigator.platform) ? "linux"
                : "key";
function normalizeKeyName(name, platform) {
    const parts = name.split(/-(?!$)/);
    let result = parts[parts.length - 1];
    if (result == "Space")
        result = " ";
    let alt, ctrl, shift, meta;
    for (let i = 0; i < parts.length - 1; ++i) {
        const mod = parts[i];
        if (/^(cmd|meta|m)$/i.test(mod))
            meta = true;
        else if (/^a(lt)?$/i.test(mod))
            alt = true;
        else if (/^(c|ctrl|control)$/i.test(mod))
            ctrl = true;
        else if (/^s(hift)?$/i.test(mod))
            shift = true;
        else if (/^mod$/i.test(mod)) {
            if (platform == "mac")
                meta = true;
            else
                ctrl = true;
        }
        else
            throw new Error("Unrecognized modifier name: " + mod);
    }
    if (alt)
        result = "Alt-" + result;
    if (ctrl)
        result = "Ctrl-" + result;
    if (meta)
        result = "Meta-" + result;
    if (shift)
        result = "Shift-" + result;
    return result;
}
function modifiers(name, event, shift) {
    if (event.altKey)
        name = "Alt-" + name;
    if (event.ctrlKey)
        name = "Ctrl-" + name;
    if (event.metaKey)
        name = "Meta-" + name;
    if (shift !== false && event.shiftKey)
        name = "Shift-" + name;
    return name;
}
const handleKeyEvents = /*@__PURE__*/EditorView.domEventHandlers({
    keydown(event, view) {
        return runHandlers(getKeymap(view.state), event, view, "editor");
    }
});
/**
Facet used for registering keymaps.

You can add multiple keymaps to an editor. Their priorities
determine their precedence (the ones specified early or with high
priority get checked first). When a handler has returned `true`
for a given key, no further handlers are called.
*/
const keymap = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({ enables: handleKeyEvents });
const Keymaps = /*@__PURE__*/new WeakMap();
// This is hidden behind an indirection, rather than directly computed
// by the facet, to keep internal types out of the facet's type.
function getKeymap(state) {
    let bindings = state.facet(keymap);
    let map = Keymaps.get(bindings);
    if (!map)
        Keymaps.set(bindings, map = buildKeymap(bindings.reduce((a, b) => a.concat(b), [])));
    return map;
}
/**
Run the key handlers registered for a given scope. The event
object should be `"keydown"` event. Returns true if any of the
handlers handled it.
*/
function runScopeHandlers(view, event, scope) {
    return runHandlers(getKeymap(view.state), event, view, scope);
}
let storedPrefix = null;
const PrefixTimeout = 4000;
function buildKeymap(bindings, platform = currentPlatform) {
    let bound = Object.create(null);
    let isPrefix = Object.create(null);
    let checkPrefix = (name, is) => {
        let current = isPrefix[name];
        if (current == null)
            isPrefix[name] = is;
        else if (current != is)
            throw new Error("Key binding " + name + " is used both as a regular binding and as a multi-stroke prefix");
    };
    let add = (scope, key, command, preventDefault) => {
        let scopeObj = bound[scope] || (bound[scope] = Object.create(null));
        let parts = key.split(/ (?!$)/).map(k => normalizeKeyName(k, platform));
        for (let i = 1; i < parts.length; i++) {
            let prefix = parts.slice(0, i).join(" ");
            checkPrefix(prefix, true);
            if (!scopeObj[prefix])
                scopeObj[prefix] = {
                    preventDefault: true,
                    commands: [(view) => {
                            let ourObj = storedPrefix = { view, prefix, scope };
                            setTimeout(() => { if (storedPrefix == ourObj)
                                storedPrefix = null; }, PrefixTimeout);
                            return true;
                        }]
                };
        }
        let full = parts.join(" ");
        checkPrefix(full, false);
        let binding = scopeObj[full] || (scopeObj[full] = { preventDefault: false, commands: [] });
        binding.commands.push(command);
        if (preventDefault)
            binding.preventDefault = true;
    };
    for (let b of bindings) {
        let name = b[platform] || b.key;
        if (!name)
            continue;
        for (let scope of b.scope ? b.scope.split(" ") : ["editor"]) {
            add(scope, name, b.run, b.preventDefault);
            if (b.shift)
                add(scope, "Shift-" + name, b.shift, b.preventDefault);
        }
    }
    return bound;
}
function runHandlers(map, event, view, scope) {
    let name = (0,w3c_keyname__WEBPACK_IMPORTED_MODULE_2__.keyName)(event), isChar = name.length == 1 && name != " ";
    let prefix = "", fallthrough = false;
    if (storedPrefix && storedPrefix.view == view && storedPrefix.scope == scope) {
        prefix = storedPrefix.prefix + " ";
        if (fallthrough = modifierCodes.indexOf(event.keyCode) < 0)
            storedPrefix = null;
    }
    let runFor = (binding) => {
        if (binding) {
            for (let cmd of binding.commands)
                if (cmd(view))
                    return true;
            if (binding.preventDefault)
                fallthrough = true;
        }
        return false;
    };
    let scopeObj = map[scope], baseName;
    if (scopeObj) {
        if (runFor(scopeObj[prefix + modifiers(name, event, !isChar)]))
            return true;
        if (isChar && (event.shiftKey || event.altKey || event.metaKey) &&
            (baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_2__.base[event.keyCode]) && baseName != name) {
            if (runFor(scopeObj[prefix + modifiers(baseName, event, true)]))
                return true;
        }
        else if (isChar && event.shiftKey) {
            if (runFor(scopeObj[prefix + modifiers(name, event, true)]))
                return true;
        }
    }
    return fallthrough;
}

const CanHidePrimary = !browser.ios; // FIXME test IE
const selectionConfig = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({
    combine(configs) {
        return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.combineConfig)(configs, {
            cursorBlinkRate: 1200,
            drawRangeCursor: true
        }, {
            cursorBlinkRate: (a, b) => Math.min(a, b),
            drawRangeCursor: (a, b) => a || b
        });
    }
});
/**
Returns an extension that hides the browser's native selection and
cursor, replacing the selection with a background behind the text
(with the `cm-selectionBackground` class), and the
cursors with elements overlaid over the code (using
`cm-cursor-primary` and `cm-cursor-secondary`).

This allows the editor to display secondary selection ranges, and
tends to produce a type of selection more in line with that users
expect in a text editor (the native selection styling will often
leave gaps between lines and won't fill the horizontal space after
a line when the selection continues past it).

It does have a performance cost, in that it requires an extra DOM
layout cycle for many updates (the selection is drawn based on DOM
layout information that's only available after laying out the
content).
*/
function drawSelection(config = {}) {
    return [
        selectionConfig.of(config),
        drawSelectionPlugin,
        hideNativeSelection
    ];
}
class Piece {
    constructor(left, top, width, height, className) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.className = className;
    }
    draw() {
        let elt = document.createElement("div");
        elt.className = this.className;
        this.adjust(elt);
        return elt;
    }
    adjust(elt) {
        elt.style.left = this.left + "px";
        elt.style.top = this.top + "px";
        if (this.width >= 0)
            elt.style.width = this.width + "px";
        elt.style.height = this.height + "px";
    }
    eq(p) {
        return this.left == p.left && this.top == p.top && this.width == p.width && this.height == p.height &&
            this.className == p.className;
    }
}
const drawSelectionPlugin = /*@__PURE__*/ViewPlugin.fromClass(class {
    constructor(view) {
        this.view = view;
        this.rangePieces = [];
        this.cursors = [];
        this.measureReq = { read: this.readPos.bind(this), write: this.drawSel.bind(this) };
        this.selectionLayer = view.scrollDOM.appendChild(document.createElement("div"));
        this.selectionLayer.className = "cm-selectionLayer";
        this.selectionLayer.setAttribute("aria-hidden", "true");
        this.cursorLayer = view.scrollDOM.appendChild(document.createElement("div"));
        this.cursorLayer.className = "cm-cursorLayer";
        this.cursorLayer.setAttribute("aria-hidden", "true");
        view.requestMeasure(this.measureReq);
        this.setBlinkRate();
    }
    setBlinkRate() {
        this.cursorLayer.style.animationDuration = this.view.state.facet(selectionConfig).cursorBlinkRate + "ms";
    }
    update(update) {
        let confChanged = update.startState.facet(selectionConfig) != update.state.facet(selectionConfig);
        if (confChanged || update.selectionSet || update.geometryChanged || update.viewportChanged)
            this.view.requestMeasure(this.measureReq);
        if (update.transactions.some(tr => tr.scrollIntoView))
            this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink";
        if (confChanged)
            this.setBlinkRate();
    }
    readPos() {
        let { state } = this.view, conf = state.facet(selectionConfig);
        let rangePieces = state.selection.ranges.map(r => r.empty ? [] : measureRange(this.view, r)).reduce((a, b) => a.concat(b));
        let cursors = [];
        for (let r of state.selection.ranges) {
            let prim = r == state.selection.main;
            if (r.empty ? !prim || CanHidePrimary : conf.drawRangeCursor) {
                let piece = measureCursor(this.view, r, prim);
                if (piece)
                    cursors.push(piece);
            }
        }
        return { rangePieces, cursors };
    }
    drawSel({ rangePieces, cursors }) {
        if (rangePieces.length != this.rangePieces.length || rangePieces.some((p, i) => !p.eq(this.rangePieces[i]))) {
            this.selectionLayer.textContent = "";
            for (let p of rangePieces)
                this.selectionLayer.appendChild(p.draw());
            this.rangePieces = rangePieces;
        }
        if (cursors.length != this.cursors.length || cursors.some((c, i) => !c.eq(this.cursors[i]))) {
            let oldCursors = this.cursorLayer.children;
            if (oldCursors.length !== cursors.length) {
                this.cursorLayer.textContent = "";
                for (const c of cursors)
                    this.cursorLayer.appendChild(c.draw());
            }
            else {
                cursors.forEach((c, idx) => c.adjust(oldCursors[idx]));
            }
            this.cursors = cursors;
        }
    }
    destroy() {
        this.selectionLayer.remove();
        this.cursorLayer.remove();
    }
});
const themeSpec = {
    ".cm-line": {
        "& ::selection": { backgroundColor: "transparent !important" },
        "&::selection": { backgroundColor: "transparent !important" }
    }
};
if (CanHidePrimary)
    themeSpec[".cm-line"].caretColor = "transparent !important";
const hideNativeSelection = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Prec.override(/*@__PURE__*/EditorView.theme(themeSpec));
function getBase(view) {
    let rect = view.scrollDOM.getBoundingClientRect();
    let left = view.textDirection == Direction.LTR ? rect.left : rect.right - view.scrollDOM.clientWidth;
    return { left: left - view.scrollDOM.scrollLeft, top: rect.top - view.scrollDOM.scrollTop };
}
function wrappedLine(view, pos, inside) {
    let range = _codemirror_state__WEBPACK_IMPORTED_MODULE_4__.EditorSelection.cursor(pos);
    return { from: Math.max(inside.from, view.moveToLineBoundary(range, false, true).from),
        to: Math.min(inside.to, view.moveToLineBoundary(range, true, true).from),
        type: BlockType.Text };
}
function blockAt(view, pos) {
    let line = view.visualLineAt(pos);
    if (Array.isArray(line.type))
        for (let l of line.type) {
            if (l.to > pos || l.to == pos && (l.to == line.to || l.type == BlockType.Text))
                return l;
        }
    return line;
}
function measureRange(view, range) {
    if (range.to <= view.viewport.from || range.from >= view.viewport.to)
        return [];
    let from = Math.max(range.from, view.viewport.from), to = Math.min(range.to, view.viewport.to);
    let ltr = view.textDirection == Direction.LTR;
    let content = view.contentDOM, contentRect = content.getBoundingClientRect(), base = getBase(view);
    let lineStyle = window.getComputedStyle(content.firstChild);
    let leftSide = contentRect.left + parseInt(lineStyle.paddingLeft);
    let rightSide = contentRect.right - parseInt(lineStyle.paddingRight);
    let startBlock = blockAt(view, from), endBlock = blockAt(view, to);
    let visualStart = startBlock.type == BlockType.Text ? startBlock : null;
    let visualEnd = endBlock.type == BlockType.Text ? endBlock : null;
    if (view.lineWrapping) {
        if (visualStart)
            visualStart = wrappedLine(view, from, visualStart);
        if (visualEnd)
            visualEnd = wrappedLine(view, to, visualEnd);
    }
    if (visualStart && visualEnd && visualStart.from == visualEnd.from) {
        return pieces(drawForLine(range.from, range.to, visualStart));
    }
    else {
        let top = visualStart ? drawForLine(range.from, null, visualStart) : drawForWidget(startBlock, false);
        let bottom = visualEnd ? drawForLine(null, range.to, visualEnd) : drawForWidget(endBlock, true);
        let between = [];
        if ((visualStart || startBlock).to < (visualEnd || endBlock).from - 1)
            between.push(piece(leftSide, top.bottom, rightSide, bottom.top));
        else if (top.bottom < bottom.top && blockAt(view, (top.bottom + bottom.top) / 2).type == BlockType.Text)
            top.bottom = bottom.top = (top.bottom + bottom.top) / 2;
        return pieces(top).concat(between).concat(pieces(bottom));
    }
    function piece(left, top, right, bottom) {
        return new Piece(left - base.left, top - base.top, right - left, bottom - top, "cm-selectionBackground");
    }
    function pieces({ top, bottom, horizontal }) {
        let pieces = [];
        for (let i = 0; i < horizontal.length; i += 2)
            pieces.push(piece(horizontal[i], top, horizontal[i + 1], bottom));
        return pieces;
    }
    // Gets passed from/to in line-local positions
    function drawForLine(from, to, line) {
        let top = 1e9, bottom = -1e9, horizontal = [];
        function addSpan(from, fromOpen, to, toOpen, dir) {
            // Passing 2/-2 is a kludge to force the view to return
            // coordinates on the proper side of block widgets, since
            // normalizing the side there, though appropriate for most
            // coordsAtPos queries, would break selection drawing.
            let fromCoords = view.coordsAtPos(from, (from == line.to ? -2 : 2));
            let toCoords = view.coordsAtPos(to, (to == line.from ? 2 : -2));
            top = Math.min(fromCoords.top, toCoords.top, top);
            bottom = Math.max(fromCoords.bottom, toCoords.bottom, bottom);
            if (dir == Direction.LTR)
                horizontal.push(ltr && fromOpen ? leftSide : fromCoords.left, ltr && toOpen ? rightSide : toCoords.right);
            else
                horizontal.push(!ltr && toOpen ? leftSide : toCoords.left, !ltr && fromOpen ? rightSide : fromCoords.right);
        }
        let start = from !== null && from !== void 0 ? from : line.from, end = to !== null && to !== void 0 ? to : line.to;
        // Split the range by visible range and document line
        for (let r of view.visibleRanges)
            if (r.to > start && r.from < end) {
                for (let pos = Math.max(r.from, start), endPos = Math.min(r.to, end);;) {
                    let docLine = view.state.doc.lineAt(pos);
                    for (let span of view.bidiSpans(docLine)) {
                        let spanFrom = span.from + docLine.from, spanTo = span.to + docLine.from;
                        if (spanFrom >= endPos)
                            break;
                        if (spanTo > pos)
                            addSpan(Math.max(spanFrom, pos), from == null && spanFrom <= start, Math.min(spanTo, endPos), to == null && spanTo >= end, span.dir);
                    }
                    pos = docLine.to + 1;
                    if (pos >= endPos)
                        break;
                }
            }
        if (horizontal.length == 0)
            addSpan(start, from == null, end, to == null, view.textDirection);
        return { top, bottom, horizontal };
    }
    function drawForWidget(block, top) {
        let y = contentRect.top + (top ? block.top : block.bottom);
        return { top: y, bottom: y, horizontal: [] };
    }
}
function measureCursor(view, cursor, primary) {
    let pos = view.coordsAtPos(cursor.head, cursor.assoc || 1);
    if (!pos)
        return null;
    let base = getBase(view);
    return new Piece(pos.left - base.left, pos.top - base.top, -1, pos.bottom - pos.top, primary ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary");
}

function iterMatches(doc, re, from, to, f) {
    re.lastIndex = 0;
    for (let cursor = doc.iterRange(from, to), pos = from, m; !cursor.next().done; pos += cursor.value.length) {
        if (!cursor.lineBreak)
            while (m = re.exec(cursor.value))
                f(pos + m.index, pos + m.index + m[0].length, m);
    }
}
/**
Helper class used to make it easier to maintain decorations on
visible code that matches a given regular expression. To be used
in a [view plugin](https://codemirror.net/6/docs/ref/#view.ViewPlugin). Instances of this object
represent a matching configuration.
*/
class MatchDecorator {
    /**
    Create a decorator.
    */
    constructor(config) {
        let { regexp, decoration, boundary } = config;
        if (!regexp.global)
            throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        this.regexp = regexp;
        this.getDeco = typeof decoration == "function" ? decoration : () => decoration;
        this.boundary = boundary;
    }
    /**
    Compute the full set of decorations for matches in the given
    view's viewport. You'll want to call this when initializing your
    plugin.
    */
    createDeco(view) {
        let build = new _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_1__.RangeSetBuilder();
        for (let { from, to } of view.visibleRanges)
            iterMatches(view.state.doc, this.regexp, from, to, (a, b, m) => build.add(a, b, this.getDeco(m, view, a)));
        return build.finish();
    }
    /**
    Update a set of decorations for a view update. `deco` _must_ be
    the set of decorations produced by _this_ `MatchDecorator` for
    the view state before the update.
    */
    updateDeco(update, deco) {
        let changeFrom = 1e9, changeTo = -1;
        if (update.docChanged)
            update.changes.iterChanges((_f, _t, from, to) => {
                if (to > update.view.viewport.from && from < update.view.viewport.to) {
                    changeFrom = Math.min(from, changeFrom);
                    changeTo = Math.max(to, changeTo);
                }
            });
        if (update.viewportChanged || changeTo - changeFrom > 1000)
            return this.createDeco(update.view);
        if (changeTo > -1)
            return this.updateRange(update.view, deco.map(update.changes), changeFrom, changeTo);
        return deco;
    }
    updateRange(view, deco, updateFrom, updateTo) {
        for (let r of view.visibleRanges) {
            let from = Math.max(r.from, updateFrom), to = Math.min(r.to, updateTo);
            if (to > from) {
                let fromLine = view.state.doc.lineAt(from), toLine = fromLine.to < to ? view.state.doc.lineAt(to) : fromLine;
                let start = Math.max(r.from, fromLine.from), end = Math.min(r.to, toLine.to);
                if (this.boundary) {
                    for (; from > fromLine.from; from--)
                        if (this.boundary.test(fromLine.text[from - 1 - fromLine.from])) {
                            start = from;
                            break;
                        }
                    for (; to < toLine.to; to++)
                        if (this.boundary.test(toLine.text[to - toLine.from])) {
                            end = to;
                            break;
                        }
                }
                let ranges = [], m;
                if (fromLine == toLine) {
                    this.regexp.lastIndex = start - fromLine.from;
                    while ((m = this.regexp.exec(fromLine.text)) && m.index < end - fromLine.from) {
                        let pos = m.index + fromLine.from;
                        ranges.push(this.getDeco(m, view, pos).range(pos, pos + m[0].length));
                    }
                }
                else {
                    iterMatches(view.state.doc, this.regexp, start, end, (from, to, m) => ranges.push(this.getDeco(m, view, from).range(from, to)));
                }
                deco = deco.update({ filterFrom: start, filterTo: end, filter: () => false, add: ranges });
            }
        }
        return deco;
    }
}

const UnicodeRegexpSupport = /x/.unicode != null ? "gu" : "g";
const Specials = /*@__PURE__*/new RegExp("[\u0000-\u0008\u000a-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]", UnicodeRegexpSupport);
const Names = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement"
};
let _supportsTabSize = null;
function supportsTabSize() {
    var _a;
    if (_supportsTabSize == null && typeof document != "undefined" && document.body) {
        let styles = document.body.style;
        _supportsTabSize = ((_a = styles.tabSize) !== null && _a !== void 0 ? _a : styles.MozTabSize) != null;
    }
    return _supportsTabSize || false;
}
const specialCharConfig = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.Facet.define({
    combine(configs) {
        let config = (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_4__.combineConfig)(configs, {
            render: null,
            specialChars: Specials,
            addSpecialChars: null
        });
        if (config.replaceTabs = !supportsTabSize())
            config.specialChars = new RegExp("\t|" + config.specialChars.source, UnicodeRegexpSupport);
        if (config.addSpecialChars)
            config.specialChars = new RegExp(config.specialChars.source + "|" + config.addSpecialChars.source, UnicodeRegexpSupport);
        return config;
    }
});
/**
Returns an extension that installs highlighting of special
characters.
*/
function highlightSpecialChars(
/**
Configuration options.
*/
config = {}) {
    return [specialCharConfig.of(config), specialCharPlugin()];
}
let _plugin = null;
function specialCharPlugin() {
    return _plugin || (_plugin = ViewPlugin.fromClass(class {
        constructor(view) {
            this.view = view;
            this.decorations = Decoration.none;
            this.decorationCache = Object.create(null);
            this.decorator = this.makeDecorator(view.state.facet(specialCharConfig));
            this.decorations = this.decorator.createDeco(view);
        }
        makeDecorator(conf) {
            return new MatchDecorator({
                regexp: conf.specialChars,
                decoration: (m, view, pos) => {
                    let { doc } = view.state;
                    let code = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.codePointAt)(m[0], 0);
                    if (code == 9) {
                        let line = doc.lineAt(pos);
                        let size = view.state.tabSize, col = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_3__.countColumn)(doc.sliceString(line.from, pos), 0, size);
                        return Decoration.replace({ widget: new TabWidget((size - (col % size)) * this.view.defaultCharacterWidth) });
                    }
                    return this.decorationCache[code] ||
                        (this.decorationCache[code] = Decoration.replace({ widget: new SpecialCharWidget(conf, code) }));
                },
                boundary: conf.replaceTabs ? undefined : /[^]/
            });
        }
        update(update) {
            let conf = update.state.facet(specialCharConfig);
            if (update.startState.facet(specialCharConfig) != conf) {
                this.decorator = this.makeDecorator(conf);
                this.decorations = this.decorator.createDeco(update.view);
            }
            else {
                this.decorations = this.decorator.updateDeco(update, this.decorations);
            }
        }
    }, {
        decorations: v => v.decorations
    }));
}
const DefaultPlaceholder = "\u2022";
// Assigns placeholder characters from the Control Pictures block to
// ASCII control characters
function placeholder$1(code) {
    if (code >= 32)
        return DefaultPlaceholder;
    if (code == 10)
        return "\u2424";
    return String.fromCharCode(9216 + code);
}
class SpecialCharWidget extends WidgetType {
    constructor(options, code) {
        super();
        this.options = options;
        this.code = code;
    }
    eq(other) { return other.code == this.code; }
    toDOM(view) {
        let ph = placeholder$1(this.code);
        let desc = view.state.phrase("Control character") + " " + (Names[this.code] || "0x" + this.code.toString(16));
        let custom = this.options.render && this.options.render(this.code, desc, ph);
        if (custom)
            return custom;
        let span = document.createElement("span");
        span.textContent = ph;
        span.title = desc;
        span.setAttribute("aria-label", desc);
        span.className = "cm-specialChar";
        return span;
    }
    ignoreEvent() { return false; }
}
class TabWidget extends WidgetType {
    constructor(width) {
        super();
        this.width = width;
    }
    eq(other) { return other.width == this.width; }
    toDOM() {
        let span = document.createElement("span");
        span.textContent = "\t";
        span.className = "cm-tab";
        span.style.width = this.width + "px";
        return span;
    }
    ignoreEvent() { return false; }
}

/**
Mark lines that have a cursor on them with the `"cm-activeLine"`
DOM class.
*/
function highlightActiveLine() {
    return activeLineHighlighter;
}
const lineDeco = /*@__PURE__*/Decoration.line({ attributes: { class: "cm-activeLine" } });
const activeLineHighlighter = /*@__PURE__*/ViewPlugin.fromClass(class {
    constructor(view) {
        this.decorations = this.getDeco(view);
    }
    update(update) {
        if (update.docChanged || update.selectionSet)
            this.decorations = this.getDeco(update.view);
    }
    getDeco(view) {
        let lastLineStart = -1, deco = [];
        for (let r of view.state.selection.ranges) {
            if (!r.empty)
                return Decoration.none;
            let line = view.visualLineAt(r.head);
            if (line.from > lastLineStart) {
                deco.push(lineDeco.range(line.from));
                lastLineStart = line.from;
            }
        }
        return Decoration.set(deco);
    }
}, {
    decorations: v => v.decorations
});

class Placeholder extends WidgetType {
    constructor(content) {
        super();
        this.content = content;
    }
    toDOM() {
        let wrap = document.createElement("span");
        wrap.className = "cm-placeholder";
        wrap.style.pointerEvents = "none";
        wrap.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : this.content);
        if (typeof this.content == "string")
            wrap.setAttribute("aria-label", "placeholder " + this.content);
        else
            wrap.setAttribute("aria-hidden", "true");
        return wrap;
    }
    ignoreEvent() { return false; }
}
/**
Extension that enables a placeholder—a piece of example content
to show when the editor is empty.
*/
function placeholder(content) {
    return ViewPlugin.fromClass(class {
        constructor(view) {
            this.view = view;
            this.placeholder = Decoration.set([Decoration.widget({ widget: new Placeholder(content), side: 1 }).range(0)]);
        }
        get decorations() { return this.view.state.doc.length ? Decoration.none : this.placeholder; }
    }, { decorations: v => v.decorations });
}

/**
@internal
*/
const __test = { HeightMap, HeightOracle, MeasuredHeights, QueryType, ChangedRange, computeOrder, moveVisually };




/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleModule": () => (/* binding */ StyleModule)
/* harmony export */ });
const C = "\u037c"
const COUNT = typeof Symbol == "undefined" ? "__" + C : Symbol.for(C)
const SET = typeof Symbol == "undefined" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet")
const top = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : {}

// :: - Style modules encapsulate a set of CSS rules defined from
// JavaScript. Their definitions are only available in a given DOM
// root after it has been _mounted_ there with `StyleModule.mount`.
//
// Style modules should be created once and stored somewhere, as
// opposed to re-creating them every time you need them. The amount of
// CSS rules generated for a given DOM root is bounded by the amount
// of style modules that were used. So to avoid leaking rules, don't
// create these dynamically, but treat them as one-time allocations.
class StyleModule {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(spec, options) {
    this.rules = []
    let {finish} = options || {}

    function splitSelector(selector) {
      return /^@/.test(selector) ? [selector] : selector.split(/,\s*/)
    }

    function render(selectors, spec, target, isKeyframes) {
      let local = [], isAt = /^@(\w+)\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == "keyframes"
      if (isAt && spec == null) return target.push(selectors[0] + ";")
      for (let prop in spec) {
        let value = spec[prop]
        if (/&/.test(prop)) {
          render(prop.split(/,\s*/).map(part => selectors.map(sel => part.replace(/&/, sel))).reduce((a, b) => a.concat(b)),
                 value, target)
        } else if (value && typeof value == "object") {
          if (!isAt) throw new RangeError("The value of a property (" + prop + ") should be a primitive value.")
          render(splitSelector(prop), value, local, keyframes)
        } else if (value != null) {
          local.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, l => "-" + l.toLowerCase()) + ": " + value + ";")
        }
      }
      if (local.length || keyframes) {
        target.push((finish && !isAt && !isKeyframes ? selectors.map(finish) : selectors).join(", ") +
                    " {" + local.join(" ") + "}")
      }
    }

    for (let prop in spec) render(splitSelector(prop), spec[prop], this.rules)
  }

  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() { return this.rules.join("\n") }

  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let id = top[COUNT] || 1
    top[COUNT] = id + 1
    return C + id.toString(36)
  }

  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>)
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  static mount(root, modules) {
    (root[SET] || new StyleSet(root)).mount(Array.isArray(modules) ? modules : [modules])
  }
}

let adoptedSet = null

class StyleSet {
  constructor(root) {
    if (!root.head && root.adoptedStyleSheets && typeof CSSStyleSheet != "undefined") {
      if (adoptedSet) {
        root.adoptedStyleSheets = [adoptedSet.sheet].concat(root.adoptedStyleSheets)
        return root[SET] = adoptedSet
      }
      this.sheet = new CSSStyleSheet
      root.adoptedStyleSheets = [this.sheet].concat(root.adoptedStyleSheets)
      adoptedSet = this
    } else {
      this.styleTag = (root.ownerDocument || root).createElement("style")
      let target = root.head || root
      target.insertBefore(this.styleTag, target.firstChild)
    }
    this.modules = []
    root[SET] = this
  }

  mount(modules) {
    let sheet = this.sheet
    let pos = 0 /* Current rule offset */, j = 0 /* Index into this.modules */
    for (let i = 0; i < modules.length; i++) {
      let mod = modules[i], index = this.modules.indexOf(mod)
      if (index < j && index > -1) { // Ordering conflict
        this.modules.splice(index, 1)
        j--
        index = -1
      }
      if (index == -1) {
        this.modules.splice(j++, 0, mod)
        if (sheet) for (let k = 0; k < mod.rules.length; k++)
          sheet.insertRule(mod.rules[k], pos++)
      } else {
        while (j < index) pos += this.modules[j++].rules.length
        pos += mod.rules.length
        j++
      }
    }

    if (!sheet) {
      let text = ""
      for (let i = 0; i < this.modules.length; i++)
        text += this.modules[i].getRules() + "\n"
      this.styleTag.textContent = text
    }
  }
}

// Style::Object<union<Style,string>>
//
// A style is an object that, in the simple case, maps CSS property
// names to strings holding their values, as in `{color: "red",
// fontWeight: "bold"}`. The property names can be given in
// camel-case—the library will insert a dash before capital letters
// when converting them to CSS.
//
// If you include an underscore in a property name, it and everything
// after it will be removed from the output, which can be useful when
// providing a property multiple times, for browser compatibility
// reasons.
//
// A property in a style object can also be a sub-selector, which
// extends the current context to add a pseudo-selector or a child
// selector. Such a property should contain a `&` character, which
// will be replaced by the current selector. For example `{"&:before":
// {content: '"hi"'}}`. Sub-selectors and regular properties can
// freely be mixed in a given object. Any property containing a `&` is
// assumed to be a sub-selector.
//
// Finally, a property can specify an @-block to be wrapped around the
// styles defined inside the object that's the property's value. For
// example to create a media query you can do `{"@media screen and
// (min-width: 400px)": {...}}`.


/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => (/* binding */ Range),
/* harmony export */   "RangeSet": () => (/* binding */ RangeSet),
/* harmony export */   "RangeSetBuilder": () => (/* binding */ RangeSetBuilder),
/* harmony export */   "RangeValue": () => (/* binding */ RangeValue)
/* harmony export */ });
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);


/**
Each range is associated with a value, which must inherit from
this class.
*/
class RangeValue {
    /**
    Compare this value with another value. The default
    implementation compares by identity.
    */
    eq(other) { return this == other; }
    /**
    Create a [range](https://codemirror.net/6/docs/ref/#rangeset.Range) with this value.
    */
    range(from, to = from) { return new Range(from, to, this); }
}
RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
RangeValue.prototype.point = false;
RangeValue.prototype.mapMode = _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.MapMode.TrackDel;
/**
A range associates a value with a range of positions.
*/
class Range {
    /**
    @internal
    */
    constructor(
    /**
    The range's start position.
    */
    from, 
    /**
    Its end position.
    */
    to, 
    /**
    The value associated with this range.
    */
    value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
}
function cmpRange(a, b) {
    return a.from - b.from || a.value.startSide - b.value.startSide;
}
class Chunk {
    constructor(from, to, value, 
    // Chunks are marked with the largest point that occurs
    // in them (or -1 for no points), so that scans that are
    // only interested in points (such as the
    // heightmap-related logic) can skip range-only chunks.
    maxPoint) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.maxPoint = maxPoint;
    }
    get length() { return this.to[this.to.length - 1]; }
    // Find the index of the given position and side. Use the ranges'
    // `from` pos when `end == false`, `to` when `end == true`.
    findIndex(pos, side, end, startAt = 0) {
        let arr = end ? this.to : this.from;
        for (let lo = startAt, hi = arr.length;;) {
            if (lo == hi)
                return lo;
            let mid = (lo + hi) >> 1;
            let diff = arr[mid] - pos || (end ? this.value[mid].endSide : this.value[mid].startSide) - side;
            if (mid == lo)
                return diff >= 0 ? lo : hi;
            if (diff >= 0)
                hi = mid;
            else
                lo = mid + 1;
        }
    }
    between(offset, from, to, f) {
        for (let i = this.findIndex(from, -1000000000 /* Far */, true), e = this.findIndex(to, 1000000000 /* Far */, false, i); i < e; i++)
            if (f(this.from[i] + offset, this.to[i] + offset, this.value[i]) === false)
                return false;
    }
    map(offset, changes) {
        let value = [], from = [], to = [], newPos = -1, maxPoint = -1;
        for (let i = 0; i < this.value.length; i++) {
            let val = this.value[i], curFrom = this.from[i] + offset, curTo = this.to[i] + offset, newFrom, newTo;
            if (curFrom == curTo) {
                let mapped = changes.mapPos(curFrom, val.startSide, val.mapMode);
                if (mapped == null)
                    continue;
                newFrom = newTo = mapped;
            }
            else {
                newFrom = changes.mapPos(curFrom, val.startSide);
                newTo = changes.mapPos(curTo, val.endSide);
                if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0)
                    continue;
            }
            if ((newTo - newFrom || val.endSide - val.startSide) < 0)
                continue;
            if (newPos < 0)
                newPos = newFrom;
            if (val.point)
                maxPoint = Math.max(maxPoint, newTo - newFrom);
            value.push(val);
            from.push(newFrom - newPos);
            to.push(newTo - newPos);
        }
        return { mapped: value.length ? new Chunk(from, to, value, maxPoint) : null, pos: newPos };
    }
}
/**
A range set stores a collection of [ranges](https://codemirror.net/6/docs/ref/#rangeset.Range) in a
way that makes them efficient to [map](https://codemirror.net/6/docs/ref/#rangeset.RangeSet.map) and
[update](https://codemirror.net/6/docs/ref/#rangeset.RangeSet.update). This is an immutable data
structure.
*/
class RangeSet {
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    chunkPos, 
    /**
    @internal
    */
    chunk, 
    /**
    @internal
    */
    nextLayer = RangeSet.empty, 
    /**
    @internal
    */
    maxPoint) {
        this.chunkPos = chunkPos;
        this.chunk = chunk;
        this.nextLayer = nextLayer;
        this.maxPoint = maxPoint;
    }
    /**
    @internal
    */
    get length() {
        let last = this.chunk.length - 1;
        return last < 0 ? 0 : Math.max(this.chunkEnd(last), this.nextLayer.length);
    }
    /**
    The number of ranges in the set.
    */
    get size() {
        if (this.isEmpty)
            return 0;
        let size = this.nextLayer.size;
        for (let chunk of this.chunk)
            size += chunk.value.length;
        return size;
    }
    /**
    @internal
    */
    chunkEnd(index) {
        return this.chunkPos[index] + this.chunk[index].length;
    }
    /**
    Update the range set, optionally adding new ranges or filtering
    out existing ones.
    
    (The extra type parameter is just there as a kludge to work
    around TypeScript variance issues that prevented `RangeSet<X>`
    from being a subtype of `RangeSet<Y>` when `X` is a subtype of
    `Y`.)
    */
    update(updateSpec) {
        let { add = [], sort = false, filterFrom = 0, filterTo = this.length } = updateSpec;
        let filter = updateSpec.filter;
        if (add.length == 0 && !filter)
            return this;
        if (sort)
            add.slice().sort(cmpRange);
        if (this.isEmpty)
            return add.length ? RangeSet.of(add) : this;
        let cur = new LayerCursor(this, null, -1).goto(0), i = 0, spill = [];
        let builder = new RangeSetBuilder();
        while (cur.value || i < add.length) {
            if (i < add.length && (cur.from - add[i].from || cur.startSide - add[i].value.startSide) >= 0) {
                let range = add[i++];
                if (!builder.addInner(range.from, range.to, range.value))
                    spill.push(range);
            }
            else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length &&
                (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) &&
                (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) &&
                builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) {
                cur.nextChunk();
            }
            else {
                if (!filter || filterFrom > cur.to || filterTo < cur.from || filter(cur.from, cur.to, cur.value)) {
                    if (!builder.addInner(cur.from, cur.to, cur.value))
                        spill.push(new Range(cur.from, cur.to, cur.value));
                }
                cur.next();
            }
        }
        return builder.finishInner(this.nextLayer.isEmpty && !spill.length ? RangeSet.empty
            : this.nextLayer.update({ add: spill, filter, filterFrom, filterTo }));
    }
    /**
    Map this range set through a set of changes, return the new set.
    */
    map(changes) {
        if (changes.length == 0 || this.isEmpty)
            return this;
        let chunks = [], chunkPos = [], maxPoint = -1;
        for (let i = 0; i < this.chunk.length; i++) {
            let start = this.chunkPos[i], chunk = this.chunk[i];
            let touch = changes.touchesRange(start, start + chunk.length);
            if (touch === false) {
                maxPoint = Math.max(maxPoint, chunk.maxPoint);
                chunks.push(chunk);
                chunkPos.push(changes.mapPos(start));
            }
            else if (touch === true) {
                let { mapped, pos } = chunk.map(start, changes);
                if (mapped) {
                    maxPoint = Math.max(maxPoint, mapped.maxPoint);
                    chunks.push(mapped);
                    chunkPos.push(pos);
                }
            }
        }
        let next = this.nextLayer.map(changes);
        return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next, maxPoint);
    }
    /**
    Iterate over the ranges that touch the region `from` to `to`,
    calling `f` for each. There is no guarantee that the ranges will
    be reported in any specific order. When the callback returns
    `false`, iteration stops.
    */
    between(from, to, f) {
        if (this.isEmpty)
            return;
        for (let i = 0; i < this.chunk.length; i++) {
            let start = this.chunkPos[i], chunk = this.chunk[i];
            if (to >= start && from <= start + chunk.length &&
                chunk.between(start, from - start, to - start, f) === false)
                return;
        }
        this.nextLayer.between(from, to, f);
    }
    /**
    Iterate over the ranges in this set, in order, including all
    ranges that end at or after `from`.
    */
    iter(from = 0) {
        return HeapCursor.from([this]).goto(from);
    }
    /**
    @internal
    */
    get isEmpty() { return this.nextLayer == this; }
    /**
    Iterate over the ranges in a collection of sets, in order,
    starting from `from`.
    */
    static iter(sets, from = 0) {
        return HeapCursor.from(sets).goto(from);
    }
    /**
    Iterate over two groups of sets, calling methods on `comparator`
    to notify it of possible differences.
    */
    static compare(oldSets, newSets, 
    /**
    This indicates how the underlying data changed between these
    ranges, and is needed to synchronize the iteration. `from` and
    `to` are coordinates in the _new_ space, after these changes.
    */
    textDiff, comparator, 
    /**
    Can be used to ignore all non-point ranges, and points below
    the given size. When -1, all ranges are compared.
    */
    minPointSize = -1) {
        let a = oldSets.filter(set => set.maxPoint >= 500 /* BigPointSize */ ||
            !set.isEmpty && newSets.indexOf(set) < 0 && set.maxPoint >= minPointSize);
        let b = newSets.filter(set => set.maxPoint >= 500 /* BigPointSize */ ||
            !set.isEmpty && oldSets.indexOf(set) < 0 && set.maxPoint >= minPointSize);
        let sharedChunks = findSharedChunks(a, b);
        let sideA = new SpanCursor(a, sharedChunks, minPointSize);
        let sideB = new SpanCursor(b, sharedChunks, minPointSize);
        textDiff.iterGaps((fromA, fromB, length) => compare(sideA, fromA, sideB, fromB, length, comparator));
        if (textDiff.empty && textDiff.length == 0)
            compare(sideA, 0, sideB, 0, 0, comparator);
    }
    /**
    Compare the contents of two groups of range sets, returning true
    if they are equivalent in the given range.
    */
    static eq(oldSets, newSets, from = 0, to) {
        if (to == null)
            to = 1000000000 /* Far */;
        let a = oldSets.filter(set => !set.isEmpty && newSets.indexOf(set) < 0);
        let b = newSets.filter(set => !set.isEmpty && oldSets.indexOf(set) < 0);
        if (a.length != b.length)
            return false;
        if (!a.length)
            return true;
        let sharedChunks = findSharedChunks(a, b);
        let sideA = new SpanCursor(a, sharedChunks, 0).goto(from), sideB = new SpanCursor(b, sharedChunks, 0).goto(from);
        for (;;) {
            if (sideA.to != sideB.to ||
                !sameValues(sideA.active, sideB.active) ||
                sideA.point && (!sideB.point || !sideA.point.eq(sideB.point)))
                return false;
            if (sideA.to >= to)
                return true;
            sideA.next();
            sideB.next();
        }
    }
    /**
    Iterate over a group of range sets at the same time, notifying
    the iterator about the ranges covering every given piece of
    content. Returns the open count (see
    [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#rangeset.SpanIterator.span)) at the end
    of the iteration.
    */
    static spans(sets, from, to, iterator, 
    /**
    When given and greater than -1, only points of at least this
    size are taken into account.
    */
    minPointSize = -1) {
        let cursor = new SpanCursor(sets, null, minPointSize).goto(from), pos = from;
        let open = cursor.openStart;
        for (;;) {
            let curTo = Math.min(cursor.to, to);
            if (cursor.point) {
                iterator.point(pos, curTo, cursor.point, cursor.activeForPoint(cursor.to), open);
                open = cursor.openEnd(curTo) + (cursor.to > curTo ? 1 : 0);
            }
            else if (curTo > pos) {
                iterator.span(pos, curTo, cursor.active, open);
                open = cursor.openEnd(curTo);
            }
            if (cursor.to > to)
                break;
            pos = cursor.to;
            cursor.next();
        }
        return open;
    }
    /**
    Create a range set for the given range or array of ranges. By
    default, this expects the ranges to be _sorted_ (by start
    position and, if two start at the same position,
    `value.startSide`). You can pass `true` as second argument to
    cause the method to sort them.
    */
    static of(ranges, sort = false) {
        let build = new RangeSetBuilder();
        for (let range of ranges instanceof Range ? [ranges] : sort ? lazySort(ranges) : ranges)
            build.add(range.from, range.to, range.value);
        return build.finish();
    }
}
/**
The empty set of ranges.
*/
RangeSet.empty = /*@__PURE__*/new RangeSet([], [], null, -1);
function lazySort(ranges) {
    if (ranges.length > 1)
        for (let prev = ranges[0], i = 1; i < ranges.length; i++) {
            let cur = ranges[i];
            if (cmpRange(prev, cur) > 0)
                return ranges.slice().sort(cmpRange);
            prev = cur;
        }
    return ranges;
}
RangeSet.empty.nextLayer = RangeSet.empty;
/**
A range set builder is a data structure that helps build up a
[range set](https://codemirror.net/6/docs/ref/#rangeset.RangeSet) directly, without first allocating
an array of [`Range`](https://codemirror.net/6/docs/ref/#rangeset.Range) objects.
*/
class RangeSetBuilder {
    /**
    Create an empty builder.
    */
    constructor() {
        this.chunks = [];
        this.chunkPos = [];
        this.chunkStart = -1;
        this.last = null;
        this.lastFrom = -1000000000 /* Far */;
        this.lastTo = -1000000000 /* Far */;
        this.from = [];
        this.to = [];
        this.value = [];
        this.maxPoint = -1;
        this.setMaxPoint = -1;
        this.nextLayer = null;
    }
    finishChunk(newArrays) {
        this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
        this.chunkPos.push(this.chunkStart);
        this.chunkStart = -1;
        this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
        this.maxPoint = -1;
        if (newArrays) {
            this.from = [];
            this.to = [];
            this.value = [];
        }
    }
    /**
    Add a range. Ranges should be added in sorted (by `from` and
    `value.startSide`) order.
    */
    add(from, to, value) {
        if (!this.addInner(from, to, value))
            (this.nextLayer || (this.nextLayer = new RangeSetBuilder)).add(from, to, value);
    }
    /**
    @internal
    */
    addInner(from, to, value) {
        let diff = from - this.lastTo || value.startSide - this.last.endSide;
        if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0)
            throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        if (diff < 0)
            return false;
        if (this.from.length == 250 /* ChunkSize */)
            this.finishChunk(true);
        if (this.chunkStart < 0)
            this.chunkStart = from;
        this.from.push(from - this.chunkStart);
        this.to.push(to - this.chunkStart);
        this.last = value;
        this.lastFrom = from;
        this.lastTo = to;
        this.value.push(value);
        if (value.point)
            this.maxPoint = Math.max(this.maxPoint, to - from);
        return true;
    }
    /**
    @internal
    */
    addChunk(from, chunk) {
        if ((from - this.lastTo || chunk.value[0].startSide - this.last.endSide) < 0)
            return false;
        if (this.from.length)
            this.finishChunk(true);
        this.setMaxPoint = Math.max(this.setMaxPoint, chunk.maxPoint);
        this.chunks.push(chunk);
        this.chunkPos.push(from);
        let last = chunk.value.length - 1;
        this.last = chunk.value[last];
        this.lastFrom = chunk.from[last] + from;
        this.lastTo = chunk.to[last] + from;
        return true;
    }
    /**
    Finish the range set. Returns the new set. The builder can't be
    used anymore after this has been called.
    */
    finish() { return this.finishInner(RangeSet.empty); }
    /**
    @internal
    */
    finishInner(next) {
        if (this.from.length)
            this.finishChunk(false);
        if (this.chunks.length == 0)
            return next;
        let result = new RangeSet(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
        this.from = null; // Make sure further `add` calls produce errors
        return result;
    }
}
function findSharedChunks(a, b) {
    let inA = new Map();
    for (let set of a)
        for (let i = 0; i < set.chunk.length; i++)
            if (set.chunk[i].maxPoint < 500 /* BigPointSize */)
                inA.set(set.chunk[i], set.chunkPos[i]);
    let shared = new Set();
    for (let set of b)
        for (let i = 0; i < set.chunk.length; i++)
            if (inA.get(set.chunk[i]) == set.chunkPos[i])
                shared.add(set.chunk[i]);
    return shared;
}
class LayerCursor {
    constructor(layer, skip, minPoint, rank = 0) {
        this.layer = layer;
        this.skip = skip;
        this.minPoint = minPoint;
        this.rank = rank;
    }
    get startSide() { return this.value ? this.value.startSide : 0; }
    get endSide() { return this.value ? this.value.endSide : 0; }
    goto(pos, side = -1000000000 /* Far */) {
        this.chunkIndex = this.rangeIndex = 0;
        this.gotoInner(pos, side, false);
        return this;
    }
    gotoInner(pos, side, forward) {
        while (this.chunkIndex < this.layer.chunk.length) {
            let next = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(next) ||
                this.layer.chunkEnd(this.chunkIndex) < pos ||
                next.maxPoint < this.minPoint))
                break;
            this.chunkIndex++;
            forward = false;
        }
        let rangeIndex = this.chunkIndex == this.layer.chunk.length ? 0
            : this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], side, true);
        if (!forward || this.rangeIndex < rangeIndex)
            this.rangeIndex = rangeIndex;
        this.next();
    }
    forward(pos, side) {
        if ((this.to - pos || this.endSide - side) < 0)
            this.gotoInner(pos, side, true);
    }
    next() {
        for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
                this.from = this.to = 1000000000 /* Far */;
                this.value = null;
                break;
            }
            else {
                let chunkPos = this.layer.chunkPos[this.chunkIndex], chunk = this.layer.chunk[this.chunkIndex];
                let from = chunkPos + chunk.from[this.rangeIndex];
                this.from = from;
                this.to = chunkPos + chunk.to[this.rangeIndex];
                this.value = chunk.value[this.rangeIndex];
                if (++this.rangeIndex == chunk.value.length) {
                    this.chunkIndex++;
                    if (this.skip) {
                        while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]))
                            this.chunkIndex++;
                    }
                    this.rangeIndex = 0;
                }
                if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
                    break;
            }
        }
    }
    nextChunk() {
        this.chunkIndex++;
        this.rangeIndex = 0;
        this.next();
    }
    compare(other) {
        return this.from - other.from || this.startSide - other.startSide || this.to - other.to || this.endSide - other.endSide;
    }
}
class HeapCursor {
    constructor(heap) {
        this.heap = heap;
    }
    static from(sets, skip = null, minPoint = -1) {
        let heap = [];
        for (let i = 0; i < sets.length; i++) {
            for (let cur = sets[i]; !cur.isEmpty; cur = cur.nextLayer) {
                if (cur.maxPoint >= minPoint)
                    heap.push(new LayerCursor(cur, skip, minPoint, i));
            }
        }
        return heap.length == 1 ? heap[0] : new HeapCursor(heap);
    }
    get startSide() { return this.value ? this.value.startSide : 0; }
    goto(pos, side = -1000000000 /* Far */) {
        for (let cur of this.heap)
            cur.goto(pos, side);
        for (let i = this.heap.length >> 1; i >= 0; i--)
            heapBubble(this.heap, i);
        this.next();
        return this;
    }
    forward(pos, side) {
        for (let cur of this.heap)
            cur.forward(pos, side);
        for (let i = this.heap.length >> 1; i >= 0; i--)
            heapBubble(this.heap, i);
        if ((this.to - pos || this.value.endSide - side) < 0)
            this.next();
    }
    next() {
        if (this.heap.length == 0) {
            this.from = this.to = 1000000000 /* Far */;
            this.value = null;
            this.rank = -1;
        }
        else {
            let top = this.heap[0];
            this.from = top.from;
            this.to = top.to;
            this.value = top.value;
            this.rank = top.rank;
            if (top.value)
                top.next();
            heapBubble(this.heap, 0);
        }
    }
}
function heapBubble(heap, index) {
    for (let cur = heap[index];;) {
        let childIndex = (index << 1) + 1;
        if (childIndex >= heap.length)
            break;
        let child = heap[childIndex];
        if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
            child = heap[childIndex + 1];
            childIndex++;
        }
        if (cur.compare(child) < 0)
            break;
        heap[childIndex] = cur;
        heap[index] = child;
        index = childIndex;
    }
}
class SpanCursor {
    constructor(sets, skip, minPoint) {
        this.minPoint = minPoint;
        this.active = [];
        this.activeTo = [];
        this.activeRank = [];
        this.minActive = -1;
        // A currently active point range, if any
        this.point = null;
        this.pointFrom = 0;
        this.pointRank = 0;
        this.to = -1000000000 /* Far */;
        this.endSide = 0;
        this.openStart = -1;
        this.cursor = HeapCursor.from(sets, skip, minPoint);
    }
    goto(pos, side = -1000000000 /* Far */) {
        this.cursor.goto(pos, side);
        this.active.length = this.activeTo.length = this.activeRank.length = 0;
        this.minActive = -1;
        this.to = pos;
        this.endSide = side;
        this.openStart = -1;
        this.next();
        return this;
    }
    forward(pos, side) {
        while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0)
            this.removeActive(this.minActive);
        this.cursor.forward(pos, side);
    }
    removeActive(index) {
        remove(this.active, index);
        remove(this.activeTo, index);
        remove(this.activeRank, index);
        this.minActive = findMinIndex(this.active, this.activeTo);
    }
    addActive(trackOpen) {
        let i = 0, { value, to, rank } = this.cursor;
        while (i < this.activeRank.length && this.activeRank[i] <= rank)
            i++;
        insert(this.active, i, value);
        insert(this.activeTo, i, to);
        insert(this.activeRank, i, rank);
        if (trackOpen)
            insert(trackOpen, i, this.cursor.from);
        this.minActive = findMinIndex(this.active, this.activeTo);
    }
    // After calling this, if `this.point` != null, the next range is a
    // point. Otherwise, it's a regular range, covered by `this.active`.
    next() {
        let from = this.to, wasPoint = this.point;
        this.point = null;
        let trackOpen = this.openStart < 0 ? [] : null, trackExtra = 0;
        for (;;) {
            let a = this.minActive;
            if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[a] > from) {
                    this.to = this.activeTo[a];
                    this.endSide = this.active[a].endSide;
                    break;
                }
                this.removeActive(a);
                if (trackOpen)
                    remove(trackOpen, a);
            }
            else if (!this.cursor.value) {
                this.to = this.endSide = 1000000000 /* Far */;
                break;
            }
            else if (this.cursor.from > from) {
                this.to = this.cursor.from;
                this.endSide = this.cursor.startSide;
                break;
            }
            else {
                let nextVal = this.cursor.value;
                if (!nextVal.point) { // Opening a range
                    this.addActive(trackOpen);
                    this.cursor.next();
                }
                else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to && nextVal.endSide == this.endSide) {
                    // Ignore any non-empty points that end precisely at the end of the prev point
                    this.cursor.next();
                }
                else { // New point
                    this.point = nextVal;
                    this.pointFrom = this.cursor.from;
                    this.pointRank = this.cursor.rank;
                    this.to = this.cursor.to;
                    this.endSide = nextVal.endSide;
                    if (this.cursor.from < from)
                        trackExtra = 1;
                    this.cursor.next();
                    if (this.to > from)
                        this.forward(this.to, this.endSide);
                    break;
                }
            }
        }
        if (trackOpen) {
            let openStart = 0;
            while (openStart < trackOpen.length && trackOpen[openStart] < from)
                openStart++;
            this.openStart = openStart + trackExtra;
        }
    }
    activeForPoint(to) {
        if (!this.active.length)
            return this.active;
        let active = [];
        for (let i = this.active.length - 1; i >= 0; i--) {
            if (this.activeRank[i] < this.pointRank)
                break;
            if (this.activeTo[i] > to || this.activeTo[i] == to && this.active[i].endSide >= this.point.endSide)
                active.push(this.active[i]);
        }
        return active.reverse();
    }
    openEnd(to) {
        let open = 0;
        for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > to; i--)
            open++;
        return open;
    }
}
function compare(a, startA, b, startB, length, comparator) {
    a.goto(startA);
    b.goto(startB);
    let endB = startB + length;
    let pos = startB, dPos = startB - startA;
    for (;;) {
        let diff = (a.to + dPos) - b.to || a.endSide - b.endSide;
        let end = diff < 0 ? a.to + dPos : b.to, clipEnd = Math.min(end, endB);
        if (a.point || b.point) {
            if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point)) &&
                sameValues(a.activeForPoint(a.to + dPos), b.activeForPoint(b.to))))
                comparator.comparePoint(pos, clipEnd, a.point, b.point);
        }
        else {
            if (clipEnd > pos && !sameValues(a.active, b.active))
                comparator.compareRange(pos, clipEnd, a.active, b.active);
        }
        if (end > endB)
            break;
        pos = end;
        if (diff <= 0)
            a.next();
        if (diff >= 0)
            b.next();
    }
}
function sameValues(a, b) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (a[i] != b[i] && !a[i].eq(b[i]))
            return false;
    return true;
}
function remove(array, index) {
    for (let i = index, e = array.length - 1; i < e; i++)
        array[i] = array[i + 1];
    array.pop();
}
function insert(array, index, value) {
    for (let i = array.length - 1; i >= index; i--)
        array[i + 1] = array[i];
    array[index] = value;
}
function findMinIndex(value, array) {
    let found = -1, foundPos = 1000000000 /* Far */;
    for (let i = 0; i < array.length; i++)
        if ((array[i] - foundPos || value[i].endSide - value[found].endSide) < 0) {
            found = i;
            foundPos = array[i];
        }
    return found;
}




/***/ }),
/* 28 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* reexport safe */ _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Annotation": () => (/* binding */ Annotation),
/* harmony export */   "AnnotationType": () => (/* binding */ AnnotationType),
/* harmony export */   "ChangeDesc": () => (/* binding */ ChangeDesc),
/* harmony export */   "ChangeSet": () => (/* binding */ ChangeSet),
/* harmony export */   "CharCategory": () => (/* binding */ CharCategory),
/* harmony export */   "Compartment": () => (/* binding */ Compartment),
/* harmony export */   "EditorSelection": () => (/* binding */ EditorSelection),
/* harmony export */   "EditorState": () => (/* binding */ EditorState),
/* harmony export */   "Facet": () => (/* binding */ Facet),
/* harmony export */   "MapMode": () => (/* binding */ MapMode),
/* harmony export */   "Prec": () => (/* binding */ Prec),
/* harmony export */   "SelectionRange": () => (/* binding */ SelectionRange),
/* harmony export */   "StateEffect": () => (/* binding */ StateEffect),
/* harmony export */   "StateEffectType": () => (/* binding */ StateEffectType),
/* harmony export */   "StateField": () => (/* binding */ StateField),
/* harmony export */   "Transaction": () => (/* binding */ Transaction),
/* harmony export */   "combineConfig": () => (/* binding */ combineConfig)
/* harmony export */ });
/* harmony import */ var _codemirror_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);



const DefaultSplit = /\r\n?|\n/;
/**
Distinguishes different ways in which positions can be mapped.
*/
var MapMode = /*@__PURE__*/(function (MapMode) {
    /**
    Map a position to a valid new position, even when its context
    was deleted.
    */
    MapMode[MapMode["Simple"] = 0] = "Simple";
    /**
    Return null if deletion happens across the position.
    */
    MapMode[MapMode["TrackDel"] = 1] = "TrackDel";
    /**
    Return null if the character _before_ the position is deleted.
    */
    MapMode[MapMode["TrackBefore"] = 2] = "TrackBefore";
    /**
    Return null if the character _after_ the position is deleted.
    */
    MapMode[MapMode["TrackAfter"] = 3] = "TrackAfter";
return MapMode})(MapMode || (MapMode = {}));
/**
A change description is a variant of [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet)
that doesn't store the inserted text. As such, it can't be
applied, but is cheaper to store and manipulate.
*/
class ChangeDesc {
    // Sections are encoded as pairs of integers. The first is the
    // length in the current document, and the second is -1 for
    // unaffected sections, and the length of the replacement content
    // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
    // 0), and a replacement two positive numbers.
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    sections) {
        this.sections = sections;
    }
    /**
    The length of the document before the change.
    */
    get length() {
        let result = 0;
        for (let i = 0; i < this.sections.length; i += 2)
            result += this.sections[i];
        return result;
    }
    /**
    The length of the document after the change.
    */
    get newLength() {
        let result = 0;
        for (let i = 0; i < this.sections.length; i += 2) {
            let ins = this.sections[i + 1];
            result += ins < 0 ? this.sections[i] : ins;
        }
        return result;
    }
    /**
    False when there are actual changes in this set.
    */
    get empty() { return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0; }
    /**
    Iterate over the unchanged parts left by these changes.
    */
    iterGaps(f) {
        for (let i = 0, posA = 0, posB = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++];
            if (ins < 0) {
                f(posA, posB, len);
                posB += len;
            }
            else {
                posB += ins;
            }
            posA += len;
        }
    }
    /**
    Iterate over the ranges changed by these changes. (See
    [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
    variant that also provides you with the inserted text.)
    
    When `individual` is true, adjacent changes (which are kept
    separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
    reported separately.
    */
    iterChangedRanges(f, individual = false) {
        iterChanges(this, f, individual);
    }
    /**
    Get a description of the inverted form of these changes.
    */
    get invertedDesc() {
        let sections = [];
        for (let i = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++];
            if (ins < 0)
                sections.push(len, ins);
            else
                sections.push(ins, len);
        }
        return new ChangeDesc(sections);
    }
    /**
    Compute the combined effect of applying another set of changes
    after this one. The length of the document after this set should
    match the length before `other`.
    */
    composeDesc(other) { return this.empty ? other : other.empty ? this : composeSets(this, other); }
    /**
    Map this description, which should start with the same document
    as `other`, over another set of changes, so that it can be
    applied after it. When `before` is true, map as if the changes
    in `other` happened before the ones in `this`.
    */
    mapDesc(other, before = false) { return other.empty ? this : mapSet(this, other, before); }
    mapPos(pos, assoc = -1, mode = MapMode.Simple) {
        let posA = 0, posB = 0;
        for (let i = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++], endA = posA + len;
            if (ins < 0) {
                if (endA > pos)
                    return posB + (pos - posA);
                posB += len;
            }
            else {
                if (mode != MapMode.Simple && endA >= pos &&
                    (mode == MapMode.TrackDel && posA < pos && endA > pos ||
                        mode == MapMode.TrackBefore && posA < pos ||
                        mode == MapMode.TrackAfter && endA > pos))
                    return null;
                if (endA > pos || endA == pos && assoc < 0 && !len)
                    return pos == posA || assoc < 0 ? posB : posB + ins;
                posB += ins;
            }
            posA = endA;
        }
        if (pos > posA)
            throw new RangeError(`Position ${pos} is out of range for changeset of length ${posA}`);
        return posB;
    }
    /**
    Check whether these changes touch a given range. When one of the
    changes entirely covers the range, the string `"cover"` is
    returned.
    */
    touchesRange(from, to = from) {
        for (let i = 0, pos = 0; i < this.sections.length && pos <= to;) {
            let len = this.sections[i++], ins = this.sections[i++], end = pos + len;
            if (ins >= 0 && pos <= to && end >= from)
                return pos < from && end > to ? "cover" : true;
            pos = end;
        }
        return false;
    }
    /**
    @internal
    */
    toString() {
        let result = "";
        for (let i = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++];
            result += (result ? " " : "") + len + (ins >= 0 ? ":" + ins : "");
        }
        return result;
    }
    /**
    Serialize this change desc to a JSON-representable value.
    */
    toJSON() { return this.sections; }
    /**
    Create a change desc from its JSON representation (as produced
    by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
    */
    static fromJSON(json) {
        if (!Array.isArray(json) || json.length % 2 || json.some(a => typeof a != "number"))
            throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new ChangeDesc(json);
    }
}
/**
A change set represents a group of modifications to a document. It
stores the document length, and can only be applied to documents
with exactly that length.
*/
class ChangeSet extends ChangeDesc {
    /**
    @internal
    */
    constructor(sections, 
    /**
    @internal
    */
    inserted) {
        super(sections);
        this.inserted = inserted;
    }
    /**
    Apply the changes to a document, returning the modified
    document.
    */
    apply(doc) {
        if (this.length != doc.length)
            throw new RangeError("Applying change set to a document with the wrong length");
        iterChanges(this, (fromA, toA, fromB, _toB, text) => doc = doc.replace(fromB, fromB + (toA - fromA), text), false);
        return doc;
    }
    mapDesc(other, before = false) { return mapSet(this, other, before, true); }
    /**
    Given the document as it existed _before_ the changes, return a
    change set that represents the inverse of this set, which could
    be used to go from the document created by the changes back to
    the document as it existed before the changes.
    */
    invert(doc) {
        let sections = this.sections.slice(), inserted = [];
        for (let i = 0, pos = 0; i < sections.length; i += 2) {
            let len = sections[i], ins = sections[i + 1];
            if (ins >= 0) {
                sections[i] = ins;
                sections[i + 1] = len;
                let index = i >> 1;
                while (inserted.length < index)
                    inserted.push(_codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty);
                inserted.push(len ? doc.slice(pos, pos + len) : _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty);
            }
            pos += len;
        }
        return new ChangeSet(sections, inserted);
    }
    /**
    Combine two subsequent change sets into a single set. `other`
    must start in the document produced by `this`. If `this` goes
    `docA` → `docB` and `other` represents `docB` → `docC`, the
    returned value will represent the change `docA` → `docC`.
    */
    compose(other) { return this.empty ? other : other.empty ? this : composeSets(this, other, true); }
    /**
    Given another change set starting in the same document, maps this
    change set over the other, producing a new change set that can be
    applied to the document produced by applying `other`. When
    `before` is `true`, order changes as if `this` comes before
    `other`, otherwise (the default) treat `other` as coming first.
    
    Given two changes `A` and `B`, `A.compose(B.map(A))` and
    `B.compose(A.map(B, true))` will produce the same document. This
    provides a basic form of [operational
    transformation](https://en.wikipedia.org/wiki/Operational_transformation),
    and can be used for collaborative editing.
    */
    map(other, before = false) { return other.empty ? this : mapSet(this, other, before, true); }
    /**
    Iterate over the changed ranges in the document, calling `f` for
    each.
    
    When `individual` is true, adjacent changes are reported
    separately.
    */
    iterChanges(f, individual = false) {
        iterChanges(this, f, individual);
    }
    /**
    Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
    set.
    */
    get desc() { return new ChangeDesc(this.sections); }
    /**
    @internal
    */
    filter(ranges) {
        let resultSections = [], resultInserted = [], filteredSections = [];
        let iter = new SectionIter(this);
        done: for (let i = 0, pos = 0;;) {
            let next = i == ranges.length ? 1e9 : ranges[i++];
            while (pos < next || pos == next && iter.len == 0) {
                if (iter.done)
                    break done;
                let len = Math.min(iter.len, next - pos);
                addSection(filteredSections, len, -1);
                let ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;
                addSection(resultSections, len, ins);
                if (ins > 0)
                    addInsert(resultInserted, resultSections, iter.text);
                iter.forward(len);
                pos += len;
            }
            let end = ranges[i++];
            while (pos < end) {
                if (iter.done)
                    break done;
                let len = Math.min(iter.len, end - pos);
                addSection(resultSections, len, -1);
                addSection(filteredSections, len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);
                iter.forward(len);
                pos += len;
            }
        }
        return { changes: new ChangeSet(resultSections, resultInserted),
            filtered: new ChangeDesc(filteredSections) };
    }
    /**
    Serialize this change set to a JSON-representable value.
    */
    toJSON() {
        let parts = [];
        for (let i = 0; i < this.sections.length; i += 2) {
            let len = this.sections[i], ins = this.sections[i + 1];
            if (ins < 0)
                parts.push(len);
            else if (ins == 0)
                parts.push([len]);
            else
                parts.push([len].concat(this.inserted[i >> 1].toJSON()));
        }
        return parts;
    }
    /**
    Create a change set for the given changes, for a document of the
    given length, using `lineSep` as line separator.
    */
    static of(changes, length, lineSep) {
        let sections = [], inserted = [], pos = 0;
        let total = null;
        function flush(force = false) {
            if (!force && !sections.length)
                return;
            if (pos < length)
                addSection(sections, length - pos, -1);
            let set = new ChangeSet(sections, inserted);
            total = total ? total.compose(set.map(total)) : set;
            sections = [];
            inserted = [];
            pos = 0;
        }
        function process(spec) {
            if (Array.isArray(spec)) {
                for (let sub of spec)
                    process(sub);
            }
            else if (spec instanceof ChangeSet) {
                if (spec.length != length)
                    throw new RangeError(`Mismatched change set length (got ${spec.length}, expected ${length})`);
                flush();
                total = total ? total.compose(spec.map(total)) : spec;
            }
            else {
                let { from, to = from, insert } = spec;
                if (from > to || from < 0 || to > length)
                    throw new RangeError(`Invalid change range ${from} to ${to} (in doc of length ${length})`);
                let insText = !insert ? _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty : typeof insert == "string" ? _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.of(insert.split(lineSep || DefaultSplit)) : insert;
                let insLen = insText.length;
                if (from == to && insLen == 0)
                    return;
                if (from < pos)
                    flush();
                if (from > pos)
                    addSection(sections, from - pos, -1);
                addSection(sections, to - from, insLen);
                addInsert(inserted, sections, insText);
                pos = to;
            }
        }
        process(changes);
        flush(!total);
        return total;
    }
    /**
    Create an empty changeset of the given length.
    */
    static empty(length) {
        return new ChangeSet(length ? [length, -1] : [], []);
    }
    /**
    Create a changeset from its JSON representation (as produced by
    [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
    */
    static fromJSON(json) {
        if (!Array.isArray(json))
            throw new RangeError("Invalid JSON representation of ChangeSet");
        let sections = [], inserted = [];
        for (let i = 0; i < json.length; i++) {
            let part = json[i];
            if (typeof part == "number") {
                sections.push(part, -1);
            }
            else if (!Array.isArray(part) || typeof part[0] != "number" || part.some((e, i) => i && typeof e != "string")) {
                throw new RangeError("Invalid JSON representation of ChangeSet");
            }
            else if (part.length == 1) {
                sections.push(part[0], 0);
            }
            else {
                while (inserted.length < i)
                    inserted.push(_codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty);
                inserted[i] = _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.of(part.slice(1));
                sections.push(part[0], inserted[i].length);
            }
        }
        return new ChangeSet(sections, inserted);
    }
}
function addSection(sections, len, ins, forceJoin = false) {
    if (len == 0 && ins <= 0)
        return;
    let last = sections.length - 2;
    if (last >= 0 && ins <= 0 && ins == sections[last + 1])
        sections[last] += len;
    else if (len == 0 && sections[last] == 0)
        sections[last + 1] += ins;
    else if (forceJoin) {
        sections[last] += len;
        sections[last + 1] += ins;
    }
    else
        sections.push(len, ins);
}
function addInsert(values, sections, value) {
    if (value.length == 0)
        return;
    let index = (sections.length - 2) >> 1;
    if (index < values.length) {
        values[values.length - 1] = values[values.length - 1].append(value);
    }
    else {
        while (values.length < index)
            values.push(_codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty);
        values.push(value);
    }
}
function iterChanges(desc, f, individual) {
    let inserted = desc.inserted;
    for (let posA = 0, posB = 0, i = 0; i < desc.sections.length;) {
        let len = desc.sections[i++], ins = desc.sections[i++];
        if (ins < 0) {
            posA += len;
            posB += len;
        }
        else {
            let endA = posA, endB = posB, text = _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty;
            for (;;) {
                endA += len;
                endB += ins;
                if (ins && inserted)
                    text = text.append(inserted[(i - 2) >> 1]);
                if (individual || i == desc.sections.length || desc.sections[i + 1] < 0)
                    break;
                len = desc.sections[i++];
                ins = desc.sections[i++];
            }
            f(posA, endA, posB, endB, text);
            posA = endA;
            posB = endB;
        }
    }
}
function mapSet(setA, setB, before, mkSet = false) {
    let sections = [], insert = mkSet ? [] : null;
    let a = new SectionIter(setA), b = new SectionIter(setB);
    for (let posA = 0, posB = 0;;) {
        if (a.ins == -1) {
            posA += a.len;
            a.next();
        }
        else if (b.ins == -1 && posB < posA) {
            let skip = Math.min(b.len, posA - posB);
            b.forward(skip);
            addSection(sections, skip, -1);
            posB += skip;
        }
        else if (b.ins >= 0 && (a.done || posB < posA || posB == posA && (b.len < a.len || b.len == a.len && !before))) {
            addSection(sections, b.ins, -1);
            while (posA > posB && !a.done && posA + a.len < posB + b.len) {
                posA += a.len;
                a.next();
            }
            posB += b.len;
            b.next();
        }
        else if (a.ins >= 0) {
            let len = 0, end = posA + a.len;
            for (;;) {
                if (b.ins >= 0 && posB > posA && posB + b.len < end) {
                    len += b.ins;
                    posB += b.len;
                    b.next();
                }
                else if (b.ins == -1 && posB < end) {
                    let skip = Math.min(b.len, end - posB);
                    len += skip;
                    b.forward(skip);
                    posB += skip;
                }
                else {
                    break;
                }
            }
            addSection(sections, len, a.ins);
            if (insert)
                addInsert(insert, sections, a.text);
            posA = end;
            a.next();
        }
        else if (a.done && b.done) {
            return insert ? new ChangeSet(sections, insert) : new ChangeDesc(sections);
        }
        else {
            throw new Error("Mismatched change set lengths");
        }
    }
}
function composeSets(setA, setB, mkSet = false) {
    let sections = [];
    let insert = mkSet ? [] : null;
    let a = new SectionIter(setA), b = new SectionIter(setB);
    for (let open = false;;) {
        if (a.done && b.done) {
            return insert ? new ChangeSet(sections, insert) : new ChangeDesc(sections);
        }
        else if (a.ins == 0) { // Deletion in A
            addSection(sections, a.len, 0, open);
            a.next();
        }
        else if (b.len == 0 && !b.done) { // Insertion in B
            addSection(sections, 0, b.ins, open);
            if (insert)
                addInsert(insert, sections, b.text);
            b.next();
        }
        else if (a.done || b.done) {
            throw new Error("Mismatched change set lengths");
        }
        else {
            let len = Math.min(a.len2, b.len), sectionLen = sections.length;
            if (a.ins == -1) {
                let insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;
                addSection(sections, len, insB, open);
                if (insert && insB)
                    addInsert(insert, sections, b.text);
            }
            else if (b.ins == -1) {
                addSection(sections, a.off ? 0 : a.len, len, open);
                if (insert)
                    addInsert(insert, sections, a.textBit(len));
            }
            else {
                addSection(sections, a.off ? 0 : a.len, b.off ? 0 : b.ins, open);
                if (insert && !b.off)
                    addInsert(insert, sections, b.text);
            }
            open = (a.ins > len || b.ins >= 0 && b.len > len) && (open || sections.length > sectionLen);
            a.forward2(len);
            b.forward(len);
        }
    }
}
class SectionIter {
    constructor(set) {
        this.set = set;
        this.i = 0;
        this.next();
    }
    next() {
        let { sections } = this.set;
        if (this.i < sections.length) {
            this.len = sections[this.i++];
            this.ins = sections[this.i++];
        }
        else {
            this.len = 0;
            this.ins = -2;
        }
        this.off = 0;
    }
    get done() { return this.ins == -2; }
    get len2() { return this.ins < 0 ? this.len : this.ins; }
    get text() {
        let { inserted } = this.set, index = (this.i - 2) >> 1;
        return index >= inserted.length ? _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty : inserted[index];
    }
    textBit(len) {
        let { inserted } = this.set, index = (this.i - 2) >> 1;
        return index >= inserted.length && !len ? _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.empty
            : inserted[index].slice(this.off, len == null ? undefined : this.off + len);
    }
    forward(len) {
        if (len == this.len)
            this.next();
        else {
            this.len -= len;
            this.off += len;
        }
    }
    forward2(len) {
        if (this.ins == -1)
            this.forward(len);
        else if (len == this.ins)
            this.next();
        else {
            this.ins -= len;
            this.off += len;
        }
    }
}

/**
A single selection range. When
[`allowMultipleSelections`](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)
is enabled, a [selection](https://codemirror.net/6/docs/ref/#state.EditorSelection) may hold
multiple ranges. By default, selections hold exactly one range.
*/
class SelectionRange {
    /**
    @internal
    */
    constructor(
    /**
    The lower boundary of the range.
    */
    from, 
    /**
    The upper boundary of the range.
    */
    to, flags) {
        this.from = from;
        this.to = to;
        this.flags = flags;
    }
    /**
    The anchor of the range—the side that doesn't move when you
    extend it.
    */
    get anchor() { return this.flags & 16 /* Inverted */ ? this.to : this.from; }
    /**
    The head of the range, which is moved when the range is
    [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
    */
    get head() { return this.flags & 16 /* Inverted */ ? this.from : this.to; }
    /**
    True when `anchor` and `head` are at the same position.
    */
    get empty() { return this.from == this.to; }
    /**
    If this is a cursor that is explicitly associated with the
    character on one of its sides, this returns the side. -1 means
    the character before its position, 1 the character after, and 0
    means no association.
    */
    get assoc() { return this.flags & 4 /* AssocBefore */ ? -1 : this.flags & 8 /* AssocAfter */ ? 1 : 0; }
    /**
    The bidirectional text level associated with this cursor, if
    any.
    */
    get bidiLevel() {
        let level = this.flags & 3 /* BidiLevelMask */;
        return level == 3 ? null : level;
    }
    /**
    The goal column (stored vertical offset) associated with a
    cursor. This is used to preserve the vertical position when
    [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
    lines of different length.
    */
    get goalColumn() {
        let value = this.flags >> 5 /* GoalColumnOffset */;
        return value == 33554431 /* NoGoalColumn */ ? undefined : value;
    }
    /**
    Map this range through a change, producing a valid range in the
    updated document.
    */
    map(change, assoc = -1) {
        let from = change.mapPos(this.from, assoc), to = change.mapPos(this.to, assoc);
        return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);
    }
    /**
    Extend this range to cover at least `from` to `to`.
    */
    extend(from, to = from) {
        if (from <= this.anchor && to >= this.anchor)
            return EditorSelection.range(from, to);
        let head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
        return EditorSelection.range(this.anchor, head);
    }
    /**
    Compare this range to another range.
    */
    eq(other) {
        return this.anchor == other.anchor && this.head == other.head;
    }
    /**
    Return a JSON-serializable object representing the range.
    */
    toJSON() { return { anchor: this.anchor, head: this.head }; }
    /**
    Convert a JSON representation of a range to a `SelectionRange`
    instance.
    */
    static fromJSON(json) {
        if (!json || typeof json.anchor != "number" || typeof json.head != "number")
            throw new RangeError("Invalid JSON representation for SelectionRange");
        return EditorSelection.range(json.anchor, json.head);
    }
}
/**
An editor selection holds one or more selection ranges.
*/
class EditorSelection {
    /**
    @internal
    */
    constructor(
    /**
    The ranges in the selection, sorted by position. Ranges cannot
    overlap (but they may touch, if they aren't empty).
    */
    ranges, 
    /**
    The index of the _main_ range in the selection (which is
    usually the range that was added last).
    */
    mainIndex = 0) {
        this.ranges = ranges;
        this.mainIndex = mainIndex;
    }
    /**
    Map a selection through a change. Used to adjust the selection
    position for changes.
    */
    map(change, assoc = -1) {
        if (change.empty)
            return this;
        return EditorSelection.create(this.ranges.map(r => r.map(change, assoc)), this.mainIndex);
    }
    /**
    Compare this selection to another selection.
    */
    eq(other) {
        if (this.ranges.length != other.ranges.length ||
            this.mainIndex != other.mainIndex)
            return false;
        for (let i = 0; i < this.ranges.length; i++)
            if (!this.ranges[i].eq(other.ranges[i]))
                return false;
        return true;
    }
    /**
    Get the primary selection range. Usually, you should make sure
    your code applies to _all_ ranges, by using methods like
    [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
    */
    get main() { return this.ranges[this.mainIndex]; }
    /**
    Make sure the selection only has one range. Returns a selection
    holding only the main range from this selection.
    */
    asSingle() {
        return this.ranges.length == 1 ? this : new EditorSelection([this.main]);
    }
    /**
    Extend this selection with an extra range.
    */
    addRange(range, main = true) {
        return EditorSelection.create([range].concat(this.ranges), main ? 0 : this.mainIndex + 1);
    }
    /**
    Replace a given range with another range, and then normalize the
    selection to merge and sort ranges if necessary.
    */
    replaceRange(range, which = this.mainIndex) {
        let ranges = this.ranges.slice();
        ranges[which] = range;
        return EditorSelection.create(ranges, this.mainIndex);
    }
    /**
    Convert this selection to an object that can be serialized to
    JSON.
    */
    toJSON() {
        return { ranges: this.ranges.map(r => r.toJSON()), main: this.mainIndex };
    }
    /**
    Create a selection from a JSON representation.
    */
    static fromJSON(json) {
        if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length)
            throw new RangeError("Invalid JSON representation for EditorSelection");
        return new EditorSelection(json.ranges.map((r) => SelectionRange.fromJSON(r)), json.main);
    }
    /**
    Create a selection holding a single range.
    */
    static single(anchor, head = anchor) {
        return new EditorSelection([EditorSelection.range(anchor, head)], 0);
    }
    /**
    Sort and merge the given set of ranges, creating a valid
    selection.
    */
    static create(ranges, mainIndex = 0) {
        if (ranges.length == 0)
            throw new RangeError("A selection needs at least one range");
        for (let pos = 0, i = 0; i < ranges.length; i++) {
            let range = ranges[i];
            if (range.empty ? range.from <= pos : range.from < pos)
                return normalized(ranges.slice(), mainIndex);
            pos = range.to;
        }
        return new EditorSelection(ranges, mainIndex);
    }
    /**
    Create a cursor selection range at the given position. You can
    safely ignore the optional arguments in most situations.
    */
    static cursor(pos, assoc = 0, bidiLevel, goalColumn) {
        return new SelectionRange(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 4 /* AssocBefore */ : 8 /* AssocAfter */) |
            (bidiLevel == null ? 3 : Math.min(2, bidiLevel)) |
            ((goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431 /* NoGoalColumn */) << 5 /* GoalColumnOffset */));
    }
    /**
    Create a selection range.
    */
    static range(anchor, head, goalColumn) {
        let goal = (goalColumn !== null && goalColumn !== void 0 ? goalColumn : 33554431 /* NoGoalColumn */) << 5 /* GoalColumnOffset */;
        return head < anchor ? new SelectionRange(head, anchor, 16 /* Inverted */ | goal) : new SelectionRange(anchor, head, goal);
    }
}
function normalized(ranges, mainIndex = 0) {
    let main = ranges[mainIndex];
    ranges.sort((a, b) => a.from - b.from);
    mainIndex = ranges.indexOf(main);
    for (let i = 1; i < ranges.length; i++) {
        let range = ranges[i], prev = ranges[i - 1];
        if (range.empty ? range.from <= prev.to : range.from < prev.to) {
            let from = prev.from, to = Math.max(range.to, prev.to);
            if (i <= mainIndex)
                mainIndex--;
            ranges.splice(--i, 2, range.anchor > range.head ? EditorSelection.range(to, from) : EditorSelection.range(from, to));
        }
    }
    return new EditorSelection(ranges, mainIndex);
}
function checkSelection(selection, docLength) {
    for (let range of selection.ranges)
        if (range.to > docLength)
            throw new RangeError("Selection points outside of document");
}

let nextID = 0;
/**
A facet is a labeled value that is associated with an editor
state. It takes inputs from any number of extensions, and combines
those into a single output value.

Examples of facets are the [theme](https://codemirror.net/6/docs/ref/#view.EditorView^theme) styles
associated with an editor or the [tab
size](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) (which is reduced to a single
value, using the input with the hightest precedence).
*/
class Facet {
    constructor(
    /**
    @internal
    */
    combine, 
    /**
    @internal
    */
    compareInput, 
    /**
    @internal
    */
    compare, isStatic, 
    /**
    @internal
    */
    extensions) {
        this.combine = combine;
        this.compareInput = compareInput;
        this.compare = compare;
        this.isStatic = isStatic;
        this.extensions = extensions;
        /**
        @internal
        */
        this.id = nextID++;
        this.default = combine([]);
    }
    /**
    Define a new facet.
    */
    static define(config = {}) {
        return new Facet(config.combine || ((a) => a), config.compareInput || ((a, b) => a === b), config.compare || (!config.combine ? sameArray : (a, b) => a === b), !!config.static, config.enables);
    }
    /**
    Returns an extension that adds the given value for this facet.
    */
    of(value) {
        return new FacetProvider([], this, 0 /* Static */, value);
    }
    /**
    Create an extension that computes a value for the facet from a
    state. You must take care to declare the parts of the state that
    this value depends on, since your function is only called again
    for a new state when one of those parts changed.
    
    In most cases, you'll want to use the
    [`provide`](https://codemirror.net/6/docs/ref/#state.StateField^define^config.provide) option when
    defining a field instead.
    */
    compute(deps, get) {
        if (this.isStatic)
            throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 1 /* Single */, get);
    }
    /**
    Create an extension that computes zero or more values for this
    facet from a state.
    */
    computeN(deps, get) {
        if (this.isStatic)
            throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 2 /* Multi */, get);
    }
    from(field, get) {
        if (!get)
            get = x => x;
        return this.compute([field], state => get(state.field(field)));
    }
}
function sameArray(a, b) {
    return a == b || a.length == b.length && a.every((e, i) => e === b[i]);
}
class FacetProvider {
    constructor(dependencies, facet, type, value) {
        this.dependencies = dependencies;
        this.facet = facet;
        this.type = type;
        this.value = value;
        this.id = nextID++;
    }
    dynamicSlot(addresses) {
        var _a;
        let getter = this.value;
        let compare = this.facet.compareInput;
        let idx = addresses[this.id] >> 1, multi = this.type == 2 /* Multi */;
        let depDoc = false, depSel = false, depAddrs = [];
        for (let dep of this.dependencies) {
            if (dep == "doc")
                depDoc = true;
            else if (dep == "selection")
                depSel = true;
            else if ((((_a = addresses[dep.id]) !== null && _a !== void 0 ? _a : 1) & 1) == 0)
                depAddrs.push(addresses[dep.id]);
        }
        return (state, tr) => {
            if (!tr || tr.reconfigured) {
                state.values[idx] = getter(state);
                return 1 /* Changed */;
            }
            else {
                let depChanged = (depDoc && tr.docChanged) || (depSel && (tr.docChanged || tr.selection)) ||
                    depAddrs.some(addr => (ensureAddr(state, addr) & 1 /* Changed */) > 0);
                if (!depChanged)
                    return 0;
                let newVal = getter(state), oldVal = tr.startState.values[idx];
                if (multi ? compareArray(newVal, oldVal, compare) : compare(newVal, oldVal))
                    return 0;
                state.values[idx] = newVal;
                return 1 /* Changed */;
            }
        };
    }
}
function compareArray(a, b, compare) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!compare(a[i], b[i]))
            return false;
    return true;
}
function dynamicFacetSlot(addresses, facet, providers) {
    let providerAddrs = providers.map(p => addresses[p.id]);
    let providerTypes = providers.map(p => p.type);
    let dynamic = providerAddrs.filter(p => !(p & 1));
    let idx = addresses[facet.id] >> 1;
    return (state, tr) => {
        let oldAddr = !tr ? null : tr.reconfigured ? tr.startState.config.address[facet.id] : idx << 1;
        let changed = oldAddr == null;
        for (let dynAddr of dynamic) {
            if (ensureAddr(state, dynAddr) & 1 /* Changed */)
                changed = true;
        }
        if (!changed)
            return 0;
        let values = [];
        for (let i = 0; i < providerAddrs.length; i++) {
            let value = getAddr(state, providerAddrs[i]);
            if (providerTypes[i] == 2 /* Multi */)
                for (let val of value)
                    values.push(val);
            else
                values.push(value);
        }
        let newVal = facet.combine(values);
        if (oldAddr != null && facet.compare(newVal, getAddr(tr.startState, oldAddr)))
            return 0;
        state.values[idx] = newVal;
        return 1 /* Changed */;
    };
}
function maybeIndex(state, id) {
    let found = state.config.address[id];
    return found == null ? null : found >> 1;
}
const initField = /*@__PURE__*/Facet.define({ static: true });
/**
Fields can store additional information in an editor state, and
keep it in sync with the rest of the state.
*/
class StateField {
    constructor(
    /**
    @internal
    */
    id, createF, updateF, compareF, 
    /**
    @internal
    */
    spec) {
        this.id = id;
        this.createF = createF;
        this.updateF = updateF;
        this.compareF = compareF;
        this.spec = spec;
        /**
        @internal
        */
        this.provides = undefined;
    }
    /**
    Define a state field.
    */
    static define(config) {
        let field = new StateField(nextID++, config.create, config.update, config.compare || ((a, b) => a === b), config);
        if (config.provide)
            field.provides = config.provide(field);
        return field;
    }
    create(state) {
        let init = state.facet(initField).find(i => i.field == this);
        return ((init === null || init === void 0 ? void 0 : init.create) || this.createF)(state);
    }
    /**
    @internal
    */
    slot(addresses) {
        let idx = addresses[this.id] >> 1;
        return (state, tr) => {
            if (!tr || (tr.reconfigured && maybeIndex(tr.startState, this.id) == null)) {
                state.values[idx] = this.create(state);
                return 1 /* Changed */;
            }
            let oldVal, changed = 0;
            if (tr.reconfigured) {
                oldVal = tr.startState.values[maybeIndex(tr.startState, this.id)];
                changed = 1 /* Changed */;
            }
            else {
                oldVal = tr.startState.values[idx];
            }
            let value = this.updateF(oldVal, tr);
            if (!changed && !this.compareF(oldVal, value))
                changed = 1 /* Changed */;
            if (changed)
                state.values[idx] = value;
            return changed;
        };
    }
    /**
    Returns an extension that enables this field and overrides the
    way it is initialized. Can be useful when you need to provide a
    non-default starting value for the field.
    */
    init(create) {
        return [this, initField.of({ field: this, create })];
    }
    /**
    State field instances can be used as
    [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
    given state.
    */
    get extension() { return this; }
}
const Prec_ = { fallback: 3, default: 2, extend: 1, override: 0 };
function prec(value) {
    return (ext) => new PrecExtension(ext, value);
}
/**
By default extensions are registered in the order they are found
in the flattened form of nested array that was provided.
Individual extension values can be assigned a precedence to
override this. Extensions that do not have a precedence set get
the precedence of the nearest parent with a precedence, or
[`default`](https://codemirror.net/6/docs/ref/#state.Prec.default) if there is no such parent. The
final ordering of extensions is determined by first sorting by
precedence and then by order within each precedence.
*/
const Prec = {
    /**
    A precedence below the default precedence, which will cause
    default-precedence extensions to override it even if they are
    specified later in the extension ordering.
    */
    fallback: /*@__PURE__*/prec(Prec_.fallback),
    /**
    The regular default precedence.
    */
    default: /*@__PURE__*/prec(Prec_.default),
    /**
    A higher-than-default precedence.
    */
    extend: /*@__PURE__*/prec(Prec_.extend),
    /**
    Precedence above the `default` and `extend` precedences.
    */
    override: /*@__PURE__*/prec(Prec_.override)
};
class PrecExtension {
    constructor(inner, prec) {
        this.inner = inner;
        this.prec = prec;
    }
}
/**
Extension compartments can be used to make a configuration
dynamic. By [wrapping](https://codemirror.net/6/docs/ref/#state.Compartment.of) part of your
configuration in a compartment, you can later
[replace](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure) that part through a
transaction.
*/
class Compartment {
    /**
    Create an instance of this compartment to add to your [state
    configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
    */
    of(ext) { return new CompartmentInstance(this, ext); }
    /**
    Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
    reconfigures this compartment.
    */
    reconfigure(content) {
        return Compartment.reconfigure.of({ compartment: this, extension: content });
    }
    /**
    Get the current content of the compartment in the state, or
    `undefined` if it isn't present.
    */
    get(state) {
        return state.config.compartments.get(this);
    }
}
class CompartmentInstance {
    constructor(compartment, inner) {
        this.compartment = compartment;
        this.inner = inner;
    }
}
class Configuration {
    constructor(base, compartments, dynamicSlots, address, staticValues) {
        this.base = base;
        this.compartments = compartments;
        this.dynamicSlots = dynamicSlots;
        this.address = address;
        this.staticValues = staticValues;
        this.statusTemplate = [];
        while (this.statusTemplate.length < dynamicSlots.length)
            this.statusTemplate.push(0 /* Uninitialized */);
    }
    staticFacet(facet) {
        let addr = this.address[facet.id];
        return addr == null ? facet.default : this.staticValues[addr >> 1];
    }
    static resolve(base, compartments, oldState) {
        let fields = [];
        let facets = Object.create(null);
        let newCompartments = new Map();
        for (let ext of flatten(base, compartments, newCompartments)) {
            if (ext instanceof StateField)
                fields.push(ext);
            else
                (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext);
        }
        let address = Object.create(null);
        let staticValues = [];
        let dynamicSlots = [];
        for (let field of fields) {
            address[field.id] = dynamicSlots.length << 1;
            dynamicSlots.push(a => field.slot(a));
        }
        for (let id in facets) {
            let providers = facets[id], facet = providers[0].facet;
            if (providers.every(p => p.type == 0 /* Static */)) {
                address[facet.id] = (staticValues.length << 1) | 1;
                let value = facet.combine(providers.map(p => p.value));
                let oldAddr = oldState ? oldState.config.address[facet.id] : null;
                if (oldAddr != null) {
                    let oldVal = getAddr(oldState, oldAddr);
                    if (facet.compare(value, oldVal))
                        value = oldVal;
                }
                staticValues.push(value);
            }
            else {
                for (let p of providers) {
                    if (p.type == 0 /* Static */) {
                        address[p.id] = (staticValues.length << 1) | 1;
                        staticValues.push(p.value);
                    }
                    else {
                        address[p.id] = dynamicSlots.length << 1;
                        dynamicSlots.push(a => p.dynamicSlot(a));
                    }
                }
                address[facet.id] = dynamicSlots.length << 1;
                dynamicSlots.push(a => dynamicFacetSlot(a, facet, providers));
            }
        }
        return new Configuration(base, newCompartments, dynamicSlots.map(f => f(address)), address, staticValues);
    }
}
function flatten(extension, compartments, newCompartments) {
    let result = [[], [], [], []];
    let seen = new Map();
    function inner(ext, prec) {
        let known = seen.get(ext);
        if (known != null) {
            if (known >= prec)
                return;
            let found = result[known].indexOf(ext);
            if (found > -1)
                result[known].splice(found, 1);
            if (ext instanceof CompartmentInstance)
                newCompartments.delete(ext.compartment);
        }
        seen.set(ext, prec);
        if (Array.isArray(ext)) {
            for (let e of ext)
                inner(e, prec);
        }
        else if (ext instanceof CompartmentInstance) {
            if (newCompartments.has(ext.compartment))
                throw new RangeError(`Duplicate use of compartment in extensions`);
            let content = compartments.get(ext.compartment) || ext.inner;
            newCompartments.set(ext.compartment, content);
            inner(content, prec);
        }
        else if (ext instanceof PrecExtension) {
            inner(ext.inner, ext.prec);
        }
        else if (ext instanceof StateField) {
            result[prec].push(ext);
            if (ext.provides)
                inner(ext.provides, prec);
        }
        else if (ext instanceof FacetProvider) {
            result[prec].push(ext);
            if (ext.facet.extensions)
                inner(ext.facet.extensions, prec);
        }
        else {
            let content = ext.extension;
            if (!content)
                throw new Error(`Unrecognized extension value in extension set (${ext}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
            inner(content, prec);
        }
    }
    inner(extension, Prec_.default);
    return result.reduce((a, b) => a.concat(b));
}
function ensureAddr(state, addr) {
    if (addr & 1)
        return 2 /* Computed */;
    let idx = addr >> 1;
    let status = state.status[idx];
    if (status == 4 /* Computing */)
        throw new Error("Cyclic dependency between fields and/or facets");
    if (status & 2 /* Computed */)
        return status;
    state.status[idx] = 4 /* Computing */;
    let changed = state.config.dynamicSlots[idx](state, state.applying);
    return state.status[idx] = 2 /* Computed */ | changed;
}
function getAddr(state, addr) {
    return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
}

const languageData = /*@__PURE__*/Facet.define();
const allowMultipleSelections = /*@__PURE__*/Facet.define({
    combine: values => values.some(v => v),
    static: true
});
const lineSeparator = /*@__PURE__*/Facet.define({
    combine: values => values.length ? values[0] : undefined,
    static: true
});
const changeFilter = /*@__PURE__*/Facet.define();
const transactionFilter = /*@__PURE__*/Facet.define();
const transactionExtender = /*@__PURE__*/Facet.define();

/**
Annotations are tagged values that are used to add metadata to
transactions in an extensible way. They should be used to model
things that effect the entire transaction (such as its [time
stamp](https://codemirror.net/6/docs/ref/#state.Transaction^time) or information about its
[origin](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent)). For effects that happen
_alongside_ the other changes made by the transaction, [state
effects](https://codemirror.net/6/docs/ref/#state.StateEffect) are more appropriate.
*/
class Annotation {
    /**
    @internal
    */
    constructor(
    /**
    The annotation type.
    */
    type, 
    /**
    The value of this annotation.
    */
    value) {
        this.type = type;
        this.value = value;
    }
    /**
    Define a new type of annotation.
    */
    static define() { return new AnnotationType(); }
}
/**
Marker that identifies a type of [annotation](https://codemirror.net/6/docs/ref/#state.Annotation).
*/
class AnnotationType {
    /**
    Create an instance of this annotation.
    */
    of(value) { return new Annotation(this, value); }
}
/**
Representation of a type of state effect. Defined with
[`StateEffect.define`](https://codemirror.net/6/docs/ref/#state.StateEffect^define).
*/
class StateEffectType {
    /**
    @internal
    */
    constructor(
    // The `any` types in these function types are there to work
    // around TypeScript issue #37631, where the type guard on
    // `StateEffect.is` mysteriously stops working when these properly
    // have type `Value`.
    /**
    @internal
    */
    map) {
        this.map = map;
    }
    /**
    Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
    type.
    */
    of(value) { return new StateEffect(this, value); }
}
/**
State effects can be used to represent additional effects
associated with a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction.effects). They
are often useful to model changes to custom [state
fields](https://codemirror.net/6/docs/ref/#state.StateField), when those changes aren't implicit in
document or selection changes.
*/
class StateEffect {
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    type, 
    /**
    The value of this effect.
    */
    value) {
        this.type = type;
        this.value = value;
    }
    /**
    Map this effect through a position mapping. Will return
    `undefined` when that ends up deleting the effect.
    */
    map(mapping) {
        let mapped = this.type.map(this.value, mapping);
        return mapped === undefined ? undefined : mapped == this.value ? this : new StateEffect(this.type, mapped);
    }
    /**
    Tells you whether this effect object is of a given
    [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
    */
    is(type) { return this.type == type; }
    /**
    Define a new effect type. The type parameter indicates the type
    of values that his effect holds.
    */
    static define(spec = {}) {
        return new StateEffectType(spec.map || (v => v));
    }
    /**
    Map an array of effects through a change set.
    */
    static mapEffects(effects, mapping) {
        if (!effects.length)
            return effects;
        let result = [];
        for (let effect of effects) {
            let mapped = effect.map(mapping);
            if (mapped)
                result.push(mapped);
        }
        return result;
    }
}
/**
This effect can be used to reconfigure the root extensions of
the editor. Doing this will discard any extensions
[appended](https://codemirror.net/6/docs/ref/#state.StateEffect^appendConfig), but does not reset
the content of [reconfigured](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure)
compartments.
*/
StateEffect.reconfigure = /*@__PURE__*/StateEffect.define();
/**
Append extensions to the top-level configuration of the editor.
*/
StateEffect.appendConfig = /*@__PURE__*/StateEffect.define();
/**
Changes to the editor state are grouped into transactions.
Typically, a user action creates a single transaction, which may
contain any number of document changes, may change the selection,
or have other effects. Create a transaction by calling
[`EditorState.update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
*/
class Transaction {
    /**
    @internal
    */
    constructor(
    /**
    The state from which the transaction starts.
    */
    startState, 
    /**
    The document changes made by this transaction.
    */
    changes, 
    /**
    The selection set by this transaction, or undefined if it
    doesn't explicitly set a selection.
    */
    selection, 
    /**
    The effects added to the transaction.
    */
    effects, 
    /**
    @internal
    */
    annotations, 
    /**
    Whether the selection should be scrolled into view after this
    transaction is dispatched.
    */
    scrollIntoView) {
        this.startState = startState;
        this.changes = changes;
        this.selection = selection;
        this.effects = effects;
        this.annotations = annotations;
        this.scrollIntoView = scrollIntoView;
        /**
        @internal
        */
        this._doc = null;
        /**
        @internal
        */
        this._state = null;
        if (selection)
            checkSelection(selection, changes.newLength);
        if (!annotations.some((a) => a.type == Transaction.time))
            this.annotations = annotations.concat(Transaction.time.of(Date.now()));
    }
    /**
    The new document produced by the transaction. Contrary to
    [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
    force the entire new state to be computed right away, so it is
    recommended that [transaction
    filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
    when they need to look at the new document.
    */
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc));
    }
    /**
    The new selection produced by the transaction. If
    [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
    this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
    current selection through the changes made by the transaction.
    */
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes);
    }
    /**
    The new state created by the transaction. Computed on demand
    (but retained for subsequent access), so itis recommended not to
    access it in [transaction
    filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
    */
    get state() {
        if (!this._state)
            this.startState.applyTransaction(this);
        return this._state;
    }
    /**
    Get the value of the given annotation type, if any.
    */
    annotation(type) {
        for (let ann of this.annotations)
            if (ann.type == type)
                return ann.value;
        return undefined;
    }
    /**
    Indicates whether the transaction changed the document.
    */
    get docChanged() { return !this.changes.empty; }
    /**
    Indicates whether this transaction reconfigures the state
    (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
    with a top-level configuration
    [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
    */
    get reconfigured() { return this.startState.config != this.state.config; }
}
/**
Annotation used to store transaction timestamps.
*/
Transaction.time = /*@__PURE__*/Annotation.define();
/**
Annotation used to associate a transaction with a user interface
event. The view will set this to...

 - `"input"` when the user types text
 - `"delete"` when the user deletes the selection or text near the selection
 - `"keyboardselection"` when moving the selection via the keyboard
 - `"pointerselection"` when moving the selection through the pointing device
 - `"paste"` when pasting content
 - `"cut"` when cutting
 - `"drop"` when content is inserted via drag-and-drop
*/
Transaction.userEvent = /*@__PURE__*/Annotation.define();
/**
Annotation indicating whether a transaction should be added to
the undo history or not.
*/
Transaction.addToHistory = /*@__PURE__*/Annotation.define();
/**
Annotation indicating (when present and true) that a transaction
represents a change made by some other actor, not the user. This
is used, for example, to tag other people's changes in
collaborative editing.
*/
Transaction.remote = /*@__PURE__*/Annotation.define();
function joinRanges(a, b) {
    let result = [];
    for (let iA = 0, iB = 0;;) {
        let from, to;
        if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {
            from = a[iA++];
            to = a[iA++];
        }
        else if (iB < b.length) {
            from = b[iB++];
            to = b[iB++];
        }
        else
            return result;
        if (!result.length || result[result.length - 1] < from)
            result.push(from, to);
        else if (result[result.length - 1] < to)
            result[result.length - 1] = to;
    }
}
function mergeTransaction(a, b, sequential) {
    var _a;
    let mapForA, mapForB, changes;
    if (sequential) {
        mapForA = b.changes;
        mapForB = ChangeSet.empty(b.changes.length);
        changes = a.changes.compose(b.changes);
    }
    else {
        mapForA = b.changes.map(a.changes);
        mapForB = a.changes.mapDesc(b.changes, true);
        changes = a.changes.compose(mapForA);
    }
    return {
        changes,
        selection: b.selection ? b.selection.map(mapForB) : (_a = a.selection) === null || _a === void 0 ? void 0 : _a.map(mapForA),
        effects: StateEffect.mapEffects(a.effects, mapForA).concat(StateEffect.mapEffects(b.effects, mapForB)),
        annotations: a.annotations.length ? a.annotations.concat(b.annotations) : b.annotations,
        scrollIntoView: a.scrollIntoView || b.scrollIntoView
    };
}
function resolveTransactionInner(state, spec, docSize) {
    let sel = spec.selection;
    return {
        changes: spec.changes instanceof ChangeSet ? spec.changes
            : ChangeSet.of(spec.changes || [], docSize, state.facet(lineSeparator)),
        selection: sel && (sel instanceof EditorSelection ? sel : EditorSelection.single(sel.anchor, sel.head)),
        effects: asArray(spec.effects),
        annotations: asArray(spec.annotations),
        scrollIntoView: !!spec.scrollIntoView
    };
}
function resolveTransaction(state, specs, filter) {
    let s = resolveTransactionInner(state, specs.length ? specs[0] : {}, state.doc.length);
    if (specs.length && specs[0].filter === false)
        filter = false;
    for (let i = 1; i < specs.length; i++) {
        if (specs[i].filter === false)
            filter = false;
        let seq = !!specs[i].sequential;
        s = mergeTransaction(s, resolveTransactionInner(state, specs[i], seq ? s.changes.newLength : state.doc.length), seq);
    }
    let tr = new Transaction(state, s.changes, s.selection, s.effects, s.annotations, s.scrollIntoView);
    return extendTransaction(filter ? filterTransaction(tr) : tr);
}
// Finish a transaction by applying filters if necessary.
function filterTransaction(tr) {
    let state = tr.startState;
    // Change filters
    let result = true;
    for (let filter of state.facet(changeFilter)) {
        let value = filter(tr);
        if (value === false) {
            result = false;
            break;
        }
        if (Array.isArray(value))
            result = result === true ? value : joinRanges(result, value);
    }
    if (result !== true) {
        let changes, back;
        if (result === false) {
            back = tr.changes.invertedDesc;
            changes = ChangeSet.empty(state.doc.length);
        }
        else {
            let filtered = tr.changes.filter(result);
            changes = filtered.changes;
            back = filtered.filtered.invertedDesc;
        }
        tr = new Transaction(state, changes, tr.selection && tr.selection.map(back), StateEffect.mapEffects(tr.effects, back), tr.annotations, tr.scrollIntoView);
    }
    // Transaction filters
    let filters = state.facet(transactionFilter);
    for (let i = filters.length - 1; i >= 0; i--) {
        let filtered = filters[i](tr);
        if (filtered instanceof Transaction)
            tr = filtered;
        else if (Array.isArray(filtered) && filtered.length == 1 && filtered[0] instanceof Transaction)
            tr = filtered[0];
        else
            tr = resolveTransaction(state, asArray(filtered), false);
    }
    return tr;
}
function extendTransaction(tr) {
    let state = tr.startState, extenders = state.facet(transactionExtender), spec = tr;
    for (let i = extenders.length - 1; i >= 0; i--) {
        let extension = extenders[i](tr);
        if (extension && Object.keys(extension).length)
            spec = mergeTransaction(tr, resolveTransactionInner(state, extension, tr.changes.newLength), true);
    }
    return spec == tr ? tr : new Transaction(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);
}
const none = [];
function asArray(value) {
    return value == null ? none : Array.isArray(value) ? value : [value];
}

/**
The categories produced by a [character
categorizer](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer). These are used
do things like selecting by word.
*/
var CharCategory = /*@__PURE__*/(function (CharCategory) {
    /**
    Word characters.
    */
    CharCategory[CharCategory["Word"] = 0] = "Word";
    /**
    Whitespace.
    */
    CharCategory[CharCategory["Space"] = 1] = "Space";
    /**
    Anything else.
    */
    CharCategory[CharCategory["Other"] = 2] = "Other";
return CharCategory})(CharCategory || (CharCategory = {}));
const nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let wordChar;
try {
    wordChar = /*@__PURE__*/new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
}
catch (_) { }
function hasWordChar(str) {
    if (wordChar)
        return wordChar.test(str);
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch)))
            return true;
    }
    return false;
}
function makeCategorizer(wordChars) {
    return (char) => {
        if (!/\S/.test(char))
            return CharCategory.Space;
        if (hasWordChar(char))
            return CharCategory.Word;
        for (let i = 0; i < wordChars.length; i++)
            if (char.indexOf(wordChars[i]) > -1)
                return CharCategory.Word;
        return CharCategory.Other;
    };
}

/**
The editor state class is a persistent (immutable) data structure.
To update a state, you [create](https://codemirror.net/6/docs/ref/#state.EditorState.update) a
[transaction](https://codemirror.net/6/docs/ref/#state.Transaction), which produces a _new_ state
instance, without modifying the original object.

As such, _never_ mutate properties of a state directly. That'll
just break things.
*/
class EditorState {
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    config, 
    /**
    The current document.
    */
    doc, 
    /**
    The current selection.
    */
    selection, tr = null) {
        this.config = config;
        this.doc = doc;
        this.selection = selection;
        /**
        @internal
        */
        this.applying = null;
        this.status = config.statusTemplate.slice();
        if (tr && tr.startState.config == config) {
            this.values = tr.startState.values.slice();
        }
        else {
            this.values = config.dynamicSlots.map(_ => null);
            // Copy over old values for shared facets/fields if this is a reconfigure
            if (tr)
                for (let id in config.address) {
                    let cur = config.address[id], prev = tr.startState.config.address[id];
                    if (prev != null && (cur & 1) == 0)
                        this.values[cur >> 1] = getAddr(tr.startState, prev);
                }
        }
        this.applying = tr;
        // Fill in the computed state immediately, so that further queries
        // for it made during the update return this state
        if (tr)
            tr._state = this;
        for (let i = 0; i < this.config.dynamicSlots.length; i++)
            ensureAddr(this, i << 1);
        this.applying = null;
    }
    field(field, require = true) {
        let addr = this.config.address[field.id];
        if (addr == null) {
            if (require)
                throw new RangeError("Field is not present in this state");
            return undefined;
        }
        ensureAddr(this, addr);
        return getAddr(this, addr);
    }
    /**
    Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
    state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
    can be passed. Unless
    [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
    [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
    are assumed to start in the _current_ document (not the document
    produced by previous specs), and its
    [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
    [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
    to the document created by its _own_ changes. The resulting
    transaction contains the combined effect of all the different
    specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
    specs take precedence over earlier ones.
    */
    update(...specs) {
        return resolveTransaction(this, specs, true);
    }
    /**
    @internal
    */
    applyTransaction(tr) {
        let conf = this.config, { base, compartments } = conf;
        for (let effect of tr.effects) {
            if (effect.is(Compartment.reconfigure)) {
                if (conf) {
                    compartments = new Map;
                    conf.compartments.forEach((val, key) => compartments.set(key, val));
                    conf = null;
                }
                compartments.set(effect.value.compartment, effect.value.extension);
            }
            else if (effect.is(StateEffect.reconfigure)) {
                conf = null;
                base = effect.value;
            }
            else if (effect.is(StateEffect.appendConfig)) {
                conf = null;
                base = asArray(base).concat(effect.value);
            }
        }
        new EditorState(conf || Configuration.resolve(base, compartments, this), tr.newDoc, tr.newSelection, tr);
    }
    /**
    Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
    replaces every selection range with the given content.
    */
    replaceSelection(text) {
        if (typeof text == "string")
            text = this.toText(text);
        return this.changeByRange(range => ({ changes: { from: range.from, to: range.to, insert: text },
            range: EditorSelection.cursor(range.from + text.length) }));
    }
    /**
    Create a set of changes and a new selection by running the given
    function for each range in the active selection. The function
    can return an optional set of changes (in the coordinate space
    of the start document), plus an updated range (in the coordinate
    space of the document produced by the call's own changes). This
    method will merge all the changes and ranges into a single
    changeset and selection, and return it as a [transaction
    spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
    [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
    */
    changeByRange(f) {
        let sel = this.selection;
        let result1 = f(sel.ranges[0]);
        let changes = this.changes(result1.changes), ranges = [result1.range];
        let effects = asArray(result1.effects);
        for (let i = 1; i < sel.ranges.length; i++) {
            let result = f(sel.ranges[i]);
            let newChanges = this.changes(result.changes), newMapped = newChanges.map(changes);
            for (let j = 0; j < i; j++)
                ranges[j] = ranges[j].map(newMapped);
            let mapBy = changes.mapDesc(newChanges, true);
            ranges.push(result.range.map(mapBy));
            changes = changes.compose(newMapped);
            effects = StateEffect.mapEffects(effects, newMapped).concat(StateEffect.mapEffects(asArray(result.effects), mapBy));
        }
        return {
            changes,
            selection: EditorSelection.create(ranges, sel.mainIndex),
            effects
        };
    }
    /**
    Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
    description, taking the state's document length and line
    separator into account.
    */
    changes(spec = []) {
        if (spec instanceof ChangeSet)
            return spec;
        return ChangeSet.of(spec, this.doc.length, this.facet(EditorState.lineSeparator));
    }
    /**
    Using the state's [line
    separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
    [`Text`](https://codemirror.net/6/docs/ref/#text.Text) instance from the given string.
    */
    toText(string) {
        return _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.of(string.split(this.facet(EditorState.lineSeparator) || DefaultSplit));
    }
    /**
    Return the given range of the document as a string.
    */
    sliceDoc(from = 0, to = this.doc.length) {
        return this.doc.sliceString(from, to, this.lineBreak);
    }
    /**
    Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
    */
    facet(facet) {
        let addr = this.config.address[facet.id];
        if (addr == null)
            return facet.default;
        ensureAddr(this, addr);
        return getAddr(this, addr);
    }
    /**
    Convert this state to a JSON-serializable object. When custom
    fields should be serialized, you can pass them in as an object
    mapping property names (in the resulting object, which should
    not use `doc` or `selection`) to fields.
    */
    toJSON(fields) {
        let result = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (fields)
            for (let prop in fields) {
                let value = fields[prop];
                if (value instanceof StateField)
                    result[prop] = value.spec.toJSON(this.field(fields[prop]), this);
            }
        return result;
    }
    /**
    Deserialize a state from its JSON representation. When custom
    fields should be deserialized, pass the same object you passed
    to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
    third argument.
    */
    static fromJSON(json, config = {}, fields) {
        if (!json || typeof json.doc != "string")
            throw new RangeError("Invalid JSON representation for EditorState");
        let fieldInit = [];
        if (fields)
            for (let prop in fields) {
                let field = fields[prop], value = json[prop];
                fieldInit.push(field.init(state => field.spec.fromJSON(value, state)));
            }
        return EditorState.create({
            doc: json.doc,
            selection: EditorSelection.fromJSON(json.selection),
            extensions: config.extensions ? fieldInit.concat([config.extensions]) : fieldInit
        });
    }
    /**
    Create a new state. You'll usually only need this when
    initializing an editor—updated states are created by applying
    transactions.
    */
    static create(config = {}) {
        let configuration = Configuration.resolve(config.extensions || [], new Map);
        let doc = config.doc instanceof _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text ? config.doc
            : _codemirror_text__WEBPACK_IMPORTED_MODULE_0__.Text.of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
        let selection = !config.selection ? EditorSelection.single(0)
            : config.selection instanceof EditorSelection ? config.selection
                : EditorSelection.single(config.selection.anchor, config.selection.head);
        checkSelection(selection, doc.length);
        if (!configuration.staticFacet(allowMultipleSelections))
            selection = selection.asSingle();
        return new EditorState(configuration, doc, selection);
    }
    /**
    The size (in columns) of a tab in the document, determined by
    the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
    */
    get tabSize() { return this.facet(EditorState.tabSize); }
    /**
    Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
    string for this state.
    */
    get lineBreak() { return this.facet(EditorState.lineSeparator) || "\n"; }
    /**
    Look up a translation for the given phrase (via the
    [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
    original string if no translation is found.
    */
    phrase(phrase) {
        for (let map of this.facet(EditorState.phrases))
            if (Object.prototype.hasOwnProperty.call(map, phrase))
                return map[phrase];
        return phrase;
    }
    /**
    Find the values for a given language data field, provided by the
    the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
    */
    languageDataAt(name, pos) {
        let values = [];
        for (let provider of this.facet(languageData)) {
            for (let result of provider(this, pos)) {
                if (Object.prototype.hasOwnProperty.call(result, name))
                    values.push(result[name]);
            }
        }
        return values;
    }
    /**
    Return a function that can categorize strings (expected to
    represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#text.findClusterBreak))
    into one of:
    
     - Word (contains an alphanumeric character or a character
       explicitly listed in the local language's `"wordChars"`
       language data, which should be a string)
     - Space (contains only whitespace)
     - Other (anything else)
    */
    charCategorizer(at) {
        return makeCategorizer(this.languageDataAt("wordChars", at).join(""));
    }
    /**
    Find the word at the given position, meaning the range
    containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
    around it. If no word characters are adjacent to the position,
    this returns null.
    */
    wordAt(pos) {
        let { text, from, length } = this.doc.lineAt(pos);
        let cat = this.charCategorizer(pos);
        let start = pos - from, end = pos - from;
        while (start > 0) {
            let prev = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_0__.findClusterBreak)(text, start, false);
            if (cat(text.slice(prev, start)) != CharCategory.Word)
                break;
            start = prev;
        }
        while (end < length) {
            let next = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_0__.findClusterBreak)(text, end);
            if (cat(text.slice(end, next)) != CharCategory.Word)
                break;
            end = next;
        }
        return start == end ? EditorSelection.range(start + from, end + from) : null;
    }
}
/**
A facet that, when enabled, causes the editor to allow multiple
ranges to be selected. Be careful though, because by default the
editor relies on the native DOM selection, which cannot handle
multiple selections. An extension like
[`drawSelection`](https://codemirror.net/6/docs/ref/#view.drawSelection) can be used to make
secondary selections visible to the user.
*/
EditorState.allowMultipleSelections = allowMultipleSelections;
/**
Configures the tab size to use in this state. The first
(highest-precedence) value of the facet is used. If no value is
given, this defaults to 4.
*/
EditorState.tabSize = /*@__PURE__*/Facet.define({
    combine: values => values.length ? values[0] : 4
});
/**
The line separator to use. By default, any of `"\n"`, `"\r\n"`
and `"\r"` is treated as a separator when splitting lines, and
lines are joined with `"\n"`.

When you configure a value here, only that precise separator
will be used, allowing you to round-trip documents through the
editor without normalizing line separators.
*/
EditorState.lineSeparator = lineSeparator;
/**
Registers translation phrases. The
[`phrase`](https://codemirror.net/6/docs/ref/#state.EditorState.phrase) method will look through
all objects registered with this facet to find translations for
its argument.
*/
EditorState.phrases = /*@__PURE__*/Facet.define();
/**
A facet used to register [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) providers.
*/
EditorState.languageData = languageData;
/**
Facet used to register change filters, which are called for each
transaction (unless explicitly
[disabled](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter)), and can suppress
part of the transaction's changes.

Such a function can return `true` to indicate that it doesn't
want to do anything, `false` to completely stop the changes in
the transaction, or a set of ranges in which changes should be
suppressed. Such ranges are represented as an array of numbers,
with each pair of two number indicating the start and end of a
range. So for example `[10, 20, 100, 110]` suppresses changes
between 10 and 20, and between 100 and 110.
*/
EditorState.changeFilter = changeFilter;
/**
Facet used to register a hook that gets a chance to update or
replace transaction specs before they are applied. This will
only be applied for transactions that don't have
[`filter`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter) set to `false`. You
can either return a single (possibly the input transaction), or
an array of specs (which will be combined in the same way as the
arguments to [`EditorState.update`](https://codemirror.net/6/docs/ref/#state.EditorState.update)).

When possible, it is recommended to avoid accessing
[`Transaction.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state) in a filter,
since it will force creation of a state that will then be
discarded again, if the transaction is actually filtered.

(This functionality should be used with care. Indiscriminately
modifying transaction is likely to break something or degrade
the user experience.)
*/
EditorState.transactionFilter = transactionFilter;
/**
This is a more limited form of
[`transactionFilter`](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter),
which can only add
[annotations](https://codemirror.net/6/docs/ref/#state.TransactionSpec.annotations) and
[effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects). _But_, this type
of filter runs even the transaction has disabled regular
[filtering](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter), making it suitable
for effects that don't need to touch the changes or selection,
but do want to process every transaction.

Extenders run _after_ filters, when both are applied.
*/
EditorState.transactionExtender = transactionExtender;
Compartment.reconfigure = /*@__PURE__*/StateEffect.define();

/**
Utility function for combining behaviors to fill in a config
object from an array of provided configs. Will, by default, error
when a field gets two values that aren't `===`-equal, but you can
provide combine functions per field to do something else.
*/
function combineConfig(configs, defaults, // Should hold only the optional properties of Config, but I haven't managed to express that
combine = {}) {
    let result = {};
    for (let config of configs)
        for (let key of Object.keys(config)) {
            let value = config[key], current = result[key];
            if (current === undefined)
                result[key] = value;
            else if (current === value || value === undefined) ; // No conflict
            else if (Object.hasOwnProperty.call(combine, key))
                result[key] = combine[key](current, value);
            else
                throw new Error("Config merge conflict for field " + key);
        }
    for (let key in defaults)
        if (result[key] === undefined)
            result[key] = defaults[key];
    return result;
}




/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "codePointAt": () => (/* binding */ codePointAt),
/* harmony export */   "codePointSize": () => (/* binding */ codePointSize),
/* harmony export */   "countColumn": () => (/* binding */ countColumn),
/* harmony export */   "findClusterBreak": () => (/* binding */ findClusterBreak),
/* harmony export */   "findColumn": () => (/* binding */ findColumn),
/* harmony export */   "fromCodePoint": () => (/* binding */ fromCodePoint)
/* harmony export */ });
// Compressed representation of the Grapheme_Cluster_Break=Extend
// information from
// http://www.unicode.org/Public/13.0.0/ucd/auxiliary/GraphemeBreakProperty.txt.
// Each pair of elements represents a range, as an offet from the
// previous range and a length. Numbers are in base-36, with the empty
// string being a shorthand for 1.
let extend = /*@__PURE__*/"lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(s => s ? parseInt(s, 36) : 1);
// Convert offsets into absolute values
for (let i = 1; i < extend.length; i++)
    extend[i] += extend[i - 1];
function isExtendingChar(code) {
    for (let i = 1; i < extend.length; i += 2)
        if (extend[i] > code)
            return extend[i - 1] <= code;
    return false;
}
function isRegionalIndicator(code) {
    return code >= 0x1F1E6 && code <= 0x1F1FF;
}
const ZWJ = 0x200d;
/**
Returns a next grapheme cluster break _after_ (not equal to)
`pos`, if `forward` is true, or before otherwise. Returns `pos`
itself if no further cluster break is available in the string.
Moves across surrogate pairs, extending characters, characters
joined with zero-width joiners, and flag emoji.
*/
function findClusterBreak(str, pos, forward = true) {
    return (forward ? nextClusterBreak : prevClusterBreak)(str, pos);
}
function nextClusterBreak(str, pos) {
    if (pos == str.length)
        return pos;
    // If pos is in the middle of a surrogate pair, move to its start
    if (pos && surrogateLow(str.charCodeAt(pos)) && surrogateHigh(str.charCodeAt(pos - 1)))
        pos--;
    let prev = codePointAt(str, pos);
    pos += codePointSize(prev);
    while (pos < str.length) {
        let next = codePointAt(str, pos);
        if (prev == ZWJ || next == ZWJ || isExtendingChar(next)) {
            pos += codePointSize(next);
            prev = next;
        }
        else if (isRegionalIndicator(next)) {
            let countBefore = 0, i = pos - 2;
            while (i >= 0 && isRegionalIndicator(codePointAt(str, i))) {
                countBefore++;
                i -= 2;
            }
            if (countBefore % 2 == 0)
                break;
            else
                pos += 2;
        }
        else {
            break;
        }
    }
    return pos;
}
function prevClusterBreak(str, pos) {
    while (pos > 0) {
        let found = nextClusterBreak(str, pos - 2);
        if (found < pos)
            return found;
        pos--;
    }
    return 0;
}
function surrogateLow(ch) { return ch >= 0xDC00 && ch < 0xE000; }
function surrogateHigh(ch) { return ch >= 0xD800 && ch < 0xDC00; }
/**
Find the code point at the given position in a string (like the
[`codePointAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
string method).
*/
function codePointAt(str, pos) {
    let code0 = str.charCodeAt(pos);
    if (!surrogateHigh(code0) || pos + 1 == str.length)
        return code0;
    let code1 = str.charCodeAt(pos + 1);
    if (!surrogateLow(code1))
        return code0;
    return ((code0 - 0xd800) << 10) + (code1 - 0xdc00) + 0x10000;
}
/**
Given a Unicode codepoint, return the JavaScript string that
respresents it (like
[`String.fromCodePoint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)).
*/
function fromCodePoint(code) {
    if (code <= 0xffff)
        return String.fromCharCode(code);
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xd800, (code & 1023) + 0xdc00);
}
/**
The first character that takes up two positions in a JavaScript
string. It is often useful to compare with this after calling
`codePointAt`, to figure out whether your character takes up 1 or
2 index positions.
*/
function codePointSize(code) { return code < 0x10000 ? 1 : 2; }

/**
Count the column position at the given offset into the string,
taking extending characters and tab size into account.
*/
function countColumn(string, n, tabSize) {
    for (let i = 0; i < string.length;) {
        if (string.charCodeAt(i) == 9) {
            n += tabSize - (n % tabSize);
            i++;
        }
        else {
            n++;
            i = findClusterBreak(string, i);
        }
    }
    return n;
}
/**
Find the offset that corresponds to the given column position in a
string, taking extending characters and tab size into account.
*/
function findColumn(string, col, tabSize) {
    let _compat = arguments[3];
    if (_compat != null) {
        col = tabSize;
        tabSize = _compat;
    } // FIXME remove at next major version
    for (let i = 0, n = 0; i < string.length;) {
        if (n >= col)
            return i;
        n += string.charCodeAt(i) == 9 ? tabSize - (n % tabSize) : 1;
        i = findClusterBreak(string, i);
    }
    return string.length;
}

/**
The data structure for documents.
*/
class Text {
    /**
    @internal
    */
    constructor() { }
    /**
    Get the line description around the given position.
    */
    lineAt(pos) {
        if (pos < 0 || pos > this.length)
            throw new RangeError(`Invalid position ${pos} in document of length ${this.length}`);
        return this.lineInner(pos, false, 1, 0);
    }
    /**
    Get the description for the given (1-based) line number.
    */
    line(n) {
        if (n < 1 || n > this.lines)
            throw new RangeError(`Invalid line number ${n} in ${this.lines}-line document`);
        return this.lineInner(n, true, 1, 0);
    }
    /**
    Replace a range of the text with the given content.
    */
    replace(from, to, text) {
        let parts = [];
        this.decompose(0, from, parts, 2 /* To */);
        if (text.length)
            text.decompose(0, text.length, parts, 1 /* From */ | 2 /* To */);
        this.decompose(to, this.length, parts, 1 /* From */);
        return TextNode.from(parts, this.length - (to - from) + text.length);
    }
    /**
    Append another document to this one.
    */
    append(other) {
        return this.replace(this.length, this.length, other);
    }
    /**
    Retrieve the text between the given points.
    */
    slice(from, to = this.length) {
        let parts = [];
        this.decompose(from, to, parts, 0);
        return TextNode.from(parts, to - from);
    }
    /**
    Test whether this text is equal to another instance.
    */
    eq(other) {
        if (other == this)
            return true;
        if (other.length != this.length || other.lines != this.lines)
            return false;
        let a = new RawTextCursor(this), b = new RawTextCursor(other);
        for (;;) {
            a.next();
            b.next();
            if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value)
                return false;
            if (a.done)
                return true;
        }
    }
    /**
    Iterate over the text. When `dir` is `-1`, iteration happens
    from end to start. This will return lines and the breaks between
    them as separate strings, and for long lines, might split lines
    themselves into multiple chunks as well.
    */
    iter(dir = 1) { return new RawTextCursor(this, dir); }
    /**
    Iterate over a range of the text. When `from` > `to`, the
    iterator will run in reverse.
    */
    iterRange(from, to = this.length) { return new PartialTextCursor(this, from, to); }
    /**
    @internal
    */
    toString() { return this.sliceString(0); }
    /**
    Convert the document to an array of lines (which can be
    deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#text.Text^of)).
    */
    toJSON() {
        let lines = [];
        this.flatten(lines);
        return lines;
    }
    /**
    Create a `Text` instance for the given array of lines.
    */
    static of(text) {
        if (text.length == 0)
            throw new RangeError("A document must have at least one line");
        if (text.length == 1 && !text[0])
            return Text.empty;
        return text.length <= 32 /* Branch */ ? new TextLeaf(text) : TextNode.from(TextLeaf.split(text, []));
    }
}
if (typeof Symbol != "undefined")
    Text.prototype[Symbol.iterator] = function () { return this.iter(); };
// Leaves store an array of line strings. There are always line breaks
// between these strings. Leaves are limited in size and have to be
// contained in TextNode instances for bigger documents.
class TextLeaf extends Text {
    constructor(text, length = textLength(text)) {
        super();
        this.text = text;
        this.length = length;
    }
    get lines() { return this.text.length; }
    get children() { return null; }
    lineInner(target, isLine, line, offset) {
        for (let i = 0;; i++) {
            let string = this.text[i], end = offset + string.length;
            if ((isLine ? line : end) >= target)
                return new Line(offset, end, line, string);
            offset = end + 1;
            line++;
        }
    }
    decompose(from, to, target, open) {
        let text = from <= 0 && to >= this.length ? this
            : new TextLeaf(sliceText(this.text, from, to), Math.min(to, this.length) - Math.max(0, from));
        if (open & 1 /* From */) {
            let prev = target.pop();
            let joined = appendText(text.text, prev.text.slice(), 0, text.length);
            if (joined.length <= 32 /* Branch */) {
                target.push(new TextLeaf(joined, prev.length + text.length));
            }
            else {
                let mid = joined.length >> 1;
                target.push(new TextLeaf(joined.slice(0, mid)), new TextLeaf(joined.slice(mid)));
            }
        }
        else {
            target.push(text);
        }
    }
    replace(from, to, text) {
        if (!(text instanceof TextLeaf))
            return super.replace(from, to, text);
        let lines = appendText(this.text, appendText(text.text, sliceText(this.text, 0, from)), to);
        let newLen = this.length + text.length - (to - from);
        if (lines.length <= 32 /* Branch */)
            return new TextLeaf(lines, newLen);
        return TextNode.from(TextLeaf.split(lines, []), newLen);
    }
    sliceString(from, to = this.length, lineSep = "\n") {
        let result = "";
        for (let pos = 0, i = 0; pos <= to && i < this.text.length; i++) {
            let line = this.text[i], end = pos + line.length;
            if (pos > from && i)
                result += lineSep;
            if (from < end && to > pos)
                result += line.slice(Math.max(0, from - pos), to - pos);
            pos = end + 1;
        }
        return result;
    }
    flatten(target) {
        for (let line of this.text)
            target.push(line);
    }
    static split(text, target) {
        let part = [], len = -1;
        for (let line of text) {
            part.push(line);
            len += line.length + 1;
            if (part.length == 32 /* Branch */) {
                target.push(new TextLeaf(part, len));
                part = [];
                len = -1;
            }
        }
        if (len > -1)
            target.push(new TextLeaf(part, len));
        return target;
    }
}
// Nodes provide the tree structure of the `Text` type. They store a
// number of other nodes or leaves, taking care to balance themselves
// on changes. There are implied line breaks _between_ the children of
// a node (but not before the first or after the last child).
class TextNode extends Text {
    constructor(children, length) {
        super();
        this.children = children;
        this.length = length;
        this.lines = 0;
        for (let child of children)
            this.lines += child.lines;
    }
    lineInner(target, isLine, line, offset) {
        for (let i = 0;; i++) {
            let child = this.children[i], end = offset + child.length, endLine = line + child.lines - 1;
            if ((isLine ? endLine : end) >= target)
                return child.lineInner(target, isLine, line, offset);
            offset = end + 1;
            line = endLine + 1;
        }
    }
    decompose(from, to, target, open) {
        for (let i = 0, pos = 0; pos <= to && i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (from <= end && to >= pos) {
                let childOpen = open & ((pos <= from ? 1 /* From */ : 0) | (end >= to ? 2 /* To */ : 0));
                if (pos >= from && end <= to && !childOpen)
                    target.push(child);
                else
                    child.decompose(from - pos, to - pos, target, childOpen);
            }
            pos = end + 1;
        }
    }
    replace(from, to, text) {
        if (text.lines < this.lines)
            for (let i = 0, pos = 0; i < this.children.length; i++) {
                let child = this.children[i], end = pos + child.length;
                // Fast path: if the change only affects one child and the
                // child's size remains in the acceptable range, only update
                // that child
                if (from >= pos && to <= end) {
                    let updated = child.replace(from - pos, to - pos, text);
                    let totalLines = this.lines - child.lines + updated.lines;
                    if (updated.lines < (totalLines >> (5 /* BranchShift */ - 1)) &&
                        updated.lines > (totalLines >> (5 /* BranchShift */ + 1))) {
                        let copy = this.children.slice();
                        copy[i] = updated;
                        return new TextNode(copy, this.length - (to - from) + text.length);
                    }
                    return super.replace(pos, end, updated);
                }
                pos = end + 1;
            }
        return super.replace(from, to, text);
    }
    sliceString(from, to = this.length, lineSep = "\n") {
        let result = "";
        for (let i = 0, pos = 0; i < this.children.length && pos <= to; i++) {
            let child = this.children[i], end = pos + child.length;
            if (pos > from && i)
                result += lineSep;
            if (from < end && to > pos)
                result += child.sliceString(from - pos, to - pos, lineSep);
            pos = end + 1;
        }
        return result;
    }
    flatten(target) {
        for (let child of this.children)
            child.flatten(target);
    }
    static from(children, length = children.reduce((l, ch) => l + ch.length + 1, -1)) {
        let lines = 0;
        for (let ch of children)
            lines += ch.lines;
        if (lines < 32 /* Branch */) {
            let flat = [];
            for (let ch of children)
                ch.flatten(flat);
            return new TextLeaf(flat, length);
        }
        let chunk = Math.max(32 /* Branch */, lines >> 5 /* BranchShift */), maxChunk = chunk << 1, minChunk = chunk >> 1;
        let chunked = [], currentLines = 0, currentLen = -1, currentChunk = [];
        function add(child) {
            let last;
            if (child.lines > maxChunk && child instanceof TextNode) {
                for (let node of child.children)
                    add(node);
            }
            else if (child.lines > minChunk && (currentLines > minChunk || !currentLines)) {
                flush();
                chunked.push(child);
            }
            else if (child instanceof TextLeaf && currentLines &&
                (last = currentChunk[currentChunk.length - 1]) instanceof TextLeaf &&
                child.lines + last.lines <= 32 /* Branch */) {
                currentLines += child.lines;
                currentLen += child.length + 1;
                currentChunk[currentChunk.length - 1] = new TextLeaf(last.text.concat(child.text), last.length + 1 + child.length);
            }
            else {
                if (currentLines + child.lines > chunk)
                    flush();
                currentLines += child.lines;
                currentLen += child.length + 1;
                currentChunk.push(child);
            }
        }
        function flush() {
            if (currentLines == 0)
                return;
            chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));
            currentLen = -1;
            currentLines = currentChunk.length = 0;
        }
        for (let child of children)
            add(child);
        flush();
        return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
    }
}
Text.empty = /*@__PURE__*/new TextLeaf([""], 0);
function textLength(text) {
    let length = -1;
    for (let line of text)
        length += line.length + 1;
    return length;
}
function appendText(text, target, from = 0, to = 1e9) {
    for (let pos = 0, i = 0, first = true; i < text.length && pos <= to; i++) {
        let line = text[i], end = pos + line.length;
        if (end >= from) {
            if (end > to)
                line = line.slice(0, to - pos);
            if (pos < from)
                line = line.slice(from - pos);
            if (first) {
                target[target.length - 1] += line;
                first = false;
            }
            else
                target.push(line);
        }
        pos = end + 1;
    }
    return target;
}
function sliceText(text, from, to) {
    return appendText(text, [""], from, to);
}
class RawTextCursor {
    constructor(text, dir = 1) {
        this.dir = dir;
        this.done = false;
        this.lineBreak = false;
        this.value = "";
        this.nodes = [text];
        this.offsets = [dir > 0 ? 1 : (text instanceof TextLeaf ? text.text.length : text.children.length) << 1];
    }
    nextInner(skip, dir) {
        this.done = this.lineBreak = false;
        for (;;) {
            let last = this.nodes.length - 1;
            let top = this.nodes[last], offsetValue = this.offsets[last], offset = offsetValue >> 1;
            let size = top instanceof TextLeaf ? top.text.length : top.children.length;
            if (offset == (dir > 0 ? size : 0)) {
                if (last == 0) {
                    this.done = true;
                    this.value = "";
                    return this;
                }
                if (dir > 0)
                    this.offsets[last - 1]++;
                this.nodes.pop();
                this.offsets.pop();
            }
            else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {
                this.offsets[last] += dir;
                if (skip == 0) {
                    this.lineBreak = true;
                    this.value = "\n";
                    return this;
                }
                skip--;
            }
            else if (top instanceof TextLeaf) {
                // Move to the next string
                let next = top.text[offset + (dir < 0 ? -1 : 0)];
                this.offsets[last] += dir;
                if (next.length > Math.max(0, skip)) {
                    this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
                    return this;
                }
                skip -= next.length;
            }
            else {
                let next = top.children[offset + (dir < 0 ? -1 : 0)];
                if (skip > next.length) {
                    skip -= next.length;
                    this.offsets[last] += dir;
                }
                else {
                    if (dir < 0)
                        this.offsets[last]--;
                    this.nodes.push(next);
                    this.offsets.push(dir > 0 ? 1 : (next instanceof TextLeaf ? next.text.length : next.children.length) << 1);
                }
            }
        }
    }
    next(skip = 0) {
        if (skip < 0) {
            this.nextInner(-skip, (-this.dir));
            skip = this.value.length;
        }
        return this.nextInner(skip, this.dir);
    }
}
class PartialTextCursor {
    constructor(text, start, end) {
        this.value = "";
        this.done = false;
        this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
        this.pos = start > end ? text.length : 0;
        this.from = Math.min(start, end);
        this.to = Math.max(start, end);
    }
    nextInner(skip, dir) {
        if (dir < 0 ? this.pos <= this.from : this.pos >= this.to) {
            this.value = "";
            this.done = true;
            return this;
        }
        this.done = false;
        skip += Math.max(0, dir < 0 ? this.pos - this.to : this.from - this.pos);
        let limit = dir < 0 ? this.pos - this.from : this.to - this.pos;
        if (skip > limit)
            skip = limit;
        limit -= skip;
        let { value } = this.cursor.next(skip);
        this.pos += (value.length + skip) * dir;
        this.value = value.length <= limit ? value : dir < 0 ? value.slice(value.length - limit) : value.slice(0, limit);
        return this;
    }
    next(skip = 0) {
        if (skip < 0)
            skip = Math.max(skip, this.from - this.pos);
        else if (skip > 0)
            skip = Math.min(skip, this.to - this.pos);
        return this.nextInner(skip, this.cursor.dir);
    }
    get lineBreak() { return this.cursor.lineBreak && this.value != ""; }
}
/**
This type describes a line in the document. It is created
on-demand when lines are [queried](https://codemirror.net/6/docs/ref/#text.Text.lineAt).
*/
class Line {
    /**
    @internal
    */
    constructor(
    /**
    The position of the start of the line.
    */
    from, 
    /**
    The position at the end of the line (_before_ the line break,
    or at the end of document for the last line).
    */
    to, 
    /**
    This line's line number (1-based).
    */
    number, 
    /**
    The line's content.
    */
    text) {
        this.from = from;
        this.to = to;
        this.number = number;
        this.text = text;
    }
    /**
    The length of the line (not including any line break after it).
    */
    get length() { return this.to - this.from; }
}




/***/ }),
/* 30 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "shift": () => (/* binding */ shift),
/* harmony export */   "keyName": () => (/* binding */ keyName)
/* harmony export */ });
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  229: "q"
}

var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: "\"",
  229: "Q"
}

var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent)
var safari = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor)
var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent)
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform)
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent)
var brokenModifierNames = chrome && (mac || +chrome[1] < 57) || gecko && mac

// Fill in the digit keys
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i)

// The function keys
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i

// And the alphabetic keys
for (var i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32)
  shift[i] = String.fromCharCode(i)
}

// For each code that doesn't have a shift-equivalent, copy the base name
for (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code]

function keyName(event) {
  // Don't trust event.key in Chrome when there are modifiers until
  // they fix https://bugs.chromium.org/p/chromium/issues/detail?id=633838
  var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) ||
    (safari || ie) && event.shiftKey && event.key && event.key.length == 1
  var name = (!ignoreKey && event.key) ||
    (event.shiftKey ? shift : base)[event.keyCode] ||
    event.key || "Unidentified"
  // Edge sometimes produces wrong names (Issue #3)
  if (name == "Esc") name = "Escape"
  if (name == "Del") name = "Delete"
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
  if (name == "Left") name = "ArrowLeft"
  if (name == "Up") name = "ArrowUp"
  if (name == "Right") name = "ArrowRight"
  if (name == "Down") name = "ArrowDown"
  return name
}


/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GutterMarker": () => (/* binding */ GutterMarker),
/* harmony export */   "gutter": () => (/* binding */ gutter),
/* harmony export */   "gutterLineClass": () => (/* binding */ gutterLineClass),
/* harmony export */   "gutters": () => (/* binding */ gutters),
/* harmony export */   "highlightActiveLineGutter": () => (/* binding */ highlightActiveLineGutter),
/* harmony export */   "lineNumberMarkers": () => (/* binding */ lineNumberMarkers),
/* harmony export */   "lineNumbers": () => (/* binding */ lineNumbers)
/* harmony export */ });
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);




/**
A gutter marker represents a bit of information attached to a line
in a specific gutter. Your own custom markers have to extend this
class.
*/
class GutterMarker extends _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeValue {
    /**
    @internal
    */
    compare(other) {
        return this == other || this.constructor == other.constructor && this.eq(other);
    }
    /**
    Compare this marker to another marker of the same type.
    */
    eq(other) { return false; }
    /**
    @internal FIXME remove on next major version
    */
    at(pos) { return this.range(pos); }
}
GutterMarker.prototype.elementClass = "";
GutterMarker.prototype.toDOM = undefined;
GutterMarker.prototype.mapMode = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.MapMode.TrackBefore;
GutterMarker.prototype.point = true;
/**
Facet used to add a class to all gutter elements for a given line.
Markers given to this facet should _only_ define an
[`elementclass`](https://codemirror.net/6/docs/ref/#gutter.GutterMarker.elementClass), not a
[`toDOM`](https://codemirror.net/6/docs/ref/#gutter.GutterMarker.toDOM) (or the marker will appear
in all gutters for the line).
*/
const gutterLineClass = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define();
const defaults = {
    class: "",
    renderEmptyElements: false,
    elementStyle: "",
    markers: () => _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeSet.empty,
    lineMarker: () => null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
};
const activeGutters = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define();
/**
Define an editor gutter. The order in which the gutters appear is
determined by their extension priority.
*/
function gutter(config) {
    return [gutters(), activeGutters.of(Object.assign(Object.assign({}, defaults), config))];
}
const baseTheme = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_2__.EditorView.baseTheme({
    ".cm-gutters": {
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        left: 0,
        zIndex: 200
    },
    "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#999",
        borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
        backgroundColor: "#333338",
        color: "#ccc"
    },
    ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        height: "100%",
        overflow: "hidden"
    },
    ".cm-gutterElement": {
        boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
        backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
        backgroundColor: "#222227"
    }
});
const unfixGutters = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define({
    combine: values => values.some(x => x)
});
/**
The gutter-drawing plugin is automatically enabled when you add a
gutter, but you can use this function to explicitly configure it.

Unless `fixed` is explicitly set to `false`, the gutters are
fixed, meaning they don't scroll along with the content
horizontally (except on Internet Explorer, which doesn't support
CSS [`position:
sticky`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#sticky)).
*/
function gutters(config) {
    let result = [
        gutterView,
        baseTheme
    ];
    if (config && config.fixed === false)
        result.push(unfixGutters.of(true));
    return result;
}
const gutterView = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_2__.ViewPlugin.fromClass(class {
    constructor(view) {
        this.view = view;
        this.dom = document.createElement("div");
        this.dom.className = "cm-gutters";
        this.dom.setAttribute("aria-hidden", "true");
        this.gutters = view.state.facet(activeGutters).map(conf => new SingleGutterView(view, conf));
        for (let gutter of this.gutters)
            this.dom.appendChild(gutter.dom);
        this.fixed = !view.state.facet(unfixGutters);
        if (this.fixed) {
            // FIXME IE11 fallback, which doesn't support position: sticky,
            // by using position: relative + event handlers that realign the
            // gutter (or just force fixed=false on IE11?)
            this.dom.style.position = "sticky";
        }
        view.scrollDOM.insertBefore(this.dom, view.contentDOM);
        this.syncGutters();
    }
    update(update) {
        if (this.updateGutters(update))
            this.syncGutters();
    }
    syncGutters() {
        let lineClasses = _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeSet.iter(this.view.state.facet(gutterLineClass), this.view.viewport.from);
        let classSet = [];
        let contexts = this.gutters.map(gutter => new UpdateContext(gutter, this.view.viewport));
        this.view.viewportLines(line => {
            let text;
            if (Array.isArray(line.type)) {
                for (let b of line.type)
                    if (b.type == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.BlockType.Text) {
                        text = b;
                        break;
                    }
            }
            else {
                text = line.type == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.BlockType.Text ? line : undefined;
            }
            if (!text)
                return;
            if (classSet.length)
                classSet = [];
            advanceCursor(lineClasses, classSet, line.from);
            for (let cx of contexts)
                cx.line(this.view, text, classSet);
        }, 0);
        for (let cx of contexts)
            cx.finish();
        this.dom.style.minHeight = this.view.contentHeight + "px";
        if (this.view.state.facet(unfixGutters) != !this.fixed) {
            this.fixed = !this.fixed;
            this.dom.style.position = this.fixed ? "sticky" : "";
        }
    }
    updateGutters(update) {
        let prev = update.startState.facet(activeGutters), cur = update.state.facet(activeGutters);
        let change = update.docChanged || update.heightChanged || update.viewportChanged ||
            !_codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeSet.eq(update.startState.facet(gutterLineClass), update.state.facet(gutterLineClass), update.view.viewport.from, update.view.viewport.to);
        if (prev == cur) {
            for (let gutter of this.gutters)
                if (gutter.update(update))
                    change = true;
        }
        else {
            change = true;
            let gutters = [];
            for (let conf of cur) {
                let known = prev.indexOf(conf);
                if (known < 0) {
                    gutters.push(new SingleGutterView(this.view, conf));
                }
                else {
                    this.gutters[known].update(update);
                    gutters.push(this.gutters[known]);
                }
            }
            for (let g of this.gutters)
                g.dom.remove();
            for (let g of gutters)
                this.dom.appendChild(g.dom);
            this.gutters = gutters;
        }
        return change;
    }
    destroy() {
        this.dom.remove();
    }
}, {
    provide: /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_2__.PluginField.scrollMargins.from(value => {
        if (value.gutters.length == 0 || !value.fixed)
            return null;
        return value.view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR ? { left: value.dom.offsetWidth } : { right: value.dom.offsetWidth };
    })
});
function asArray(val) { return (Array.isArray(val) ? val : [val]); }
function advanceCursor(cursor, collect, pos) {
    while (cursor.value && cursor.from <= pos) {
        if (cursor.from == pos)
            collect.push(cursor.value);
        cursor.next();
    }
}
class UpdateContext {
    constructor(gutter, viewport) {
        this.gutter = gutter;
        this.localMarkers = [];
        this.i = 0;
        this.height = 0;
        this.cursor = _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeSet.iter(gutter.markers, viewport.from);
    }
    line(view, line, extraMarkers) {
        if (this.localMarkers.length)
            this.localMarkers = [];
        advanceCursor(this.cursor, this.localMarkers, line.from);
        let localMarkers = extraMarkers.length ? this.localMarkers.concat(extraMarkers) : this.localMarkers;
        let forLine = this.gutter.config.lineMarker(view, line, localMarkers);
        if (forLine)
            localMarkers.unshift(forLine);
        let gutter = this.gutter;
        if (localMarkers.length == 0 && !gutter.config.renderEmptyElements)
            return;
        let above = line.top - this.height;
        if (this.i == gutter.elements.length) {
            let newElt = new GutterElement(view, line.height, above, localMarkers);
            gutter.elements.push(newElt);
            gutter.dom.appendChild(newElt.dom);
        }
        else {
            let elt = gutter.elements[this.i];
            if (sameMarkers(localMarkers, elt.markers))
                localMarkers = elt.markers;
            elt.update(view, line.height, above, localMarkers);
        }
        this.height = line.bottom;
        this.i++;
    }
    finish() {
        let gutter = this.gutter;
        while (gutter.elements.length > this.i)
            gutter.dom.removeChild(gutter.elements.pop().dom);
    }
}
class SingleGutterView {
    constructor(view, config) {
        this.view = view;
        this.config = config;
        this.elements = [];
        this.spacer = null;
        this.dom = document.createElement("div");
        this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let prop in config.domEventHandlers) {
            this.dom.addEventListener(prop, (event) => {
                let line = view.visualLineAtHeight(event.clientY, view.contentDOM.getBoundingClientRect().top);
                if (config.domEventHandlers[prop](view, line, event))
                    event.preventDefault();
            });
        }
        this.markers = asArray(config.markers(view));
        if (config.initialSpacer) {
            this.spacer = new GutterElement(view, 0, 0, [config.initialSpacer(view)]);
            this.dom.appendChild(this.spacer.dom);
            this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
        }
    }
    update(update) {
        let prevMarkers = this.markers;
        this.markers = asArray(this.config.markers(update.view));
        if (this.spacer && this.config.updateSpacer) {
            let updated = this.config.updateSpacer(this.spacer.markers[0], update);
            if (updated != this.spacer.markers[0])
                this.spacer.update(update.view, 0, 0, [updated]);
        }
        let vp = update.view.viewport;
        return !_codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeSet.eq(this.markers, prevMarkers, vp.from, vp.to);
    }
}
class GutterElement {
    constructor(view, height, above, markers) {
        this.height = -1;
        this.above = 0;
        this.dom = document.createElement("div");
        this.update(view, height, above, markers);
    }
    update(view, height, above, markers) {
        if (this.height != height)
            this.dom.style.height = (this.height = height) + "px";
        if (this.above != above)
            this.dom.style.marginTop = (this.above = above) ? above + "px" : "";
        if (this.markers != markers) {
            this.markers = markers;
            for (let ch; ch = this.dom.lastChild;)
                ch.remove();
            let cls = "cm-gutterElement";
            for (let m of markers) {
                if (m.toDOM)
                    this.dom.appendChild(m.toDOM(view));
                let c = m.elementClass;
                if (c)
                    cls += " " + c;
            }
            this.dom.className = cls;
        }
    }
}
function sameMarkers(a, b) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!a[i].compare(b[i]))
            return false;
    return true;
}
/**
Facet used to provide markers to the line number gutter.
*/
const lineNumberMarkers = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define();
const lineNumberConfig = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define({
    combine(values) {
        return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.combineConfig)(values, { formatNumber: String, domEventHandlers: {} }, {
            domEventHandlers(a, b) {
                let result = Object.assign({}, a);
                for (let event in b) {
                    let exists = result[event], add = b[event];
                    result[event] = exists ? (view, line, event) => exists(view, line, event) || add(view, line, event) : add;
                }
                return result;
            }
        });
    }
});
class NumberMarker extends GutterMarker {
    constructor(number) {
        super();
        this.number = number;
    }
    eq(other) { return this.number == other.number; }
    toDOM(_view) { return document.createTextNode(this.number); }
}
function formatNumber(view, number) {
    return view.state.facet(lineNumberConfig).formatNumber(number, view.state);
}
const lineNumberGutter = /*@__PURE__*/gutter({
    class: "cm-lineNumbers",
    markers(view) { return view.state.facet(lineNumberMarkers); },
    lineMarker(view, line, others) {
        if (others.some(m => m.toDOM))
            return null;
        return new NumberMarker(formatNumber(view, view.state.doc.lineAt(line.from).number));
    },
    initialSpacer(view) {
        return new NumberMarker(formatNumber(view, maxLineNumber(view.state.doc.lines)));
    },
    updateSpacer(spacer, update) {
        let max = formatNumber(update.view, maxLineNumber(update.view.state.doc.lines));
        return max == spacer.number ? spacer : new NumberMarker(max);
    }
});
/**
Create a line number gutter extension.
*/
function lineNumbers(config = {}) {
    return [
        lineNumberConfig.of(config),
        lineNumberGutter
    ];
}
function maxLineNumber(lines) {
    let last = 9;
    while (last < lines)
        last = last * 10 + 9;
    return last;
}
const activeLineGutterMarker = /*@__PURE__*/new class extends GutterMarker {
    constructor() {
        super(...arguments);
        this.elementClass = "cm-activeLineGutter";
    }
    eq() { return true; }
};
const activeLineGutterHighlighter = /*@__PURE__*/gutterLineClass.compute(["selection"], state => {
    let marks = [], last = -1;
    for (let range of state.selection.ranges)
        if (range.empty) {
            let linePos = state.doc.lineAt(range.head).from;
            if (linePos > last) {
                last = linePos;
                marks.push(activeLineGutterMarker.range(linePos));
            }
        }
    return _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_0__.RangeSet.of(marks);
});
/**
Returns an extension that adds a `cm-activeLineGutter` class to
all gutter elements on the [active
line](https://codemirror.net/6/docs/ref/#view.highlightActiveLine).
*/
function highlightActiveLineGutter() {
    return activeLineGutterHighlighter;
}




/***/ }),
/* 32 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "history": () => (/* binding */ history),
/* harmony export */   "historyField": () => (/* binding */ historyField),
/* harmony export */   "historyKeymap": () => (/* binding */ historyKeymap),
/* harmony export */   "invertedEffects": () => (/* binding */ invertedEffects),
/* harmony export */   "isolateHistory": () => (/* binding */ isolateHistory),
/* harmony export */   "redo": () => (/* binding */ redo),
/* harmony export */   "redoDepth": () => (/* binding */ redoDepth),
/* harmony export */   "redoSelection": () => (/* binding */ redoSelection),
/* harmony export */   "undo": () => (/* binding */ undo),
/* harmony export */   "undoDepth": () => (/* binding */ undoDepth),
/* harmony export */   "undoSelection": () => (/* binding */ undoSelection)
/* harmony export */ });
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);



const fromHistory = _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Annotation.define();
/**
Transaction annotation that will prevent that transaction from
being combined with other transactions in the undo history. Given
`"before"`, it'll prevent merging with previous transactions. With
`"after"`, subsequent transactions won't be combined with this
one. With `"full"`, the transaction is isolated on both sides.
*/
const isolateHistory = _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Annotation.define();
/**
This facet provides a way to register functions that, given a
transaction, provide a set of effects that the history should
store when inverting the transaction. This can be used to
integrate some kinds of effects in the history, so that they can
be undone (and redone again).
*/
const invertedEffects = _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Facet.define();
const historyConfig = _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Facet.define({
    combine(configs) {
        return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_0__.combineConfig)(configs, {
            minDepth: 100,
            newGroupDelay: 500
        }, { minDepth: Math.max, newGroupDelay: Math.min });
    }
});
const historyField_ = _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.StateField.define({
    create() {
        return HistoryState.empty;
    },
    update(state, tr) {
        let config = tr.state.facet(historyConfig);
        let fromHist = tr.annotation(fromHistory);
        if (fromHist) {
            let item = HistEvent.fromTransaction(tr), from = fromHist.side;
            let other = from == 0 /* Done */ ? state.undone : state.done;
            if (item)
                other = updateBranch(other, other.length, config.minDepth, item);
            else
                other = addSelection(other, tr.startState.selection);
            return new HistoryState(from == 0 /* Done */ ? fromHist.rest : other, from == 0 /* Done */ ? other : fromHist.rest);
        }
        let isolate = tr.annotation(isolateHistory);
        if (isolate == "full" || isolate == "before")
            state = state.isolate();
        if (tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Transaction.addToHistory) === false)
            return !tr.changes.empty ? state.addMapping(tr.changes.desc) : state;
        let event = HistEvent.fromTransaction(tr);
        let time = tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Transaction.time), userEvent = tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_0__.Transaction.userEvent);
        if (event)
            state = state.addChanges(event, time, userEvent, config.newGroupDelay, config.minDepth);
        else if (tr.selection)
            state = state.addSelection(tr.startState.selection, time, userEvent, config.newGroupDelay);
        if (isolate == "full" || isolate == "after")
            state = state.isolate();
        return state;
    },
    toJSON(value) {
        return { done: value.done.map(e => e.toJSON()), undone: value.undone.map(e => e.toJSON()) };
    },
    fromJSON(json) {
        return new HistoryState(json.done.map(HistEvent.fromJSON), json.undone.map(HistEvent.fromJSON));
    }
});
/**
Create a history extension with the given configuration.
*/
function history(config = {}) {
    return [
        historyField_,
        historyConfig.of(config),
        _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.EditorView.domEventHandlers({
            beforeinput(e, view) {
                if (e.inputType == "historyUndo")
                    return undo(view);
                if (e.inputType == "historyRedo")
                    return redo(view);
                return false;
            }
        })
    ];
}
/**
The state field used to store the history data. Should probably
only be used when you want to
[serialize](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) or
[deserialize](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) state objects in a way
that preserves history.
*/
const historyField = historyField_;
function cmd(side, selection) {
    return function ({ state, dispatch }) {
        let historyState = state.field(historyField_, false);
        if (!historyState)
            return false;
        let tr = historyState.pop(side, state, selection);
        if (!tr)
            return false;
        dispatch(tr);
        return true;
    };
}
/**
Undo a single group of history events. Returns false if no group
was available.
*/
const undo = cmd(0 /* Done */, false);
/**
Redo a group of history events. Returns false if no group was
available.
*/
const redo = cmd(1 /* Undone */, false);
/**
Undo a selection change.
*/
const undoSelection = cmd(0 /* Done */, true);
/**
Redo a selection change.
*/
const redoSelection = cmd(1 /* Undone */, true);
function depth(side) {
    return function (state) {
        let histState = state.field(historyField_, false);
        if (!histState)
            return 0;
        let branch = side == 0 /* Done */ ? histState.done : histState.undone;
        return branch.length - (branch.length && !branch[0].changes ? 1 : 0);
    };
}
/**
The amount of undoable change events available in a given state.
*/
const undoDepth = depth(0 /* Done */);
/**
The amount of redoable change events available in a given state.
*/
const redoDepth = depth(1 /* Undone */);
// History events store groups of changes or effects that need to be
// undone/redone together.
class HistEvent {
    constructor(
    // The changes in this event. Normal events hold at least one
    // change or effect. But it may be necessary to store selection
    // events before the first change, in which case a special type of
    // instance is created which doesn't hold any changes, with
    // changes == startSelection == undefined
    changes, 
    // The effects associated with this event
    effects, mapped, 
    // The selection before this event
    startSelection, 
    // Stores selection changes after this event, to be used for
    // selection undo/redo.
    selectionsAfter) {
        this.changes = changes;
        this.effects = effects;
        this.mapped = mapped;
        this.startSelection = startSelection;
        this.selectionsAfter = selectionsAfter;
    }
    setSelAfter(after) {
        return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after);
    }
    toJSON() {
        var _a, _b, _c;
        return {
            changes: (_a = this.changes) === null || _a === void 0 ? void 0 : _a.toJSON(),
            mapped: (_b = this.mapped) === null || _b === void 0 ? void 0 : _b.toJSON(),
            startSelection: (_c = this.startSelection) === null || _c === void 0 ? void 0 : _c.toJSON(),
            selectionsAfter: this.selectionsAfter.map(s => s.toJSON())
        };
    }
    static fromJSON(json) {
        return new HistEvent(json.changes && _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.ChangeSet.fromJSON(json.changes), [], json.mapped && _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.ChangeDesc.fromJSON(json.mapped), json.startSelection && _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.EditorSelection.fromJSON(json.startSelection), json.selectionsAfter.map(_codemirror_state__WEBPACK_IMPORTED_MODULE_0__.EditorSelection.fromJSON));
    }
    // This does not check `addToHistory` and such, it assumes the
    // transaction needs to be converted to an item. Returns null when
    // there are no changes or effects in the transaction.
    static fromTransaction(tr) {
        let effects = none;
        for (let invert of tr.startState.facet(invertedEffects)) {
            let result = invert(tr);
            if (result.length)
                effects = effects.concat(result);
        }
        if (!effects.length && tr.changes.empty)
            return null;
        return new HistEvent(tr.changes.invert(tr.startState.doc), effects, undefined, tr.startState.selection, none);
    }
    static selection(selections) {
        return new HistEvent(undefined, none, undefined, undefined, selections);
    }
}
function updateBranch(branch, to, maxLen, newEvent) {
    let start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
    let newBranch = branch.slice(start, to);
    newBranch.push(newEvent);
    return newBranch;
}
function isAdjacent(a, b) {
    let ranges = [], isAdjacent = false;
    a.iterChangedRanges((f, t) => ranges.push(f, t));
    b.iterChangedRanges((_f, _t, f, t) => {
        for (let i = 0; i < ranges.length;) {
            let from = ranges[i++], to = ranges[i++];
            if (t >= from && f <= to)
                isAdjacent = true;
        }
    });
    return isAdjacent;
}
function eqSelectionShape(a, b) {
    return a.ranges.length == b.ranges.length &&
        a.ranges.filter((r, i) => r.empty != b.ranges[i].empty).length === 0;
}
function conc(a, b) {
    return !a.length ? b : !b.length ? a : a.concat(b);
}
const none = [];
const MaxSelectionsPerEvent = 200;
function addSelection(branch, selection) {
    if (!branch.length) {
        return [HistEvent.selection([selection])];
    }
    else {
        let lastEvent = branch[branch.length - 1];
        let sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
        if (sels.length && sels[sels.length - 1].eq(selection))
            return branch;
        sels.push(selection);
        return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
    }
}
// Assumes the top item has one or more selectionAfter values
function popSelection(branch) {
    let last = branch[branch.length - 1];
    let newBranch = branch.slice();
    newBranch[branch.length - 1] = last.setSelAfter(last.selectionsAfter.slice(0, last.selectionsAfter.length - 1));
    return newBranch;
}
// Add a mapping to the top event in the given branch. If this maps
// away all the changes and effects in that item, drop it and
// propagate the mapping to the next item.
function addMappingToBranch(branch, mapping) {
    if (!branch.length)
        return branch;
    let length = branch.length, selections = none;
    while (length) {
        let event = mapEvent(branch[length - 1], mapping, selections);
        if (event.changes && !event.changes.empty || event.effects.length) { // Event survived mapping
            let result = branch.slice(0, length);
            result[length - 1] = event;
            return result;
        }
        else { // Drop this event, since there's no changes or effects left
            mapping = event.mapped;
            length--;
            selections = event.selectionsAfter;
        }
    }
    return selections.length ? [HistEvent.selection(selections)] : none;
}
function mapEvent(event, mapping, extraSelections) {
    let selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map(s => s.map(mapping)) : none, extraSelections);
    // Change-less events don't store mappings (they are always the last event in a branch)
    if (!event.changes)
        return HistEvent.selection(selections);
    let mappedChanges = event.changes.map(mapping), before = mapping.mapDesc(event.changes, true);
    let fullMapping = event.mapped ? event.mapped.composeDesc(before) : before;
    return new HistEvent(mappedChanges, _codemirror_state__WEBPACK_IMPORTED_MODULE_0__.StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(before), selections);
}
class HistoryState {
    constructor(done, undone, prevTime = 0, prevUserEvent = undefined) {
        this.done = done;
        this.undone = undone;
        this.prevTime = prevTime;
        this.prevUserEvent = prevUserEvent;
    }
    isolate() {
        return this.prevTime ? new HistoryState(this.done, this.undone) : this;
    }
    addChanges(event, time, userEvent, newGroupDelay, maxLen) {
        let done = this.done, lastEvent = done[done.length - 1];
        if (lastEvent && lastEvent.changes &&
            time - this.prevTime < newGroupDelay &&
            !lastEvent.selectionsAfter.length &&
            !lastEvent.changes.empty && event.changes &&
            isAdjacent(lastEvent.changes, event.changes)) {
            done = updateBranch(done, done.length - 1, maxLen, new HistEvent(event.changes.compose(lastEvent.changes), conc(event.effects, lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none));
        }
        else {
            done = updateBranch(done, done.length, maxLen, event);
        }
        return new HistoryState(done, none, time, userEvent);
    }
    addSelection(selection, time, userEvent, newGroupDelay) {
        let last = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none;
        if (last.length > 0 &&
            time - this.prevTime < newGroupDelay &&
            userEvent == "keyboardselection" && this.prevUserEvent == userEvent &&
            eqSelectionShape(last[last.length - 1], selection))
            return this;
        return new HistoryState(addSelection(this.done, selection), this.undone, time, userEvent);
    }
    addMapping(mapping) {
        return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
    }
    pop(side, state, selection) {
        let branch = side == 0 /* Done */ ? this.done : this.undone;
        if (branch.length == 0)
            return null;
        let event = branch[branch.length - 1];
        if (selection && event.selectionsAfter.length) {
            return state.update({
                selection: event.selectionsAfter[event.selectionsAfter.length - 1],
                annotations: fromHistory.of({ side, rest: popSelection(branch) })
            });
        }
        else if (!event.changes) {
            return null;
        }
        else {
            let rest = branch.length == 1 ? none : branch.slice(0, branch.length - 1);
            if (event.mapped)
                rest = addMappingToBranch(rest, event.mapped);
            return state.update({
                changes: event.changes,
                selection: event.startSelection,
                effects: event.effects,
                annotations: fromHistory.of({ side, rest }),
                filter: false
            });
        }
    }
}
HistoryState.empty = new HistoryState(none, none);
/**
Default key bindings for the undo history.

- Mod-z: [`undo`](https://codemirror.net/6/docs/ref/#history.undo).
- Mod-y (Mod-Shift-z on macOS): [`redo`](https://codemirror.net/6/docs/ref/#history.redo).
- Mod-u: [`undoSelection`](https://codemirror.net/6/docs/ref/#history.undoSelection).
- Alt-u (Mod-Shift-u on macOS): [`redoSelection`](https://codemirror.net/6/docs/ref/#history.redoSelection).
*/
const historyKeymap = [
    { key: "Mod-z", run: undo, preventDefault: true },
    { key: "Mod-y", mac: "Mod-Shift-z", run: redo, preventDefault: true },
    { key: "Mod-u", run: undoSelection, preventDefault: true },
    { key: "Alt-u", mac: "Mod-Shift-u", run: redoSelection, preventDefault: true }
];




/***/ }),
/* 33 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightStyle": () => (/* binding */ HighlightStyle),
/* harmony export */   "Tag": () => (/* binding */ Tag),
/* harmony export */   "classHighlightStyle": () => (/* binding */ classHighlightStyle),
/* harmony export */   "defaultHighlightStyle": () => (/* binding */ defaultHighlightStyle),
/* harmony export */   "highlightTree": () => (/* binding */ highlightTree),
/* harmony export */   "styleTags": () => (/* binding */ styleTags),
/* harmony export */   "tags": () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var style_mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);







let nextTagID = 0;
/**
Highlighting tags are markers that denote a highlighting category.
They are [associated](https://codemirror.net/6/docs/ref/#highlight.styleTags) with parts of a syntax
tree by a language mode, and then mapped to an actual CSS style by
a [highlight style](https://codemirror.net/6/docs/ref/#highlight.HighlightStyle).

Because syntax tree node types and highlight styles have to be
able to talk the same language, CodeMirror uses a mostly _closed_
[vocabulary](https://codemirror.net/6/docs/ref/#highlight.tags) of syntax tags (as opposed to
traditional open string-based systems, which make it hard for
highlighting themes to cover all the tokens produced by the
various languages).

It _is_ possible to [define](https://codemirror.net/6/docs/ref/#highlight.Tag^define) your own
highlighting tags for system-internal use (where you control both
the language package and the highlighter), but such tags will not
be picked up by regular highlighters (though you can derive them
from standard tags to allow highlighters to fall back to those).
*/
class Tag {
    /**
    @internal
    */
    constructor(
    /**
    The set of tags that match this tag, starting with this one
    itself, sorted in order of decreasing specificity. @internal
    */
    set, 
    /**
    The base unmodified tag that this one is based on, if it's
    modified @internal
    */
    base, 
    /**
    The modifiers applied to this.base @internal
    */
    modified) {
        this.set = set;
        this.base = base;
        this.modified = modified;
        /**
        @internal
        */
        this.id = nextTagID++;
    }
    /**
    Define a new tag. If `parent` is given, the tag is treated as a
    sub-tag of that parent, and [highlight
    styles](https://codemirror.net/6/docs/ref/#highlight.HighlightStyle) that don't mention this tag
    will try to fall back to the parent tag (or grandparent tag,
    etc).
    */
    static define(parent) {
        if (parent === null || parent === void 0 ? void 0 : parent.base)
            throw new Error("Can not derive from a modified tag");
        let tag = new Tag([], null, []);
        tag.set.push(tag);
        if (parent)
            for (let t of parent.set)
                tag.set.push(t);
        return tag;
    }
    /**
    Define a tag _modifier_, which is a function that, given a tag,
    will return a tag that is a subtag of the original. Applying the
    same modifier to a twice tag will return the same value (`m1(t1)
    == m1(t1)`) and applying multiple modifiers will, regardless or
    order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
    
    When multiple modifiers are applied to a given base tag, each
    smaller set of modifiers is registered as a parent, so that for
    example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
    `m1(m3(t1)`, and so on.
    */
    static defineModifier() {
        let mod = new Modifier;
        return (tag) => {
            if (tag.modified.indexOf(mod) > -1)
                return tag;
            return Modifier.get(tag.base || tag, tag.modified.concat(mod).sort((a, b) => a.id - b.id));
        };
    }
}
let nextModifierID = 0;
class Modifier {
    constructor() {
        this.instances = [];
        this.id = nextModifierID++;
    }
    static get(base, mods) {
        if (!mods.length)
            return base;
        let exists = mods[0].instances.find(t => t.base == base && sameArray(mods, t.modified));
        if (exists)
            return exists;
        let set = [], tag = new Tag(set, base, mods);
        for (let m of mods)
            m.instances.push(tag);
        let configs = permute(mods);
        for (let parent of base.set)
            for (let config of configs)
                set.push(Modifier.get(parent, config));
        return tag;
    }
}
function sameArray(a, b) {
    return a.length == b.length && a.every((x, i) => x == b[i]);
}
function permute(array) {
    let result = [array];
    for (let i = 0; i < array.length; i++) {
        for (let a of permute(array.slice(0, i).concat(array.slice(i + 1))))
            result.push(a);
    }
    return result;
}
/**
This function is used to add a set of tags to a language syntax
via
[`Parser.configure`](https://lezer.codemirror.net/docs/ref#lezer.Parser.configure).

The argument object maps node selectors to [highlighting
tags](https://codemirror.net/6/docs/ref/#highlight.Tag) or arrays of tags.

Node selectors may hold one or more (space-separated) node paths.
Such a path can be a [node
name](https://lezer.codemirror.net/docs/ref#tree.NodeType.name),
or multiple node names (or `*` wildcards) separated by slash
characters, as in `"Block/Declaration/VariableName"`. Such a path
matches the final node but only if its direct parent nodes are the
other nodes mentioned. A `*` in such a path matches any parent,
but only a single level—wildcards that match multiple parents
aren't supported, both for efficiency reasons and because Lezer
trees make it rather hard to reason about what they would match.)

A path can be ended with `/...` to indicate that the tag assigned
to the node should also apply to all child nodes, even if they
match their own style (by default, only the innermost style is
used).

When a path ends in `!`, as in `Attribute!`, no further matching
happens for the node's child nodes, and the entire node gets the
given style.

In this notation, node names that contain `/`, `!`, `*`, or `...`
must be quoted as JSON strings.

For example:

```javascript
parser.withProps(
  styleTags({
    // Style Number and BigNumber nodes
    "Number BigNumber": tags.number,
    // Style Escape nodes whose parent is String
    "String/Escape": tags.escape,
    // Style anything inside Attributes nodes
    "Attributes!": tags.meta,
    // Add a style to all content inside Italic nodes
    "Italic/...": tags.emphasis,
    // Style InvalidString nodes as both `string` and `invalid`
    "InvalidString": [tags.string, tags.invalid],
    // Style the node named "/" as punctuation
    '"/"': tags.punctuation
  })
)
```
*/
function styleTags(spec) {
    let byName = Object.create(null);
    for (let prop in spec) {
        let tags = spec[prop];
        if (!Array.isArray(tags))
            tags = [tags];
        for (let part of prop.split(" "))
            if (part) {
                let pieces = [], mode = 2 /* Normal */, rest = part;
                for (let pos = 0;;) {
                    if (rest == "..." && pos > 0 && pos + 3 == part.length) {
                        mode = 1 /* Inherit */;
                        break;
                    }
                    let m = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(rest);
                    if (!m)
                        throw new RangeError("Invalid path: " + part);
                    pieces.push(m[0] == "*" ? null : m[0][0] == '"' ? JSON.parse(m[0]) : m[0]);
                    pos += m[0].length;
                    if (pos == part.length)
                        break;
                    let next = part[pos++];
                    if (pos == part.length && next == "!") {
                        mode = 0 /* Opaque */;
                        break;
                    }
                    if (next != "/")
                        throw new RangeError("Invalid path: " + part);
                    rest = part.slice(pos);
                }
                let last = pieces.length - 1, inner = pieces[last];
                if (!inner)
                    throw new RangeError("Invalid path: " + part);
                let rule = new Rule(tags, mode, last > 0 ? pieces.slice(0, last) : null);
                byName[inner] = rule.sort(byName[inner]);
            }
    }
    return ruleNodeProp.add(byName);
}
const ruleNodeProp = /*@__PURE__*/new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp();
const highlightStyle = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Facet.define({
    combine(stylings) { return stylings.length ? HighlightStyle.combinedMatch(stylings) : null; }
});
const fallbackHighlightStyle = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Facet.define({
    combine(values) { return values.length ? values[0].match : null; }
});
function getHighlightStyle(state) {
    return state.facet(highlightStyle) || state.facet(fallbackHighlightStyle);
}
class Rule {
    constructor(tags, mode, context, next) {
        this.tags = tags;
        this.mode = mode;
        this.context = context;
        this.next = next;
    }
    sort(other) {
        if (!other || other.depth < this.depth) {
            this.next = other;
            return this;
        }
        other.next = this.sort(other.next);
        return other;
    }
    get depth() { return this.context ? this.context.length : 0; }
}
/**
A highlight style associates CSS styles with higlighting
[tags](https://codemirror.net/6/docs/ref/#highlight.Tag).
*/
class HighlightStyle {
    constructor(spec, options) {
        this.map = Object.create(null);
        let modSpec;
        function def(spec) {
            let cls = style_mod__WEBPACK_IMPORTED_MODULE_1__.StyleModule.newName();
            (modSpec || (modSpec = Object.create(null)))["." + cls] = spec;
            return cls;
        }
        this.all = typeof options.all == "string" ? options.all : options.all ? def(options.all) : null;
        for (let style of spec) {
            let cls = (style.class || def(Object.assign({}, style, { tag: null }))) +
                (this.all ? " " + this.all : "");
            let tags = style.tag;
            if (!Array.isArray(tags))
                this.map[tags.id] = cls;
            else
                for (let tag of tags)
                    this.map[tag.id] = cls;
        }
        this.module = modSpec ? new style_mod__WEBPACK_IMPORTED_MODULE_1__.StyleModule(modSpec) : null;
        this.scope = options.scope || null;
        this.match = this.match.bind(this);
        let ext = [treeHighlighter];
        if (this.module)
            ext.push(_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.styleModule.of(this.module));
        this.extension = ext.concat(highlightStyle.of(this));
        this.fallback = ext.concat(fallbackHighlightStyle.of(this));
    }
    /**
    Returns the CSS class associated with the given tag, if any.
    This method is bound to the instance by the constructor.
    */
    match(tag, scope) {
        if (this.scope && scope != this.scope)
            return null;
        for (let t of tag.set) {
            let match = this.map[t.id];
            if (match !== undefined) {
                if (t != tag)
                    this.map[tag.id] = match;
                return match;
            }
        }
        return this.map[tag.id] = this.all;
    }
    /**
    Combines an array of highlight styles into a single match
    function that returns all of the classes assigned by the styles
    for a given tag.
    */
    static combinedMatch(styles) {
        if (styles.length == 1)
            return styles[0].match;
        let cache = styles.some(s => s.scope) ? undefined : Object.create(null);
        return (tag, scope) => {
            let cached = cache && cache[tag.id];
            if (cached !== undefined)
                return cached;
            let result = null;
            for (let style of styles) {
                let value = style.match(tag, scope);
                if (value)
                    result = result ? result + " " + value : value;
            }
            if (cache)
                cache[tag.id] = result;
            return result;
        };
    }
    /**
    Create a highlighter style that associates the given styles to
    the given tags. The spec must be objects that hold a style tag
    or array of tags in their `tag` property, and either a single
    `class` property providing a static CSS class (for highlighters
    like [`classHighlightStyle`](https://codemirror.net/6/docs/ref/#highlight.classHighlightStyle)
    that rely on external styling), or a
    [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
    set of CSS properties (which define the styling for those tags).
    
    The CSS rules created for a highlighter will be emitted in the
    order of the spec's properties. That means that for elements that
    have multiple tags associated with them, styles defined further
    down in the list will have a higher CSS precedence than styles
    defined earlier.
    */
    static define(specs, options) {
        return new HighlightStyle(specs, options || {});
    }
    /**
    Returns the CSS classes (if any) that the highlight styles
    active in the given state would assign to the given a style
    [tag](https://codemirror.net/6/docs/ref/#highlight.Tag) and (optional) language
    [scope](https://codemirror.net/6/docs/ref/#highlight.HighlightStyle^define^options.scope).
    */
    static get(state, tag, scope) {
        let style = getHighlightStyle(state);
        return style && style(tag, scope || lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeType.none);
    }
}
/**
Given a string of code and a language, parse the code in that
language and run the tree highlighter over the resulting syntax
tree.
*/
function highlightTree(tree, 
/**
Get the CSS classes used to style a given [tag](https://codemirror.net/6/docs/ref/#highlight.Tag),
or `null` if it isn't styled. (You'll often want to pass a
highlight style's [`match`](https://codemirror.net/6/docs/ref/#highlight.HighlightStyle.match)
method here.)
*/
getStyle, 
/**
Assign styling to a region of the text. Will be called, in order
of position, for any ranges where more than zero classes apply.
`classes` is a space separated string of CSS classes.
*/
putStyle) {
    highlightTreeRange(tree, 0, tree.length, getStyle, putStyle);
}
class TreeHighlighter {
    constructor(view) {
        this.markCache = Object.create(null);
        this.tree = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_4__.syntaxTree)(view.state);
        this.decorations = this.buildDeco(view, getHighlightStyle(view.state));
    }
    update(update) {
        let tree = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_4__.syntaxTree)(update.state), style = getHighlightStyle(update.state);
        let styleChange = style != update.startState.facet(highlightStyle);
        if (tree.length < update.view.viewport.to && !styleChange) {
            this.decorations = this.decorations.map(update.changes);
        }
        else if (tree != this.tree || update.viewportChanged || styleChange) {
            this.tree = tree;
            this.decorations = this.buildDeco(update.view, style);
        }
    }
    buildDeco(view, match) {
        if (!match || !this.tree.length)
            return _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.none;
        let builder = new _codemirror_rangeset__WEBPACK_IMPORTED_MODULE_5__.RangeSetBuilder();
        for (let { from, to } of view.visibleRanges) {
            highlightTreeRange(this.tree, from, to, match, (from, to, style) => {
                builder.add(from, to, this.markCache[style] || (this.markCache[style] = _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.mark({ class: style })));
            });
        }
        return builder.finish();
    }
}
// This extension installs a highlighter that highlights based on the
// syntax tree and highlight style.
const treeHighlighter = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Prec.fallback(/*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.ViewPlugin.fromClass(TreeHighlighter, {
    decorations: v => v.decorations
}));
const nodeStack = [""];
function highlightTreeRange(tree, from, to, style, span) {
    let spanStart = from, spanClass = "";
    let cursor = tree.topNode.cursor;
    function flush(at, newClass) {
        if (spanClass)
            span(spanStart, at, spanClass);
        spanStart = at;
        spanClass = newClass;
    }
    function node(inheritedClass, depth, scope) {
        let { type, from: start, to: end } = cursor;
        if (start >= to || end <= from)
            return;
        nodeStack[depth] = type.name;
        if (type.isTop)
            scope = type;
        let cls = inheritedClass;
        let rule = type.prop(ruleNodeProp), opaque = false;
        while (rule) {
            if (!rule.context || matchContext(rule.context, nodeStack, depth)) {
                for (let tag of rule.tags) {
                    let st = style(tag, scope);
                    if (st) {
                        if (cls)
                            cls += " ";
                        cls += st;
                        if (rule.mode == 1 /* Inherit */)
                            inheritedClass += (inheritedClass ? " " : "") + st;
                        else if (rule.mode == 0 /* Opaque */)
                            opaque = true;
                    }
                }
                break;
            }
            rule = rule.next;
        }
        let upto = start;
        if (!opaque && cursor.firstChild()) {
            do {
                if (cursor.from > upto && spanClass != cls)
                    flush(upto, cls);
                upto = cursor.to;
                node(inheritedClass, depth + 1, scope);
            } while (cursor.nextSibling());
            cursor.parent();
        }
        if (end > upto && spanClass != cls)
            flush(upto, cls);
    }
    node("", 0, tree.type);
    flush(to, "");
}
function matchContext(context, stack, depth) {
    if (context.length > depth - 1)
        return false;
    for (let d = depth - 1, i = context.length - 1; i >= 0; i--, d--) {
        let check = context[i];
        if (check && check != stack[d])
            return false;
    }
    return true;
}
const t = Tag.define;
const comment = /*@__PURE__*/t(), name = /*@__PURE__*/t(), typeName = /*@__PURE__*/t(name), literal = /*@__PURE__*/t(), string = /*@__PURE__*/t(literal), number = /*@__PURE__*/t(literal), content = /*@__PURE__*/t(), heading = /*@__PURE__*/t(content), keyword = /*@__PURE__*/t(), operator = /*@__PURE__*/t(), punctuation = /*@__PURE__*/t(), bracket = /*@__PURE__*/t(punctuation), meta = /*@__PURE__*/t();
/**
The default set of highlighting [tags](https://codemirror.net/6/docs/ref/#highlight.Tag^define) used
by regular language packages and themes.

This collection is heavily biased towards programming languages,
and necessarily incomplete. A full ontology of syntactic
constructs would fill a stack of books, and be impractical to
write themes for. So try to make do with this set. If all else
fails, [open an
issue](https://github.com/codemirror/codemirror.next) to propose a
new tag, or [define](https://codemirror.net/6/docs/ref/#highlight.Tag^define) a local custom tag for
your use case.

Note that it is not obligatory to always attach the most specific
tag possible to an element—if your grammar can't easily
distinguish a certain type of element (such as a local variable),
it is okay to style it as its more general variant (a variable).

For tags that extend some parent tag, the documentation links to
the parent.
*/
const tags = {
    /**
    A comment.
    */
    comment,
    /**
    A line [comment](https://codemirror.net/6/docs/ref/#highlight.tags.comment).
    */
    lineComment: /*@__PURE__*/t(comment),
    /**
    A block [comment](https://codemirror.net/6/docs/ref/#highlight.tags.comment).
    */
    blockComment: /*@__PURE__*/t(comment),
    /**
    A documentation [comment](https://codemirror.net/6/docs/ref/#highlight.tags.comment).
    */
    docComment: /*@__PURE__*/t(comment),
    /**
    Any kind of identifier.
    */
    name,
    /**
    The [name](https://codemirror.net/6/docs/ref/#highlight.tags.name) of a variable.
    */
    variableName: /*@__PURE__*/t(name),
    /**
    A type [name](https://codemirror.net/6/docs/ref/#highlight.tags.name).
    */
    typeName: typeName,
    /**
    A tag name (subtag of [`typeName`](https://codemirror.net/6/docs/ref/#highlight.tags.typeName)).
    */
    tagName: /*@__PURE__*/t(typeName),
    /**
    A property, field, or attribute [name](https://codemirror.net/6/docs/ref/#highlight.tags.name).
    */
    propertyName: /*@__PURE__*/t(name),
    /**
    The [name](https://codemirror.net/6/docs/ref/#highlight.tags.name) of a class.
    */
    className: /*@__PURE__*/t(name),
    /**
    A label [name](https://codemirror.net/6/docs/ref/#highlight.tags.name).
    */
    labelName: /*@__PURE__*/t(name),
    /**
    A namespace [name](https://codemirror.net/6/docs/ref/#highlight.tags.name).
    */
    namespace: /*@__PURE__*/t(name),
    /**
    The [name](https://codemirror.net/6/docs/ref/#highlight.tags.name) of a macro.
    */
    macroName: /*@__PURE__*/t(name),
    /**
    A literal value.
    */
    literal,
    /**
    A string [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal).
    */
    string,
    /**
    A documentation [string](https://codemirror.net/6/docs/ref/#highlight.tags.string).
    */
    docString: /*@__PURE__*/t(string),
    /**
    A character literal (subtag of [string](https://codemirror.net/6/docs/ref/#highlight.tags.string)).
    */
    character: /*@__PURE__*/t(string),
    /**
    A number [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal).
    */
    number,
    /**
    An integer [number](https://codemirror.net/6/docs/ref/#highlight.tags.number) literal.
    */
    integer: /*@__PURE__*/t(number),
    /**
    A floating-point [number](https://codemirror.net/6/docs/ref/#highlight.tags.number) literal.
    */
    float: /*@__PURE__*/t(number),
    /**
    A boolean [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal).
    */
    bool: /*@__PURE__*/t(literal),
    /**
    Regular expression [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal).
    */
    regexp: /*@__PURE__*/t(literal),
    /**
    An escape [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal), for example a
    backslash escape in a string.
    */
    escape: /*@__PURE__*/t(literal),
    /**
    A color [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal).
    */
    color: /*@__PURE__*/t(literal),
    /**
    A URL [literal](https://codemirror.net/6/docs/ref/#highlight.tags.literal).
    */
    url: /*@__PURE__*/t(literal),
    /**
    A language keyword.
    */
    keyword,
    /**
    The [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword) for the self or this
    object.
    */
    self: /*@__PURE__*/t(keyword),
    /**
    The [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword) for null.
    */
    null: /*@__PURE__*/t(keyword),
    /**
    A [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword) denoting some atomic value.
    */
    atom: /*@__PURE__*/t(keyword),
    /**
    A [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword) that represents a unit.
    */
    unit: /*@__PURE__*/t(keyword),
    /**
    A modifier [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword).
    */
    modifier: /*@__PURE__*/t(keyword),
    /**
    A [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword) that acts as an operator.
    */
    operatorKeyword: /*@__PURE__*/t(keyword),
    /**
    A control-flow related [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword).
    */
    controlKeyword: /*@__PURE__*/t(keyword),
    /**
    A [keyword](https://codemirror.net/6/docs/ref/#highlight.tags.keyword) that defines something.
    */
    definitionKeyword: /*@__PURE__*/t(keyword),
    /**
    An operator.
    */
    operator,
    /**
    An [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator) that defines something.
    */
    derefOperator: /*@__PURE__*/t(operator),
    /**
    Arithmetic-related [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator).
    */
    arithmeticOperator: /*@__PURE__*/t(operator),
    /**
    Logical [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator).
    */
    logicOperator: /*@__PURE__*/t(operator),
    /**
    Bit [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator).
    */
    bitwiseOperator: /*@__PURE__*/t(operator),
    /**
    Comparison [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator).
    */
    compareOperator: /*@__PURE__*/t(operator),
    /**
    [Operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator) that updates its operand.
    */
    updateOperator: /*@__PURE__*/t(operator),
    /**
    [Operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator) that defines something.
    */
    definitionOperator: /*@__PURE__*/t(operator),
    /**
    Type-related [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator).
    */
    typeOperator: /*@__PURE__*/t(operator),
    /**
    Control-flow [operator](https://codemirror.net/6/docs/ref/#highlight.tags.operator).
    */
    controlOperator: /*@__PURE__*/t(operator),
    /**
    Program or markup punctuation.
    */
    punctuation,
    /**
    [Punctuation](https://codemirror.net/6/docs/ref/#highlight.tags.punctuation) that separates
    things.
    */
    separator: /*@__PURE__*/t(punctuation),
    /**
    Bracket-style [punctuation](https://codemirror.net/6/docs/ref/#highlight.tags.punctuation).
    */
    bracket,
    /**
    Angle [brackets](https://codemirror.net/6/docs/ref/#highlight.tags.bracket) (usually `<` and `>`
    tokens).
    */
    angleBracket: /*@__PURE__*/t(bracket),
    /**
    Square [brackets](https://codemirror.net/6/docs/ref/#highlight.tags.bracket) (usually `[` and `]`
    tokens).
    */
    squareBracket: /*@__PURE__*/t(bracket),
    /**
    Parentheses (usually `(` and `)` tokens). Subtag of
    [bracket](https://codemirror.net/6/docs/ref/#highlight.tags.bracket).
    */
    paren: /*@__PURE__*/t(bracket),
    /**
    Braces (usually `{` and `}` tokens). Subtag of
    [bracket](https://codemirror.net/6/docs/ref/#highlight.tags.bracket).
    */
    brace: /*@__PURE__*/t(bracket),
    /**
    Content, for example plain text in XML or markup documents.
    */
    content,
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that represents a heading.
    */
    heading,
    /**
    A level 1 [heading](https://codemirror.net/6/docs/ref/#highlight.tags.heading).
    */
    heading1: /*@__PURE__*/t(heading),
    /**
    A level 2 [heading](https://codemirror.net/6/docs/ref/#highlight.tags.heading).
    */
    heading2: /*@__PURE__*/t(heading),
    /**
    A level 3 [heading](https://codemirror.net/6/docs/ref/#highlight.tags.heading).
    */
    heading3: /*@__PURE__*/t(heading),
    /**
    A level 4 [heading](https://codemirror.net/6/docs/ref/#highlight.tags.heading).
    */
    heading4: /*@__PURE__*/t(heading),
    /**
    A level 5 [heading](https://codemirror.net/6/docs/ref/#highlight.tags.heading).
    */
    heading5: /*@__PURE__*/t(heading),
    /**
    A level 6 [heading](https://codemirror.net/6/docs/ref/#highlight.tags.heading).
    */
    heading6: /*@__PURE__*/t(heading),
    /**
    A prose separator (such as a horizontal rule).
    */
    contentSeparator: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that represents a list.
    */
    list: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that represents a quote.
    */
    quote: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that is emphasized.
    */
    emphasis: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that is styled strong.
    */
    strong: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that is part of a link.
    */
    link: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that is styled as code or
    monospace.
    */
    monospace: /*@__PURE__*/t(content),
    /**
    [Content](https://codemirror.net/6/docs/ref/#highlight.tags.content) that has a strike-through
    style.
    */
    strikethrough: /*@__PURE__*/t(content),
    /**
    Inserted text in a change-tracking format.
    */
    inserted: /*@__PURE__*/t(),
    /**
    Deleted text.
    */
    deleted: /*@__PURE__*/t(),
    /**
    Changed text.
    */
    changed: /*@__PURE__*/t(),
    /**
    An invalid or unsyntactic element.
    */
    invalid: /*@__PURE__*/t(),
    /**
    Metadata or meta-instruction.
    */
    meta,
    /**
    [Metadata](https://codemirror.net/6/docs/ref/#highlight.tags.meta) that applies to the entire
    document.
    */
    documentMeta: /*@__PURE__*/t(meta),
    /**
    [Metadata](https://codemirror.net/6/docs/ref/#highlight.tags.meta) that annotates or adds
    attributes to a given syntactic element.
    */
    annotation: /*@__PURE__*/t(meta),
    /**
    Processing instruction or preprocessor directive. Subtag of
    [meta](https://codemirror.net/6/docs/ref/#highlight.tags.meta).
    */
    processingInstruction: /*@__PURE__*/t(meta),
    /**
    [Modifier](https://codemirror.net/6/docs/ref/#highlight.Tag^defineModifier) that indicates that a
    given element is being defined. Expected to be used with the
    various [name](https://codemirror.net/6/docs/ref/#highlight.tags.name) tags.
    */
    definition: /*@__PURE__*/Tag.defineModifier(),
    /**
    [Modifier](https://codemirror.net/6/docs/ref/#highlight.Tag^defineModifier) that indicates that
    something is constant. Mostly expected to be used with
    [variable names](https://codemirror.net/6/docs/ref/#highlight.tags.variableName).
    */
    constant: /*@__PURE__*/Tag.defineModifier(),
    /**
    [Modifier](https://codemirror.net/6/docs/ref/#highlight.Tag^defineModifier) used to indicate that
    a [variable](https://codemirror.net/6/docs/ref/#highlight.tags.variableName) or [property
    name](https://codemirror.net/6/docs/ref/#highlight.tags.propertyName) is being called or defined
    as a function.
    */
    function: /*@__PURE__*/Tag.defineModifier(),
    /**
    [Modifier](https://codemirror.net/6/docs/ref/#highlight.Tag^defineModifier) that can be applied to
    [names](https://codemirror.net/6/docs/ref/#highlight.tags.name) to indicate that they belong to
    the language's standard environment.
    */
    standard: /*@__PURE__*/Tag.defineModifier(),
    /**
    [Modifier](https://codemirror.net/6/docs/ref/#highlight.Tag^defineModifier) that indicates a given
    [names](https://codemirror.net/6/docs/ref/#highlight.tags.name) is local to some scope.
    */
    local: /*@__PURE__*/Tag.defineModifier(),
    /**
    A generic variant [modifier](https://codemirror.net/6/docs/ref/#highlight.Tag^defineModifier) that
    can be used to tag language-specific alternative variants of
    some common tag. It is recommended for themes to define special
    forms of at least the [string](https://codemirror.net/6/docs/ref/#highlight.tags.string) and
    [variable name](https://codemirror.net/6/docs/ref/#highlight.tags.variableName) tags, since those
    come up a lot.
    */
    special: /*@__PURE__*/Tag.defineModifier()
};
/**
A default highlight style (works well with light themes).
*/
const defaultHighlightStyle = /*@__PURE__*/HighlightStyle.define([
    { tag: tags.link,
        textDecoration: "underline" },
    { tag: tags.heading,
        textDecoration: "underline",
        fontWeight: "bold" },
    { tag: tags.emphasis,
        fontStyle: "italic" },
    { tag: tags.strong,
        fontWeight: "bold" },
    { tag: tags.strikethrough,
        textDecoration: "line-through" },
    { tag: tags.keyword,
        color: "#708" },
    { tag: [tags.atom, tags.bool, tags.url, tags.contentSeparator, tags.labelName],
        color: "#219" },
    { tag: [tags.literal, tags.inserted],
        color: "#164" },
    { tag: [tags.string, tags.deleted],
        color: "#a11" },
    { tag: [tags.regexp, tags.escape, /*@__PURE__*/tags.special(tags.string)],
        color: "#e40" },
    { tag: /*@__PURE__*/tags.definition(tags.variableName),
        color: "#00f" },
    { tag: /*@__PURE__*/tags.local(tags.variableName),
        color: "#30a" },
    { tag: [tags.typeName, tags.namespace],
        color: "#085" },
    { tag: tags.className,
        color: "#167" },
    { tag: [/*@__PURE__*/tags.special(tags.variableName), tags.macroName],
        color: "#256" },
    { tag: /*@__PURE__*/tags.definition(tags.propertyName),
        color: "#00c" },
    { tag: tags.comment,
        color: "#940" },
    { tag: tags.meta,
        color: "#7a757a" },
    { tag: tags.invalid,
        color: "#f00" }
]);
/**
This is a highlight style that adds stable, predictable classes to
tokens, for styling with external CSS.

These tags are mapped to their name prefixed with `"cmt-"` (for
example `"cmt-comment"`):

* [`link`](https://codemirror.net/6/docs/ref/#highlight.tags.link)
* [`heading`](https://codemirror.net/6/docs/ref/#highlight.tags.heading)
* [`emphasis`](https://codemirror.net/6/docs/ref/#highlight.tags.emphasis)
* [`strong`](https://codemirror.net/6/docs/ref/#highlight.tags.strong)
* [`keyword`](https://codemirror.net/6/docs/ref/#highlight.tags.keyword)
* [`atom`](https://codemirror.net/6/docs/ref/#highlight.tags.atom) [`bool`](https://codemirror.net/6/docs/ref/#highlight.tags.bool)
* [`url`](https://codemirror.net/6/docs/ref/#highlight.tags.url)
* [`labelName`](https://codemirror.net/6/docs/ref/#highlight.tags.labelName)
* [`inserted`](https://codemirror.net/6/docs/ref/#highlight.tags.inserted)
* [`deleted`](https://codemirror.net/6/docs/ref/#highlight.tags.deleted)
* [`literal`](https://codemirror.net/6/docs/ref/#highlight.tags.literal)
* [`string`](https://codemirror.net/6/docs/ref/#highlight.tags.string)
* [`number`](https://codemirror.net/6/docs/ref/#highlight.tags.number)
* [`variableName`](https://codemirror.net/6/docs/ref/#highlight.tags.variableName)
* [`typeName`](https://codemirror.net/6/docs/ref/#highlight.tags.typeName)
* [`namespace`](https://codemirror.net/6/docs/ref/#highlight.tags.namespace)
* [`macroName`](https://codemirror.net/6/docs/ref/#highlight.tags.macroName)
* [`propertyName`](https://codemirror.net/6/docs/ref/#highlight.tags.propertyName)
* [`operator`](https://codemirror.net/6/docs/ref/#highlight.tags.operator)
* [`comment`](https://codemirror.net/6/docs/ref/#highlight.tags.comment)
* [`meta`](https://codemirror.net/6/docs/ref/#highlight.tags.meta)
* [`punctuation`](https://codemirror.net/6/docs/ref/#highlight.tags.puncutation)
* [`invalid`](https://codemirror.net/6/docs/ref/#highlight.tags.invalid)

In addition, these mappings are provided:

* [`regexp`](https://codemirror.net/6/docs/ref/#highlight.tags.regexp),
  [`escape`](https://codemirror.net/6/docs/ref/#highlight.tags.escape), and
  [`special`](https://codemirror.net/6/docs/ref/#highlight.tags.special)[`(string)`](https://codemirror.net/6/docs/ref/#highlight.tags.string)
  are mapped to `"cmt-string2"`
* [`special`](https://codemirror.net/6/docs/ref/#highlight.tags.special)[`(variableName)`](https://codemirror.net/6/docs/ref/#highlight.tags.variableName)
  to `"cmt-variableName2"`
* [`local`](https://codemirror.net/6/docs/ref/#highlight.tags.local)[`(variableName)`](https://codemirror.net/6/docs/ref/#highlight.tags.variableName)
  to `"cmt-variableName cmt-local"`
* [`definition`](https://codemirror.net/6/docs/ref/#highlight.tags.definition)[`(variableName)`](https://codemirror.net/6/docs/ref/#highlight.tags.variableName)
  to `"cmt-variableName cmt-definition"`
*/
const classHighlightStyle = /*@__PURE__*/HighlightStyle.define([
    { tag: tags.link, class: "cmt-link" },
    { tag: tags.heading, class: "cmt-heading" },
    { tag: tags.emphasis, class: "cmt-emphasis" },
    { tag: tags.strong, class: "cmt-strong" },
    { tag: tags.keyword, class: "cmt-keyword" },
    { tag: tags.atom, class: "cmt-atom" },
    { tag: tags.bool, class: "cmt-bool" },
    { tag: tags.url, class: "cmt-url" },
    { tag: tags.labelName, class: "cmt-labelName" },
    { tag: tags.inserted, class: "cmt-inserted" },
    { tag: tags.deleted, class: "cmt-deleted" },
    { tag: tags.literal, class: "cmt-literal" },
    { tag: tags.string, class: "cmt-string" },
    { tag: tags.number, class: "cmt-number" },
    { tag: [tags.regexp, tags.escape, /*@__PURE__*/tags.special(tags.string)], class: "cmt-string2" },
    { tag: tags.variableName, class: "cmt-variableName" },
    { tag: /*@__PURE__*/tags.local(tags.variableName), class: "cmt-variableName cmt-local" },
    { tag: /*@__PURE__*/tags.definition(tags.variableName), class: "cmt-variableName cmt-definition" },
    { tag: /*@__PURE__*/tags.special(tags.variableName), class: "cmt-variableName2" },
    { tag: tags.typeName, class: "cmt-typeName" },
    { tag: tags.namespace, class: "cmt-namespace" },
    { tag: tags.macroName, class: "cmt-macroName" },
    { tag: tags.propertyName, class: "cmt-propertyName" },
    { tag: tags.operator, class: "cmt-operator" },
    { tag: tags.comment, class: "cmt-comment" },
    { tag: tags.meta, class: "cmt-meta" },
    { tag: tags.invalid, class: "cmt-invalid" },
    { tag: tags.punctuation, class: "cmt-punctuation" }
]);




/***/ }),
/* 34 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultBufferLength": () => (/* binding */ DefaultBufferLength),
/* harmony export */   "NodeProp": () => (/* binding */ NodeProp),
/* harmony export */   "NodeSet": () => (/* binding */ NodeSet),
/* harmony export */   "NodeType": () => (/* binding */ NodeType),
/* harmony export */   "Tree": () => (/* binding */ Tree),
/* harmony export */   "TreeBuffer": () => (/* binding */ TreeBuffer),
/* harmony export */   "TreeCursor": () => (/* binding */ TreeCursor),
/* harmony export */   "TreeFragment": () => (/* binding */ TreeFragment),
/* harmony export */   "stringInput": () => (/* binding */ stringInput)
/* harmony export */ });
/// The default maximum length of a `TreeBuffer` node.
const DefaultBufferLength = 1024;
let nextPropID = 0;
const CachedNode = new WeakMap();
/// Each [node type](#tree.NodeType) can have metadata associated with
/// it in props. Instances of this class represent prop names.
class NodeProp {
    /// Create a new node prop type. You can optionally pass a
    /// `deserialize` function.
    constructor({ deserialize } = {}) {
        this.id = nextPropID++;
        this.deserialize = deserialize || (() => {
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    /// Create a string-valued node prop whose deserialize function is
    /// the identity function.
    static string() { return new NodeProp({ deserialize: str => str }); }
    /// Create a number-valued node prop whose deserialize function is
    /// just `Number`.
    static number() { return new NodeProp({ deserialize: Number }); }
    /// Creates a boolean-valued node prop whose deserialize function
    /// returns true for any input.
    static flag() { return new NodeProp({ deserialize: () => true }); }
    /// Store a value for this prop in the given object. This can be
    /// useful when building up a prop object to pass to the
    /// [`NodeType`](#tree.NodeType) constructor. Returns its first
    /// argument.
    set(propObj, value) {
        propObj[this.id] = value;
        return propObj;
    }
    /// This is meant to be used with
    /// [`NodeSet.extend`](#tree.NodeSet.extend) or
    /// [`Parser.withProps`](#lezer.Parser.withProps) to compute prop
    /// values for each node type in the set. Takes a [match
    /// object](#tree.NodeType^match) or function that returns undefined
    /// if the node type doesn't get this prop, and the prop's value if
    /// it does.
    add(match) {
        if (typeof match != "function")
            match = NodeType.match(match);
        return (type) => {
            let result = match(type);
            return result === undefined ? null : [this, result];
        };
    }
}
/// Prop that is used to describe matching delimiters. For opening
/// delimiters, this holds an array of node names (written as a
/// space-separated string when declaring this prop in a grammar)
/// for the node types of closing delimiters that match it.
NodeProp.closedBy = new NodeProp({ deserialize: str => str.split(" ") });
/// The inverse of [`openedBy`](#tree.NodeProp^closedBy). This is
/// attached to closing delimiters, holding an array of node names
/// of types of matching opening delimiters.
NodeProp.openedBy = new NodeProp({ deserialize: str => str.split(" ") });
/// Used to assign node types to groups (for example, all node
/// types that represent an expression could be tagged with an
/// `"Expression"` group).
NodeProp.group = new NodeProp({ deserialize: str => str.split(" ") });
const noProps = Object.create(null);
/// Each node in a syntax tree has a node type associated with it.
class NodeType {
    /// @internal
    constructor(
    /// The name of the node type. Not necessarily unique, but if the
    /// grammar was written properly, different node types with the
    /// same name within a node set should play the same semantic
    /// role.
    name, 
    /// @internal
    props, 
    /// The id of this node in its set. Corresponds to the term ids
    /// used in the parser.
    id, 
    /// @internal
    flags = 0) {
        this.name = name;
        this.props = props;
        this.id = id;
        this.flags = flags;
    }
    static define(spec) {
        let props = spec.props && spec.props.length ? Object.create(null) : noProps;
        let flags = (spec.top ? 1 /* Top */ : 0) | (spec.skipped ? 2 /* Skipped */ : 0) |
            (spec.error ? 4 /* Error */ : 0) | (spec.name == null ? 8 /* Anonymous */ : 0);
        let type = new NodeType(spec.name || "", props, spec.id, flags);
        if (spec.props)
            for (let src of spec.props) {
                if (!Array.isArray(src))
                    src = src(type);
                if (src)
                    src[0].set(props, src[1]);
            }
        return type;
    }
    /// Retrieves a node prop for this type. Will return `undefined` if
    /// the prop isn't present on this node.
    prop(prop) { return this.props[prop.id]; }
    /// True when this is the top node of a grammar.
    get isTop() { return (this.flags & 1 /* Top */) > 0; }
    /// True when this node is produced by a skip rule.
    get isSkipped() { return (this.flags & 2 /* Skipped */) > 0; }
    /// Indicates whether this is an error node.
    get isError() { return (this.flags & 4 /* Error */) > 0; }
    /// When true, this node type doesn't correspond to a user-declared
    /// named node, for example because it is used to cache repetition.
    get isAnonymous() { return (this.flags & 8 /* Anonymous */) > 0; }
    /// Returns true when this node's name or one of its
    /// [groups](#tree.NodeProp^group) matches the given string.
    is(name) {
        if (typeof name == 'string') {
            if (this.name == name)
                return true;
            let group = this.prop(NodeProp.group);
            return group ? group.indexOf(name) > -1 : false;
        }
        return this.id == name;
    }
    /// Create a function from node types to arbitrary values by
    /// specifying an object whose property names are node or
    /// [group](#tree.NodeProp^group) names. Often useful with
    /// [`NodeProp.add`](#tree.NodeProp.add). You can put multiple
    /// names, separated by spaces, in a single property name to map
    /// multiple node names to a single value.
    static match(map) {
        let direct = Object.create(null);
        for (let prop in map)
            for (let name of prop.split(" "))
                direct[name] = map[prop];
        return (node) => {
            for (let groups = node.prop(NodeProp.group), i = -1; i < (groups ? groups.length : 0); i++) {
                let found = direct[i < 0 ? node.name : groups[i]];
                if (found)
                    return found;
            }
        };
    }
}
/// An empty dummy node type to use when no actual type is available.
NodeType.none = new NodeType("", Object.create(null), 0, 8 /* Anonymous */);
/// A node set holds a collection of node types. It is used to
/// compactly represent trees by storing their type ids, rather than a
/// full pointer to the type object, in a number array. Each parser
/// [has](#lezer.Parser.nodeSet) a node set, and [tree
/// buffers](#tree.TreeBuffer) can only store collections of nodes
/// from the same set. A set can have a maximum of 2**16 (65536)
/// node types in it, so that the ids fit into 16-bit typed array
/// slots.
class NodeSet {
    /// Create a set with the given types. The `id` property of each
    /// type should correspond to its position within the array.
    constructor(
    /// The node types in this set, by id.
    types) {
        this.types = types;
        for (let i = 0; i < types.length; i++)
            if (types[i].id != i)
                throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    /// Create a copy of this set with some node properties added. The
    /// arguments to this method should be created with
    /// [`NodeProp.add`](#tree.NodeProp.add).
    extend(...props) {
        let newTypes = [];
        for (let type of this.types) {
            let newProps = null;
            for (let source of props) {
                let add = source(type);
                if (add) {
                    if (!newProps)
                        newProps = Object.assign({}, type.props);
                    add[0].set(newProps, add[1]);
                }
            }
            newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
        }
        return new NodeSet(newTypes);
    }
}
/// A piece of syntax tree. There are two ways to approach these
/// trees: the way they are actually stored in memory, and the
/// convenient way.
///
/// Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
/// objects. By packing detail information into `TreeBuffer` leaf
/// nodes, the representation is made a lot more memory-efficient.
///
/// However, when you want to actually work with tree nodes, this
/// representation is very awkward, so most client code will want to
/// use the `TreeCursor` interface instead, which provides a view on
/// some part of this data structure, and can be used to move around
/// to adjacent nodes.
class Tree {
    /// Construct a new tree. You usually want to go through
    /// [`Tree.build`](#tree.Tree^build) instead.
    constructor(type, 
    /// The tree's child nodes. Children small enough to fit in a
    /// `TreeBuffer will be represented as such, other children can be
    /// further `Tree` instances with their own internal structure.
    children, 
    /// The positions (offsets relative to the start of this tree) of
    /// the children.
    positions, 
    /// The total length of this tree
    length) {
        this.type = type;
        this.children = children;
        this.positions = positions;
        this.length = length;
    }
    /// @internal
    toString() {
        let children = this.children.map(c => c.toString()).join();
        return !this.type.name ? children :
            (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) +
                (children.length ? "(" + children + ")" : "");
    }
    /// Get a [tree cursor](#tree.TreeCursor) rooted at this tree. When
    /// `pos` is given, the cursor is [moved](#tree.TreeCursor.moveTo)
    /// to the given position and side.
    cursor(pos, side = 0) {
        let scope = (pos != null && CachedNode.get(this)) || this.topNode;
        let cursor = new TreeCursor(scope);
        if (pos != null) {
            cursor.moveTo(pos, side);
            CachedNode.set(this, cursor._tree);
        }
        return cursor;
    }
    /// Get a [tree cursor](#tree.TreeCursor) that, unlike regular
    /// cursors, doesn't skip [anonymous](#tree.NodeType.isAnonymous)
    /// nodes.
    fullCursor() {
        return new TreeCursor(this.topNode, true);
    }
    /// Get a [syntax node](#tree.SyntaxNode) object for the top of the
    /// tree.
    get topNode() {
        return new TreeNode(this, 0, 0, null);
    }
    /// Get the [syntax node](#tree.SyntaxNode) at the given position.
    /// If `side` is -1, this will move into nodes that end at the
    /// position. If 1, it'll move into nodes that start at the
    /// position. With 0, it'll only enter nodes that cover the position
    /// from both sides.
    resolve(pos, side = 0) {
        return this.cursor(pos, side).node;
    }
    /// Iterate over the tree and its children, calling `enter` for any
    /// node that touches the `from`/`to` region (if given) before
    /// running over such a node's children, and `leave` (if given) when
    /// leaving the node. When `enter` returns `false`, the given node
    /// will not have its children iterated over (or `leave` called).
    iterate(spec) {
        let { enter, leave, from = 0, to = this.length } = spec;
        for (let c = this.cursor();;) {
            let mustLeave = false;
            if (c.from <= to && c.to >= from && (c.type.isAnonymous || enter(c.type, c.from, c.to) !== false)) {
                if (c.firstChild())
                    continue;
                if (!c.type.isAnonymous)
                    mustLeave = true;
            }
            for (;;) {
                if (mustLeave && leave)
                    leave(c.type, c.from, c.to);
                mustLeave = c.type.isAnonymous;
                if (c.nextSibling())
                    break;
                if (!c.parent())
                    return;
                mustLeave = true;
            }
        }
    }
    /// Balance the direct children of this tree.
    balance(maxBufferLength = DefaultBufferLength) {
        return this.children.length <= BalanceBranchFactor ? this
            : balanceRange(this.type, NodeType.none, this.children, this.positions, 0, this.children.length, 0, maxBufferLength, this.length, 0);
    }
    /// Build a tree from a postfix-ordered buffer of node information,
    /// or a cursor over such a buffer.
    static build(data) { return buildTree(data); }
}
/// The empty tree
Tree.empty = new Tree(NodeType.none, [], [], 0);
// For trees that need a context hash attached, we're using this
// kludge which assigns an extra property directly after
// initialization (creating a single new object shape).
function withHash(tree, hash) {
    if (hash)
        tree.contextHash = hash;
    return tree;
}
/// Tree buffers contain (type, start, end, endIndex) quads for each
/// node. In such a buffer, nodes are stored in prefix order (parents
/// before children, with the endIndex of the parent indicating which
/// children belong to it)
class TreeBuffer {
    /// Create a tree buffer @internal
    constructor(
    /// @internal
    buffer, 
    // The total length of the group of nodes in the buffer.
    length, 
    /// @internal
    set, type = NodeType.none) {
        this.buffer = buffer;
        this.length = length;
        this.set = set;
        this.type = type;
    }
    /// @internal
    toString() {
        let result = [];
        for (let index = 0; index < this.buffer.length;) {
            result.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result.join(",");
    }
    /// @internal
    childString(index) {
        let id = this.buffer[index], endIndex = this.buffer[index + 3];
        let type = this.set.types[id], result = type.name;
        if (/\W/.test(result) && !type.isError)
            result = JSON.stringify(result);
        index += 4;
        if (endIndex == index)
            return result;
        let children = [];
        while (index < endIndex) {
            children.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result + "(" + children.join(",") + ")";
    }
    /// @internal
    findChild(startIndex, endIndex, dir, after) {
        let { buffer } = this, pick = -1;
        for (let i = startIndex; i != endIndex; i = buffer[i + 3]) {
            if (after != -100000000 /* None */) {
                let start = buffer[i + 1], end = buffer[i + 2];
                if (dir > 0) {
                    if (end > after)
                        pick = i;
                    if (end > after)
                        break;
                }
                else {
                    if (start < after)
                        pick = i;
                    if (end >= after)
                        break;
                }
            }
            else {
                pick = i;
                if (dir > 0)
                    break;
            }
        }
        return pick;
    }
}
class TreeNode {
    constructor(node, from, index, _parent) {
        this.node = node;
        this.from = from;
        this.index = index;
        this._parent = _parent;
    }
    get type() { return this.node.type; }
    get name() { return this.node.type.name; }
    get to() { return this.from + this.node.length; }
    nextChild(i, dir, after, full = false) {
        for (let parent = this;;) {
            for (let { children, positions } = parent.node, e = dir > 0 ? children.length : -1; i != e; i += dir) {
                let next = children[i], start = positions[i] + parent.from;
                if (after != -100000000 /* None */ && (dir < 0 ? start >= after : start + next.length <= after))
                    continue;
                if (next instanceof TreeBuffer) {
                    let index = next.findChild(0, next.buffer.length, dir, after == -100000000 /* None */ ? -100000000 /* None */ : after - start);
                    if (index > -1)
                        return new BufferNode(new BufferContext(parent, next, i, start), null, index);
                }
                else if (full || (!next.type.isAnonymous || hasChild(next))) {
                    let inner = new TreeNode(next, start, i, parent);
                    return full || !inner.type.isAnonymous ? inner : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, after);
                }
            }
            if (full || !parent.type.isAnonymous)
                return null;
            i = parent.index + dir;
            parent = parent._parent;
            if (!parent)
                return null;
        }
    }
    get firstChild() { return this.nextChild(0, 1, -100000000 /* None */); }
    get lastChild() { return this.nextChild(this.node.children.length - 1, -1, -100000000 /* None */); }
    childAfter(pos) { return this.nextChild(0, 1, pos); }
    childBefore(pos) { return this.nextChild(this.node.children.length - 1, -1, pos); }
    nextSignificantParent() {
        let val = this;
        while (val.type.isAnonymous && val._parent)
            val = val._parent;
        return val;
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
        return this._parent ? this._parent.nextChild(this.index + 1, 1, -1) : null;
    }
    get prevSibling() {
        return this._parent ? this._parent.nextChild(this.index - 1, -1, -1) : null;
    }
    get cursor() { return new TreeCursor(this); }
    resolve(pos, side = 0) {
        return this.cursor.moveTo(pos, side).node;
    }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
    /// @internal
    toString() { return this.node.toString(); }
}
function getChildren(node, type, before, after) {
    let cur = node.cursor, result = [];
    if (!cur.firstChild())
        return result;
    if (before != null)
        while (!cur.type.is(before))
            if (!cur.nextSibling())
                return result;
    for (;;) {
        if (after != null && cur.type.is(after))
            return result;
        if (cur.type.is(type))
            result.push(cur.node);
        if (!cur.nextSibling())
            return after == null ? result : [];
    }
}
class BufferContext {
    constructor(parent, buffer, index, start) {
        this.parent = parent;
        this.buffer = buffer;
        this.index = index;
        this.start = start;
    }
}
class BufferNode {
    constructor(context, _parent, index) {
        this.context = context;
        this._parent = _parent;
        this.index = index;
        this.type = context.buffer.set.types[context.buffer.buffer[index]];
    }
    get name() { return this.type.name; }
    get from() { return this.context.start + this.context.buffer.buffer[this.index + 1]; }
    get to() { return this.context.start + this.context.buffer.buffer[this.index + 2]; }
    child(dir, after) {
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, after == -100000000 /* None */ ? -100000000 /* None */ : after - this.context.start);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get firstChild() { return this.child(1, -100000000 /* None */); }
    get lastChild() { return this.child(-1, -100000000 /* None */); }
    childAfter(pos) { return this.child(1, pos); }
    childBefore(pos) { return this.child(-1, pos); }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(dir) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + dir, dir, -1);
    }
    get nextSibling() {
        let { buffer } = this.context;
        let after = buffer.buffer[this.index + 3];
        if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length))
            return new BufferNode(this.context, this._parent, after);
        return this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer } = this.context;
        let parentStart = this._parent ? this._parent.index + 4 : 0;
        if (this.index == parentStart)
            return this.externalSibling(-1);
        return new BufferNode(this.context, this._parent, buffer.findChild(parentStart, this.index, -1, -100000000 /* None */));
    }
    get cursor() { return new TreeCursor(this); }
    resolve(pos, side = 0) {
        return this.cursor.moveTo(pos, side).node;
    }
    /// @internal
    toString() { return this.context.buffer.childString(this.index); }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
}
/// A tree cursor object focuses on a given node in a syntax tree, and
/// allows you to move to adjacent nodes.
class TreeCursor {
    /// @internal
    constructor(node, full = false) {
        this.full = full;
        this.buffer = null;
        this.stack = [];
        this.index = 0;
        this.bufferNode = null;
        if (node instanceof TreeNode) {
            this.yieldNode(node);
        }
        else {
            this._tree = node.context.parent;
            this.buffer = node.context;
            for (let n = node._parent; n; n = n._parent)
                this.stack.unshift(n.index);
            this.bufferNode = node;
            this.yieldBuf(node.index);
        }
    }
    /// Shorthand for `.type.name`.
    get name() { return this.type.name; }
    yieldNode(node) {
        if (!node)
            return false;
        this._tree = node;
        this.type = node.type;
        this.from = node.from;
        this.to = node.to;
        return true;
    }
    yieldBuf(index, type) {
        this.index = index;
        let { start, buffer } = this.buffer;
        this.type = type || buffer.set.types[buffer.buffer[index]];
        this.from = start + buffer.buffer[index + 1];
        this.to = start + buffer.buffer[index + 2];
        return true;
    }
    yield(node) {
        if (!node)
            return false;
        if (node instanceof TreeNode) {
            this.buffer = null;
            return this.yieldNode(node);
        }
        this.buffer = node.context;
        return this.yieldBuf(node.index, node.type);
    }
    /// @internal
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    /// @internal
    enter(dir, after) {
        if (!this.buffer)
            return this.yield(this._tree.nextChild(dir < 0 ? this._tree.node.children.length - 1 : 0, dir, after, this.full));
        let { buffer } = this.buffer;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, after == -100000000 /* None */ ? -100000000 /* None */ : after - this.buffer.start);
        if (index < 0)
            return false;
        this.stack.push(this.index);
        return this.yieldBuf(index);
    }
    /// Move the cursor to this node's first child. When this returns
    /// false, the node has no child, and the cursor has not been moved.
    firstChild() { return this.enter(1, -100000000 /* None */); }
    /// Move the cursor to this node's last child.
    lastChild() { return this.enter(-1, -100000000 /* None */); }
    /// Move the cursor to the first child that starts at or after `pos`.
    childAfter(pos) { return this.enter(1, pos); }
    /// Move to the last child that ends at or before `pos`.
    childBefore(pos) { return this.enter(-1, pos); }
    /// Move the node's parent node, if this isn't the top node.
    parent() {
        if (!this.buffer)
            return this.yieldNode(this.full ? this._tree._parent : this._tree.parent);
        if (this.stack.length)
            return this.yieldBuf(this.stack.pop());
        let parent = this.full ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        this.buffer = null;
        return this.yieldNode(parent);
    }
    /// @internal
    sibling(dir) {
        if (!this.buffer)
            return !this._tree._parent ? false
                : this.yield(this._tree._parent.nextChild(this._tree.index + dir, dir, -100000000 /* None */, this.full));
        let { buffer } = this.buffer, d = this.stack.length - 1;
        if (dir < 0) {
            let parentStart = d < 0 ? 0 : this.stack[d] + 4;
            if (this.index != parentStart)
                return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, -100000000 /* None */));
        }
        else {
            let after = buffer.buffer[this.index + 3];
            if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3]))
                return this.yieldBuf(after);
        }
        return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, -100000000 /* None */, this.full)) : false;
    }
    /// Move to this node's next sibling, if any.
    nextSibling() { return this.sibling(1); }
    /// Move to this node's previous sibling, if any.
    prevSibling() { return this.sibling(-1); }
    atLastNode(dir) {
        let index, parent, { buffer } = this;
        if (buffer) {
            if (dir > 0) {
                if (this.index < buffer.buffer.buffer.length)
                    return false;
            }
            else {
                for (let i = 0; i < this.index; i++)
                    if (buffer.buffer.buffer[i + 3] < this.index)
                        return false;
            }
            ({ index, parent } = buffer);
        }
        else {
            ({ index, _parent: parent } = this._tree);
        }
        for (; parent; { index, _parent: parent } = parent) {
            for (let i = index + dir, e = dir < 0 ? -1 : parent.node.children.length; i != e; i += dir) {
                let child = parent.node.children[i];
                if (this.full || !child.type.isAnonymous || child instanceof TreeBuffer || hasChild(child))
                    return false;
            }
        }
        return true;
    }
    move(dir) {
        if (this.enter(dir, -100000000 /* None */))
            return true;
        for (;;) {
            if (this.sibling(dir))
                return true;
            if (this.atLastNode(dir) || !this.parent())
                return false;
        }
    }
    /// Move to the next node in a
    /// [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
    /// traversal, going from a node to its first child or, if the
    /// current node is empty, its next sibling or the next sibling of
    /// the first parent node that has one.
    next() { return this.move(1); }
    /// Move to the next node in a last-to-first pre-order traveral. A
    /// node is followed by ist last child or, if it has none, its
    /// previous sibling or the previous sibling of the first parent
    /// node that has one.
    prev() { return this.move(-1); }
    /// Move the cursor to the innermost node that covers `pos`. If
    /// `side` is -1, it will enter nodes that end at `pos`. If it is 1,
    /// it will enter nodes that start at `pos`.
    moveTo(pos, side = 0) {
        // Move up to a node that actually holds the position, if possible
        while (this.from == this.to ||
            (side < 1 ? this.from >= pos : this.from > pos) ||
            (side > -1 ? this.to <= pos : this.to < pos))
            if (!this.parent())
                break;
        // Then scan down into child nodes as far as possible
        for (;;) {
            if (side < 0 ? !this.childBefore(pos) : !this.childAfter(pos))
                break;
            if (this.from == this.to ||
                (side < 1 ? this.from >= pos : this.from > pos) ||
                (side > -1 ? this.to <= pos : this.to < pos)) {
                this.parent();
                break;
            }
        }
        return this;
    }
    /// Get a [syntax node](#tree.SyntaxNode) at the cursor's current
    /// position.
    get node() {
        if (!this.buffer)
            return this._tree;
        let cache = this.bufferNode, result = null, depth = 0;
        if (cache && cache.context == this.buffer) {
            scan: for (let index = this.index, d = this.stack.length; d >= 0;) {
                for (let c = cache; c; c = c._parent)
                    if (c.index == index) {
                        if (index == this.index)
                            return c;
                        result = c;
                        depth = d + 1;
                        break scan;
                    }
                index = this.stack[--d];
            }
        }
        for (let i = depth; i < this.stack.length; i++)
            result = new BufferNode(this.buffer, result, this.stack[i]);
        return this.bufferNode = new BufferNode(this.buffer, result, this.index);
    }
    /// Get the [tree](#tree.Tree) that represents the current node, if
    /// any. Will return null when the node is in a [tree
    /// buffer](#tree.TreeBuffer).
    get tree() {
        return this.buffer ? null : this._tree.node;
    }
}
function hasChild(tree) {
    return tree.children.some(ch => !ch.type.isAnonymous || ch instanceof TreeBuffer || hasChild(ch));
}
class FlatBufferCursor {
    constructor(buffer, index) {
        this.buffer = buffer;
        this.index = index;
    }
    get id() { return this.buffer[this.index - 4]; }
    get start() { return this.buffer[this.index - 3]; }
    get end() { return this.buffer[this.index - 2]; }
    get size() { return this.buffer[this.index - 1]; }
    get pos() { return this.index; }
    next() { this.index -= 4; }
    fork() { return new FlatBufferCursor(this.buffer, this.index); }
}
const BalanceBranchFactor = 8;
function buildTree(data) {
    var _a;
    let { buffer, nodeSet, topID = 0, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
    let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    let types = nodeSet.types;
    let contextHash = 0;
    function takeNode(parentStart, minPos, children, positions, inRepeat) {
        let { id, start, end, size } = cursor;
        let startPos = start - parentStart;
        if (size < 0) {
            if (size == -1) { // Reused node
                children.push(reused[id]);
                positions.push(startPos);
            }
            else { // Context change
                contextHash = id;
            }
            cursor.next();
            return;
        }
        let type = types[id], node, buffer;
        if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos, inRepeat))) {
            // Small enough for a buffer, and no reused nodes inside
            let data = new Uint16Array(buffer.size - buffer.skip);
            let endPos = cursor.pos - buffer.size, index = data.length;
            while (cursor.pos > endPos)
                index = copyToBuffer(buffer.start, data, index, inRepeat);
            node = new TreeBuffer(data, end - buffer.start, nodeSet, inRepeat < 0 ? NodeType.none : types[inRepeat]);
            startPos = buffer.start - parentStart;
        }
        else { // Make it a node
            let endPos = cursor.pos - size;
            cursor.next();
            let localChildren = [], localPositions = [];
            let localInRepeat = id >= minRepeatType ? id : -1;
            while (cursor.pos > endPos) {
                if (cursor.id == localInRepeat)
                    cursor.next();
                else
                    takeNode(start, endPos, localChildren, localPositions, localInRepeat);
            }
            localChildren.reverse();
            localPositions.reverse();
            if (localInRepeat > -1 && localChildren.length > BalanceBranchFactor)
                node = balanceRange(type, type, localChildren, localPositions, 0, localChildren.length, 0, maxBufferLength, end - start, contextHash);
            else
                node = withHash(new Tree(type, localChildren, localPositions, end - start), contextHash);
        }
        children.push(node);
        positions.push(startPos);
    }
    function findBufferSize(maxSize, inRepeat) {
        // Scan through the buffer to find previous siblings that fit
        // together in a TreeBuffer, and don't contain any reused nodes
        // (which can't be stored in a buffer).
        // If `inRepeat` is > -1, ignore node boundaries of that type for
        // nesting, but make sure the end falls either at the start
        // (`maxSize`) or before such a node.
        let fork = cursor.fork();
        let size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
        let result = { size: 0, start: 0, skip: 0 };
        scan: for (let minPos = fork.pos - maxSize; fork.pos > minPos;) {
            // Pretend nested repeat nodes of the same type don't exist
            if (fork.id == inRepeat) {
                // Except that we store the current state as a valid return
                // value.
                result.size = size;
                result.start = start;
                result.skip = skip;
                skip += 4;
                size += 4;
                fork.next();
                continue;
            }
            let nodeSize = fork.size, startPos = fork.pos - nodeSize;
            if (nodeSize < 0 || startPos < minPos || fork.start < minStart)
                break;
            let localSkipped = fork.id >= minRepeatType ? 4 : 0;
            let nodeStart = fork.start;
            fork.next();
            while (fork.pos > startPos) {
                if (fork.size < 0)
                    break scan;
                if (fork.id >= minRepeatType)
                    localSkipped += 4;
                fork.next();
            }
            start = nodeStart;
            size += nodeSize;
            skip += localSkipped;
        }
        if (inRepeat < 0 || size == maxSize) {
            result.size = size;
            result.start = start;
            result.skip = skip;
        }
        return result.size > 4 ? result : undefined;
    }
    function copyToBuffer(bufferStart, buffer, index, inRepeat) {
        let { id, start, end, size } = cursor;
        cursor.next();
        if (id == inRepeat)
            return index;
        let startIndex = index;
        if (size > 4) {
            let endPos = cursor.pos - (size - 4);
            while (cursor.pos > endPos)
                index = copyToBuffer(bufferStart, buffer, index, inRepeat);
        }
        if (id < minRepeatType) { // Don't copy repeat nodes into buffers
            buffer[--index] = startIndex;
            buffer[--index] = end - bufferStart;
            buffer[--index] = start - bufferStart;
            buffer[--index] = id;
        }
        return index;
    }
    let children = [], positions = [];
    while (cursor.pos > 0)
        takeNode(data.start || 0, 0, children, positions, -1);
    let length = (_a = data.length) !== null && _a !== void 0 ? _a : (children.length ? positions[0] + children[0].length : 0);
    return new Tree(types[topID], children.reverse(), positions.reverse(), length);
}
function balanceRange(outerType, innerType, children, positions, from, to, start, maxBufferLength, length, contextHash) {
    let localChildren = [], localPositions = [];
    if (length <= maxBufferLength) {
        for (let i = from; i < to; i++) {
            localChildren.push(children[i]);
            localPositions.push(positions[i] - start);
        }
    }
    else {
        let maxChild = Math.max(maxBufferLength, Math.ceil(length * 1.5 / BalanceBranchFactor));
        for (let i = from; i < to;) {
            let groupFrom = i, groupStart = positions[i];
            i++;
            for (; i < to; i++) {
                let nextEnd = positions[i] + children[i].length;
                if (nextEnd - groupStart > maxChild)
                    break;
            }
            if (i == groupFrom + 1) {
                let only = children[groupFrom];
                if (only instanceof Tree && only.type == innerType && only.length > maxChild << 1) { // Too big, collapse
                    for (let j = 0; j < only.children.length; j++) {
                        localChildren.push(only.children[j]);
                        localPositions.push(only.positions[j] + groupStart - start);
                    }
                    continue;
                }
                localChildren.push(only);
            }
            else if (i == groupFrom + 1) {
                localChildren.push(children[groupFrom]);
            }
            else {
                let inner = balanceRange(innerType, innerType, children, positions, groupFrom, i, groupStart, maxBufferLength, positions[i - 1] + children[i - 1].length - groupStart, contextHash);
                if (innerType != NodeType.none && !containsType(inner.children, innerType))
                    inner = withHash(new Tree(NodeType.none, inner.children, inner.positions, inner.length), contextHash);
                localChildren.push(inner);
            }
            localPositions.push(groupStart - start);
        }
    }
    return withHash(new Tree(outerType, localChildren, localPositions, length), contextHash);
}
function containsType(nodes, type) {
    for (let elt of nodes)
        if (elt.type == type)
            return true;
    return false;
}
/// Tree fragments are used during [incremental
/// parsing](#lezer.ParseOptions.fragments) to track parts of old
/// trees that can be reused in a new parse. An array of fragments is
/// used to track regions of an old tree whose nodes might be reused
/// in new parses. Use the static
/// [`applyChanges`](#tree.TreeFragment^applyChanges) method to update
/// fragments for document changes.
class TreeFragment {
    constructor(
    /// The start of the unchanged range pointed to by this fragment.
    /// This refers to an offset in the _updated_ document (as opposed
    /// to the original tree).
    from, 
    /// The end of the unchanged range.
    to, 
    /// The tree that this fragment is based on.
    tree, 
    /// The offset between the fragment's tree and the document that
    /// this fragment can be used against. Add this when going from
    /// document to tree positions, subtract it to go from tree to
    /// document positions.
    offset, open) {
        this.from = from;
        this.to = to;
        this.tree = tree;
        this.offset = offset;
        this.open = open;
    }
    get openStart() { return (this.open & 1 /* Start */) > 0; }
    get openEnd() { return (this.open & 2 /* End */) > 0; }
    /// Apply a set of edits to an array of fragments, removing or
    /// splitting fragments as necessary to remove edited ranges, and
    /// adjusting offsets for fragments that moved.
    static applyChanges(fragments, changes, minGap = 128) {
        if (!changes.length)
            return fragments;
        let result = [];
        let fI = 1, nextF = fragments.length ? fragments[0] : null;
        let cI = 0, pos = 0, off = 0;
        for (;;) {
            let nextC = cI < changes.length ? changes[cI++] : null;
            let nextPos = nextC ? nextC.fromA : 1e9;
            if (nextPos - pos >= minGap)
                while (nextF && nextF.from < nextPos) {
                    let cut = nextF;
                    if (pos >= cut.from || nextPos <= cut.to || off) {
                        let fFrom = Math.max(cut.from, pos) - off, fTo = Math.min(cut.to, nextPos) - off;
                        cut = fFrom >= fTo ? null :
                            new TreeFragment(fFrom, fTo, cut.tree, cut.offset + off, (cI > 0 ? 1 /* Start */ : 0) | (nextC ? 2 /* End */ : 0));
                    }
                    if (cut)
                        result.push(cut);
                    if (nextF.to > nextPos)
                        break;
                    nextF = fI < fragments.length ? fragments[fI++] : null;
                }
            if (!nextC)
                break;
            pos = nextC.toA;
            off = nextC.toA - nextC.toB;
        }
        return result;
    }
    /// Create a set of fragments from a freshly parsed tree, or update
    /// an existing set of fragments by replacing the ones that overlap
    /// with a tree with content from the new tree. When `partial` is
    /// true, the parse is treated as incomplete, and the token at its
    /// end is not included in [`safeTo`](#tree.TreeFragment.safeTo).
    static addTree(tree, fragments = [], partial = false) {
        let result = [new TreeFragment(0, tree.length, tree, 0, partial ? 2 /* End */ : 0)];
        for (let f of fragments)
            if (f.to > tree.length)
                result.push(f);
        return result;
    }
}
// Creates an `Input` that is backed by a single, flat string.
function stringInput(input) { return new StringInput(input); }
class StringInput {
    constructor(string, length = string.length) {
        this.string = string;
        this.length = length;
    }
    get(pos) {
        return pos < 0 || pos >= this.length ? -1 : this.string.charCodeAt(pos);
    }
    lineAfter(pos) {
        if (pos < 0)
            return "";
        let end = this.string.indexOf("\n", pos);
        return this.string.slice(pos, end < 0 ? this.length : Math.min(end, this.length));
    }
    read(from, to) { return this.string.slice(from, Math.min(this.length, to)); }
    clip(at) { return new StringInput(this.string, at); }
}


//# sourceMappingURL=tree.es.js.map


/***/ }),
/* 35 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorParseContext": () => (/* binding */ EditorParseContext),
/* harmony export */   "IndentContext": () => (/* binding */ IndentContext),
/* harmony export */   "Language": () => (/* binding */ Language),
/* harmony export */   "LanguageDescription": () => (/* binding */ LanguageDescription),
/* harmony export */   "LanguageSupport": () => (/* binding */ LanguageSupport),
/* harmony export */   "LezerLanguage": () => (/* binding */ LezerLanguage),
/* harmony export */   "TreeIndentContext": () => (/* binding */ TreeIndentContext),
/* harmony export */   "continuedIndent": () => (/* binding */ continuedIndent),
/* harmony export */   "defineLanguageFacet": () => (/* binding */ defineLanguageFacet),
/* harmony export */   "delimitedIndent": () => (/* binding */ delimitedIndent),
/* harmony export */   "ensureSyntaxTree": () => (/* binding */ ensureSyntaxTree),
/* harmony export */   "flatIndent": () => (/* binding */ flatIndent),
/* harmony export */   "foldInside": () => (/* binding */ foldInside),
/* harmony export */   "foldNodeProp": () => (/* binding */ foldNodeProp),
/* harmony export */   "foldService": () => (/* binding */ foldService),
/* harmony export */   "foldable": () => (/* binding */ foldable),
/* harmony export */   "getIndentUnit": () => (/* binding */ getIndentUnit),
/* harmony export */   "getIndentation": () => (/* binding */ getIndentation),
/* harmony export */   "indentNodeProp": () => (/* binding */ indentNodeProp),
/* harmony export */   "indentOnInput": () => (/* binding */ indentOnInput),
/* harmony export */   "indentService": () => (/* binding */ indentService),
/* harmony export */   "indentString": () => (/* binding */ indentString),
/* harmony export */   "indentUnit": () => (/* binding */ indentUnit),
/* harmony export */   "language": () => (/* binding */ language),
/* harmony export */   "languageDataProp": () => (/* binding */ languageDataProp),
/* harmony export */   "syntaxTree": () => (/* binding */ syntaxTree)
/* harmony export */ });
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _codemirror_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);





/**
Node prop stored in a grammar's top syntax node to provide the
facet that stores language data for that language.
*/
const languageDataProp = /*@__PURE__*/new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp();
/**
Helper function to define a facet (to be added to the top syntax
node(s) for a language via
[`languageDataProp`](https://codemirror.net/6/docs/ref/#language.languageDataProp)), that will be
used to associate language data with the language. You
probably only need this when subclassing
[`Language`](https://codemirror.net/6/docs/ref/#language.Language).
*/
function defineLanguageFacet(baseData) {
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define({
        combine: baseData ? values => values.concat(baseData) : undefined
    });
}
/**
A language object manages parsing and per-language
[metadata](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt). Parse data is
managed as a [Lezer](https://lezer.codemirror.net) tree. You'll
want to subclass this class for custom parsers, or use the
[`LezerLanguage`](https://codemirror.net/6/docs/ref/#language.LezerLanguage) or
[`StreamLanguage`](https://codemirror.net/6/docs/ref/#stream-parser.StreamLanguage) abstractions for
[Lezer](https://lezer.codemirror.net/) or stream parsers.
*/
class Language {
    /**
    Construct a language object. You usually don't need to invoke
    this directly. But when you do, make sure you use
    [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet) to create
    the first argument.
    */
    constructor(
    /**
    The [language data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) data
    facet used for this language.
    */
    data, parser, 
    /**
    The node type of the top node of trees produced by this parser.
    */
    topNode, extraExtensions = []) {
        this.data = data;
        this.topNode = topNode;
        // Kludge to define EditorState.tree as a debugging helper,
        // without the EditorState package actually knowing about
        // languages and lezer trees.
        if (!_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorState.prototype.hasOwnProperty("tree"))
            Object.defineProperty(_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorState.prototype, "tree", { get() { return syntaxTree(this); } });
        this.parser = parser;
        this.extension = [
            language.of(this),
            _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorState.languageData.of((state, pos) => state.facet(languageDataFacetAt(state, pos)))
        ].concat(extraExtensions);
    }
    /**
    Query whether this language is active at the given position.
    */
    isActiveAt(state, pos) {
        return languageDataFacetAt(state, pos) == this.data;
    }
    /**
    Find the document regions that were parsed using this language.
    The returned regions will _include_ any nested languages rooted
    in this language, when those exist.
    */
    findRegions(state) {
        let lang = state.facet(language);
        if ((lang === null || lang === void 0 ? void 0 : lang.data) == this.data)
            return [{ from: 0, to: state.doc.length }];
        if (!lang || !lang.allowsNesting)
            return [];
        let result = [];
        syntaxTree(state).iterate({
            enter: (type, from, to) => {
                if (type.isTop && type.prop(languageDataProp) == this.data) {
                    result.push({ from, to });
                    return false;
                }
                return undefined;
            }
        });
        return result;
    }
    /**
    Indicates whether this language allows nested languages. The
    default implementation returns true.
    */
    get allowsNesting() { return true; }
    /**
    Use this language to parse the given string into a tree.
    */
    parseString(code) {
        let doc = _codemirror_text__WEBPACK_IMPORTED_MODULE_2__.Text.of(code.split("\n"));
        let parse = this.parser.startParse(new DocInput(doc), 0, new EditorParseContext(this.parser, _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorState.create({ doc }), [], lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree.empty, { from: 0, to: code.length }, [], null));
        let tree;
        while (!(tree = parse.advance())) { }
        return tree;
    }
}
/**
@internal
*/
Language.setState = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.StateEffect.define();
function languageDataFacetAt(state, pos) {
    let topLang = state.facet(language);
    if (!topLang)
        return null;
    if (!topLang.allowsNesting)
        return topLang.data;
    let tree = syntaxTree(state);
    let target = tree.resolve(pos, -1);
    while (target) {
        let facet = target.type.prop(languageDataProp);
        if (facet)
            return facet;
        target = target.parent;
    }
    return topLang.data;
}
/**
A subclass of [`Language`](https://codemirror.net/6/docs/ref/#language.Language) for use with
[Lezer](https://lezer.codemirror.net/docs/ref#lezer.Parser)
parsers.
*/
class LezerLanguage extends Language {
    constructor(data, parser) {
        super(data, parser, parser.topNode);
        this.parser = parser;
    }
    /**
    Define a language from a parser.
    */
    static define(spec) {
        let data = defineLanguageFacet(spec.languageData);
        return new LezerLanguage(data, spec.parser.configure({
            props: [languageDataProp.add(type => type.isTop ? data : undefined)]
        }));
    }
    /**
    Create a new instance of this language with a reconfigured
    version of its parser.
    */
    configure(options) {
        return new LezerLanguage(this.data, this.parser.configure(options));
    }
    get allowsNesting() { return this.parser.hasNested; }
}
/**
Get the syntax tree for a state, which is the current (possibly
incomplete) parse tree of active [language](https://codemirror.net/6/docs/ref/#language.Language),
or the empty tree if there is no language available.
*/
function syntaxTree(state) {
    let field = state.field(Language.state, false);
    return field ? field.tree : lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree.empty;
}
/**
Try to get a parse tree that spans at least up to `upto`. The
method will do at most `timeout` milliseconds of work to parse
up to that point if the tree isn't already available.
*/
function ensureSyntaxTree(state, upto, timeout = 50) {
    var _a;
    let parse = (_a = state.field(Language.state, false)) === null || _a === void 0 ? void 0 : _a.context;
    return !parse ? null : parse.tree.length >= upto || parse.work(timeout, upto) ? parse.tree : null;
}
// Lezer-style Input object for a Text document.
class DocInput {
    constructor(doc, length = doc.length) {
        this.doc = doc;
        this.length = length;
        this.cursorPos = 0;
        this.string = "";
        this.prevString = "";
        this.cursor = doc.iter();
    }
    syncTo(pos) {
        if (pos < this.cursorPos) { // Reset the cursor if we have to go back
            this.cursor = this.doc.iter();
            this.cursorPos = 0;
        }
        this.prevString = pos == this.cursorPos ? this.string : "";
        this.string = this.cursor.next(pos - this.cursorPos).value;
        this.cursorPos = pos + this.string.length;
        return this.cursorPos - this.string.length;
    }
    get(pos) {
        if (pos >= this.length)
            return -1;
        let stringStart = this.cursorPos - this.string.length;
        if (pos < stringStart || pos >= this.cursorPos) {
            if (pos < stringStart && pos >= stringStart - this.prevString.length)
                return this.prevString.charCodeAt(pos - (stringStart - this.prevString.length));
            stringStart = this.syncTo(pos);
        }
        return this.string.charCodeAt(pos - stringStart);
    }
    lineAfter(pos) {
        if (pos >= this.length || pos < 0)
            return "";
        let stringStart = this.cursorPos - this.string.length;
        if (pos < stringStart || pos >= this.cursorPos)
            stringStart = this.syncTo(pos);
        return this.cursor.lineBreak ? "" : this.string.slice(pos - stringStart, Math.min(this.length - stringStart, this.string.length));
    }
    read(from, to) {
        let stringStart = this.cursorPos - this.string.length;
        if (from < stringStart || to >= this.cursorPos)
            return this.doc.sliceString(from, to);
        else
            return this.string.slice(from - stringStart, to - stringStart);
    }
    clip(at) {
        return new DocInput(this.doc, at);
    }
}
/**
A parse context provided to parsers working on the editor content.
*/
class EditorParseContext {
    /**
    @internal
    */
    constructor(parser, 
    /**
    The current editor state.
    */
    state, 
    /**
    Tree fragments that can be reused by incremental re-parses.
    */
    fragments = [], 
    /**
    @internal
    */
    tree, 
    /**
    The current editor viewport (or some overapproximation
    thereof). Intended to be used for opportunistically avoiding
    work (in which case
    [`skipUntilInView`](https://codemirror.net/6/docs/ref/#language.EditorParseContext.skipUntilInView)
    should be called to make sure the parser is restarted when the
    skipped region becomes visible).
    */
    viewport, 
    /**
    @internal
    */
    skipped, 
    /**
    This is where skipping parsers can register a promise that,
    when resolved, will schedule a new parse. It is cleared when
    the parse worker picks up the promise. @internal
    */
    scheduleOn) {
        this.parser = parser;
        this.state = state;
        this.fragments = fragments;
        this.tree = tree;
        this.viewport = viewport;
        this.skipped = skipped;
        this.scheduleOn = scheduleOn;
        this.parse = null;
        /**
        @internal
        */
        this.tempSkipped = [];
    }
    /**
    @internal
    */
    work(time, upto) {
        if (this.tree != lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree.empty && (upto == null ? this.tree.length == this.state.doc.length : this.tree.length >= upto)) {
            this.takeTree();
            return true;
        }
        if (!this.parse)
            this.parse = this.parser.startParse(new DocInput(this.state.doc), 0, this);
        let endTime = Date.now() + time;
        for (;;) {
            let done = this.parse.advance();
            if (done) {
                this.fragments = this.withoutTempSkipped(lezer_tree__WEBPACK_IMPORTED_MODULE_0__.TreeFragment.addTree(done));
                this.parse = null;
                this.tree = done;
                return true;
            }
            else if (upto != null && this.parse.pos >= upto) {
                this.takeTree();
                return true;
            }
            if (Date.now() > endTime)
                return false;
        }
    }
    /**
    @internal
    */
    takeTree() {
        if (this.parse && this.parse.pos > this.tree.length) {
            this.tree = this.parse.forceFinish();
            this.fragments = this.withoutTempSkipped(lezer_tree__WEBPACK_IMPORTED_MODULE_0__.TreeFragment.addTree(this.tree, this.fragments, true));
        }
    }
    withoutTempSkipped(fragments) {
        for (let r; r = this.tempSkipped.pop();)
            fragments = cutFragments(fragments, r.from, r.to);
        return fragments;
    }
    /**
    @internal
    */
    changes(changes, newState) {
        let { fragments, tree, viewport, skipped } = this;
        this.takeTree();
        if (!changes.empty) {
            let ranges = [];
            changes.iterChangedRanges((fromA, toA, fromB, toB) => ranges.push({ fromA, toA, fromB, toB }));
            fragments = lezer_tree__WEBPACK_IMPORTED_MODULE_0__.TreeFragment.applyChanges(fragments, ranges);
            tree = lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree.empty;
            viewport = { from: changes.mapPos(viewport.from, -1), to: changes.mapPos(viewport.to, 1) };
            if (this.skipped.length) {
                skipped = [];
                for (let r of this.skipped) {
                    let from = changes.mapPos(r.from, 1), to = changes.mapPos(r.to, -1);
                    if (from < to)
                        skipped.push({ from, to });
                }
            }
        }
        return new EditorParseContext(this.parser, newState, fragments, tree, viewport, skipped, this.scheduleOn);
    }
    /**
    @internal
    */
    updateViewport(viewport) {
        this.viewport = viewport;
        let startLen = this.skipped.length;
        for (let i = 0; i < this.skipped.length; i++) {
            let { from, to } = this.skipped[i];
            if (from < viewport.to && to > viewport.from) {
                this.fragments = cutFragments(this.fragments, from, to);
                this.skipped.splice(i--, 1);
            }
        }
        return this.skipped.length < startLen;
    }
    /**
    @internal
    */
    reset() {
        if (this.parse) {
            this.takeTree();
            this.parse = null;
        }
    }
    /**
    Notify the parse scheduler that the given region was skipped
    because it wasn't in view, and the parse should be restarted
    when it comes into view.
    */
    skipUntilInView(from, to) {
        this.skipped.push({ from, to });
    }
    /**
    Returns a parser intended to be used as placeholder when
    asynchronously loading a nested parser. It'll skip its input and
    mark it as not-really-parsed, so that the next update will parse
    it again.
    
    When `until` is given, a reparse will be scheduled when that
    promise resolves.
    */
    static getSkippingParser(until) {
        return {
            startParse(input, startPos, context) {
                return {
                    pos: startPos,
                    advance() {
                        let ecx = context;
                        ecx.tempSkipped.push({ from: startPos, to: input.length });
                        if (until)
                            ecx.scheduleOn = ecx.scheduleOn ? Promise.all([ecx.scheduleOn, until]) : until;
                        this.pos = input.length;
                        return new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree(lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeType.none, [], [], input.length - startPos);
                    },
                    forceFinish() { return this.advance(); }
                };
            }
        };
    }
    /**
    @internal
    */
    movedPast(pos) {
        return this.tree.length < pos && this.parse && this.parse.pos >= pos;
    }
}
/**
FIXME backwards compatible shim, remove on next major @internal
*/
EditorParseContext.skippingParser = /*@__PURE__*/EditorParseContext.getSkippingParser();
function cutFragments(fragments, from, to) {
    return lezer_tree__WEBPACK_IMPORTED_MODULE_0__.TreeFragment.applyChanges(fragments, [{ fromA: from, toA: to, fromB: from, toB: to }]);
}
class LanguageState {
    constructor(
    // A mutable parse state that is used to preserve work done during
    // the lifetime of a state when moving to the next state.
    context) {
        this.context = context;
        this.tree = context.tree;
    }
    apply(tr) {
        if (!tr.docChanged)
            return this;
        let newCx = this.context.changes(tr.changes, tr.state);
        // If the previous parse wasn't done, go forward only up to its
        // end position or the end of the viewport, to avoid slowing down
        // state updates with parse work beyond the viewport.
        let upto = this.context.tree.length == tr.startState.doc.length ? undefined
            : Math.max(tr.changes.mapPos(this.context.tree.length), newCx.viewport.to);
        if (!newCx.work(25 /* Apply */, upto))
            newCx.takeTree();
        return new LanguageState(newCx);
    }
    static init(state) {
        let parseState = new EditorParseContext(state.facet(language).parser, state, [], lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree.empty, { from: 0, to: state.doc.length }, [], null);
        if (!parseState.work(25 /* Apply */))
            parseState.takeTree();
        return new LanguageState(parseState);
    }
}
Language.state = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.StateField.define({
    create: LanguageState.init,
    update(value, tr) {
        for (let e of tr.effects)
            if (e.is(Language.setState))
                return e.value;
        if (tr.startState.facet(language) != tr.state.facet(language))
            return LanguageState.init(tr.state);
        return value.apply(tr);
    }
});
let requestIdle = typeof window != "undefined" && window.requestIdleCallback ||
    ((callback, { timeout }) => setTimeout(callback, timeout));
let cancelIdle = typeof window != "undefined" && window.cancelIdleCallback || clearTimeout;
const parseWorker = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.ViewPlugin.fromClass(class ParseWorker {
    constructor(view) {
        this.view = view;
        this.working = -1;
        // End of the current time chunk
        this.chunkEnd = -1;
        // Milliseconds of budget left for this chunk
        this.chunkBudget = -1;
        this.work = this.work.bind(this);
        this.scheduleWork();
    }
    update(update) {
        let cx = this.view.state.field(Language.state).context;
        if (update.viewportChanged) {
            if (cx.updateViewport(update.view.viewport))
                cx.reset();
            if (this.view.viewport.to > cx.tree.length)
                this.scheduleWork();
        }
        if (update.docChanged) {
            if (this.view.hasFocus)
                this.chunkBudget += 50 /* ChangeBonus */;
            this.scheduleWork();
        }
        this.checkAsyncSchedule(cx);
    }
    scheduleWork() {
        if (this.working > -1)
            return;
        let { state } = this.view, field = state.field(Language.state), frags = field.context.fragments;
        if (field.tree.length >= state.doc.length && frags.length && frags[0].from == 0 && frags[0].to >= state.doc.length)
            return;
        this.working = requestIdle(this.work, { timeout: 500 /* Pause */ });
    }
    work(deadline) {
        this.working = -1;
        let now = Date.now();
        if (this.chunkEnd < now && (this.chunkEnd < 0 || this.view.hasFocus)) { // Start a new chunk
            this.chunkEnd = now + 30000 /* ChunkTime */;
            this.chunkBudget = 3000 /* ChunkBudget */;
        }
        if (this.chunkBudget <= 0)
            return; // No more budget
        let { state, viewport: { to: vpTo } } = this.view, field = state.field(Language.state);
        if (field.tree.length >= vpTo + 1000000 /* MaxParseAhead */)
            return;
        let time = Math.min(this.chunkBudget, deadline ? Math.max(25 /* MinSlice */, deadline.timeRemaining()) : 100 /* Slice */);
        let done = field.context.work(time, vpTo + 1000000 /* MaxParseAhead */);
        this.chunkBudget -= Date.now() - now;
        if (done || this.chunkBudget <= 0 || field.context.movedPast(vpTo)) {
            field.context.takeTree();
            this.view.dispatch({ effects: Language.setState.of(new LanguageState(field.context)) });
        }
        if (!done && this.chunkBudget > 0)
            this.scheduleWork();
        this.checkAsyncSchedule(field.context);
    }
    checkAsyncSchedule(cx) {
        if (cx.scheduleOn) {
            cx.scheduleOn.then(() => this.scheduleWork());
            cx.scheduleOn = null;
        }
    }
    destroy() {
        if (this.working >= 0)
            cancelIdle(this.working);
    }
}, {
    eventHandlers: { focus() { this.scheduleWork(); } }
});
/**
The facet used to associate a language with an editor state.
*/
const language = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define({
    combine(languages) { return languages.length ? languages[0] : null; },
    enables: [Language.state, parseWorker]
});
/**
This class bundles a [language object](https://codemirror.net/6/docs/ref/#language.Language) with an
optional set of supporting extensions. Language packages are
encouraged to export a function that optionally takes a
configuration object and returns a `LanguageSupport` instance, as
the main way for client code to use the package.
*/
class LanguageSupport {
    /**
    Create a support object.
    */
    constructor(
    /**
    The language object.
    */
    language, 
    /**
    An optional set of supporting extensions. When nesting a
    language in another language, the outer language is encouraged
    to include the supporting extensions for its inner languages
    in its own set of support extensions.
    */
    support = []) {
        this.language = language;
        this.support = support;
        this.extension = [language, support];
    }
}
/**
Language descriptions are used to store metadata about languages
and to dynamically load them. Their main role is finding the
appropriate language for a filename or dynamically loading nested
parsers.
*/
class LanguageDescription {
    constructor(
    /**
    The name of this language.
    */
    name, 
    /**
    Alternative names for the mode (lowercased, includes `this.name`).
    */
    alias, 
    /**
    File extensions associated with this language.
    */
    extensions, 
    /**
    Optional filename pattern that should be associated with this
    language.
    */
    filename, loadFunc) {
        this.name = name;
        this.alias = alias;
        this.extensions = extensions;
        this.filename = filename;
        this.loadFunc = loadFunc;
        /**
        If the language has been loaded, this will hold its value.
        */
        this.support = undefined;
        this.loading = null;
    }
    /**
    Start loading the the language. Will return a promise that
    resolves to a [`LanguageSupport`](https://codemirror.net/6/docs/ref/#language.LanguageSupport)
    object when the language successfully loads.
    */
    load() {
        return this.loading || (this.loading = this.loadFunc().then(support => this.support = support, err => { this.loading = null; throw err; }));
    }
    /**
    Create a language description.
    */
    static of(spec) {
        return new LanguageDescription(spec.name, (spec.alias || []).concat(spec.name).map(s => s.toLowerCase()), spec.extensions || [], spec.filename, spec.load);
    }
    /**
    Look for a language in the given array of descriptions that
    matches the filename. Will first match
    [`filename`](https://codemirror.net/6/docs/ref/#language.LanguageDescription.filename) patterns,
    and then [extensions](https://codemirror.net/6/docs/ref/#language.LanguageDescription.extensions),
    and return the first language that matches.
    */
    static matchFilename(descs, filename) {
        for (let d of descs)
            if (d.filename && d.filename.test(filename))
                return d;
        let ext = /\.([^.]+)$/.exec(filename);
        if (ext)
            for (let d of descs)
                if (d.extensions.indexOf(ext[1]) > -1)
                    return d;
        return null;
    }
    /**
    Look for a language whose name or alias matches the the given
    name (case-insensitively). If `fuzzy` is true, and no direct
    matchs is found, this'll also search for a language whose name
    or alias occurs in the string (for names shorter than three
    characters, only when surrounded by non-word characters).
    */
    static matchLanguageName(descs, name, fuzzy = true) {
        name = name.toLowerCase();
        for (let d of descs)
            if (d.alias.some(a => a == name))
                return d;
        if (fuzzy)
            for (let d of descs)
                for (let a of d.alias) {
                    let found = name.indexOf(a);
                    if (found > -1 && (a.length > 2 || !/\w/.test(name[found - 1]) && !/\w/.test(name[found + a.length])))
                        return d;
                }
        return null;
    }
}

/**
Facet that defines a way to provide a function that computes the
appropriate indentation depth at the start of a given line, or
`null` to indicate no appropriate indentation could be determined.
*/
const indentService = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define();
/**
Facet for overriding the unit by which indentation happens.
Should be a string consisting either entirely of spaces or
entirely of tabs. When not set, this defaults to 2 spaces.
*/
const indentUnit = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define({
    combine: values => {
        if (!values.length)
            return "  ";
        if (!/^(?: +|\t+)$/.test(values[0]))
            throw new Error("Invalid indent unit: " + JSON.stringify(values[0]));
        return values[0];
    }
});
/**
Return the _column width_ of an indent unit in the state.
Determined by the [`indentUnit`](https://codemirror.net/6/docs/ref/#language.indentUnit)
facet, and [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) when that
contains tabs.
*/
function getIndentUnit(state) {
    let unit = state.facet(indentUnit);
    return unit.charCodeAt(0) == 9 ? state.tabSize * unit.length : unit.length;
}
/**
Create an indentation string that covers columns 0 to `cols`.
Will use tabs for as much of the columns as possible when the
[`indentUnit`](https://codemirror.net/6/docs/ref/#language.indentUnit) facet contains
tabs.
*/
function indentString(state, cols) {
    let result = "", ts = state.tabSize;
    if (state.facet(indentUnit).charCodeAt(0) == 9)
        while (cols >= ts) {
            result += "\t";
            cols -= ts;
        }
    for (let i = 0; i < cols; i++)
        result += " ";
    return result;
}
/**
Get the indentation at the given position. Will first consult any
[indent services](https://codemirror.net/6/docs/ref/#language.indentService) that are registered,
and if none of those return an indentation, this will check the
syntax tree for the [indent node prop](https://codemirror.net/6/docs/ref/#language.indentNodeProp)
and use that if found. Returns a number when an indentation could
be determined, and null otherwise.
*/
function getIndentation(context, pos) {
    if (context instanceof _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorState)
        context = new IndentContext(context);
    for (let service of context.state.facet(indentService)) {
        let result = service(context, pos);
        if (result != null)
            return result;
    }
    let tree = syntaxTree(context.state);
    return tree ? syntaxIndentation(context, tree, pos) : null;
}
/**
Indentation contexts are used when calling [indentation
services](https://codemirror.net/6/docs/ref/#language.indentService). They provide helper utilities
useful in indentation logic, and can selectively override the
indentation reported for some lines.
*/
class IndentContext {
    /**
    Create an indent context.
    */
    constructor(
    /**
    The editor state.
    */
    state, 
    /**
    @internal
    */
    options = {}) {
        this.state = state;
        this.options = options;
        this.unit = getIndentUnit(state);
    }
    /**
    Get the text directly after `pos`, either the entire line
    or the next 100 characters, whichever is shorter.
    */
    textAfterPos(pos) {
        var _a, _b;
        let sim = (_a = this.options) === null || _a === void 0 ? void 0 : _a.simulateBreak;
        if (pos == sim && ((_b = this.options) === null || _b === void 0 ? void 0 : _b.simulateDoubleBreak))
            return "";
        return this.state.sliceDoc(pos, Math.min(pos + 100, sim != null && sim > pos ? sim : 1e9, this.state.doc.lineAt(pos).to));
    }
    /**
    Find the column for the given position.
    */
    column(pos) {
        var _a;
        let line = this.state.doc.lineAt(pos), text = line.text.slice(0, pos - line.from);
        let result = this.countColumn(text, pos - line.from);
        let override = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.overrideIndentation) ? this.options.overrideIndentation(line.from) : -1;
        if (override > -1)
            result += override - this.countColumn(text, text.search(/\S/));
        return result;
    }
    /**
    find the column position (taking tabs into account) of the given
    position in the given string.
    */
    countColumn(line, pos) {
        return (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_2__.countColumn)(pos < 0 ? line : line.slice(0, pos), 0, this.state.tabSize);
    }
    /**
    Find the indentation column of the given document line.
    */
    lineIndent(line) {
        var _a;
        let override = (_a = this.options) === null || _a === void 0 ? void 0 : _a.overrideIndentation;
        if (override) {
            let overriden = override(line.from);
            if (overriden > -1)
                return overriden;
        }
        return this.countColumn(line.text, line.text.search(/\S/));
    }
}
/**
A syntax tree node prop used to associate indentation strategies
with node types. Such a strategy is a function from an indentation
context to a column number or null, where null indicates that no
definitive indentation can be determined.
*/
const indentNodeProp = /*@__PURE__*/new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp();
// Compute the indentation for a given position from the syntax tree.
function syntaxIndentation(cx, ast, pos) {
    let tree = ast.resolve(pos);
    // Enter previous nodes that end in empty error terms, which means
    // they were broken off by error recovery, so that indentation
    // works even if the constructs haven't been finished.
    for (let scan = tree, scanPos = pos;;) {
        let last = scan.childBefore(scanPos);
        if (!last)
            break;
        if (last.type.isError && last.from == last.to) {
            tree = scan;
            scanPos = last.from;
        }
        else {
            scan = last;
            scanPos = scan.to + 1;
        }
    }
    return indentFrom(tree, pos, cx);
}
function ignoreClosed(cx) {
    var _a, _b;
    return cx.pos == ((_a = cx.options) === null || _a === void 0 ? void 0 : _a.simulateBreak) && ((_b = cx.options) === null || _b === void 0 ? void 0 : _b.simulateDoubleBreak);
}
function indentStrategy(tree) {
    let strategy = tree.type.prop(indentNodeProp);
    if (strategy)
        return strategy;
    let first = tree.firstChild, close;
    if (first && (close = first.type.prop(lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp.closedBy))) {
        let last = tree.lastChild, closed = last && close.indexOf(last.name) > -1;
        return cx => delimitedStrategy(cx, true, 1, undefined, closed && !ignoreClosed(cx) ? last.from : undefined);
    }
    return tree.parent == null ? topIndent : null;
}
function indentFrom(node, pos, base) {
    for (; node; node = node.parent) {
        let strategy = indentStrategy(node);
        if (strategy)
            return strategy(new TreeIndentContext(base, pos, node));
    }
    return null;
}
function topIndent() { return 0; }
/**
Objects of this type provide context information and helper
methods to indentation functions.
*/
class TreeIndentContext extends IndentContext {
    /**
    @internal
    */
    constructor(base, 
    /**
    The position at which indentation is being computed.
    */
    pos, 
    /**
    The syntax tree node to which the indentation strategy
    applies.
    */
    node) {
        super(base.state, base.options);
        this.base = base;
        this.pos = pos;
        this.node = node;
    }
    /**
    Get the text directly after `this.pos`, either the entire line
    or the next 100 characters, whichever is shorter.
    */
    get textAfter() {
        return this.textAfterPos(this.pos);
    }
    /**
    Get the indentation at the reference line for `this.node`, which
    is the line on which it starts, unless there is a node that is
    _not_ a parent of this node covering the start of that line. If
    so, the line at the start of that node is tried, again skipping
    on if it is covered by another such node.
    */
    get baseIndent() {
        let line = this.state.doc.lineAt(this.node.from);
        // Skip line starts that are covered by a sibling (or cousin, etc)
        for (;;) {
            let atBreak = this.node.resolve(line.from);
            while (atBreak.parent && atBreak.parent.from == atBreak.from)
                atBreak = atBreak.parent;
            if (isParent(atBreak, this.node))
                break;
            line = this.state.doc.lineAt(atBreak.from);
        }
        return this.lineIndent(line);
    }
    /**
    Continue looking for indentations in the node's parent nodes,
    and return the result of that.
    */
    continue() {
        let parent = this.node.parent;
        return parent ? indentFrom(parent, this.pos, this.base) : 0;
    }
}
function isParent(parent, of) {
    for (let cur = of; cur; cur = cur.parent)
        if (parent == cur)
            return true;
    return false;
}
// Check whether a delimited node is aligned (meaning there are
// non-skipped nodes on the same line as the opening delimiter). And
// if so, return the opening token.
function bracketedAligned(context) {
    var _a;
    let tree = context.node;
    let openToken = tree.childAfter(tree.from), last = tree.lastChild;
    if (!openToken)
        return null;
    let sim = (_a = context.options) === null || _a === void 0 ? void 0 : _a.simulateBreak;
    let openLine = context.state.doc.lineAt(openToken.from);
    let lineEnd = sim == null || sim <= openLine.from ? openLine.to : Math.min(openLine.to, sim);
    for (let pos = openToken.to;;) {
        let next = tree.childAfter(pos);
        if (!next || next == last)
            return null;
        if (!next.type.isSkipped)
            return next.from < lineEnd ? openToken : null;
        pos = next.to;
    }
}
/**
An indentation strategy for delimited (usually bracketed) nodes.
Will, by default, indent one unit more than the parent's base
indent unless the line starts with a closing token. When `align`
is true and there are non-skipped nodes on the node's opening
line, the content of the node will be aligned with the end of the
opening node, like this:

    foo(bar,
        baz)
*/
function delimitedIndent({ closing, align = true, units = 1 }) {
    return (context) => delimitedStrategy(context, align, units, closing);
}
function delimitedStrategy(context, align, units, closing, closedAt) {
    let after = context.textAfter, space = after.match(/^\s*/)[0].length;
    let closed = closing && after.slice(space, space + closing.length) == closing || closedAt == context.pos + space;
    let aligned = align ? bracketedAligned(context) : null;
    if (aligned)
        return closed ? context.column(aligned.from) : context.column(aligned.to);
    return context.baseIndent + (closed ? 0 : context.unit * units);
}
/**
An indentation strategy that aligns a node's content to its base
indentation.
*/
const flatIndent = (context) => context.baseIndent;
/**
Creates an indentation strategy that, by default, indents
continued lines one unit more than the node's base indentation.
You can provide `except` to prevent indentation of lines that
match a pattern (for example `/^else\b/` in `if`/`else`
constructs), and you can change the amount of units used with the
`units` option.
*/
function continuedIndent({ except, units = 1 } = {}) {
    return (context) => {
        let matchExcept = except && except.test(context.textAfter);
        return context.baseIndent + (matchExcept ? 0 : units * context.unit);
    };
}
const DontIndentBeyond = 200;
/**
Enables reindentation on input. When a language defines an
`indentOnInput` field in its [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt), which must hold a regular
expression, the line at the cursor will be reindented whenever new
text is typed and the input from the start of the line up to the
cursor matches that regexp.

To avoid unneccesary reindents, it is recommended to start the
regexp with `^` (usually followed by `\s*`), and end it with `$`.
For example, `/^\s*\}$/` will reindent when a closing brace is
added at the start of a line.
*/
function indentOnInput() {
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorState.transactionFilter.of(tr => {
        if (!tr.docChanged || tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent) != "input")
            return tr;
        let rules = tr.startState.languageDataAt("indentOnInput", tr.startState.selection.main.head);
        if (!rules.length)
            return tr;
        let doc = tr.newDoc, { head } = tr.newSelection.main, line = doc.lineAt(head);
        if (head > line.from + DontIndentBeyond)
            return tr;
        let lineStart = doc.sliceString(line.from, head);
        if (!rules.some(r => r.test(lineStart)))
            return tr;
        let { state } = tr, last = -1, changes = [];
        for (let { head } of state.selection.ranges) {
            let line = state.doc.lineAt(head);
            if (line.from == last)
                continue;
            last = line.from;
            let indent = getIndentation(state, line.from);
            if (indent == null)
                continue;
            let cur = /^\s*/.exec(line.text)[0];
            let norm = indentString(state, indent);
            if (cur != norm)
                changes.push({ from: line.from, to: line.from + cur.length, insert: norm });
        }
        return changes.length ? [tr, { changes }] : tr;
    });
}

/**
A facet that registers a code folding service. When called with
the extent of a line, such a function should return a foldable
range that starts on that line (but continues beyond it), if one
can be found.
*/
const foldService = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define();
/**
This node prop is used to associate folding information with
syntax node types. Given a syntax node, it should check whether
that tree is foldable and return the range that can be collapsed
when it is.
*/
const foldNodeProp = /*@__PURE__*/new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp();
/**
[Fold](https://codemirror.net/6/docs/ref/#language.foldNodeProp) function that folds everything but
the first and the last child of a syntax node. Useful for nodes
that start and end with delimiters.
*/
function foldInside(node) {
    let first = node.firstChild, last = node.lastChild;
    return first && first.to < last.from ? { from: first.to, to: last.type.isError ? node.to : last.from } : null;
}
function syntaxFolding(state, start, end) {
    let tree = syntaxTree(state);
    if (tree.length == 0)
        return null;
    let inner = tree.resolve(end);
    let found = null;
    for (let cur = inner; cur; cur = cur.parent) {
        if (cur.to <= end || cur.from > end)
            continue;
        if (found && cur.from < start)
            break;
        let prop = cur.type.prop(foldNodeProp);
        if (prop) {
            let value = prop(cur, state);
            if (value && value.from <= end && value.from >= start && value.to > end)
                found = value;
        }
    }
    return found;
}
/**
Check whether the given line is foldable. First asks any fold
services registered through
[`foldService`](https://codemirror.net/6/docs/ref/#language.foldService), and if none of them return
a result, tries to query the [fold node
prop](https://codemirror.net/6/docs/ref/#language.foldNodeProp) of syntax nodes that cover the end
of the line.
*/
function foldable(state, lineStart, lineEnd) {
    for (let service of state.facet(foldService)) {
        let result = service(state, lineStart, lineEnd);
        if (result)
            return result;
    }
    return syntaxFolding(state, lineStart, lineEnd);
}




/***/ }),
/* 36 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyLineDown": () => (/* binding */ copyLineDown),
/* harmony export */   "copyLineUp": () => (/* binding */ copyLineUp),
/* harmony export */   "cursorCharBackward": () => (/* binding */ cursorCharBackward),
/* harmony export */   "cursorCharForward": () => (/* binding */ cursorCharForward),
/* harmony export */   "cursorCharLeft": () => (/* binding */ cursorCharLeft),
/* harmony export */   "cursorCharRight": () => (/* binding */ cursorCharRight),
/* harmony export */   "cursorDocEnd": () => (/* binding */ cursorDocEnd),
/* harmony export */   "cursorDocStart": () => (/* binding */ cursorDocStart),
/* harmony export */   "cursorGroupBackward": () => (/* binding */ cursorGroupBackward),
/* harmony export */   "cursorGroupForward": () => (/* binding */ cursorGroupForward),
/* harmony export */   "cursorGroupLeft": () => (/* binding */ cursorGroupLeft),
/* harmony export */   "cursorGroupRight": () => (/* binding */ cursorGroupRight),
/* harmony export */   "cursorLineBoundaryBackward": () => (/* binding */ cursorLineBoundaryBackward),
/* harmony export */   "cursorLineBoundaryForward": () => (/* binding */ cursorLineBoundaryForward),
/* harmony export */   "cursorLineDown": () => (/* binding */ cursorLineDown),
/* harmony export */   "cursorLineEnd": () => (/* binding */ cursorLineEnd),
/* harmony export */   "cursorLineStart": () => (/* binding */ cursorLineStart),
/* harmony export */   "cursorLineUp": () => (/* binding */ cursorLineUp),
/* harmony export */   "cursorMatchingBracket": () => (/* binding */ cursorMatchingBracket),
/* harmony export */   "cursorPageDown": () => (/* binding */ cursorPageDown),
/* harmony export */   "cursorPageUp": () => (/* binding */ cursorPageUp),
/* harmony export */   "cursorSyntaxLeft": () => (/* binding */ cursorSyntaxLeft),
/* harmony export */   "cursorSyntaxRight": () => (/* binding */ cursorSyntaxRight),
/* harmony export */   "defaultKeymap": () => (/* binding */ defaultKeymap),
/* harmony export */   "defaultTabBinding": () => (/* binding */ defaultTabBinding),
/* harmony export */   "deleteCharBackward": () => (/* binding */ deleteCharBackward),
/* harmony export */   "deleteCharForward": () => (/* binding */ deleteCharForward),
/* harmony export */   "deleteCodePointBackward": () => (/* binding */ deleteCodePointBackward),
/* harmony export */   "deleteCodePointForward": () => (/* binding */ deleteCodePointForward),
/* harmony export */   "deleteGroupBackward": () => (/* binding */ deleteGroupBackward),
/* harmony export */   "deleteGroupForward": () => (/* binding */ deleteGroupForward),
/* harmony export */   "deleteLine": () => (/* binding */ deleteLine),
/* harmony export */   "deleteToLineEnd": () => (/* binding */ deleteToLineEnd),
/* harmony export */   "deleteToLineStart": () => (/* binding */ deleteToLineStart),
/* harmony export */   "deleteTrailingWhitespace": () => (/* binding */ deleteTrailingWhitespace),
/* harmony export */   "emacsStyleKeymap": () => (/* binding */ emacsStyleKeymap),
/* harmony export */   "indentLess": () => (/* binding */ indentLess),
/* harmony export */   "indentMore": () => (/* binding */ indentMore),
/* harmony export */   "indentSelection": () => (/* binding */ indentSelection),
/* harmony export */   "insertNewline": () => (/* binding */ insertNewline),
/* harmony export */   "insertNewlineAndIndent": () => (/* binding */ insertNewlineAndIndent),
/* harmony export */   "insertTab": () => (/* binding */ insertTab),
/* harmony export */   "moveLineDown": () => (/* binding */ moveLineDown),
/* harmony export */   "moveLineUp": () => (/* binding */ moveLineUp),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectCharBackward": () => (/* binding */ selectCharBackward),
/* harmony export */   "selectCharForward": () => (/* binding */ selectCharForward),
/* harmony export */   "selectCharLeft": () => (/* binding */ selectCharLeft),
/* harmony export */   "selectCharRight": () => (/* binding */ selectCharRight),
/* harmony export */   "selectDocEnd": () => (/* binding */ selectDocEnd),
/* harmony export */   "selectDocStart": () => (/* binding */ selectDocStart),
/* harmony export */   "selectGroupBackward": () => (/* binding */ selectGroupBackward),
/* harmony export */   "selectGroupForward": () => (/* binding */ selectGroupForward),
/* harmony export */   "selectGroupLeft": () => (/* binding */ selectGroupLeft),
/* harmony export */   "selectGroupRight": () => (/* binding */ selectGroupRight),
/* harmony export */   "selectLine": () => (/* binding */ selectLine),
/* harmony export */   "selectLineBoundaryBackward": () => (/* binding */ selectLineBoundaryBackward),
/* harmony export */   "selectLineBoundaryForward": () => (/* binding */ selectLineBoundaryForward),
/* harmony export */   "selectLineDown": () => (/* binding */ selectLineDown),
/* harmony export */   "selectLineEnd": () => (/* binding */ selectLineEnd),
/* harmony export */   "selectLineStart": () => (/* binding */ selectLineStart),
/* harmony export */   "selectLineUp": () => (/* binding */ selectLineUp),
/* harmony export */   "selectMatchingBracket": () => (/* binding */ selectMatchingBracket),
/* harmony export */   "selectPageDown": () => (/* binding */ selectPageDown),
/* harmony export */   "selectPageUp": () => (/* binding */ selectPageUp),
/* harmony export */   "selectParentSyntax": () => (/* binding */ selectParentSyntax),
/* harmony export */   "selectSyntaxLeft": () => (/* binding */ selectSyntaxLeft),
/* harmony export */   "selectSyntaxRight": () => (/* binding */ selectSyntaxRight),
/* harmony export */   "simplifySelection": () => (/* binding */ simplifySelection),
/* harmony export */   "splitLine": () => (/* binding */ splitLine),
/* harmony export */   "standardKeymap": () => (/* binding */ standardKeymap),
/* harmony export */   "transposeChars": () => (/* binding */ transposeChars)
/* harmony export */ });
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _codemirror_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);







function updateSel(sel, by) {
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.create(sel.ranges.map(by), sel.mainIndex);
}
function setSel(state, selection) {
    return state.update({ selection, scrollIntoView: true, annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent.of("keyboardselection") });
}
function moveSel({ state, dispatch }, how) {
    let selection = updateSel(state.selection, how);
    if (selection.eq(state.selection))
        return false;
    dispatch(setSel(state, selection));
    return true;
}
function rangeEnd(range, forward) {
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(forward ? range.to : range.from);
}
function cursorByChar(view, forward) {
    return moveSel(view, range => range.empty ? view.moveByChar(range, forward) : rangeEnd(range, forward));
}
/**
Move the selection one character to the left (which is backward in
left-to-right text, forward in right-to-left text).
*/
const cursorCharLeft = view => cursorByChar(view, view.textDirection != _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection one character to the right.
*/
const cursorCharRight = view => cursorByChar(view, view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection one character forward.
*/
const cursorCharForward = view => cursorByChar(view, true);
/**
Move the selection one character backward.
*/
const cursorCharBackward = view => cursorByChar(view, false);
function cursorByGroup(view, forward) {
    return moveSel(view, range => range.empty ? view.moveByGroup(range, forward) : rangeEnd(range, forward));
}
/**
Move the selection across one group of word or non-word (but also
non-space) characters.
*/
const cursorGroupLeft = view => cursorByGroup(view, view.textDirection != _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection one group to the right.
*/
const cursorGroupRight = view => cursorByGroup(view, view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection one group forward.
*/
const cursorGroupForward = view => cursorByGroup(view, true);
/**
Move the selection one group backward.
*/
const cursorGroupBackward = view => cursorByGroup(view, false);
function interestingNode(state, node, bracketProp) {
    if (node.type.prop(bracketProp))
        return true;
    let len = node.to - node.from;
    return len && (len > 2 || /[^\s,.;:]/.test(state.sliceDoc(node.from, node.to))) || node.firstChild;
}
function moveBySyntax(state, start, forward) {
    let pos = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.syntaxTree)(state).resolve(start.head);
    let bracketProp = forward ? lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp.closedBy : lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp.openedBy;
    // Scan forward through child nodes to see if there's an interesting
    // node ahead.
    for (let at = start.head;;) {
        let next = forward ? pos.childAfter(at) : pos.childBefore(at);
        if (!next)
            break;
        if (interestingNode(state, next, bracketProp))
            pos = next;
        else
            at = forward ? next.to : next.from;
    }
    let bracket = pos.type.prop(bracketProp), match, newPos;
    if (bracket && (match = forward ? (0,_codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__.matchBrackets)(state, pos.from, 1) : (0,_codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__.matchBrackets)(state, pos.to, -1)) && match.matched)
        newPos = forward ? match.end.to : match.end.from;
    else
        newPos = forward ? pos.to : pos.from;
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(newPos, forward ? -1 : 1);
}
/**
Move the cursor over the next syntactic element to the left.
*/
const cursorSyntaxLeft = view => moveSel(view, range => moveBySyntax(view.state, range, view.textDirection != _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR));
/**
Move the cursor over the next syntactic element to the right.
*/
const cursorSyntaxRight = view => moveSel(view, range => moveBySyntax(view.state, range, view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR));
function cursorByLine(view, forward) {
    return moveSel(view, range => range.empty ? view.moveVertically(range, forward) : rangeEnd(range, forward));
}
/**
Move the selection one line up.
*/
const cursorLineUp = view => cursorByLine(view, false);
/**
Move the selection one line down.
*/
const cursorLineDown = view => cursorByLine(view, true);
function cursorByPage(view, forward) {
    return moveSel(view, range => range.empty ? view.moveVertically(range, forward, view.dom.clientHeight) : rangeEnd(range, forward));
}
/**
Move the selection one page up.
*/
const cursorPageUp = view => cursorByPage(view, false);
/**
Move the selection one page down.
*/
const cursorPageDown = view => cursorByPage(view, true);
function moveByLineBoundary(view, start, forward) {
    let line = view.visualLineAt(start.head), moved = view.moveToLineBoundary(start, forward);
    if (moved.head == start.head && moved.head != (forward ? line.to : line.from))
        moved = view.moveToLineBoundary(start, forward, false);
    if (!forward && moved.head == line.from && line.length) {
        let space = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
        if (space && start.head != line.from + space)
            moved = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(line.from + space);
    }
    return moved;
}
/**
Move the selection to the next line wrap point, or to the end of
the line if there isn't one left on this line.
*/
const cursorLineBoundaryForward = view => moveSel(view, range => moveByLineBoundary(view, range, true));
/**
Move the selection to previous line wrap point, or failing that to
the start of the line. If the line is indented, and the cursor
isn't already at the end of the indentation, this will move to the
end of the indentation instead of the start of the line.
*/
const cursorLineBoundaryBackward = view => moveSel(view, range => moveByLineBoundary(view, range, false));
/**
Move the selection to the start of the line.
*/
const cursorLineStart = view => moveSel(view, range => _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(view.visualLineAt(range.head).from, 1));
/**
Move the selection to the end of the line.
*/
const cursorLineEnd = view => moveSel(view, range => _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(view.visualLineAt(range.head).to, -1));
function toMatchingBracket(state, dispatch, extend) {
    let found = false, selection = updateSel(state.selection, range => {
        let matching = (0,_codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__.matchBrackets)(state, range.head, -1)
            || (0,_codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__.matchBrackets)(state, range.head, 1)
            || (range.head > 0 && (0,_codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__.matchBrackets)(state, range.head - 1, 1))
            || (range.head < state.doc.length && (0,_codemirror_matchbrackets__WEBPACK_IMPORTED_MODULE_4__.matchBrackets)(state, range.head + 1, -1));
        if (!matching || !matching.end)
            return range;
        found = true;
        let head = matching.start.from == range.head ? matching.end.to : matching.end.from;
        return extend ? _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(range.anchor, head) : _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(head);
    });
    if (!found)
        return false;
    dispatch(setSel(state, selection));
    return true;
}
/**
Move the selection to the bracket matching the one it is currently
on, if any.
*/
const cursorMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, false);
/**
Extend the selection to the bracket matching the one the selection
head is currently on, if any.
*/
const selectMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, true);
function extendSel(view, how) {
    let selection = updateSel(view.state.selection, range => {
        let head = how(range);
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(range.anchor, head.head, head.goalColumn);
    });
    if (selection.eq(view.state.selection))
        return false;
    view.dispatch(setSel(view.state, selection));
    return true;
}
function selectByChar(view, forward) {
    return extendSel(view, range => view.moveByChar(range, forward));
}
/**
Move the selection head one character to the left, while leaving
the anchor in place.
*/
const selectCharLeft = view => selectByChar(view, view.textDirection != _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection head one character to the right.
*/
const selectCharRight = view => selectByChar(view, view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection head one character forward.
*/
const selectCharForward = view => selectByChar(view, true);
/**
Move the selection head one character backward.
*/
const selectCharBackward = view => selectByChar(view, false);
function selectByGroup(view, forward) {
    return extendSel(view, range => view.moveByGroup(range, forward));
}
/**
Move the selection head one [group](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) to
the left.
*/
const selectGroupLeft = view => selectByGroup(view, view.textDirection != _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection head one group to the right.
*/
const selectGroupRight = view => selectByGroup(view, view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR);
/**
Move the selection head one group forward.
*/
const selectGroupForward = view => selectByGroup(view, true);
/**
Move the selection head one group backward.
*/
const selectGroupBackward = view => selectByGroup(view, false);
/**
Move the selection head over the next syntactic element to the left.
*/
const selectSyntaxLeft = view => extendSel(view, range => moveBySyntax(view.state, range, view.textDirection != _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR));
/**
Move the selection head over the next syntactic element to the right.
*/
const selectSyntaxRight = view => extendSel(view, range => moveBySyntax(view.state, range, view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_2__.Direction.LTR));
function selectByLine(view, forward) {
    return extendSel(view, range => view.moveVertically(range, forward));
}
/**
Move the selection head one line up.
*/
const selectLineUp = view => selectByLine(view, false);
/**
Move the selection head one line down.
*/
const selectLineDown = view => selectByLine(view, true);
function selectByPage(view, forward) {
    return extendSel(view, range => view.moveVertically(range, forward, view.dom.clientHeight));
}
/**
Move the selection head one page up.
*/
const selectPageUp = view => selectByPage(view, false);
/**
Move the selection head one page down.
*/
const selectPageDown = view => selectByPage(view, true);
/**
Move the selection head to the next line boundary.
*/
const selectLineBoundaryForward = view => extendSel(view, range => moveByLineBoundary(view, range, true));
/**
Move the selection head to the previous line boundary.
*/
const selectLineBoundaryBackward = view => extendSel(view, range => moveByLineBoundary(view, range, false));
/**
Move the selection head to the start of the line.
*/
const selectLineStart = view => extendSel(view, range => _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(view.visualLineAt(range.head).from));
/**
Move the selection head to the end of the line.
*/
const selectLineEnd = view => extendSel(view, range => _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(view.visualLineAt(range.head).to));
/**
Move the selection to the start of the document.
*/
const cursorDocStart = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: 0 }));
    return true;
};
/**
Move the selection to the end of the document.
*/
const cursorDocEnd = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.doc.length }));
    return true;
};
/**
Move the selection head to the start of the document.
*/
const selectDocStart = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.selection.main.anchor, head: 0 }));
    return true;
};
/**
Move the selection head to the end of the document.
*/
const selectDocEnd = ({ state, dispatch }) => {
    dispatch(setSel(state, { anchor: state.selection.main.anchor, head: state.doc.length }));
    return true;
};
/**
Select the entire document.
*/
const selectAll = ({ state, dispatch }) => {
    dispatch(state.update({ selection: { anchor: 0, head: state.doc.length }, annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent.of("keyboardselection") }));
    return true;
};
/**
Expand the selection to cover entire lines.
*/
const selectLine = ({ state, dispatch }) => {
    let ranges = selectedLineBlocks(state).map(({ from, to }) => _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(from, Math.min(to + 1, state.doc.length)));
    dispatch(state.update({ selection: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.create(ranges), annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent.of("keyboardselection") }));
    return true;
};
/**
Select the next syntactic construct that is larger than the
selection. Note that this will only work insofar as the language
[provider](https://codemirror.net/6/docs/ref/#language.language) you use builds up a full
syntax tree.
*/
const selectParentSyntax = ({ state, dispatch }) => {
    let selection = updateSel(state.selection, range => {
        var _a;
        let context = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.syntaxTree)(state).resolve(range.head, 1);
        while (!((context.from < range.from && context.to >= range.to) ||
            (context.to > range.to && context.from <= range.from) ||
            !((_a = context.parent) === null || _a === void 0 ? void 0 : _a.parent)))
            context = context.parent;
        return _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(context.to, context.from);
    });
    dispatch(setSel(state, selection));
    return true;
};
/**
Simplify the current selection. When multiple ranges are selected,
reduce it to its main range. Otherwise, if the selection is
non-empty, convert it to a cursor selection.
*/
const simplifySelection = ({ state, dispatch }) => {
    let cur = state.selection, selection = null;
    if (cur.ranges.length > 1)
        selection = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.create([cur.main]);
    else if (!cur.main.empty)
        selection = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.create([_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(cur.main.head)]);
    if (!selection)
        return false;
    dispatch(setSel(state, selection));
    return true;
};
function deleteBy({ state, dispatch }, by) {
    let changes = state.changeByRange(range => {
        let { from, to } = range;
        if (from == to) {
            let towards = by(from);
            from = Math.min(from, towards);
            to = Math.max(to, towards);
        }
        return from == to ? { range } : { changes: { from, to }, range: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(from) };
    });
    if (changes.changes.empty)
        return false;
    dispatch(state.update(changes, { scrollIntoView: true, annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent.of("delete") }));
    return true;
}
const deleteByChar = (target, forward, codePoint) => deleteBy(target, pos => {
    let { state } = target, line = state.doc.lineAt(pos), before;
    if (!forward && pos > line.from && pos < line.from + 200 &&
        !/[^ \t]/.test(before = line.text.slice(0, pos - line.from))) {
        if (before[before.length - 1] == "\t")
            return pos - 1;
        let col = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.countColumn)(before, 0, state.tabSize), drop = col % (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.getIndentUnit)(state) || (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.getIndentUnit)(state);
        for (let i = 0; i < drop && before[before.length - 1 - i] == " "; i++)
            pos--;
        return pos;
    }
    let targetPos;
    if (codePoint) {
        let next = line.text.slice(pos - line.from + (forward ? 0 : -2), pos - line.from + (forward ? 2 : 0));
        let size = next ? (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.codePointSize)((0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.codePointAt)(next, 0)) : 1;
        targetPos = forward ? Math.min(state.doc.length, pos + size) : Math.max(0, pos - size);
    }
    else {
        targetPos = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.findClusterBreak)(line.text, pos - line.from, forward) + line.from;
    }
    if (targetPos == pos && line.number != (forward ? state.doc.lines : 1))
        targetPos += forward ? 1 : -1;
    return targetPos;
});
/**
Delete the selection, or, for cursor selections, the code point
before the cursor.
*/
const deleteCodePointBackward = view => deleteByChar(view, false, true);
/**
Delete the selection, or, for cursor selections, the code point
after the cursor.
*/
const deleteCodePointForward = view => deleteByChar(view, true, true);
/**
Delete the selection, or, for cursor selections, the character
before the cursor.
*/
const deleteCharBackward = view => deleteByChar(view, false, false);
/**
Delete the selection or the character after the cursor.
*/
const deleteCharForward = view => deleteByChar(view, true, false);
const deleteByGroup = (target, forward) => deleteBy(target, start => {
    let pos = start, { state } = target, line = state.doc.lineAt(pos);
    let categorize = state.charCategorizer(pos);
    for (let cat = null;;) {
        if (pos == (forward ? line.to : line.from)) {
            if (pos == start && line.number != (forward ? state.doc.lines : 1))
                pos += forward ? 1 : -1;
            break;
        }
        let next = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.findClusterBreak)(line.text, pos - line.from, forward) + line.from;
        let nextChar = line.text.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
        let nextCat = categorize(nextChar);
        if (cat != null && nextCat != cat)
            break;
        if (nextChar != " " || pos != start)
            cat = nextCat;
        pos = next;
    }
    return pos;
});
/**
Delete the selection or backward until the end of the next
[group](https://codemirror.net/6/docs/ref/#view.EditorView.moveByGroup), only skipping groups of
whitespace when they consist of a single space.
*/
const deleteGroupBackward = target => deleteByGroup(target, false);
/**
Delete the selection or forward until the end of the next group.
*/
const deleteGroupForward = target => deleteByGroup(target, true);
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line. If the cursor is directly at the end of the
line, delete the line break after it.
*/
const deleteToLineEnd = view => deleteBy(view, pos => {
    let lineEnd = view.visualLineAt(pos).to;
    if (pos < lineEnd)
        return lineEnd;
    return Math.min(view.state.doc.length, pos + 1);
});
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line. If the cursor is directly at the start of the
line, delete the line break before it.
*/
const deleteToLineStart = view => deleteBy(view, pos => {
    let lineStart = view.visualLineAt(pos).from;
    if (pos > lineStart)
        return lineStart;
    return Math.max(0, pos - 1);
});
/**
Delete all whitespace directly before a line end from the
document.
*/
const deleteTrailingWhitespace = ({ state, dispatch }) => {
    let changes = [];
    for (let pos = 0, prev = "", iter = state.doc.iter();;) {
        iter.next();
        if (iter.lineBreak || iter.done) {
            let trailing = prev.search(/\s+$/);
            if (trailing > -1)
                changes.push({ from: pos - (prev.length - trailing), to: pos });
            if (iter.done)
                break;
            prev = "";
        }
        else {
            prev = iter.value;
        }
        pos += iter.value.length;
    }
    if (!changes.length)
        return false;
    dispatch(state.update({ changes }));
    return true;
};
/**
Replace each selection range with a line break, leaving the cursor
on the line before the break.
*/
const splitLine = ({ state, dispatch }) => {
    let changes = state.changeByRange(range => {
        return { changes: { from: range.from, to: range.to, insert: _codemirror_text__WEBPACK_IMPORTED_MODULE_5__.Text.of(["", ""]) },
            range: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(range.from) };
    });
    dispatch(state.update(changes, { scrollIntoView: true, annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent.of("input") }));
    return true;
};
/**
Flip the characters before and after the cursor(s).
*/
const transposeChars = ({ state, dispatch }) => {
    let changes = state.changeByRange(range => {
        if (!range.empty || range.from == 0 || range.from == state.doc.length)
            return { range };
        let pos = range.from, line = state.doc.lineAt(pos);
        let from = pos == line.from ? pos - 1 : (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.findClusterBreak)(line.text, pos - line.from, false) + line.from;
        let to = pos == line.to ? pos + 1 : (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.findClusterBreak)(line.text, pos - line.from, true) + line.from;
        return { changes: { from, to, insert: state.doc.slice(pos, to).append(state.doc.slice(from, pos)) },
            range: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(to) };
    });
    if (changes.changes.empty)
        return false;
    dispatch(state.update(changes, { scrollIntoView: true }));
    return true;
};
function selectedLineBlocks(state) {
    let blocks = [], upto = -1;
    for (let range of state.selection.ranges) {
        let startLine = state.doc.lineAt(range.from), endLine = state.doc.lineAt(range.to);
        if (!range.empty && range.to == endLine.from)
            endLine = state.doc.lineAt(range.to - 1);
        if (upto >= startLine.number) {
            let prev = blocks[blocks.length - 1];
            prev.to = endLine.to;
            prev.ranges.push(range);
        }
        else {
            blocks.push({ from: startLine.from, to: endLine.to, ranges: [range] });
        }
        upto = endLine.number + 1;
    }
    return blocks;
}
function moveLine(state, dispatch, forward) {
    let changes = [], ranges = [];
    for (let block of selectedLineBlocks(state)) {
        if (forward ? block.to == state.doc.length : block.from == 0)
            continue;
        let nextLine = state.doc.lineAt(forward ? block.to + 1 : block.from - 1);
        let size = nextLine.length + 1;
        if (forward) {
            changes.push({ from: block.to, to: nextLine.to }, { from: block.from, insert: nextLine.text + state.lineBreak });
            for (let r of block.ranges)
                ranges.push(_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(Math.min(state.doc.length, r.anchor + size), Math.min(state.doc.length, r.head + size)));
        }
        else {
            changes.push({ from: nextLine.from, to: block.from }, { from: block.to, insert: state.lineBreak + nextLine.text });
            for (let r of block.ranges)
                ranges.push(_codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(r.anchor - size, r.head - size));
        }
    }
    if (!changes.length)
        return false;
    dispatch(state.update({
        changes,
        scrollIntoView: true,
        selection: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.create(ranges, state.selection.mainIndex)
    }));
    return true;
}
/**
Move the selected lines up one line.
*/
const moveLineUp = ({ state, dispatch }) => moveLine(state, dispatch, false);
/**
Move the selected lines down one line.
*/
const moveLineDown = ({ state, dispatch }) => moveLine(state, dispatch, true);
function copyLine(state, dispatch, forward) {
    let changes = [];
    for (let block of selectedLineBlocks(state)) {
        if (forward)
            changes.push({ from: block.from, insert: state.doc.slice(block.from, block.to) + state.lineBreak });
        else
            changes.push({ from: block.to, insert: state.lineBreak + state.doc.slice(block.from, block.to) });
    }
    dispatch(state.update({ changes, scrollIntoView: true }));
    return true;
}
/**
Create a copy of the selected lines. Keep the selection in the top copy.
*/
const copyLineUp = ({ state, dispatch }) => copyLine(state, dispatch, false);
/**
Create a copy of the selected lines. Keep the selection in the bottom copy.
*/
const copyLineDown = ({ state, dispatch }) => copyLine(state, dispatch, true);
/**
Delete selected lines.
*/
const deleteLine = view => {
    let { state } = view, changes = state.changes(selectedLineBlocks(state).map(({ from, to }) => {
        if (from > 0)
            from--;
        else if (to < state.doc.length)
            to++;
        return { from, to };
    }));
    let selection = updateSel(state.selection, range => view.moveVertically(range, true)).map(changes);
    view.dispatch({ changes, selection, scrollIntoView: true });
    return true;
};
/**
Replace the selection with a newline.
*/
const insertNewline = ({ state, dispatch }) => {
    dispatch(state.update(state.replaceSelection(state.lineBreak), { scrollIntoView: true }));
    return true;
};
function isBetweenBrackets(state, pos) {
    if (/\(\)|\[\]|\{\}/.test(state.sliceDoc(pos - 1, pos + 1)))
        return { from: pos, to: pos };
    let context = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.syntaxTree)(state).resolve(pos);
    let before = context.childBefore(pos), after = context.childAfter(pos), closedBy;
    if (before && after && before.to <= pos && after.from >= pos &&
        (closedBy = before.type.prop(lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp.closedBy)) && closedBy.indexOf(after.name) > -1 &&
        state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from)
        return { from: before.to, to: after.from };
    return null;
}
/**
Replace the selection with a newline and indent the newly created
line(s). If the current line consists only of whitespace, this
will also delete that whitespace. When the cursor is between
matching brackets, an additional newline will be inserted after
the cursor.
*/
const insertNewlineAndIndent = ({ state, dispatch }) => {
    let changes = state.changeByRange(({ from, to }) => {
        let explode = from == to && isBetweenBrackets(state, from);
        let cx = new _codemirror_language__WEBPACK_IMPORTED_MODULE_3__.IndentContext(state, { simulateBreak: from, simulateDoubleBreak: !!explode });
        let indent = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.getIndentation)(cx, from);
        if (indent == null)
            indent = /^\s*/.exec(state.doc.lineAt(from).text)[0].length;
        let line = state.doc.lineAt(from);
        while (to < line.to && /\s/.test(line.text.slice(to - line.from, to + 1 - line.from)))
            to++;
        if (explode)
            ({ from, to } = explode);
        else if (from > line.from && from < line.from + 100 && !/\S/.test(line.text.slice(0, from)))
            from = line.from;
        let insert = ["", (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.indentString)(state, indent)];
        if (explode)
            insert.push((0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.indentString)(state, cx.lineIndent(line)));
        return { changes: { from, to, insert: _codemirror_text__WEBPACK_IMPORTED_MODULE_5__.Text.of(insert) },
            range: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.cursor(from + 1 + insert[1].length) };
    });
    dispatch(state.update(changes, { scrollIntoView: true }));
    return true;
};
function changeBySelectedLine(state, f) {
    let atLine = -1;
    return state.changeByRange(range => {
        let changes = [];
        for (let pos = range.from; pos <= range.to;) {
            let line = state.doc.lineAt(pos);
            if (line.number > atLine && (range.empty || range.to > line.from)) {
                f(line, changes, range);
                atLine = line.number;
            }
            pos = line.to + 1;
        }
        let changeSet = state.changes(changes);
        return { changes,
            range: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.EditorSelection.range(changeSet.mapPos(range.anchor, 1), changeSet.mapPos(range.head, 1)) };
    });
}
/**
Auto-indent the selected lines. This uses the [indentation service
facet](https://codemirror.net/6/docs/ref/#language.indentService) as source for auto-indent
information.
*/
const indentSelection = ({ state, dispatch }) => {
    let updated = Object.create(null);
    let context = new _codemirror_language__WEBPACK_IMPORTED_MODULE_3__.IndentContext(state, { overrideIndentation: start => {
            let found = updated[start];
            return found == null ? -1 : found;
        } });
    let changes = changeBySelectedLine(state, (line, changes, range) => {
        let indent = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.getIndentation)(context, line.from);
        if (indent == null)
            return;
        let cur = /^\s*/.exec(line.text)[0];
        let norm = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.indentString)(state, indent);
        if (cur != norm || range.from < line.from + cur.length) {
            updated[line.from] = indent;
            changes.push({ from: line.from, to: line.from + cur.length, insert: norm });
        }
    });
    if (!changes.changes.empty)
        dispatch(state.update(changes));
    return true;
};
/**
Add a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation to all selected
lines.
*/
const indentMore = ({ state, dispatch }) => {
    dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
        changes.push({ from: line.from, insert: state.facet(_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.indentUnit) });
    })));
    return true;
};
/**
Remove a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation from all
selected lines.
*/
const indentLess = ({ state, dispatch }) => {
    dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
        let space = /^\s*/.exec(line.text)[0];
        if (!space)
            return;
        let col = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_5__.countColumn)(space, 0, state.tabSize), keep = 0;
        let insert = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.indentString)(state, Math.max(0, col - (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.getIndentUnit)(state)));
        while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep))
            keep++;
        changes.push({ from: line.from + keep, to: line.from + space.length, insert: insert.slice(keep) });
    })));
    return true;
};
/**
Insert a tab character at the cursor or, if something is selected,
use [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore) to indent the entire
selection.
*/
const insertTab = ({ state, dispatch }) => {
    if (state.selection.ranges.some(r => !r.empty))
        return indentMore({ state, dispatch });
    dispatch(state.update(state.replaceSelection("\t"), { scrollIntoView: true, annotations: _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Transaction.userEvent.of("input") }));
    return true;
};
/**
Array of key bindings containing the Emacs-style bindings that are
available on macOS by default.

 - Ctrl-b: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
 - Ctrl-f: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
 - Ctrl-p: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
 - Ctrl-n: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
 - Ctrl-a: [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
 - Ctrl-e: [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
 - Ctrl-d: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
 - Ctrl-h: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
 - Ctrl-k: [`deleteToLineEnd`](https://codemirror.net/6/docs/ref/#commands.deleteToLineEnd)
 - Alt-d: [`deleteGroupForward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupForward)
 - Ctrl-Alt-h: [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
 - Ctrl-o: [`splitLine`](https://codemirror.net/6/docs/ref/#commands.splitLine)
 - Ctrl-t: [`transposeChars`](https://codemirror.net/6/docs/ref/#commands.transposeChars)
 - Alt-f: [`cursorGroupForward`](https://codemirror.net/6/docs/ref/#commands.cursorGroupForward) ([`selectGroupForward`](https://codemirror.net/6/docs/ref/#commands.selectGroupForward) with Shift)
 - Alt-b: [`cursorGroupBackward`](https://codemirror.net/6/docs/ref/#commands.cursorGroupBackward) ([`selectGroupBackward`](https://codemirror.net/6/docs/ref/#commands.selectGroupBackward) with Shift)
 - Alt-<: [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart)
 - Alt->: [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd)
 - Ctrl-v: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown)
 - Alt-v: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp)
*/
const emacsStyleKeymap = [
    { key: "Ctrl-b", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
    { key: "Ctrl-f", run: cursorCharRight, shift: selectCharRight },
    { key: "Ctrl-p", run: cursorLineUp, shift: selectLineUp },
    { key: "Ctrl-n", run: cursorLineDown, shift: selectLineDown },
    { key: "Ctrl-a", run: cursorLineStart, shift: selectLineStart },
    { key: "Ctrl-e", run: cursorLineEnd, shift: selectLineEnd },
    { key: "Ctrl-d", run: deleteCharForward },
    { key: "Ctrl-h", run: deleteCharBackward },
    { key: "Ctrl-k", run: deleteToLineEnd },
    { key: "Alt-d", run: deleteGroupForward },
    { key: "Ctrl-Alt-h", run: deleteGroupBackward },
    { key: "Ctrl-o", run: splitLine },
    { key: "Ctrl-t", run: transposeChars },
    { key: "Alt-f", run: cursorGroupForward, shift: selectGroupForward },
    { key: "Alt-b", run: cursorGroupBackward, shift: selectGroupBackward },
    { key: "Alt-<", run: cursorDocStart },
    { key: "Alt->", run: cursorDocEnd },
    { key: "Ctrl-v", run: cursorPageDown },
    { key: "Alt-v", run: cursorPageUp },
];
/**
An array of key bindings closely sticking to platform-standard or
widely used bindings. (This includes the bindings from
[`emacsStyleKeymap`](https://codemirror.net/6/docs/ref/#commands.emacsStyleKeymap), with their `key`
property changed to `mac`.)

 - ArrowLeft: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
 - ArrowRight: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
 - Ctrl-ArrowLeft (Alt-ArrowLeft on macOS): [`cursorGroupLeft`](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) ([`selectGroupLeft`](https://codemirror.net/6/docs/ref/#commands.selectGroupLeft) with Shift)
 - Ctrl-ArrowRight (Alt-ArrowRight on macOS): [`cursorGroupRight`](https://codemirror.net/6/docs/ref/#commands.cursorGroupRight) ([`selectGroupRight`](https://codemirror.net/6/docs/ref/#commands.selectGroupRight) with Shift)
 - Cmd-ArrowLeft (on macOS): [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
 - Cmd-ArrowRight (on macOS): [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
 - ArrowUp: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
 - ArrowDown: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
 - Cmd-ArrowUp (on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
 - Cmd-ArrowDown (on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
 - Ctrl-ArrowUp (on macOS): [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
 - Ctrl-ArrowDown (on macOS): [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
 - PageUp: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
 - PageDown: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
 - Home: [`cursorLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryBackward) ([`selectLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryBackward) with Shift)
 - End: [`cursorLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryForward) ([`selectLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryForward) with Shift)
 - Ctrl-Home (Cmd-Home on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
 - Ctrl-End (Cmd-Home on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
 - Enter: [`insertNewlineAndIndent`](https://codemirror.net/6/docs/ref/#commands.insertNewlineAndIndent)
 - Ctrl-a (Cmd-a on macOS): [`selectAll`](https://codemirror.net/6/docs/ref/#commands.selectAll)
 - Backspace: [`deleteCodePointBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCodePointBackward)
 - Delete: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
 - Ctrl-Backspace (Alt-Backspace on macOS): [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
 - Ctrl-Delete (Alt-Delete on macOS): [`deleteGroupForward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupForward)
 - Cmd-Backspace (macOS): [`deleteToLineStart`](https://codemirror.net/6/docs/ref/#commands.deleteToLineStart).
 - Cmd-Delete (macOS): [`deleteToLineEnd`](https://codemirror.net/6/docs/ref/#commands.deleteToLineEnd).
*/
const standardKeymap = /*@__PURE__*/[
    { key: "ArrowLeft", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
    { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: cursorGroupLeft, shift: selectGroupLeft },
    { mac: "Cmd-ArrowLeft", run: cursorLineBoundaryBackward, shift: selectLineBoundaryBackward },
    { key: "ArrowRight", run: cursorCharRight, shift: selectCharRight, preventDefault: true },
    { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: cursorGroupRight, shift: selectGroupRight },
    { mac: "Cmd-ArrowRight", run: cursorLineBoundaryForward, shift: selectLineBoundaryForward },
    { key: "ArrowUp", run: cursorLineUp, shift: selectLineUp, preventDefault: true },
    { mac: "Cmd-ArrowUp", run: cursorDocStart, shift: selectDocStart },
    { mac: "Ctrl-ArrowUp", run: cursorPageUp, shift: selectPageUp },
    { key: "ArrowDown", run: cursorLineDown, shift: selectLineDown, preventDefault: true },
    { mac: "Cmd-ArrowDown", run: cursorDocEnd, shift: selectDocEnd },
    { mac: "Ctrl-ArrowDown", run: cursorPageDown, shift: selectPageDown },
    { key: "PageUp", run: cursorPageUp, shift: selectPageUp },
    { key: "PageDown", run: cursorPageDown, shift: selectPageDown },
    { key: "Home", run: cursorLineBoundaryBackward, shift: selectLineBoundaryBackward },
    { key: "Mod-Home", run: cursorDocStart, shift: selectDocStart },
    { key: "End", run: cursorLineBoundaryForward, shift: selectLineBoundaryForward },
    { key: "Mod-End", run: cursorDocEnd, shift: selectDocEnd },
    { key: "Enter", run: insertNewlineAndIndent },
    { key: "Mod-a", run: selectAll },
    { key: "Backspace", run: deleteCodePointBackward, shift: deleteCodePointBackward },
    { key: "Delete", run: deleteCharForward, shift: deleteCharForward },
    { key: "Mod-Backspace", mac: "Alt-Backspace", run: deleteGroupBackward },
    { key: "Mod-Delete", mac: "Alt-Delete", run: deleteGroupForward },
    { mac: "Mod-Backspace", run: deleteToLineStart },
    { mac: "Mod-Delete", run: deleteToLineEnd }
].concat(/*@__PURE__*/emacsStyleKeymap.map(b => ({ mac: b.key, run: b.run, shift: b.shift })));
/**
The default keymap. Includes all bindings from
[`standardKeymap`](https://codemirror.net/6/docs/ref/#commands.standardKeymap) plus the following:

- Alt-ArrowLeft (Ctrl-ArrowLeft on macOS): [`cursorSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxLeft) ([`selectSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxLeft) with Shift)
- Alt-ArrowRight (Ctrl-ArrowRight on macOS): [`cursorSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxRight) ([`selectSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxRight) with Shift)
- Alt-ArrowUp: [`moveLineUp`](https://codemirror.net/6/docs/ref/#commands.moveLineUp)
- Alt-ArrowDown: [`moveLineDown`](https://codemirror.net/6/docs/ref/#commands.moveLineDown)
- Shift-Alt-ArrowUp: [`copyLineUp`](https://codemirror.net/6/docs/ref/#commands.copyLineUp)
- Shift-Alt-ArrowDown: [`copyLineDown`](https://codemirror.net/6/docs/ref/#commands.copyLineDown)
- Escape: [`simplifySelection`](https://codemirror.net/6/docs/ref/#commands.simplifySelection)
- Alt-l (Ctrl-l on macOS): [`selectLine`](https://codemirror.net/6/docs/ref/#commands.selectLine)
- Ctrl-i (Cmd-i on macOS): [`selectParentSyntax`](https://codemirror.net/6/docs/ref/#commands.selectParentSyntax)
- Ctrl-[ (Cmd-[ on macOS): [`indentLess`](https://codemirror.net/6/docs/ref/#commands.indentLess)
- Ctrl-] (Cmd-] on macOS): [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore)
- Ctrl-Alt-\\ (Cmd-Alt-\\ on macOS): [`indentSelection`](https://codemirror.net/6/docs/ref/#commands.indentSelection)
- Shift-Ctrl-k (Shift-Cmd-k on macOS): [`deleteLine`](https://codemirror.net/6/docs/ref/#commands.deleteLine)
- Shift-Ctrl-\\ (Shift-Cmd-\\ on macOS): [`cursorMatchingBracket`](https://codemirror.net/6/docs/ref/#commands.cursorMatchingBracket)
*/
const defaultKeymap = /*@__PURE__*/[
    { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: cursorSyntaxLeft, shift: selectSyntaxLeft },
    { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: cursorSyntaxRight, shift: selectSyntaxRight },
    { key: "Alt-ArrowUp", run: moveLineUp },
    { key: "Shift-Alt-ArrowUp", run: copyLineUp },
    { key: "Alt-ArrowDown", run: moveLineDown },
    { key: "Shift-Alt-ArrowDown", run: copyLineDown },
    { key: "Escape", run: simplifySelection },
    { key: "Alt-l", mac: "Ctrl-l", run: selectLine },
    { key: "Mod-i", run: selectParentSyntax, preventDefault: true },
    { key: "Mod-[", run: indentLess },
    { key: "Mod-]", run: indentMore },
    { key: "Mod-Alt-\\", run: indentSelection },
    { key: "Shift-Mod-k", run: deleteLine },
    { key: "Shift-Mod-\\", run: cursorMatchingBracket }
].concat(standardKeymap);
/**
A binding that binds Tab to [`insertTab`](https://codemirror.net/6/docs/ref/#commands.insertTab) and
Shift-Tab to [`indentSelection`](https://codemirror.net/6/docs/ref/#commands.indentSelection).
Please see the [Tab example](../../examples/tab/) before using
this.
*/
const defaultTabBinding = { key: "Tab", run: insertTab, shift: indentSelection };




/***/ }),
/* 37 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bracketMatching": () => (/* binding */ bracketMatching),
/* harmony export */   "matchBrackets": () => (/* binding */ matchBrackets)
/* harmony export */ });
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);





const baseTheme = _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.EditorView.baseTheme({
    ".cm-matchingBracket": { color: "#0b0" },
    ".cm-nonmatchingBracket": { color: "#a22" }
});
const DefaultScanDist = 10000, DefaultBrackets = "()[]{}";
const bracketMatchingConfig = _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Facet.define({
    combine(configs) {
        return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.combineConfig)(configs, {
            afterCursor: true,
            brackets: DefaultBrackets,
            maxScanDistance: DefaultScanDist
        });
    }
});
const matchingMark = _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.mark({ class: "cm-matchingBracket" }), nonmatchingMark = _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.mark({ class: "cm-nonmatchingBracket" });
const bracketMatchingState = _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateField.define({
    create() { return _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.none; },
    update(deco, tr) {
        if (!tr.docChanged && !tr.selection)
            return deco;
        let decorations = [];
        let config = tr.state.facet(bracketMatchingConfig);
        for (let range of tr.state.selection.ranges) {
            if (!range.empty)
                continue;
            let match = matchBrackets(tr.state, range.head, -1, config)
                || (range.head > 0 && matchBrackets(tr.state, range.head - 1, 1, config))
                || (config.afterCursor &&
                    (matchBrackets(tr.state, range.head, 1, config) ||
                        (range.head < tr.state.doc.length && matchBrackets(tr.state, range.head + 1, -1, config))));
            if (!match)
                continue;
            let mark = match.matched ? matchingMark : nonmatchingMark;
            decorations.push(mark.range(match.start.from, match.start.to));
            if (match.end)
                decorations.push(mark.range(match.end.from, match.end.to));
        }
        return _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.Decoration.set(decorations, true);
    },
    provide: f => _codemirror_view__WEBPACK_IMPORTED_MODULE_1__.EditorView.decorations.from(f)
});
const bracketMatchingUnique = [
    bracketMatchingState,
    baseTheme
];
/// Create an extension that enables bracket matching. Whenever the
/// cursor is next to a bracket, that bracket and the one it matches
/// are highlighted. Or, when no matching bracket is found, another
/// highlighting style is used to indicate this.
function bracketMatching(config = {}) {
    return [bracketMatchingConfig.of(config), bracketMatchingUnique];
}
function matchingNodes(node, dir, brackets) {
    let byProp = node.prop(dir < 0 ? lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp.openedBy : lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp.closedBy);
    if (byProp)
        return byProp;
    if (node.name.length == 1) {
        let index = brackets.indexOf(node.name);
        if (index > -1 && index % 2 == (dir < 0 ? 1 : 0))
            return [brackets[index + dir]];
    }
    return null;
}
/// Find the matching bracket for the token at `pos`, scanning
/// direction `dir`. Only the `brackets` and `maxScanDistance`
/// properties are used from `config`, if given. Returns null if no
/// bracket was found at `pos`, or a match result otherwise.
function matchBrackets(state, pos, dir, config = {}) {
    let maxScanDistance = config.maxScanDistance || DefaultScanDist, brackets = config.brackets || DefaultBrackets;
    let tree = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_3__.syntaxTree)(state), sub = tree.resolve(pos, dir), matches;
    if (matches = matchingNodes(sub.type, dir, brackets))
        return matchMarkedBrackets(state, pos, dir, sub, matches, brackets);
    else
        return matchPlainBrackets(state, pos, dir, tree, sub.type, maxScanDistance, brackets);
}
function matchMarkedBrackets(_state, _pos, dir, token, matching, brackets) {
    let parent = token.parent, firstToken = { from: token.from, to: token.to };
    let depth = 0, cursor = parent === null || parent === void 0 ? void 0 : parent.cursor;
    if (cursor && (dir < 0 ? cursor.childBefore(token.from) : cursor.childAfter(token.to)))
        do {
            if (dir < 0 ? cursor.to <= token.from : cursor.from >= token.to) {
                if (depth == 0 && matching.indexOf(cursor.type.name) > -1) {
                    return { start: firstToken, end: { from: cursor.from, to: cursor.to }, matched: true };
                }
                else if (matchingNodes(cursor.type, dir, brackets)) {
                    depth++;
                }
                else if (matchingNodes(cursor.type, -dir, brackets)) {
                    depth--;
                    if (depth == 0)
                        return { start: firstToken, end: { from: cursor.from, to: cursor.to }, matched: false };
                }
            }
        } while (dir < 0 ? cursor.prevSibling() : cursor.nextSibling());
    return { start: firstToken, matched: false };
}
function matchPlainBrackets(state, pos, dir, tree, tokenType, maxScanDistance, brackets) {
    let startCh = dir < 0 ? state.sliceDoc(pos - 1, pos) : state.sliceDoc(pos, pos + 1);
    let bracket = brackets.indexOf(startCh);
    if (bracket < 0 || (bracket % 2 == 0) != (dir > 0))
        return null;
    let startToken = { from: dir < 0 ? pos - 1 : pos, to: dir > 0 ? pos + 1 : pos };
    let iter = state.doc.iterRange(pos, dir > 0 ? state.doc.length : 0), depth = 0;
    for (let distance = 0; !(iter.next()).done && distance <= maxScanDistance;) {
        let text = iter.value;
        if (dir < 0)
            distance += text.length;
        let basePos = pos + distance * dir;
        for (let pos = dir > 0 ? 0 : text.length - 1, end = dir > 0 ? text.length : -1; pos != end; pos += dir) {
            let found = brackets.indexOf(text[pos]);
            if (found < 0 || tree.resolve(basePos + pos, 1).type != tokenType)
                continue;
            if ((found % 2 == 0) == (dir > 0)) {
                depth++;
            }
            else if (depth == 1) { // Closing
                return { start: startToken, end: { from: basePos + pos, to: basePos + pos + 1 }, matched: (found >> 1) == (bracket >> 1) };
            }
            else {
                depth--;
            }
        }
        if (dir > 0)
            distance += text.length;
    }
    return iter.done ? { start: startToken, matched: false } : null;
}




/***/ }),
/* 38 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "esLint": () => (/* binding */ esLint),
/* harmony export */   "javascript": () => (/* binding */ javascript),
/* harmony export */   "javascriptLanguage": () => (/* binding */ javascriptLanguage),
/* harmony export */   "jsxLanguage": () => (/* binding */ jsxLanguage),
/* harmony export */   "snippets": () => (/* binding */ snippets),
/* harmony export */   "tsxLanguage": () => (/* binding */ tsxLanguage),
/* harmony export */   "typescriptLanguage": () => (/* binding */ typescriptLanguage)
/* harmony export */ });
/* harmony import */ var lezer_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);





/// A collection of JavaScript-related
/// [snippets](#autocomplete.snippet).
const snippets = [
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
    }),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
    }),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "block",
        type: "keyword"
    }),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
    }),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("import {${names}} from \"${module}\"\n${}", {
        label: "import",
        detail: "named",
        type: "keyword"
    }),
    (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.snippetCompletion)("import ${name} from \"${module}\"\n${}", {
        label: "import",
        detail: "default",
        type: "keyword"
    })
];

/// A language provider based on the [Lezer JavaScript
/// parser](https://github.com/lezer-parser/javascript), extended with
/// highlighting and indentation information.
const javascriptLanguage = _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.LezerLanguage.define({
    parser: lezer_javascript__WEBPACK_IMPORTED_MODULE_0__.parser.configure({
        props: [
            _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.indentNodeProp.add({
                IfStatement: (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__.continuedIndent)({ except: /^\s*({|else\b)/ }),
                TryStatement: (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__.continuedIndent)({ except: /^\s*({|catch|finally)\b/ }),
                LabeledStatement: _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.flatIndent,
                SwitchBody: context => {
                    let after = context.textAfter, closed = /^\s*\}/.test(after), isCase = /^\s*(case|default)\b/.test(after);
                    return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
                },
                Block: (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__.delimitedIndent)({ closing: "}" }),
                ArrowFunction: cx => cx.baseIndent + cx.unit,
                "TemplateString BlockComment": () => -1,
                "Statement Property": (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_2__.continuedIndent)({ except: /^{/ }),
                JSXElement(context) {
                    let closed = /^\s*<\//.test(context.textAfter);
                    return context.lineIndent(context.state.doc.lineAt(context.node.from)) + (closed ? 0 : context.unit);
                },
                JSXEscape(context) {
                    let closed = /\s*\}/.test(context.textAfter);
                    return context.lineIndent(context.state.doc.lineAt(context.node.from)) + (closed ? 0 : context.unit);
                },
                "JSXOpenTag JSXSelfClosingTag"(context) {
                    return context.column(context.node.from) + context.unit;
                }
            }),
            _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.foldNodeProp.add({
                "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.foldInside,
                BlockComment(tree) { return { from: tree.from + 2, to: tree.to - 2 }; }
            }),
            (0,_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.styleTags)({
                "get set async static": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.modifier,
                "for while do if else switch try catch finally return throw break continue default case": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.controlKeyword,
                "in of await yield void typeof delete instanceof": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.operatorKeyword,
                "export import let var const function class extends": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definitionKeyword,
                "with debugger from as new": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.keyword,
                TemplateString: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.special(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.string),
                Super: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.atom,
                BooleanLiteral: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.bool,
                this: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.self,
                null: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.null,
                Star: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.modifier,
                VariableName: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.variableName,
                "CallExpression/VariableName": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.function(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.variableName),
                VariableDefinition: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.variableName),
                Label: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.labelName,
                PropertyName: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.propertyName,
                "CallExpression/MemberExpression/PropertyName": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.function(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.propertyName),
                "FunctionDeclaration/VariableDefinition": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.function(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.variableName)),
                "ClassDeclaration/VariableDefinition": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.className),
                PropertyNameDefinition: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.propertyName),
                UpdateOp: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.updateOperator,
                LineComment: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.lineComment,
                BlockComment: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.blockComment,
                Number: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.number,
                String: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.string,
                ArithOp: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.arithmeticOperator,
                LogicOp: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.logicOperator,
                BitOp: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.bitwiseOperator,
                CompareOp: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.compareOperator,
                RegExp: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.regexp,
                Equals: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definitionOperator,
                "Arrow : Spread": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.punctuation,
                "( )": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.paren,
                "[ ]": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.squareBracket,
                "{ }": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.brace,
                ".": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.derefOperator,
                ", ;": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.separator,
                TypeName: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.typeName,
                TypeDefinition: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(_codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.typeName),
                "type enum interface implements namespace module declare": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definitionKeyword,
                "abstract global privacy readonly": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.modifier,
                "is keyof unique infer": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.operatorKeyword,
                JSXAttributeValue: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.string,
                JSXText: _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.content,
                "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.angleBracket,
                "JSXIdentifier JSXNameSpacedName": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.tagName,
                "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": _codemirror_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.propertyName
            })
        ]
    }),
    languageData: {
        closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
        commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
        indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
        wordChars: "$"
    }
});
/// A language provider for TypeScript.
const typescriptLanguage = javascriptLanguage.configure({ dialect: "ts" });
/// Language provider for JSX.
const jsxLanguage = javascriptLanguage.configure({ dialect: "jsx" });
/// Language provider for JSX + TypeScript.
const tsxLanguage = javascriptLanguage.configure({ dialect: "jsx ts" });
/// JavaScript support. Includes [snippet](#lang-javascript.snippets)
/// completion.
function javascript(config = {}) {
    let lang = config.jsx ? (config.typescript ? tsxLanguage : jsxLanguage)
        : config.typescript ? typescriptLanguage : javascriptLanguage;
    return new _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.LanguageSupport(lang, javascriptLanguage.data.of({
        autocomplete: (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.ifNotIn)(["LineComment", "BlockComment", "String"], (0,_codemirror_autocomplete__WEBPACK_IMPORTED_MODULE_1__.completeFromList)(snippets))
    }));
}

/// Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
/// [lint](#lint) integration. `eslint` should be an instance of the
/// [`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
/// class, and `config` an optional ESLint configuration. The return
/// value of this function can be passed to [`linter`](#lint.linter)
/// to create a JavaScript linting extension.
///
/// Note that ESLint targets node, and is tricky to run in the
/// browser. The [eslint4b](https://github.com/mysticatea/eslint4b)
/// and
/// [eslint4b-prebuilt](https://github.com/marijnh/eslint4b-prebuilt/)
/// packages may help with that.
function esLint(eslint, config) {
    if (!config) {
        config = {
            parserOptions: { ecmaVersion: 2019, sourceType: "module" },
            env: { browser: true, node: true, es6: true, es2015: true, es2017: true, es2020: true },
            rules: {}
        };
        eslint.getRules().forEach((desc, name) => {
            if (desc.meta.docs.recommended)
                config.rules[name] = 2;
        });
    }
    return (view) => {
        let { state } = view, found = [];
        for (let { from, to } of javascriptLanguage.findRegions(state)) {
            let fromLine = state.doc.lineAt(from), offset = { line: fromLine.number - 1, col: from - fromLine.from, pos: from };
            for (let d of eslint.verify(state.sliceDoc(from, to), config))
                found.push(translateDiagnostic(d, state.doc, offset));
        }
        return found;
    };
}
function mapPos(line, col, doc, offset) {
    return doc.line(line + offset.line).from + col + (line == 1 ? offset.col - 1 : -1);
}
function translateDiagnostic(input, doc, offset) {
    let start = mapPos(input.line, input.column, doc, offset);
    let result = {
        from: start,
        to: input.endLine != null && input.endColumn != 1 ? mapPos(input.endLine, input.endColumn, doc, offset) : start,
        message: input.message,
        source: input.ruleId ? "jshint:" + input.ruleId : "jshint",
        severity: input.severity == 1 ? "warning" : "error",
    };
    if (input.fix) {
        let { range, text } = input.fix, from = range[0] + offset.pos - start, to = range[1] + offset.pos - start;
        result.actions = [{
                name: "fix",
                apply(view, start) {
                    view.dispatch({ changes: { from: start + from, to: start + to, insert: text }, scrollIntoView: true });
                }
            }];
    }
    return result;
}




/***/ }),
/* 39 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parser": () => (/* binding */ parser)
/* harmony export */ });
/* harmony import */ var lezer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);


// This file was generated by lezer-generator. You probably shouldn't edit it.
const noSemi = 269,
  incdec = 1,
  incdecPrefix = 2,
  templateContent = 270,
  templateDollarBrace = 271,
  templateEnd = 272,
  insertSemi = 273,
  TSExtends = 3,
  Dialect_ts = 1;

/* Hand-written tokenizers for JavaScript tokens that can't be
   expressed by lezer's built-in tokenizer. */

const newline = [10, 13, 8232, 8233];
const space = [9, 11, 12, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288];

const braceR = 125, braceL = 123, semicolon = 59, slash = 47, star = 42,
      plus = 43, minus = 45, dollar = 36, backtick = 96, backslash = 92;

// FIXME this should technically enter block comments
function newlineBefore(input, pos) {
  for (let i = pos - 1; i >= 0; i--) {
    let prev = input.get(i);
    if (newline.indexOf(prev) > -1) return true
    if (space.indexOf(prev) < 0) break
  }
  return false
}

const insertSemicolon = new lezer__WEBPACK_IMPORTED_MODULE_0__.ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos);
  if ((next == braceR || next == -1 || newlineBefore(input, pos)) && stack.canShift(insertSemi))
    token.accept(insertSemi, token.start);
}, {contextual: true, fallback: true});

const noSemicolon = new lezer__WEBPACK_IMPORTED_MODULE_0__.ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos++);
  if (space.indexOf(next) > -1 || newline.indexOf(next) > -1) return
  if (next == slash) {
    let after = input.get(pos++);
    if (after == slash || after == star) return
  }
  if (next != braceR && next != semicolon && next != -1 && !newlineBefore(input, token.start) &&
      stack.canShift(noSemi))
    token.accept(noSemi, token.start);
}, {contextual: true});

const incdecToken = new lezer__WEBPACK_IMPORTED_MODULE_0__.ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos);
  if ((next == plus || next == minus) && next == input.get(pos + 1)) {
    let mayPostfix = !newlineBefore(input, token.start) && stack.canShift(incdec);
    token.accept(mayPostfix ? incdec : incdecPrefix, pos + 2);
  }
}, {contextual: true});

const template = new lezer__WEBPACK_IMPORTED_MODULE_0__.ExternalTokenizer((input, token) => {
  let pos = token.start, afterDollar = false;
  for (;;) {
    let next = input.get(pos++);
    if (next < 0) {
      if (pos - 1 > token.start) token.accept(templateContent, pos - 1);
      break
    } else if (next == backtick) {
      if (pos == token.start + 1) token.accept(templateEnd, pos);
      else token.accept(templateContent, pos - 1);
      break
    } else if (next == braceL && afterDollar) {
      if (pos == token.start + 2) token.accept(templateDollarBrace, pos);
      else token.accept(templateContent, pos - 2);
      break
    } else if (next == 10 /* "\n" */ && pos > token.start + 1) {
      // Break up template strings on lines, to avoid huge tokens
      token.accept(templateContent, pos);
      break
    } else if (next == backslash && pos != input.length) {
      pos++;
    }
    afterDollar = next == dollar;
  }
});

function tsExtends(value, stack) {
  return value == "extends" && stack.dialectEnabled(Dialect_ts) ? TSExtends : -1
}

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_identifier = {__proto__:null,export:16, as:21, from:25, default:30, async:35, function:36, this:46, true:54, false:54, void:58, typeof:62, null:76, super:78, new:112, await:129, yield:131, delete:132, class:142, extends:144, public:181, private:181, protected:181, readonly:183, in:202, instanceof:204, const:206, import:238, keyof:289, unique:293, infer:299, is:333, abstract:353, implements:355, type:357, let:360, var:362, interface:369, enum:373, namespace:379, module:381, declare:385, global:389, for:410, of:419, while:422, with:426, do:430, if:434, else:436, switch:440, case:446, try:452, catch:454, finally:456, return:460, throw:464, break:468, continue:472, debugger:476};
const spec_word = {__proto__:null,async:99, get:101, set:103, public:151, private:151, protected:151, static:153, abstract:155, readonly:159, new:337};
const spec_LessThan = {__proto__:null,"<":119};
const parser = lezer__WEBPACK_IMPORTED_MODULE_0__.Parser.deserialize({
  version: 13,
  states: "$,lO]QYOOO&zQ!LdO'#CgO'ROSO'#DRO)ZQYO'#DWO)kQYO'#DcO)rQYO'#DmO-iQYO'#DsOOQO'#ET'#ETO-|QWO'#ESO.RQWO'#ESO0QQ!LdO'#IgO2hQ!LdO'#IhO3UQWO'#EqO3ZQpO'#FWOOQ!LS'#Ey'#EyO3cO!bO'#EyO3qQWO'#F_O4{QWO'#F^OOQ!LS'#Ih'#IhOOQ!LQ'#Ig'#IgOOQQ'#JR'#JRO5QQWO'#HeO5VQ!LYO'#HfOOQQ'#I['#I[OOQQ'#Hg'#HgQ]QYOOO)rQYO'#DeO5_QWO'#GRO5dQ#tO'#ClO5rQWO'#ERO5}Q#tO'#ExO6iQWO'#GRO6nQWO'#GVO6yQWO'#GVO7XQWO'#GYO7XQWO'#GZO7XQWO'#G]O5_QWO'#G`O7xQWO'#GcO9WQWO'#CcO9hQWO'#GpO9pQWO'#GvO9pQWO'#GxO]QYO'#GzO9pQWO'#G|O9pQWO'#HPO9uQWO'#HVO9zQ!LZO'#HZO)rQYO'#H]O:VQ!LZO'#H_O:bQ!LZO'#HaO5VQ!LYO'#HcO)rQYO'#IjOOOS'#Hh'#HhO:mOSO,59mOOQ!LS,59m,59mO=OQbO'#CgO=YQYO'#HiO=gQWO'#IlO?fQbO'#IlO'^QYO'#IlO?mQWO,59rO@TQ&jO'#D]O@|QWO'#ETOAZQWO'#IvOAfQWO'#IuOAnQWO,5:qOAsQWO'#ItOAzQWO'#DtO5dQ#tO'#EROBYQWO'#EROBeQ`O'#ExOOQ!LS,59},59}OBmQYO,59}ODkQ!LdO,5:XOEXQWO,5:_OErQ!LYO'#IsO6nQWO'#IrOEyQWO'#IrOFRQWO,5:pOFWQWO'#IrOFfQYO,5:nOHcQWO'#EPOIjQWO,5:nOJvQWO'#DgOJ}QYO'#DlOKXQ&jO,5:wO)rQYO,5:wOOQQ'#Ei'#EiOOQQ'#Ek'#EkO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xO)rQYO,5:xOOQQ'#Eo'#EoOK^QYO,5;YOOQ!LS,5;_,5;_OOQ!LS,5;`,5;`OMZQWO,5;`OOQ!LS,5;a,5;aO)rQYO'#HsOM`Q!LYO,5;zOMzQWO,5:xO)rQYO,5;]ONdQpO'#IzONRQpO'#IzONkQpO'#IzON|QpO,5;hOOQO,5;r,5;rO! [QYO'#FYOOOO'#Hr'#HrO3cO!bO,5;eO! cQpO'#F[OOQ!LS,5;e,5;eO!!PQ,UO'#CqOOQ!LS'#Ct'#CtO!!dQWO'#CtO!!zQ#tO,5;wO!#RQWO,5;yO!$[QWO'#FiO!$iQWO'#FjO!$nQWO'#FnO!%pQ&jO'#FrO!&cQ,UO'#IeOOQ!LS'#Ie'#IeO!&mQWO'#IdO!&{QWO'#IcOOQ!LS'#Cr'#CrOOQ!LS'#Cx'#CxO!'TQWO'#CzOIoQWO'#FaOIoQWO'#FcO!'YQWO'#FeOIeQWO'#FfO!'_QWO'#FlOIoQWO'#FqO!'dQWO'#EUO!'{QWO,5;xO]QYO,5>POOQQ'#I_'#I_OOQQ,5>Q,5>QOOQQ-E;e-E;eO!)wQ!LdO,5:POOQ!LQ'#Co'#CoO!*hQ#tO,5<mOOQO'#Ce'#CeO!*yQWO'#CpO!+RQ!LYO'#I`O4{QWO'#I`O9uQWO,59WO!+aQpO,59WO!+iQ#tO,59WO5dQ#tO,59WO!+tQWO,5:nO!+|QWO'#GoO!,UQWO'#JVO)rQYO,5;bOKXQ&jO,5;dO!,^QWO,5=YO!,cQWO,5=YO!,hQWO,5=YO5VQ!LYO,5=YO5_QWO,5<mO!,vQWO'#EVO!-XQ&jO'#EWOOQ!LQ'#It'#ItO!-jQ!LYO'#JSO5VQ!LYO,5<qO7XQWO,5<wOOQO'#Cq'#CqO!-uQpO,5<tO!-}Q#tO,5<uO!.YQWO,5<wO!._Q`O,5<zO9uQWO'#GeO5_QWO'#GgO!.gQWO'#GgO5dQ#tO'#GjO!.lQWO'#GjOOQQ,5<},5<}O!.qQWO'#GkO!.yQWO'#ClO!/OQWO,58}O!/YQWO,58}O!1XQYO,58}OOQQ,58},58}O!1fQ!LYO,58}O)rQYO,58}O!1qQYO'#GrOOQQ'#Gs'#GsOOQQ'#Gt'#GtO]QYO,5=[O!2RQWO,5=[O)rQYO'#DsO]QYO,5=bO]QYO,5=dO!2WQWO,5=fO]QYO,5=hO!2]QWO,5=kO!2bQYO,5=qOOQQ,5=u,5=uO)rQYO,5=uO5VQ!LYO,5=wOOQQ,5=y,5=yO!6`QWO,5=yOOQQ,5={,5={O!6`QWO,5={OOQQ,5=},5=}O!6eQ`O,5?UOOOS-E;f-E;fOOQ!LS1G/X1G/XO!6jQbO,5>TO)rQYO,5>TOOQO-E;g-E;gO!6tQWO,5?WO!6|QbO,5?WO!7TQWO,5?aOOQ!LS1G/^1G/^O!7]QpO'#DPOOQO'#In'#InO)rQYO'#InO!7zQpO'#InO!8iQpO'#D^O!8zQ&jO'#D^O!;SQYO'#D^O!;ZQWO'#ImO!;cQWO,59wO!;hQWO'#EXO!;vQWO'#IwO!<OQWO,5:rO!<fQ&jO'#D^O)rQYO,5?bO!<pQWO'#HnO!7TQWO,5?aOOQ!LQ1G0]1G0]O!=vQ&jO'#DwOOQ!LS,5:`,5:`O)rQYO,5:`OHcQWO,5:`O!=}QWO,5:`O9uQWO,5:mO!+aQpO,5:mO!+iQ#tO,5:mO5dQ#tO,5:mOOQ!LS1G/i1G/iOOQ!LS1G/y1G/yOOQ!LQ'#EO'#EOO)rQYO,5?_O!>YQ!LYO,5?_O!>kQ!LYO,5?_O!>rQWO,5?^O!>zQWO'#HpO!>rQWO,5?^OOQ!LQ1G0[1G0[O6nQWO,5?^OOQ!LS1G0Y1G0YO!?fQ!LdO1G0YO!@VQ!LbO,5:kOOQ!LS'#Fh'#FhO!@sQ!LdO'#IeOFfQYO1G0YO!BrQ#tO'#IoO!B|QWO,5:RO!CRQbO'#IpO)rQYO'#IpO!C]QWO,5:WOOQ!LS'#DP'#DPOOQ!LS1G0c1G0cO!CbQWO1G0cO!EsQ!LdO1G0dO!EzQ!LdO1G0dO!H_Q!LdO1G0dO!HfQ!LdO1G0dO!JmQ!LdO1G0dO!KQQ!LdO1G0dO!MqQ!LdO1G0dO!MxQ!LdO1G0dO#!]Q!LdO1G0dO#!dQ!LdO1G0dO#$XQ!LdO1G0dO#'RQ7^O'#CgO#(|Q7^O1G0tO#*wQ7^O'#IhOOQ!LS1G0z1G0zO#+[Q!LdO,5>_OOQ!LQ-E;q-E;qO#+{Q!LdO1G0dOOQ!LS1G0d1G0dO#-}Q!LdO1G0wO#.nQpO,5;jO#.sQpO,5;kO#.xQpO'#FRO#/^QWO'#FQOOQO'#I{'#I{OOQO'#Hq'#HqO#/cQpO1G1SOOQ!LS1G1S1G1SOOQO1G1]1G1]O#/qQ7^O'#IgO#/{QWO,5;tOK^QYO,5;tOOOO-E;p-E;pOOQ!LS1G1P1G1POOQ!LS,5;v,5;vO#0QQpO,5;vOOQ!LS,59`,59`O)rQYO1G1cOKXQ&jO'#HuO#0VQWO,5<[OOQ!LS,5<X,5<XOOQO'#F|'#F|OIoQWO,5<gOOQO'#GO'#GOOIoQWO,5<iOIoQWO,5<kOOQO1G1e1G1eO#0bQ`O'#CoO#0uQ`O,5<TO#0|QWO'#JOO5_QWO'#JOO#1[QWO,5<VOIoQWO,5<UO#1aQ`O'#FhO#1nQ`O'#JPO#1xQWO'#JPOHcQWO'#JPO#1}QWO,5<YOOQ!LQ'#Db'#DbO#2SQWO'#FkO#2_QpO'#FsO!%kQ&jO'#FsO!%kQ&jO'#FuO#2pQWO'#FvO!'_QWO'#FyOOQO'#Hw'#HwO#2uQ&jO,5<^OOQ!LS,5<^,5<^O#2|Q&jO'#FsO#3[Q&jO'#FtO#3dQ&jO'#FtOOQ!LS,5<l,5<lOIoQWO,5?OOIoQWO,5?OO#3iQWO'#HxO#3tQWO,5>}OOQ!LS'#Cg'#CgO#4hQ#tO,59fOOQ!LS,59f,59fO#5ZQ#tO,5;{O#5|Q#tO,5;}O#6WQWO,5<POOQ!LS,5<Q,5<QO#6]QWO,5<WO#6bQ#tO,5<]OFfQYO1G1dO#6rQWO1G1dOOQQ1G3k1G3kOOQ!LS1G/k1G/kOMZQWO1G/kOOQQ1G2X1G2XOHcQWO1G2XO)rQYO1G2XOHcQWO1G2XO#6wQWO1G2XO#7VQWO,59[O#8]QWO'#EPOOQ!LQ,5>z,5>zO#8gQ!LYO,5>zOOQQ1G.r1G.rO9uQWO1G.rO!+aQpO1G.rO!+iQ#tO1G.rO#8uQWO1G0YO#8zQWO'#CgO#9VQWO'#JWO#9_QWO,5=ZO#9dQWO'#JWO#9iQWO'#IQO#9wQWO,5?qO#:PQbO1G0|OOQ!LS1G1O1G1OO5_QWO1G2tO#:WQWO1G2tO#:]QWO1G2tO#:bQWO1G2tOOQQ1G2t1G2tO#:gQ#tO1G2XO6nQWO'#IuO6nQWO'#EXO6nQWO'#HzO#:xQ!LYO,5?nOOQQ1G2]1G2]O!.YQWO1G2cOHcQWO1G2`O#;TQWO1G2`OOQQ1G2a1G2aOHcQWO1G2aO#;YQWO1G2aO#;bQ&jO'#G_OOQQ1G2c1G2cO!%kQ&jO'#H|O!._Q`O1G2fOOQQ1G2f1G2fOOQQ,5=P,5=PO#;jQ#tO,5=RO5_QWO,5=RO#2pQWO,5=UO4{QWO,5=UO!+aQpO,5=UO!+iQ#tO,5=UO5dQ#tO,5=UO#;{QWO'#JUO#<WQWO,5=VOOQQ1G.i1G.iO#<]Q!LYO1G.iO#<hQWO1G.iO!'TQWO1G.iO5VQ!LYO1G.iO#<mQbO,5?sO#<wQWO,5?sO#=SQYO,5=^O#=ZQWO,5=^O6nQWO,5?sOOQQ1G2v1G2vO]QYO1G2vOOQQ1G2|1G2|OOQQ1G3O1G3OO9pQWO1G3QO#=`QYO1G3SO#AWQYO'#HROOQQ1G3V1G3VO9uQWO1G3]O#AeQWO1G3]O5VQ!LYO1G3aOOQQ1G3c1G3cOOQ!LQ'#Fo'#FoO5VQ!LYO1G3eO5VQ!LYO1G3gOOOS1G4p1G4pO#AmQ`O,5;zO#AuQbO1G3oO#BPQWO1G4rO#BXQWO1G4{O#BaQWO,5?YOK^QYO,5:sO6nQWO,5:sO9uQWO,59xOK^QYO,59xO!+aQpO,59xO#BfQ7^O,59xOOQO,5:s,5:sO#BpQ&jO'#HjO#CWQWO,5?XOOQ!LS1G/c1G/cO#C`Q&jO'#HoO#CtQWO,5?cOOQ!LQ1G0^1G0^O!8zQ&jO,59xO#C|QbO1G4|OOQO,5>Y,5>YO6nQWO,5>YOOQO-E;l-E;lO#DWQ!LrO'#D|O!%kQ&jO'#DxOOQO'#Hm'#HmO#DrQ&jO,5:cOOQ!LS,5:c,5:cO#DyQ&jO'#DxO#EXQ&jO'#D|O#EmQ&jO'#D|O!%kQ&jO'#D|O#EwQWO1G/zO#E|Q`O1G/zOOQ!LS1G/z1G/zO)rQYO1G/zOHcQWO1G/zOOQ!LS1G0X1G0XO9uQWO1G0XO!+aQpO1G0XO!+iQ#tO1G0XO#FTQ!LdO1G4yO)rQYO1G4yO#FeQ!LYO1G4yO#FvQWO1G4xO6nQWO,5>[OOQO,5>[,5>[O#GOQWO,5>[OOQO-E;n-E;nO#FvQWO1G4xO#G^Q!LdO,59fO#I]Q!LdO,5;{O#K_Q!LdO,5;}O#MaQ!LdO,5<]OOQ!LS7+%t7+%tO$ iQ!LdO7+%tO$!YQWO'#HkO$!dQWO,5?ZOOQ!LS1G/m1G/mO$!lQYO'#HlO$!yQWO,5?[O$#RQbO,5?[OOQ!LS1G/r1G/rOOQ!LS7+%}7+%}O$#]Q7^O,5:XO)rQYO7+&`O$#gQ7^O,5:POOQO1G1U1G1UOOQO1G1V1G1VO$#tQMhO,5;mOK^QYO,5;lOOQO-E;o-E;oOOQ!LS7+&n7+&nOOQO7+&w7+&wOOOO1G1`1G1`O$$PQWO1G1`OOQ!LS1G1b1G1bO$$UQ!LdO7+&}OOQ!LS,5>a,5>aO$$uQWO,5>aOOQ!LS1G1v1G1vP$$zQWO'#HuPOQ!LS-E;s-E;sO$%kQ#tO1G2RO$&^Q#tO1G2TO$&hQ#tO1G2VOOQ!LS1G1o1G1oO$&oQWO'#HtO$&}QWO,5?jO$&}QWO,5?jO$'VQWO,5?jO$'bQWO,5?jOOQO1G1q1G1qO$'pQ#tO1G1pO$(QQWO'#HvO$(bQWO,5?kOHcQWO,5?kO$(jQ`O,5?kOOQ!LS1G1t1G1tO5VQ!LYO,5<_O5VQ!LYO,5<`O$(tQWO,5<`O#2kQWO,5<`O!+aQpO,5<_O$(yQWO,5<aO5VQ!LYO,5<bO$(tQWO,5<eOOQO-E;u-E;uOOQ!LS1G1x1G1xO!%kQ&jO,5<_O$)RQWO,5<`O!%kQ&jO,5<aO!%kQ&jO,5<`O$)^Q#tO1G4jO$)hQ#tO1G4jOOQO,5>d,5>dOOQO-E;v-E;vOKXQ&jO,59hO)rQYO,59hO$)uQWO1G1kOIoQWO1G1rO$)zQ!LdO7+'OOOQ!LS7+'O7+'OOFfQYO7+'OOOQ!LS7+%V7+%VO$*kQ`O'#JQO#EwQWO7+'sO$*uQWO7+'sO$*}Q`O7+'sOOQQ7+'s7+'sOHcQWO7+'sO)rQYO7+'sOHcQWO7+'sOOQO1G.v1G.vO$+XQ!LbO'#CgO$+iQ!LbO,5<cO$,WQWO,5<cOOQ!LQ1G4f1G4fOOQQ7+$^7+$^O9uQWO7+$^O!+aQpO7+$^OFfQYO7+%tO$,]QWO'#IPO$,hQWO,5?rOOQO1G2u1G2uO5_QWO,5?rOOQO,5>l,5>lOOQO-E<O-E<OOOQ!LS7+&h7+&hO$,pQWO7+(`O5VQ!LYO7+(`O5_QWO7+(`O$,uQWO7+(`O$,zQWO7+'sOOQ!LQ,5>f,5>fOOQ!LQ-E;x-E;xOOQQ7+'}7+'}O$-YQ!LbO7+'zOHcQWO7+'zO$-dQ`O7+'{OOQQ7+'{7+'{OHcQWO7+'{O$-kQWO'#JTO$-vQWO,5<yOOQO,5>h,5>hOOQO-E;z-E;zOOQQ7+(Q7+(QO$.mQ&jO'#GhOOQQ1G2m1G2mOHcQWO1G2mO)rQYO1G2mOHcQWO1G2mO$.tQWO1G2mO$/SQ#tO1G2mO5VQ!LYO1G2pO#2pQWO1G2pO4{QWO1G2pO!+aQpO1G2pO!+iQ#tO1G2pO$/eQWO'#IOO$/pQWO,5?pO$/xQ&jO,5?pOOQ!LQ1G2q1G2qOOQQ7+$T7+$TO$/}QWO7+$TO5VQ!LYO7+$TO$0SQWO7+$TO)rQYO1G5_O)rQYO1G5`O$0XQYO1G2xO$0`QWO1G2xO$0eQYO1G2xO$0lQ!LYO1G5_OOQQ7+(b7+(bO5VQ!LYO7+(lO]QYO7+(nOOQQ'#JZ'#JZOOQQ'#IR'#IRO$0vQYO,5=mOOQQ,5=m,5=mO)rQYO'#HSO$1TQWO'#HUOOQQ7+(w7+(wO$1YQYO7+(wO6nQWO7+(wOOQQ7+({7+({OOQQ7+)P7+)POOQQ7+)R7+)ROOQO1G4t1G4tO$5TQ7^O1G0_O$5_QWO1G0_OOQO1G/d1G/dO$5jQ7^O1G/dO9uQWO1G/dOK^QYO'#D^OOQO,5>U,5>UOOQO-E;h-E;hOOQO,5>Z,5>ZOOQO-E;m-E;mO!+aQpO1G/dOOQO1G3t1G3tO9uQWO,5:dOOQO,5:h,5:hO)rQYO,5:hO$5tQ!LYO,5:hO$6PQ!LYO,5:hO!+aQpO,5:dOOQO-E;k-E;kOOQ!LS1G/}1G/}O!%kQ&jO,5:dO$6_Q!LrO,5:hO$6yQ&jO,5:dO!%kQ&jO,5:hO$7XQ&jO,5:hO$7mQ!LYO,5:hOOQ!LS7+%f7+%fO#EwQWO7+%fO#E|Q`O7+%fOOQ!LS7+%s7+%sO9uQWO7+%sO!+aQpO7+%sO$8RQ!LdO7+*eO)rQYO7+*eOOQO1G3v1G3vO6nQWO1G3vO$8cQWO7+*dO$8kQ!LdO1G2RO$:mQ!LdO1G2TO$<oQ!LdO1G1pO$>wQ#tO,5>VOOQO-E;i-E;iO$?RQbO,5>WO)rQYO,5>WOOQO-E;j-E;jO$?]QWO1G4vO$?eQ7^O1G0YO$AlQ7^O1G0dO$AsQ7^O1G0dO$CtQ7^O1G0dO$C{Q7^O1G0dO$EpQ7^O1G0dO$FTQ7^O1G0dO$HbQ7^O1G0dO$HiQ7^O1G0dO$JjQ7^O1G0dO$JqQ7^O1G0dO$LfQ7^O1G0dO$LyQ!LdO<<IzO$MjQ7^O1G0dO% YQ7^O'#IeO%#VQ7^O1G0wOK^QYO'#FTOOQO'#I|'#I|OOQO1G1X1G1XO%#dQWO1G1WO%#iQ7^O,5>_OOOO7+&z7+&zOOQ!LS1G3{1G3{OIoQWO7+'qO%#sQWO,5>`O5_QWO,5>`OOQO-E;r-E;rO%$RQWO1G5UO%$RQWO1G5UO%$ZQWO1G5UO%$fQ`O,5>bO%$pQWO,5>bOHcQWO,5>bOOQO-E;t-E;tO%$uQ`O1G5VO%%PQWO1G5VOOQO1G1y1G1yOOQO1G1z1G1zO5VQ!LYO1G1zO$(tQWO1G1zO5VQ!LYO1G1yO%%XQWO1G1{OHcQWO1G1{OOQO1G1|1G1|O5VQ!LYO1G2PO!+aQpO1G1yO#2kQWO1G1zO%%^QWO1G1{O%%fQWO1G1zOIoQWO7+*UOOQ!LS1G/S1G/SO%%qQWO1G/SOOQ!LS7+'V7+'VO%%vQ#tO7+'^O%&WQ!LdO<<JjOOQ!LS<<Jj<<JjOHcQWO'#HyO%&wQWO,5?lOOQQ<<K_<<K_OHcQWO<<K_O#EwQWO<<K_O%'PQWO<<K_O%'XQ`O<<K_OHcQWO1G1}OOQQ<<Gx<<GxO9uQWO<<GxO%'cQ!LdO<<I`OOQ!LS<<I`<<I`OOQO,5>k,5>kO%(SQWO,5>kOOQO-E;}-E;}O%(XQWO1G5^O%(aQWO<<KzOOQQ<<Kz<<KzO%(fQWO<<KzO5VQ!LYO<<KzO)rQYO<<K_OHcQWO<<K_OOQQ<<Kf<<KfO$-YQ!LbO<<KfOOQQ<<Kg<<KgO$-dQ`O<<KgO%(kQ&jO'#H{O%(vQWO,5?oOK^QYO,5?oOOQQ1G2e1G2eO#DWQ!LrO'#D|O!%kQ&jO'#GiOOQO'#H}'#H}O%)OQ&jO,5=SOOQQ,5=S,5=SO#3[Q&jO'#D|O%)VQ&jO'#D|O%)kQ&jO'#D|O%)uQ&jO'#GiO%*TQWO7+(XO%*YQWO7+(XO%*bQ`O7+(XOOQQ7+(X7+(XOHcQWO7+(XO)rQYO7+(XOHcQWO7+(XO%*lQWO7+(XOOQQ7+([7+([O5VQ!LYO7+([O#2pQWO7+([O4{QWO7+([O!+aQpO7+([O%*zQWO,5>jOOQO-E;|-E;|OOQO'#Gl'#GlO%+VQWO1G5[O5VQ!LYO<<GoOOQQ<<Go<<GoO%+_QWO<<GoO%+dQWO7+*yO%+iQWO7+*zOOQQ7+(d7+(dO%+nQWO7+(dO%+sQYO7+(dO%+zQWO7+(dO)rQYO7+*yO)rQYO7+*zOOQQ<<LW<<LWOOQQ<<LY<<LYOOQQ-E<P-E<POOQQ1G3X1G3XO%,PQWO,5=nOOQQ,5=p,5=pO9uQWO<<LcO%,UQWO<<LcOK^QYO7+%yOOQO7+%O7+%OO%,ZQ7^O1G4|O9uQWO7+%OOOQO1G0O1G0OO%,eQ!LdO1G0SOOQO1G0S1G0SO)rQYO1G0SO%,oQ!LYO1G0SO9uQWO1G0OO!+aQpO1G0OO%,zQ!LYO1G0SO!%kQ&jO1G0OO%-YQ!LYO1G0SO%-nQ!LrO1G0SO%-xQ&jO1G0OO!%kQ&jO1G0SOOQ!LS<<IQ<<IQOOQ!LS<<I_<<I_O9uQWO<<I_O%.WQ!LdO<<NPOOQO7+)b7+)bO%.hQ!LdO7+'^O%0pQbO1G3rO%0zQ7^O7+%tO%1XQ7^O,59fO%3UQ7^O,5;{O%5RQ7^O,5;}O%7OQ7^O,5<]O%8nQ7^O7+&}O%8{Q7^O7+'OO%9YQWO,5;oOOQO7+&r7+&rO%9_Q#tO<<K]OOQO1G3z1G3zO%9oQWO1G3zO%9zQWO1G3zO%:YQWO7+*pO%:YQWO7+*pOHcQWO1G3|O%:bQ`O1G3|O%:lQWO7+*qOOQO7+'f7+'fO5VQ!LYO7+'fOOQO7+'e7+'eO$(tQWO7+'gO%:tQ`O7+'gOOQO7+'k7+'kO5VQ!LYO7+'eO$(tQWO7+'fO%:{QWO7+'gOHcQWO7+'gO#2kQWO7+'fO%;QQ#tO<<MpOOQ!LS7+$n7+$nO%;[Q`O,5>eOOQO-E;w-E;wO#EwQWOAN@yOOQQAN@yAN@yOHcQWOAN@yO%;fQ!LbO7+'iOOQQAN=dAN=dO5_QWO1G4VO%;sQWO7+*xO5VQ!LYOANAfO%;{QWOANAfOOQQANAfANAfO%<QQWOAN@yO%<YQ`OAN@yOOQQANAQANAQOOQQANARANARO%<dQWO,5>gOOQO-E;y-E;yO%<oQ7^O1G5ZO#2pQWO,5=TO4{QWO,5=TO!+aQpO,5=TOOQO-E;{-E;{OOQQ1G2n1G2nO$6_Q!LrO,5:hO!%kQ&jO,5=TO%<yQ&jO,5=TO%=XQ&jO,5:hOOQQ<<Ks<<KsOHcQWO<<KsO%*TQWO<<KsO%=mQWO<<KsO%=uQ`O<<KsO)rQYO<<KsOHcQWO<<KsOOQQ<<Kv<<KvO5VQ!LYO<<KvO#2pQWO<<KvO4{QWO<<KvO%>PQ&jO1G4UO%>UQWO7+*vOOQQAN=ZAN=ZO5VQ!LYOAN=ZOOQQ<<Ne<<NeOOQQ<<Nf<<NfOOQQ<<LO<<LOO%>^QWO<<LOO%>cQYO<<LOO%>jQWO<<NeO%>oQWO<<NfOOQQ1G3Y1G3YOOQQANA}ANA}O9uQWOANA}O%>tQ7^O<<IeOOQO<<Hj<<HjOOQO7+%n7+%nO%,eQ!LdO7+%nO)rQYO7+%nOOQO7+%j7+%jO9uQWO7+%jO%?OQ!LYO7+%nO!+aQpO7+%jO%?ZQ!LYO7+%nO!%kQ&jO7+%jO%?iQ!LYO7+%nOOQ!LSAN>yAN>yO%?}Q!LdO<<K]O%BVQ7^O<<IzO%BdQ7^O1G1pO%DSQ7^O1G2RO%FPQ7^O1G2TO%G|Q7^O<<JjO%HZQ7^O<<I`OOQO1G1Z1G1ZOOQO7+)f7+)fO%HhQWO7+)fO%HsQWO<<N[O%H{Q`O7+)hOOQO<<KQ<<KQO5VQ!LYO<<KRO$(tQWO<<KROOQO<<KP<<KPO5VQ!LYO<<KQO%IVQ`O<<KRO$(tQWO<<KQOOQQG26eG26eO#EwQWOG26eOOQO7+)q7+)qOOQQG27QG27QO5VQ!LYOG27QOHcQWOG26eOK^QYO1G4RO%I^QWO7+*uO5VQ!LYO1G2oO#2pQWO1G2oO4{QWO1G2oO!+aQpO1G2oO!%kQ&jO1G2oO%-nQ!LrO1G0SO%IfQ&jO1G2oO%*TQWOANA_OOQQANA_ANA_OHcQWOANA_O%ItQWOANA_O%I|Q`OANA_OOQQANAbANAbO5VQ!LYOANAbO#2pQWOANAbOOQO'#Gm'#GmOOQO7+)p7+)pOOQQG22uG22uOOQQANAjANAjO%JWQWOANAjOOQQANDPANDPOOQQANDQANDQO%J]QYOG27iOOQO<<IY<<IYO%,eQ!LdO<<IYOOQO<<IU<<IUO)rQYO<<IYO9uQWO<<IUO%NWQ!LYO<<IYO!+aQpO<<IUO%NcQ!LYO<<IYO%NqQ7^O7+'^OOQO<<MQ<<MQOOQOAN@mAN@mO5VQ!LYOAN@mOOQOAN@lAN@lO$(tQWOAN@mO5VQ!LYOAN@lOOQQLD,PLD,POOQQLD,lLD,lO#EwQWOLD,PO&!aQ7^O7+)mOOQO7+(Z7+(ZO5VQ!LYO7+(ZO#2pQWO7+(ZO4{QWO7+(ZO!+aQpO7+(ZO!%kQ&jO7+(ZOOQQG26yG26yO%*TQWOG26yOHcQWOG26yOOQQG26|G26|O5VQ!LYOG26|OOQQG27UG27UO9uQWOLD-TOOQOAN>tAN>tO%,eQ!LdOAN>tOOQOAN>pAN>pO)rQYOAN>tO9uQWOAN>pO&!kQ!LYOAN>tO&!vQ7^O<<K]OOQOG26XG26XO5VQ!LYOG26XOOQOG26WG26WOOQQ!$( k!$( kOOQO<<Ku<<KuO5VQ!LYO<<KuO#2pQWO<<KuO4{QWO<<KuO!+aQpO<<KuOOQQLD,eLD,eO%*TQWOLD,eOOQQLD,hLD,hOOQQ!$(!o!$(!oOOQOG24`G24`O%,eQ!LdOG24`OOQOG24[G24[O)rQYOG24`OOQOLD+sLD+sOOQOANAaANAaO5VQ!LYOANAaO#2pQWOANAaO4{QWOANAaOOQQ!$(!P!$(!POOQOLD)zLD)zO%,eQ!LdOLD)zOOQOG26{G26{O5VQ!LYOG26{O#2pQWOG26{OOQO!$'Mf!$'MfOOQOLD,gLD,gO5VQ!LYOLD,gOOQO!$(!R!$(!ROK^QYO'#DmO&$fQbO'#IgOK^QYO'#DeO&$mQ!LdO'#CgO&%WQbO'#CgO&%hQYO,5:nOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO,5:xOK^QYO'#HsO&'eQWO,5;zO&(tQWO,5:xOK^QYO,5;]O!'TQWO'#CzO!'TQWO'#CzOHcQWO'#FaO&'mQWO'#FaOHcQWO'#FcO&'mQWO'#FcOHcQWO'#FqO&'mQWO'#FqOK^QYO,5?bO&%hQYO1G0YO&({Q7^O'#CgOK^QYO1G1cOHcQWO,5<gO&'mQWO,5<gOHcQWO,5<iO&'mQWO,5<iOHcQWO,5<UO&'mQWO,5<UO&%hQYO1G1dOK^QYO7+&`OHcQWO1G1rO&'mQWO1G1rO&%hQYO7+'OO&%hQYO7+%tOHcQWO7+'qO&'mQWO7+'qO&)VQWO'#ESO&)[QWO'#ESO&)dQWO'#EqO&)iQWO'#IvO&)tQWO'#ItO&*PQWO,5:nO&*UQ#tO,5;wO&*]QWO'#FjO&*bQWO'#FjO&*gQWO,5;xO&*oQWO,5:nO&*wQ7^O1G0tO&+OQWO,5<WO&+TQWO,5<WO&+YQWO1G1dO&+_QWO1G0YO&+dQ#tO1G2VO&+kQ#tO1G2VO3qQWO'#F_O4{QWO'#F^OBYQWO'#EROK^QYO,5;YO!'_QWO'#FlO!'_QWO'#FlOIoQWO,5<kOIoQWO,5<k",
  stateData: "&,e~O&}OSSOSTOS~OPTOQTOWwO]bO^gOamOblOgbOiTOjbOkbOmTOoTOtROvbOwbOxbO!OSO!YjO!_UO!bTO!cTO!dTO!eTO!fTO!ikO#ZqO#knO#o]O$voO$xrO$zpO${pO%OsO%QtO%TuO%UuO%WvO%exO%kyO%mzO%o{O%q|O%t}O%z!OO&O!PO&Q!QO&S!RO&U!SO&W!TO'PPO']QO'q`O~OPZXYZX^ZXiZXqZXrZXtZX|ZX![ZX!]ZX!_ZX!eZX!tZX#OcX#RZX#SZX#TZX#UZX#VZX#WZX#XZX#YZX#[ZX#^ZX#`ZX#aZX#fZX&{ZX']ZX'eZX'lZX'mZX~O!W$cX~P$tO&x!VO&y!UO&z!XO~OPTOQTO]bOa!hOb!gOgbOiTOjbOkbOmTOoTOtROvbOwbOxbO!O!`O!YjO!_UO!bTO!cTO!dTO!eTO!fTO!i!fO#k!iO#o]O'P!YO']QO'q`O~O{!^O|!ZOy'`Py'iP~P'^O}!jO~P]OPTOQTO]bOa!hOb!gOgbOiTOjbOkbOmTOoTOtROvbOwbOxbO!O!`O!YjO!_UO!bTO!cTO!dTO!eTO!fTO!i!fO#k!iO#o]O'P8cO']QO'q`O~OPTOQTO]bOa!hOb!gOgbOiTOjbOkbOmTOoTOtROvbOwbOxbO!O!`O!YjO!_UO!bTO!cTO!dTO!eTO!fTO!i!fO#k!iO#o]O']QO'q`O~O{!oO!|!rO!}!oO'P8dO!^'fP~P+oO#O!sO~O!W!tO#O!sO~OP#ZOY#aOi#OOq!xOr!xOt!yO|#_O![#QO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO#W#QO#X#QO#Y#QO#[#RO#^#TO#`#VO#a#WO']QO'e#XO'l!zO'm!{O~O^'ZX&{'ZX!^'ZXy'ZX!O'ZX$w'ZX!W'ZX~P.ZO!t#bO#f#bOP'[XY'[X^'[Xi'[Xq'[Xr'[Xt'[X|'[X!['[X!]'[X!_'[X!e'[X#R'[X#S'[X#T'[X#U'[X#V'[X#W'[X#Y'[X#['[X#^'[X#`'[X#a'[X']'[X'e'[X'l'[X'm'[X~O#X'[X&{'[Xy'[X!^'[X'_'[X!O'[X$w'[X!W'[X~P0kO!t#bO~O#q#cO#x#gO~O!O#hO#o]O#{#iO#}#kO~O]#nOg#zOi#oOj#nOk#nOm#{Oo#|Ot#tO!O#uO!Y$RO!_#rO!}$SO#k$PO$U#}O$W$OO$Z$QO'P#mO'T'VP~O!_$TO~O!W$VO~O^$WO&{$WO~O'P$[O~O!_$TO'P$[O'Q$^O'U$_O~Ob$eO!_$TO'P$[O~O]$nOq$jO!O$gO!_$iO$x$mO'P$[O'Q$^O['yP~O!i$oO~Ot$pO!O$qO'P$[O~Ot$pO!O$qO%Q$uO'P$[O~O'P$vO~O#ZqO$xrO$zpO${pO%OsO%QtO%TuO%UuO~Oa%POb%OO!i$|O$v$}O%Y${O~P7^Oa%SOblO!O%RO!ikO#ZqO$voO$zpO${pO%OsO%QtO%TuO%UuO%WvO~O_%VO!t%YO$x%TO'Q$^O~P8]O!_%ZO!b%_O~O!_%`O~O!OSO~O^$WO&w%hO&{$WO~O^$WO&w%kO&{$WO~O^$WO&w%mO&{$WO~O&x!VO&y!UO&z%qO~OPZXYZXiZXqZXrZXtZX|ZX|cX![ZX!]ZX!_ZX!eZX!tZX!tcX#OcX#RZX#SZX#TZX#UZX#VZX#WZX#XZX#YZX#[ZX#^ZX#`ZX#aZX#fZX']ZX'eZX'lZX'mZX~OyZXycX~P:xO{%sOy&]X|&]X~P)rO|!ZOy'`X~OP#ZOY#aOi#OOq!xOr!xOt!yO|!ZO![#QO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO#W#QO#X#QO#Y#QO#[#RO#^#TO#`#VO#a#WO']QO'e#XO'l!zO'm!{O~Oy'`X~P=oOy%xO~Ot%{O!R&VO!S&OO!T&OO'Q$^O~O]%|Oj%|O{&PO'Y%yO}'aP}'kP~P?rOy'hX|'hX!W'hX!^'hX'e'hX~O!t'hX#O!wX}'hX~P@kO!t&WOy'jX|'jX~O|&XOy'iX~Oy&ZO~O!t#bO~P@kOR&_O!O&[O!j&^O'P$[O~Ob&dO!_$TO'P$[O~Oq$jO!_$iO~O}&eO~P]Oq!xOr!xOt!yO!]!vO!_!wO']QOP!aaY!aai!aa|!aa![!aa!e!aa#R!aa#S!aa#T!aa#U!aa#V!aa#W!aa#X!aa#Y!aa#[!aa#^!aa#`!aa#a!aa'e!aa'l!aa'm!aa~O^!aa&{!aay!aa!^!aa'_!aa!O!aa$w!aa!W!aa~PBtO!^&fO~O!W!tO!t&hO'e&gO|'gX^'gX&{'gX~O!^'gX~PE^O|&lO!^'fX~O!^&nO~Ot$pO!O$qO!}&oO'P$[O~OPTOQTO]bOa!hOb!gOgbOiTOjbOkbOmTOoTOtROvbOwbOxbO!OSO!YjO!_UO!bTO!cTO!dTO!eTO!fTO!i!fO#k!iO#o]O'P8cO']QO'q`O~O]#nOg#zOi#oOj#nOk#nOm#{Oo8uOt#tO!O#uO!Y9wO!_#rO!}8{O#k$PO$U8wO$W8yO$Z$QO'P&sO~O#O&uO~O]#nOg#zOi#oOj#nOk#nOm#{Oo#|Ot#tO!O#uO!Y$RO!_#rO!}$SO#k$PO$U#}O$W$OO$Z$QO'P&sO~O'T'cP~PIoO{&yO!^'dP~P)rO'Y&{O~OP8`OQ8`O]bOa9uOb!gOgbOi8`OjbOkbOm8`Oo8`OtROvbOwbOxbO!O!`O!Y8bO!_UO!b8`O!c8`O!d8`O!e8`O!f8`O!i!fO#k!iO#o]O'P'ZO']QO'q9sO~O!_!wO~O|#_O^$Sa&{$Sa!^$Say$Sa!O$Sa$w$Sa!W$Sa~O#Z'bO~PHcO!W'dO!O'nX#n'nX#q'nX#x'nX~Oq'eO~PNROq'eO!O'nX#n'nX#q'nX#x'nX~O!O'gO#n'kO#q'fO#x'lO~O{'oO~PK^O#q#cO#x'rO~Oq$[Xt$[X!]$[X'e$[X'l$[X'm$[X~OReX|eX!teX'TeX'T$[X~P! kOj'tO~Oq'vOt'wO'e#XO'l'yO'm'{O~O'T'uO~P!!iO'T(OO~O]#nOg#zOi#oOj#nOk#nOm#{Oo8uOt#tO!O#uO!Y9wO!_#rO!}8{O#k$PO$U8wO$W8yO$Z$QO~O{(SO'P(PO!^'rP~P!#WO#O(UO~O{(YO'P(VOy'sP~P!#WO^(cOi(hOt(`O!R(fO!S(_O!T(_O!_(]O!q(gO$n(bO'Q$^O'Y([O~O}(eO~P!${O!]!vOq'XXt'XX'e'XX'l'XX'm'XX|'XX!t'XX~O'T'XX#d'XX~P!%wOR(kO!t(jO|'WX'T'WX~O|(lO'T'VX~O'P(nO~O!_(sO~O!_(]O~Ot$pO{!oO!O$qO!|!rO!}!oO'P$[O!^'fP~O!W!tO#O(wO~OP#ZOY#aOi#OOq!xOr!xOt!yO![#QO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO#W#QO#X#QO#Y#QO#[#RO#^#TO#`#VO#a#WO']QO'e#XO'l!zO'm!{O~O^!Xa|!Xa&{!Xay!Xa!^!Xa'_!Xa!O!Xa$w!Xa!W!Xa~P!(TOR)PO!O&[O!j)OO$w(}O'U$_O~O'P$vO'T'VP~O!W)SO!O'SX^'SX&{'SX~O!_$TO'U$_O~O!_$TO'P$[O'U$_O~O!W!tO#O&uO~O'P)[O}'zP~O|)`O['yX~OY)dO~O[)eO~O!O$gO'P$[O'Q$^O['yP~Ot$pO{)jO!O$qO'P$[Oy'iP~O]&SOj&SO{)kO'Y&{O}'kP~O|)lO^'vX&{'vX~O!t)pO'U$_O~OR)sO!O#uO'U$_O~O!O)uO~Oq)wO!OSO~O!i)|O~Ob*RO~O'P(nO}'xP~Ob$eO~O$xrO'P$vO~P8]OY*XO[*WO~OPTOQTO]bOamOblOgbOiTOjbOkbOmTOoTOtROvbOwbOxbO!YjO!_UO!bTO!cTO!dTO!eTO!fTO!ikO#o]O$voO']QO'q`O~O!O!`O#k!iO'P8cO~P!/bO[*WO^$WO&{$WO~O^*]O#Z*_O$z*_O${*_O~P)rO!_%ZO~O%k*dO~O!O*fO~O%{*iO%|*hOP%yaQ%yaW%ya]%ya^%yaa%yab%yag%yai%yaj%yak%yam%yao%yat%yav%yaw%yax%ya!O%ya!Y%ya!_%ya!b%ya!c%ya!d%ya!e%ya!f%ya!i%ya#Z%ya#k%ya#o%ya$v%ya$x%ya$z%ya${%ya%O%ya%Q%ya%T%ya%U%ya%W%ya%e%ya%k%ya%m%ya%o%ya%q%ya%t%ya%z%ya&O%ya&Q%ya&S%ya&U%ya&W%ya&v%ya'P%ya']%ya'q%ya}%ya%r%ya_%ya%w%ya~O'P*lO~O'_*oO~Oy&]a|&]a~P!(TO|!ZOy'`a~Oy'`a~P=oO|&XOy'ia~O|sX|!UX}sX}!UX!WsX!W!UX!_!UX!tsX'U!UX~O!W*vO!t*uO|!{X|'bX}!{X}'bX!W'bX!_'bX'U'bX~O!W*xO!_$TO'U$_O|!QX}!QX~O]%zOj%zOt%{O'Y([O~OP8`OQ8`O]bOa9uOb!gOgbOi8`OjbOkbOm8`Oo8`OtROvbOwbOxbO!O!`O!Y8bO!_UO!b8`O!c8`O!d8`O!e8`O!f8`O!i!fO#k!iO#o]O']QO'q9sO~O'P9PO~P!9YO|*|O}'aX~O}+OO~O!W*vO!t*uO|!{X}!{X~O|+PO}'kX~O}+RO~O]%zOj%zOt%{O'Q$^O'Y([O~O!S+SO!T+SO~P!<TOt$pO{+VO!O$qO'P$[Oy&bX|&bX~O^+ZO!R+^O!S+YO!T+YO!m+`O!n+_O!o+_O!q+aO'Q$^O'Y([O~O}+]O~P!=UOR+fO!O&[O!j+eO~O!t+lO|'ga!^'ga^'ga&{'ga~O!W!tO~P!>YO|&lO!^'fa~Ot$pO{+oO!O$qO!|+qO!}+oO'P$[O|&dX!^&dX~O^!vi|!vi&{!viy!vi!^!vi'_!vi!O!vi$w!vi!W!vi~P!(TO#O!sa|!sa!^!sa!t!sa!O!sa^!sa&{!say!sa~P!!iO#O'XXP'XXY'XX^'XXi'XXr'XX!['XX!_'XX!e'XX#R'XX#S'XX#T'XX#U'XX#V'XX#W'XX#X'XX#Y'XX#['XX#^'XX#`'XX#a'XX&{'XX']'XX!^'XXy'XX!O'XX$w'XX'_'XX!W'XX~P!%wO|+zO'T'cX~P!!iO'T+|O~O|+}O!^'dX~P!(TO!^,QO~Oy,RO~OP#ZOq!xOr!xOt!yO!]!vO!_!wO!e#ZO']QOY#Qi^#Qii#Qi|#Qi![#Qi#S#Qi#T#Qi#U#Qi#V#Qi#W#Qi#X#Qi#Y#Qi#[#Qi#^#Qi#`#Qi#a#Qi&{#Qi'e#Qi'l#Qi'm#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~O#R#Qi~P!CgO#R!|O~P!CgOP#ZOq!xOr!xOt!yO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O']QOY#Qi^#Qi|#Qi![#Qi#V#Qi#W#Qi#X#Qi#Y#Qi#[#Qi#^#Qi#`#Qi#a#Qi&{#Qi'e#Qi'l#Qi'm#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~Oi#Qi~P!FROi#OO~P!FROP#ZOi#OOq!xOr!xOt!yO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO']QO^#Qi|#Qi#[#Qi#^#Qi#`#Qi#a#Qi&{#Qi'e#Qi'l#Qi'm#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~OY#Qi![#Qi#W#Qi#X#Qi#Y#Qi~P!HmOY#aO![#QO#W#QO#X#QO#Y#QO~P!HmOP#ZOY#aOi#OOq!xOr!xOt!yO![#QO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO#W#QO#X#QO#Y#QO#[#RO']QO^#Qi|#Qi#^#Qi#`#Qi#a#Qi&{#Qi'e#Qi'm#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~O'l#Qi~P!KeO'l!zO~P!KeOP#ZOY#aOi#OOq!xOr!xOt!yO![#QO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO#W#QO#X#QO#Y#QO#[#RO#^#TO']QO'l!zO^#Qi|#Qi#`#Qi#a#Qi&{#Qi'e#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~O'm#Qi~P!NPO'm!{O~P!NPOP#ZOY#aOi#OOq!xOr!xOt!yO![#QO!]!vO!_!wO!e#ZO#R!|O#S!}O#T!}O#U!}O#V#PO#W#QO#X#QO#Y#QO#[#RO#^#TO#`#VO']QO'l!zO'm!{O~O^#Qi|#Qi#a#Qi&{#Qi'e#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~P#!kOPZXYZXiZXqZXrZXtZX![ZX!]ZX!_ZX!eZX!tZX#OcX#RZX#SZX#TZX#UZX#VZX#WZX#XZX#YZX#[ZX#^ZX#`ZX#aZX#fZX']ZX'eZX'lZX'mZX|ZX}ZX~O#dZX~P#%OOP#ZOY8sOi8hOq!xOr!xOt!yO![8jO!]!vO!_!wO!e#ZO#R8fO#S8gO#T8gO#U8gO#V8iO#W8jO#X8jO#Y8jO#[8kO#^8mO#`8oO#a8pO']QO'e#XO'l!zO'm!{O~O#d,TO~P#'YOP'[XY'[Xi'[Xq'[Xr'[Xt'[X!['[X!]'[X!_'[X!e'[X#R'[X#S'[X#T'[X#U'[X#V'[X#W'[X#Y'[X#['[X#^'[X#`'[X#a'[X']'[X'e'[X'l'[X'm'[X|'[X~O!t8tO#f8tO#X'[X#d'[X}'[X~P#)TO^&ga|&ga&{&ga!^&ga'_&gay&ga!O&ga$w&ga!W&ga~P!(TOP#QiY#Qi^#Qii#Qir#Qi|#Qi![#Qi!]#Qi!_#Qi!e#Qi#R#Qi#S#Qi#T#Qi#U#Qi#V#Qi#W#Qi#X#Qi#Y#Qi#[#Qi#^#Qi#`#Qi#a#Qi&{#Qi']#Qiy#Qi!^#Qi'_#Qi!O#Qi$w#Qi!W#Qi~P!!iO^#ei|#ei&{#eiy#ei!^#ei'_#ei!O#ei$w#ei!W#ei~P!(TO#q,VO~O#q,WO~O!W'dO!t,XO!O#uX#n#uX#q#uX#x#uX~O{,YO~O!O'gO#n,[O#q'fO#x,]O~O|8qO}'ZX~P#'YO},^O~O#x,`O~O],cOj,cOy,dO~O|cX!WcX!^cX!^$[X'ecX~P! kO!^,jO~P!!iO|,kO!W!tO'e&gO!^'rX~O!^,pO~Oy$[X|$[X!W$cX~P! kO|,rOy'sX~P!!iO!W,tO~Oy,vO~O{(SO'P$[O!^'rP~Oi,zO!W!tO!_$TO'U$_O'e&gO~O!W)SO~O}-QO~P!${O!S-RO!T-RO'Q$^O'Y([O~Ot-TO'Y([O~O!q-UO~O'P$vO|&lX'T&lX~O|(lO'T'Va~Oq-ZOr-ZOt-[O'ena'lna'mna|na!tna~O'Tna#dna~P#3|Oq'vOt'wO'e$Ta'l$Ta'm$Ta|$Ta!t$Ta~O'T$Ta#d$Ta~P#4rOq'vOt'wO'e$Va'l$Va'm$Va|$Va!t$Va~O'T$Va#d$Va~P#5eO]-]O~O#O-^O~O'T$ea|$ea#d$ea!t$ea~P!!iO#O-aO~OR-jO!O&[O!j-iO$w-hO~O'T-kO~O]#nOi#oOj#nOk#nOm#{Oo8uOt#tO!O#uO!Y9wO!_#rO!}8{O#k$PO$U8wO$W8yO$Z$QO~Og-mO'P-lO~P#7[O!W)SO!O'Sa^'Sa&{'Sa~O#O-sO~OYZX|cX}cX~O|-tO}'zX~O}-vO~OY-wO~O!O$gO'P$[O[&tX|&tX~O|)`O['ya~O!^-zO~P!(TO]-|O~OY-}O~O[.OO~OR-jO!O&[O!j-iO$w-hO'U$_O~O|)lO^'va&{'va~O!t.UO~OR.XO!O#uO~O'Y&{O}'wP~OR.cO!O._O!j.bO$w.aO'U$_O~OY.mO|.kO}'xX~O}.nO~O[.pO^$WO&{$WO~O].qO~O#X.sO%i.tO~P0kO!t#bO#X.sO%i.tO~O^.uO~P)rO^.wO~O%r.{OP%piQ%piW%pi]%pi^%pia%pib%pig%pii%pij%pik%pim%pio%pit%piv%piw%pix%pi!O%pi!Y%pi!_%pi!b%pi!c%pi!d%pi!e%pi!f%pi!i%pi#Z%pi#k%pi#o%pi$v%pi$x%pi$z%pi${%pi%O%pi%Q%pi%T%pi%U%pi%W%pi%e%pi%k%pi%m%pi%o%pi%q%pi%t%pi%z%pi&O%pi&Q%pi&S%pi&U%pi&W%pi&v%pi'P%pi']%pi'q%pi}%pi_%pi%w%pi~O_/RO}/PO%w/QO~P]O!OSO!_/UO~O|#_O'_$Sa~Oy&]i|&]i~P!(TO|!ZOy'`i~O|&XOy'ii~Oy/YO~O|!Qa}!Qa~P#'YO]%zOj%zO{/`O'Y([O|&^X}&^X~P?rO|*|O}'aa~O]&SOj&SO{)kO'Y&{O|&cX}&cX~O|+PO}'ka~Oy'ji|'ji~P!(TO^$WO!W!tO!_$TO!e/kO!t/iO&{$WO'U$_O'e&gO~O}/nO~P!=UO!S/oO!T/oO'Q$^O'Y([O~O!R/qO!S/oO!T/oO!q/rO'Q$^O'Y([O~O!n/sO!o/sO~P#EXO!O&[O~O!O&[O~P!!iO|'gi!^'gi^'gi&{'gi~P!(TO!t/|O|'gi!^'gi^'gi&{'gi~O|&lO!^'fi~Ot$pO!O$qO!}0OO'P$[O~O#OnaPnaYna^naina![na!]na!_na!ena#Rna#Sna#Tna#Una#Vna#Wna#Xna#Yna#[na#^na#`na#ana&{na']na!^nayna!Ona$wna'_na!Wna~P#3|O#O$TaP$TaY$Ta^$Tai$Tar$Ta![$Ta!]$Ta!_$Ta!e$Ta#R$Ta#S$Ta#T$Ta#U$Ta#V$Ta#W$Ta#X$Ta#Y$Ta#[$Ta#^$Ta#`$Ta#a$Ta&{$Ta']$Ta!^$Tay$Ta!O$Ta$w$Ta'_$Ta!W$Ta~P#4rO#O$VaP$VaY$Va^$Vai$Var$Va![$Va!]$Va!_$Va!e$Va#R$Va#S$Va#T$Va#U$Va#V$Va#W$Va#X$Va#Y$Va#[$Va#^$Va#`$Va#a$Va&{$Va']$Va!^$Vay$Va!O$Va$w$Va'_$Va!W$Va~P#5eO#O$eaP$eaY$ea^$eai$ear$ea|$ea![$ea!]$ea!_$ea!e$ea#R$ea#S$ea#T$ea#U$ea#V$ea#W$ea#X$ea#Y$ea#[$ea#^$ea#`$ea#a$ea&{$ea']$ea!^$eay$ea!O$ea!t$ea$w$ea'_$ea!W$ea~P!!iO^!vq|!vq&{!vqy!vq!^!vq'_!vq!O!vq$w!vq!W!vq~P!(TO|&_X'T&_X~PIoO|+zO'T'ca~O{0WO|&`X!^&`X~P)rO|+}O!^'da~O|+}O!^'da~P!(TO#d!aa}!aa~PBtO#d!Xa|!Xa}!Xa~P#'YO!O0kO#o]O#v0lO~O}0pO~O^$Pq|$Pq&{$Pqy$Pq!^$Pq'_$Pq!O$Pq$w$Pq!W$Pq~P!(TOy0qO~O],cOj,cO~Oq'vOt'wO'm'{O'e$oi'l$oi|$oi!t$oi~O'T$oi#d$oi~P$%SOq'vOt'wO'e$qi'l$qi'm$qi|$qi!t$qi~O'T$qi#d$qi~P$%uO#d0rO~P!!iO{0tO'P$[O|&hX!^&hX~O|,kO!^'ra~O|,kO!W!tO!^'ra~O|,kO!W!tO'e&gO!^'ra~O'T$^i|$^i#d$^i!t$^i~P!!iO{0{O'P(VOy&jX|&jX~P!#WO|,rOy'sa~O|,rOy'sa~P!!iO!W!tO~O!W!tO#X1VO~Oi1ZO!W!tO'e&gO~O|'Wi'T'Wi~P!!iO!t1^O|'Wi'T'Wi~P!!iO!^1aO~O^$Qq|$Qq&{$Qqy$Qq!^$Qq'_$Qq!O$Qq$w$Qq!W$Qq~P!(TO|1eO!O'tX~P!!iO!O&[O$w1hO~O!O&[O$w1hO~P!!iO!O$[X$lZX^$[X&{$[X~P! kO$l1lOqfXtfX!OfX'efX'lfX'mfX^fX&{fX~O$l1lO~O'P)[O|&sX}&sX~O|-tO}'za~O[1uO~O]1xO~OR1zO!O&[O!j1yO$w1hO~O^$WO&{$WO~P!!iO!O#uO~P!!iO|2PO!t2RO}'wX~O}2SO~Ot(`O!R2]O!S2UO!T2UO!m2[O!n2ZO!o2ZO!q2YO'Q$^O'Y([O~O}2XO~P$-{OR2dO!O._O!j2cO$w2bO~OR2dO!O._O!j2cO$w2bO'U$_O~O'P(nO|&rX}&rX~O|.kO}'xa~O'Y2mO~O]2oO~O[2qO~O!^2tO~P)rO^2vO~O^2vO~P)rO#X2xO%i2yO~PE^O_/RO}2}O%w/QO~P]O!W3PO~O%|3QOP%yqQ%yqW%yq]%yq^%yqa%yqb%yqg%yqi%yqj%yqk%yqm%yqo%yqt%yqv%yqw%yqx%yq!O%yq!Y%yq!_%yq!b%yq!c%yq!d%yq!e%yq!f%yq!i%yq#Z%yq#k%yq#o%yq$v%yq$x%yq$z%yq${%yq%O%yq%Q%yq%T%yq%U%yq%W%yq%e%yq%k%yq%m%yq%o%yq%q%yq%t%yq%z%yq&O%yq&Q%yq&S%yq&U%yq&W%yq&v%yq'P%yq']%yq'q%yq}%yq%r%yq_%yq%w%yq~O|!{i}!{i~P#'YO!t3SO|!{i}!{i~O|!Qi}!Qi~P#'YO^$WO!t3ZO&{$WO~O^$WO!W!tO!t3ZO&{$WO~O^$WO!W!tO!_$TO!e3_O!t3ZO&{$WO'U$_O'e&gO~O!S3`O!T3`O'Q$^O'Y([O~O!R3cO!S3`O!T3`O!q3dO'Q$^O'Y([O~O^$WO!W!tO!e3_O!t3ZO&{$WO'e&gO~O|'gq!^'gq^'gq&{'gq~P!(TO|&lO!^'fq~O#O$oiP$oiY$oi^$oii$oir$oi![$oi!]$oi!_$oi!e$oi#R$oi#S$oi#T$oi#U$oi#V$oi#W$oi#X$oi#Y$oi#[$oi#^$oi#`$oi#a$oi&{$oi']$oi!^$oiy$oi!O$oi$w$oi'_$oi!W$oi~P$%SO#O$qiP$qiY$qi^$qii$qir$qi![$qi!]$qi!_$qi!e$qi#R$qi#S$qi#T$qi#U$qi#V$qi#W$qi#X$qi#Y$qi#[$qi#^$qi#`$qi#a$qi&{$qi']$qi!^$qiy$qi!O$qi$w$qi'_$qi!W$qi~P$%uO#O$^iP$^iY$^i^$^ii$^ir$^i|$^i![$^i!]$^i!_$^i!e$^i#R$^i#S$^i#T$^i#U$^i#V$^i#W$^i#X$^i#Y$^i#[$^i#^$^i#`$^i#a$^i&{$^i']$^i!^$^iy$^i!O$^i!t$^i$w$^i'_$^i!W$^i~P!!iO|&_a'T&_a~P!!iO|&`a!^&`a~P!(TO|+}O!^'di~O#d!vi|!vi}!vi~P#'YOP#ZOq!xOr!xOt!yO!]!vO!_!wO!e#ZO']QOY#Qii#Qi![#Qi#S#Qi#T#Qi#U#Qi#V#Qi#W#Qi#X#Qi#Y#Qi#[#Qi#^#Qi#`#Qi#a#Qi#d#Qi'e#Qi'l#Qi'm#Qi|#Qi}#Qi~O#R#Qi~P$?rO#R8fO~P$?rOP#ZOq!xOr!xOt!yO!]!vO!_!wO!e#ZO#R8fO#S8gO#T8gO#U8gO']QOY#Qi![#Qi#V#Qi#W#Qi#X#Qi#Y#Qi#[#Qi#^#Qi#`#Qi#a#Qi#d#Qi'e#Qi'l#Qi'm#Qi|#Qi}#Qi~Oi#Qi~P$AzOi8hO~P$AzOP#ZOi8hOq!xOr!xOt!yO!]!vO!_!wO!e#ZO#R8fO#S8gO#T8gO#U8gO#V8iO']QO#[#Qi#^#Qi#`#Qi#a#Qi#d#Qi'e#Qi'l#Qi'm#Qi|#Qi}#Qi~OY#Qi![#Qi#W#Qi#X#Qi#Y#Qi~P$DSOY8sO![8jO#W8jO#X8jO#Y8jO~P$DSOP#ZOY8sOi8hOq!xOr!xOt!yO![8jO!]!vO!_!wO!e#ZO#R8fO#S8gO#T8gO#U8gO#V8iO#W8jO#X8jO#Y8jO#[8kO']QO#^#Qi#`#Qi#a#Qi#d#Qi'e#Qi'm#Qi|#Qi}#Qi~O'l#Qi~P$FhO'l!zO~P$FhOP#ZOY8sOi8hOq!xOr!xOt!yO![8jO!]!vO!_!wO!e#ZO#R8fO#S8gO#T8gO#U8gO#V8iO#W8jO#X8jO#Y8jO#[8kO#^8mO']QO'l!zO#`#Qi#a#Qi#d#Qi'e#Qi|#Qi}#Qi~O'm#Qi~P$HpO'm!{O~P$HpOP#ZOY8sOi8hOq!xOr!xOt!yO![8jO!]!vO!_!wO!e#ZO#R8fO#S8gO#T8gO#U8gO#V8iO#W8jO#X8jO#Y8jO#[8kO#^8mO#`8oO']QO'l!zO'm!{O~O#a#Qi#d#Qi'e#Qi|#Qi}#Qi~P$JxO^#by|#by&{#byy#by!^#by'_#by!O#by$w#by!W#by~P!(TOP#QiY#Qii#Qir#Qi![#Qi!]#Qi!_#Qi!e#Qi#R#Qi#S#Qi#T#Qi#U#Qi#V#Qi#W#Qi#X#Qi#Y#Qi#[#Qi#^#Qi#`#Qi#a#Qi#d#Qi']#Qi|#Qi}#Qi~P!!iO!]!vOP'XXY'XXi'XXq'XXr'XXt'XX!['XX!_'XX!e'XX#R'XX#S'XX#T'XX#U'XX#V'XX#W'XX#X'XX#Y'XX#['XX#^'XX#`'XX#a'XX#d'XX']'XX'e'XX'l'XX'm'XX|'XX}'XX~O#d#ei|#ei}#ei~P#'YO}3tO~O|&ga}&ga~P#'YO!W!tO'e&gO|&ha!^&ha~O|,kO!^'ri~O|,kO!W!tO!^'ri~Oy&ja|&ja~P!!iO!W3{O~O|,rOy'si~P!!iO|,rOy'si~Oy4RO~O!W!tO#X4XO~Oi4YO!W!tO'e&gO~Oy4[O~O'T$`q|$`q#d$`q!t$`q~P!!iO^$Qy|$Qy&{$Qyy$Qy!^$Qy'_$Qy!O$Qy$w$Qy!W$Qy~P!(TO|1eO!O'ta~O!O&[O$w4aO~O!O&[O$w4aO~P!!iO^!vy|!vy&{!vyy!vy!^!vy'_!vy!O!vy$w!vy!W!vy~P!(TOY4dO~O|-tO}'zi~O]4fO~O[4gO~O'Y&{O|&oX}&oX~O|2PO}'wa~O}4tO~P$-{O!R4wO!S4vO!T4vO!q/rO'Q$^O'Y([O~O!n4xO!o4xO~P%)VO!S4vO!T4vO'Q$^O'Y([O~O!O._O~O!O._O$w4zO~O!O._O$w4zO~P!!iOR5PO!O._O!j5OO$w4zO~OY5UO|&ra}&ra~O|.kO}'xi~O]5XO~O!^5YO~O!^5ZO~O!^5[O~O!^5[O~P)rO^5^O~O!W5aO~O!^5cO~O|'ji}'ji~P#'YO^$WO&{$WO~P!(TO^$WO!t5hO&{$WO~O^$WO!W!tO!t5hO&{$WO~O^$WO!W!tO!e5mO!t5hO&{$WO'e&gO~O!_$TO'U$_O~P%-YO!S5nO!T5nO'Q$^O'Y([O~O|'gy!^'gy^'gy&{'gy~P!(TO#O$`qP$`qY$`q^$`qi$`qr$`q|$`q![$`q!]$`q!_$`q!e$`q#R$`q#S$`q#T$`q#U$`q#V$`q#W$`q#X$`q#Y$`q#[$`q#^$`q#`$`q#a$`q&{$`q']$`q!^$`qy$`q!O$`q!t$`q$w$`q'_$`q!W$`q~P!!iO|&`i!^&`i~P!(TO#d!vq|!vq}!vq~P#'YOq-ZOr-ZOt-[OPnaYnaina![na!]na!_na!ena#Rna#Sna#Tna#Una#Vna#Wna#Xna#Yna#[na#^na#`na#ana#dna']na'ena'lna'mna|na}na~Oq'vOt'wOP$TaY$Tai$Tar$Ta![$Ta!]$Ta!_$Ta!e$Ta#R$Ta#S$Ta#T$Ta#U$Ta#V$Ta#W$Ta#X$Ta#Y$Ta#[$Ta#^$Ta#`$Ta#a$Ta#d$Ta']$Ta'e$Ta'l$Ta'm$Ta|$Ta}$Ta~Oq'vOt'wOP$VaY$Vai$Var$Va![$Va!]$Va!_$Va!e$Va#R$Va#S$Va#T$Va#U$Va#V$Va#W$Va#X$Va#Y$Va#[$Va#^$Va#`$Va#a$Va#d$Va']$Va'e$Va'l$Va'm$Va|$Va}$Va~OP$eaY$eai$ear$ea![$ea!]$ea!_$ea!e$ea#R$ea#S$ea#T$ea#U$ea#V$ea#W$ea#X$ea#Y$ea#[$ea#^$ea#`$ea#a$ea#d$ea']$ea|$ea}$ea~P!!iO#d$Pq|$Pq}$Pq~P#'YO#d$Qq|$Qq}$Qq~P#'YO}5xO~O'T$sy|$sy#d$sy!t$sy~P!!iO!W!tO|&hi!^&hi~O!W!tO'e&gO|&hi!^&hi~O|,kO!^'rq~Oy&ji|&ji~P!!iO|,rOy'sq~Oy6PO~P!!iOy6PO~O|'Wy'T'Wy~P!!iO|&ma!O&ma~P!!iO!O$kq^$kq&{$kq~P!!iO|-tO}'zq~O]6YO~O!O&[O$w6ZO~O!O&[O$w6ZO~P!!iO!t6[O|&oa}&oa~O|2PO}'wi~P#'YO!S6bO!T6bO'Q$^O'Y([O~O!R6dO!S6bO!T6bO!q3dO'Q$^O'Y([O~O!O._O$w6gO~O!O._O$w6gO~P!!iO'Y6mO~O|.kO}'xq~O!^6pO~O!^6pO~P)rO!^6rO~O!^6sO~O|!{y}!{y~P#'YO^$WO!t6xO&{$WO~O^$WO!W!tO!t6xO&{$WO~O^$WO!W!tO!e6|O!t6xO&{$WO'e&gO~O#O$syP$syY$sy^$syi$syr$sy|$sy![$sy!]$sy!_$sy!e$sy#R$sy#S$sy#T$sy#U$sy#V$sy#W$sy#X$sy#Y$sy#[$sy#^$sy#`$sy#a$sy&{$sy']$sy!^$syy$sy!O$sy!t$sy$w$sy'_$sy!W$sy~P!!iO#d#by|#by}#by~P#'YOP$^iY$^ii$^ir$^i![$^i!]$^i!_$^i!e$^i#R$^i#S$^i#T$^i#U$^i#V$^i#W$^i#X$^i#Y$^i#[$^i#^$^i#`$^i#a$^i#d$^i']$^i|$^i}$^i~P!!iOq'vOt'wO'm'{OP$oiY$oii$oir$oi![$oi!]$oi!_$oi!e$oi#R$oi#S$oi#T$oi#U$oi#V$oi#W$oi#X$oi#Y$oi#[$oi#^$oi#`$oi#a$oi#d$oi']$oi'e$oi'l$oi|$oi}$oi~Oq'vOt'wOP$qiY$qii$qir$qi![$qi!]$qi!_$qi!e$qi#R$qi#S$qi#T$qi#U$qi#V$qi#W$qi#X$qi#Y$qi#[$qi#^$qi#`$qi#a$qi#d$qi']$qi'e$qi'l$qi'm$qi|$qi}$qi~O#d$Qy|$Qy}$Qy~P#'YO#d!vy|!vy}!vy~P#'YO!W!tO|&hq!^&hq~O|,kO!^'ry~Oy&jq|&jq~P!!iOy7SO~P!!iO|2PO}'wq~O!S7_O!T7_O'Q$^O'Y([O~O!O._O$w7bO~O!O._O$w7bO~P!!iO!^7eO~O%|7fOP%y!ZQ%y!ZW%y!Z]%y!Z^%y!Za%y!Zb%y!Zg%y!Zi%y!Zj%y!Zk%y!Zm%y!Zo%y!Zt%y!Zv%y!Zw%y!Zx%y!Z!O%y!Z!Y%y!Z!_%y!Z!b%y!Z!c%y!Z!d%y!Z!e%y!Z!f%y!Z!i%y!Z#Z%y!Z#k%y!Z#o%y!Z$v%y!Z$x%y!Z$z%y!Z${%y!Z%O%y!Z%Q%y!Z%T%y!Z%U%y!Z%W%y!Z%e%y!Z%k%y!Z%m%y!Z%o%y!Z%q%y!Z%t%y!Z%z%y!Z&O%y!Z&Q%y!Z&S%y!Z&U%y!Z&W%y!Z&v%y!Z'P%y!Z']%y!Z'q%y!Z}%y!Z%r%y!Z_%y!Z%w%y!Z~O^$WO!t7jO&{$WO~O^$WO!W!tO!t7jO&{$WO~OP$`qY$`qi$`qr$`q![$`q!]$`q!_$`q!e$`q#R$`q#S$`q#T$`q#U$`q#V$`q#W$`q#X$`q#Y$`q#[$`q#^$`q#`$`q#a$`q#d$`q']$`q|$`q}$`q~P!!iO|&oq}&oq~P#'YO^$WO!t8OO&{$WO~OP$syY$syi$syr$sy![$sy!]$sy!_$sy!e$sy#R$sy#S$sy#T$sy#U$sy#V$sy#W$sy#X$sy#Y$sy#[$sy#^$sy#`$sy#a$sy#d$sy']$sy|$sy}$sy~P!!iO'_'ZX~P.ZO'_ZXyZX!^ZX%iZX!OZX$wZX!WZX~P$tO!WcX!^ZX!^cX'ecX~P:xOP8`OQ8`O]bOa9uOb!gOgbOi8`OjbOkbOm8`Oo8`OtROvbOwbOxbO!OSO!Y8bO!_UO!b8`O!c8`O!d8`O!e8`O!f8`O!i!fO#k!iO#o]O'P'ZO']QO'q9sO~O|8qO}$Sa~O]#nOg#zOi#oOj#nOk#nOm#{Oo8vOt#tO!O#uO!Y9xO!_#rO!}8|O#k$PO$U8xO$W8zO$Z$QO'P&sO~O#Z'bO~P&'mO}ZX}cX~P:xO#O8eO~O!W!tO#O8eO~O!t8tO~O!t8}O|'jX}'jX~O!t8tO|'hX}'hX~O#O9OO~O'T9QO~P!!iO#O9VO~O#O9WO~O!W!tO#O9XO~O!W!tO#O9OO~O#d9YO~P#'YO#O9ZO~O#O9[O~O#O9]O~O#O9^O~O#d9_O~P!!iO#d9`O~P!!iO#o~!]!m!o!|!}'q$U$W$Z$l$v$w$x%O%Q%T%U%W%Y~TS#o'q#q'Y'P&}#Sx~",
  goto: "#<v(OPPPPPPP(PP(aP)|PPPP-]PP-r2v4i4|P4|PPP4|P4|P6iPP6nP7VPPPP;fPPPP;f>UPPP>[@_P;fPBrPPPPDj;fPPPPPFc;fPPIbJ_PPPJcPJkKlP;f;fNs!#l!([!([!+iPPP!+p;fPPPPPPPPPP!.dP!/uPP;f!1SP;fP;f;f;f;fP;f!3fPP!6]P!9O!9W!9[!9[P!6YP!9`!9`P!<RP!<V;f;f!<]!>}4|P4|P4|4|P!@Q4|4|!At4|4|4|!Cu4|4|!Dc!F[!F[!F`!F[!FhP!F[P4|!Gd4|!Hm4|4|-]PPP!IyPP!Jc!JcP!JcP!Jx!JcPP!KOP!JuP!Ju!KbJg!Ju!LP!LV!LY(P!L](PP!Ld!Ld!LdP(PP(PP(PP(PPP(PP!Lj!LmP!Lm(PPPP(PP(PP(PP(PP(PP(P(P!Lq!L{!MR!Ma!Mg!Mm!Mw!M}!NX!N_!Nm!Ns!Ny# X# n##P##_##e##k##q##w#$R#$X#$_#$i#$s#$yPPPPPPPP#%PPP#%s#)qPP#+U#+]#+eP#/n#2RP#7{P#8P#8S#8V#8b#8eP#8h#8l#9Z#:O#:S#:fPP#:j#:p#:tP#:w#:{#;O#;n#<U#<Z#<^#<a#<g#<j#<n#<rmgOSi{!k$V%^%a%b%d*a*f.{/OQ$dlQ$knQ%UwS&O!`*|Q&c!gS(_#u(dQ)Y$eQ)f$mQ*Q%OQ+S&VS+Y&[+[Q+j&dQ-R(fQ.j*RU/o+^+_+`S2U._2WS3`/q/sU4v2Z2[2]Q5n3cS6b4w4xR7_6d$lZORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#_#b$V$i%V%Y%^%`%a%b%d%h%s%{&W&^&h&u&y'u(w)O*]*a*f+e+l+},T-[-a-i-s.b.s.t.u.w.{/O/Q/i/|0W1y2c2v2x2y3Z5O5^5h6x7j8O!j']#Y#h&P'o*u*x,Y/`0k2R3S6[8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vQ(o#|Q)_$gQ*S%RQ*Z%ZQ+t8uQ-n)SQ.r*XQ1r-tQ2k.kR3m8vpdOSiw{!k$V%T%^%a%b%d*a*f.{/OR*U%V&WVOSTijm{!Q!U!Z!h!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h$V$i%V%Y%Z%^%`%a%b%d%h%s%{&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9u9vW!aRU!^&PQ$]kQ$clS$hn$mv$rpq!o!r$T$p&X&l&o)j)k)l*_*v+V+o+q/U0OQ$zuQ&`!fQ&b!gS(R#r(]S)X$d$eQ)]$gQ)i$oQ){$|Q*P%OS+i&c&dQ,o(SQ-r)YQ-x)`Q-{)dQ.e)|S.i*Q*RQ/z+jQ0s,kQ1q-tQ1t-wQ1w-}Q2j.jQ3x0tR6W4d!W$al!g$c$d$e%}&b&c&d(^)X)Y*y+X+i+j,{-r/e/l/p/z1Y3^3b5l6{Q)Q$]Q)q$wQ)t$xQ*O%OQ.P)iQ.d){U.h*P*Q*RQ2e.eS2i.i.jQ4q2TQ5T2jS6`4r4uS7]6a6cQ7u7^R8T7vW#x`$_(l9sS$wr%TQ$xsQ$ytR)o$u$T#w`!t!v#a#r#t#}$O$S&_'z'|'}(U(Y(j(k(})P)S)p)s+f+z,r,t-^-h-j.U.X.a.c0r0{1V1^1e1h1l1z2b2d3{4X4a4z5P6Z6g7b8s8w8x8y8z8{8|9R9S9T9U9V9W9Z9[9_9`9s9y9zV(p#|8u8vU&S!`$q+PQ&|!xQ)c$jQ,b'vQ.Y)uQ1_-ZR4m2P&YbORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h$V$i%V%Y%Z%^%`%a%b%d%h%s%{&P&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9v$]#^Y!]!l$Z%r%v&q&x'O'P'Q'R'S'T'U'V'W'X'Y'['_'c'm)b*q*z+T+k+y,P,S,U,a-_/Z/^/{0V0Z0[0]0^0_0`0a0b0c0d0e0f0g0j0o1c1o3U3X3h3k3l3q3r4o5d5g5r5v5w6v7X7h7|8W8a9l&ZbORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h$V$i%V%Y%Z%^%`%a%b%d%h%s%{&P&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vQ&Q!`R/a*|Y%z!`&O&V*|+SS(^#u(dS+X&[+[S,{(_(fQ,|(`Q-S(gQ.[)wS/l+Y+^S/p+_+`S/t+a2YQ1Y-RQ1[-TQ1]-US2T._2WS3^/o/qQ3a/rQ3b/sS4r2U2]S4u2Z2[S5l3`3cQ5o3dS6a4v4wQ6c4xQ6{5nS7^6b6dR7v7_lgOSi{!k$V%^%a%b%d*a*f.{/OQ%f!OS&p!s8eQ)V$bQ)y$zQ)z${Q+g&aS+x&u9OS-`(w9XQ-p)WQ.^)xQ/S*hQ/T*iQ/]*wQ/x+hS1d-a9]Q1m-qS1p-s9^Q3T/_Q3W/gQ3f/yQ4c1nQ5b3QQ5e3VQ5i3]Q5p3gQ6t5cQ6w5jQ7i6yQ7z7fR7}7k$W#]Y!]!l%r%v&q&x'O'P'Q'R'S'T'U'V'W'X'Y'['_'c'm)b*q*z+T+k+y,P,S,a-_/Z/^/{0V0Z0[0]0^0_0`0a0b0c0d0e0f0g0j0o1c1o3U3X3h3k3l3q3r4o5d5g5r5v5w6v7X7h7|8W8a9lU(i#v&t0iT({$Z,U$W#[Y!]!l%r%v&q&x'O'P'Q'R'S'T'U'V'W'X'Y'['_'c'm)b*q*z+T+k+y,P,S,a-_/Z/^/{0V0Z0[0]0^0_0`0a0b0c0d0e0f0g0j0o1c1o3U3X3h3k3l3q3r4o5d5g5r5v5w6v7X7h7|8W8a9lQ'^#]S(z$Z,UR-b({&YbORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h$V$i%V%Y%Z%^%`%a%b%d%h%s%{&P&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vQ%ayQ%bzQ%d|Q%e}R.z*dQ&]!fQ(|$]Q+d&`S-g)Q)iS/u+b+cW1g-d-e-f.PS3e/v/wU4`1i1j1kU6U4_4i4jQ7U6VR7q7WT+Z&[+[S+Z&[+[T2V._2WS&j!n.xQ,n(RQ,y(^S/k+X2TQ0x,oS1S,z-SU3_/p/t4uQ3w0sS4V1Z1]U5m3a3b6cQ5z3xQ6T4YR6|5oQ!uXS&i!n.xQ(x$UQ)T$`Q)Z$fQ+m&jQ,m(RQ,x(^Q,}(aQ-o)UQ.f)}S/j+X2TS0w,n,oS1R,y-SQ1U,|Q1X-OQ2g.gW3[/k/p/t4uQ3v0sQ3z0xS4P1S1]Q4W1[Q5R2hW5k3_3a3b6cS5y3w3xQ6O4RQ6R4VQ6^4pQ6k5SS6z5m5oQ7O5zQ7Q6PQ7T6TQ7Z6_Q7d6lQ7l6|Q7o7SQ7s7[Q8R7tQ8Y8SQ8^8ZQ9f9bQ9o9jR9p9k$nWORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#_#b$V$i%V%Y%Z%^%`%a%b%d%h%s%{&W&^&h&u&y'u(w)O*]*a*f+e+l+},T-[-a-i-s.b.s.t.u.w.{/O/Q/i/|0W1y2c2v2x2y3Z5O5^5h6x7j8OS!um!h!j9a#Y#h&P'o*u*x,Y/`0k2R3S6[8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vR9f9u$nXORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#_#b$V$i%V%Y%Z%^%`%a%b%d%h%s%{&W&^&h&u&y'u(w)O*]*a*f+e+l+},T-[-a-i-s.b.s.t.u.w.{/O/Q/i/|0W1y2c2v2x2y3Z5O5^5h6x7j8OQ$Ua!W$`l!g$c$d$e%}&b&c&d(^)X)Y*y+X+i+j,{-r/e/l/p/z1Y3^3b5l6{S$fm!hQ)U$aQ)}%OW.g*O*P*Q*RU2h.h.i.jQ4p2TS5S2i2jU6_4q4r4uQ6l5TU7[6`6a6cS7t7]7^S8S7u7vQ8Z8T!j9b#Y#h&P'o*u*x,Y/`0k2R3S6[8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vQ9j9tR9k9u$f[OSTij{!Q!U!Z!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#_#b$V$i%V%Y%^%`%a%b%d%h%s%{&W&^&h&u&y'u(w)O*]*a*f+e+l+},T-[-a-i-s.b.s.t.u.w.{/O/Q/i/|0W1y2c2v2x2y3Z5O5^5h6x7j8OU!eRU!^v$rpq!o!r$T$p&X&l&o)j)k)l*_*v+V+o+q/U0OQ*[%Z!h9c#Y#h'o*u*x,Y/`0k2R3S6[8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vR9e&PS&T!`$qR/c+P$lZORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#_#b$V$i%V%Y%^%`%a%b%d%h%s%{&W&^&h&u&y'u(w)O*]*a*f+e+l+},T-[-a-i-s.b.s.t.u.w.{/O/Q/i/|0W1y2c2v2x2y3Z5O5^5h6x7j8O!j']#Y#h&P'o*u*x,Y/`0k2R3S6[8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vR*Z%Z!h#SY!]$Z%r%v&q&x'V'W'X'Y'_'c)b*q+T+k+y,P,a-_/{0V0g1c1o3X3h3k5g6v7h7|8W8a!R8l'['m*z,U/Z/^0Z0c0d0e0f0j0o3U3l3q3r4o5d5r5v5w7X9l!d#UY!]$Z%r%v&q&x'X'Y'_'c)b*q+T+k+y,P,a-_/{0V0g1c1o3X3h3k5g6v7h7|8W8a}8n'['m*z,U/Z/^0Z0e0f0j0o3U3l3q3r4o5d5r5v5w7X9l!`#YY!]$Z%r%v&q&x'_'c)b*q+T+k+y,P,a-_/{0V0g1c1o3X3h3k5g6v7h7|8W8al'}#p&v(v,i,q-V-W0T1b3u4Z9g9q9rx9v'['m*z,U/Z/^0Z0j0o3U3l3q3r4o5d5r5v5w7X9l!^9y&r'a(Q(W+c+w,u-c-f.T.V/w0S0y0}1k1|2O2`3j3|4S4]4b4j4}5q5|6S6iZ9z0h3p5s6}7m&YbORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h$V$i%V%Y%Z%^%`%a%b%d%h%s%{&P&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vS#i_#jR0l,X&a^ORSTU_ij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h#j$V$i%V%Y%Z%^%`%a%b%d%h%s%{&P&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,X,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vS#d]#kT'f#f'jT#e]#kT'h#f'j&a_ORSTU_ij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#Y#_#b#h#j$V$i%V%Y%Z%^%`%a%b%d%h%s%{&P&W&^&h&u&y'o'u(w)O*]*a*f*u*x+e+l+},T,X,Y-[-a-i-s.b.s.t.u.w.{/O/Q/`/i/|0W0k1y2R2c2v2x2y3S3Z5O5^5h6[6x7j8O8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9vT#i_#jQ#l_R'q#j$naORSTUij{!Q!U!Z!^!k!s!w!y!|!}#O#P#Q#R#S#T#U#V#W#_#b$V$i%V%Y%Z%^%`%a%b%d%h%s%{&W&^&h&u&y'u(w)O*]*a*f+e+l+},T-[-a-i-s.b.s.t.u.w.{/O/Q/i/|0W1y2c2v2x2y3Z5O5^5h6x7j8O!k9t#Y#h&P'o*u*x,Y/`0k2R3S6[8`8b8e8f8g8h8i8j8k8l8m8n8o8p8q8t8}9O9Q9X9Y9]9^9v#RcOSUi{!Q!U!k!y#h$V%V%Y%Z%^%`%a%b%d%h%{&^'o)O*]*a*f+e,Y-[-i.b.s.t.u.w.{/O/Q0k1y2c2v2x2y5O5^t#v`!v#}$O$S'z'|'}(U(j(k+z-^0r1^9s9y9z!z&t!t#a#r#t&_(Y(})P)S)p)s+f,r,t-h-j.U.X.a.c0{1V1e1h1l1z2b2d3{4X4a4z5P6Z6g7b8w8y8{9R9T9V9Z9_Q(t$Qc0i8s8x8z8|9S9U9W9[9`t#s`!v#}$O$S'z'|'}(U(j(k+z-^0r1^9s9y9zS(a#u(dQ(u$RQ-O(b!z9h!t#a#r#t&_(Y(})P)S)p)s+f,r,t-h-j.U.X.a.c0{1V1e1h1l1z2b2d3{4X4a4z5P6Z6g7b8w8y8{9R9T9V9Z9_b9i8s8x8z8|9S9U9W9[9`Q9m9wR9n9xleOSi{!k$V%^%a%b%d*a*f.{/OQ(X#tQ*m%kQ*n%mR0z,r$S#w`!t!v#a#r#t#}$O$S&_'z'|'}(U(Y(j(k(})P)S)p)s+f+z,r,t-^-h-j.U.X.a.c0r0{1V1^1e1h1l1z2b2d3{4X4a4z5P6Z6g7b8s8w8x8y8z8{8|9R9S9T9U9V9W9Z9[9_9`9s9y9zQ)r$xQ.W)tQ1}.VR4l2OT(c#u(dS(c#u(dT2V._2WQ)T$`Q,}(aQ-o)UQ.f)}Q2g.gQ5R2hQ6^4pQ6k5SQ7Z6_Q7d6lQ7s7[Q8R7tQ8Y8SR8^8Zl'z#p&v(v,i,q-V-W0T1b3u4Z9g9q9r!^9R&r'a(Q(W+c+w,u-c-f.T.V/w0S0y0}1k1|2O2`3j3|4S4]4b4j4}5q5|6S6iZ9S0h3p5s6}7mn'|#p&v(v,g,i,q-V-W0T1b3u4Z9g9q9r!`9T&r'a(Q(W+c+w,u-c-f.T.V/w0Q0S0y0}1k1|2O2`3j3|4S4]4b4j4}5q5|6S6i]9U0h3p5s5t6}7mpdOSiw{!k$V%T%^%a%b%d*a*f.{/OQ%QvR*]%ZpdOSiw{!k$V%T%^%a%b%d*a*f.{/OR%QvQ)v$yR.S)oqdOSiw{!k$V%T%^%a%b%d*a*f.{/OQ.`){S2a.d.eW4y2^2_2`2eU6f4{4|4}U7`6e6h6iQ7w7aR8U7xQ%XwR*V%TR2n.mR6n5US$hn$mR-x)`Q%^xR*a%_R*g%eT.|*f/OQiOQ!kST$Yi!kQ!WQR%p!WQ![RU%t![%u*rQ%u!]R*r%vQ*}&QR/b*}Q+{&vR0U+{Q,O&xS0X,O0YR0Y,PQ+[&[R/m+[Q&Y!cQ*s%wT+W&Y*sQ+Q&TR/d+QQ&m!pQ+n&kU+r&m+n0PR0P+sQ'j#fR,Z'jQ#j_R'p#jQ#`YU'`#`*p8rQ*p8aR8r'mQ,l(RW0u,l0v3y5{U0v,m,n,oS3y0w0xR5{3z#o'x#p&r&v'a(Q(W(q(r(v+c+u+v+w,g,h,i,q,u-V-W-c-f.T.V/w0Q0R0S0T0h0y0}1b1k1|2O2`3j3n3o3p3u3|4S4Z4]4b4j4}5q5s5t5u5|6S6i6}7m9g9q9rQ,s(WU0|,s1O3}Q1O,uR3}0}Q(d#uR-P(dQ(m#yR-Y(mQ1f-cR4^1fQ)m$sR.R)mQ2Q.YS4n2Q6]R6]4oQ)x$zR.])xQ2W._R4s2WQ.l*SS2l.l5VR5V2nQ-u)]S1s-u4eR4e1tQ)a$hR-y)aQ/O*fR2|/OWhOSi!kQ%c{Q(y$VQ*`%^Q*b%aQ*c%bQ*e%dQ.y*aS.|*f/OR2{.{Q$XfQ%g!PQ%j!RQ%l!SQ%n!TQ)h$nQ)n$tQ*U%XQ*k%iS.o*V*YQ/V*jQ/W*mQ/X*nS/h+X2TQ1P,wQ1Q,xQ1W,}Q1v-|Q1{.TQ2f.fQ2p.qQ2z.zY3Y/j/k/p/t4uQ4O1RQ4Q1TQ4T1XQ4h1xQ4k1|Q5Q2gQ5W2o[5f3X3[3_3a3b6cQ5}4PQ6Q4UQ6X4fQ6j5RQ6o5XW6u5g5k5m5oQ7P6OQ7R6RQ7V6YQ7Y6^Q7c6kU7g6v6z6|Q7n7QQ7p7TQ7r7ZQ7y7dS7{7h7lQ8P7oQ8Q7sQ8V7|Q8X8RQ8[8WQ8]8YR8_8^Q$blQ&a!gU)W$c$d$eQ*w%}U+h&b&c&dQ,w(^S-q)X)YQ/_*yQ/g+XS/y+i+jQ1T,{Q1n-rQ3V/eS3]/l/pQ3g/zQ4U1YS5j3^3bQ6y5lR7k6{S#q`9sR)R$_U#y`$_9sR-X(lQ#p`S&r!t)SQ&v!vQ'a#aQ(Q#rQ(W#tQ(q#}Q(r$OQ(v$SQ+c&_Q+u8wQ+v8yQ+w8{Q,g'zQ,h'|Q,i'}Q,q(UQ,u(YQ-V(jQ-W(kd-c(}-h.a1h2b4a4z6Z6g7bQ-f)PQ.T)pQ.V)sQ/w+fQ0Q9RQ0R9TQ0S9VQ0T+zQ0h8sQ0y,rQ0},tQ1b-^Q1k-jQ1|.UQ2O.XQ2`.cQ3j9ZQ3n8xQ3o8zQ3p8|Q3u0rQ3|0{Q4S1VQ4Z1^Q4]1eQ4b1lQ4j1zQ4}2dQ5q9_Q5s9WQ5t9SQ5u9UQ5|3{Q6S4XQ6i5PQ6}9[Q7m9`Q9g9sQ9q9yR9r9zlfOSi{!k$V%^%a%b%d*a*f.{/OS!mU%`Q%i!QQ%o!UQ&}!yQ'n#hS*Y%V%YQ*^%ZQ*j%hQ*t%{Q+b&^Q,_'oQ-e)OQ.v*]Q/v+eQ0n,YQ1`-[Q1j-iQ2_.bQ2r.sQ2s.tQ2u.uQ2w.wQ3O/QQ3s0kQ4i1yQ4|2cQ5]2vQ5_2xQ5`2yQ6h5OR6q5^!vYOSUi{!Q!k!y$V%V%Y%Z%^%`%a%b%d%h%{&^)O*]*a*f+e-[-i.b.s.t.u.w.{/O/Q1y2c2v2x2y5O5^Q!]RQ!lTQ$ZjQ%r!ZQ%v!^Q&q!sQ&x!wQ'O!|Q'P!}Q'Q#OQ'R#PQ'S#QQ'T#RQ'U#SQ'V#TQ'W#UQ'X#VQ'Y#WQ'[#YQ'_#_Q'c#bW'm#h'o,Y0kQ)b$iQ*q%sS*z&P/`Q+T&WQ+k&hQ+y&uQ,P&yQ,S8`Q,U8bQ,a'uQ-_(wQ/Z*uQ/^*xQ/{+lQ0V+}Q0Z8eQ0[8fQ0]8gQ0^8hQ0_8iQ0`8jQ0a8kQ0b8lQ0c8mQ0d8nQ0e8oQ0f8pQ0g,TQ0j8tQ0o8qQ1c-aQ1o-sQ3U8}Q3X/iQ3h/|Q3k0WQ3l9OQ3q9QQ3r9XQ4o2RQ5d3SQ5g3ZQ5r9YQ5v9]Q5w9^Q6v5hQ7X6[Q7h6xQ7|7jQ8W8OQ8a!UR9l9vT!VQ!WR!_RR&R!`S%}!`*|S*y&O&VR/e+SR&w!vR&z!wT!qU$TS!pU$TU$spq*_S&k!o!rQ+p&lQ+s&oQ.Q)lS/}+o+qR3i0O[!bR!^$p&X)j+Vh!nUpq!o!r$T&l&o)l+o+q0OQ.x*_Q/[*vQ3R/UT9d&P)kT!dR$pS!cR$pS%w!^)jS*{&P)kQ+U&XR/f+VT&U!`$qQ#f]R's#kT'i#f'jR0m,XT(T#r(]R(Z#tQ-d(}Q1i-hQ2^.aQ4_1hQ4{2bQ6V4aQ6e4zQ7W6ZQ7a6gR7x7blgOSi{!k$V%^%a%b%d*a*f.{/OQ%WwR*U%TV$tpq*_R.Z)uR*T%RQ$lnR)g$mR)^$gT%[x%_T%]x%_T.}*f/O",
  nodeNames: "⚠ ArithOp ArithOp extends LineComment BlockComment Script ExportDeclaration export Star as VariableName from String ; default FunctionDeclaration async function VariableDefinition TypeParamList TypeDefinition ThisType this LiteralType ArithOp Number BooleanLiteral VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString null super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyNameDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression await yield delete LogicOp BitOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration Privacy static abstract PropertyDeclaration readonly Optional TypeAnnotation Equals FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp in instanceof const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplatExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement",
  maxTerm: 321,
  nodeProps: [
    [lezer__WEBPACK_IMPORTED_MODULE_0__.NodeProp.group, -26,7,14,16,53,175,179,182,183,185,188,191,202,204,210,212,214,216,219,225,229,231,233,235,237,239,240,"Statement",-30,11,13,23,26,27,37,38,39,40,42,47,55,63,69,70,83,84,93,94,110,113,115,116,117,118,120,121,139,140,142,"Expression",-21,22,24,28,30,143,145,147,148,150,151,152,154,155,156,158,159,160,169,171,173,174,"Type",-2,74,78,"ClassItem"],
    [lezer__WEBPACK_IMPORTED_MODULE_0__.NodeProp.closedBy, 36,"]",46,"}",61,")",123,"JSXSelfCloseEndTag JSXEndTag",137,"JSXEndTag"],
    [lezer__WEBPACK_IMPORTED_MODULE_0__.NodeProp.openedBy, 41,"[",45,"{",60,"(",122,"JSXStartTag",132,"JSXStartTag JSXStartCloseTag"]
  ],
  skippedNodes: [0,4,5],
  repeatNodeCount: 27,
  tokenData: "!?v~R!ZOX$tX^%S^p$tpq%Sqr&rrs'zst$ttu/wuv2Xvw2|wx3zxy:byz:rz{;S{|<S|}<g}!O<S!O!P<w!P!QAT!Q!R!-s!R![!/Y![!]!4x!]!^!5[!^!_!5l!_!`!6i!`!a!7a!a!b!9W!b!c$t!c!}/w!}#O!:i#O#P$t#P#Q!:y#Q#R!;Z#R#S/w#S#T!;n#T#o/w#o#p!<O#p#q!<T#q#r!<k#r#s!<}#s#y$t#y#z%S#z$f$t$f$g%S$g#BY/w#BY#BZ!=_#BZ$IS/w$IS$I_!=_$I_$I|/w$I|$JO!=_$JO$JT/w$JT$JU!=_$JU$KV/w$KV$KW!=_$KW&FU/w&FU&FV!=_&FV~/wW$yR#{WO!^$t!_#o$t#p~$t,T%Zg#{W&}+{OX$tX^%S^p$tpq%Sq!^$t!_#o$t#p#y$t#y#z%S#z$f$t$f$g%S$g#BY$t#BY#BZ%S#BZ$IS$t$IS$I_%S$I_$I|$t$I|$JO%S$JO$JT$t$JT$JU%S$JU$KV$t$KV$KW%S$KW&FU$t&FU&FV%S&FV~$t$T&yS#{W!e#{O!^$t!_!`'V!`#o$t#p~$t$O'^S#[#v#{WO!^$t!_!`'j!`#o$t#p~$t$O'qR#[#v#{WO!^$t!_#o$t#p~$t'u(RZ#{W]!ROY'zYZ(tZr'zrs*Rs!^'z!^!_*e!_#O'z#O#P,q#P#o'z#o#p*e#p~'z&r(yV#{WOr(trs)`s!^(t!^!_)p!_#o(t#o#p)p#p~(t&r)gR#v&j#{WO!^$t!_#o$t#p~$t&j)sROr)prs)|s~)p&j*RO#v&j'u*[R#v&j#{W]!RO!^$t!_#o$t#p~$t'm*jV]!ROY*eYZ)pZr*ers+Ps#O*e#O#P+W#P~*e'm+WO#v&j]!R'm+ZROr*ers+ds~*e'm+kU#v&j]!ROY+}Zr+}rs,fs#O+}#O#P,k#P~+}!R,SU]!ROY+}Zr+}rs,fs#O+}#O#P,k#P~+}!R,kO]!R!R,nPO~+}'u,vV#{WOr'zrs-]s!^'z!^!_*e!_#o'z#o#p*e#p~'z'u-fZ#v&j#{W]!ROY.XYZ$tZr.Xrs/Rs!^.X!^!_+}!_#O.X#O#P/c#P#o.X#o#p+}#p~.X!Z.`Z#{W]!ROY.XYZ$tZr.Xrs/Rs!^.X!^!_+}!_#O.X#O#P/c#P#o.X#o#p+}#p~.X!Z/YR#{W]!RO!^$t!_#o$t#p~$t!Z/hT#{WO!^.X!^!_+}!_#o.X#o#p+}#p~.X&i0S_#{W#qS'Yp'P%kOt$ttu/wu}$t}!O1R!O!Q$t!Q![/w![!^$t!_!c$t!c!}/w!}#R$t#R#S/w#S#T$t#T#o/w#p$g$t$g~/w[1Y_#{W#qSOt$ttu1Ru}$t}!O1R!O!Q$t!Q![1R![!^$t!_!c$t!c!}1R!}#R$t#R#S1R#S#T$t#T#o1R#p$g$t$g~1R$O2`S#T#v#{WO!^$t!_!`2l!`#o$t#p~$t$O2sR#{W#f#vO!^$t!_#o$t#p~$t%r3TU'm%j#{WOv$tvw3gw!^$t!_!`2l!`#o$t#p~$t$O3nS#{W#`#vO!^$t!_!`2l!`#o$t#p~$t'u4RZ#{W]!ROY3zYZ4tZw3zwx*Rx!^3z!^!_5l!_#O3z#O#P7l#P#o3z#o#p5l#p~3z&r4yV#{WOw4twx)`x!^4t!^!_5`!_#o4t#o#p5`#p~4t&j5cROw5`wx)|x~5`'m5qV]!ROY5lYZ5`Zw5lwx+Px#O5l#O#P6W#P~5l'm6ZROw5lwx6dx~5l'm6kU#v&j]!ROY6}Zw6}wx,fx#O6}#O#P7f#P~6}!R7SU]!ROY6}Zw6}wx,fx#O6}#O#P7f#P~6}!R7iPO~6}'u7qV#{WOw3zwx8Wx!^3z!^!_5l!_#o3z#o#p5l#p~3z'u8aZ#v&j#{W]!ROY9SYZ$tZw9Swx/Rx!^9S!^!_6}!_#O9S#O#P9|#P#o9S#o#p6}#p~9S!Z9ZZ#{W]!ROY9SYZ$tZw9Swx/Rx!^9S!^!_6}!_#O9S#O#P9|#P#o9S#o#p6}#p~9S!Z:RT#{WO!^9S!^!_6}!_#o9S#o#p6}#p~9S%V:iR!_$}#{WO!^$t!_#o$t#p~$tZ:yR!^R#{WO!^$t!_#o$t#p~$t%R;]U'Q!R#U#v#{WOz$tz{;o{!^$t!_!`2l!`#o$t#p~$t$O;vS#R#v#{WO!^$t!_!`2l!`#o$t#p~$t$u<ZSi$m#{WO!^$t!_!`2l!`#o$t#p~$t&i<nR|&a#{WO!^$t!_#o$t#p~$t&i=OVq%n#{WO!O$t!O!P=e!P!Q$t!Q![>Z![!^$t!_#o$t#p~$ty=jT#{WO!O$t!O!P=y!P!^$t!_#o$t#p~$ty>QR{q#{WO!^$t!_#o$t#p~$ty>bZ#{WjqO!Q$t!Q![>Z![!^$t!_!g$t!g!h?T!h#R$t#R#S>Z#S#X$t#X#Y?T#Y#o$t#p~$ty?YZ#{WO{$t{|?{|}$t}!O?{!O!Q$t!Q![@g![!^$t!_#R$t#R#S@g#S#o$t#p~$ty@QV#{WO!Q$t!Q![@g![!^$t!_#R$t#R#S@g#S#o$t#p~$ty@nV#{WjqO!Q$t!Q![@g![!^$t!_#R$t#R#S@g#S#o$t#p~$t,TA[`#{W#S#vOYB^YZ$tZzB^z{HT{!PB^!P!Q!*|!Q!^B^!^!_Da!_!`!+u!`!a!,t!a!}B^!}#OFY#O#PGi#P#oB^#o#pDa#p~B^XBe[#{WxPOYB^YZ$tZ!PB^!P!QCZ!Q!^B^!^!_Da!_!}B^!}#OFY#O#PGi#P#oB^#o#pDa#p~B^XCb_#{WxPO!^$t!_#Z$t#Z#[CZ#[#]$t#]#^CZ#^#a$t#a#bCZ#b#g$t#g#hCZ#h#i$t#i#jCZ#j#m$t#m#nCZ#n#o$t#p~$tPDfVxPOYDaZ!PDa!P!QD{!Q!}Da!}#OEd#O#PFP#P~DaPEQUxP#Z#[D{#]#^D{#a#bD{#g#hD{#i#jD{#m#nD{PEgTOYEdZ#OEd#O#PEv#P#QDa#Q~EdPEyQOYEdZ~EdPFSQOYDaZ~DaXF_Y#{WOYFYYZ$tZ!^FY!^!_Ed!_#OFY#O#PF}#P#QB^#Q#oFY#o#pEd#p~FYXGSV#{WOYFYYZ$tZ!^FY!^!_Ed!_#oFY#o#pEd#p~FYXGnV#{WOYB^YZ$tZ!^B^!^!_Da!_#oB^#o#pDa#p~B^,TH[^#{WxPOYHTYZIWZzHTz{Ki{!PHT!P!Q!)j!Q!^HT!^!_Mt!_!}HT!}#O!%e#O#P!(x#P#oHT#o#pMt#p~HT,TI]V#{WOzIWz{Ir{!^IW!^!_Jt!_#oIW#o#pJt#p~IW,TIwX#{WOzIWz{Ir{!PIW!P!QJd!Q!^IW!^!_Jt!_#oIW#o#pJt#p~IW,TJkR#{WT+{O!^$t!_#o$t#p~$t+{JwROzJtz{KQ{~Jt+{KTTOzJtz{KQ{!PJt!P!QKd!Q~Jt+{KiOT+{,TKp^#{WxPOYHTYZIWZzHTz{Ki{!PHT!P!QLl!Q!^HT!^!_Mt!_!}HT!}#O!%e#O#P!(x#P#oHT#o#pMt#p~HT,TLu_#{WT+{xPO!^$t!_#Z$t#Z#[CZ#[#]$t#]#^CZ#^#a$t#a#bCZ#b#g$t#g#hCZ#h#i$t#i#jCZ#j#m$t#m#nCZ#n#o$t#p~$t+{MyYxPOYMtYZJtZzMtz{Ni{!PMt!P!Q!$a!Q!}Mt!}#O! w#O#P!#}#P~Mt+{NnYxPOYMtYZJtZzMtz{Ni{!PMt!P!Q! ^!Q!}Mt!}#O! w#O#P!#}#P~Mt+{! eUT+{xP#Z#[D{#]#^D{#a#bD{#g#hD{#i#jD{#m#nD{+{! zWOY! wYZJtZz! wz{!!d{#O! w#O#P!#k#P#QMt#Q~! w+{!!gYOY! wYZJtZz! wz{!!d{!P! w!P!Q!#V!Q#O! w#O#P!#k#P#QMt#Q~! w+{!#[TT+{OYEdZ#OEd#O#PEv#P#QDa#Q~Ed+{!#nTOY! wYZJtZz! wz{!!d{~! w+{!$QTOYMtYZJtZzMtz{Ni{~Mt+{!$f_xPOzJtz{KQ{#ZJt#Z#[!$a#[#]Jt#]#^!$a#^#aJt#a#b!$a#b#gJt#g#h!$a#h#iJt#i#j!$a#j#mJt#m#n!$a#n~Jt,T!%j[#{WOY!%eYZIWZz!%ez{!&`{!^!%e!^!_! w!_#O!%e#O#P!(W#P#QHT#Q#o!%e#o#p! w#p~!%e,T!&e^#{WOY!%eYZIWZz!%ez{!&`{!P!%e!P!Q!'a!Q!^!%e!^!_! w!_#O!%e#O#P!(W#P#QHT#Q#o!%e#o#p! w#p~!%e,T!'hY#{WT+{OYFYYZ$tZ!^FY!^!_Ed!_#OFY#O#PF}#P#QB^#Q#oFY#o#pEd#p~FY,T!(]X#{WOY!%eYZIWZz!%ez{!&`{!^!%e!^!_! w!_#o!%e#o#p! w#p~!%e,T!(}X#{WOYHTYZIWZzHTz{Ki{!^HT!^!_Mt!_#oHT#o#pMt#p~HT,T!)qc#{WxPOzIWz{Ir{!^IW!^!_Jt!_#ZIW#Z#[!)j#[#]IW#]#^!)j#^#aIW#a#b!)j#b#gIW#g#h!)j#h#iIW#i#j!)j#j#mIW#m#n!)j#n#oIW#o#pJt#p~IW,T!+TV#{WS+{OY!*|YZ$tZ!^!*|!^!_!+j!_#o!*|#o#p!+j#p~!*|+{!+oQS+{OY!+jZ~!+j$P!,O[#{W#f#vxPOYB^YZ$tZ!PB^!P!QCZ!Q!^B^!^!_Da!_!}B^!}#OFY#O#PGi#P#oB^#o#pDa#p~B^]!,}[#nS#{WxPOYB^YZ$tZ!PB^!P!QCZ!Q!^B^!^!_Da!_!}B^!}#OFY#O#PGi#P#oB^#o#pDa#p~B^y!-zd#{WjqO!O$t!O!P>Z!P!Q$t!Q![!/Y![!^$t!_!g$t!g!h?T!h#R$t#R#S!/Y#S#U$t#U#V!0p#V#X$t#X#Y?T#Y#b$t#b#c!0`#c#d!2O#d#l$t#l#m!3W#m#o$t#p~$ty!/a_#{WjqO!O$t!O!P>Z!P!Q$t!Q![!/Y![!^$t!_!g$t!g!h?T!h#R$t#R#S!/Y#S#X$t#X#Y?T#Y#b$t#b#c!0`#c#o$t#p~$ty!0gR#{WjqO!^$t!_#o$t#p~$ty!0uW#{WO!Q$t!Q!R!1_!R!S!1_!S!^$t!_#R$t#R#S!1_#S#o$t#p~$ty!1fW#{WjqO!Q$t!Q!R!1_!R!S!1_!S!^$t!_#R$t#R#S!1_#S#o$t#p~$ty!2TV#{WO!Q$t!Q!Y!2j!Y!^$t!_#R$t#R#S!2j#S#o$t#p~$ty!2qV#{WjqO!Q$t!Q!Y!2j!Y!^$t!_#R$t#R#S!2j#S#o$t#p~$ty!3]Z#{WO!Q$t!Q![!4O![!^$t!_!c$t!c!i!4O!i#R$t#R#S!4O#S#T$t#T#Z!4O#Z#o$t#p~$ty!4VZ#{WjqO!Q$t!Q![!4O![!^$t!_!c$t!c!i!4O!i#R$t#R#S!4O#S#T$t#T#Z!4O#Z#o$t#p~$t%w!5RR!WV#{W#d%hO!^$t!_#o$t#p~$t!P!5cR^w#{WO!^$t!_#o$t#p~$t+c!5wR'Ud![%Y#o&s'qP!P!Q!6Q!^!_!6V!_!`!6dW!6VO#}W#v!6[P#V#v!_!`!6_#v!6dO#f#v#v!6iO#W#v%w!6pT!t%o#{WO!^$t!_!`'V!`!a!7P!a#o$t#p~$t$P!7WR#O#w#{WO!^$t!_#o$t#p~$t%w!7lT'T!s#W#v#xS#{WO!^$t!_!`!7{!`!a!8]!a#o$t#p~$t$O!8SR#W#v#{WO!^$t!_#o$t#p~$t$O!8dT#V#v#{WO!^$t!_!`2l!`!a!8s!a#o$t#p~$t$O!8zS#V#v#{WO!^$t!_!`2l!`#o$t#p~$t%w!9_V'e%o#{WO!O$t!O!P!9t!P!^$t!_!a$t!a!b!:U!b#o$t#p~$t$`!9{Rr$W#{WO!^$t!_#o$t#p~$t$O!:]S#{W#a#vO!^$t!_!`2l!`#o$t#p~$t&e!:pRt&]#{WO!^$t!_#o$t#p~$tZ!;QRyR#{WO!^$t!_#o$t#p~$t$O!;bS#^#v#{WO!^$t!_!`2l!`#o$t#p~$t$P!;uR#{W']#wO!^$t!_#o$t#p~$t~!<TO!O~%r!<[T'l%j#{WO!^$t!_!`2l!`#o$t#p#q!:U#q~$t$u!<tR}$k#{W'_QO!^$t!_#o$t#p~$tX!=UR!fP#{WO!^$t!_#o$t#p~$t,T!=lr#{W#qS'Yp'P%k&}+{OX$tX^%S^p$tpq%Sqt$ttu/wu}$t}!O1R!O!Q$t!Q![/w![!^$t!_!c$t!c!}/w!}#R$t#R#S/w#S#T$t#T#o/w#p#y$t#y#z%S#z$f$t$f$g%S$g#BY/w#BY#BZ!=_#BZ$IS/w$IS$I_!=_$I_$I|/w$I|$JO!=_$JO$JT/w$JT$JU!=_$JU$KV/w$KV$KW!=_$KW&FU/w&FU&FV!=_&FV~/w",
  tokenizers: [noSemicolon, incdecToken, template, 0, 1, 2, 3, 4, 5, 6, 7, 8, insertSemicolon],
  topRules: {"Script":[0,6]},
  dialects: {jsx: 11074, ts: 11076},
  dynamicPrecedences: {"140":1,"167":1},
  specialized: [{term: 277, get: (value, stack) => (tsExtends(value, stack) << 1) | 1},{term: 277, get: value => spec_identifier[value] || -1},{term: 286, get: value => spec_word[value] || -1},{term: 58, get: value => spec_LessThan[value] || -1}],
  tokenPrec: 11096
});




/***/ }),
/* 40 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeProp": () => (/* reexport safe */ lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeProp),
/* harmony export */   "NodeSet": () => (/* reexport safe */ lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeSet),
/* harmony export */   "NodeType": () => (/* reexport safe */ lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeType),
/* harmony export */   "Tree": () => (/* reexport safe */ lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree),
/* harmony export */   "TreeCursor": () => (/* reexport safe */ lezer_tree__WEBPACK_IMPORTED_MODULE_0__.TreeCursor),
/* harmony export */   "ContextTracker": () => (/* binding */ ContextTracker),
/* harmony export */   "ExternalTokenizer": () => (/* binding */ ExternalTokenizer),
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "Stack": () => (/* binding */ Stack),
/* harmony export */   "Token": () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);



/// A parse stack. These are used internally by the parser to track
/// parsing progress. They also provide some properties and methods
/// that external code such as a tokenizer can use to get information
/// about the parse state.
class Stack {
    /// @internal
    constructor(
    /// A the parse that this stack is part of @internal
    p, 
    /// Holds state, pos, value stack pos (15 bits array index, 15 bits
    /// buffer index) triplets for all but the top state
    /// @internal
    stack, 
    /// The current parse state @internal
    state, 
    // The position at which the next reduce should take place. This
    // can be less than `this.pos` when skipped expressions have been
    // added to the stack (which should be moved outside of the next
    // reduction)
    /// @internal
    reducePos, 
    /// The input position up to which this stack has parsed.
    pos, 
    /// The dynamic score of the stack, including dynamic precedence
    /// and error-recovery penalties
    /// @internal
    score, 
    // The output buffer. Holds (type, start, end, size) quads
    // representing nodes created by the parser, where `size` is
    // amount of buffer array entries covered by this node.
    /// @internal
    buffer, 
    // The base offset of the buffer. When stacks are split, the split
    // instance shared the buffer history with its parent up to
    // `bufferBase`, which is the absolute offset (including the
    // offset of previous splits) into the buffer at which this stack
    // starts writing.
    /// @internal
    bufferBase, 
    /// @internal
    curContext, 
    // A parent stack from which this was split off, if any. This is
    // set up so that it always points to a stack that has some
    // additional buffer content, never to a stack with an equal
    // `bufferBase`.
    /// @internal
    parent) {
        this.p = p;
        this.stack = stack;
        this.state = state;
        this.reducePos = reducePos;
        this.pos = pos;
        this.score = score;
        this.buffer = buffer;
        this.bufferBase = bufferBase;
        this.curContext = curContext;
        this.parent = parent;
    }
    /// @internal
    toString() {
        return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    // Start an empty stack
    /// @internal
    static start(p, state, pos = 0) {
        let cx = p.parser.context;
        return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, null);
    }
    /// The stack's current [context](#lezer.ContextTracker) value, if
    /// any. Its type will depend on the context tracker's type
    /// parameter, or it will be `null` if there is no context
    /// tracker.
    get context() { return this.curContext ? this.curContext.context : null; }
    // Push a state onto the stack, tracking its start position as well
    // as the buffer base at that point.
    /// @internal
    pushState(state, start) {
        this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
        this.state = state;
    }
    // Apply a reduce action
    /// @internal
    reduce(action) {
        let depth = action >> 19 /* ReduceDepthShift */, type = action & 65535 /* ValueMask */;
        let { parser } = this.p;
        let dPrec = parser.dynamicPrecedence(type);
        if (dPrec)
            this.score += dPrec;
        if (depth == 0) {
            // Zero-depth reductions are a special case—they add stuff to
            // the stack without popping anything off.
            if (type < parser.minRepeatTerm)
                this.storeNode(type, this.reducePos, this.reducePos, 4, true);
            this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
            this.reduceContext(type);
            return;
        }
        // Find the base index into `this.stack`, content after which will
        // be dropped. Note that with `StayFlag` reductions we need to
        // consume two extra frames (the dummy parent node for the skipped
        // expression and the state that we'll be staying in, which should
        // be moved to `this.state`).
        let base = this.stack.length - ((depth - 1) * 3) - (action & 262144 /* StayFlag */ ? 6 : 0);
        let start = this.stack[base - 2];
        let bufferBase = this.stack[base - 1], count = this.bufferBase + this.buffer.length - bufferBase;
        // Store normal terms or `R -> R R` repeat reductions
        if (type < parser.minRepeatTerm || (action & 131072 /* RepeatFlag */)) {
            let pos = parser.stateFlag(this.state, 1 /* Skipped */) ? this.pos : this.reducePos;
            this.storeNode(type, start, pos, count + 4, true);
        }
        if (action & 262144 /* StayFlag */) {
            this.state = this.stack[base];
        }
        else {
            let baseStateID = this.stack[base - 3];
            this.state = parser.getGoto(baseStateID, type, true);
        }
        while (this.stack.length > base)
            this.stack.pop();
        this.reduceContext(type);
    }
    // Shift a value into the buffer
    /// @internal
    storeNode(term, start, end, size = 4, isReduce = false) {
        if (term == 0 /* Err */) { // Try to omit/merge adjacent error nodes
            let cur = this, top = this.buffer.length;
            if (top == 0 && cur.parent) {
                top = cur.bufferBase - cur.parent.bufferBase;
                cur = cur.parent;
            }
            if (top > 0 && cur.buffer[top - 4] == 0 /* Err */ && cur.buffer[top - 1] > -1) {
                if (start == end)
                    return;
                if (cur.buffer[top - 2] >= start) {
                    cur.buffer[top - 2] = end;
                    return;
                }
            }
        }
        if (!isReduce || this.pos == end) { // Simple case, just append
            this.buffer.push(term, start, end, size);
        }
        else { // There may be skipped nodes that have to be moved forward
            let index = this.buffer.length;
            if (index > 0 && this.buffer[index - 4] != 0 /* Err */)
                while (index > 0 && this.buffer[index - 2] > end) {
                    // Move this record forward
                    this.buffer[index] = this.buffer[index - 4];
                    this.buffer[index + 1] = this.buffer[index - 3];
                    this.buffer[index + 2] = this.buffer[index - 2];
                    this.buffer[index + 3] = this.buffer[index - 1];
                    index -= 4;
                    if (size > 4)
                        size -= 4;
                }
            this.buffer[index] = term;
            this.buffer[index + 1] = start;
            this.buffer[index + 2] = end;
            this.buffer[index + 3] = size;
        }
    }
    // Apply a shift action
    /// @internal
    shift(action, next, nextEnd) {
        if (action & 131072 /* GotoFlag */) {
            this.pushState(action & 65535 /* ValueMask */, this.pos);
        }
        else if ((action & 262144 /* StayFlag */) == 0) { // Regular shift
            let start = this.pos, nextState = action, { parser } = this.p;
            if (nextEnd > this.pos || next <= parser.maxNode) {
                this.pos = nextEnd;
                if (!parser.stateFlag(nextState, 1 /* Skipped */))
                    this.reducePos = nextEnd;
            }
            this.pushState(nextState, start);
            if (next <= parser.maxNode)
                this.buffer.push(next, start, nextEnd, 4);
            this.shiftContext(next);
        }
        else { // Shift-and-stay, which means this is a skipped token
            if (next <= this.p.parser.maxNode)
                this.buffer.push(next, this.pos, nextEnd, 4);
            this.pos = nextEnd;
        }
    }
    // Apply an action
    /// @internal
    apply(action, next, nextEnd) {
        if (action & 65536 /* ReduceFlag */)
            this.reduce(action);
        else
            this.shift(action, next, nextEnd);
    }
    // Add a prebuilt node into the buffer. This may be a reused node or
    // the result of running a nested parser.
    /// @internal
    useNode(value, next) {
        let index = this.p.reused.length - 1;
        if (index < 0 || this.p.reused[index] != value) {
            this.p.reused.push(value);
            index++;
        }
        let start = this.pos;
        this.reducePos = this.pos = start + value.length;
        this.pushState(next, start);
        this.buffer.push(index, start, this.reducePos, -1 /* size < 0 means this is a reused value */);
        if (this.curContext)
            this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this.p.input, this));
    }
    // Split the stack. Due to the buffer sharing and the fact
    // that `this.stack` tends to stay quite shallow, this isn't very
    // expensive.
    /// @internal
    split() {
        let parent = this;
        let off = parent.buffer.length;
        // Because the top of the buffer (after this.pos) may be mutated
        // to reorder reductions and skipped tokens, and shared buffers
        // should be immutable, this copies any outstanding skipped tokens
        // to the new buffer, and puts the base pointer before them.
        while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
            off -= 4;
        let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
        // Make sure parent points to an actual parent with content, if there is such a parent.
        while (parent && base == parent.bufferBase)
            parent = parent.parent;
        return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, parent);
    }
    // Try to recover from an error by 'deleting' (ignoring) one token.
    /// @internal
    recoverByDelete(next, nextEnd) {
        let isNode = next <= this.p.parser.maxNode;
        if (isNode)
            this.storeNode(next, this.pos, nextEnd);
        this.storeNode(0 /* Err */, this.pos, nextEnd, isNode ? 8 : 4);
        this.pos = this.reducePos = nextEnd;
        this.score -= 200 /* Token */;
    }
    /// Check if the given term would be able to be shifted (optionally
    /// after some reductions) on this stack. This can be useful for
    /// external tokenizers that want to make sure they only provide a
    /// given token when it applies.
    canShift(term) {
        for (let sim = new SimulatedStack(this);;) {
            let action = this.p.parser.stateSlot(sim.top, 4 /* DefaultReduce */) || this.p.parser.hasAction(sim.top, term);
            if ((action & 65536 /* ReduceFlag */) == 0)
                return true;
            if (action == 0)
                return false;
            sim.reduce(action);
        }
    }
    /// Find the start position of the rule that is currently being parsed.
    get ruleStart() {
        for (let state = this.state, base = this.stack.length;;) {
            let force = this.p.parser.stateSlot(state, 5 /* ForcedReduce */);
            if (!(force & 65536 /* ReduceFlag */))
                return 0;
            base -= 3 * (force >> 19 /* ReduceDepthShift */);
            if ((force & 65535 /* ValueMask */) < this.p.parser.minRepeatTerm)
                return this.stack[base + 1];
            state = this.stack[base];
        }
    }
    /// Find the start position of an instance of any of the given term
    /// types, or return `null` when none of them are found.
    ///
    /// **Note:** this is only reliable when there is at least some
    /// state that unambiguously matches the given rule on the stack.
    /// I.e. if you have a grammar like this, where the difference
    /// between `a` and `b` is only apparent at the third token:
    ///
    ///     a { b | c }
    ///     b { "x" "y" "x" }
    ///     c { "x" "y" "z" }
    ///
    /// Then a parse state after `"x"` will not reliably tell you that
    /// `b` is on the stack. You _can_ pass `[b, c]` to reliably check
    /// for either of those two rules (assuming that `a` isn't part of
    /// some rule that includes other things starting with `"x"`).
    ///
    /// When `before` is given, this keeps scanning up the stack until
    /// it finds a match that starts before that position.
    ///
    /// Note that you have to be careful when using this in tokenizers,
    /// since it's relatively easy to introduce data dependencies that
    /// break incremental parsing by using this method.
    startOf(types, before) {
        let state = this.state, frame = this.stack.length, { parser } = this.p;
        for (;;) {
            let force = parser.stateSlot(state, 5 /* ForcedReduce */);
            let depth = force >> 19 /* ReduceDepthShift */, term = force & 65535 /* ValueMask */;
            if (types.indexOf(term) > -1) {
                let base = frame - (3 * (force >> 19 /* ReduceDepthShift */)), pos = this.stack[base + 1];
                if (before == null || before > pos)
                    return pos;
            }
            if (frame == 0)
                return null;
            if (depth == 0) {
                frame -= 3;
                state = this.stack[frame];
            }
            else {
                frame -= 3 * (depth - 1);
                state = parser.getGoto(this.stack[frame - 3], term, true);
            }
        }
    }
    // Apply up to Recover.MaxNext recovery actions that conceptually
    // inserts some missing token or rule.
    /// @internal
    recoverByInsert(next) {
        if (this.stack.length >= 300 /* MaxInsertStackDepth */)
            return [];
        let nextStates = this.p.parser.nextStates(this.state);
        if (nextStates.length > 4 /* MaxNext */ << 1 || this.stack.length >= 120 /* DampenInsertStackDepth */) {
            let best = [];
            for (let i = 0, s; i < nextStates.length; i += 2) {
                if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next))
                    best.push(nextStates[i], s);
            }
            if (this.stack.length < 120 /* DampenInsertStackDepth */)
                for (let i = 0; best.length < 4 /* MaxNext */ << 1 && i < nextStates.length; i += 2) {
                    let s = nextStates[i + 1];
                    if (!best.some((v, i) => (i & 1) && v == s))
                        best.push(nextStates[i], s);
                }
            nextStates = best;
        }
        let result = [];
        for (let i = 0; i < nextStates.length && result.length < 4 /* MaxNext */; i += 2) {
            let s = nextStates[i + 1];
            if (s == this.state)
                continue;
            let stack = this.split();
            stack.storeNode(0 /* Err */, stack.pos, stack.pos, 4, true);
            stack.pushState(s, this.pos);
            stack.shiftContext(nextStates[i]);
            stack.score -= 200 /* Token */;
            result.push(stack);
        }
        return result;
    }
    // Force a reduce, if possible. Return false if that can't
    // be done.
    /// @internal
    forceReduce() {
        let reduce = this.p.parser.stateSlot(this.state, 5 /* ForcedReduce */);
        if ((reduce & 65536 /* ReduceFlag */) == 0)
            return false;
        if (!this.p.parser.validAction(this.state, reduce)) {
            this.storeNode(0 /* Err */, this.reducePos, this.reducePos, 4, true);
            this.score -= 100 /* Reduce */;
        }
        this.reduce(reduce);
        return true;
    }
    /// @internal
    forceAll() {
        while (!this.p.parser.stateFlag(this.state, 2 /* Accepting */) && this.forceReduce()) { }
        return this;
    }
    /// Check whether this state has no further actions (assumed to be a direct descendant of the
    /// top state, since any other states must be able to continue
    /// somehow). @internal
    get deadEnd() {
        if (this.stack.length != 3)
            return false;
        let { parser } = this.p;
        return parser.data[parser.stateSlot(this.state, 1 /* Actions */)] == 65535 /* End */ &&
            !parser.stateSlot(this.state, 4 /* DefaultReduce */);
    }
    /// Restart the stack (put it back in its start state). Only safe
    /// when this.stack.length == 3 (state is directly below the top
    /// state). @internal
    restart() {
        this.state = this.stack[0];
        this.stack.length = 0;
    }
    /// @internal
    sameState(other) {
        if (this.state != other.state || this.stack.length != other.stack.length)
            return false;
        for (let i = 0; i < this.stack.length; i += 3)
            if (this.stack[i] != other.stack[i])
                return false;
        return true;
    }
    /// Get the parser used by this stack.
    get parser() { return this.p.parser; }
    /// Test whether a given dialect (by numeric ID, as exported from
    /// the terms file) is enabled.
    dialectEnabled(dialectID) { return this.p.parser.dialect.flags[dialectID]; }
    shiftContext(term) {
        if (this.curContext)
            this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this.p.input, this));
    }
    reduceContext(term) {
        if (this.curContext)
            this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this.p.input, this));
    }
    /// @internal
    emitContext() {
        let cx = this.curContext;
        if (!cx.tracker.strict)
            return;
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -2)
            this.buffer.push(cx.hash, this.reducePos, this.reducePos, -2);
    }
    updateContext(context) {
        if (context != this.curContext.context) {
            let newCx = new StackContext(this.curContext.tracker, context);
            if (newCx.hash != this.curContext.hash)
                this.emitContext();
            this.curContext = newCx;
        }
    }
}
class StackContext {
    constructor(tracker, context) {
        this.tracker = tracker;
        this.context = context;
        this.hash = tracker.hash(context);
    }
}
var Recover;
(function (Recover) {
    Recover[Recover["Token"] = 200] = "Token";
    Recover[Recover["Reduce"] = 100] = "Reduce";
    Recover[Recover["MaxNext"] = 4] = "MaxNext";
    Recover[Recover["MaxInsertStackDepth"] = 300] = "MaxInsertStackDepth";
    Recover[Recover["DampenInsertStackDepth"] = 120] = "DampenInsertStackDepth";
})(Recover || (Recover = {}));
// Used to cheaply run some reductions to scan ahead without mutating
// an entire stack
class SimulatedStack {
    constructor(stack) {
        this.stack = stack;
        this.top = stack.state;
        this.rest = stack.stack;
        this.offset = this.rest.length;
    }
    reduce(action) {
        let term = action & 65535 /* ValueMask */, depth = action >> 19 /* ReduceDepthShift */;
        if (depth == 0) {
            if (this.rest == this.stack.stack)
                this.rest = this.rest.slice();
            this.rest.push(this.top, 0, 0);
            this.offset += 3;
        }
        else {
            this.offset -= (depth - 1) * 3;
        }
        let goto = this.stack.p.parser.getGoto(this.rest[this.offset - 3], term, true);
        this.top = goto;
    }
}
// This is given to `Tree.build` to build a buffer, and encapsulates
// the parent-stack-walking necessary to read the nodes.
class StackBufferCursor {
    constructor(stack, pos, index) {
        this.stack = stack;
        this.pos = pos;
        this.index = index;
        this.buffer = stack.buffer;
        if (this.index == 0)
            this.maybeNext();
    }
    static create(stack) {
        return new StackBufferCursor(stack, stack.bufferBase + stack.buffer.length, stack.buffer.length);
    }
    maybeNext() {
        let next = this.stack.parent;
        if (next != null) {
            this.index = this.stack.bufferBase - next.bufferBase;
            this.stack = next;
            this.buffer = next.buffer;
        }
    }
    get id() { return this.buffer[this.index - 4]; }
    get start() { return this.buffer[this.index - 3]; }
    get end() { return this.buffer[this.index - 2]; }
    get size() { return this.buffer[this.index - 1]; }
    next() {
        this.index -= 4;
        this.pos -= 4;
        if (this.index == 0)
            this.maybeNext();
    }
    fork() {
        return new StackBufferCursor(this.stack, this.pos, this.index);
    }
}

/// Tokenizers write the tokens they read into instances of this class.
class Token {
    constructor() {
        /// The start of the token. This is set by the parser, and should not
        /// be mutated by the tokenizer.
        this.start = -1;
        /// This starts at -1, and should be updated to a term id when a
        /// matching token is found.
        this.value = -1;
        /// When setting `.value`, you should also set `.end` to the end
        /// position of the token. (You'll usually want to use the `accept`
        /// method.)
        this.end = -1;
    }
    /// Accept a token, setting `value` and `end` to the given values.
    accept(value, end) {
        this.value = value;
        this.end = end;
    }
}
/// @internal
class TokenGroup {
    constructor(data, id) {
        this.data = data;
        this.id = id;
    }
    token(input, token, stack) { readToken(this.data, input, token, stack, this.id); }
}
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/// Exports that are used for `@external tokens` in the grammar should
/// export an instance of this class.
class ExternalTokenizer {
    /// Create a tokenizer. The first argument is the function that,
    /// given an input stream and a token object,
    /// [fills](#lezer.Token.accept) the token object if it recognizes a
    /// token. `token.start` should be used as the start position to
    /// scan from.
    constructor(
    /// @internal
    token, options = {}) {
        this.token = token;
        this.contextual = !!options.contextual;
        this.fallback = !!options.fallback;
        this.extend = !!options.extend;
    }
}
// Tokenizer data is stored a big uint16 array containing, for each
// state:
//
//  - A group bitmask, indicating what token groups are reachable from
//    this state, so that paths that can only lead to tokens not in
//    any of the current groups can be cut off early.
//
//  - The position of the end of the state's sequence of accepting
//    tokens
//
//  - The number of outgoing edges for the state
//
//  - The accepting tokens, as (token id, group mask) pairs
//
//  - The outgoing edges, as (start character, end character, state
//    index) triples, with end character being exclusive
//
// This function interprets that data, running through a stream as
// long as new states with the a matching group mask can be reached,
// and updating `token` when it matches a token.
function readToken(data, input, token, stack, group) {
    let state = 0, groupMask = 1 << group, dialect = stack.p.parser.dialect;
    scan: for (let pos = token.start;;) {
        if ((groupMask & data[state]) == 0)
            break;
        let accEnd = data[state + 1];
        // Check whether this state can lead to a token in the current group
        // Accept tokens in this state, possibly overwriting
        // lower-precedence / shorter tokens
        for (let i = state + 3; i < accEnd; i += 2)
            if ((data[i + 1] & groupMask) > 0) {
                let term = data[i];
                if (dialect.allows(term) &&
                    (token.value == -1 || token.value == term || stack.p.parser.overrides(term, token.value))) {
                    token.accept(term, pos);
                    break;
                }
            }
        let next = input.get(pos++);
        // Do a binary search on the state's edges
        for (let low = 0, high = data[state + 2]; low < high;) {
            let mid = (low + high) >> 1;
            let index = accEnd + mid + (mid << 1);
            let from = data[index], to = data[index + 1];
            if (next < from)
                high = mid;
            else if (next >= to)
                low = mid + 1;
            else {
                state = data[index + 2];
                continue scan;
            }
        }
        break;
    }
}

// See lezer-generator/src/encode.ts for comments about the encoding
// used here
function decodeArray(input, Type = Uint16Array) {
    if (typeof input != "string")
        return input;
    let array = null;
    for (let pos = 0, out = 0; pos < input.length;) {
        let value = 0;
        for (;;) {
            let next = input.charCodeAt(pos++), stop = false;
            if (next == 126 /* BigValCode */) {
                value = 65535 /* BigVal */;
                break;
            }
            if (next >= 92 /* Gap2 */)
                next--;
            if (next >= 34 /* Gap1 */)
                next--;
            let digit = next - 32 /* Start */;
            if (digit >= 46 /* Base */) {
                digit -= 46 /* Base */;
                stop = true;
            }
            value += digit;
            if (stop)
                break;
            value *= 46 /* Base */;
        }
        if (array)
            array[out++] = value;
        else
            array = new Type(value);
    }
    return array;
}

// FIXME find some way to reduce recovery work done when the input
// doesn't match the grammar at all.
// Environment variable used to control console output
const verbose = typeof process != "undefined" && /\bparse\b/.test(process.env.LOG);
let stackIDs = null;
function cutAt(tree, pos, side) {
    let cursor = tree.cursor(pos);
    for (;;) {
        if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos)))
            for (;;) {
                if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError)
                    return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 5)) : Math.min(tree.length, Math.max(cursor.from + 1, pos + 5));
                if (side < 0 ? cursor.prevSibling() : cursor.nextSibling())
                    break;
                if (!cursor.parent())
                    return side < 0 ? 0 : tree.length;
            }
    }
}
class FragmentCursor {
    constructor(fragments) {
        this.fragments = fragments;
        this.i = 0;
        this.fragment = null;
        this.safeFrom = -1;
        this.safeTo = -1;
        this.trees = [];
        this.start = [];
        this.index = [];
        this.nextFragment();
    }
    nextFragment() {
        let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (fr) {
            this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
            this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
            while (this.trees.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
            }
            this.trees.push(fr.tree);
            this.start.push(-fr.offset);
            this.index.push(0);
            this.nextStart = this.safeFrom;
        }
        else {
            this.nextStart = 1e9;
        }
    }
    // `pos` must be >= any previously given `pos` for this cursor
    nodeAt(pos) {
        if (pos < this.nextStart)
            return null;
        while (this.fragment && this.safeTo <= pos)
            this.nextFragment();
        if (!this.fragment)
            return null;
        for (;;) {
            let last = this.trees.length - 1;
            if (last < 0) { // End of tree
                this.nextFragment();
                return null;
            }
            let top = this.trees[last], index = this.index[last];
            if (index == top.children.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
                continue;
            }
            let next = top.children[index];
            let start = this.start[last] + top.positions[index];
            if (start > pos) {
                this.nextStart = start;
                return null;
            }
            else if (start == pos && start + next.length <= this.safeTo) {
                return start == pos && start >= this.safeFrom ? next : null;
            }
            if (next instanceof lezer_tree__WEBPACK_IMPORTED_MODULE_0__.TreeBuffer) {
                this.index[last]++;
                this.nextStart = start + next.length;
            }
            else {
                this.index[last]++;
                if (start + next.length >= pos) { // Enter this node
                    this.trees.push(next);
                    this.start.push(start);
                    this.index.push(0);
                }
            }
        }
    }
}
class CachedToken extends Token {
    constructor() {
        super(...arguments);
        this.extended = -1;
        this.mask = 0;
        this.context = 0;
    }
    clear(start) {
        this.start = start;
        this.value = this.extended = -1;
    }
}
const dummyToken = new Token;
class TokenCache {
    constructor(parser) {
        this.tokens = [];
        this.mainToken = dummyToken;
        this.actions = [];
        this.tokens = parser.tokenizers.map(_ => new CachedToken);
    }
    getActions(stack, input) {
        let actionIndex = 0;
        let main = null;
        let { parser } = stack.p, { tokenizers } = parser;
        let mask = parser.stateSlot(stack.state, 3 /* TokenizerMask */);
        let context = stack.curContext ? stack.curContext.hash : 0;
        for (let i = 0; i < tokenizers.length; i++) {
            if (((1 << i) & mask) == 0)
                continue;
            let tokenizer = tokenizers[i], token = this.tokens[i];
            if (main && !tokenizer.fallback)
                continue;
            if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
                this.updateCachedToken(token, tokenizer, stack, input);
                token.mask = mask;
                token.context = context;
            }
            if (token.value != 0 /* Err */) {
                let startIndex = actionIndex;
                if (token.extended > -1)
                    actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
                actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
                if (!tokenizer.extend) {
                    main = token;
                    if (actionIndex > startIndex)
                        break;
                }
            }
        }
        while (this.actions.length > actionIndex)
            this.actions.pop();
        if (!main) {
            main = dummyToken;
            main.start = stack.pos;
            if (stack.pos == input.length)
                main.accept(stack.p.parser.eofTerm, stack.pos);
            else
                main.accept(0 /* Err */, stack.pos + 1);
        }
        this.mainToken = main;
        return this.actions;
    }
    updateCachedToken(token, tokenizer, stack, input) {
        token.clear(stack.pos);
        tokenizer.token(input, token, stack);
        if (token.value > -1) {
            let { parser } = stack.p;
            for (let i = 0; i < parser.specialized.length; i++)
                if (parser.specialized[i] == token.value) {
                    let result = parser.specializers[i](input.read(token.start, token.end), stack);
                    if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
                        if ((result & 1) == 0 /* Specialize */)
                            token.value = result >> 1;
                        else
                            token.extended = result >> 1;
                        break;
                    }
                }
        }
        else if (stack.pos == input.length) {
            token.accept(stack.p.parser.eofTerm, stack.pos);
        }
        else {
            token.accept(0 /* Err */, stack.pos + 1);
        }
    }
    putAction(action, token, end, index) {
        // Don't add duplicate actions
        for (let i = 0; i < index; i += 3)
            if (this.actions[i] == action)
                return index;
        this.actions[index++] = action;
        this.actions[index++] = token;
        this.actions[index++] = end;
        return index;
    }
    addActions(stack, token, end, index) {
        let { state } = stack, { parser } = stack.p, { data } = parser;
        for (let set = 0; set < 2; set++) {
            for (let i = parser.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */);; i += 3) {
                if (data[i] == 65535 /* End */) {
                    if (data[i + 1] == 1 /* Next */) {
                        i = pair(data, i + 2);
                    }
                    else {
                        if (index == 0 && data[i + 1] == 2 /* Other */)
                            index = this.putAction(pair(data, i + 1), token, end, index);
                        break;
                    }
                }
                if (data[i] == token)
                    index = this.putAction(pair(data, i + 1), token, end, index);
            }
        }
        return index;
    }
}
var Rec;
(function (Rec) {
    Rec[Rec["Distance"] = 5] = "Distance";
    Rec[Rec["MaxRemainingPerStep"] = 3] = "MaxRemainingPerStep";
    Rec[Rec["MinBufferLengthPrune"] = 200] = "MinBufferLengthPrune";
    Rec[Rec["ForceReduceLimit"] = 10] = "ForceReduceLimit";
})(Rec || (Rec = {}));
/// A parse context can be used for step-by-step parsing. After
/// creating it, you repeatedly call `.advance()` until it returns a
/// tree to indicate it has reached the end of the parse.
class Parse {
    constructor(parser, input, startPos, context) {
        this.parser = parser;
        this.input = input;
        this.startPos = startPos;
        this.context = context;
        // The position to which the parse has advanced.
        this.pos = 0;
        this.recovering = 0;
        this.nextStackID = 0x2654;
        this.nested = null;
        this.nestEnd = 0;
        this.nestWrap = null;
        this.reused = [];
        this.tokens = new TokenCache(parser);
        this.topTerm = parser.top[1];
        this.stacks = [Stack.start(this, parser.top[0], this.startPos)];
        let fragments = context === null || context === void 0 ? void 0 : context.fragments;
        this.fragments = fragments && fragments.length ? new FragmentCursor(fragments) : null;
    }
    // Move the parser forward. This will process all parse stacks at
    // `this.pos` and try to advance them to a further position. If no
    // stack for such a position is found, it'll start error-recovery.
    //
    // When the parse is finished, this will return a syntax tree. When
    // not, it returns `null`.
    advance() {
        if (this.nested) {
            let result = this.nested.advance();
            this.pos = this.nested.pos;
            if (result) {
                this.finishNested(this.stacks[0], result);
                this.nested = null;
            }
            return null;
        }
        let stacks = this.stacks, pos = this.pos;
        // This will hold stacks beyond `pos`.
        let newStacks = this.stacks = [];
        let stopped, stoppedTokens;
        let maybeNest;
        // Keep advancing any stacks at `pos` until they either move
        // forward or can't be advanced. Gather stacks that can't be
        // advanced further in `stopped`.
        for (let i = 0; i < stacks.length; i++) {
            let stack = stacks[i], nest;
            for (;;) {
                if (stack.pos > pos) {
                    newStacks.push(stack);
                }
                else if (nest = this.checkNest(stack)) {
                    if (!maybeNest || maybeNest.stack.score < stack.score)
                        maybeNest = nest;
                }
                else if (this.advanceStack(stack, newStacks, stacks)) {
                    continue;
                }
                else {
                    if (!stopped) {
                        stopped = [];
                        stoppedTokens = [];
                    }
                    stopped.push(stack);
                    let tok = this.tokens.mainToken;
                    stoppedTokens.push(tok.value, tok.end);
                }
                break;
            }
        }
        if (maybeNest) {
            this.startNested(maybeNest);
            return null;
        }
        if (!newStacks.length) {
            let finished = stopped && findFinished(stopped);
            if (finished)
                return this.stackToTree(finished);
            if (this.parser.strict) {
                if (verbose && stopped)
                    console.log("Stuck with token " + this.parser.getName(this.tokens.mainToken.value));
                throw new SyntaxError("No parse at " + pos);
            }
            if (!this.recovering)
                this.recovering = 5 /* Distance */;
        }
        if (this.recovering && stopped) {
            let finished = this.runRecovery(stopped, stoppedTokens, newStacks);
            if (finished)
                return this.stackToTree(finished.forceAll());
        }
        if (this.recovering) {
            let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3 /* MaxRemainingPerStep */;
            if (newStacks.length > maxRemaining) {
                newStacks.sort((a, b) => b.score - a.score);
                while (newStacks.length > maxRemaining)
                    newStacks.pop();
            }
            if (newStacks.some(s => s.reducePos > pos))
                this.recovering--;
        }
        else if (newStacks.length > 1) {
            // Prune stacks that are in the same state, or that have been
            // running without splitting for a while, to avoid getting stuck
            // with multiple successful stacks running endlessly on.
            outer: for (let i = 0; i < newStacks.length - 1; i++) {
                let stack = newStacks[i];
                for (let j = i + 1; j < newStacks.length; j++) {
                    let other = newStacks[j];
                    if (stack.sameState(other) ||
                        stack.buffer.length > 200 /* MinBufferLengthPrune */ && other.buffer.length > 200 /* MinBufferLengthPrune */) {
                        if (((stack.score - other.score) || (stack.buffer.length - other.buffer.length)) > 0) {
                            newStacks.splice(j--, 1);
                        }
                        else {
                            newStacks.splice(i--, 1);
                            continue outer;
                        }
                    }
                }
            }
        }
        this.pos = newStacks[0].pos;
        for (let i = 1; i < newStacks.length; i++)
            if (newStacks[i].pos < this.pos)
                this.pos = newStacks[i].pos;
        return null;
    }
    // Returns an updated version of the given stack, or null if the
    // stack can't advance normally. When `split` and `stacks` are
    // given, stacks split off by ambiguous operations will be pushed to
    // `split`, or added to `stacks` if they move `pos` forward.
    advanceStack(stack, stacks, split) {
        let start = stack.pos, { input, parser } = this;
        let base = verbose ? this.stackID(stack) + " -> " : "";
        if (this.fragments) {
            let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
            for (let cached = this.fragments.nodeAt(start); cached;) {
                let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
                if (match > -1 && cached.length && (!strictCx || (cached.contextHash || 0) == cxHash)) {
                    stack.useNode(cached, match);
                    if (verbose)
                        console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(cached.type.id)})`);
                    return true;
                }
                if (!(cached instanceof lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree) || cached.children.length == 0 || cached.positions[0] > 0)
                    break;
                let inner = cached.children[0];
                if (inner instanceof lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree)
                    cached = inner;
                else
                    break;
            }
        }
        let defaultReduce = parser.stateSlot(stack.state, 4 /* DefaultReduce */);
        if (defaultReduce > 0) {
            stack.reduce(defaultReduce);
            if (verbose)
                console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535 /* ValueMask */)})`);
            return true;
        }
        let actions = this.tokens.getActions(stack, input);
        for (let i = 0; i < actions.length;) {
            let action = actions[i++], term = actions[i++], end = actions[i++];
            let last = i == actions.length || !split;
            let localStack = last ? stack : stack.split();
            localStack.apply(action, term, end);
            if (verbose)
                console.log(base + this.stackID(localStack) + ` (via ${(action & 65536 /* ReduceFlag */) == 0 ? "shift"
                    : `reduce of ${parser.getName(action & 65535 /* ValueMask */)}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
            if (last)
                return true;
            else if (localStack.pos > start)
                stacks.push(localStack);
            else
                split.push(localStack);
        }
        return false;
    }
    // Advance a given stack forward as far as it will go. Returns the
    // (possibly updated) stack if it got stuck, or null if it moved
    // forward and was given to `pushStackDedup`.
    advanceFully(stack, newStacks) {
        let pos = stack.pos;
        for (;;) {
            let nest = this.checkNest(stack);
            if (nest)
                return nest;
            if (!this.advanceStack(stack, null, null))
                return false;
            if (stack.pos > pos) {
                pushStackDedup(stack, newStacks);
                return true;
            }
        }
    }
    runRecovery(stacks, tokens, newStacks) {
        let finished = null, restarted = false;
        let maybeNest;
        for (let i = 0; i < stacks.length; i++) {
            let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
            let base = verbose ? this.stackID(stack) + " -> " : "";
            if (stack.deadEnd) {
                if (restarted)
                    continue;
                restarted = true;
                stack.restart();
                if (verbose)
                    console.log(base + this.stackID(stack) + " (restarted)");
                let done = this.advanceFully(stack, newStacks);
                if (done) {
                    if (done !== true)
                        maybeNest = done;
                    continue;
                }
            }
            let force = stack.split(), forceBase = base;
            for (let j = 0; force.forceReduce() && j < 10 /* ForceReduceLimit */; j++) {
                if (verbose)
                    console.log(forceBase + this.stackID(force) + " (via force-reduce)");
                let done = this.advanceFully(force, newStacks);
                if (done) {
                    if (done !== true)
                        maybeNest = done;
                    break;
                }
                if (verbose)
                    forceBase = this.stackID(force) + " -> ";
            }
            for (let insert of stack.recoverByInsert(token)) {
                if (verbose)
                    console.log(base + this.stackID(insert) + " (via recover-insert)");
                this.advanceFully(insert, newStacks);
            }
            if (this.input.length > stack.pos) {
                if (tokenEnd == stack.pos) {
                    tokenEnd++;
                    token = 0 /* Err */;
                }
                stack.recoverByDelete(token, tokenEnd);
                if (verbose)
                    console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
                pushStackDedup(stack, newStacks);
            }
            else if (!finished || finished.score < stack.score) {
                finished = stack;
            }
        }
        if (finished)
            return finished;
        if (maybeNest)
            for (let s of this.stacks)
                if (s.score > maybeNest.stack.score) {
                    maybeNest = undefined;
                    break;
                }
        if (maybeNest)
            this.startNested(maybeNest);
        return null;
    }
    forceFinish() {
        let stack = this.stacks[0].split();
        if (this.nested)
            this.finishNested(stack, this.nested.forceFinish());
        return this.stackToTree(stack.forceAll());
    }
    // Convert the stack's buffer to a syntax tree.
    stackToTree(stack, pos = stack.pos) {
        if (this.parser.context)
            stack.emitContext();
        return lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree.build({ buffer: StackBufferCursor.create(stack),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.startPos,
            length: pos - this.startPos,
            minRepeatType: this.parser.minRepeatTerm });
    }
    checkNest(stack) {
        let info = this.parser.findNested(stack.state);
        if (!info)
            return null;
        let spec = info.value;
        if (typeof spec == "function")
            spec = spec(this.input, stack);
        return spec ? { stack, info, spec } : null;
    }
    startNested(nest) {
        let { stack, info, spec } = nest;
        this.stacks = [stack];
        this.nestEnd = this.scanForNestEnd(stack, info.end, spec.filterEnd);
        this.nestWrap = typeof spec.wrapType == "number" ? this.parser.nodeSet.types[spec.wrapType] : spec.wrapType || null;
        if (spec.startParse) {
            this.nested = spec.startParse(this.input.clip(this.nestEnd), stack.pos, this.context);
        }
        else {
            this.finishNested(stack);
        }
    }
    scanForNestEnd(stack, endToken, filter) {
        for (let pos = stack.pos; pos < this.input.length; pos++) {
            dummyToken.start = pos;
            dummyToken.value = -1;
            endToken.token(this.input, dummyToken, stack);
            if (dummyToken.value > -1 && (!filter || filter(this.input.read(pos, dummyToken.end))))
                return pos;
        }
        return this.input.length;
    }
    finishNested(stack, tree) {
        if (this.nestWrap)
            tree = new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree(this.nestWrap, tree ? [tree] : [], tree ? [0] : [], this.nestEnd - stack.pos);
        else if (!tree)
            tree = new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.Tree(lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeType.none, [], [], this.nestEnd - stack.pos);
        let info = this.parser.findNested(stack.state);
        stack.useNode(tree, this.parser.getGoto(stack.state, info.placeholder, true));
        if (verbose)
            console.log(this.stackID(stack) + ` (via unnest)`);
    }
    stackID(stack) {
        let id = (stackIDs || (stackIDs = new WeakMap)).get(stack);
        if (!id)
            stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
        return id + stack;
    }
}
function pushStackDedup(stack, newStacks) {
    for (let i = 0; i < newStacks.length; i++) {
        let other = newStacks[i];
        if (other.pos == stack.pos && other.sameState(stack)) {
            if (newStacks[i].score < stack.score)
                newStacks[i] = stack;
            return;
        }
    }
    newStacks.push(stack);
}
class Dialect {
    constructor(source, flags, disabled) {
        this.source = source;
        this.flags = flags;
        this.disabled = disabled;
    }
    allows(term) { return !this.disabled || this.disabled[term] == 0; }
}
const id = x => x;
/// Context trackers are used to track stateful context (such as
/// indentation in the Python grammar, or parent elements in the XML
/// grammar) needed by external tokenizers. You declare them in a
/// grammar file as `@context exportName from "module"`.
///
/// Context values should be immutable, and can be updated (replaced)
/// on shift or reduce actions.
class ContextTracker {
    /// The export used in a `@context` declaration should be of this
    /// type.
    constructor(spec) {
        this.start = spec.start;
        this.shift = spec.shift || id;
        this.reduce = spec.reduce || id;
        this.reuse = spec.reuse || id;
        this.hash = spec.hash;
        this.strict = spec.strict !== false;
    }
}
/// A parser holds the parse tables for a given grammar, as generated
/// by `lezer-generator`.
class Parser {
    /// @internal
    constructor(spec) {
        /// @internal
        this.bufferLength = lezer_tree__WEBPACK_IMPORTED_MODULE_0__.DefaultBufferLength;
        /// @internal
        this.strict = false;
        this.cachedDialect = null;
        if (spec.version != 13 /* Version */)
            throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (${13 /* Version */})`);
        let tokenArray = decodeArray(spec.tokenData);
        let nodeNames = spec.nodeNames.split(" ");
        this.minRepeatTerm = nodeNames.length;
        this.context = spec.context;
        for (let i = 0; i < spec.repeatNodeCount; i++)
            nodeNames.push("");
        let nodeProps = [];
        for (let i = 0; i < nodeNames.length; i++)
            nodeProps.push([]);
        function setProp(nodeID, prop, value) {
            nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
        }
        if (spec.nodeProps)
            for (let propSpec of spec.nodeProps) {
                let prop = propSpec[0];
                for (let i = 1; i < propSpec.length;) {
                    let next = propSpec[i++];
                    if (next >= 0) {
                        setProp(next, prop, propSpec[i++]);
                    }
                    else {
                        let value = propSpec[i + -next];
                        for (let j = -next; j > 0; j--)
                            setProp(propSpec[i++], prop, value);
                        i++;
                    }
                }
            }
        this.specialized = new Uint16Array(spec.specialized ? spec.specialized.length : 0);
        this.specializers = [];
        if (spec.specialized)
            for (let i = 0; i < spec.specialized.length; i++) {
                this.specialized[i] = spec.specialized[i].term;
                this.specializers[i] = spec.specialized[i].get;
            }
        this.states = decodeArray(spec.states, Uint32Array);
        this.data = decodeArray(spec.stateData);
        this.goto = decodeArray(spec.goto);
        let topTerms = Object.keys(spec.topRules).map(r => spec.topRules[r][1]);
        this.nodeSet = new lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeSet(nodeNames.map((name, i) => lezer_tree__WEBPACK_IMPORTED_MODULE_0__.NodeType.define({
            name: i >= this.minRepeatTerm ? undefined : name,
            id: i,
            props: nodeProps[i],
            top: topTerms.indexOf(i) > -1,
            error: i == 0,
            skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
        })));
        this.maxTerm = spec.maxTerm;
        this.tokenizers = spec.tokenizers.map(value => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
        this.topRules = spec.topRules;
        this.nested = (spec.nested || []).map(([name, value, endToken, placeholder]) => {
            return { name, value, end: new TokenGroup(decodeArray(endToken), 0), placeholder };
        });
        this.dialects = spec.dialects || {};
        this.dynamicPrecedences = spec.dynamicPrecedences || null;
        this.tokenPrecTable = spec.tokenPrec;
        this.termNames = spec.termNames || null;
        this.maxNode = this.nodeSet.types.length - 1;
        this.dialect = this.parseDialect();
        this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    /// Parse a given string or stream.
    parse(input, startPos = 0, context = {}) {
        if (typeof input == "string")
            input = (0,lezer_tree__WEBPACK_IMPORTED_MODULE_0__.stringInput)(input);
        let cx = new Parse(this, input, startPos, context);
        for (;;) {
            let done = cx.advance();
            if (done)
                return done;
        }
    }
    /// Start an incremental parse.
    startParse(input, startPos = 0, context = {}) {
        if (typeof input == "string")
            input = (0,lezer_tree__WEBPACK_IMPORTED_MODULE_0__.stringInput)(input);
        return new Parse(this, input, startPos, context);
    }
    /// Get a goto table entry @internal
    getGoto(state, term, loose = false) {
        let table = this.goto;
        if (term >= table[0])
            return -1;
        for (let pos = table[term + 1];;) {
            let groupTag = table[pos++], last = groupTag & 1;
            let target = table[pos++];
            if (last && loose)
                return target;
            for (let end = pos + (groupTag >> 1); pos < end; pos++)
                if (table[pos] == state)
                    return target;
            if (last)
                return -1;
        }
    }
    /// Check if this state has an action for a given terminal @internal
    hasAction(state, terminal) {
        let data = this.data;
        for (let set = 0; set < 2; set++) {
            for (let i = this.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next;; i += 3) {
                if ((next = data[i]) == 65535 /* End */) {
                    if (data[i + 1] == 1 /* Next */)
                        next = data[i = pair(data, i + 2)];
                    else if (data[i + 1] == 2 /* Other */)
                        return pair(data, i + 2);
                    else
                        break;
                }
                if (next == terminal || next == 0 /* Err */)
                    return pair(data, i + 1);
            }
        }
        return 0;
    }
    /// @internal
    stateSlot(state, slot) {
        return this.states[(state * 6 /* Size */) + slot];
    }
    /// @internal
    stateFlag(state, flag) {
        return (this.stateSlot(state, 0 /* Flags */) & flag) > 0;
    }
    /// @internal
    findNested(state) {
        let flags = this.stateSlot(state, 0 /* Flags */);
        return flags & 4 /* StartNest */ ? this.nested[flags >> 10 /* NestShift */] : null;
    }
    /// @internal
    validAction(state, action) {
        if (action == this.stateSlot(state, 4 /* DefaultReduce */))
            return true;
        for (let i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */) {
                if (this.data[i + 1] == 1 /* Next */)
                    i = pair(this.data, i + 2);
                else
                    return false;
            }
            if (action == pair(this.data, i + 1))
                return true;
        }
    }
    /// Get the states that can follow this one through shift actions or
    /// goto jumps. @internal
    nextStates(state) {
        let result = [];
        for (let i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */) {
                if (this.data[i + 1] == 1 /* Next */)
                    i = pair(this.data, i + 2);
                else
                    break;
            }
            if ((this.data[i + 2] & (65536 /* ReduceFlag */ >> 16)) == 0) {
                let value = this.data[i + 1];
                if (!result.some((v, i) => (i & 1) && v == value))
                    result.push(this.data[i], value);
            }
        }
        return result;
    }
    /// @internal
    overrides(token, prev) {
        let iPrev = findOffset(this.data, this.tokenPrecTable, prev);
        return iPrev < 0 || findOffset(this.data, this.tokenPrecTable, token) < iPrev;
    }
    /// Configure the parser. Returns a new parser instance that has the
    /// given settings modified. Settings not provided in `config` are
    /// kept from the original parser.
    configure(config) {
        // Hideous reflection-based kludge to make it easy to create a
        // slightly modified copy of a parser.
        let copy = Object.assign(Object.create(Parser.prototype), this);
        if (config.props)
            copy.nodeSet = this.nodeSet.extend(...config.props);
        if (config.top) {
            let info = this.topRules[config.top];
            if (!info)
                throw new RangeError(`Invalid top rule name ${config.top}`);
            copy.top = info;
        }
        if (config.tokenizers)
            copy.tokenizers = this.tokenizers.map(t => {
                let found = config.tokenizers.find(r => r.from == t);
                return found ? found.to : t;
            });
        if (config.dialect)
            copy.dialect = this.parseDialect(config.dialect);
        if (config.nested)
            copy.nested = this.nested.map(obj => {
                if (!Object.prototype.hasOwnProperty.call(config.nested, obj.name))
                    return obj;
                return { name: obj.name, value: config.nested[obj.name], end: obj.end, placeholder: obj.placeholder };
            });
        if (config.strict != null)
            copy.strict = config.strict;
        if (config.bufferLength != null)
            copy.bufferLength = config.bufferLength;
        return copy;
    }
    /// Returns the name associated with a given term. This will only
    /// work for all terms when the parser was generated with the
    /// `--names` option. By default, only the names of tagged terms are
    /// stored.
    getName(term) {
        return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
    }
    /// The eof term id is always allocated directly after the node
    /// types. @internal
    get eofTerm() { return this.maxNode + 1; }
    /// Tells you whether this grammar has any nested grammars.
    get hasNested() { return this.nested.length > 0; }
    /// The type of top node produced by the parser.
    get topNode() { return this.nodeSet.types[this.top[1]]; }
    /// @internal
    dynamicPrecedence(term) {
        let prec = this.dynamicPrecedences;
        return prec == null ? 0 : prec[term] || 0;
    }
    /// @internal
    parseDialect(dialect) {
        if (this.cachedDialect && this.cachedDialect.source == dialect)
            return this.cachedDialect;
        let values = Object.keys(this.dialects), flags = values.map(() => false);
        if (dialect)
            for (let part of dialect.split(" ")) {
                let id = values.indexOf(part);
                if (id >= 0)
                    flags[id] = true;
            }
        let disabled = null;
        for (let i = 0; i < values.length; i++)
            if (!flags[i]) {
                for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535 /* End */;)
                    (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
            }
        return this.cachedDialect = new Dialect(dialect, flags, disabled);
    }
    /// (used by the output of the parser generator) @internal
    static deserialize(spec) {
        return new Parser(spec);
    }
}
function pair(data, off) { return data[off] | (data[off + 1] << 16); }
function findOffset(data, start, term) {
    for (let i = start, next; (next = data[i]) != 65535 /* End */; i++)
        if (next == term)
            return i - start;
    return -1;
}
function findFinished(stacks) {
    let best = null;
    for (let stack of stacks) {
        if (stack.pos == stack.p.input.length &&
            stack.p.parser.stateFlag(stack.state, 2 /* Accepting */) &&
            (!best || best.score < stack.score))
            best = stack;
    }
    return best;
}


//# sourceMappingURL=index.es.js.map


/***/ }),
/* 41 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletionContext": () => (/* binding */ CompletionContext),
/* harmony export */   "acceptCompletion": () => (/* binding */ acceptCompletion),
/* harmony export */   "autocompletion": () => (/* binding */ autocompletion),
/* harmony export */   "clearSnippet": () => (/* binding */ clearSnippet),
/* harmony export */   "closeCompletion": () => (/* binding */ closeCompletion),
/* harmony export */   "completeAnyWord": () => (/* binding */ completeAnyWord),
/* harmony export */   "completeFromList": () => (/* binding */ completeFromList),
/* harmony export */   "completionKeymap": () => (/* binding */ completionKeymap),
/* harmony export */   "completionStatus": () => (/* binding */ completionStatus),
/* harmony export */   "currentCompletions": () => (/* binding */ currentCompletions),
/* harmony export */   "ifIn": () => (/* binding */ ifIn),
/* harmony export */   "ifNotIn": () => (/* binding */ ifNotIn),
/* harmony export */   "moveCompletionSelection": () => (/* binding */ moveCompletionSelection),
/* harmony export */   "nextSnippetField": () => (/* binding */ nextSnippetField),
/* harmony export */   "prevSnippetField": () => (/* binding */ prevSnippetField),
/* harmony export */   "snippet": () => (/* binding */ snippet),
/* harmony export */   "snippetCompletion": () => (/* binding */ snippetCompletion),
/* harmony export */   "snippetKeymap": () => (/* binding */ snippetKeymap),
/* harmony export */   "startCompletion": () => (/* binding */ startCompletion)
/* harmony export */ });
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _codemirror_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _codemirror_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);






/**
An instance of this is passed to completion source functions.
*/
class CompletionContext {
    /**
    Create a new completion context. (Mostly useful for testing
    completion sources—in the editor, the extension will create
    these for you.)
    */
    constructor(
    /**
    The editor state that the completion happens in.
    */
    state, 
    /**
    The position at which the completion is happening.
    */
    pos, 
    /**
    Indicates whether completion was activated explicitly, or
    implicitly by typing. The usual way to respond to this is to
    only return completions when either there is part of a
    completable entity before the cursor, or `explicit` is true.
    */
    explicit) {
        this.state = state;
        this.pos = pos;
        this.explicit = explicit;
        /**
        @internal
        */
        this.abortListeners = [];
    }
    /**
    Get the extent, content, and (if there is a token) type of the
    token before `this.pos`.
    */
    tokenBefore(types) {
        let token = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_0__.syntaxTree)(this.state).resolve(this.pos, -1);
        while (token && types.indexOf(token.name) < 0)
            token = token.parent;
        return token ? { from: token.from, to: this.pos,
            text: this.state.sliceDoc(token.from, this.pos),
            type: token.type } : null;
    }
    /**
    Get the match of the given expression directly before the
    cursor.
    */
    matchBefore(expr) {
        let line = this.state.doc.lineAt(this.pos);
        let start = Math.max(line.from, this.pos - 250);
        let str = line.text.slice(start - line.from, this.pos - line.from);
        let found = str.search(ensureAnchor(expr, false));
        return found < 0 ? null : { from: start + found, to: this.pos, text: str.slice(found) };
    }
    /**
    Yields true when the query has been aborted. Can be useful in
    asynchronous queries to avoid doing work that will be ignored.
    */
    get aborted() { return this.abortListeners == null; }
    /**
    Allows you to register abort handlers, which will be called when
    the query is
    [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
    */
    addEventListener(type, listener) {
        if (type == "abort" && this.abortListeners)
            this.abortListeners.push(listener);
    }
}
function toSet(chars) {
    let flat = Object.keys(chars).join("");
    let words = /\w/.test(flat);
    if (words)
        flat = flat.replace(/\w/g, "");
    return `[${words ? "\\w" : ""}${flat.replace(/[^\w\s]/g, "\\$&")}]`;
}
function prefixMatch(options) {
    let first = Object.create(null), rest = Object.create(null);
    for (let { label } of options) {
        first[label[0]] = true;
        for (let i = 1; i < label.length; i++)
            rest[label[i]] = true;
    }
    let source = toSet(first) + toSet(rest) + "*$";
    return [new RegExp("^" + source), new RegExp(source)];
}
/**
Given a a fixed array of options, return an autocompleter that
completes them.
*/
function completeFromList(list) {
    let options = list.map(o => typeof o == "string" ? { label: o } : o);
    let [span, match] = options.every(o => /^\w+$/.test(o.label)) ? [/\w*$/, /\w+$/] : prefixMatch(options);
    return (context) => {
        let token = context.matchBefore(match);
        return token || context.explicit ? { from: token ? token.from : context.pos, options, span } : null;
    };
}
/**
Wrap the given completion source so that it will only fire when the
cursor is in a syntax node with one of the given names.
*/
function ifIn(nodes, source) {
    return (context) => {
        for (let pos = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_0__.syntaxTree)(context.state).resolve(context.pos, -1); pos; pos = pos.parent)
            if (nodes.indexOf(pos.name) > -1)
                return source(context);
        return null;
    };
}
/**
Wrap the given completion source so that it will not fire when the
cursor is in a syntax node with one of the given names.
*/
function ifNotIn(nodes, source) {
    return (context) => {
        for (let pos = (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_0__.syntaxTree)(context.state).resolve(context.pos, -1); pos; pos = pos.parent)
            if (nodes.indexOf(pos.name) > -1)
                return null;
        return source(context);
    };
}
class Option {
    constructor(completion, source, match) {
        this.completion = completion;
        this.source = source;
        this.match = match;
    }
}
function cur(state) { return state.selection.main.head; }
// Make sure the given regexp has a $ at its end and, if `start` is
// true, a ^ at its start.
function ensureAnchor(expr, start) {
    var _a;
    let { source } = expr;
    let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";
    if (!addStart && !addEnd)
        return expr;
    return new RegExp(`${addStart ? "^" : ""}(?:${source})${addEnd ? "$" : ""}`, (_a = expr.flags) !== null && _a !== void 0 ? _a : (expr.ignoreCase ? "i" : ""));
}
function applyCompletion(view, option) {
    let apply = option.completion.apply || option.completion.label;
    let result = option.source;
    if (typeof apply == "string") {
        view.dispatch({
            changes: { from: result.from, to: result.to, insert: apply },
            selection: { anchor: result.from + apply.length }
        });
    }
    else {
        apply(view, option.completion, result.from, result.to);
    }
}
const SourceCache = /*@__PURE__*/new WeakMap();
function asSource(source) {
    if (!Array.isArray(source))
        return source;
    let known = SourceCache.get(source);
    if (!known)
        SourceCache.set(source, known = completeFromList(source));
    return known;
}

// A pattern matcher for fuzzy completion matching. Create an instance
// once for a pattern, and then use that to match any number of
// completions.
class FuzzyMatcher {
    constructor(pattern) {
        this.pattern = pattern;
        this.chars = [];
        this.folded = [];
        // Buffers reused by calls to `match` to track matched character
        // positions.
        this.any = [];
        this.precise = [];
        this.byWord = [];
        for (let p = 0; p < pattern.length;) {
            let char = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(pattern, p), size = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(char);
            this.chars.push(char);
            let part = pattern.slice(p, p + size), upper = part.toUpperCase();
            this.folded.push((0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(upper == part ? part.toLowerCase() : upper, 0));
            p += size;
        }
        this.astral = pattern.length != this.chars.length;
    }
    // Matches a given word (completion) against the pattern (input).
    // Will return null for no match, and otherwise an array that starts
    // with the match score, followed by any number of `from, to` pairs
    // indicating the matched parts of `word`.
    //
    // The score is a number that is more negative the worse the match
    // is. See `Penalty` above.
    match(word) {
        if (this.pattern.length == 0)
            return [0];
        if (word.length < this.pattern.length)
            return null;
        let { chars, folded, any, precise, byWord } = this;
        // For single-character queries, only match when they occur right
        // at the start
        if (chars.length == 1) {
            let first = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(word, 0);
            return first == chars[0] ? [0, 0, (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(first)]
                : first == folded[0] ? [-200 /* CaseFold */, 0, (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(first)] : null;
        }
        let direct = word.indexOf(this.pattern);
        if (direct == 0)
            return [0, 0, this.pattern.length];
        let len = chars.length, anyTo = 0;
        if (direct < 0) {
            for (let i = 0, e = Math.min(word.length, 200); i < e && anyTo < len;) {
                let next = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(word, i);
                if (next == chars[anyTo] || next == folded[anyTo])
                    any[anyTo++] = i;
                i += (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(next);
            }
            // No match, exit immediately
            if (anyTo < len)
                return null;
        }
        // This tracks the extent of the precise (non-folded, not
        // necessarily adjacent) match
        let preciseTo = 0;
        // Tracks whether there is a match that hits only characters that
        // appear to be starting words. `byWordFolded` is set to true when
        // a case folded character is encountered in such a match
        let byWordTo = 0, byWordFolded = false;
        // If we've found a partial adjacent match, these track its state
        let adjacentTo = 0, adjacentStart = -1, adjacentEnd = -1;
        let hasLower = /[a-z]/.test(word);
        // Go over the option's text, scanning for the various kinds of matches
        for (let i = 0, e = Math.min(word.length, 200), prevType = 0 /* NonWord */; i < e && byWordTo < len;) {
            let next = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(word, i);
            if (direct < 0) {
                if (preciseTo < len && next == chars[preciseTo])
                    precise[preciseTo++] = i;
                if (adjacentTo < len) {
                    if (next == chars[adjacentTo] || next == folded[adjacentTo]) {
                        if (adjacentTo == 0)
                            adjacentStart = i;
                        adjacentEnd = i;
                        adjacentTo++;
                    }
                    else {
                        adjacentTo = 0;
                    }
                }
            }
            let ch, type = next < 0xff
                ? (next >= 48 && next <= 57 || next >= 97 && next <= 122 ? 2 /* Lower */ : next >= 65 && next <= 90 ? 1 /* Upper */ : 0 /* NonWord */)
                : ((ch = (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.fromCodePoint)(next)) != ch.toLowerCase() ? 1 /* Upper */ : ch != ch.toUpperCase() ? 2 /* Lower */ : 0 /* NonWord */);
            if ((type == 1 /* Upper */ && hasLower || prevType == 0 /* NonWord */ && type != 0 /* NonWord */) &&
                (chars[byWordTo] == next || (folded[byWordTo] == next && (byWordFolded = true))))
                byWord[byWordTo++] = i;
            prevType = type;
            i += (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointSize)(next);
        }
        if (byWordTo == len && byWord[0] == 0)
            return this.result(-100 /* ByWord */ + (byWordFolded ? -200 /* CaseFold */ : 0), byWord, word);
        if (adjacentTo == len && adjacentStart == 0)
            return [-200 /* CaseFold */, 0, adjacentEnd];
        if (direct > -1)
            return [-700 /* NotStart */, direct, direct + this.pattern.length];
        if (adjacentTo == len)
            return [-200 /* CaseFold */ + -700 /* NotStart */, adjacentStart, adjacentEnd];
        if (byWordTo == len)
            return this.result(-100 /* ByWord */ + (byWordFolded ? -200 /* CaseFold */ : 0) + -700 /* NotStart */, byWord, word);
        return chars.length == 2 ? null : this.result((any[0] ? -700 /* NotStart */ : 0) + -200 /* CaseFold */ + -1100 /* Gap */, any, word);
    }
    result(score, positions, word) {
        let result = [score], i = 1;
        for (let pos of positions) {
            let to = pos + (this.astral ? (0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointSize)((0,_codemirror_text__WEBPACK_IMPORTED_MODULE_1__.codePointAt)(word, pos)) : 1);
            if (i > 1 && result[i - 1] == pos)
                result[i - 1] = to;
            else {
                result[i++] = pos;
                result[i++] = to;
            }
        }
        return result;
    }
}

const completionConfig = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Facet.define({
    combine(configs) {
        return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.combineConfig)(configs, {
            activateOnTyping: true,
            override: null,
            maxRenderedOptions: 100,
            defaultKeymap: true
        }, {
            defaultKeymap: (a, b) => a && b
        });
    }
});

const MaxInfoWidth = 300;
const baseTheme = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
        "& > ul": {
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "auto",
            maxWidth_fallback: "700px",
            maxWidth: "min(700px, 95vw)",
            maxHeight: "10em",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li": {
                cursor: "pointer",
                padding: "1px 1em 1px 3px",
                lineHeight: 1.2
            },
            "& > li[aria-selected]": {
                background_fallback: "#bdf",
                backgroundColor: "Highlight",
                color_fallback: "white",
                color: "HighlightText"
            }
        }
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
        content: '"···"',
        opacity: 0.5,
        display: "block",
        textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
        position: "absolute",
        padding: "3px 9px",
        width: "max-content",
        maxWidth: MaxInfoWidth + "px",
    },
    ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
    ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
    "&light .cm-snippetField": { backgroundColor: "#00000022" },
    "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
    ".cm-snippetFieldPosition": {
        verticalAlign: "text-top",
        width: 0,
        height: "1.15em",
        margin: "0 -0.7px -.7em",
        borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
        textDecoration: "underline"
    },
    ".cm-completionDetail": {
        marginLeft: "0.5em",
        fontStyle: "italic"
    },
    ".cm-completionIcon": {
        fontSize: "90%",
        width: ".8em",
        display: "inline-block",
        textAlign: "center",
        paddingRight: ".6em",
        opacity: "0.6"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
        "&:after": { content: "'ƒ'" }
    },
    ".cm-completionIcon-class": {
        "&:after": { content: "'○'" }
    },
    ".cm-completionIcon-interface": {
        "&:after": { content: "'◌'" }
    },
    ".cm-completionIcon-variable": {
        "&:after": { content: "'𝑥'" }
    },
    ".cm-completionIcon-constant": {
        "&:after": { content: "'𝐶'" }
    },
    ".cm-completionIcon-type": {
        "&:after": { content: "'𝑡'" }
    },
    ".cm-completionIcon-enum": {
        "&:after": { content: "'∪'" }
    },
    ".cm-completionIcon-property": {
        "&:after": { content: "'□'" }
    },
    ".cm-completionIcon-keyword": {
        "&:after": { content: "'🔑\uFE0E'" } // Disable emoji rendering
    },
    ".cm-completionIcon-namespace": {
        "&:after": { content: "'▢'" }
    },
    ".cm-completionIcon-text": {
        "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
    }
});

function createListBox(options, id, range) {
    const ul = document.createElement("ul");
    ul.id = id;
    ul.setAttribute("role", "listbox");
    ul.setAttribute("aria-expanded", "true");
    for (let i = range.from; i < range.to; i++) {
        let { completion, match } = options[i];
        const li = ul.appendChild(document.createElement("li"));
        li.id = id + "-" + i;
        let icon = li.appendChild(document.createElement("div"));
        icon.classList.add("cm-completionIcon");
        if (completion.type)
            icon.classList.add(...completion.type.split(/\s+/g).map(cls => "cm-completionIcon-" + cls));
        icon.setAttribute("aria-hidden", "true");
        let labelElt = li.appendChild(document.createElement("span"));
        labelElt.className = "cm-completionLabel";
        let { label, detail } = completion, off = 0;
        for (let j = 1; j < match.length;) {
            let from = match[j++], to = match[j++];
            if (from > off)
                labelElt.appendChild(document.createTextNode(label.slice(off, from)));
            let span = labelElt.appendChild(document.createElement("span"));
            span.appendChild(document.createTextNode(label.slice(from, to)));
            span.className = "cm-completionMatchedText";
            off = to;
        }
        if (off < label.length)
            labelElt.appendChild(document.createTextNode(label.slice(off)));
        if (detail) {
            let detailElt = li.appendChild(document.createElement("span"));
            detailElt.className = "cm-completionDetail";
            detailElt.textContent = detail;
        }
        li.setAttribute("role", "option");
    }
    if (range.from)
        ul.classList.add("cm-completionListIncompleteTop");
    if (range.to < options.length)
        ul.classList.add("cm-completionListIncompleteBottom");
    return ul;
}
function createInfoDialog(option, view) {
    let dom = document.createElement("div");
    dom.className = "cm-tooltip cm-completionInfo";
    let { info } = option.completion;
    if (typeof info == "string") {
        dom.textContent = info;
    }
    else {
        let content = info(option.completion);
        if (content.then)
            content.then(node => dom.appendChild(node), e => (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.logException)(view.state, e, "completion info"));
        else
            dom.appendChild(content);
    }
    return dom;
}
function rangeAroundSelected(total, selected, max) {
    if (total <= max)
        return { from: 0, to: total };
    if (selected <= (total >> 1)) {
        let off = Math.floor(selected / max);
        return { from: off * max, to: (off + 1) * max };
    }
    let off = Math.floor((total - selected) / max);
    return { from: total - (off + 1) * max, to: total - off * max };
}
class CompletionTooltip {
    constructor(view, stateField) {
        this.view = view;
        this.stateField = stateField;
        this.info = null;
        this.placeInfo = {
            read: () => this.measureInfo(),
            write: (pos) => this.positionInfo(pos),
            key: this
        };
        let cState = view.state.field(stateField);
        let { options, selected } = cState.open;
        let config = view.state.facet(completionConfig);
        this.range = rangeAroundSelected(options.length, selected, config.maxRenderedOptions);
        this.dom = document.createElement("div");
        this.dom.className = "cm-tooltip-autocomplete";
        this.dom.addEventListener("mousedown", (e) => {
            for (let dom = e.target, match; dom && dom != this.dom; dom = dom.parentNode) {
                if (dom.nodeName == "LI" && (match = /-(\d+)$/.exec(dom.id)) && +match[1] < options.length) {
                    applyCompletion(view, options[+match[1]]);
                    e.preventDefault();
                    return;
                }
            }
        });
        this.list = this.dom.appendChild(createListBox(options, cState.id, this.range));
        this.list.addEventListener("scroll", () => {
            if (this.info)
                this.view.requestMeasure(this.placeInfo);
        });
    }
    mount() { this.updateSel(); }
    update(update) {
        if (update.state.field(this.stateField) != update.startState.field(this.stateField))
            this.updateSel();
    }
    positioned() {
        if (this.info)
            this.view.requestMeasure(this.placeInfo);
    }
    updateSel() {
        let cState = this.view.state.field(this.stateField), open = cState.open;
        if (open.selected < this.range.from || open.selected >= this.range.to) {
            this.range = rangeAroundSelected(open.options.length, open.selected, this.view.state.facet(completionConfig).maxRenderedOptions);
            this.list.remove();
            this.list = this.dom.appendChild(createListBox(open.options, cState.id, this.range));
            this.list.addEventListener("scroll", () => {
                if (this.info)
                    this.view.requestMeasure(this.placeInfo);
            });
        }
        if (this.updateSelectedOption(open.selected)) {
            if (this.info) {
                this.info.remove();
                this.info = null;
            }
            let option = open.options[open.selected];
            if (option.completion.info) {
                this.info = this.dom.appendChild(createInfoDialog(option, this.view));
                this.view.requestMeasure(this.placeInfo);
            }
        }
    }
    updateSelectedOption(selected) {
        let set = null;
        for (let opt = this.list.firstChild, i = this.range.from; opt; opt = opt.nextSibling, i++) {
            if (i == selected) {
                if (!opt.hasAttribute("aria-selected")) {
                    opt.setAttribute("aria-selected", "true");
                    set = opt;
                }
            }
            else {
                if (opt.hasAttribute("aria-selected"))
                    opt.removeAttribute("aria-selected");
            }
        }
        if (set)
            scrollIntoView(this.list, set);
        return set;
    }
    measureInfo() {
        let sel = this.dom.querySelector("[aria-selected]");
        if (!sel)
            return null;
        let rect = this.dom.getBoundingClientRect();
        let top = sel.getBoundingClientRect().top - rect.top;
        if (top < 0 || top > this.list.clientHeight - 10)
            return null;
        let left = this.view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Direction.RTL;
        let spaceLeft = rect.left, spaceRight = innerWidth - rect.right;
        if (left && spaceLeft < Math.min(MaxInfoWidth, spaceRight))
            left = false;
        else if (!left && spaceRight < Math.min(MaxInfoWidth, spaceLeft))
            left = true;
        return { top, left };
    }
    positionInfo(pos) {
        if (this.info && pos) {
            this.info.style.top = pos.top + "px";
            this.info.classList.toggle("cm-completionInfo-left", pos.left);
            this.info.classList.toggle("cm-completionInfo-right", !pos.left);
        }
    }
}
// We allocate a new function instance every time the completion
// changes to force redrawing/repositioning of the tooltip
function completionTooltip(stateField) {
    return (view) => new CompletionTooltip(view, stateField);
}
function scrollIntoView(container, element) {
    let parent = container.getBoundingClientRect();
    let self = element.getBoundingClientRect();
    if (self.top < parent.top)
        container.scrollTop -= parent.top - self.top;
    else if (self.bottom > parent.bottom)
        container.scrollTop += self.bottom - parent.bottom;
}

const MaxOptions = 300;
// Used to pick a preferred option when two options with the same
// label occur in the result.
function score(option) {
    return (option.boost || 0) * 100 + (option.apply ? 10 : 0) + (option.info ? 5 : 0) +
        (option.type ? 1 : 0);
}
function sortOptions(active, state) {
    let options = [], i = 0;
    for (let a of active)
        if (a.hasResult()) {
            if (a.result.filter === false) {
                for (let option of a.result.options)
                    options.push(new Option(option, a, [1e9 - i++]));
            }
            else {
                let matcher = new FuzzyMatcher(state.sliceDoc(a.from, a.to)), match;
                for (let option of a.result.options)
                    if (match = matcher.match(option.label)) {
                        if (option.boost != null)
                            match[0] += option.boost;
                        options.push(new Option(option, a, match));
                    }
            }
        }
    options.sort(cmpOption);
    let result = [], prev = null;
    for (let opt of options.sort(cmpOption)) {
        if (result.length == MaxOptions)
            break;
        if (!prev || prev.label != opt.completion.label || prev.detail != opt.completion.detail)
            result.push(opt);
        else if (score(opt.completion) > score(prev))
            result[result.length - 1] = opt;
        prev = opt.completion;
    }
    return result;
}
class CompletionDialog {
    constructor(options, attrs, tooltip, timestamp, selected) {
        this.options = options;
        this.attrs = attrs;
        this.tooltip = tooltip;
        this.timestamp = timestamp;
        this.selected = selected;
    }
    setSelected(selected, id) {
        return selected == this.selected || selected >= this.options.length ? this
            : new CompletionDialog(this.options, makeAttrs(id, selected), this.tooltip, this.timestamp, selected);
    }
    static build(active, state, id, prev) {
        let options = sortOptions(active, state);
        if (!options.length)
            return null;
        let selected = 0;
        if (prev && prev.selected) {
            let selectedValue = prev.options[prev.selected].completion;
            for (let i = 0; i < options.length && !selected; i++) {
                if (options[i].completion == selectedValue)
                    selected = i;
            }
        }
        return new CompletionDialog(options, makeAttrs(id, selected), {
            pos: active.reduce((a, b) => b.hasResult() ? Math.min(a, b.from) : a, 1e8),
            create: completionTooltip(completionState)
        }, prev ? prev.timestamp : Date.now(), selected);
    }
    map(changes) {
        return new CompletionDialog(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: changes.mapPos(this.tooltip.pos) }), this.timestamp, this.selected);
    }
}
class CompletionState {
    constructor(active, id, open) {
        this.active = active;
        this.id = id;
        this.open = open;
    }
    static start() {
        return new CompletionState(none, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(tr) {
        let { state } = tr, conf = state.facet(completionConfig);
        let sources = conf.override ||
            state.languageDataAt("autocomplete", cur(state)).map(asSource);
        let active = sources.map(source => {
            let value = this.active.find(s => s.source == source) ||
                new ActiveSource(source, this.active.some(a => a.state != 0 /* Inactive */) ? 1 /* Pending */ : 0 /* Inactive */);
            return value.update(tr, conf);
        });
        if (active.length == this.active.length && active.every((a, i) => a == this.active[i]))
            active = this.active;
        let open = tr.selection || active.some(a => a.hasResult() && tr.changes.touchesRange(a.from, a.to)) ||
            !sameResults(active, this.active) ? CompletionDialog.build(active, state, this.id, this.open)
            : this.open && tr.docChanged ? this.open.map(tr.changes) : this.open;
        if (!open && active.every(a => a.state != 1 /* Pending */) && active.some(a => a.hasResult()))
            active = active.map(a => a.hasResult() ? new ActiveSource(a.source, 0 /* Inactive */) : a);
        for (let effect of tr.effects)
            if (effect.is(setSelectedEffect))
                open = open && open.setSelected(effect.value, this.id);
        return active == this.active && open == this.open ? this : new CompletionState(active, this.id, open);
    }
    get tooltip() { return this.open ? this.open.tooltip : null; }
    get attrs() { return this.open ? this.open.attrs : baseAttrs; }
}
function sameResults(a, b) {
    if (a == b)
        return true;
    for (let iA = 0, iB = 0;;) {
        while (iA < a.length && !a[iA].hasResult)
            iA++;
        while (iB < b.length && !b[iB].hasResult)
            iB++;
        let endA = iA == a.length, endB = iB == b.length;
        if (endA || endB)
            return endA == endB;
        if (a[iA++].result != b[iB++].result)
            return false;
    }
}
function makeAttrs(id, selected) {
    return {
        "aria-autocomplete": "list",
        "aria-activedescendant": id + "-" + selected,
        "aria-owns": id
    };
}
const baseAttrs = { "aria-autocomplete": "list" }, none = [];
function cmpOption(a, b) {
    let dScore = b.match[0] - a.match[0];
    if (dScore)
        return dScore;
    let lA = a.completion.label, lB = b.completion.label;
    return lA < lB ? -1 : lA == lB ? 0 : 1;
}
class ActiveSource {
    constructor(source, state, explicitPos = -1) {
        this.source = source;
        this.state = state;
        this.explicitPos = explicitPos;
    }
    hasResult() { return false; }
    update(tr, conf) {
        let event = tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Transaction.userEvent), value = this;
        if (event == "input" || event == "delete")
            value = value.handleUserEvent(tr, event, conf);
        else if (tr.docChanged)
            value = value.handleChange(tr);
        else if (tr.selection && value.state != 0 /* Inactive */)
            value = new ActiveSource(value.source, 0 /* Inactive */);
        for (let effect of tr.effects) {
            if (effect.is(startCompletionEffect))
                value = new ActiveSource(value.source, 1 /* Pending */, effect.value ? cur(tr.state) : -1);
            else if (effect.is(closeCompletionEffect))
                value = new ActiveSource(value.source, 0 /* Inactive */);
            else if (effect.is(setActiveEffect))
                for (let active of effect.value)
                    if (active.source == value.source)
                        value = active;
        }
        return value;
    }
    handleUserEvent(tr, type, conf) {
        return type == "delete" || !conf.activateOnTyping ? this.map(tr.changes) : new ActiveSource(this.source, 1 /* Pending */);
    }
    handleChange(tr) {
        return tr.changes.touchesRange(cur(tr.startState)) ? new ActiveSource(this.source, 0 /* Inactive */) : this.map(tr.changes);
    }
    map(changes) {
        return changes.empty || this.explicitPos < 0 ? this : new ActiveSource(this.source, this.state, changes.mapPos(this.explicitPos));
    }
}
class ActiveResult extends ActiveSource {
    constructor(source, explicitPos, result, from, to, span) {
        super(source, 2 /* Result */, explicitPos);
        this.result = result;
        this.from = from;
        this.to = to;
        this.span = span;
    }
    hasResult() { return true; }
    handleUserEvent(tr, type, conf) {
        let from = tr.changes.mapPos(this.from), to = tr.changes.mapPos(this.to, 1);
        let pos = cur(tr.state);
        if ((this.explicitPos > -1 ? pos < from : pos <= from) || pos > to)
            return new ActiveSource(this.source, type == "input" && conf.activateOnTyping ? 1 /* Pending */ : 0 /* Inactive */);
        let explicitPos = this.explicitPos < 0 ? -1 : tr.changes.mapPos(this.explicitPos);
        if (this.span && (from == to || this.span.test(tr.state.sliceDoc(from, to))))
            return new ActiveResult(this.source, explicitPos, this.result, from, to, this.span);
        return new ActiveSource(this.source, 1 /* Pending */, explicitPos);
    }
    handleChange(tr) {
        return tr.changes.touchesRange(this.from, this.to) ? new ActiveSource(this.source, 0 /* Inactive */) : this.map(tr.changes);
    }
    map(mapping) {
        return mapping.empty ? this :
            new ActiveResult(this.source, this.explicitPos < 0 ? -1 : mapping.mapPos(this.explicitPos), this.result, mapping.mapPos(this.from), mapping.mapPos(this.to, 1), this.span);
    }
}
const startCompletionEffect = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define();
const closeCompletionEffect = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define();
const setActiveEffect = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define({
    map(sources, mapping) { return sources.map(s => s.map(mapping)); }
});
const setSelectedEffect = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define();
const completionState = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateField.define({
    create() { return CompletionState.start(); },
    update(value, tr) { return value.update(tr); },
    provide: f => [
        _codemirror_tooltip__WEBPACK_IMPORTED_MODULE_4__.showTooltip.from(f, val => val.tooltip),
        _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.contentAttributes.from(f, state => state.attrs)
    ]
});

const CompletionInteractMargin = 75;
/**
Returns a command that moves the completion selection forward or
backward by the given amount.
*/
function moveCompletionSelection(forward, by = "option") {
    return (view) => {
        let cState = view.state.field(completionState, false);
        if (!cState || !cState.open || Date.now() - cState.open.timestamp < CompletionInteractMargin)
            return false;
        let step = 1, tooltip;
        if (by == "page" && (tooltip = view.dom.querySelector(".cm-tooltip-autocomplete")))
            step = Math.max(2, Math.floor(tooltip.offsetHeight / tooltip.firstChild.offsetHeight));
        let selected = cState.open.selected + step * (forward ? 1 : -1), { length } = cState.open.options;
        if (selected < 0)
            selected = by == "page" ? 0 : length - 1;
        else if (selected >= length)
            selected = by == "page" ? length - 1 : 0;
        view.dispatch({ effects: setSelectedEffect.of(selected) });
        return true;
    };
}
/**
Accept the current completion.
*/
const acceptCompletion = (view) => {
    let cState = view.state.field(completionState, false);
    if (!cState || !cState.open || Date.now() - cState.open.timestamp < CompletionInteractMargin)
        return false;
    applyCompletion(view, cState.open.options[cState.open.selected]);
    return true;
};
/**
Explicitly start autocompletion.
*/
const startCompletion = (view) => {
    let cState = view.state.field(completionState, false);
    if (!cState)
        return false;
    view.dispatch({ effects: startCompletionEffect.of(true) });
    return true;
};
/**
Close the currently active completion.
*/
const closeCompletion = (view) => {
    let cState = view.state.field(completionState, false);
    if (!cState || !cState.active.some(a => a.state != 0 /* Inactive */))
        return false;
    view.dispatch({ effects: closeCompletionEffect.of(null) });
    return true;
};
class RunningQuery {
    constructor(active, context) {
        this.active = active;
        this.context = context;
        this.time = Date.now();
        this.updates = [];
        // Note that 'undefined' means 'not done yet', whereas 'null' means
        // 'query returned null'.
        this.done = undefined;
    }
}
const DebounceTime = 50, MaxUpdateCount = 50, MinAbortTime = 1000;
const completionPlugin = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.ViewPlugin.fromClass(class {
    constructor(view) {
        this.view = view;
        this.debounceUpdate = -1;
        this.running = [];
        this.debounceAccept = -1;
        this.composing = 0 /* None */;
        for (let active of view.state.field(completionState).active)
            if (active.state == 1 /* Pending */)
                this.startQuery(active);
    }
    update(update) {
        let cState = update.state.field(completionState);
        if (!update.selectionSet && !update.docChanged && update.startState.field(completionState) == cState)
            return;
        let doesReset = update.transactions.some(tr => {
            let event = tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Transaction.userEvent);
            return (tr.selection || tr.docChanged) && event != "input" && event != "delete";
        });
        for (let i = 0; i < this.running.length; i++) {
            let query = this.running[i];
            if (doesReset ||
                query.updates.length + update.transactions.length > MaxUpdateCount && query.time - Date.now() > MinAbortTime) {
                for (let handler of query.context.abortListeners) {
                    try {
                        handler();
                    }
                    catch (e) {
                        (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.logException)(this.view.state, e);
                    }
                }
                query.context.abortListeners = null;
                this.running.splice(i--, 1);
            }
            else {
                query.updates.push(...update.transactions);
            }
        }
        if (this.debounceUpdate > -1)
            clearTimeout(this.debounceUpdate);
        this.debounceUpdate = cState.active.some(a => a.state == 1 /* Pending */ && !this.running.some(q => q.active.source == a.source))
            ? setTimeout(() => this.startUpdate(), DebounceTime) : -1;
        if (this.composing != 0 /* None */)
            for (let tr of update.transactions) {
                if (tr.annotation(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Transaction.userEvent) == "input")
                    this.composing = 2 /* Changed */;
                else if (this.composing == 2 /* Changed */ && tr.selection)
                    this.composing = 3 /* ChangedAndMoved */;
            }
    }
    startUpdate() {
        this.debounceUpdate = -1;
        let { state } = this.view, cState = state.field(completionState);
        for (let active of cState.active) {
            if (active.state == 1 /* Pending */ && !this.running.some(r => r.active.source == active.source))
                this.startQuery(active);
        }
    }
    startQuery(active) {
        let { state } = this.view, pos = cur(state);
        let context = new CompletionContext(state, pos, active.explicitPos == pos);
        let pending = new RunningQuery(active, context);
        this.running.push(pending);
        Promise.resolve(active.source(context)).then(result => {
            if (!pending.context.aborted) {
                pending.done = result || null;
                this.scheduleAccept();
            }
        }, err => {
            this.view.dispatch({ effects: closeCompletionEffect.of(null) });
            (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.logException)(this.view.state, err);
        });
    }
    scheduleAccept() {
        if (this.running.every(q => q.done !== undefined))
            this.accept();
        else if (this.debounceAccept < 0)
            this.debounceAccept = setTimeout(() => this.accept(), DebounceTime);
    }
    // For each finished query in this.running, try to create a result
    // or, if appropriate, restart the query.
    accept() {
        var _a;
        if (this.debounceAccept > -1)
            clearTimeout(this.debounceAccept);
        this.debounceAccept = -1;
        let updated = [];
        let conf = this.view.state.facet(completionConfig);
        for (let i = 0; i < this.running.length; i++) {
            let query = this.running[i];
            if (query.done === undefined)
                continue;
            this.running.splice(i--, 1);
            if (query.done) {
                let active = new ActiveResult(query.active.source, query.active.explicitPos, query.done, query.done.from, (_a = query.done.to) !== null && _a !== void 0 ? _a : cur(query.updates.length ? query.updates[0].startState : this.view.state), query.done.span && query.done.filter !== false ? ensureAnchor(query.done.span, true) : null);
                // Replay the transactions that happened since the start of
                // the request and see if that preserves the result
                for (let tr of query.updates)
                    active = active.update(tr, conf);
                if (active.hasResult()) {
                    updated.push(active);
                    continue;
                }
            }
            let current = this.view.state.field(completionState).active.find(a => a.source == query.active.source);
            if (current && current.state == 1 /* Pending */) {
                if (query.done == null) {
                    // Explicitly failed. Should clear the pending status if it
                    // hasn't been re-set in the meantime.
                    let active = new ActiveSource(query.active.source, 0 /* Inactive */);
                    for (let tr of query.updates)
                        active = active.update(tr, conf);
                    if (active.state != 1 /* Pending */)
                        updated.push(active);
                }
                else {
                    // Cleared by subsequent transactions. Restart.
                    this.startQuery(current);
                }
            }
        }
        if (updated.length)
            this.view.dispatch({ effects: setActiveEffect.of(updated) });
    }
}, {
    eventHandlers: {
        compositionstart() {
            this.composing = 1 /* Started */;
        },
        compositionend() {
            if (this.composing == 3 /* ChangedAndMoved */) {
                // Safari fires compositionend events synchronously, possibly
                // from inside an update, so dispatch asynchronously to avoid reentrancy
                setTimeout(() => this.view.dispatch({ effects: startCompletionEffect.of(false) }), 20);
            }
            this.composing = 0 /* None */;
        }
    }
});

class FieldPos {
    constructor(field, line, from, to) {
        this.field = field;
        this.line = line;
        this.from = from;
        this.to = to;
    }
}
class FieldRange {
    constructor(field, from, to) {
        this.field = field;
        this.from = from;
        this.to = to;
    }
    map(changes) {
        return new FieldRange(this.field, changes.mapPos(this.from, -1), changes.mapPos(this.to, 1));
    }
}
class Snippet {
    constructor(lines, fieldPositions) {
        this.lines = lines;
        this.fieldPositions = fieldPositions;
    }
    instantiate(state, pos) {
        let text = [], lineStart = [pos];
        let lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.text)[0];
        for (let line of this.lines) {
            if (text.length) {
                let indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
                for (let i = 0; i < tabs; i++)
                    indent += state.facet(_codemirror_language__WEBPACK_IMPORTED_MODULE_0__.indentUnit);
                lineStart.push(pos + indent.length - tabs);
                line = indent + line.slice(tabs);
            }
            text.push(line);
            pos += line.length + 1;
        }
        let ranges = this.fieldPositions.map(pos => new FieldRange(pos.field, lineStart[pos.line] + pos.from, lineStart[pos.line] + pos.to));
        return { text, ranges };
    }
    static parse(template) {
        let fields = [];
        let lines = [], positions = [], m;
        for (let line of template.split(/\r\n?|\n/)) {
            while (m = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(line)) {
                let seq = m[1] ? +m[1] : null, name = m[2] || m[3], found = -1;
                for (let i = 0; i < fields.length; i++) {
                    if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false)
                        found = i;
                }
                if (found < 0) {
                    let i = 0;
                    while (i < fields.length && (seq == null || (fields[i].seq != null && fields[i].seq < seq)))
                        i++;
                    fields.splice(i, 0, { seq, name: name || null });
                    found = i;
                    for (let pos of positions)
                        if (pos.field >= found)
                            pos.field++;
                }
                positions.push(new FieldPos(found, lines.length, m.index, m.index + name.length));
                line = line.slice(0, m.index) + name + line.slice(m.index + m[0].length);
            }
            lines.push(line);
        }
        return new Snippet(lines, positions);
    }
}
let fieldMarker = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.widget({ widget: /*@__PURE__*/new class extends _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.WidgetType {
        toDOM() {
            let span = document.createElement("span");
            span.className = "cm-snippetFieldPosition";
            return span;
        }
        ignoreEvent() { return false; }
    } });
let fieldRange = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.mark({ class: "cm-snippetField" });
class ActiveSnippet {
    constructor(ranges, active) {
        this.ranges = ranges;
        this.active = active;
        this.deco = _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.set(ranges.map(r => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)));
    }
    map(changes) {
        return new ActiveSnippet(this.ranges.map(r => r.map(changes)), this.active);
    }
    selectionInsideField(sel) {
        return sel.ranges.every(range => this.ranges.some(r => r.field == this.active && r.from <= range.from && r.to >= range.to));
    }
}
const setActive = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define({
    map(value, changes) { return value && value.map(changes); }
});
const moveToField = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define();
const snippetState = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateField.define({
    create() { return null; },
    update(value, tr) {
        for (let effect of tr.effects) {
            if (effect.is(setActive))
                return effect.value;
            if (effect.is(moveToField) && value)
                return new ActiveSnippet(value.ranges, effect.value);
        }
        if (value && tr.docChanged)
            value = value.map(tr.changes);
        if (value && tr.selection && !value.selectionInsideField(tr.selection))
            value = null;
        return value;
    },
    provide: f => _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.decorations.from(f, val => val ? val.deco : _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.Decoration.none)
});
function fieldSelection(ranges, field) {
    return _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorSelection.create(ranges.filter(r => r.field == field).map(r => _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.EditorSelection.range(r.from, r.to)));
}
/**
Convert a snippet template to a function that can apply it.
Snippets are written using syntax like this:

    "for (let ${index} = 0; ${index} < ${end}; ${index}++) {\n\t${}\n}"

Each `${}` placeholder (you may also use `#{}`) indicates a field
that the user can fill in. Its name, if any, will be the default
content for the field.

When the snippet is activated by calling the returned function,
the code is inserted at the given position. Newlines in the
template are indented by the indentation of the start line, plus
one [indent unit](https://codemirror.net/6/docs/ref/#language.indentUnit) per tab character after
the newline.

On activation, (all instances of) the first field are selected.
The user can move between fields with Tab and Shift-Tab as long as
the fields are active. Moving to the last field or moving the
cursor out of the current field deactivates the fields.

The order of fields defaults to textual order, but you can add
numbers to placeholders (`${1}` or `${1:defaultText}`) to provide
a custom order.
*/
function snippet(template) {
    let snippet = Snippet.parse(template);
    return (editor, _completion, from, to) => {
        let { text, ranges } = snippet.instantiate(editor.state, from);
        let spec = { changes: { from, to, insert: _codemirror_text__WEBPACK_IMPORTED_MODULE_1__.Text.of(text) } };
        if (ranges.length)
            spec.selection = fieldSelection(ranges, 0);
        if (ranges.length > 1) {
            let active = new ActiveSnippet(ranges, 0);
            let effects = spec.effects = [setActive.of(active)];
            if (editor.state.field(snippetState, false) === undefined)
                effects.push(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.StateEffect.appendConfig.of([snippetState.init(() => active), addSnippetKeymap,
                    snippetPointerHandler, baseTheme]));
        }
        editor.dispatch(editor.state.update(spec));
    };
}
function moveField(dir) {
    return ({ state, dispatch }) => {
        let active = state.field(snippetState, false);
        if (!active || dir < 0 && active.active == 0)
            return false;
        let next = active.active + dir, last = dir > 0 && !active.ranges.some(r => r.field == next + dir);
        dispatch(state.update({
            selection: fieldSelection(active.ranges, next),
            effects: setActive.of(last ? null : new ActiveSnippet(active.ranges, next))
        }));
        return true;
    };
}
/**
A command that clears the active snippet, if any.
*/
const clearSnippet = ({ state, dispatch }) => {
    let active = state.field(snippetState, false);
    if (!active)
        return false;
    dispatch(state.update({ effects: setActive.of(null) }));
    return true;
};
/**
Move to the next snippet field, if available.
*/
const nextSnippetField = /*@__PURE__*/moveField(1);
/**
Move to the previous snippet field, if available.
*/
const prevSnippetField = /*@__PURE__*/moveField(-1);
const defaultSnippetKeymap = [
    { key: "Tab", run: nextSnippetField, shift: prevSnippetField },
    { key: "Escape", run: clearSnippet }
];
/**
A facet that can be used to configure the key bindings used by
snippets. The default binds Tab to
[`nextSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.nextSnippetField), Shift-Tab to
[`prevSnippetField`](https://codemirror.net/6/docs/ref/#autocomplete.prevSnippetField), and Escape
to [`clearSnippet`](https://codemirror.net/6/docs/ref/#autocomplete.clearSnippet).
*/
const snippetKeymap = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Facet.define({
    combine(maps) { return maps.length ? maps[0] : defaultSnippetKeymap; }
});
const addSnippetKeymap = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Prec.override(/*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.keymap.compute([snippetKeymap], state => state.facet(snippetKeymap)));
/**
Create a completion from a snippet. Returns an object with the
properties from `completion`, plus an `apply` function that
applies the snippet.
*/
function snippetCompletion(template, completion) {
    return Object.assign(Object.assign({}, completion), { apply: snippet(template) });
}
const snippetPointerHandler = /*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.domEventHandlers({
    mousedown(event, view) {
        let active = view.state.field(snippetState, false), pos;
        if (!active || (pos = view.posAtCoords({ x: event.clientX, y: event.clientY })) == null)
            return false;
        let match = active.ranges.find(r => r.from <= pos && r.to >= pos);
        if (!match || match.field == active.active)
            return false;
        view.dispatch({
            selection: fieldSelection(active.ranges, match.field),
            effects: setActive.of(active.ranges.some(r => r.field > match.field) ? new ActiveSnippet(active.ranges, match.field) : null)
        });
        return true;
    }
});

/**
A completion source that will scan the document for words (using a
[character categorizer](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer)), and
return those as completions.
*/
const completeAnyWord = context => {
    let options = [], seen = Object.create(null);
    let cat = context.state.charCategorizer(context.pos);
    let start = Math.max(0, context.pos - 50000 /* Range */), end = Math.min(context.state.doc.length, start + 50000 /* Range */ * 2);
    let from = context.pos;
    for (let cur = context.state.doc.iterRange(start, end), pos = start; !(cur.next()).done;) {
        let { value } = cur, start = -1;
        for (let i = 0;; i++) {
            if (i < value.length && cat(value[i]) == _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.CharCategory.Word) {
                if (start < 0)
                    start = i;
            }
            else if (start > -1) {
                if (pos + start <= context.pos && pos + i >= context.pos) {
                    from = pos + start;
                }
                else {
                    let word = value.slice(start, i);
                    if (!seen[word]) {
                        options.push({ type: "text", label: word });
                        seen[word] = true;
                    }
                }
                start = -1;
            }
            if (i == value.length)
                break;
        }
        pos += value.length;
    }
    return { from, options, span: /^\w*/ };
};

/**
Returns an extension that enables autocompletion.
*/
function autocompletion(config = {}) {
    return [
        completionState,
        completionConfig.of(config),
        completionPlugin,
        completionKeymapExt,
        baseTheme
    ];
}
/**
Basic keybindings for autocompletion.

 - Ctrl-Space: [`startCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.startCompletion)
 - Escape: [`closeCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.closeCompletion)
 - ArrowDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true)`
 - ArrowUp: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(false)`
 - PageDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true, "page")`
 - PageDown: [`moveCompletionSelection`](https://codemirror.net/6/docs/ref/#autocomplete.moveCompletionSelection)`(true, "page")`
 - Enter: [`acceptCompletion`](https://codemirror.net/6/docs/ref/#autocomplete.acceptCompletion)
*/
const completionKeymap = [
    { key: "Ctrl-Space", run: startCompletion },
    { key: "Escape", run: closeCompletion },
    { key: "ArrowDown", run: /*@__PURE__*/moveCompletionSelection(true) },
    { key: "ArrowUp", run: /*@__PURE__*/moveCompletionSelection(false) },
    { key: "PageDown", run: /*@__PURE__*/moveCompletionSelection(true, "page") },
    { key: "PageUp", run: /*@__PURE__*/moveCompletionSelection(false, "page") },
    { key: "Enter", run: acceptCompletion }
];
const completionKeymapExt = /*@__PURE__*/_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Prec.override(/*@__PURE__*/_codemirror_view__WEBPACK_IMPORTED_MODULE_3__.keymap.computeN([completionConfig], state => state.facet(completionConfig).defaultKeymap ? [completionKeymap] : []));
/**
Get the current completion status. When completions are available,
this will return `"active"`. When completions are pending (in the
process of being queried), this returns `"pending"`. Otherwise, it
returns `null`.
*/
function completionStatus(state) {
    let cState = state.field(completionState, false);
    return cState && cState.active.some(a => a.state == 1 /* Pending */) ? "pending"
        : cState && cState.active.some(a => a.state != 0 /* Inactive */) ? "active" : null;
}
/**
Returns the available completions as an array.
*/
function currentCompletions(state) {
    var _a;
    let open = (_a = state.field(completionState, false)) === null || _a === void 0 ? void 0 : _a.open;
    return open ? open.options.map(o => o.completion) : [];
}




/***/ }),
/* 42 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoverTooltip": () => (/* binding */ hoverTooltip),
/* harmony export */   "showTooltip": () => (/* binding */ showTooltip),
/* harmony export */   "tooltips": () => (/* binding */ tooltips)
/* harmony export */ });
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);



const ios = typeof navigator != "undefined" &&
    !/Edge\/(\d+)/.exec(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) &&
    (/Mobile\/\w+/.test(navigator.userAgent) || navigator.maxTouchPoints > 2);
const Outside = "-10000px";
const tooltipPlugin = _codemirror_view__WEBPACK_IMPORTED_MODULE_0__.ViewPlugin.fromClass(class {
    constructor(view) {
        this.view = view;
        this.inView = true;
        this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this };
        this.input = view.state.facet(showTooltip);
        this.tooltips = this.input.filter(t => t);
        this.tooltipViews = this.tooltips.map(tp => this.createTooltip(tp));
    }
    update(update) {
        let input = update.state.facet(showTooltip);
        if (input == this.input) {
            for (let t of this.tooltipViews)
                if (t.update)
                    t.update(update);
        }
        else {
            let tooltips = input.filter(x => x);
            let views = [];
            for (let i = 0; i < tooltips.length; i++) {
                let tip = tooltips[i], known = -1;
                if (!tip)
                    continue;
                for (let i = 0; i < this.tooltips.length; i++) {
                    let other = this.tooltips[i];
                    if (other && other.create == tip.create)
                        known = i;
                }
                if (known < 0) {
                    views[i] = this.createTooltip(tip);
                }
                else {
                    let tooltipView = views[i] = this.tooltipViews[known];
                    if (tooltipView.update)
                        tooltipView.update(update);
                }
            }
            for (let t of this.tooltipViews)
                if (views.indexOf(t) < 0)
                    t.dom.remove();
            this.input = input;
            this.tooltips = tooltips;
            this.tooltipViews = views;
            this.maybeMeasure();
        }
    }
    createTooltip(tooltip) {
        let tooltipView = tooltip.create(this.view);
        tooltipView.dom.classList.add("cm-tooltip");
        // FIXME drop this on the next breaking release
        if (tooltip.class)
            tooltipView.dom.classList.add(tooltip.class);
        tooltipView.dom.style.top = Outside;
        this.view.dom.appendChild(tooltipView.dom);
        if (tooltipView.mount)
            tooltipView.mount(this.view);
        return tooltipView;
    }
    destroy() {
        for (let { dom } of this.tooltipViews)
            dom.remove();
    }
    readMeasure() {
        return {
            editor: this.view.dom.getBoundingClientRect(),
            pos: this.tooltips.map(t => this.view.coordsAtPos(t.pos)),
            size: this.tooltipViews.map(({ dom }) => dom.getBoundingClientRect()),
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        };
    }
    writeMeasure(measured) {
        let { editor } = measured;
        for (let i = 0; i < this.tooltipViews.length; i++) {
            let tooltip = this.tooltips[i], tView = this.tooltipViews[i], { dom } = tView;
            let pos = measured.pos[i], size = measured.size[i];
            // Hide tooltips that are outside of the editor.
            if (!pos || pos.bottom <= editor.top || pos.top >= editor.bottom || pos.right <= editor.left || pos.left >= editor.right) {
                dom.style.top = Outside;
                continue;
            }
            let width = size.right - size.left, height = size.bottom - size.top;
            let left = this.view.textDirection == _codemirror_view__WEBPACK_IMPORTED_MODULE_0__.Direction.LTR ? Math.min(pos.left, measured.innerWidth - width)
                : Math.max(0, pos.left - width);
            let above = !!tooltip.above;
            if (!tooltip.strictSide &&
                (above ? pos.top - (size.bottom - size.top) < 0 : pos.bottom + (size.bottom - size.top) > measured.innerHeight))
                above = !above;
            if (ios) {
                dom.style.top = ((above ? pos.top - height : pos.bottom) - editor.top) + "px";
                dom.style.left = (left - editor.left) + "px";
                dom.style.position = "absolute";
            }
            else {
                dom.style.top = (above ? pos.top - height : pos.bottom) + "px";
                dom.style.left = left + "px";
            }
            dom.classList.toggle("cm-tooltip-above", above);
            dom.classList.toggle("cm-tooltip-below", !above);
            if (tView.positioned)
                tView.positioned();
        }
    }
    maybeMeasure() {
        if (this.tooltips.length) {
            if (this.view.inView || this.inView)
                this.view.requestMeasure(this.measureReq);
            this.inView = this.view.inView;
        }
    }
}, {
    eventHandlers: {
        scroll() { this.maybeMeasure(); }
    }
});
const baseTheme = _codemirror_view__WEBPACK_IMPORTED_MODULE_0__.EditorView.baseTheme({
    ".cm-tooltip": {
        position: "fixed",
        zIndex: 100
    },
    "&light .cm-tooltip": {
        border: "1px solid #ddd",
        backgroundColor: "#f5f5f5"
    },
    "&dark .cm-tooltip": {
        backgroundColor: "#333338",
        color: "white"
    }
});
// FIXME backward-compat shim. Delete on next major version.
/**
@internal
*/
function tooltips() {
    return [];
}
/**
Behavior by which an extension can provide a tooltip to be shown.
*/
const showTooltip = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.Facet.define({
    enables: [tooltipPlugin, baseTheme]
});
const HoverTime = 750, HoverMaxDist = 6;
class HoverPlugin {
    constructor(view, source, field, setHover) {
        this.view = view;
        this.source = source;
        this.field = field;
        this.setHover = setHover;
        this.lastMouseMove = null;
        this.hoverTimeout = -1;
        this.restartTimeout = -1;
        this.pending = null;
        this.checkHover = this.checkHover.bind(this);
        view.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this));
        view.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
    }
    update() {
        if (this.pending) {
            this.pending = null;
            clearTimeout(this.restartTimeout);
            this.restartTimeout = setTimeout(() => this.startHover(), 20);
        }
    }
    get active() {
        return this.view.state.field(this.field);
    }
    checkHover() {
        this.hoverTimeout = -1;
        if (this.active)
            return;
        let now = Date.now(), lastMove = this.lastMouseMove;
        if (now - lastMove.timeStamp < HoverTime)
            this.hoverTimeout = setTimeout(this.checkHover, HoverTime - (now - lastMove.timeStamp));
        else
            this.startHover();
    }
    startHover() {
        var _a;
        clearTimeout(this.restartTimeout);
        let lastMove = this.lastMouseMove;
        let coords = { x: lastMove.clientX, y: lastMove.clientY };
        let pos = this.view.contentDOM.contains(lastMove.target)
            ? this.view.posAtCoords(coords) : null;
        if (pos == null)
            return;
        let posCoords = this.view.coordsAtPos(pos);
        if (posCoords == null || coords.y < posCoords.top || coords.y > posCoords.bottom ||
            coords.x < posCoords.left - this.view.defaultCharacterWidth ||
            coords.x > posCoords.right + this.view.defaultCharacterWidth)
            return;
        let bidi = this.view.bidiSpans(this.view.state.doc.lineAt(pos)).find(s => s.from <= pos && s.to >= pos);
        let rtl = bidi && bidi.dir == _codemirror_view__WEBPACK_IMPORTED_MODULE_0__.Direction.RTL ? -1 : 1;
        let open = this.source(this.view, pos, (coords.x < posCoords.left ? -rtl : rtl));
        if ((_a = open) === null || _a === void 0 ? void 0 : _a.then) {
            let pending = this.pending = { pos };
            open.then(result => {
                if (this.pending == pending) {
                    this.pending = null;
                    if (result)
                        this.view.dispatch({ effects: this.setHover.of(result) });
                }
            }, e => (0,_codemirror_view__WEBPACK_IMPORTED_MODULE_0__.logException)(this.view.state, e, "hover tooltip"));
        }
        else if (open) {
            this.view.dispatch({ effects: this.setHover.of(open) });
        }
    }
    mousemove(event) {
        var _a;
        this.lastMouseMove = event;
        if (this.hoverTimeout < 0)
            this.hoverTimeout = setTimeout(this.checkHover, HoverTime);
        let tooltip = this.active;
        if (tooltip && !isInTooltip(event.target) || this.pending) {
            let { pos } = tooltip || this.pending, end = (_a = tooltip === null || tooltip === void 0 ? void 0 : tooltip.end) !== null && _a !== void 0 ? _a : pos;
            if ((pos == end ? this.view.posAtCoords({ x: event.clientX, y: event.clientY }) != pos
                : !isOverRange(this.view, pos, end, event.clientX, event.clientY, HoverMaxDist))) {
                this.view.dispatch({ effects: this.setHover.of(null) });
                this.pending = null;
            }
        }
    }
    mouseleave() {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = -1;
        if (this.active)
            this.view.dispatch({ effects: this.setHover.of(null) });
    }
    destroy() {
        clearTimeout(this.hoverTimeout);
        this.view.dom.removeEventListener("mouseleave", this.mouseleave);
        this.view.dom.removeEventListener("mousemove", this.mousemove);
    }
}
function isInTooltip(elt) {
    for (let cur = elt; cur; cur = cur.parentNode)
        if (cur.nodeType == 1 && cur.classList.contains("cm-tooltip"))
            return true;
    return false;
}
function isOverRange(view, from, to, x, y, margin) {
    let range = document.createRange();
    let fromDOM = view.domAtPos(from), toDOM = view.domAtPos(to);
    range.setEnd(toDOM.node, toDOM.offset);
    range.setStart(fromDOM.node, fromDOM.offset);
    let rects = range.getClientRects();
    range.detach();
    for (let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        let dist = Math.max(rect.top - y, y - rect.bottom, rect.left - x, x - rect.right);
        if (dist <= margin)
            return true;
    }
    return false;
}
/**
Enable a hover tooltip, which shows up when the pointer hovers
over ranges of text. The callback is called when the mouse hovers
over the document text. It should, if there is a tooltip
associated with position `pos` return the tooltip description
(either directly or in a promise). The `side` argument indicates
on which side of the position the pointer is—it will be -1 if the
pointer is before the position, 1 if after the position.
*/
function hoverTooltip(source, options = {}) {
    const setHover = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.StateEffect.define();
    const hoverState = _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.StateField.define({
        create() { return null; },
        update(value, tr) {
            if (value && (options.hideOnChange && (tr.docChanged || tr.selection)))
                return null;
            for (let effect of tr.effects)
                if (effect.is(setHover))
                    return effect.value;
            if (value && tr.docChanged) {
                let newPos = tr.changes.mapPos(value.pos, -1, _codemirror_state__WEBPACK_IMPORTED_MODULE_1__.MapMode.TrackDel);
                if (newPos == null)
                    return null;
                let copy = Object.assign(Object.create(null), value);
                copy.pos = newPos;
                if (value.end != null)
                    copy.end = tr.changes.mapPos(value.end);
                return copy;
            }
            return value;
        },
        provide: f => showTooltip.from(f)
    });
    return [
        hoverState,
        _codemirror_view__WEBPACK_IMPORTED_MODULE_0__.ViewPlugin.define(view => new HoverPlugin(view, source, hoverState, setHover))
    ];
}




/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
  nodeStore = {}
  node = null
  btnNode = null

  setBlock = (selector, btnSelector) => {
    if (this.nodeStore[selector]) {
      this.node = this.nodeStore[selector]
    } else {
      this.node = this.nodeStore[selector] = document.querySelector(selector)
    }
    if (this.nodeStore[btnSelector]) {
      this.btnNode = this.nodeStore[btnSelector]
    } else {
      this.btnNode = this.nodeStore[btnSelector] =
        document.querySelector(btnSelector)
    }

    this.node.textContent = ""

    return this.printOutput
  }

  printOutput = (...logArgs) => {
    if (this.btnNode) {
      this.btnNode.removeAttribute("disabled")
      this.btnNode = null
    }

    logArgs.forEach((x) => {
      const content = JSON.stringify(x, null, 2)
      this.node.append(`\n${content} \n `)
    })
    console.log(...logArgs)
  }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _editor_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




})();

/******/ })()
;