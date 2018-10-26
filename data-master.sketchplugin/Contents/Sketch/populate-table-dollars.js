var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/populate-table-dollars.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/populate-table-dollars.js":
/*!***************************************!*\
  !*** ./src/populate-table-dollars.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


 // documentation: https://developer.sketchapp.com/reference/api/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var doc = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var selectedLayers = doc.selectedLayers;
  var selectedCount = selectedLayers.length;
  console.log('------------');
  console.log('layers', selectedLayers.layers);
  var layersToReplace = [];
  var layerNames = [];
  var minNumber = 0;
  var maxNumber = 0;
  var runningTotal = 0;

  if (selectedCount === 0) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('No layers are selected.');
  } else {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("".concat(selectedCount, " layers selected."));
    selectedLayers.layers.forEach(function (layer) {
      if (layer.type === 'SymbolInstance') {
        var overrides = layer.overrides;

        if (overrides && overrides.length) {
          overrides.forEach(function (override) {
            var affectedLayer = override.affectedLayer;

            if (affectedLayer.type === 'Text' && !affectedLayer.hidden && !affectedLayer.locked) {
              layersToReplace.push(override);
              layerNames.push(affectedLayer.name);
            }
          });
        }
      }
    });

    if (layersToReplace.length) {
      console.log('override layers', layersToReplace);
      console.log('text layer names', layerNames);
      minNumber = Number(sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.getStringFromUser("What's the min amount?", '0'));
      maxNumber = Number(sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.getStringFromUser("What's the max amount?", '0'));

      if (!minNumber || !maxNumber) {
        sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.alert('Danger Will Robinson', 'You must enter valid numbers!');
        return;
      }

      var layerOptions = _toConsumableArray(new Set(layerNames));

      var layerNamePrompt = sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.getSelectionFromUser("Select layer name to override", layerOptions);
      var layerNameOk = layerNamePrompt[2];
      var layerNameSelection = layerOptions[layerNamePrompt[1]];

      if (layerNameOk) {
        layersToReplace = layersToReplace.filter(function (layer) {
          return layer.affectedLayer.name === layerNameSelection;
        });
        layersToReplace.forEach(function (layer, i) {
          var randomNumber = getRandomInt(minNumber, maxNumber);
          layer.value = '$' + numberWithCommas(randomNumber);
          runningTotal = runningTotal + randomNumber;
        });
        sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.alert('Total Dollars', "$".concat(numberWithCommas(runningTotal)));
      }
    } else {
      sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.alert('Selection Error', 'This only works with symbols.');
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=populate-table-dollars.js.map