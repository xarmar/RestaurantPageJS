/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cocktail_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cocktail.jpg */ "./src/cocktail.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_cocktail_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: repeat-y;\n  background-position: center;\n  background-attachment: fixed; }\n\nheader {\n  font-family: 'Chakra Petch', sans-serif;\n  margin: 0px auto 0px auto;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 2rem;\n  width: 85%;\n  background-color: rgba(39, 2, 69, 0.8);\n  border-bottom: rgba(135, 26, 133, 0.8) 4px solid; }\n  @media only screen and (max-width: 753px) {\n    header {\n      justify-content: flex-start;\n      flex-direction: column;\n      text-align: start;\n      width: 90%;\n      padding: 1rem; } }\n  header #navBar {\n    margin-top: auto;\n    margin-bottom: auto; }\n    @media only screen and (max-width: 753px) {\n      header #navBar {\n        display: none;\n        width: 90%;\n        margin: 0px auto 0px auto; } }\n  header #titleHeader {\n    font-size: 1.8em;\n    color: rgba(254, 24, 211, 0.8); }\n  header a {\n    display: none; }\n    @media only screen and (max-width: 753px) {\n      header a {\n        display: flex;\n        position: fixed;\n        top: 2rem;\n        right: 2rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        padding-top: 3%;\n        font-size: 2em;\n        text-decoration: none;\n        color: rgba(254, 255, 56, 0.8); } }\n  @media only screen and (max-width: 753px) {\n    header .showMenu {\n      animation-name: test;\n      animation-duration: 0.75s;\n      display: flex !important;\n      flex-direction: column;\n      text-align: end;\n      width: 100%;\n      border-top: 2px solid rgba(254, 24, 211, 0.8);\n      border-bottom: 2px solid rgba(254, 24, 211, 0.8); }\n    @keyframes test {\n      0% {\n        opacity: 0%; }\n      100% {\n        opacity: 100%; } } }\n\n.menu {\n  font-size: 1.5em;\n  color: white;\n  display: inline;\n  list-style-type: none;\n  margin: 0px 20px 0px 20px;\n  padding: 1px;\n  border: 1px solid transparent; }\n  .menu:hover {\n    color: rgba(254, 24, 211, 0.8);\n    cursor: pointer;\n    border-top: 2px solid rgba(254, 24, 211, 0.8);\n    border-bottom: 2px solid rgba(254, 24, 211, 0.8); }\n\n#content {\n  font-family: 'Electrolize', sans-serif;\n  margin: 0px auto 0px auto;\n  text-align: center;\n  justify-items: center;\n  background-color: rgba(39, 2, 69, 0.8);\n  width: 80%; }\n\n#homeMenuDiv, #contactMenuDiv {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-template-rows: auto;\n  margin-top: 2vh; }\n  #homeMenuDiv h2, #contactMenuDiv h2 {\n    color: rgba(254, 255, 56, 0.8); }\n  #homeMenuDiv p, #contactMenuDiv p {\n    margin: 0px auto 0px auto;\n    text-align: center;\n    max-width: fit-content;\n    margin-bottom: 30px;\n    color: white; }\n  #homeMenuDiv #aboutUsDiv, #contactMenuDiv #aboutUsDiv {\n    margin: 1%; }\n  #homeMenuDiv #aboutUsText, #contactMenuDiv #aboutUsText {\n    width: 95%;\n    padding: 10px;\n    background-color: rgba(66, 6, 241, 0.8); }\n  #homeMenuDiv #aboutUsExtraDetails, #contactMenuDiv #aboutUsExtraDetails {\n    width: 90%; }\n  #homeMenuDiv #imageDiv, #contactMenuDiv #imageDiv {\n    margin-top: auto;\n    margin-bottom: auto;\n    padding: 2%; }\n  #homeMenuDiv #aboutUsImage, #contactMenuDiv #aboutUsImage {\n    height: 150px;\n    width: 150px; }\n\n#itemMenuDiv {\n  margin-top: 2vh; }\n  @media only screen and (min-width: 754px) {\n    #itemMenuDiv {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n      grid-template-rows: auto; } }\n  @media only screen and (max-width: 753px) {\n    #itemMenuDiv {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n      grid-template-rows: auto; } }\n  #itemMenuDiv .menuItem {\n    padding: 2rem;\n    margin: 1%;\n    border: 2px solid rgba(135, 26, 133, 0.8); }\n    #itemMenuDiv .menuItem h3, #itemMenuDiv .menuItem p {\n      margin: 0px auto 0px auto;\n      text-align: center;\n      color: white;\n      margin-bottom: 2px;\n      max-width: 70%; }\n    #itemMenuDiv .menuItem p {\n      margin-top: 15px; }\n    #itemMenuDiv .menuItem .drinkImage {\n      height: 150px;\n      width: 150px;\n      margin-top: 20px;\n      margin-bottom: 20px; }\n    #itemMenuDiv .menuItem .description {\n      padding: 10px;\n      background-color: rgba(66, 6, 241, 0.8); }\n    #itemMenuDiv .menuItem .price {\n      margin-top: 20px;\n      font-size: 200%;\n      color: rgba(254, 255, 56, 0.8); }\n\n#contactMenuDiv #locationText {\n  padding: 10px;\n  background-color: rgba(66, 6, 241, 0.8); }\n\n#contactMenuDiv #map {\n  margin: 2%;\n  width: 55vw;\n  height: auto; }\n\n#footer {\n  display: flex;\n  left: 2.5%;\n  margin-bottom: 0px;\n  position: fixed;\n  height: 4%;\n  width: 95%;\n  background-color: rgba(66, 6, 241, 0.8);\n  text-align: center;\n  bottom: 0; }\n  #footer p {\n    font-family: 'Electrolize', sans-serif;\n    color: white;\n    margin-left: auto;\n    margin-right: auto;\n    align-self: center;\n    justify-content: center;\n    align-content: center; }\n  #footer a {\n    color: white; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["// Colors\n$retro-purple: rgba(39, 2, 69, 0.8);\n$retro-violet: rgba(135, 26, 133, 0.8);\n$retro-red: rgba(255, 41, 65, 0.8);\n$retro-yellow: rgba(254, 255, 56, 0.8);\n$retro-magenta: rgba(254, 24, 211, 0.8);;\n$retro-blue: rgba(66, 6, 241, 0.8);\n\nbody {\n    background: url('./cocktail.jpg');\n    background-repeat: repeat-y;\n    background-position: center;\n    background-attachment: fixed;\n}\n\n@mixin centerHorizontally {\n    margin: 0px auto 0px auto;\n    text-align: center;\n}\n\n@mixin retroColorPadding ($color) {\n    padding: 10px;\n    background-color: $color;\n}\n\n@mixin responsiveGrid ($min, $max) {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax($min, $max));\n    grid-template-rows: auto;\n}\n\n@mixin electrolizeFont {\n    font-family: 'Electrolize', sans-serif;\n}\n\n@mixin chakraFont {\n    font-family: 'Chakra Petch', sans-serif;\n}\n\n\nheader {\n    @include chakraFont();\n    @include centerHorizontally();\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 2rem;\n    width: 85%;\n    background-color: $retro-purple;\n    border-bottom: $retro-violet 4px solid;\n    @media only screen and (max-width: 753px) {\n        justify-content: flex-start;\n        flex-direction: column;\n        text-align: start;\n        width: 90%;\n        padding: 1rem;\n    }\n    #navBar {\n        margin-top: auto;\n        margin-bottom: auto;\n        @media only screen and (max-width: 753px)  {\n            display: none;\n            width: 90%;\n            margin: 0px auto 0px auto;\n        }\n    }\n    #titleHeader {\n        font-size: 1.8em;\n        color: $retro-magenta;\n    }\n    a {\n        display: none;\n        @media only screen and (max-width: 753px) {\n            display: flex;\n            position: fixed;\n            top: 2rem;\n            right: 2rem;\n            margin-top: auto;\n            margin-bottom: auto;\n            padding-top: 3%;\n            font-size: 2em;\n            text-decoration: none;\n            color: $retro-yellow;\n        }\n    }\n\n    @media only screen and (max-width: 753px) {\n        .showMenu {\n            animation-name: test;\n            animation-duration: 0.75s;\n            display: flex !important;\n            flex-direction: column;\n            text-align: end;\n            width: 100%;\n            border-top: 2px solid $retro-magenta;\n            border-bottom: 2px solid $retro-magenta;\n        }\n        @keyframes test {\n            0% {opacity: 0%};\n            100% {opacity: 100%};\n        }\n    }\n}\n\n// Navigation Bar\n.menu {\n    font-size: 1.5em;\n    color: white;\n    display: inline;\n    list-style-type: none;\n    margin: 0px 20px 0px 20px;\n    padding: 1px;\n    border: 1px solid transparent;\n    &:hover {\n        color: $retro-magenta;\n        cursor: pointer;\n        border-top: 2px solid $retro-magenta;\n        border-bottom: 2px solid $retro-magenta;\n\n    }\n}\n\n// content Div (Parent)\n#content {\n    @include electrolizeFont();\n    @include centerHorizontally();\n    justify-items: center;\n    background-color: $retro-purple;\n    width: 80%;\n}\n\n// Home Div \n#homeMenuDiv {\n    @include responsiveGrid(200px, 1fr);\n    margin-top: 2vh;\n    h2 {\n        color: $retro-yellow;\n    }\n    p {\n        @include centerHorizontally();\n        max-width: fit-content;\n        margin-bottom: 30px;\n        color: white;\n    }\n    #aboutUsDiv {\n        margin: 1%;\n    }\n    #aboutUsText {\n        width: 95%;\n        @include retroColorPadding($retro-blue);\n    }\n    #aboutUsExtraDetails {\n        width: 90%;\n    }\n    #imageDiv { \n        margin-top: auto;\n        margin-bottom: auto;\n        padding: 2%;\n    }\n    #aboutUsImage {\n        height: 150px;\n        width: 150px;\n    }\n}\n\n// Menu DIV\n#itemMenuDiv {\n    @media only screen and (min-width: 754px) {\n        @include responsiveGrid(350px, 1fr);\n    }\n    @media only screen and (max-width: 753px) {\n        @include responsiveGrid(250px, 1fr);\n    }\n    margin-top: 2vh;\n    .menuItem {\n        padding: 2rem;\n        margin: 1%;\n        border: 2px solid $retro-violet;\n        h3, p{\n            @include centerHorizontally();\n            color: white;\n            margin-bottom: 2px;\n            max-width: 70%;\n        }\n        p {\n            margin-top: 15px;\n        }\n        .drinkImage {\n            height: 150px;\n            width: 150px;\n            margin-top: 20px;\n            margin-bottom: 20px;\n        }\n        .description {\n            @include retroColorPadding($retro-blue);\n        }\n        .price {\n            margin-top:20px;\n            font-size: 200%;\n            color: $retro-yellow;\n        }\n    }\n}\n\n// Contact DIV\n#contactMenuDiv {\n    @extend #homeMenuDiv;\n    #locationText {\n        @include retroColorPadding($retro-blue);\n    }\n    #map {\n        margin: 2%;\n        width: 55vw;\n        height: auto;\n    }\n}\n\n#footer {\n    display: flex;\n    left: 2.5%;\n    margin-bottom: 0px;\n    position: fixed;\n    height: 4%;\n    width: 95%;\n    background-color:$retro-blue; \n    text-align: center;\n    bottom: 0;\n    p {\n        @include electrolizeFont();\n        color: white;\n        margin-left: auto;\n        margin-right: auto;\n        align-self: center;\n        justify-content: center;\n        align-content: center;\n    }\n    a {\n        color: white;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ "./src/cocktail.jpg":
/*!**************************!*\
  !*** ./src/cocktail.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c31b383f9a5969b683c.jpg";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateContact": () => (/* binding */ populateContact)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


const contentDiv = document.querySelector('#content');

const populateContact = () => {
    
    // close expanded mobile menu
    if(document.querySelector('.showMenu')) {
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.closeExpandedMenu)();
    }

    // if homeMenuDiv already exists in DOM, do not run function
    if(document.querySelector('#contactMenuDiv')) {
        return
    }

    // reset contentDiv
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.removeChildNodes)(contentDiv);

    const contactMenuDiv = document.createElement('div');
    contactMenuDiv.id = 'contactMenuDiv';

    
    // LocationDiv

    const locationDiv = document.createElement('div');
    locationDiv.id = 'locationDiv';

    const locationHeader = document.createElement('h2');
    locationHeader.id = 'locationHeader';
    locationHeader.innerText = 'Location'
    locationDiv.appendChild(locationHeader);

    const locationText = document.createElement('p');
    locationText.id = 'locationText';
    locationText.innerText = 'We are located in Bairro Alto, Lisbon. Come experience this magical place today!';
    locationDiv.appendChild(locationText);
    
    const locationDetails = {
        address: 'Travessa dos Inglesinhos  Nº 132',
        city :  'Lisbon',
        postcode : '1200-222',
        country : 'Portugal',
    }

    const locationAdressDiv = document.createElement('div');
    locationAdressDiv.id = 'locationAdressDiv';

    const locationAddress = document.createElement('p');
    locationAddress.id = 'locationAddress';
    locationAddress.innerText = locationDetails.address;

    const locationPostcodeAndCity = document.createElement('p');
    locationPostcodeAndCity.id = 'locationPostcodeAndCity';
    locationPostcodeAndCity.innerText = locationDetails.postcode + '. ' + locationDetails.city;

    const locationCountry = document.createElement('p');
    locationCountry.id = 'locationCountry';
    locationCountry.innerText = locationDetails.country;

    // add image here
    const map = document.createElement('img');
    map.id = 'map';
    map.setAttribute('src', `../src/images/map.png`);

    // Append elements to Content Div
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.appendMultipleNodesToParent)(locationDiv, locationAddress, locationPostcodeAndCity, locationCountry,map);
    locationDiv.appendChild(locationAdressDiv);
    contactMenuDiv.appendChild(locationDiv);
    contentDiv.appendChild(contactMenuDiv);
};




/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeChildNodes": () => (/* binding */ removeChildNodes),
/* harmony export */   "appendMultipleNodesToParent": () => (/* binding */ appendMultipleNodesToParent),
/* harmony export */   "closeExpandedMenu": () => (/* binding */ closeExpandedMenu)
/* harmony export */ });
// Deletes all childNodes of chose 'parentNode'
const removeChildNodes = (parentNode) => {
    while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

const appendMultipleNodesToParent = (parentNode, ...childNodes) => {
    childNodes.forEach(child => {
        parentNode.append(child);
    });
}

const closeExpandedMenu = () => {
    navBar.classList.remove('showMenu');
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateHome": () => (/* binding */ populateHome)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


const contentDiv = document.querySelector('#content');

const populateHome = () => {

    // close expanded mobile menu
    if(document.querySelector('.showMenu')) {
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.closeExpandedMenu)();
    }

    // if homeMenuDiv already exists in DOM, do not run function
    if(document.querySelector('#homeMenuDiv')) {
        return
    }

    // reset contentDiv
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.removeChildNodes)(contentDiv);

    const homeMenuDiv = document.createElement('div');
    homeMenuDiv.id = 'homeMenuDiv';

    // Generate AboutUs Div
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = 'aboutUsDiv';

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.id = 'aboutUsHeader';
    aboutUsHeader.innerText = 'About Us'

    const aboutUsText = document.createElement('p');
    aboutUsText.id = 'aboutUsText';
    aboutUsText.innerText = 'Inspired by the beautiful aesthetics of the 1980s, our lounge gives homage to this amazing era with classic cocktails, dim neon lights, friendly staff and great atmosphere.';

    const aboutUsExtraDetails = document.createElement('p');
    aboutUsExtraDetails.id = 'aboutUsExtraDetails';
    aboutUsExtraDetails.innerText = "Come and enjoy yourself in the 80s. Lose yourself and immerse yourself in this peculiar decade as you sip on a ice cold cocktail and listen to 80s classics.";

    // Image Div
    const imageDiv = document.createElement('div');
    imageDiv.id = 'imageDiv';

    const image = document.createElement('img');
    image.id = 'aboutUsImage';
    image.setAttribute('src', `../src/images/horizon.png`);
    imageDiv.appendChild(image);

    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.appendMultipleNodesToParent)(aboutUsDiv, aboutUsHeader, aboutUsText, aboutUsExtraDetails);
    homeMenuDiv.appendChild(aboutUsDiv);
    homeMenuDiv.appendChild(imageDiv);


    contentDiv.appendChild(homeMenuDiv);
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateMenu": () => (/* binding */ populateMenu)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


// Init arrray
let menuOptions = []

class menuOption {
    constructor(title, imagePath, description, mainIngredients, price) {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.mainIngredients = mainIngredients;
        this.price = price;
    }
}

const addToMenuOptionsArray = (...menuOption) => {
    menuOption.forEach(option => {
        menuOptions.push(option);
    });
}

// Init Menu Objects
let alabama = new menuOption('Alabama Slammer', 'slammer', 'A popular drink for those who enjoy fruity flavours.', 'Jack Daniels, Amaretto Liqueur, Lemon juice.', 5);
let frozen = new menuOption('Blue Hawaiian Frozen', 'frozen', 'An amazing blue drink that will take back to the 80s.', 'Blue Curacao, Pinapple Juice, Coconut Cream.', 6);
let banana = new menuOption('Dirty Banana', 'banana', 'A fun & original rum drink. The perfect cocktail!', 'Vanilla Icecream, Coffee Liqueur, Cream.', 6);
let beach = new menuOption('Sex On The Beach', 'beach', 'A classic cocktail. May evoke some emotions...', 'Vodka, Peach Schnapps, Cranberry Juice.', 7);
let nachos = new menuOption('Tasty Nachos', 'nachos', 'Fancy some nachos with salsa? We got your back!', 'Nachos, salta... lots and lots of salsa.', 4);
let nuts = new menuOption('Mixed Nuts', 'nuts', 'Packed with nutrients and good omegas. Try it now!', 'Just mixed nuts.. from mother nature.', 4);
let waffles = new menuOption('Epic Waffles', 'waffles', 'Waffles and icecream. Does life get any better?', 'Waffles, icecream, chocolate syrup.', 5);
let pizza = new menuOption('Pepperoni Pizza', 'pizza', 'Fancy some italian? Try our pepperoni pizza.', 'Pepperoni, cheese, dough, more cheese...', 6);

// Push 'menuOption' Objects to the array 'menuOptions'
addToMenuOptionsArray(alabama, frozen, banana, beach, nachos, nuts, waffles, pizza);

const contentDiv = document.querySelector('#content');

const populateMenu = () => {

    // close expanded mobile menu
    if(document.querySelector('.showMenu')) {
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.closeExpandedMenu)();
    }
    
    // if itemMenuDiv already exists in DOM, do not run function
    if(document.querySelector('#itemMenuDiv')) {
        return
    }

    // reset contentDiv
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.removeChildNodes)(contentDiv);

    const itemMenuDiv = document.createElement('div');
    itemMenuDiv.id = 'itemMenuDiv';

    menuOptions.forEach(option => {
        let menuItem = document.createElement('div');
        menuItem.classList.add("menuItem")

        // Title of Menu Option
        let title = document.createElement('h3');
        title.innerText = option.title;

        // Ingredients of Menu Option
        let ingredients = document.createElement('p');
        ingredients.innerText = option.mainIngredients;

        // Image of Menu Option
        let image = document.createElement('img');
        image.setAttribute('src', `../src/images/${option.imagePath}.png`);
        image.classList.add("drinkImage");

        // Description of Menu Option
        let description = document.createElement('p');
        description.classList.add('description');
        description.innerText = option.description;

        // Price of Menu Option
        let price = document.createElement('p');
        price.classList.add('price');
        price.innerText = `${option.price}€`;
        
        // MenuItem is parent
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.appendMultipleNodesToParent)(menuItem, title, ingredients, image, description, price); 
        itemMenuDiv.appendChild(menuItem);

    });
    contentDiv.appendChild(itemMenuDiv);
};


/***/ })

/******/ 	});
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/menu.js */ "./src/menu.js");
/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/home.js */ "./src/home.js");
/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/contact.js */ "./src/contact.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
__webpack_require__ (/*! ../../../../../src/menu.js */ "./src/menu.js");
__webpack_require__ (/*! ../../../../../src/home.js */ "./src/home.js");
__webpack_require__ (/*! ../../../../../src/contact.js */ "./src/contact.js");
__webpack_require__ (/*! ../../../../../src/helperFunctions.js */ "./src/helperFunctions.js");








document.addEventListener("DOMContentLoaded", function () {
const header = document.querySelector('#header');

const populateNavigationBar = () => {

    const titleHeader = document.createElement('h2');
    titleHeader.id = 'titleHeader';
    titleHeader.innerText = "Cocktails & Dreams";

    // Create Clicable NavBar for Mobile
    const dropdown = document.createElement('a');
    dropdown.innerText = '☰';
    dropdown.setAttribute('href', '#');
    dropdown.addEventListener('click', toggleMenu);

    // append titleHeader and dropdown to 'header' div
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.appendMultipleNodesToParent)(header, titleHeader, dropdown);

    // Init navigationBar
    const navigationBar = document.createElement('ul');
    navigationBar.id = 'navBar';
    // Navigation Bar Options
    const home = document.createElement('li');
    home.innerText = "Home";
    home.classList.add('menu');
    home.addEventListener('click', _src_home_js__WEBPACK_IMPORTED_MODULE_2__.populateHome);

    const menu = document.createElement('li');
    menu.innerText = "Menu";
    menu.classList.add('menu');
    menu.addEventListener('click', _src_menu_js__WEBPACK_IMPORTED_MODULE_1__.populateMenu);

    const contact = document.createElement('li');
    contact.innerText = "Contact";
    contact.classList.add('menu');
    contact.addEventListener('click', _src_contact_js__WEBPACK_IMPORTED_MODULE_3__.populateContact);

    // Append Options to Navigation Bar List
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.appendMultipleNodesToParent)(navigationBar, home, menu, contact);
    // Append navigationBar to header
    header.appendChild(navigationBar);
}

const populateFooter = () => {
    const footer = document.createElement('footer');
    footer.id = 'footer';

    const pInfo = document.createElement('p');
    pInfo.textContent = 'Developed by ';

    const linkGithub = document.createElement('a');
    linkGithub.innerText = 'xarmar';
    linkGithub.setAttribute('href', 'https://github.com/xarmar');

    pInfo.appendChild(linkGithub);
    footer.appendChild(pInfo);
    document.body.appendChild(footer);

}

const toggleMenu = () => {
    let navBar = document.querySelector('#navBar');
    navBar.classList.toggle('showMenu');
}

populateNavigationBar();
(0,_src_home_js__WEBPACK_IMPORTED_MODULE_2__.populateHome)();
populateFooter();

});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZWpzLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Vqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Vqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Vqcy8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZWpzLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Vqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Vqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Vqcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ3JDO0FBQzNELDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLDBDQUE2QjtBQUN0RztBQUNBLGdEQUFnRCxnRUFBZ0UsZ0NBQWdDLGdDQUFnQyxpQ0FBaUMsRUFBRSxZQUFZLDRDQUE0Qyw4QkFBOEIsdUJBQXVCLGtCQUFrQix3QkFBd0IsbUNBQW1DLGtCQUFrQixlQUFlLDJDQUEyQyxxREFBcUQsRUFBRSwrQ0FBK0MsY0FBYyxvQ0FBb0MsK0JBQStCLDBCQUEwQixtQkFBbUIsc0JBQXNCLEVBQUUsRUFBRSxvQkFBb0IsdUJBQXVCLDBCQUEwQixFQUFFLGlEQUFpRCx3QkFBd0Isd0JBQXdCLHFCQUFxQixvQ0FBb0MsRUFBRSxFQUFFLHlCQUF5Qix1QkFBdUIscUNBQXFDLEVBQUUsY0FBYyxvQkFBb0IsRUFBRSxpREFBaUQsa0JBQWtCLHdCQUF3QiwwQkFBMEIsb0JBQW9CLHNCQUFzQiwyQkFBMkIsOEJBQThCLDBCQUEwQix5QkFBeUIsZ0NBQWdDLHlDQUF5QyxFQUFFLEVBQUUsK0NBQStDLHdCQUF3Qiw2QkFBNkIsa0NBQWtDLGlDQUFpQywrQkFBK0Isd0JBQXdCLG9CQUFvQixzREFBc0QseURBQXlELEVBQUUsdUJBQXVCLFlBQVksc0JBQXNCLEVBQUUsY0FBYyx3QkFBd0IsRUFBRSxFQUFFLEVBQUUsV0FBVyxxQkFBcUIsaUJB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Q0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSxtQkFBTyxFQUFFLGlEQUFjO0FBQ3ZCLG1CQUFPLEVBQUUsaURBQWM7QUFDdkIsbUJBQU8sRUFBRSx1REFBaUI7QUFDMUIsbUJBQU8sRUFBRSx1RUFBeUI7O0FBRVo7QUFDc0I7QUFDQTtBQUNNO0FBQ2M7OztBQUdoRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2RUFBMkI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNEQUFZOztBQUUvQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0RBQVk7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0REFBZTs7QUFFckQ7QUFDQSxJQUFJLDZFQUEyQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUFZO0FBQ1o7O0FBRUEsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2NvY2t0YWlsLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IH1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDaGFrcmEgUGV0Y2gnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHdpZHRoOiA4NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAyLCA2OSwgMC44KTtcXG4gIGJvcmRlci1ib3R0b206IHJnYmEoMTM1LCAyNiwgMTMzLCAwLjgpIDRweCBzb2xpZDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTNweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgcGFkZGluZzogMXJlbTsgfSB9XFxuICBoZWFkZXIgI25hdkJhciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTNweCkge1xcbiAgICAgIGhlYWRlciAjbmF2QmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bzsgfSB9XFxuICBoZWFkZXIgI3RpdGxlSGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU0LCAyNCwgMjExLCAwLjgpOyB9XFxuICBoZWFkZXIgYSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTNweCkge1xcbiAgICAgIGhlYWRlciBhIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDJyZW07XFxuICAgICAgICByaWdodDogMnJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogcmdiYSgyNTQsIDI1NSwgNTYsIDAuOCk7IH0gfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTNweCkge1xcbiAgICBoZWFkZXIgLnNob3dNZW51IHtcXG4gICAgICBhbmltYXRpb24tbmFtZTogdGVzdDtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNTQsIDI0LCAyMTEsIDAuOCk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU0LCAyNCwgMjExLCAwLjgpOyB9XFxuICAgIEBrZXlmcmFtZXMgdGVzdCB7XFxuICAgICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCU7IH1cXG4gICAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7IH0gfSB9XFxuXFxuLm1lbnUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDIwcHg7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxcbiAgLm1lbnU6aG92ZXIge1xcbiAgICBjb2xvcjogcmdiYSgyNTQsIDI0LCAyMTEsIDAuOCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjU0LCAyNCwgMjExLCAwLjgpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTQsIDI0LCAyMTEsIDAuOCk7IH1cXG5cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAyLCA2OSwgMC44KTtcXG4gIHdpZHRoOiA4MCU7IH1cXG5cXG4jaG9tZU1lbnVEaXYsICNjb250YWN0TWVudURpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAydmg7IH1cXG4gICNob21lTWVudURpdiBoMiwgI2NvbnRhY3RNZW51RGl2IGgyIHtcXG4gICAgY29sb3I6IHJnYmEoMjU0LCAyNTUsIDU2LCAwLjgpOyB9XFxuICAjaG9tZU1lbnVEaXYgcCwgI2NvbnRhY3RNZW51RGl2IHAge1xcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgI2hvbWVNZW51RGl2ICNhYm91dFVzRGl2LCAjY29udGFjdE1lbnVEaXYgI2Fib3V0VXNEaXYge1xcbiAgICBtYXJnaW46IDElOyB9XFxuICAjaG9tZU1lbnVEaXYgI2Fib3V0VXNUZXh0LCAjY29udGFjdE1lbnVEaXYgI2Fib3V0VXNUZXh0IHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNiwgMjQxLCAwLjgpOyB9XFxuICAjaG9tZU1lbnVEaXYgI2Fib3V0VXNFeHRyYURldGFpbHMsICNjb250YWN0TWVudURpdiAjYWJvdXRVc0V4dHJhRGV0YWlscyB7XFxuICAgIHdpZHRoOiA5MCU7IH1cXG4gICNob21lTWVudURpdiAjaW1hZ2VEaXYsICNjb250YWN0TWVudURpdiAjaW1hZ2VEaXYge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyJTsgfVxcbiAgI2hvbWVNZW51RGl2ICNhYm91dFVzSW1hZ2UsICNjb250YWN0TWVudURpdiAjYWJvdXRVc0ltYWdlIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4OyB9XFxuXFxuI2l0ZW1NZW51RGl2IHtcXG4gIG1hcmdpbi10b3A6IDJ2aDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTRweCkge1xcbiAgICAjaXRlbU1lbnVEaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvOyB9IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUzcHgpIHtcXG4gICAgI2l0ZW1NZW51RGl2IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bzsgfSB9XFxuICAjaXRlbU1lbnVEaXYgLm1lbnVJdGVtIHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAxJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMzUsIDI2LCAxMzMsIDAuOCk7IH1cXG4gICAgI2l0ZW1NZW51RGl2IC5tZW51SXRlbSBoMywgI2l0ZW1NZW51RGl2IC5tZW51SXRlbSBwIHtcXG4gICAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICAgIG1heC13aWR0aDogNzAlOyB9XFxuICAgICNpdGVtTWVudURpdiAubWVudUl0ZW0gcCB7XFxuICAgICAgbWFyZ2luLXRvcDogMTVweDsgfVxcbiAgICAjaXRlbU1lbnVEaXYgLm1lbnVJdGVtIC5kcmlua0ltYWdlIHtcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG4gICAgI2l0ZW1NZW51RGl2IC5tZW51SXRlbSAuZGVzY3JpcHRpb24ge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNiwgMjQxLCAwLjgpOyB9XFxuICAgICNpdGVtTWVudURpdiAubWVudUl0ZW0gLnByaWNlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgICBjb2xvcjogcmdiYSgyNTQsIDI1NSwgNTYsIDAuOCk7IH1cXG5cXG4jY29udGFjdE1lbnVEaXYgI2xvY2F0aW9uVGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNiwgMjQxLCAwLjgpOyB9XFxuXFxuI2NvbnRhY3RNZW51RGl2ICNtYXAge1xcbiAgbWFyZ2luOiAyJTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGVmdDogMi41JTtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogNCU7XFxuICB3aWR0aDogOTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNiwgMjQxLCAwLjgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAwOyB9XFxuICAjZm9vdGVyIHAge1xcbiAgICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG4gICNmb290ZXIgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0ksbURBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBNEJoQztFQUpJLHVDQUF1QztFQXBCdkMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQTBCbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFVBQVU7RUFDVixzQ0EvQytCO0VBZ0QvQixnREFBc0MsRUFBQTtFQUN0QztJQVZKO01BV1EsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGFBQWEsRUFBQSxFQStDcEI7RUE5REQ7SUFrQlEsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0lBQ25CO01BcEJSO1FBcUJZLGFBQWE7UUFDYixVQUFVO1FBQ1YseUJBQXlCLEVBQUEsRUFFaEM7RUF6Qkw7SUEyQlEsZ0JBQWdCO0lBQ2hCLDhCQS9EK0IsRUFBQTtFQW1DdkM7SUErQlEsYUFBYSxFQUFBO0lBQ2I7TUFoQ1I7UUFpQ1ksYUFBYTtRQUNiLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsOEJBOUUwQixFQUFBLEVBZ0ZqQztFQUVEO0lBOUNKO01BZ0RZLG9CQUFvQjtNQUNwQix5QkFBeUI7TUFDekIsd0JBQXdCO01BQ3hCLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsV0FBVztNQUNYLDZDQXpGMkI7TUEwRjNCLGdEQTFGMkIsRUFBQTtJQTRGL0I7TUFDSTtRQUFJLFdBQVcsRUFBQTtNQUNmO1FBQU0sYUFBYSxFQUFBLEVBQUEsRUFBQTs7QUFNL0I7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiw2QkFBNkIsRUFBQTtFQVBqQztJQVNRLDhCQTdHK0I7SUE4Ry9CLGVBQWU7SUFDZiw2Q0EvRytCO0lBZ0gvQixnREFoSCtCLEVBQUE7O0FBc0h2QztFQTNGSSxzQ0FBc0M7RUFoQnRDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUE2R2xCLHFCQUFxQjtFQUNyQixzQ0E5SCtCO0VBK0gvQixVQUFVLEVBQUE7O0FBSWQ7RUExR0ksYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCx3QkFBd0I7RUEwR3hCLGVBQWUsRUFBQTtFQUZuQjtJQUlRLDhCQXBJOEIsRUFBQTtFQWdJdEM7SUFwSEkseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQTJIZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQVZwQjtJQWFRLFVBQVUsRUFBQTtFQWJsQjtJQWdCUSxVQUFVO0lBL0hkLGFBQWE7SUFDYix1Q0FoQjhCLEVBQUE7RUE4SGxDO0lBb0JRLFVBQVUsRUFBQTtFQXBCbEI7SUF1QlEsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7RUF6Qm5CO0lBNEJRLGFBQWE7SUFDYixZQUFZLEVBQUE7O0FBS3BCO0VBT0ksZUFBZSxFQUFBO0VBTmY7SUFESjtNQTVJSSxhQUFhO01BQ2IsMkRBQTJEO01BQzNELHdCQUF3QixFQUFBLEVBOEszQjtFQWhDRztJQUpKO01BNUlJLGFBQWE7TUFDYiwyREFBMkQ7TUFDM0Qsd0JBQXdCLEVBQUEsRUE4SzNCO0VBcENEO0lBU1EsYUFBYTtJQUNiLFVBQVU7SUFDVix5Q0EvSzhCLEVBQUE7SUFvS3RDO01BdEpJLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFtS1YsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7SUFoQjFCO01BbUJZLGdCQUFnQixFQUFBO0lBbkI1QjtNQXNCWSxhQUFhO01BQ2IsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTtJQXpCL0I7TUFqSkksYUFBYTtNQUNiLHVDQWhCOEIsRUFBQTtJQWdLbEM7TUErQlksZ0JBQWU7TUFDZixlQUFlO01BQ2YsOEJBbk0wQixFQUFBOztBQXlNdEM7RUF4TEksYUFBYTtFQUNiLHVDQWhCOEIsRUFBQTs7QUF1TWxDO0VBTVEsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVO0VBQ1YsdUNBMU44QjtFQTJOOUIsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtFQVRiO0lBekxJLHNDQUFzQztJQXFNbEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUIsRUFBQTtFQWpCN0I7SUFvQlEsWUFBWSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIENvbG9yc1xcbiRyZXRyby1wdXJwbGU6IHJnYmEoMzksIDIsIDY5LCAwLjgpO1xcbiRyZXRyby12aW9sZXQ6IHJnYmEoMTM1LCAyNiwgMTMzLCAwLjgpO1xcbiRyZXRyby1yZWQ6IHJnYmEoMjU1LCA0MSwgNjUsIDAuOCk7XFxuJHJldHJvLXllbGxvdzogcmdiYSgyNTQsIDI1NSwgNTYsIDAuOCk7XFxuJHJldHJvLW1hZ2VudGE6IHJnYmEoMjU0LCAyNCwgMjExLCAwLjgpOztcXG4kcmV0cm8tYmx1ZTogcmdiYSg2NiwgNiwgMjQxLCAwLjgpO1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vY29ja3RhaWwuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVySG9yaXpvbnRhbGx5IHtcXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gcmV0cm9Db2xvclBhZGRpbmcgKCRjb2xvcikge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxufVxcblxcbkBtaXhpbiByZXNwb25zaXZlR3JpZCAoJG1pbiwgJG1heCkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KCRtaW4sICRtYXgpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG5AbWl4aW4gZWxlY3Ryb2xpemVGb250IHtcXG4gICAgZm9udC1mYW1pbHk6ICdFbGVjdHJvbGl6ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbkBtaXhpbiBjaGFrcmFGb250IHtcXG4gICAgZm9udC1mYW1pbHk6ICdDaGFrcmEgUGV0Y2gnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBAaW5jbHVkZSBjaGFrcmFGb250KCk7XFxuICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZXRyby1wdXJwbGU7XFxuICAgIGJvcmRlci1ib3R0b206ICRyZXRyby12aW9sZXQgNHB4IHNvbGlkO1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1M3B4KSB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgfVxcbiAgICAjbmF2QmFyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTNweCkgIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAjdGl0bGVIZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgICAgIGNvbG9yOiAkcmV0cm8tbWFnZW50YTtcXG4gICAgfVxcbiAgICBhIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1M3B4KSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgdG9wOiAycmVtO1xcbiAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMyU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiAkcmV0cm8teWVsbG93O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUzcHgpIHtcXG4gICAgICAgIC5zaG93TWVudSB7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHRlc3Q7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRyZXRyby1tYWdlbnRhO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcmV0cm8tbWFnZW50YTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdGVzdCB7XFxuICAgICAgICAgICAgMCUge29wYWNpdHk6IDAlfTtcXG4gICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxMDAlfTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vLyBOYXZpZ2F0aW9uIEJhclxcbi5tZW51IHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMjBweDtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJHJldHJvLW1hZ2VudGE7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJHJldHJvLW1hZ2VudGE7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHJldHJvLW1hZ2VudGE7XFxuXFxuICAgIH1cXG59XFxuXFxuLy8gY29udGVudCBEaXYgKFBhcmVudClcXG4jY29udGVudCB7XFxuICAgIEBpbmNsdWRlIGVsZWN0cm9saXplRm9udCgpO1xcbiAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmV0cm8tcHVycGxlO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4vLyBIb21lIERpdiBcXG4jaG9tZU1lbnVEaXYge1xcbiAgICBAaW5jbHVkZSByZXNwb25zaXZlR3JpZCgyMDBweCwgMWZyKTtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICBoMiB7XFxuICAgICAgICBjb2xvcjogJHJldHJvLXllbGxvdztcXG4gICAgfVxcbiAgICBwIHtcXG4gICAgICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgI2Fib3V0VXNEaXYge1xcbiAgICAgICAgbWFyZ2luOiAxJTtcXG4gICAgfVxcbiAgICAjYWJvdXRVc1RleHQge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIEBpbmNsdWRlIHJldHJvQ29sb3JQYWRkaW5nKCRyZXRyby1ibHVlKTtcXG4gICAgfVxcbiAgICAjYWJvdXRVc0V4dHJhRGV0YWlscyB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuICAgICNpbWFnZURpdiB7IFxcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgICAgICBwYWRkaW5nOiAyJTtcXG4gICAgfVxcbiAgICAjYWJvdXRVc0ltYWdlIHtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgIH1cXG59XFxuXFxuLy8gTWVudSBESVZcXG4jaXRlbU1lbnVEaXYge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1NHB4KSB7XFxuICAgICAgICBAaW5jbHVkZSByZXNwb25zaXZlR3JpZCgzNTBweCwgMWZyKTtcXG4gICAgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1M3B4KSB7XFxuICAgICAgICBAaW5jbHVkZSByZXNwb25zaXZlR3JpZCgyNTBweCwgMWZyKTtcXG4gICAgfVxcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgIC5tZW51SXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgbWFyZ2luOiAxJTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRyZXRyby12aW9sZXQ7XFxuICAgICAgICBoMywgcHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5kcmlua0ltYWdlIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIHJldHJvQ29sb3JQYWRkaW5nKCRyZXRyby1ibHVlKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5wcmljZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgICAgICAgICBjb2xvcjogJHJldHJvLXllbGxvdztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vLyBDb250YWN0IERJVlxcbiNjb250YWN0TWVudURpdiB7XFxuICAgIEBleHRlbmQgI2hvbWVNZW51RGl2O1xcbiAgICAjbG9jYXRpb25UZXh0IHtcXG4gICAgICAgIEBpbmNsdWRlIHJldHJvQ29sb3JQYWRkaW5nKCRyZXRyby1ibHVlKTtcXG4gICAgfVxcbiAgICAjbWFwIHtcXG4gICAgICAgIG1hcmdpbjogMiU7XFxuICAgICAgICB3aWR0aDogNTV2dztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGVmdDogMi41JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogNCU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6JHJldHJvLWJsdWU7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcCB7XFxuICAgICAgICBAaW5jbHVkZSBlbGVjdHJvbGl6ZUZvbnQoKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgYSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7cmVtb3ZlQ2hpbGROb2RlcywgYXBwZW5kTXVsdGlwbGVOb2Rlc1RvUGFyZW50LCBjbG9zZUV4cGFuZGVkTWVudX0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICBcbiAgICAvLyBjbG9zZSBleHBhbmRlZCBtb2JpbGUgbWVudVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93TWVudScpKSB7XG4gICAgICAgIGNsb3NlRXhwYW5kZWRNZW51KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgaG9tZU1lbnVEaXYgYWxyZWFkeSBleGlzdHMgaW4gRE9NLCBkbyBub3QgcnVuIGZ1bmN0aW9uXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RNZW51RGl2JykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gcmVzZXQgY29udGVudERpdlxuICAgIHJlbW92ZUNoaWxkTm9kZXMoY29udGVudERpdik7XG5cbiAgICBjb25zdCBjb250YWN0TWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RNZW51RGl2LmlkID0gJ2NvbnRhY3RNZW51RGl2JztcblxuICAgIFxuICAgIC8vIExvY2F0aW9uRGl2XG5cbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uRGl2LmlkID0gJ2xvY2F0aW9uRGl2JztcblxuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsb2NhdGlvbkhlYWRlci5pZCA9ICdsb2NhdGlvbkhlYWRlcic7XG4gICAgbG9jYXRpb25IZWFkZXIuaW5uZXJUZXh0ID0gJ0xvY2F0aW9uJ1xuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvblRleHQuaWQgPSAnbG9jYXRpb25UZXh0JztcbiAgICBsb2NhdGlvblRleHQuaW5uZXJUZXh0ID0gJ1dlIGFyZSBsb2NhdGVkIGluIEJhaXJybyBBbHRvLCBMaXNib24uIENvbWUgZXhwZXJpZW5jZSB0aGlzIG1hZ2ljYWwgcGxhY2UgdG9kYXkhJztcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvblRleHQpO1xuICAgIFxuICAgIGNvbnN0IGxvY2F0aW9uRGV0YWlscyA9IHtcbiAgICAgICAgYWRkcmVzczogJ1RyYXZlc3NhIGRvcyBJbmdsZXNpbmhvcyAgTsK6IDEzMicsXG4gICAgICAgIGNpdHkgOiAgJ0xpc2JvbicsXG4gICAgICAgIHBvc3Rjb2RlIDogJzEyMDAtMjIyJyxcbiAgICAgICAgY291bnRyeSA6ICdQb3J0dWdhbCcsXG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb25BZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbkFkcmVzc0Rpdi5pZCA9ICdsb2NhdGlvbkFkcmVzc0Rpdic7XG5cbiAgICBjb25zdCBsb2NhdGlvbkFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25BZGRyZXNzLmlkID0gJ2xvY2F0aW9uQWRkcmVzcyc7XG4gICAgbG9jYXRpb25BZGRyZXNzLmlubmVyVGV4dCA9IGxvY2F0aW9uRGV0YWlscy5hZGRyZXNzO1xuXG4gICAgY29uc3QgbG9jYXRpb25Qb3N0Y29kZUFuZENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb25Qb3N0Y29kZUFuZENpdHkuaWQgPSAnbG9jYXRpb25Qb3N0Y29kZUFuZENpdHknO1xuICAgIGxvY2F0aW9uUG9zdGNvZGVBbmRDaXR5LmlubmVyVGV4dCA9IGxvY2F0aW9uRGV0YWlscy5wb3N0Y29kZSArICcuICcgKyBsb2NhdGlvbkRldGFpbHMuY2l0eTtcblxuICAgIGNvbnN0IGxvY2F0aW9uQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvbkNvdW50cnkuaWQgPSAnbG9jYXRpb25Db3VudHJ5JztcbiAgICBsb2NhdGlvbkNvdW50cnkuaW5uZXJUZXh0ID0gbG9jYXRpb25EZXRhaWxzLmNvdW50cnk7XG5cbiAgICAvLyBhZGQgaW1hZ2UgaGVyZVxuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcC5pZCA9ICdtYXAnO1xuICAgIG1hcC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvaW1hZ2VzL21hcC5wbmdgKTtcblxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBDb250ZW50IERpdlxuICAgIGFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudChsb2NhdGlvbkRpdiwgbG9jYXRpb25BZGRyZXNzLCBsb2NhdGlvblBvc3Rjb2RlQW5kQ2l0eSwgbG9jYXRpb25Db3VudHJ5LG1hcCk7XG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25BZHJlc3NEaXYpO1xuICAgIGNvbnRhY3RNZW51RGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RNZW51RGl2KTtcbn07XG5cblxuIiwiLy8gRGVsZXRlcyBhbGwgY2hpbGROb2RlcyBvZiBjaG9zZSAncGFyZW50Tm9kZSdcbmV4cG9ydCBjb25zdCByZW1vdmVDaGlsZE5vZGVzID0gKHBhcmVudE5vZGUpID0+IHtcbiAgICB3aGlsZShwYXJlbnROb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudCA9IChwYXJlbnROb2RlLCAuLi5jaGlsZE5vZGVzKSA9PiB7XG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2VFeHBhbmRlZE1lbnUgPSAoKSA9PiB7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dNZW51Jyk7XG59IiwiaW1wb3J0IHtyZW1vdmVDaGlsZE5vZGVzLCBhcHBlbmRNdWx0aXBsZU5vZGVzVG9QYXJlbnQsIGNsb3NlRXhwYW5kZWRNZW51fSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgY29uc3QgcG9wdWxhdGVIb21lID0gKCkgPT4ge1xuXG4gICAgLy8gY2xvc2UgZXhwYW5kZWQgbW9iaWxlIG1lbnVcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd01lbnUnKSkge1xuICAgICAgICBjbG9zZUV4cGFuZGVkTWVudSgpO1xuICAgIH1cblxuICAgIC8vIGlmIGhvbWVNZW51RGl2IGFscmVhZHkgZXhpc3RzIGluIERPTSwgZG8gbm90IHJ1biBmdW5jdGlvblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lTWVudURpdicpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJlc2V0IGNvbnRlbnREaXZcbiAgICByZW1vdmVDaGlsZE5vZGVzKGNvbnRlbnREaXYpO1xuXG4gICAgY29uc3QgaG9tZU1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lTWVudURpdi5pZCA9ICdob21lTWVudURpdic7XG5cbiAgICAvLyBHZW5lcmF0ZSBBYm91dFVzIERpdlxuICAgIGNvbnN0IGFib3V0VXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzRGl2LmlkID0gJ2Fib3V0VXNEaXYnO1xuXG4gICAgY29uc3QgYWJvdXRVc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRVc0hlYWRlci5pZCA9ICdhYm91dFVzSGVhZGVyJztcbiAgICBhYm91dFVzSGVhZGVyLmlubmVyVGV4dCA9ICdBYm91dCBVcydcblxuICAgIGNvbnN0IGFib3V0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VXNUZXh0LmlkID0gJ2Fib3V0VXNUZXh0JztcbiAgICBhYm91dFVzVGV4dC5pbm5lclRleHQgPSAnSW5zcGlyZWQgYnkgdGhlIGJlYXV0aWZ1bCBhZXN0aGV0aWNzIG9mIHRoZSAxOTgwcywgb3VyIGxvdW5nZSBnaXZlcyBob21hZ2UgdG8gdGhpcyBhbWF6aW5nIGVyYSB3aXRoIGNsYXNzaWMgY29ja3RhaWxzLCBkaW0gbmVvbiBsaWdodHMsIGZyaWVuZGx5IHN0YWZmIGFuZCBncmVhdCBhdG1vc3BoZXJlLic7XG5cbiAgICBjb25zdCBhYm91dFVzRXh0cmFEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VXNFeHRyYURldGFpbHMuaWQgPSAnYWJvdXRVc0V4dHJhRGV0YWlscyc7XG4gICAgYWJvdXRVc0V4dHJhRGV0YWlscy5pbm5lclRleHQgPSBcIkNvbWUgYW5kIGVuam95IHlvdXJzZWxmIGluIHRoZSA4MHMuIExvc2UgeW91cnNlbGYgYW5kIGltbWVyc2UgeW91cnNlbGYgaW4gdGhpcyBwZWN1bGlhciBkZWNhZGUgYXMgeW91IHNpcCBvbiBhIGljZSBjb2xkIGNvY2t0YWlsIGFuZCBsaXN0ZW4gdG8gODBzIGNsYXNzaWNzLlwiO1xuXG4gICAgLy8gSW1hZ2UgRGl2XG4gICAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZURpdi5pZCA9ICdpbWFnZURpdic7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLmlkID0gJ2Fib3V0VXNJbWFnZSc7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi4vc3JjL2ltYWdlcy9ob3Jpem9uLnBuZ2ApO1xuICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudChhYm91dFVzRGl2LCBhYm91dFVzSGVhZGVyLCBhYm91dFVzVGV4dCwgYWJvdXRVc0V4dHJhRGV0YWlscyk7XG4gICAgaG9tZU1lbnVEaXYuYXBwZW5kQ2hpbGQoYWJvdXRVc0Rpdik7XG4gICAgaG9tZU1lbnVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2VEaXYpO1xuXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVNZW51RGl2KTtcbn07XG5cblxuIiwiaW1wb3J0IHtyZW1vdmVDaGlsZE5vZGVzLCBhcHBlbmRNdWx0aXBsZU5vZGVzVG9QYXJlbnQsIGNsb3NlRXhwYW5kZWRNZW51fSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbi8vIEluaXQgYXJycmF5XG5sZXQgbWVudU9wdGlvbnMgPSBbXVxuXG5jbGFzcyBtZW51T3B0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgaW1hZ2VQYXRoLCBkZXNjcmlwdGlvbiwgbWFpbkluZ3JlZGllbnRzLCBwcmljZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gaW1hZ2VQYXRoO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubWFpbkluZ3JlZGllbnRzID0gbWFpbkluZ3JlZGllbnRzO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxufVxuXG5jb25zdCBhZGRUb01lbnVPcHRpb25zQXJyYXkgPSAoLi4ubWVudU9wdGlvbikgPT4ge1xuICAgIG1lbnVPcHRpb24uZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBtZW51T3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgfSk7XG59XG5cbi8vIEluaXQgTWVudSBPYmplY3RzXG5sZXQgYWxhYmFtYSA9IG5ldyBtZW51T3B0aW9uKCdBbGFiYW1hIFNsYW1tZXInLCAnc2xhbW1lcicsICdBIHBvcHVsYXIgZHJpbmsgZm9yIHRob3NlIHdobyBlbmpveSBmcnVpdHkgZmxhdm91cnMuJywgJ0phY2sgRGFuaWVscywgQW1hcmV0dG8gTGlxdWV1ciwgTGVtb24ganVpY2UuJywgNSk7XG5sZXQgZnJvemVuID0gbmV3IG1lbnVPcHRpb24oJ0JsdWUgSGF3YWlpYW4gRnJvemVuJywgJ2Zyb3plbicsICdBbiBhbWF6aW5nIGJsdWUgZHJpbmsgdGhhdCB3aWxsIHRha2UgYmFjayB0byB0aGUgODBzLicsICdCbHVlIEN1cmFjYW8sIFBpbmFwcGxlIEp1aWNlLCBDb2NvbnV0IENyZWFtLicsIDYpO1xubGV0IGJhbmFuYSA9IG5ldyBtZW51T3B0aW9uKCdEaXJ0eSBCYW5hbmEnLCAnYmFuYW5hJywgJ0EgZnVuICYgb3JpZ2luYWwgcnVtIGRyaW5rLiBUaGUgcGVyZmVjdCBjb2NrdGFpbCEnLCAnVmFuaWxsYSBJY2VjcmVhbSwgQ29mZmVlIExpcXVldXIsIENyZWFtLicsIDYpO1xubGV0IGJlYWNoID0gbmV3IG1lbnVPcHRpb24oJ1NleCBPbiBUaGUgQmVhY2gnLCAnYmVhY2gnLCAnQSBjbGFzc2ljIGNvY2t0YWlsLiBNYXkgZXZva2Ugc29tZSBlbW90aW9ucy4uLicsICdWb2RrYSwgUGVhY2ggU2NobmFwcHMsIENyYW5iZXJyeSBKdWljZS4nLCA3KTtcbmxldCBuYWNob3MgPSBuZXcgbWVudU9wdGlvbignVGFzdHkgTmFjaG9zJywgJ25hY2hvcycsICdGYW5jeSBzb21lIG5hY2hvcyB3aXRoIHNhbHNhPyBXZSBnb3QgeW91ciBiYWNrIScsICdOYWNob3MsIHNhbHRhLi4uIGxvdHMgYW5kIGxvdHMgb2Ygc2Fsc2EuJywgNCk7XG5sZXQgbnV0cyA9IG5ldyBtZW51T3B0aW9uKCdNaXhlZCBOdXRzJywgJ251dHMnLCAnUGFja2VkIHdpdGggbnV0cmllbnRzIGFuZCBnb29kIG9tZWdhcy4gVHJ5IGl0IG5vdyEnLCAnSnVzdCBtaXhlZCBudXRzLi4gZnJvbSBtb3RoZXIgbmF0dXJlLicsIDQpO1xubGV0IHdhZmZsZXMgPSBuZXcgbWVudU9wdGlvbignRXBpYyBXYWZmbGVzJywgJ3dhZmZsZXMnLCAnV2FmZmxlcyBhbmQgaWNlY3JlYW0uIERvZXMgbGlmZSBnZXQgYW55IGJldHRlcj8nLCAnV2FmZmxlcywgaWNlY3JlYW0sIGNob2NvbGF0ZSBzeXJ1cC4nLCA1KTtcbmxldCBwaXp6YSA9IG5ldyBtZW51T3B0aW9uKCdQZXBwZXJvbmkgUGl6emEnLCAncGl6emEnLCAnRmFuY3kgc29tZSBpdGFsaWFuPyBUcnkgb3VyIHBlcHBlcm9uaSBwaXp6YS4nLCAnUGVwcGVyb25pLCBjaGVlc2UsIGRvdWdoLCBtb3JlIGNoZWVzZS4uLicsIDYpO1xuXG4vLyBQdXNoICdtZW51T3B0aW9uJyBPYmplY3RzIHRvIHRoZSBhcnJheSAnbWVudU9wdGlvbnMnXG5hZGRUb01lbnVPcHRpb25zQXJyYXkoYWxhYmFtYSwgZnJvemVuLCBiYW5hbmEsIGJlYWNoLCBuYWNob3MsIG51dHMsIHdhZmZsZXMsIHBpenphKTtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBjb25zdCBwb3B1bGF0ZU1lbnUgPSAoKSA9PiB7XG5cbiAgICAvLyBjbG9zZSBleHBhbmRlZCBtb2JpbGUgbWVudVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93TWVudScpKSB7XG4gICAgICAgIGNsb3NlRXhwYW5kZWRNZW51KCk7XG4gICAgfVxuICAgIFxuICAgIC8vIGlmIGl0ZW1NZW51RGl2IGFscmVhZHkgZXhpc3RzIGluIERPTSwgZG8gbm90IHJ1biBmdW5jdGlvblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtTWVudURpdicpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJlc2V0IGNvbnRlbnREaXZcbiAgICByZW1vdmVDaGlsZE5vZGVzKGNvbnRlbnREaXYpO1xuXG4gICAgY29uc3QgaXRlbU1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtTWVudURpdi5pZCA9ICdpdGVtTWVudURpdic7XG5cbiAgICBtZW51T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIilcblxuICAgICAgICAvLyBUaXRsZSBvZiBNZW51IE9wdGlvblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBvcHRpb24udGl0bGU7XG5cbiAgICAgICAgLy8gSW5ncmVkaWVudHMgb2YgTWVudSBPcHRpb25cbiAgICAgICAgbGV0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpbmdyZWRpZW50cy5pbm5lclRleHQgPSBvcHRpb24ubWFpbkluZ3JlZGllbnRzO1xuXG4gICAgICAgIC8vIEltYWdlIG9mIE1lbnUgT3B0aW9uXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvaW1hZ2VzLyR7b3B0aW9uLmltYWdlUGF0aH0ucG5nYCk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJkcmlua0ltYWdlXCIpO1xuXG4gICAgICAgIC8vIERlc2NyaXB0aW9uIG9mIE1lbnUgT3B0aW9uXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gb3B0aW9uLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIC8vIFByaWNlIG9mIE1lbnUgT3B0aW9uXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICAgICAgcHJpY2UuaW5uZXJUZXh0ID0gYCR7b3B0aW9uLnByaWNlfeKCrGA7XG4gICAgICAgIFxuICAgICAgICAvLyBNZW51SXRlbSBpcyBwYXJlbnRcbiAgICAgICAgYXBwZW5kTXVsdGlwbGVOb2Rlc1RvUGFyZW50KG1lbnVJdGVtLCB0aXRsZSwgaW5ncmVkaWVudHMsIGltYWdlLCBkZXNjcmlwdGlvbiwgcHJpY2UpOyBcbiAgICAgICAgaXRlbU1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgfSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpdGVtTWVudURpdik7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJyZXF1aXJlICgnL3NyYy9tZW51LmpzJyk7XG5yZXF1aXJlICgnL3NyYy9ob21lLmpzJyk7XG5yZXF1aXJlICgnL3NyYy9jb250YWN0LmpzJyk7XG5yZXF1aXJlICgnL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMnKTtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1lbnUgfSBmcm9tICcvc3JjL21lbnUuanMnO1xuaW1wb3J0IHsgcG9wdWxhdGVIb21lIH0gZnJvbSAnL3NyYy9ob21lLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlQ29udGFjdCB9IGZyb20gJy9zcmMvY29udGFjdC5qcyc7XG5pbXBvcnQgeyBhcHBlbmRNdWx0aXBsZU5vZGVzVG9QYXJlbnQgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5cbmNvbnN0IHBvcHVsYXRlTmF2aWdhdGlvbkJhciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZUhlYWRlci5pZCA9ICd0aXRsZUhlYWRlcic7XG4gICAgdGl0bGVIZWFkZXIuaW5uZXJUZXh0ID0gXCJDb2NrdGFpbHMgJiBEcmVhbXNcIjtcblxuICAgIC8vIENyZWF0ZSBDbGljYWJsZSBOYXZCYXIgZm9yIE1vYmlsZVxuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGRyb3Bkb3duLmlubmVyVGV4dCA9ICfimLAnO1xuICAgIGRyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KTtcblxuICAgIC8vIGFwcGVuZCB0aXRsZUhlYWRlciBhbmQgZHJvcGRvd24gdG8gJ2hlYWRlcicgZGl2XG4gICAgYXBwZW5kTXVsdGlwbGVOb2Rlc1RvUGFyZW50KGhlYWRlciwgdGl0bGVIZWFkZXIsIGRyb3Bkb3duKTtcblxuICAgIC8vIEluaXQgbmF2aWdhdGlvbkJhclxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdmlnYXRpb25CYXIuaWQgPSAnbmF2QmFyJztcbiAgICAvLyBOYXZpZ2F0aW9uIEJhciBPcHRpb25zXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9wdWxhdGVIb21lKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvcHVsYXRlTWVudSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3B1bGF0ZUNvbnRhY3QpO1xuXG4gICAgLy8gQXBwZW5kIE9wdGlvbnMgdG8gTmF2aWdhdGlvbiBCYXIgTGlzdFxuICAgIGFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudChuYXZpZ2F0aW9uQmFyLCBob21lLCBtZW51LCBjb250YWN0KTtcbiAgICAvLyBBcHBlbmQgbmF2aWdhdGlvbkJhciB0byBoZWFkZXJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkJhcik7XG59XG5cbmNvbnN0IHBvcHVsYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuXG4gICAgY29uc3QgcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEluZm8udGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIGJ5ICc7XG5cbiAgICBjb25zdCBsaW5rR2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmtHaXRodWIuaW5uZXJUZXh0ID0gJ3hhcm1hcic7XG4gICAgbGlua0dpdGh1Yi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL3hhcm1hcicpO1xuXG4gICAgcEluZm8uYXBwZW5kQ2hpbGQobGlua0dpdGh1Yik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBJbmZvKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbn1cblxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdkJhcicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93TWVudScpO1xufVxuXG5wb3B1bGF0ZU5hdmlnYXRpb25CYXIoKTtcbnBvcHVsYXRlSG9tZSgpO1xucG9wdWxhdGVGb290ZXIoKTtcblxufSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==