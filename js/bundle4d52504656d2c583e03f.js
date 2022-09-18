/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody,html{\r\n    box-sizing: inherit;\r\n    font-size: 16px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\nheader{\r\n    position: fixed;\r\n    width: 100%;\r\n    background-color: #D8D8D8;\r\n    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);\r\n}\r\nnav ul {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: fit-content;\r\n}\r\nnav ul li{\r\n    padding: .5rem 1em;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n}\r\nnav ul li:hover{\r\n  background-color: #fff;\r\n  border-bottom: 5px inset;\r\n}\r\nimg{\r\n    max-width: calc(100vw/2);\r\n    border-radius: 5px;\r\n}\r\nmain{\r\n    padding-top: 2.5rem;\r\n    color: #000;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nfooter{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    height: fit-content;\r\n    font-size: .95em;\r\n    text-align: center;\r\n    background-color: #D8D8D8;\r\n    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);\r\n}\r\nfooter p{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: .1rem;\r\n}\r\nfooter p a{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: .1rem;\r\n}\r\n.paragraph{\r\n    padding: .5em 1em;\r\n    font-size: 1.25rem;\r\n    text-align: justify;\r\n    line-height: 1.5;\r\n}\r\n.home-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.home-container_left,\r\n.home-container_right{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n}\r\n.home-container_right{\r\n    padding: 1rem 0;\r\n}\r\n.food-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 80vw;\r\n    margin: 1rem;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    gap: .5rem;\r\n    box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);\r\n    border-radius: 5px;\r\n}\r\n.food-container_left,\r\n.food-container_right{\r\n    padding: 1rem;\r\n}\r\nimg{\r\n    width: calc(100vw/2);\r\n}\r\n.food-image{\r\n    max-width: 400px;\r\n}\r\n.food-description{\r\n    font-size: 1.25rem;\r\n    text-align: justify;\r\n    line-height: 1.5;   \r\n    padding: .5rem 0;\r\n}\r\n.selected-tab{\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-bottom: 5px inset brown;\r\n    font-weight: bold;\r\n    border-top-right-radius: 1rem;\r\n}\r\n.history-container{\r\n    padding: 0 5rem;\r\n}\r\n.history-title{\r\n    padding: 1rem 0 0 1.25rem; \r\n}\r\n#github-icon{\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n@media only screen and (max-width:1200px){\r\n\r\n    .home-container{\r\n        flex-direction: column;\r\n    }\r\n    .food-container{\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    .history-container{\r\n        padding: 0 1rem;\r\n    }\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AACA;;;IAGI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,4CAA4C;AAChD;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;AACA;EACE,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;IACI,wBAAwB;IACxB,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,4CAA4C;AAChD;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,6CAA6C;IAC7C,kBAAkB;AACtB;AACA;;IAEI,aAAa;AACjB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,sBAAsB;IACtB,8BAA8B;IAC9B,iBAAiB;IACjB,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI;QACI,sBAAsB;IAC1B;IACA;QACI,sBAAsB;QACtB,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n*,\r\n*::after,\r\n*::before{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody,html{\r\n    box-sizing: inherit;\r\n    font-size: 16px;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\nheader{\r\n    position: fixed;\r\n    width: 100%;\r\n    background-color: #D8D8D8;\r\n    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);\r\n}\r\nnav ul {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: fit-content;\r\n}\r\nnav ul li{\r\n    padding: .5rem 1em;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n}\r\nnav ul li:hover{\r\n  background-color: #fff;\r\n  border-bottom: 5px inset;\r\n}\r\nimg{\r\n    max-width: calc(100vw/2);\r\n    border-radius: 5px;\r\n}\r\nmain{\r\n    padding-top: 2.5rem;\r\n    color: #000;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nfooter{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    height: fit-content;\r\n    font-size: .95em;\r\n    text-align: center;\r\n    background-color: #D8D8D8;\r\n    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);\r\n}\r\nfooter p{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: .1rem;\r\n}\r\nfooter p a{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: .1rem;\r\n}\r\n.paragraph{\r\n    padding: .5em 1em;\r\n    font-size: 1.25rem;\r\n    text-align: justify;\r\n    line-height: 1.5;\r\n}\r\n.home-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.home-container_left,\r\n.home-container_right{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n}\r\n.home-container_right{\r\n    padding: 1rem 0;\r\n}\r\n.food-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    width: 80vw;\r\n    margin: 1rem;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    gap: .5rem;\r\n    box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.75);\r\n    border-radius: 5px;\r\n}\r\n.food-container_left,\r\n.food-container_right{\r\n    padding: 1rem;\r\n}\r\nimg{\r\n    width: calc(100vw/2);\r\n}\r\n.food-image{\r\n    max-width: 400px;\r\n}\r\n.food-description{\r\n    font-size: 1.25rem;\r\n    text-align: justify;\r\n    line-height: 1.5;   \r\n    padding: .5rem 0;\r\n}\r\n.selected-tab{\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-bottom: 5px inset brown;\r\n    font-weight: bold;\r\n    border-top-right-radius: 1rem;\r\n}\r\n.history-container{\r\n    padding: 0 5rem;\r\n}\r\n.history-title{\r\n    padding: 1rem 0 0 1.25rem; \r\n}\r\n#github-icon{\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n@media only screen and (max-width:1200px){\r\n\r\n    .home-container{\r\n        flex-direction: column;\r\n    }\r\n    .food-container{\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    .history-container{\r\n        padding: 0 1rem;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactContent() {
  const content = document.querySelector("#content");
  const historyContainer = document.createElement("div");
  const historyTitle = document.createElement("h1");
  const historyParagraph = document.createElement("p");
  const historyParagraph2 = document.createElement("p");
  const historyParagraph3 = document.createElement("p");

  content.innerHTML = "";

  historyContainer.classList.add("history-container");
  historyTitle.classList.add("history-title");
  historyParagraph.classList.add("paragraph");
  historyParagraph2.classList.add("paragraph");
  historyParagraph3.classList.add("paragraph");

  historyTitle.textContent = "History";
  historyParagraph.textContent =
    "Ramen Ichiraku is Naruto Uzumaki's favourite dining establishment. He eats there regularly – usually stopping by between missions – and he is often joined by Iruka Umino, another frequent customer. Because Naruto has been a loyal customer for most of his life, Teuchi and his daughter, Ayame, were among the few people in Konoha not to treat Naruto with animosity during his youth. Naruto takes Hinata Hyūga to Ramen Ichiraku for their first date; in the anime, this in turn causes Hinata to become a regular customer, to the point that she has won at least one of its eating contests. In Konoha Hiden, Teuchi gives Naruto a lifetime pass for Ramen Ichiraku as a wedding present, which the anime shows to have received heavy use over the following years.";
  historyParagraph2.textContent =
    "The original Ramen Ichiraku is destroyed along with the rest of Konoha during Pain's Assault. In the anime, Inari is implied to have been responsible for rebuilding it, as a favour to Naruto. As Naruto becomes increasingly famous, first as a war hero and later as Hokage, Ramen Ichiraku prospers; in Konoha Hiden, this is explained to be because of customers' hopes of either seeing Naruto there or simply a desire to emulate him and his successes. The second Ramen Ichiraku is ill-suited for this increased business, so it is remodeled and expanded into an indoor restaurant at some point after Ayame takes over management. Ayame even makes Naruto their official promoter; in one such advertisement, he claims that Ramen Ichiraku is just as nutritious as soldier pills.";

  historyParagraph3.textContent =
    "In addition to the fresh-made ramen that it is known for, Ramen Ichiraku has at times dabbled in other products. In one episode of the anime, Teuchi starts making diet ramen to help Ayame lose weight, which ends up becoming popular with female patrons. In another episode, Ayame convinces her father to serve tsukemen instead of ramen. Naruto disapproves of this, and by the next time he is seen visiting it is back to serving ramen. At some point, Ramen Ichiraku starts selling instant ramen, empty cups of which tend to litter Naruto's desk at work.";

  historyContainer.appendChild(historyTitle);
  historyContainer.appendChild(historyParagraph);
  historyContainer.appendChild(historyParagraph2);
  historyContainer.appendChild(historyParagraph3);

  content.appendChild(historyContainer);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/restaurant.jpg */ "./src/assets/img/restaurant.jpg");

function homeContent() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  const restaurantImage = new Image();
  restaurantImage.src = _assets_img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;

  content.innerHTML = "";

  div.classList.add("home-container");
  h1.textContent = "Ichiraku Ichiraku";
  divLeft.classList.add("home-container_left");
  divLeft.appendChild(h1);
  divLeft.appendChild(restaurantImage);

  p.textContent =
    "Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.";

  p2.textContent =
    "Come dine with us & experience an authentic Japanese meals in an intimate dining space. We look forward to serving you!";

  p.classList.add("paragraph");
  p2.classList.add("paragraph");

  divRight.appendChild(p);
  divRight.appendChild(p2);
  divRight.classList.add("home-container_right");

  div.appendChild(divLeft);
  div.appendChild(divRight);
  content.appendChild(div);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_img_miso_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/miso-ramen.jpg */ "./src/assets/img/miso-ramen.jpg");
/* harmony import */ var _assets_img_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/ramen.jpg */ "./src/assets/img/ramen.jpg");


function menuContent() {
  const content = document.querySelector("#content");
  const foodContainer = document.createElement("div");
  const foodContainerMiso = document.createElement("div");
  const foodContainerRamenLeft = document.createElement("div");
  const foodContainerMisoLeft = document.createElement("div");
  const foodContainerRamenRight = document.createElement("div");
  const foodContainerMisoRight = document.createElement("div");
  const foodTitleMiso = document.createElement("h1");
  const foodDescriptionMiso = document.createElement("p");
  const foodDescriptionMiso2 = document.createElement("p");
  const foodTitleRamen = document.createElement("h1");
  const foodDescriptionRamen = document.createElement("p");
  const foodDescriptionRamen2 = document.createElement("p");
  const misoImage = new Image();
  const ramenImage = new Image();

  foodContainer.classList.add("food-container");
  foodContainerMiso.classList.add("food-container");
  foodContainerRamenLeft.classList.add("food-container_left");
  foodContainerMisoLeft.classList.add("food-container_left");
  foodContainerRamenRight.classList.add("food-container_right");
  foodContainerMisoRight.classList.add("food-container_right");
  misoImage.classList.add("food-image");
  ramenImage.classList.add("food-image");
  foodTitleMiso.classList.add("food-title");
  foodTitleRamen.classList.add("food-title");
  foodDescriptionMiso.classList.add("food-description");
  foodDescriptionMiso2.classList.add("food-description");
  foodDescriptionRamen.classList.add("food-description");
  foodDescriptionRamen2.classList.add("food-description");

  content.innerHTML = "";

  ramenImage.src = _assets_img_ramen_jpg__WEBPACK_IMPORTED_MODULE_1__;
  foodContainerRamenLeft.appendChild(ramenImage);
  foodTitleRamen.textContent = "Ramen";
  foodDescriptionRamen.textContent =
    "Ramen (ラーメン) is a noodle soup dish that was originally imported from China and has become one of the most popular dishes in Japan in recent decades. Ramen are inexpensive and widely available, two factors that also make them an ideal option for budget travelers. Ramen restaurants, or ramen-ya, can be found in virtually every corner of the country and produce countless regional variations of this common noodle dish.";
  foodDescriptionRamen2.textContent =
    "It consists of Chinese-style wheat noodles (or 中華麺, chūkamen) served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork (chāshū), nori (dried seaweed), menma (bamboo shoots), and scallions. Ramen has its roots in Chinese noodle dishes. Nearly every region in Japan has its own variation of ramen, such as the tonkotsu (pork bone broth) ramen of Kyushu and the miso ramen of Hokkaido. ";
  foodContainerRamenRight.appendChild(foodTitleRamen);
  foodContainerRamenRight.appendChild(foodDescriptionRamen);
  foodContainerRamenRight.appendChild(foodDescriptionRamen2);
  foodContainer.appendChild(foodContainerRamenLeft);
  foodContainer.appendChild(foodContainerRamenRight);

  misoImage.src = _assets_img_miso_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__;
  foodContainerMisoRight.appendChild(misoImage);
  foodTitleMiso.textContent = "Miso Ramen";
  foodDescriptionMiso.textContent =
    "Miso ramen soup is flavored with soybean paste (miso), resulting in a thick, brown soup with a rich, complex flavor. The style originated in Hokkaido where the long cold winters spurred the need for a heartier type of ramen soup, but it has spread to the point where it can be found pretty much anywhere in Japan.";
  foodDescriptionMiso2.textContent =
    "Miso ramen is a beautiful dish. The miso marries the flavors of salt and creaminess and the weight is comforting and an absolute classic for cold weather. In fact, miso ramen comes from the Northern Hokkaido region of Japan - where bitter winters blow in and call for a warming bowl of something heavy, robust, and ready to set you up to face the day. Miso ramen is the youngest of the four main ramen types but it’s hugely popular. Full of umami flavors, high in protein, and awesome for an immune boost, there are so many reasons to love miso ramen.";
  foodContainerMisoLeft.appendChild(foodTitleMiso);
  foodContainerMisoLeft.appendChild(foodDescriptionMiso);
  foodContainerMisoLeft.appendChild(foodDescriptionMiso2);
  foodContainerMiso.appendChild(foodContainerMisoLeft);
  foodContainerMiso.appendChild(foodContainerMisoRight);

  content.appendChild(foodContainer);
  content.appendChild(foodContainerMiso);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);


/***/ }),

/***/ "./src/assets/img/github.png":
/*!***********************************!*\
  !*** ./src/assets/img/github.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/github.png";

/***/ }),

/***/ "./src/assets/img/miso-ramen.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/miso-ramen.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/miso-ramen.jpg";

/***/ }),

/***/ "./src/assets/img/ramen.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/ramen.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/ramen.jpg";

/***/ }),

/***/ "./src/assets/img/restaurant.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/restaurant.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/restaurant.jpg";

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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/history.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _assets_img_github_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/github.png */ "./src/assets/img/github.png");






const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const history = document.querySelector("#history");
const footerIcon = document.querySelector("#github-icon");
footerIcon.src = _assets_img_github_png__WEBPACK_IMPORTED_MODULE_4__;

(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
home.classList.add("selected-tab");

home.onclick = () => {
  home.classList.add("selected-tab");
  menu.classList.remove("selected-tab");
  history.classList.remove("selected-tab");
  (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
menu.onclick = () => {
  home.classList.remove("selected-tab");
  menu.classList.add("selected-tab");
  history.classList.remove("selected-tab");
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
};
history.onclick = () => {
  home.classList.remove("selected-tab");
  menu.classList.remove("selected-tab");
  history.classList.add("selected-tab");
  (0,_history__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=bundle4d52504656d2c583e03f.js.map