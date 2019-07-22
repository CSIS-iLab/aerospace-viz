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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: createColorScale, lineWeights, lineDashArrays, externalLink, remove, convertType, capitalize, load, makeDropdownOptions */
/*! exports used: capitalize, convertType, createColorScale, externalLink, lineDashArrays, lineWeights, load, makeDropdownOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lineWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lineDashArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return externalLink; });
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return makeDropdownOptions; });
/* harmony import */ var _styleKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleKey.js */ 1);

function createColorScale(count, index) {
  var scaleOne = chroma.cubehelix().hue(0.5).lightness([0.4, 0.6]).scale().colors(count * 2);
  var scaleTwo = chroma.cubehelix().hue(1).gamma(0.5).scale().colors(count * 2).reverse();
  var scale = [];

  for (var i = 0; i < count; i++) {
    var color = i % 2 === 0 ? scaleOne[i * 2] : scaleTwo[i * 2];
    color = chroma(color).saturate().hex();
    scale.push(color);
  }

  return scale;
}
var lineWeights = [[3, 3], [5, 2], [4, 3.5], [7, 3], [4, 4]];
var lineDashArrays = [[null, '6,9'], [null, null], [null, '6,12'], [null, null], ['18,24', '18,24']];
var externalLink = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path d="M7.49,0V1.67H1.68V13.32H13.32V7.52H15v5.72a1.76,1.76,0,0,1-.42,1.19,1.64,1.64,0,0,1-1.13.56H1.74a1.67,1.67,0,0,1-1.16-.41A1.61,1.61,0,0,1,0,13.48v-.27C0,9.4,0,5.6,0,1.8A1.83,1.83,0,0,1,.58.4a1.53,1.53,0,0,1,1-.39h6Z" transform="translate(0 0)"/><path d="M9.17,1.67V0H15V5.84H13.34v-3h0c-.05.05-.11.1-.16.16l-.45.46-1.3,1.29-.84.84-.89.9-.88.87-.89.9c-.28.29-.57.57-.86.86L6.16,10l-.88.87a1.83,1.83,0,0,1-.13.16L4,9.86l0,0L5.36,8.47l.95-1,.75-.75,1-1L8.87,5l1-.94.85-.86.92-.91.56-.58Z" transform="translate(0 0)"/></svg>';
var remove = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M2.592.044l18.364 18.364-2.548 2.548L.044 2.592z"/><path d="M0 18.364L18.364 0l2.548 2.548L2.548 20.912z"/></g></svg>';
function convertType(value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === 'undefined' ? undefined : value.toLowerCase() === 'null' ? null : value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : value;
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function load(url, element) {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
}
function makeDropdownOptions(options, x) {
  var groups = options.widgets[x].keys.groupBy('group');
  var choices = Object.keys(groups).map(function (g, z) {
    return {
      id: z,
      label: g.trim() && parseInt(g, 10) === NaN ? g : '',
      disabled: false,
      choices: groups[g]
    };
  });
  return {
    choices: choices,
    removeItemButton: true,
    maxItemCount: options.widgets[x].maximum,
    callbackOnCreateTemplates: function callbackOnCreateTemplates(template) {
      var _this = this;

      return {
        item: function item(classNames, data) {
          var key = options.widgets[x].keys.find(function (v) {
            return v.value.toLowerCase() === data.value.toLowerCase();
          });
          var keyStyle;

          switch (options.widgets[x].type) {
            case 'form':
              var forms = options.widgets[x].keys.map(function (k) {
                return k.value.toLowerCase();
              });
              var i = forms.indexOf(key.value.toLowerCase());
              var styleOptions = {
                key: key,
                index: i,
                forms: forms,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;
          }

          var markup = '<div style="border-color:' + key.color + '" class="' + classNames.item + '" data-item data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.active ? 'aria-selected="true"' : '') + ' ' + (data.disabled ? 'aria-disabled="true"' : '') + '><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span> ' + capitalize(data.label) + '<button style="border-left: 1px solid ' + key.color + '; background-image: url(\'data:image/svg+xml;base64,' + window.btoa(remove) + '\')" type="button" class="choices__button" data-button="" aria-label="Remove item">Remove item</button></div>';
          return template(markup);
        },
        choice: function choice(classNames, data) {
          var key = options.widgets[x].keys.find(function (v) {
            return v.value.toLowerCase() === data.value.toLowerCase();
          });
          var keyStyle;

          switch (options.widgets[x].type) {
            case 'form':
              var forms = options.widgets[x].keys.map(function (k) {
                return k.value.toLowerCase();
              });
              var styleOptions = {
                key: key,
                index: i,
                forms: forms,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;
          }

          var markup = ' <div class="' + classNames.item + ' ' + classNames.itemChoice + ' ' + (data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '" data-select-text="' + _this.config.itemSelectText + '" data-choice ' + (data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + ' data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '> <span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span> ' + capitalize(data.label) + ' </div> ';
          return template(markup);
        }
      };
    }
  };
}

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/js/styleKey.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styleKey; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ 0);

function styleKey(options) {
  var map = options.map,
      feature = options.feature,
      group = options.group,
      key = options.key,
      index = options.index,
      forms = options.forms,
      iconSize = map.iconsize,
      dividers = iconSize.map(function (size) {
    return size / 12;
  });
  var colors, keyColor;
  var key = group ? group[0] : key;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var w = _step.value;
      var formKeyWidget = w.type === 'form' ? w : null;
      var colorKeyWidget = w.type === 'color' ? w : null;

      if (feature) {
        var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
        }) : null;
        var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
        }) : null;
        keyColor = colorKey ? colorKey.color : formKey ? formKey.color : null;
        iconSize = iconSize.map(function (size) {
          return size / 1;
        });
      } else {
        iconSize = iconSize.map(function (size, i) {
          return size / dividers[i];
        });
      }

      key.color = group && group.every(function (g) {
        return g.color;
      }) ? chroma.average(group.map(function (g) {
        return g.color;
      })) : key.color;

      switch (key.form) {
        case 'line':
          keyColor = key.color ? key.color : options.map.oceancolor ? options.map.oceancolor : null;

          if (forms && forms.length) {
            var svg;

            switch (index) {
              case 0:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              case 1:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), '#ffffff'];
                break;

              case 2:
                colors = ['#000000', keyColor ? keyColor : defaultColor];
                break;

              case 3:
                colors = ['#ffffff', keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              default:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;
            }

            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[0] + '\' stroke-width=\'' + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][0] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][0]) + '\'/><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[1] + '\' stroke-width=\'' + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][1] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][1]) + '\'/></svg>';
          } else {
            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + keyColor + '\' stroke-width=\'' + 3 + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + '3,7' + '\'/></svg>';
          }

          return {
            svg: 'data:image/svg+xml;base64,' + window.btoa(svg),
            class: 'line'
          };

        case 'icon':
          if (key.icon) {
            var slug = key.value.replace(/ /g, '-');
            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* load */ "g"])(key.icon, document.querySelector('.hidden'));
            var svgContent = document.querySelector('.hidden').innerHTML;

            if (colorKeyWidget && keyColor) {
              svgContent = svgContent.replace(/((\bfill="#)(([0-a-fA-F]{2}){3}|([0-9a-fA-F]){3})")/gi, '');
              svgContent = svgContent.replace(/(<circle |<rectangle |<ellipse |<polygon |<path )/g, function (match, p1, p2, p3) {
                return match.replace(match, match + 'fill="' + keyColor + '" ');
              });
            }

            svg = 'data:image/svg+xml;base64,' + window.btoa(svgContent);
          } else {
            svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.icon ? 'icon' : 'color'
          };

        case 'pattern':
          keyColor = key.color;
          var svg;

          switch (true) {
            case key.pattern[0].indexOf('stripe') > -1:
              var colorTwo = key.pattern[1];
              var colorOne = key.pattern[key.pattern.length - 1];
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polygon points="5.73 0 4.67 0 0 4.66 0 5.71 5.73 0" fill="' + colorOne + '"/><polygon points="2.28 0 1.22 0 0 1.22 0 2.27 2.28 0" fill="' + colorTwo + '"/><polygon points="8.85 0 7.79 0 0 7.77 0 8.82 8.85 0" fill="' + colorTwo + '"/><polygon points="12 0 11.24 0 0 11.2 0 12 0.26 12 12 0.3 12 0" fill="' + colorOne + '"/><polygon points="12 10.12 12 9.06 9.05 12 10.11 12 12 10.12" fill="' + colorTwo + '"/><polygon points="12 3.52 12 2.46 2.43 12 3.49 12 12 3.52" fill="' + colorTwo + '"/><polygon points="12 6.96 12 5.9 5.88 12 6.94 12 12 6.96" fill="' + colorOne + '"/></svg>');
              break;

            case key.pattern[0].indexOf('dot') > -1:
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="13.06" height="15.1" viewBox="0 0 12 12"><title>stripes</title><path d="M5.49,1A1.16,1.16,0,1,1,4.33-.16,1.16,1.16,0,0,1,5.49,1ZM4.33,3.77A1.16,1.16,0,1,0,5.49,4.93,1.15,1.15,0,0,0,4.33,3.77Zm0,3.93A1.16,1.16,0,1,0,5.49,8.86,1.15,1.15,0,0,0,4.33,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.15,1.15,0,0,0,4.33,11.63ZM11.5-.16A1.16,1.16,0,1,0,12.66,1,1.16,1.16,0,0,0,11.5-.16Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,3.77Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,11.63ZM7.92-1.16A1.16,1.16,0,0,0,6.76,0,1.16,1.16,0,0,0,7.92,1.16,1.16,1.16,0,0,0,9.07,0,1.16,1.16,0,0,0,7.92-1.16Zm0,3.93A1.16,1.16,0,1,0,9.07,3.93,1.16,1.16,0,0,0,7.92,2.77Zm0,3.93A1.16,1.16,0,1,0,9.07,7.86,1.16,1.16,0,0,0,7.92,6.7Zm0,3.93a1.16,1.16,0,1,0,1.15,1.16A1.16,1.16,0,0,0,7.92,10.63ZM.75-1.16A1.16,1.16,0,0,0-.41,0,1.16,1.16,0,0,0,.75,1.16,1.16,1.16,0,0,0,1.91,0,1.16,1.16,0,0,0,.75-1.16Zm0,3.93A1.16,1.16,0,1,0,1.91,3.93,1.16,1.16,0,0,0,.75,2.77Zm0,3.93A1.16,1.16,0,0,0-.41,7.86,1.15,1.15,0,0,0,.75,9,1.15,1.15,0,0,0,1.91,7.86,1.16,1.16,0,0,0,.75,6.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,.75,10.63Z" transform="translate(0.7 2)" fill="' + colorOne + '"/></svg>');
              break;

            default:
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + keyColor + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.pattern ? 'pattern' : 'color'
          };

        case 'shape':
          if (feature) {
            var colorKeyWidget = map.widgets.find(function (w) {
              return w.type === 'color';
            });
            var colorKey = colorKeyWidget.keys.find(function (k) {
              return k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
            });
            keyColor = colorKey ? colorKey.color : keyColor ? keyColor : null;
          }

          var svg;

          switch (index) {
            case 0:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow"  y1="4.5" x2="9" y2="4.5" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.5 -4.5) rotate(135)"><stop offset="0" stop-color="#7f3c8d"/><stop offset="0.325" stop-color="#e73f74"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#11a579"/><stop offset="1" stop-color="#3969ac"/></linearGradient></defs><rect x="3.25" y="1.75" width="9" height="9" transform="translate(4.5 -4.5) rotate(45)" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '" /></svg>';
              break;

            case 1:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><rect width="10" height="10" ' + (keyColor ? 'stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '"/></svg>';
              break;

            case 2:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.325" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><polygon points="6 10.39 0 10.39 3 5.2 6 0 9 5.2 12 10.39 6 10.39" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '" /></svg>';
              break;

            default:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><circle cx="6" cy="6" r="5" ' + (keyColor ? 'stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '"/></svg>';
          }

          return {
            svg: 'data:image/svg+xml;base64,' + window.btoa(svg),
            class: 'shape'
          };

        default:
          keyColor = key.color;
          svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          return {
            svg: svg,
            class: 'color'
          };
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./src/js/makeLayers.js + 4 modules ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/handleFeatureEvents.js

function handleFeatureEvents(feature, layer, map) {
  var eventOptions = map.oneachfeature ? map.oneachfeature : {
    click: function click() {
      handleLayerClick(feature, layer, map.leaflet);
    }
  };
  Object.keys(eventOptions).forEach(function (listener) {
    layer.on(listener, eventOptions[listener]);
  });
  var popupContent = typeof map.formatpopupcontent === 'function' ? map.formatpopupcontent(feature, map) : formatPopupContent(feature, map);
  layer.bindPopup(popupContent);
}

function formatPopupContent(feature, map) {
  var content;
  content = Object.keys(feature.properties).map(function (p) {
    if (feature.properties[p]) {
      if (map.popupheaders.length && map.popupcontent.length) {
        return map.popupheaders.indexOf(p) > -1 && map.popupcontent.indexOf(p) > -1 ? '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>' : map.popupcontent.indexOf(p) > -1 ? '<div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else if (map.popupheaders.length) {
        return map.popupheaders.indexOf(p) > -1 ? '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else if (map.popupcontent.length) {
        return map.popupcontent.indexOf(p) > -1 ? '<div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else {
        return '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>';
      }
    }
  }).filter(function (p) {
    return p;
  }).join('');
  var link = feature.properties.hyperlink || feature.properties.link;
  var externalLinkContent = link && link.trim() ? '<div class="separator"></div><div class="hyperlink popupEntryStyle"><a class="translate" href=' + link.trim() + ' target="_blank">' + map.externalLinkText + '</a>' + helpers["d" /* externalLink */] + '</div>' : '';
  content += externalLinkContent;

  if (lang) {
    var translatableStrings = Object.keys(map.translations).sort(function (a, b) {
      return b.length - a.length;
    });
    translatableStrings.forEach(function (t) {
      var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
      content = content.replace(re, map.translations[t]);
    });
  }

  return content;
}

function handleLayerClick(feature, layer, leaflet) {
  var isSpiderfied = false;

  if (!layer._preSpiderfyLatlng) {
    Object.keys(leaflet._layers).forEach(function (l, i) {
      if (leaflet._layers[l].unspiderfy) leaflet._layers[l].unspiderfy();
    });

    if (layer.__parent) {
      Object.values(layer.__parent._group._featureGroup._layers).forEach(function (v) {
        if (v._group && v._group._spiderfied) isSpiderfied = true;
      });
      Array.from(document.querySelectorAll('div.leaflet-marker-icon')).forEach(function (d) {
        return d.style.opacity = isSpiderfied ? 0.33 : 1;
      });
      Array.from(document.querySelectorAll('img.leaflet-marker-icon')).forEach(function (d) {
        return d.style.opacity = isSpiderfied ? 0.33 : 1;
      });
    }
  }
}

window.handleLayerClick = handleLayerClick;
// EXTERNAL MODULE: ./src/js/styleKey.js
var styleKey = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/stylePoint.js

function stylePoint(feature, latlng, map) {
  var pointStyle, key, styleOptions;
  var CustomIcon = L.Icon.extend({
    options: {
      iconSize: map.iconsize || [20, 20],
      iconAnchor: map.iconsize ? map.iconsize / 4 : map.iconanchor ? map.iconanchor : [5, 5]
    }
  });
  var nonPointStyle, key, divIcon;
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'form';
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var w = _step.value;
      var thisFormKeyWidget = w.type === 'form' ? w : formKeyWidget;
      var thisColorKeyWidget = w.type === 'color' ? w : null;
      var colorKey = thisColorKeyWidget ? thisColorKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[thisColorKeyWidget.field].toLowerCase();
      }) : null;
      var formKey = thisFormKeyWidget ? thisFormKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[thisFormKeyWidget.field].toLowerCase();
      }) : null;
      var color = colorKey ? colorKey.color : formKey ? formKey.color : null;

      if (thisFormKeyWidget && feature.properties[thisFormKeyWidget.field]) {
        var forms = thisFormKeyWidget.keys.map(function (k) {
          return k.value.toLowerCase();
        });
        var i = forms.indexOf(feature.properties[thisFormKeyWidget.field].toLowerCase());
        key = thisFormKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[thisFormKeyWidget.field].toLowerCase();
        });
        if (!key) break;
        var styleOptions = {
          key: formKey,
          index: i,
          forms: forms,
          color: color,
          map: map,
          feature: feature
        };

        if (key.form === 'div') {
          var value = feature.properties[thisFormKeyWidget.field];
          var count = value ? value.split('~').length : 0;
          divIcon = L.divIcon({
            className: 'icon-div',
            html: '<span class="text" style="background-color:' + color + '">' + count + '</span>'
          });
        }

        pointStyle = divIcon ? divIcon : Object(styleKey["a" /* default */])(styleOptions);
      } else if (thisColorKeyWidget && feature.properties[thisColorKeyWidget.field]) {
        key = thisColorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[thisColorKeyWidget.field].toLowerCase();
        });
        if (!key) break;
        var styleOptions = {
          key: colorKey,
          color: colorKey.color,
          map: map,
          feature: feature
        };
        pointStyle = Object(styleKey["a" /* default */])(styleOptions);
      } else {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + color + '"/></svg>';
        pointStyle = {
          class: 'default',
          svg: encodeURI('data:image/svg+xml;base64,' + window.btoa(svg))
        };
      }

      var iconUrl = pointStyle.svg;
      var icon = new CustomIcon({
        iconUrl: iconUrl
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return L.marker(latlng, {
    icon: divIcon ? divIcon : icon
  });
}
// CONCATENATED MODULE: ./src/js/styleNonPoint.js


function styleNonPoint(feature, map, index) {
  var nonPointStyle,
      colors = [],
      forms = [],
      sort = ['form', 'color'];
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'form';
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var w = _step.value;
      var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
      }) : null;
      var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
      }) : null;
      var color = colorKey ? colorKey.color : formKey ? formKey.color : null;
      var formKeyForm = formKeyWidget ? formKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;
      var colorKeyForm = colorKeyWidget ? colorKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;
      var form = formKeyWidget ? formKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;

      if (formKeyWidget && form === 'line') {
        forms = formKeyWidget.keys.map(function (f) {
          return f.value;
        });
        forms.forEach(function (f, i) {
          switch (i) {
            case 0:
              colors.push(['transparent', null]);
              break;

            case 1:
              colors.push([null, defaultColor]);
              break;

            case 2:
              colors.push(['#000000', null]);
              break;

            case 3:
              colors.push(['#ffffff', null]);
              break;

            default:
              colors.push([null, null]);
              break;
          }
        });
      }

      if (forms.length && formKeyForm === 'line' || forms.length && colorKeyForm === 'line') {
        if (formKeyWidget) {
          var i = forms.indexOf(feature.properties[formKeyWidget.field]);

          if (i > -1) {
            nonPointStyle = {
              color: colors[i][index] === undefined ? '#cad2d3' : colors[i][index] !== null ? colors[i][index] : color,
              weight: helpers["f" /* lineWeights */][i][index],
              lineCap: 'square',
              dashArray: helpers["e" /* lineDashArrays */][i] ? helpers["e" /* lineDashArrays */][i][index] : null
            };
          }
        }
      } else if (formKeyForm === 'line' || colorKeyForm === 'line') {
        nonPointStyle = {
          color: color,
          weight: 2,
          lineCap: 'square',
          dashArray: '3,7'
        };
      } else if (colorKey && colorKey.form === 'pattern') {
        var pattern;

        switch (true) {
          case colorKey.pattern[0].indexOf('stripe') > -1:
            var patternOptions = {
              weight: 3,
              spaceWeight: 3,
              color: colorKey.pattern[1],
              spaceColor: colorKey.pattern[colorKey.pattern.length - 1],
              spaceOpacity: 1,
              angle: 45
            };
            pattern = new L.StripePattern(patternOptions);
            break;

          case colorKey.pattern[0].indexOf('dot') > -1:
            var shapeOptions = {
              x: 4,
              y: 4,
              radius: 2,
              fill: true,
              stroke: false,
              fillColor: colorKey.pattern[colorKey.pattern.length - 1],
              fillOpacity: 1
            };
            var shape = new L.PatternCircle(shapeOptions);
            var patternOptions = {
              width: 8,
              height: 8
            };
            pattern = new L.Pattern(patternOptions);
            pattern.addShape(shape);
            break;
        }

        pattern.addTo(map.leaflet);
        nonPointStyle = {
          fillPattern: pattern ? pattern : null,
          fillColor: color,
          color: defaultColor,
          fillOpacity: 0.7,
          opacity: 0.5,
          weight: 2,
          lineCap: 'square'
        };
      } else {
        var lineColor;
        var lineWeight;
        var lineOpacity;

        switch (true) {
          case feature.geometry.type.toLowerCase().indexOf('line') > -1:
            lineColor = color ? chroma(color).brighten().hex() : null;
            lineOpacity = 1;
            lineWeight = 4;
            break;

          case feature.geometry.type.toLowerCase().indexOf('polygon') > -1:
            lineColor = defaultColor;
            lineOpacity = 0.5;
            lineWeight = 2;
            break;
        }

        nonPointStyle = {
          fillPattern: pattern,
          fillColor: color,
          color: lineColor,
          fillOpacity: 0.7,
          opacity: lineOpacity,
          weight: lineWeight
        };
      }

      if (nonPointStyle) return nonPointStyle;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
// CONCATENATED MODULE: ./src/js/makeGeoJsonOptions.js



window.handleFeatureEvents = handleFeatureEvents;
window.stylePoint = stylePoint;
window.styleNonPoint = styleNonPoint;
function makeGeoJsonOptions(map, colorKeyWidgets, formKeyWidgets) {
  function filter(feature) {
    return map.filters.map(function (f) {
      return f(feature);
    }).every(function (f) {
      return f !== false;
    });
  }

  function onEachFeature(feature, layer) {
    handleFeatureEvents(feature, layer, map);
  }

  var backgroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: map.pointStyle || function (feature, latlng) {
      return stylePoint(feature, latlng, map);
    },
    style: map.nonPointStyle || function (feature) {
      return styleNonPoint(feature, map, 0);
    }
  };
  var foregroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: map.pointStyle || function (feature, latlng) {
      return stylePoint(feature, latlng, map);
    },
    style: map.nonPointStyle || function (feature) {
      return styleNonPoint(feature, map, 1);
    }
  };
  return [backgroundOptions, foregroundOptions];
}
// CONCATENATED MODULE: ./src/js/makeLayers.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeLayers; });

function makeLayers(map) {
  var colorKeyWidgets = [],
      formKeyWidgets = [];

  if (map.widgets) {
    colorKeyWidgets = map.widgets.filter(function (w) {
      return w.type === 'color';
    });
    formKeyWidgets = map.widgets.filter(function (w) {
      return w.type === 'form';
    });
  }

  var geoJsonOptions = map.geojsonoptions ? map.geojsonoptions(map) : makeGeoJsonOptions(map);
  map.json.forEach(function (json, i) {
    var clusterColor, colorKeyWidget;

    if (colorKeyWidgets.length) {
      var colorKeys = colorKeyWidgets.map(function (widget) {
        var collectionName = json.features[0].properties[widget.field];
        var key = widget.keys.find(function (key) {
          return key.value.toLowerCase() === collectionName.toLowerCase();
        });

        if (key) {
          colorKeyWidget = widget;
        }

        return key;
      }).filter(function (colorKey) {
        return colorKey;
      });
      clusterColor = colorKeys[0] ? colorKeys[0].color : '#000000';
    } else {
      clusterColor = '#000000';
    }

    var allPoints = json.features.every(function (feature) {
      return feature.geometry && feature.geometry.type.toLowerCase() === 'point';
    });
    map.groups.push(new L.MarkerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      maxClusterRadius: allPoints && map.clusterdistance ? map.clusterdistance : NaN,
      iconCreateFunction: function iconCreateFunction(cluster) {
        return L.divIcon({
          className: 'icon-group',
          html: '<span class="text" style="border: 2px solid' + clusterColor + '; color:' + clusterColor + '">' + cluster.getChildCount() + '</span>'
        });
      }
    }));
    var hasLineFeatures = json.features.some(function (feature) {
      return feature.geometry && feature.geometry.type.toLowerCase().indexOf('line') > -1;
    });
    geoJsonOptions.forEach(function (option, index) {
      if (colorKeyWidget) {
        json.features = json.features.sort(function (a, b) {
          return b.properties[colorKeyWidget.field].localeCompare(a.properties[colorKeyWidget.field]);
        });
      }

      var geoJson = L.geoJson(json, option);

      if (!hasLineFeatures && index % 2 === 0 || hasLineFeatures || map.geojsonoptions) {
        map.groups[i].addLayer(geoJson);
      }
    });

    if (map.groups[i].getLayers().length) {
      map.leaflet.addLayer(map.groups[i]);
      map.groups[i].on('clusterclick', function (e) {
        handleClusterClick(e, map, i);
      });
    }
  });
}

function handleClusterClick(e, map, i) {
  map.leaflet._layers[e.layer._leaflet_id].spiderfy();

  Object.keys(map.leaflet._layers).forEach(function (layer, i) {
    if (parseInt(layer, 10) !== e.layer._leaflet_id) {
      if (map.leaflet._layers[layer].unspiderfy) map.leaflet._layers[layer].unspiderfy();
    }
  });
  var isSpiderfied = false;
  Object.values(map.groups[i]._featureGroup._layers).forEach(function (v) {
    if (v._group && v._group._spiderfied) isSpiderfied = true;
  });
  Array.from(document.querySelectorAll('div.leaflet-marker-icon')).forEach(function (d) {
    return d.style.opacity = isSpiderfied ? 0.33 : 1;
  });
  Array.from(document.querySelectorAll('img.leaflet-marker-icon')).forEach(function (d) {
    return d.style.opacity = isSpiderfied ? 0.33 : 1;
  });
  Object.values(map.groups[i]._featureGroup._layers).filter(function (v) {
    e.layer.getAllChildMarkers().map(function (m) {
      return m.getElement();
    }).filter(function (m) {
      return m;
    }).forEach(function (m) {
      return m.style.opacity = 1;
    });
  });
}

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./src/js/parsers.js ***!
  \***************************/
/*! exports provided: parseLanguageData, parseLegendData, parseMetaData, parseWidgetData */
/*! exports used: parseLanguageData, parseLegendData, parseMetaData, parseWidgetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseLanguageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseLegendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseMetaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseWidgetData; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ 0);

function parseLanguageData(data) {
  var languageData = {};
  data.forEach(function (row) {
    var key;
    Object.keys(row).forEach(function (column, i) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'en') {
          key = row[column]['$t'];
          languageData[key] = {};
        }

        if (columnName === lang) {
          languageData[key] = row[column]['$t'];
        }
      }
    });
  });
  return languageData;
}
function parseLegendData(options, json, style) {
  var colorScale = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* createColorScale */ "c"])(json.length);
  var legendItems = [];
  json.forEach(function (row, x) {
    var data = {};
    Object.keys(row).forEach(function (column, y) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'label') {
          var key = row[column]['$t'].toLowerCase();
          data.key = key;
          data.label = row[Object.keys(row)[y + 0]]['$t'];
          data.value = row[Object.keys(row)[y + 1]]['$t'];
          data.group = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 2]]['$t']);
          data.selected = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 3]]['$t']);
          var colorVal = row[Object.keys(row)[y + 4]]['$t'];
          data.form = row[Object.keys(row)[y + 5]]['$t'];
          data.color = colorVal ? colorVal : data.form === 'line' ? defaultColor : colorScale[x];
          data.icon = row[Object.keys(row)[y + 6]]['$t'];
          data.pattern = row[Object.keys(row)[y + 7]]['$t'].split(',');

          if (options.translations) {
            data.label = options.translations[data.label];
            data.group = options.translations[data.group];
          }

          legendItems.push(data);
        }
      }
    });
  });
  return legendItems;
}
function parseMetaData(json) {
  var data = {};
  json.forEach(function (row, x) {
    Object.keys(row).forEach(function (column, y) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'property') {
          var key = row[column]['$t'].toLowerCase().replace(/ /g, '');
          data[key] = data[key] || {};
          data[key] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 1]]['$t']);
        }
      }
    });
  });
  return data;
}
function parseWidgetData(metaData) {
  var widgets = [];

  function process(k, index, property) {
    if (k.toLowerCase().indexOf(property) > -1) widgets[index - 1][property] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(metaData[k]);
  }

  var properties = ['input', 'field', 'grouping', 'instructions', 'maximum', 'type', 'reference', 'style'];
  Object.keys(metaData).filter(function (k) {
    return k.toLowerCase().indexOf('widget') > -1;
  }).forEach(function (k) {
    var index = k.match(/\d+/)[0];
    widgets[index - 1] = widgets[index - 1] || {};
    properties.forEach(function (property) {
      process(k, index, property);
    });
  });
  widgets.forEach(function (w, i) {
    w.field = w.field.replace(/ /g, '_');
    w.id = i;
  });
  return widgets;
}

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./src/js/CustomMap.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMap; });
var mapId = 0;
function CustomMap(container, properties) {
  this.id = mapId++;
  this.filters = [];
  this.groups = [];
  this.json = [];
  this.leaflet;

  var _this = this;

  Object.keys(properties).forEach(function (property) {
    _this[property.toLowerCase().replace(/ /g, '')] = properties[property];
  });
  _this.popupcontent = _this.popupcontent && typeof _this.popupcontent === 'string' ? _this.popupcontent.split(',') : _this.popupcontent && this.popupcontent === 'object' ? _this.popupcontent : [];
  _this.popupheaders = _this.popupheaders && typeof _this.popupheaders === 'string' ? _this.popupheaders.split(',') : _this.popupheaders && _this.popupheaders === 'object' ? _this.popupheaders : [];
  CustomMap.all = CustomMap.all || [];
  CustomMap.all.push(this);

  _this.resetFilters = function () {
    _this.filters = [];
  };

  _this.removeGroups = function () {
    _this.groups.forEach(function (group) {
      _this.leaflet.removeLayer(group);
    });

    _this.groups = [];
  };

  this.render = function () {
    _this.leaflet = L.map(container, {
      minZoom: _this.minzoom || null,
      maxZoom: _this.maxzoom || 20,
      maxBounds: _this.maxbounds || [_this.swbounds, _this.nebounds],
      scrollWheelZoom: window.innerWidth < 768 ? false : true,
      zoomControl: !_this.hasOwnProperty('zoomslider') || _this.zoomslider ? false : true,
      attributionControl: false
    });
    if (_this.loadevent) _this.leaflet.on('load', _this.loadevent);
    if (_this.addevent) _this.leaflet.on('layeradd', _this.addevent);
    this.leaflet.setView(_this.center, _this.zoom || 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/' + _this.mapboxstyle + '/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {}).addTo(_this.leaflet);

    if (!_this.hasOwnProperty('zoomslider') || _this.zoomslider) {
      L.control.zoomslider().addTo(_this.leaflet);
    }

    if (_this.fullscreen) {
      window.fullscreen = new L.Control.Fullscreen();

      _this.leaflet.addControl(window.fullscreen);
    }

    L.control.attribution({
      position: 'bottomleft'
    }).setPrefix(_this.attribution).addTo(_this.leaflet);

    _this.resetFilters();

    return _this;
  };
}

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** ./src/js/makeDocumentNodes.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeDocumentNodes; });
function makeDocumentNodes(options) {
  var newSectionHTML = '';
  newSectionHTML += '<section id="' + options.slug + '">';
  newSectionHTML += '<div id="' + options.slug + '__map" class="map"></div>';
  newSectionHTML += '<aside class="toolbox">';
  newSectionHTML += options.title ? '<input type="checkbox" checked class="ui mobile-only"><div class="hamburger mobile-only"><div class="icon"> <span></span> <span></span> <span></span></div><div class="menu translate"></div></div>' : '';
  newSectionHTML += '<div class="box">';
  newSectionHTML += options.title || options.logo || options.description ? '<header  class="translate"> <h1><a target="_blank" id="logo"></a></h1>  <p class="translate"></p></header>' : '';
  newSectionHTML += (options.instructions ? '<p class="translate">' + options.instructions + '</p>' : '') + '<div id="controls"><div class="loader"></div></div><footer><div class="hidden"></div></footer></div></aside>';
  newSectionHTML += options.titlecardcontent ? '<button id="' + options.slug + '__about" class="about-trigger">ABOUT THIS MAP</button>' : '';
  newSectionHTML += '</section>';
  document.body.innerHTML += newSectionHTML;

  if (options.titlecardcontent) {
    var newDialogHTML = '';
    newDialogHTML += '<div class="dialog" id="' + options.slug + '__dialog">';
    newDialogHTML += '<div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>';
    newDialogHTML += '<dialog class="dialog-content" aria-labelledby="dialogTitle" aria-describedby="dialogContent">';
    newDialogHTML += '<button data-a11y-dialog-hide class="dialog-close" aria-label="Close this dialog window">&times;</button>';
    newDialogHTML += options.titlecardtitle ? '<h1 id="dialogTitle">' + options.titlecardtitle + '</h1>' : '';
    newDialogHTML += '<div id="dialogContent">' + options.titlecardcontent + '</div>';
    newDialogHTML += '</dialog>';
    newDialogHTML += '</div>';
    document.body.innerHTML += newDialogHTML;
    document.body.style.overflow = 'hidden';
    var dialogEl = document.getElementById(options.slug + '__dialog');
    var mainEl = document.getElementById('options.slug');
    var dialogTrigger = document.getElementById(options.slug + '__about');
    var dialogBox = new A11yDialog(dialogEl, mainEl);
    var dialog = dialogBox.dialog;
    dialogBox.show();
    dialogBox.on('hide', function (dialogEl) {
      dialogTrigger.style.display = 'block';
    });
    dialogBox.on('show', function (dialogEl) {
      dialogTrigger.style.display = 'none';
    });
    dialogTrigger.addEventListener('click', function () {
      dialogBox.show();
    });
  }

  document.title = options.title + ' | CSIS ' + options.program;
  var metaLocaleOG = document.createElement('meta');
  metaLocaleOG.setAttribute('property', 'og:locale');
  metaLocaleOG.setAttribute('content', 'en_US');
  document.head.appendChild(metaLocaleOG);
  var metaTypeOG = document.createElement('meta');
  metaTypeOG.setAttribute('property', 'og:type');
  metaTypeOG.setAttribute('content', 'article');
  document.head.appendChild(metaTypeOG);
  var metaWidthOG = document.createElement('meta');
  metaWidthOG.setAttribute('property', 'og:image:width');
  metaWidthOG.setAttribute('content', '2000');
  document.head.appendChild(metaWidthOG);
  var metaHeightOG = document.createElement('meta');
  metaHeightOG.setAttribute('property', 'og:image:height');
  metaHeightOG.setAttribute('content', '1333');
  document.head.appendChild(metaHeightOG);
  var metaTwitterCardOG = document.createElement('meta');
  metaTwitterCardOG.setAttribute('property', 'twitter:card');
  metaTwitterCardOG.setAttribute('content', 'summary');
  document.head.appendChild(metaTwitterCardOG);
  var metaTitleOG = document.createElement('meta');
  metaTitleOG.setAttribute('property', 'og:title');
  metaTitleOG.setAttribute('content', options.title + ' | CSIS ' + options.program);
  document.head.appendChild(metaTitleOG);
  var metaTitleTwitter = document.createElement('meta');
  metaTitleTwitter.setAttribute('property', 'twitter:title');
  metaTitleTwitter.setAttribute('content', options.title + ' | CSIS ' + options.program);
  document.head.appendChild(metaTitleTwitter);
  var metaDescriptionOG = document.createElement('meta');
  metaDescriptionOG.setAttribute('property', 'og:description');
  metaDescriptionOG.setAttribute('content', options.description);
  document.head.appendChild(metaDescriptionOG);
  var metaDescriptionTwitter = document.createElement('meta');
  metaDescriptionTwitter.setAttribute('property', 'twitter:description');
  metaDescriptionTwitter.setAttribute('content', options.description);
  document.head.appendChild(metaDescriptionTwitter);
  var metaImageOG = document.createElement('meta');
  metaImageOG.setAttribute('property', 'og:image');
  metaImageOG.setAttribute('content', options.screenshot);
  document.head.appendChild(metaImageOG);
  var metaImageTwitter = document.createElement('meta');
  metaImageTwitter.setAttribute('property', 'twitter:image');
  metaImageTwitter.setAttribute('content', options.screenshot);
  document.head.appendChild(metaImageTwitter);

  if (document.querySelector('#' + options.slug + ' header')) {
    document.querySelector('#' + options.slug + ' .menu').innerText = options.title;
    document.querySelector('#' + options.slug + ' header h1').innerHTML += options.title;
    document.querySelector('#' + options.slug + ' header a').style.backgroundImage = options.logo ? 'url(' + options.logo + ')' : '';
    document.querySelector('#' + options.slug + ' header a').href = options.website ? options.website : '';
    document.querySelector('#' + options.slug + ' header p').innerText = options.description ? options.description : '';
  }
}

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./src/js/makeWidgets.js + 1 modules ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/CustomMap.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/makeLayers.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/js/styleKey.js
var styleKey = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/CustomMap.js
var CustomMap = __webpack_require__(4);

// EXTERNAL MODULE: ./src/js/makeLayers.js + 4 modules
var makeLayers = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/mapWidgetsToState.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function mapWidgetsToState(_x, _x2) {
  return _mapWidgetsToState.apply(this, arguments);
}

function _mapWidgetsToState() {
  _mapWidgetsToState = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(options, widgetContent) {
    var container, map;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container = document.querySelector('#' + options.slug + ' .map');
            map = new CustomMap["a" /* default */](container, options).render();
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var tables = Object.keys(options).filter(function (k) {
                return k.toLowerCase().indexOf('table') > -1;
              });
              Promise.all(tables.map(function (table) {
                return fetch('https://csis.carto.com/api/v2/sql?api_key=' + map.apikey + '&format=geojson&q=SELECT%20*%20FROM%20' + options[table]);
              })).then(function (responses) {
                return Promise.all(responses.map(function (response) {
                  return response.json();
                }));
              }).then(function (jsons) {
                var json = jsons.reduce(function (a, b) {
                  return {
                    type: 'FeatureCollection',
                    features: a.features.concat(b.features)
                  };
                });
                var colorKeyWidget = map.widgets.find(function (w) {
                  return w.type === 'color';
                });
                map.json = [json];

                if (colorKeyWidget) {
                  map.json = [];
                  var featureGroups = json.features.groupBy(colorKeyWidget.field, 'properties');
                  Object.keys(featureGroups).sort(function (a, b) {
                    return featureGroups[b][0].properties[colorKeyWidget.field].localeCompare(featureGroups[a][0].properties[colorKeyWidget.field]);
                  }).map(function (feature) {
                    map.json.push({
                      type: 'FeatureCollection',
                      features: featureGroups[feature]
                    });
                  });
                }

                if (!options.widgets.length) {
                  Object(makeLayers["a" /* default */])(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                  box.innerHTML = '';
                }

                var initialized = 0;
                options.widgets.forEach(function (w, x) {
                  var element = document.querySelector('#' + options.slug + ' .widget.' + options.widgets[x].field);

                  if (element.querySelector('select') && widgetContent[x].options) {
                    new Choices(element.querySelector('select'), widgetContent[x].options);
                  }

                  if (element.querySelector('input[id^=\'search\']')) {
                    element.querySelector('#resetButton').addEventListener('click', function () {
                      handleReset(element, map, x);
                    });
                  }

                  var selects = Array.from(element.querySelectorAll('select'));
                  var checks = Array.from(element.querySelectorAll('input[type=\'checkbox\']'));
                  var search = Array.from(element.querySelectorAll('input[type=\'text\']:not(.choices__input)'));
                  var toggle = Array.from(element.querySelectorAll('input[type=\'radio\']'));
                  var inputs = selects.concat(checks).concat(search).concat(toggle);

                  if (!inputs.length) {
                    if (!initialized) {
                      Object(makeLayers["a" /* default */])(map);
                    }

                    initialized++;
                  }

                  var count = inputs.length;
                  inputs.forEach(function (input) {
                    if (input.type === 'text') {
                      input.addEventListener('keyup', function () {
                        handleChange(map, element, options.widgets, x, count, ++initialized);
                      });
                    } else {
                      input.addEventListener('change', function () {
                        handleChange(map, element, options.widgets, x, count, ++initialized);
                      });
                    }

                    if ('createEvent' in document) {
                      var evt = document.createEvent('HTMLEvents');
                      evt.initEvent('change', false, true);
                      input.dispatchEvent(evt);
                    } else {
                      input.fireEvent('onchange');
                    }

                    w.map_id = map.id;
                  });
                });

                if (map.translations) {
                  var translatableNodes = Array.from(document.querySelectorAll('.translate'));
                  var translatableStrings = Object.keys(map.translations).sort(function (a, b) {
                    return b.length - a.length;
                  });
                  translatableNodes.forEach(function (el, i) {
                    translatableStrings.forEach(function (t) {
                      if (Object.keys(map.translations[t]).length) {
                        var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
                        el.innerHTML = el.innerHTML.replace(re, map.translations[t]);
                      }
                    });
                  });
                }

                resolve(map);
              });
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _mapWidgetsToState.apply(this, arguments);
}

function handleReset(element, map, x) {
  element.querySelector('input[type=\'text\']').value = '';
  if (map.groups.length) map.removeGroups();

  map.filters[x] = function () {
    return true;
  };

  Object(makeLayers["a" /* default */])(map);
}

function handleChange(map, element, widgets, x, count, initialized) {
  var options = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input'));
  var selections = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input:checked'));
  var possibleChecks = Array.from(element.querySelectorAll('input')).map(function (o) {
    return o.name.toLowerCase();
  });
  var possibleOptions, possibleQueries;

  if (widgets[x].input !== 'toggle') {
    possibleOptions = widgets[x].keys.map(function (key) {
      return key.value.toLowerCase();
    });
    possibleQueries = possibleChecks.concat(possibleOptions);
  }

  var query = Array.from(selections).map(function (o) {
    return element.querySelector('input[type=\'checkbox\']') ? o.name.toLowerCase() : o.value.toLowerCase();
  });
  map.filters[widgets[x].id] = widgets[x].input === 'toggle' ? function (feature) {
    var bool = true;

    if (feature.properties.toggle) {
      bool = Object(helpers["b" /* convertType */])(query[0]) ? true : false;
    } else {
      bool = true;
    }

    return bool;
  } : widgets[x].field === 'all' ? function (feature) {
    var bool = true;
    var withDiacritics = Object.values(feature.properties).join('').toLowerCase();
    var withoutDiacritics = Object.values(feature.properties).join('').toLowerCase().latinise();

    if (withDiacritics.indexOf(query[0]) < 0 && withoutDiacritics.indexOf(query[0]) < 0) {
      bool = false;
    }

    return bool;
  } : function (feature, layers) {
    var bool = true;
    var field = widgets[x].grouping ? widgets[x].grouping : widgets[x].field;

    if (possibleQueries.indexOf(feature.properties[field].toLowerCase()) > -1 && query.indexOf(feature.properties[field].toLowerCase()) < 0) {
      bool = false;
    }

    return bool;
  };
  if (initialized >= count) map.removeGroups();
  if (widgets.length >= x + 1 && initialized >= count) Object(makeLayers["a" /* default */])(map);
}
// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/makeWidgets.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeWidgets; });
function makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function makeWidgets_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.styleKey = styleKey["a" /* default */];
function makeWidgets(_x, _x2, _x3) {
  return _makeWidgets.apply(this, arguments);
}

function _makeWidgets() {
  _makeWidgets = makeWidgets_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(jsons, options, boxContent) {
    var widgetContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            widgetContent = [];
            options.widgets.forEach(function (w, x) {
              if (!w.hasOwnProperty('id')) w.id = x;
              var legendData = w.reference ? Object(parsers["b" /* parseLegendData */])(options, jsons[x].feed.entry, w.type) : w.keys;
              options.widgets[x].keys = legendData;
              widgetContent.push(formatWidgets(options, x));
              boxContent += '<section class="widget ' + options.widgets[x].field + '"><h3 class="translate">' + widgetContent[x].title + '</h3>';
              boxContent += widgetContent[x].nodes;
              boxContent += '</section>';
              var box = document.querySelector('#' + options.slug + ' #controls');
              box.innerHTML = boxContent;
              var labelText = document.querySelectorAll('#' + options.slug + ' .itemText');
              Array.from(labelText).forEach(function (itemText) {
                var height = itemText.offsetHeight;
                var fontSize = window.getComputedStyle(itemText)['font-size'];
                var offset = height / parseInt(fontSize.replace('px', ''), 10);
                itemText.style.transform = 'translateY(' + offset * 10 + '%)';
              });
            });
            _context.next = 4;
            return mapWidgetsToState(options, widgetContent);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeWidgets.apply(this, arguments);
}

function formatWidgets(options, x) {
  var widgetNodes = '';
  var dropdownOptions;

  switch (options.widgets[x].input) {
    case 'toggle':
      widgetNodes += '<label for="toggle_' + options.widgets[x].field + '" class="translate"><input type="radio" name="' + options.widgets[x].field + '" id="toggle_' + options.widgets[x].field + '"  value="1" checked>Show</label>';
      widgetNodes += '<label for="$toggle_' + options.widgets[x].field + '" class="translate"><input type="radio" name="' + options.widgets[x].field + '" id="toggle_' + options.widgets[x].field + '" value="0" >Hide</label>';
      break;

    case 'search':
      widgetNodes += '<input type="text" id="search_' + options.widgets[x].field + '" placeholder="' + options.widgets[x].instructions + '" size="10" />';
      widgetNodes += '<button type="button" id="resetButton" class="translate">Reset</button>';
      break;

    case 'dropdown':
      widgetNodes += '<select id="dropdown_' + options.widgets[x].field + '" placeholder="' + options.widgets[x].instructions + '" multiple=""></select>';
      dropdownOptions = Object(helpers["h" /* makeDropdownOptions */])(options, x);
      break;

    case 'checkbox':
      widgetNodes += '<ul>';
      var keyStyle;
      var legendItems = options.widgets[x].grouping ? options.widgets[x].keys.groupBy('group') : options.widgets[x].keys.groupBy('label');
      Object.keys(legendItems).forEach(function (group, i) {
        switch (options.widgets[x].type) {
          case 'form':
            var forms = options.widgets[x].keys.map(function (f) {
              return f.value;
            });
            var styleOptions = {
              group: legendItems[group],
              index: i,
              forms: forms,
              map: options
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;
        }

        widgetNodes += '<li><label for="' + group + '"><input class="widget ' + options.widgets[x].input + '" type="checkbox" name="' + (options.widgets[x].grouping ? group : legendItems[group][0].value) + '" id="' + group + '" ' + (legendItems[group][0].selected ? 'checked' : '') + ' ><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span><span class="itemText">' + Object(helpers["a" /* capitalize */])(group) + '</span></label></li>';
      });
      widgetNodes += '</ul>';
      break;

    default:
      widgetNodes += '<ul>';
      var keyStyle;
      var legendItems = options.widgets[x].grouping ? options.widgets[x].keys.groupBy('group') : options.widgets[x].keys.groupBy('label');
      Object.keys(legendItems).forEach(function (group, i) {
        switch (options.widgets[x].type) {
          case 'form':
            var forms = options.widgets[x].keys.map(function (f) {
              return f.value;
            });
            var styleOptions = {
              group: legendItems[group],
              index: i,
              forms: forms,
              map: options
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;
        }

        widgetNodes += '<li><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span><span class="itemText">' + Object(helpers["a" /* capitalize */])(group) + '</span></li>';
      });
      widgetNodes += '</ul>';
      break;
  }

  var widgetTitle = options.widgets[x].field === 'all' ? 'Search' : options.widgets[x].field.replace(/_/g, ' ');
  return {
    nodes: widgetNodes,
    title: widgetTitle,
    options: dropdownOptions
  };
}

/***/ }),
/* 7 */
/*!***************************************!*\
  !*** ./src/js/initWithSpreadsheet.js ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/makeMap.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithSpreadsheet; });
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers.js */ 3);
/* harmony import */ var _makeWidgets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeWidgets.js */ 6);
/* harmony import */ var _makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeDocumentNodes.js */ 5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function initWithSpreadsheet(_x, _x2, _x3) {
  return _initWithSpreadsheet.apply(this, arguments);
}

function _initWithSpreadsheet() {
  _initWithSpreadsheet = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(dataURL, options, translations) {
    var map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch(dataURL + options.googleSheet + '/' + 2 + '/public/values?alt=json').then(function (response) {
                return response.json();
              }).then(function (json) {
                var metaData = Object(_parsers_js__WEBPACK_IMPORTED_MODULE_0__[/* parseMetaData */ "c"])(json.feed.entry);
                var widgets = Object(_parsers_js__WEBPACK_IMPORTED_MODULE_0__[/* parseWidgetData */ "d"])(metaData);
                var properties = {};
                Object.keys(metaData).forEach(function (data) {
                  properties[data] = metaData[data];
                });
                Object.keys(options).forEach(function (data) {
                  properties[data] = options[data];
                });
                var twoD_properites = [{
                  name: 'center',
                  default: [0, 0]
                }, {
                  name: 'iconsize',
                  default: [20, 20]
                }, {
                  name: 'iconanchor',
                  default: [5, 5]
                }, {
                  name: 'swbounds',
                  default: [-90, -180]
                }, {
                  name: 'nebounds',
                  default: [90, 180]
                }];
                twoD_properites.forEach(function (property) {
                  properties[property.name] = typeof properties[property.name] === 'string' ? properties[property.name].split(',').map(function (v) {
                    return parseInt(v, 10);
                  }) : properties[property.name] ? properties[property.name] : property.default;
                });
                properties.slug = properties.mapID.toLowerCase().replace(/ /g, '-');
                properties.translations = translations;
                properties.widgets = widgets;
                Object(_makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(properties);
                var referenceSheets = widgets.filter(function (w) {
                  return w.reference;
                });

                if (referenceSheets) {
                  var boxContent = '';
                  var referenceSheetURLS = widgets.map(function (w) {
                    if (w.reference) {
                      return dataURL + options.googleSheet + '/' + w.reference + '/public/values?alt=json';
                    }
                  }).filter(function (u) {
                    return u;
                  });
                  Promise.all(referenceSheetURLS.map(function (url) {
                    return fetch(url);
                  })).then(function (responses) {
                    return Promise.all(responses.map(function (response) {
                      return response.json();
                    }));
                  }).then(
                  /*#__PURE__*/
                  function () {
                    var _ref = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(jsons) {
                      var footerNode, penUltimateNode;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return Object(_makeWidgets_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(jsons, properties, boxContent);

                            case 2:
                              map = _context.sent;

                              if (properties.footer && properties.footer.trim()) {
                                footerNode = document.createElement('footer');
                                footerNode.innerHTML = properties.footer + '  <div class="hidden"></div>';
                                penUltimateNode = document.querySelector('#' + properties.slug + ' #controls') || document.querySelector('#' + properties.slug + 'header');
                                penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                              }

                              resolve(map);

                            case 5:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x4) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                } else {
                  var map = new CustomMap(container, options).render();
                  makeLayers(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                }

                if (properties.footer && properties.footer.trim()) {
                  var footerNode = document.createElement('footer');
                  footerNode.innerHTML = properties.footer + '  <div class="hidden"></div>';
                  var penUltimateNode = document.querySelector('#' + properties.slug + ' #controls') || document.querySelector('#' + properties.slug + 'header');
                  penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initWithSpreadsheet.apply(this, arguments);
}

/***/ }),
/* 8 */
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader??ref--5-2!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--5-4!./main.scss */ 9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 10)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--5-2!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--5-4!./src/scss/main.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css)
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

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
  exports.wrap = wrap;

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

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
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
  exports.awrap = function(arg) {
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
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

  exports.keys = function(object) {
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
  exports.values = values;

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

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 13 */
/*!******************************************!*\
  !*** ./src/js/initWithoutSpreadsheet.js ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/makeMap.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithoutSpreadsheet; });
/* harmony import */ var _makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeDocumentNodes.js */ 5);
/* harmony import */ var _makeLayers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeLayers.js */ 2);
/* harmony import */ var _makeWidgets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeWidgets.js */ 6);
/* harmony import */ var _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomMap.js */ 4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.makeLayers = _makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
function initWithoutSpreadsheet(_x, _x2) {
  return _initWithoutSpreadsheet.apply(this, arguments);
}

function _initWithoutSpreadsheet() {
  _initWithoutSpreadsheet = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(options, translations) {
    var twoD_properites, container, map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            twoD_properites = [{
              name: 'center',
              default: [0, 0]
            }, {
              name: 'iconsize',
              default: [20, 20]
            }, {
              name: 'iconanchor',
              default: [5, 5]
            }, {
              name: 'swbounds',
              default: [-90, -180]
            }, {
              name: 'nebounds',
              default: [90, 180]
            }];
            twoD_properites.forEach(function (property) {
              options[property.name] = typeof options[property.name] === 'string' ? options[property.name].split(',').map(function (v) {
                return parseInt(v, 10);
              }) : options[property.name] ? options[property.name] : property.default;
            });
            options.slug = options.mapID.toLowerCase().replace(/ /g, '-');
            options.translations = translations;
            Object(_makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options);
            container = document.querySelector('#' + options.slug + '__map.map');

            if (!options.formatToolbox) {
              _context2.next = 11;
              break;
            }

            map = new _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](container, options).render();
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch('https://csis.carto.com/api/v2/sql?api_key=' + map.apikey + '&format=geojson&q=SELECT%20*%20FROM%20' + map.table).then(function (resp) {
                return resp.json();
              }).then(function (json) {
                map.json = [json];
                var box = document.querySelector('#' + options.slug + ' #controls');
                map.formattoolbox(box);
                Object(_makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map);
                resolve(map);
              });
            }));

          case 11:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch('https://csis.carto.com/api/v2/sql?api_key=' + (options.apikey || options.apiKey || options['api key']) + '&format=geojson&q=SELECT%20*%20FROM%20' + options.table).then(function (resp) {
                return resp.json();
              }).then(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(json) {
                  var box, boxContent, map, footerNode, penUltimateNode;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          options.json = [json];
                          box = document.querySelector('#' + options.slug + ' #controls');
                          boxContent = '';

                          if (!options.widgets) {
                            _context.next = 9;
                            break;
                          }

                          _context.next = 6;
                          return Object(_makeWidgets_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(options.json, options, boxContent);

                        case 6:
                          map = _context.sent;
                          _context.next = 12;
                          break;

                        case 9:
                          map = new _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](container, options).render();
                          Object(_makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map);
                          box = document.querySelector('#' + options.slug + ' #controls');

                        case 12:
                          if (options.footer && options.footer.trim()) {
                            footerNode = document.createElement('footer');
                            footerNode.innerHTML = options.footer + '  <div class="hidden"></div>';
                            penUltimateNode = document.querySelector('#' + options.slug + ' #controls') || document.querySelector('#' + options.slug + 'header');
                            penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                          }

                          resolve(map);

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }());
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initWithoutSpreadsheet.apply(this, arguments);
}

/***/ }),
/* 14 */
/*!**********************************!*\
  !*** ./src/index.js + 1 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/js/initWithSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/js/initWithSpreadsheet.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(12);

// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/makeMap.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var url = window.location != window.parent.location ? document.referrer : document.location.href;
var href = /lang=([^&]+)/.exec(url);
window.lang = href ? href[1] : null;
var leafletLoaded = 0;
var primaryJsFiles = ['https://unpkg.com/leaflet@1.3.1/dist/leaflet.js', 'https://unpkg.com/whatwg-fetch@3.0.0/dist/fetch.umd.js'];
var secondaryJsFiles = ['https://unpkg.com/leaflet.zoomslider@0.7.1/src/L.Control.Zoomslider.js', 'https://unpkg.com/leaflet-fullscreen@1.0.2/dist/Leaflet.fullscreen.min.js', 'https://unpkg.com/chroma-js@2.0.3/chroma.min.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/A11y-Dialog.js', 'https://unpkg.com/choices.js@7.0.0/public/assets/scripts/choices.min.js', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/patterns.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/latinize.js'];

function handleLoadLeaflet() {
  return new Promise(function (resolve, reject) {
    secondaryJsFiles.forEach(function (file) {
      var head = document.head;
      var jsLink = document.createElement('script');
      jsLink.src = file;
      head.appendChild(jsLink);

      jsLink.onload = function () {
        leafletLoaded++;

        if (leafletLoaded === secondaryJsFiles.length + primaryJsFiles.length) {
          resolve(leafletLoaded);
          return leafletLoaded;
        }
      };
    });
  });
}

function importFiles() {
  return _importFiles.apply(this, arguments);
}

function _importFiles() {
  _importFiles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              primaryJsFiles.forEach(function (file) {
                var head = document.head;
                var jsLink = document.createElement('script');
                jsLink.src = file;

                jsLink.onload = function () {
                  leafletLoaded++;

                  if (leafletLoaded === primaryJsFiles.length) {
                    handleLoadLeaflet();
                    resolve(leafletLoaded);
                    return leafletLoaded;
                  }
                };

                head.appendChild(jsLink);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _importFiles.apply(this, arguments);
}

function makeMap(_x) {
  return _makeMap.apply(this, arguments);
}

function _makeMap() {
  _makeMap = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(options) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (leafletLoaded) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return importFiles().then(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(scriptsLoaded) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return init(options);

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }());

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.next = 8;
            return init(options);

          case 8:
            return _context3.abrupt("return", _context3.sent);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _makeMap.apply(this, arguments);
}

function init(_x2) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(options) {
    var dataURL, translations, initWithSpreadsheet, initWithoutSpreadsheet;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dataURL = 'https://spreadsheets.google.com/feeds/list/';
            window.defaultColor = options.oceancolor || options.oceanColor || options['ocean color'];

            if (!lang) {
              _context5.next = 6;
              break;
            }

            fetch(dataURL + options.googleSheet + '/' + 3 + '/public/values?alt=json').then(function (response) {
              return response.json();
            }).then(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(json) {
                var initWithSpreadsheet;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        translations = Object(parsers["a" /* parseLanguageData */])(json.feed.entry);
                        initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 7).default;
                        _context4.next = 4;
                        return initWithSpreadsheet(dataURL, options, translations);

                      case 4:
                        return _context4.abrupt("return", _context4.sent);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context5.next = 17;
            break;

          case 6:
            if (!options.googleSheet) {
              _context5.next = 13;
              break;
            }

            initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 7).default;
            _context5.next = 10;
            return initWithSpreadsheet(dataURL, options);

          case 10:
            return _context5.abrupt("return", _context5.sent);

          case 13:
            initWithoutSpreadsheet = __webpack_require__(/*! ./initWithoutSpreadsheet.js */ 13).default;
            _context5.next = 16;
            return initWithoutSpreadsheet(options);

          case 16:
            return _context5.abrupt("return", _context5.sent);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _init.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js





window.makeMap = makeMap;
window.externalLink = helpers["d" /* externalLink */];
window.capitalize = helpers["a" /* capitalize */]; // import { examples, arcticJamming } from './examples.js'
// arcticJamming()
// examples()

window.convertType = function (value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === 'undefined' ? undefined : value.toLowerCase() === 'null' ? null : value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : value;
};

if (typeof window.CustomEvent !== 'function') {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

Array.prototype.groupBy = function (property1, property2) {
  return property2 ? this.reduce(function (groups, item) {
    var val = item[property2][property1];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {}) : this.reduce(function (groups, item) {
    var val = item[property1];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

RegExp.escape = function (s) {
  return s.replace(/[\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oYW5kbGVGZWF0dXJlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZVBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZU5vblBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlR2VvSnNvbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VMYXllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1c3RvbU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZURvY3VtZW50Tm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcFdpZGdldHNUb1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/MTI5NyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhvdXRTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlQ29sb3JTY2FsZSIsImNvdW50IiwiaW5kZXgiLCJzY2FsZU9uZSIsImNocm9tYSIsImN1YmVoZWxpeCIsImh1ZSIsImxpZ2h0bmVzcyIsInNjYWxlIiwiY29sb3JzIiwic2NhbGVUd28iLCJnYW1tYSIsInJldmVyc2UiLCJpIiwiY29sb3IiLCJzYXR1cmF0ZSIsImhleCIsInB1c2giLCJsaW5lV2VpZ2h0cyIsImxpbmVEYXNoQXJyYXlzIiwiZXh0ZXJuYWxMaW5rIiwicmVtb3ZlIiwiY29udmVydFR5cGUiLCJ2YWx1ZSIsInYiLCJOdW1iZXIiLCJpc05hTiIsInRvTG93ZXJDYXNlIiwidW5kZWZpbmVkIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsb2FkIiwidXJsIiwiZWxlbWVudCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJtYWtlRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIngiLCJncm91cHMiLCJ3aWRnZXRzIiwia2V5cyIsImdyb3VwQnkiLCJjaG9pY2VzIiwiT2JqZWN0IiwibWFwIiwiZyIsInoiLCJpZCIsImxhYmVsIiwidHJpbSIsInBhcnNlSW50IiwiTmFOIiwiZGlzYWJsZWQiLCJyZW1vdmVJdGVtQnV0dG9uIiwibWF4SXRlbUNvdW50IiwibWF4aW11bSIsImNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsIl90aGlzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJkYXRhIiwia2V5IiwiZmluZCIsImtleVN0eWxlIiwidHlwZSIsImZvcm1zIiwiayIsImluZGV4T2YiLCJzdHlsZU9wdGlvbnMiLCJzdHlsZUtleSIsIm1hcmt1cCIsImFjdGl2ZSIsImNsYXNzIiwic3ZnIiwid2luZG93IiwiYnRvYSIsImNob2ljZSIsIml0ZW1DaG9pY2UiLCJpdGVtRGlzYWJsZWQiLCJpdGVtU2VsZWN0YWJsZSIsImNvbmZpZyIsIml0ZW1TZWxlY3RUZXh0IiwiZ3JvdXBJZCIsImZlYXR1cmUiLCJncm91cCIsImljb25TaXplIiwiaWNvbnNpemUiLCJkaXZpZGVycyIsInNpemUiLCJrZXlDb2xvciIsInciLCJmb3JtS2V5V2lkZ2V0IiwiY29sb3JLZXlXaWRnZXQiLCJjb2xvcktleSIsInByb3BlcnRpZXMiLCJmaWVsZCIsImZvcm1LZXkiLCJldmVyeSIsImF2ZXJhZ2UiLCJmb3JtIiwib2NlYW5jb2xvciIsImxlbmd0aCIsImRlZmF1bHRDb2xvciIsImRhcmtlbiIsImljb24iLCJzbHVnIiwicmVwbGFjZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN2Z0NvbnRlbnQiLCJtYXRjaCIsInAxIiwicDIiLCJwMyIsInBhdHRlcm4iLCJjb2xvclR3byIsImNvbG9yT25lIiwiaGFuZGxlRmVhdHVyZUV2ZW50cyIsImxheWVyIiwiZXZlbnRPcHRpb25zIiwib25lYWNoZmVhdHVyZSIsImNsaWNrIiwiaGFuZGxlTGF5ZXJDbGljayIsImxlYWZsZXQiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJvbiIsInBvcHVwQ29udGVudCIsImZvcm1hdHBvcHVwY29udGVudCIsImZvcm1hdFBvcHVwQ29udGVudCIsImJpbmRQb3B1cCIsImNvbnRlbnQiLCJwIiwicG9wdXBoZWFkZXJzIiwicG9wdXBjb250ZW50IiwiZmlsdGVyIiwiam9pbiIsImxpbmsiLCJoeXBlcmxpbmsiLCJleHRlcm5hbExpbmtDb250ZW50IiwiZXh0ZXJuYWxMaW5rVGV4dCIsImxhbmciLCJ0cmFuc2xhdGFibGVTdHJpbmdzIiwidHJhbnNsYXRpb25zIiwic29ydCIsImEiLCJiIiwidCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlIiwiaXNTcGlkZXJmaWVkIiwiX3ByZVNwaWRlcmZ5TGF0bG5nIiwiX2xheWVycyIsImwiLCJ1bnNwaWRlcmZ5IiwiX19wYXJlbnQiLCJ2YWx1ZXMiLCJfZ3JvdXAiLCJfZmVhdHVyZUdyb3VwIiwiX3NwaWRlcmZpZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZCIsInN0eWxlIiwib3BhY2l0eSIsInN0eWxlUG9pbnQiLCJsYXRsbmciLCJwb2ludFN0eWxlIiwiQ3VzdG9tSWNvbiIsIkwiLCJJY29uIiwiZXh0ZW5kIiwiaWNvbkFuY2hvciIsImljb25hbmNob3IiLCJub25Qb2ludFN0eWxlIiwiZGl2SWNvbiIsInRoaXNGb3JtS2V5V2lkZ2V0IiwidGhpc0NvbG9yS2V5V2lkZ2V0Iiwic3BsaXQiLCJjbGFzc05hbWUiLCJodG1sIiwiZW5jb2RlVVJJIiwiaWNvblVybCIsIm1hcmtlciIsInN0eWxlTm9uUG9pbnQiLCJmb3JtS2V5Rm9ybSIsInJlZHVjZSIsImMiLCJjb2xvcktleUZvcm0iLCJmIiwid2VpZ2h0IiwibGluZUNhcCIsImRhc2hBcnJheSIsInBhdHRlcm5PcHRpb25zIiwic3BhY2VXZWlnaHQiLCJzcGFjZUNvbG9yIiwic3BhY2VPcGFjaXR5IiwiYW5nbGUiLCJTdHJpcGVQYXR0ZXJuIiwic2hhcGVPcHRpb25zIiwieSIsInJhZGl1cyIsImZpbGwiLCJzdHJva2UiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSIsInNoYXBlIiwiUGF0dGVybkNpcmNsZSIsIndpZHRoIiwiaGVpZ2h0IiwiUGF0dGVybiIsImFkZFNoYXBlIiwiYWRkVG8iLCJmaWxsUGF0dGVybiIsImxpbmVDb2xvciIsImxpbmVXZWlnaHQiLCJsaW5lT3BhY2l0eSIsImdlb21ldHJ5IiwiYnJpZ2h0ZW4iLCJtYWtlR2VvSnNvbk9wdGlvbnMiLCJjb2xvcktleVdpZGdldHMiLCJmb3JtS2V5V2lkZ2V0cyIsImZpbHRlcnMiLCJvbkVhY2hGZWF0dXJlIiwiYmFja2dyb3VuZE9wdGlvbnMiLCJwb2ludFRvTGF5ZXIiLCJmb3JlZ3JvdW5kT3B0aW9ucyIsIm1ha2VMYXllcnMiLCJnZW9Kc29uT3B0aW9ucyIsImdlb2pzb25vcHRpb25zIiwianNvbiIsImNsdXN0ZXJDb2xvciIsImNvbG9yS2V5cyIsIndpZGdldCIsImNvbGxlY3Rpb25OYW1lIiwiZmVhdHVyZXMiLCJhbGxQb2ludHMiLCJNYXJrZXJDbHVzdGVyR3JvdXAiLCJzaG93Q292ZXJhZ2VPbkhvdmVyIiwiem9vbVRvQm91bmRzT25DbGljayIsIm1heENsdXN0ZXJSYWRpdXMiLCJjbHVzdGVyZGlzdGFuY2UiLCJpY29uQ3JlYXRlRnVuY3Rpb24iLCJjbHVzdGVyIiwiZ2V0Q2hpbGRDb3VudCIsImhhc0xpbmVGZWF0dXJlcyIsInNvbWUiLCJvcHRpb24iLCJsb2NhbGVDb21wYXJlIiwiZ2VvSnNvbiIsImFkZExheWVyIiwiZ2V0TGF5ZXJzIiwiZSIsImhhbmRsZUNsdXN0ZXJDbGljayIsIl9sZWFmbGV0X2lkIiwic3BpZGVyZnkiLCJnZXRBbGxDaGlsZE1hcmtlcnMiLCJtIiwiZ2V0RWxlbWVudCIsInBhcnNlTGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2VEYXRhIiwicm93IiwiY29sdW1uIiwiY29sdW1uTmFtZSIsInBhcnNlTGVnZW5kRGF0YSIsImNvbG9yU2NhbGUiLCJsZWdlbmRJdGVtcyIsInNlbGVjdGVkIiwiY29sb3JWYWwiLCJwYXJzZU1ldGFEYXRhIiwicGFyc2VXaWRnZXREYXRhIiwibWV0YURhdGEiLCJwcm9jZXNzIiwicHJvcGVydHkiLCJtYXBJZCIsIkN1c3RvbU1hcCIsImNvbnRhaW5lciIsImFsbCIsInJlc2V0RmlsdGVycyIsInJlbW92ZUdyb3VwcyIsInJlbW92ZUxheWVyIiwicmVuZGVyIiwibWluWm9vbSIsIm1pbnpvb20iLCJtYXhab29tIiwibWF4em9vbSIsIm1heEJvdW5kcyIsIm1heGJvdW5kcyIsInN3Ym91bmRzIiwibmVib3VuZHMiLCJzY3JvbGxXaGVlbFpvb20iLCJpbm5lcldpZHRoIiwiem9vbUNvbnRyb2wiLCJoYXNPd25Qcm9wZXJ0eSIsInpvb21zbGlkZXIiLCJhdHRyaWJ1dGlvbkNvbnRyb2wiLCJsb2FkZXZlbnQiLCJhZGRldmVudCIsInNldFZpZXciLCJjZW50ZXIiLCJ6b29tIiwidGlsZUxheWVyIiwibWFwYm94c3R5bGUiLCJjb250cm9sIiwiZnVsbHNjcmVlbiIsIkNvbnRyb2wiLCJGdWxsc2NyZWVuIiwiYWRkQ29udHJvbCIsImF0dHJpYnV0aW9uIiwicG9zaXRpb24iLCJzZXRQcmVmaXgiLCJtYWtlRG9jdW1lbnROb2RlcyIsIm5ld1NlY3Rpb25IVE1MIiwidGl0bGUiLCJsb2dvIiwiZGVzY3JpcHRpb24iLCJpbnN0cnVjdGlvbnMiLCJ0aXRsZWNhcmRjb250ZW50IiwiYm9keSIsIm5ld0RpYWxvZ0hUTUwiLCJ0aXRsZWNhcmR0aXRsZSIsIm92ZXJmbG93IiwiZGlhbG9nRWwiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5FbCIsImRpYWxvZ1RyaWdnZXIiLCJkaWFsb2dCb3giLCJBMTF5RGlhbG9nIiwiZGlhbG9nIiwic2hvdyIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZ3JhbSIsIm1ldGFMb2NhbGVPRyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJtZXRhVHlwZU9HIiwibWV0YVdpZHRoT0ciLCJtZXRhSGVpZ2h0T0ciLCJtZXRhVHdpdHRlckNhcmRPRyIsIm1ldGFUaXRsZU9HIiwibWV0YVRpdGxlVHdpdHRlciIsIm1ldGFEZXNjcmlwdGlvbk9HIiwibWV0YURlc2NyaXB0aW9uVHdpdHRlciIsIm1ldGFJbWFnZU9HIiwic2NyZWVuc2hvdCIsIm1ldGFJbWFnZVR3aXR0ZXIiLCJpbm5lclRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJocmVmIiwid2Vic2l0ZSIsIm1hcFdpZGdldHNUb1N0YXRlIiwid2lkZ2V0Q29udGVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGFibGVzIiwidGFibGUiLCJmZXRjaCIsImFwaWtleSIsInRoZW4iLCJyZXNwb25zZXMiLCJyZXNwb25zZSIsImpzb25zIiwiY29uY2F0IiwiZmVhdHVyZUdyb3VwcyIsImJveCIsImluaXRpYWxpemVkIiwiQ2hvaWNlcyIsImhhbmRsZVJlc2V0Iiwic2VsZWN0cyIsImNoZWNrcyIsInNlYXJjaCIsInRvZ2dsZSIsImlucHV0cyIsImlucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUV2ZW50IiwibWFwX2lkIiwidHJhbnNsYXRhYmxlTm9kZXMiLCJlbCIsInNlbGVjdGlvbnMiLCJwb3NzaWJsZUNoZWNrcyIsIm8iLCJuYW1lIiwicG9zc2libGVPcHRpb25zIiwicG9zc2libGVRdWVyaWVzIiwicXVlcnkiLCJib29sIiwid2l0aERpYWNyaXRpY3MiLCJ3aXRob3V0RGlhY3JpdGljcyIsImxhdGluaXNlIiwibGF5ZXJzIiwiZ3JvdXBpbmciLCJtYWtlV2lkZ2V0cyIsImJveENvbnRlbnQiLCJsZWdlbmREYXRhIiwicmVmZXJlbmNlIiwiZmVlZCIsImVudHJ5IiwiZm9ybWF0V2lkZ2V0cyIsIm5vZGVzIiwibGFiZWxUZXh0IiwiaXRlbVRleHQiLCJvZmZzZXRIZWlnaHQiLCJmb250U2l6ZSIsImdldENvbXB1dGVkU3R5bGUiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJ3aWRnZXROb2RlcyIsImRyb3Bkb3duT3B0aW9ucyIsIndpZGdldFRpdGxlIiwiaW5pdFdpdGhTcHJlYWRzaGVldCIsImRhdGFVUkwiLCJnb29nbGVTaGVldCIsInR3b0RfcHJvcGVyaXRlcyIsImRlZmF1bHQiLCJtYXBJRCIsInJlZmVyZW5jZVNoZWV0cyIsInJlZmVyZW5jZVNoZWV0VVJMUyIsInUiLCJmb290ZXIiLCJmb290ZXJOb2RlIiwicGVuVWx0aW1hdGVOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiaW5pdFdpdGhvdXRTcHJlYWRzaGVldCIsImZvcm1hdFRvb2xib3giLCJyZXNwIiwiZm9ybWF0dG9vbGJveCIsImFwaUtleSIsImxvY2F0aW9uIiwicGFyZW50IiwicmVmZXJyZXIiLCJleGVjIiwibGVhZmxldExvYWRlZCIsInByaW1hcnlKc0ZpbGVzIiwic2Vjb25kYXJ5SnNGaWxlcyIsImhhbmRsZUxvYWRMZWFmbGV0IiwiZmlsZSIsImpzTGluayIsInNyYyIsIm9ubG9hZCIsImltcG9ydEZpbGVzIiwibWFrZU1hcCIsInNjcmlwdHNMb2FkZWQiLCJpbml0Iiwib2NlYW5Db2xvciIsInJlcXVpcmUiLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm90b3R5cGUiLCJFdmVudCIsInByb3BlcnR5MSIsInByb3BlcnR5MiIsInZhbCIsInMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0M7QUFDN0MsTUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQ2xCQyxT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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNB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YixHQUFELENBQU4sR0FBY2hiLE1BQU0sQ0FBQ2diLEdBQUQsQ0FBTixJQUFlLEVBQTdCO0FBQ0FoYixVQUFNLENBQUNnYixHQUFELENBQU4sQ0FBWTdjLElBQVosQ0FBaUJrRCxJQUFqQjtBQUNBLFdBQU9yQixNQUFQO0FBQ0QsR0FMQyxFQUtDLEVBTEQsQ0FEWSxHQU9aLEtBQUt1SixNQUFMLENBQVksVUFBU3ZKLE1BQVQsRUFBaUJxQixJQUFqQixFQUF1QjtBQUNuQyxRQUFJMlosR0FBRyxHQUFHM1osSUFBSSxDQUFDeVosU0FBRCxDQUFkO0FBQ0E5YSxVQUFNLENBQUNnYixHQUFELENBQU4sR0FBY2hiLE1BQU0sQ0FBQ2diLEdBQUQsQ0FBTixJQUFlLEVBQTdCO0FBQ0FoYixVQUFNLENBQUNnYixHQUFELENBQU4sQ0FBWTdjLElBQVosQ0FBaUJrRCxJQUFqQjtBQUNBLFdBQU9yQixNQUFQO0FBQ0QsR0FMQyxFQUtDLEVBTEQsQ0FQSjtBQWFELENBZEQ7O0FBZ0JBZ0gsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFVBQVNnVSxDQUFULEVBQVk7QUFDMUIsU0FBT0EsQ0FBQyxDQUFDNVcsT0FBRixDQUFVLHVCQUFWLEVBQW1DLE1BQW5DLENBQVA7QUFDRCxDQUZELEMiLCJmaWxlIjoibWFrZU1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG4iLCJpbXBvcnQgc3R5bGVLZXkgZnJvbSAnLi9zdHlsZUtleS5qcydcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb2xvclNjYWxlKGNvdW50LCBpbmRleCkge1xuICB2YXIgc2NhbGVPbmUgPSBjaHJvbWFcbiAgICAuY3ViZWhlbGl4KClcbiAgICAuaHVlKDAuNSlcbiAgICAubGlnaHRuZXNzKFswLjQsIDAuNl0pXG4gICAgLnNjYWxlKClcbiAgICAuY29sb3JzKGNvdW50ICogMilcbiAgdmFyIHNjYWxlVHdvID0gY2hyb21hXG4gICAgLmN1YmVoZWxpeCgpXG4gICAgLmh1ZSgxKVxuICAgIC5nYW1tYSgwLjUpXG4gICAgLnNjYWxlKClcbiAgICAuY29sb3JzKGNvdW50ICogMilcbiAgICAucmV2ZXJzZSgpXG4gIHZhciBzY2FsZSA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgdmFyIGNvbG9yID0gaSAlIDIgPT09IDAgPyBzY2FsZU9uZVtpICogMl0gOiBzY2FsZVR3b1tpICogMl1cbiAgICBjb2xvciA9IGNocm9tYShjb2xvcilcbiAgICAgIC5zYXR1cmF0ZSgpXG4gICAgICAuaGV4KClcbiAgICBzY2FsZS5wdXNoKGNvbG9yKVxuICB9XG5cbiAgcmV0dXJuIHNjYWxlXG59XG5cbmV4cG9ydCB2YXIgbGluZVdlaWdodHMgPSBbWzMsIDNdLCBbNSwgMl0sIFs0LCAzLjVdLCBbNywgM10sIFs0LCA0XV1cbmV4cG9ydCB2YXIgbGluZURhc2hBcnJheXMgPSBbXG4gIFtudWxsLCAnNiw5J10sXG4gIFtudWxsLCBudWxsXSxcbiAgW251bGwsICc2LDEyJ10sXG4gIFtudWxsLCBudWxsXSxcbiAgWycxOCwyNCcsICcxOCwyNCddXG5dXG5leHBvcnQgdmFyIGV4dGVybmFsTGluayA9XG4gICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE1IDE1XCI+PHBhdGggZD1cIk03LjQ5LDBWMS42N0gxLjY4VjEzLjMySDEzLjMyVjcuNTJIMTV2NS43MmExLjc2LDEuNzYsMCwwLDEtLjQyLDEuMTksMS42NCwxLjY0LDAsMCwxLTEuMTMuNTZIMS43NGExLjY3LDEuNjcsMCwwLDEtMS4xNi0uNDFBMS42MSwxLjYxLDAsMCwxLDAsMTMuNDh2LS4yN0MwLDkuNCwwLDUuNiwwLDEuOEExLjgzLDEuODMsMCwwLDEsLjU4LjRhMS41MywxLjUzLDAsMCwxLDEtLjM5aDZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIi8+PHBhdGggZD1cIk05LjE3LDEuNjdWMEgxNVY1Ljg0SDEzLjM0di0zaDBjLS4wNS4wNS0uMTEuMS0uMTYuMTZsLS40NS40Ni0xLjMsMS4yOS0uODQuODQtLjg5LjktLjg4Ljg3LS44OS45Yy0uMjguMjktLjU3LjU3LS44Ni44Nkw2LjE2LDEwbC0uODguODdhMS44MywxLjgzLDAsMCwxLS4xMy4xNkw0LDkuODZsMCwwTDUuMzYsOC40N2wuOTUtMSwuNzUtLjc1LDEtMUw4Ljg3LDVsMS0uOTQuODUtLjg2LjkyLS45MS41Ni0uNThaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIi8+PC9zdmc+J1xuZXhwb3J0IHZhciByZW1vdmUgPVxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGZpbGw9XCIjMDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNMi41OTIuMDQ0bDE4LjM2NCAxOC4zNjQtMi41NDggMi41NDhMLjA0NCAyLjU5MnpcIi8+PHBhdGggZD1cIk0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6XCIvPjwvZz48L3N2Zz4nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VHlwZSh2YWx1ZSkge1xuICB2YXIgdiA9IE51bWJlcih2YWx1ZSlcbiAgcmV0dXJuICFpc05hTih2KVxuICAgID8gdlxuICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdudWxsJ1xuICAgICAgICA/IG51bGxcbiAgICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZSdcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQodXJsLCBlbGVtZW50KSB7XG4gIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICByZXEub3BlbignR0VUJywgdXJsLCBmYWxzZSlcbiAgcmVxLnNlbmQobnVsbClcbiAgZWxlbWVudC5pbm5lckhUTUwgPSByZXEucmVzcG9uc2VUZXh0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRHJvcGRvd25PcHRpb25zKG9wdGlvbnMsIHgpIHtcbiAgdmFyIGdyb3VwcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgdmFyIGNob2ljZXMgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcChmdW5jdGlvbihnLCB6KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB6LFxuICAgICAgbGFiZWw6IGcudHJpbSgpICYmIHBhcnNlSW50KGcsIDEwKSA9PT0gTmFOID8gZyA6ICcnLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgY2hvaWNlczogZ3JvdXBzW2ddXG4gICAgfVxuICB9KVxuICByZXR1cm4ge1xuICAgIGNob2ljZXM6IGNob2ljZXMsXG4gICAgcmVtb3ZlSXRlbUJ1dHRvbjogdHJ1ZSxcbiAgICBtYXhJdGVtQ291bnQ6IG9wdGlvbnMud2lkZ2V0c1t4XS5tYXhpbXVtLFxuICAgIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM6IGZ1bmN0aW9uIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXModGVtcGxhdGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXNcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbTogZnVuY3Rpb24gaXRlbShjbGFzc05hbWVzLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIGtleSA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmZpbmQoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHYudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXIga2V5U3R5bGVcblxuICAgICAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHZhciBpID0gZm9ybXMuaW5kZXhPZihrZXkudmFsdWUudG9Mb3dlckNhc2UoKSlcblxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtYXJrdXAgPVxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJib3JkZXItY29sb3I6JyArXG4gICAgICAgICAgICBrZXkuY29sb3IgK1xuICAgICAgICAgICAgJ1wiIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW0gK1xuICAgICAgICAgICAgJ1wiIGRhdGEtaXRlbSBkYXRhLWlkPVwiJyArXG4gICAgICAgICAgICBkYXRhLmlkICtcbiAgICAgICAgICAgICdcIiBkYXRhLXZhbHVlPVwiJyArXG4gICAgICAgICAgICBkYXRhLnZhbHVlICtcbiAgICAgICAgICAgICdcIiAnICtcbiAgICAgICAgICAgIChkYXRhLmFjdGl2ZSA/ICdhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiJyA6ICcnKSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgKGRhdGEuZGlzYWJsZWQgPyAnYXJpYS1kaXNhYmxlZD1cInRydWVcIicgOiAnJykgK1xuICAgICAgICAgICAgJz48c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICAgJ3N0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgK1xuICAgICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAgICdcIik+PC9zcGFuPiAnICtcbiAgICAgICAgICAgIGNhcGl0YWxpemUoZGF0YS5sYWJlbCkgK1xuICAgICAgICAgICAgJzxidXR0b24gc3R5bGU9XCJib3JkZXItbGVmdDogMXB4IHNvbGlkICcgK1xuICAgICAgICAgICAga2V5LmNvbG9yICtcbiAgICAgICAgICAgICc7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcXCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgd2luZG93LmJ0b2EocmVtb3ZlKSArXG4gICAgICAgICAgICAnXFwnKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNob2ljZXNfX2J1dHRvblwiIGRhdGEtYnV0dG9uPVwiXCIgYXJpYS1sYWJlbD1cIlJlbW92ZSBpdGVtXCI+UmVtb3ZlIGl0ZW08L2J1dHRvbj48L2Rpdj4nXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKG1hcmt1cClcbiAgICAgICAgfSxcbiAgICAgICAgY2hvaWNlOiBmdW5jdGlvbiBjaG9pY2UoY2xhc3NOYW1lcywgZGF0YSkge1xuICAgICAgICAgIHZhciBrZXkgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5maW5kKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIGtleVN0eWxlXG5cbiAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtYXJrdXAgPVxuICAgICAgICAgICAgJyA8ZGl2IGNsYXNzPVwiJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW0gK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuaXRlbUNob2ljZSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgKGRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyBjbGFzc05hbWVzLml0ZW1EaXNhYmxlZFxuICAgICAgICAgICAgICA6IGNsYXNzTmFtZXMuaXRlbVNlbGVjdGFibGUpICtcbiAgICAgICAgICAgICdcIiBkYXRhLXNlbGVjdC10ZXh0PVwiJyArXG4gICAgICAgICAgICBfdGhpcy5jb25maWcuaXRlbVNlbGVjdFRleHQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtY2hvaWNlICcgK1xuICAgICAgICAgICAgKGRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyAnZGF0YS1jaG9pY2UtZGlzYWJsZWQgYXJpYS1kaXNhYmxlZD1cInRydWVcIidcbiAgICAgICAgICAgICAgOiAnZGF0YS1jaG9pY2Utc2VsZWN0YWJsZScpICtcbiAgICAgICAgICAgICcgZGF0YS1pZD1cIicgK1xuICAgICAgICAgICAgZGF0YS5pZCArXG4gICAgICAgICAgICAnXCIgZGF0YS12YWx1ZT1cIicgK1xuICAgICAgICAgICAgZGF0YS52YWx1ZSArXG4gICAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgICAoZGF0YS5ncm91cElkID4gMCA/ICdyb2xlPVwidHJlZWl0ZW1cIicgOiAncm9sZT1cIm9wdGlvblwiJykgK1xuICAgICAgICAgICAgJz4gPHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgICAnXCIpPjwvc3Bhbj4gJyArXG4gICAgICAgICAgICBjYXBpdGFsaXplKGRhdGEubGFiZWwpICtcbiAgICAgICAgICAgICcgPC9kaXY+ICdcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGUobWFya3VwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjYXBpdGFsaXplLCBsb2FkLCBsaW5lV2VpZ2h0cywgbGluZURhc2hBcnJheXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlS2V5KG9wdGlvbnMpIHtcbiAgdmFyIG1hcCA9IG9wdGlvbnMubWFwLFxuICAgIGZlYXR1cmUgPSBvcHRpb25zLmZlYXR1cmUsXG4gICAgZ3JvdXAgPSBvcHRpb25zLmdyb3VwLFxuICAgIGtleSA9IG9wdGlvbnMua2V5LFxuICAgIGluZGV4ID0gb3B0aW9ucy5pbmRleCxcbiAgICBmb3JtcyA9IG9wdGlvbnMuZm9ybXMsXG4gICAgaWNvblNpemUgPSBtYXAuaWNvbnNpemUsXG4gICAgZGl2aWRlcnMgPSBpY29uU2l6ZS5tYXAoc2l6ZSA9PiBzaXplIC8gMTIpXG5cbiAgdmFyIGNvbG9ycywga2V5Q29sb3JcbiAgdmFyIGtleSA9IGdyb3VwID8gZ3JvdXBbMF0gOiBrZXlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGZvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBudWxsXG4gICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnY29sb3InID8gdyA6IG51bGxcblxuICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldFxuICAgICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSlcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGtleUNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgICBpY29uU2l6ZSA9IGljb25TaXplLm1hcChzaXplID0+IHNpemUgLyAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBpY29uU2l6ZSA9IGljb25TaXplLm1hcCgoc2l6ZSwgaSkgPT4gc2l6ZSAvIGRpdmlkZXJzW2ldKVxuICAgIH1cblxuICAgIGtleS5jb2xvciA9XG4gICAgICBncm91cCAmJlxuICAgICAgZ3JvdXAuZXZlcnkoZnVuY3Rpb24oZykge1xuICAgICAgICByZXR1cm4gZy5jb2xvclxuICAgICAgfSlcbiAgICAgICAgPyBjaHJvbWEuYXZlcmFnZShcbiAgICAgICAgICBncm91cC5tYXAoZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgcmV0dXJuIGcuY29sb3JcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIDoga2V5LmNvbG9yXG5cbiAgICBzd2l0Y2ggKGtleS5mb3JtKSB7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBrZXlDb2xvciA9IGtleS5jb2xvclxuICAgICAgICA/IGtleS5jb2xvclxuICAgICAgICA6IG9wdGlvbnMubWFwLm9jZWFuY29sb3JcbiAgICAgICAgICA/IG9wdGlvbnMubWFwLm9jZWFuY29sb3JcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgaWYgKGZvcm1zICYmIGZvcm1zLmxlbmd0aCkge1xuICAgICAgICB2YXIgc3ZnXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICAnI2ZmZmZmZidcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY29sb3JzID0gWycjMDAwMDAwJywga2V5Q29sb3IgPyBrZXlDb2xvciA6IGRlZmF1bHRDb2xvcl1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICAnI2ZmZmZmZicsXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKVxuICAgICAgICAgIF1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnIHZpZXdCb3g9XFwnMCAwIDQ4IDEyXFwnPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBjb2xvcnNbMF0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICBsaW5lV2VpZ2h0c1tpbmRleF1bMF0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgIChpbmRleCA9PT0gNCA/ICcxOCwxMicgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMF0pICtcbiAgICAgICAgICAgICdcXCcvPjxsaW5lIHgxPVxcJzBcXCcgeDI9XFwnNDhcXCcgeTE9XFwnNTAlXFwnIHkyPVxcJzUwJVxcJyBzdHJva2U9XFwnJyArXG4gICAgICAgICAgICBjb2xvcnNbMV0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICBsaW5lV2VpZ2h0c1tpbmRleF1bMV0gK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2UtbGluZWNhcD1cXCdzcXVhcmVcXCcgc3Ryb2tlLWRhc2hhcnJheT1cXCcnICtcbiAgICAgICAgICAgIChpbmRleCA9PT0gNCA/ICcxOCwxMicgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMV0pICtcbiAgICAgICAgICAgICdcXCcvPjwvc3ZnPidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyB2aWV3Qm94PVxcJzAgMCA0OCAxMlxcJz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAga2V5Q29sb3IgK1xuICAgICAgICAgICAgJ1xcJyBzdHJva2Utd2lkdGg9XFwnJyArXG4gICAgICAgICAgICAzICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAnMyw3JyArXG4gICAgICAgICAgICAnXFwnLz48L3N2Zz4nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2ZzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2ZyksXG4gICAgICAgIGNsYXNzOiAnbGluZSdcbiAgICAgIH1cblxuICAgIGNhc2UgJ2ljb24nOlxuICAgICAgaWYgKGtleS5pY29uKSB7XG4gICAgICAgIHZhciBzbHVnID0ga2V5LnZhbHVlLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBsb2FkKGtleS5pY29uLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuJykpXG4gICAgICAgIHZhciBzdmdDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbicpLmlubmVySFRNTFxuXG4gICAgICAgIGlmIChjb2xvcktleVdpZGdldCAmJiBrZXlDb2xvcikge1xuICAgICAgICAgIHN2Z0NvbnRlbnQgPSBzdmdDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAvKChcXGJmaWxsPVwiIykoKFswLWEtZkEtRl17Mn0pezN9fChbMC05YS1mQS1GXSl7M30pXCIpL2dpLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApXG4gICAgICAgICAgc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgIC8oPGNpcmNsZSB8PHJlY3RhbmdsZSB8PGVsbGlwc2UgfDxwb2x5Z29uIHw8cGF0aCApL2csXG4gICAgICAgICAgICBmdW5jdGlvbihtYXRjaCwgcDEsIHAyLCBwMykge1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZShtYXRjaCwgbWF0Y2ggKyAnZmlsbD1cIicgKyBrZXlDb2xvciArICdcIiAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmdDb250ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgK1xuICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgICAgaWNvblNpemVbMF0gLyAyICtcbiAgICAgICAgICAgICAgICAnXCIgY3k9XCInICtcbiAgICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAgICdcIiByPVwiJyArXG4gICAgICAgICAgICAgICAgKGljb25TaXplWzBdICsgaWNvblNpemVbMV0pIC8gNCArXG4gICAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAoa2V5Q29sb3IgfHwga2V5LmNvbG9yKSArXG4gICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICBjbGFzczoga2V5Lmljb24gPyAnaWNvbicgOiAnY29sb3InXG4gICAgICB9XG5cbiAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG4gICAgICB2YXIgc3ZnXG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKCdzdHJpcGUnKSA+IC0xOlxuICAgICAgICB2YXIgY29sb3JUd28gPSBrZXkucGF0dGVyblsxXVxuICAgICAgICB2YXIgY29sb3JPbmUgPSBrZXkucGF0dGVybltrZXkucGF0dGVybi5sZW5ndGggLSAxXVxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIj48cG9seWdvbiBwb2ludHM9XCI1LjczIDAgNC42NyAwIDAgNC42NiAwIDUuNzEgNS43MyAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIyLjI4IDAgMS4yMiAwIDAgMS4yMiAwIDIuMjcgMi4yOCAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCI4Ljg1IDAgNy43OSAwIDAgNy43NyAwIDguODIgOC44NSAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAwIDExLjI0IDAgMCAxMS4yIDAgMTIgMC4yNiAxMiAxMiAwLjMgMTIgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMTAuMTIgMTIgOS4wNiA5LjA1IDEyIDEwLjExIDEyIDEyIDEwLjEyXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAzLjUyIDEyIDIuNDYgMi40MyAxMiAzLjQ5IDEyIDEyIDMuNTJcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDYuOTYgMTIgNS45IDUuODggMTIgNi45NCAxMiAxMiA2Ljk2XCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKCdkb3QnKSA+IC0xOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTMuMDZcIiBoZWlnaHQ9XCIxNS4xXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjx0aXRsZT5zdHJpcGVzPC90aXRsZT48cGF0aCBkPVwiTTUuNDksMUExLjE2LDEuMTYsMCwxLDEsNC4zMy0uMTYsMS4xNiwxLjE2LDAsMCwxLDUuNDksMVpNNC4zMywzLjc3QTEuMTYsMS4xNiwwLDEsMCw1LjQ5LDQuOTMsMS4xNSwxLjE1LDAsMCwwLDQuMzMsMy43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw1LjQ5LDguODYsMS4xNSwxLjE1LDAsMCwwLDQuMzMsNy43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE1LDEuMTUsMCwwLDAsNC4zMywxMS42M1pNMTEuNS0uMTZBMS4xNiwxLjE2LDAsMSwwLDEyLjY2LDEsMS4xNiwxLjE2LDAsMCwwLDExLjUtLjE2Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSwzLjc3Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSw3LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDExLjYzWk03LjkyLTEuMTZBMS4xNiwxLjE2LDAsMCwwLDYuNzYsMCwxLjE2LDEuMTYsMCwwLDAsNy45MiwxLjE2LDEuMTYsMS4xNiwwLDAsMCw5LjA3LDAsMS4xNiwxLjE2LDAsMCwwLDcuOTItMS4xNlptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw5LjA3LDMuOTMsMS4xNiwxLjE2LDAsMCwwLDcuOTIsMi43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCw5LjA3LDcuODYsMS4xNiwxLjE2LDAsMCwwLDcuOTIsNi43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTUsMS4xNkExLjE2LDEuMTYsMCwwLDAsNy45MiwxMC42M1pNLjc1LTEuMTZBMS4xNiwxLjE2LDAsMCwwLS40MSwwLDEuMTYsMS4xNiwwLDAsMCwuNzUsMS4xNiwxLjE2LDEuMTYsMCwwLDAsMS45MSwwLDEuMTYsMS4xNiwwLDAsMCwuNzUtMS4xNlptMCwzLjkzQTEuMTYsMS4xNiwwLDEsMCwxLjkxLDMuOTMsMS4xNiwxLjE2LDAsMCwwLC43NSwyLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMCwwLS40MSw3Ljg2LDEuMTUsMS4xNSwwLDAsMCwuNzUsOSwxLjE1LDEuMTUsMCwwLDAsMS45MSw3Ljg2LDEuMTYsMS4xNiwwLDAsMCwuNzUsNi43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsLjc1LDEwLjYzWlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjcgMilcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBrZXlDb2xvciArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6IGtleS5wYXR0ZXJuID8gJ3BhdHRlcm4nIDogJ2NvbG9yJ1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2hhcGUnOlxuICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgICAgICB9KVxuICAgICAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAga2V5Q29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDoga2V5Q29sb3IgPyBrZXlDb2xvciA6IG51bGxcbiAgICAgIH1cblxuICAgICAgdmFyIHN2Z1xuXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgIHkxPVwiNC41XCIgeDI9XCI5XCIgeTI9XCI0LjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDEzNSlcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PHN0b3Agb2Zmc2V0PVwiMC4zMjVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjY3NVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PVwiMy4yNVwiIHk9XCIxLjc1XCIgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDQ1KVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIiAvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNzVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjMyNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwb2x5Z29uIHBvaW50cz1cIjYgMTAuMzkgMCAxMC4zOSAzIDUuMiA2IDAgOSA1LjIgMTIgMTAuMzkgNiAxMC4zOVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIiAvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3N0cm9rZT1cIiNmZmZmZmZcIicgOiAnJykgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiAndXJsKCNyYWluYm93KScpICtcbiAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN2ZzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHN2ZyksXG4gICAgICAgIGNsYXNzOiAnc2hhcGUnXG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAga2V5Q29sb3IgPSBrZXkuY29sb3JcblxuICAgICAgc3ZnID1cbiAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgIGljb25TaXplWzBdIC8gMiArXG4gICAgICAgICAgICAgICdcIiBjeT1cIicgK1xuICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAnXCIgcj1cIicgK1xuICAgICAgICAgICAgICAoaWNvblNpemVbMF0gKyBpY29uU2l6ZVsxXSkgLyA0ICtcbiAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yIHx8IGtleS5jb2xvcikgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICApXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6ICdjb2xvcidcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dGVybmFsTGluayB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRmVhdHVyZUV2ZW50cyhmZWF0dXJlLCBsYXllciwgbWFwKSB7XG4gIHZhciBldmVudE9wdGlvbnMgPSBtYXAub25lYWNoZmVhdHVyZVxuICAgID8gbWFwLm9uZWFjaGZlYXR1cmVcbiAgICA6IHtcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljaygpIHtcbiAgICAgICAgaGFuZGxlTGF5ZXJDbGljayhmZWF0dXJlLCBsYXllciwgbWFwLmxlYWZsZXQpXG4gICAgICB9XG4gICAgfVxuXG4gIE9iamVjdC5rZXlzKGV2ZW50T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbihsaXN0ZW5lcikge1xuICAgIGxheWVyLm9uKGxpc3RlbmVyLCBldmVudE9wdGlvbnNbbGlzdGVuZXJdKVxuICB9KVxuICB2YXIgcG9wdXBDb250ZW50ID1cbiAgICB0eXBlb2YgbWFwLmZvcm1hdHBvcHVwY29udGVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBtYXAuZm9ybWF0cG9wdXBjb250ZW50KGZlYXR1cmUsIG1hcClcbiAgICAgIDogZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcClcbiAgbGF5ZXIuYmluZFBvcHVwKHBvcHVwQ29udGVudClcbn1cblxuZnVuY3Rpb24gZm9ybWF0UG9wdXBDb250ZW50KGZlYXR1cmUsIG1hcCkge1xuICB2YXIgY29udGVudFxuICBjb250ZW50ID0gT2JqZWN0LmtleXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgIC5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllc1twXSkge1xuICAgICAgICBpZiAobWFwLnBvcHVwaGVhZGVycy5sZW5ndGggJiYgbWFwLnBvcHVwY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwaGVhZGVycy5pbmRleE9mKHApID4gLTEgJiZcbiAgICAgICAgICAgIG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgOiBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSBpZiAobWFwLnBvcHVwaGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwaGVhZGVycy5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSBpZiAobWFwLnBvcHVwY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3B1cEVudHJ5U3R5bGVcIj4nICsgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICsgJzwvZGl2PidcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cEhlYWRlclN0eWxlXCI+JyArXG4gICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbcF0gK1xuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24ocCkge1xuICAgICAgcmV0dXJuIHBcbiAgICB9KVxuICAgIC5qb2luKCcnKVxuICB2YXIgbGluayA9IGZlYXR1cmUucHJvcGVydGllcy5oeXBlcmxpbmsgfHwgZmVhdHVyZS5wcm9wZXJ0aWVzLmxpbmtcbiAgdmFyIGV4dGVybmFsTGlua0NvbnRlbnQgPVxuICAgIGxpbmsgJiYgbGluay50cmltKClcbiAgICAgID8gJzxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj48ZGl2IGNsYXNzPVwiaHlwZXJsaW5rIHBvcHVwRW50cnlTdHlsZVwiPjxhIGNsYXNzPVwidHJhbnNsYXRlXCIgaHJlZj0nICtcbiAgICAgICAgbGluay50cmltKCkgK1xuICAgICAgICAnIHRhcmdldD1cIl9ibGFua1wiPicgK1xuICAgICAgICBtYXAuZXh0ZXJuYWxMaW5rVGV4dCArXG4gICAgICAgICc8L2E+JyArXG4gICAgICAgIGV4dGVybmFsTGluayArXG4gICAgICAgICc8L2Rpdj4nXG4gICAgICA6ICcnXG4gIGNvbnRlbnQgKz0gZXh0ZXJuYWxMaW5rQ29udGVudFxuXG4gIGlmIChsYW5nKSB7XG4gICAgdmFyIHRyYW5zbGF0YWJsZVN0cmluZ3MgPSBPYmplY3Qua2V5cyhtYXAudHJhbnNsYXRpb25zKS5zb3J0KGZ1bmN0aW9uKFxuICAgICAgYSxcbiAgICAgIGJcbiAgICApIHtcbiAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoXG4gICAgfSlcbiAgICB0cmFuc2xhdGFibGVTdHJpbmdzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnXFxcXGIoJyArIFJlZ0V4cC5lc2NhcGUodCkgKyAnKScsICdnaScpXG4gICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY29udGVudFxufVxuXG5mdW5jdGlvbiBoYW5kbGVMYXllckNsaWNrKGZlYXR1cmUsIGxheWVyLCBsZWFmbGV0KSB7XG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuXG4gIGlmICghbGF5ZXIuX3ByZVNwaWRlcmZ5TGF0bG5nKSB7XG4gICAgT2JqZWN0LmtleXMobGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgIGlmIChsZWFmbGV0Ll9sYXllcnNbbF0udW5zcGlkZXJmeSkgbGVhZmxldC5fbGF5ZXJzW2xdLnVuc3BpZGVyZnkoKVxuICAgIH0pXG5cbiAgICBpZiAobGF5ZXIuX19wYXJlbnQpIHtcbiAgICAgIE9iamVjdC52YWx1ZXMobGF5ZXIuX19wYXJlbnQuX2dyb3VwLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgIGlmICh2Ll9ncm91cCAmJiB2Ll9ncm91cC5fc3BpZGVyZmllZCkgaXNTcGlkZXJmaWVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5oYW5kbGVMYXllckNsaWNrID0gaGFuZGxlTGF5ZXJDbGlja1xuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApIHtcbiAgdmFyIHBvaW50U3R5bGUsIGtleSwgc3R5bGVPcHRpb25zXG5cbiAgdmFyIEN1c3RvbUljb24gPSBMLkljb24uZXh0ZW5kKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uU2l6ZTogbWFwLmljb25zaXplIHx8IFsyMCwgMjBdLFxuICAgICAgaWNvbkFuY2hvcjogbWFwLmljb25zaXplXG4gICAgICAgID8gbWFwLmljb25zaXplIC8gNFxuICAgICAgICA6IG1hcC5pY29uYW5jaG9yXG4gICAgICAgICAgPyBtYXAuaWNvbmFuY2hvclxuICAgICAgICAgIDogWzUsIDVdXG4gICAgfVxuICB9KVxuXG4gIHZhciBub25Qb2ludFN0eWxlLCBrZXksIGRpdkljb25cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICB9KVxuXG4gIHZhciBmb3JtS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2Zvcm0nXG4gIH0pXG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciB0aGlzRm9ybUtleVdpZGdldCA9IHcudHlwZSA9PT0gJ2Zvcm0nID8gdyA6IGZvcm1LZXlXaWRnZXRcbiAgICB2YXIgdGhpc0NvbG9yS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnY29sb3InID8gdyA6IG51bGxcblxuICAgIHZhciBjb2xvcktleSA9IHRoaXNDb2xvcktleVdpZGdldFxuICAgICAgPyB0aGlzQ29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNDb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXkgPSB0aGlzRm9ybUtleVdpZGdldFxuICAgICAgPyB0aGlzRm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgIGlmICh0aGlzRm9ybUtleVdpZGdldCAmJiBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdKSB7XG4gICAgICB2YXIgZm9ybXMgPSB0aGlzRm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICB2YXIgaSA9IGZvcm1zLmluZGV4T2YoXG4gICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgKVxuICAgICAga2V5ID0gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcblxuICAgICAgaWYgKCFrZXkpIGJyZWFrXG5cbiAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgIGtleTogZm9ybUtleSxcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5LmZvcm0gPT09ICdkaXYnKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZlYXR1cmUucHJvcGVydGllc1t0aGlzRm9ybUtleVdpZGdldC5maWVsZF1cbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnficpLmxlbmd0aCA6IDBcblxuICAgICAgICBkaXZJY29uID0gTC5kaXZJY29uKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdpY29uLWRpdicsXG4gICAgICAgICAgaHRtbDpcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JyArXG4gICAgICAgICAgICBjb2xvciArXG4gICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICBjb3VudCArXG4gICAgICAgICAgICAnPC9zcGFuPidcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcG9pbnRTdHlsZSA9IGRpdkljb24gPyBkaXZJY29uIDogc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzQ29sb3JLZXlXaWRnZXQgJiZcbiAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgKSB7XG4gICAgICBrZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGNvbG9yS2V5LFxuICAgICAgICBjb2xvcjogY29sb3JLZXkuY29sb3IsXG4gICAgICAgIG1hcDogbWFwLFxuICAgICAgICBmZWF0dXJlOiBmZWF0dXJlXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdmcgPVxuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNVwiIGZpbGw9XCInICtcbiAgICAgICAgY29sb3IgK1xuICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgIHBvaW50U3R5bGUgPSB7XG4gICAgICAgIGNsYXNzOiAnZGVmYXVsdCcsXG4gICAgICAgIHN2ZzogZW5jb2RlVVJJKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpY29uVXJsID0gcG9pbnRTdHlsZS5zdmdcbiAgICB2YXIgaWNvbiA9IG5ldyBDdXN0b21JY29uKHtcbiAgICAgIGljb25Vcmw6IGljb25VcmxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIEwubWFya2VyKGxhdGxuZywge1xuICAgIGljb246IGRpdkljb24gPyBkaXZJY29uIDogaWNvblxuICB9KVxufVxuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5pbXBvcnQgeyBsaW5lV2VpZ2h0cywgbGluZURhc2hBcnJheXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCBpbmRleCkge1xuICB2YXIgbm9uUG9pbnRTdHlsZSxcbiAgICBjb2xvcnMgPSBbXSxcbiAgICBmb3JtcyA9IFtdLFxuICAgIHNvcnQgPSBbJ2Zvcm0nLCAnY29sb3InXVxuXG4gIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgIGlmICghdy5rZXlzKSByZXR1cm5cbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnY29sb3InXG4gIH0pXG5cbiAgdmFyIGZvcm1LZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnZm9ybSdcbiAgfSlcblxuICBmb3IgKGxldCB3IG9mIG1hcC53aWRnZXRzKSB7XG4gICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXRcbiAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXlGb3JtID0gZm9ybUtleVdpZGdldFxuICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGNvbG9yS2V5Rm9ybSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm0gPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYykge1xuICAgICAgICByZXR1cm4gYy5mb3JtXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAoZm9ybUtleVdpZGdldCAmJiBmb3JtID09PSAnbGluZScpIHtcbiAgICAgIGZvcm1zID0gZm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICB9KVxuICAgICAgZm9ybXMuZm9yRWFjaChmdW5jdGlvbihmLCBpKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29sb3JzLnB1c2goWyd0cmFuc3BhcmVudCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFtudWxsLCBkZWZhdWx0Q29sb3JdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnIzAwMDAwMCcsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsnI2ZmZmZmZicsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgbnVsbF0pXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoZm9ybXMubGVuZ3RoICYmIGZvcm1LZXlGb3JtID09PSAnbGluZScpIHx8XG4gICAgICAoZm9ybXMubGVuZ3RoICYmIGNvbG9yS2V5Rm9ybSA9PT0gJ2xpbmUnKVxuICAgICkge1xuICAgICAgaWYgKGZvcm1LZXlXaWRnZXQpIHtcbiAgICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmb3JtS2V5V2lkZ2V0LmZpZWxkXSlcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgY29sb3JzW2ldW2luZGV4XSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyAnI2NhZDJkMydcbiAgICAgICAgICAgICAgICA6IGNvbG9yc1tpXVtpbmRleF0gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gY29sb3JzW2ldW2luZGV4XVxuICAgICAgICAgICAgICAgICAgOiBjb2xvcixcbiAgICAgICAgICAgIHdlaWdodDogbGluZVdlaWdodHNbaV1baW5kZXhdLFxuICAgICAgICAgICAgbGluZUNhcDogJ3NxdWFyZScsXG4gICAgICAgICAgICBkYXNoQXJyYXk6IGxpbmVEYXNoQXJyYXlzW2ldID8gbGluZURhc2hBcnJheXNbaV1baW5kZXhdIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm9ybUtleUZvcm0gPT09ICdsaW5lJyB8fCBjb2xvcktleUZvcm0gPT09ICdsaW5lJykge1xuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnLFxuICAgICAgICBkYXNoQXJyYXk6ICczLDcnXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2xvcktleSAmJiBjb2xvcktleS5mb3JtID09PSAncGF0dGVybicpIHtcbiAgICAgIHZhciBwYXR0ZXJuXG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ3N0cmlwZScpID4gLTE6XG4gICAgICAgIHZhciBwYXR0ZXJuT3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IDMsXG4gICAgICAgICAgc3BhY2VXZWlnaHQ6IDMsXG4gICAgICAgICAgY29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bMV0sXG4gICAgICAgICAgc3BhY2VDb2xvcjogY29sb3JLZXkucGF0dGVybltjb2xvcktleS5wYXR0ZXJuLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIHNwYWNlT3BhY2l0eTogMSxcbiAgICAgICAgICBhbmdsZTogNDVcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gbmV3IEwuU3RyaXBlUGF0dGVybihwYXR0ZXJuT3B0aW9ucylcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoJ2RvdCcpID4gLTE6XG4gICAgICAgIHZhciBzaGFwZU9wdGlvbnMgPSB7XG4gICAgICAgICAgeDogNCxcbiAgICAgICAgICB5OiA0LFxuICAgICAgICAgIHJhZGl1czogMixcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIHN0cm9rZTogZmFsc2UsXG4gICAgICAgICAgZmlsbENvbG9yOiBjb2xvcktleS5wYXR0ZXJuW2NvbG9yS2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDFcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2hhcGUgPSBuZXcgTC5QYXR0ZXJuQ2lyY2xlKHNoYXBlT3B0aW9ucylcbiAgICAgICAgdmFyIHBhdHRlcm5PcHRpb25zID0ge1xuICAgICAgICAgIHdpZHRoOiA4LFxuICAgICAgICAgIGhlaWdodDogOFxuICAgICAgICB9XG4gICAgICAgIHBhdHRlcm4gPSBuZXcgTC5QYXR0ZXJuKHBhdHRlcm5PcHRpb25zKVxuICAgICAgICBwYXR0ZXJuLmFkZFNoYXBlKHNoYXBlKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBwYXR0ZXJuLmFkZFRvKG1hcC5sZWFmbGV0KVxuICAgICAgbm9uUG9pbnRTdHlsZSA9IHtcbiAgICAgICAgZmlsbFBhdHRlcm46IHBhdHRlcm4gPyBwYXR0ZXJuIDogbnVsbCxcbiAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgY29sb3I6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuNyxcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaW5lQ29sb3JcbiAgICAgIHZhciBsaW5lV2VpZ2h0XG4gICAgICB2YXIgbGluZU9wYWNpdHlcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xOlxuICAgICAgICBsaW5lQ29sb3IgPSBjb2xvclxuICAgICAgICAgID8gY2hyb21hKGNvbG9yKVxuICAgICAgICAgICAgLmJyaWdodGVuKClcbiAgICAgICAgICAgIC5oZXgoKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgICBsaW5lT3BhY2l0eSA9IDFcbiAgICAgICAgbGluZVdlaWdodCA9IDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdwb2x5Z29uJykgPiAtMTpcbiAgICAgICAgbGluZUNvbG9yID0gZGVmYXVsdENvbG9yXG4gICAgICAgIGxpbmVPcGFjaXR5ID0gMC41XG4gICAgICAgIGxpbmVXZWlnaHQgPSAyXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxuICAgICAgICBjb2xvcjogbGluZUNvbG9yLFxuICAgICAgICBmaWxsT3BhY2l0eTogMC43LFxuICAgICAgICBvcGFjaXR5OiBsaW5lT3BhY2l0eSxcbiAgICAgICAgd2VpZ2h0OiBsaW5lV2VpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vblBvaW50U3R5bGUpIHJldHVybiBub25Qb2ludFN0eWxlXG4gIH1cbn1cbiIsImltcG9ydCBoYW5kbGVGZWF0dXJlRXZlbnRzIGZyb20gJy4vaGFuZGxlRmVhdHVyZUV2ZW50cy5qcydcbmltcG9ydCBzdHlsZVBvaW50IGZyb20gJy4vc3R5bGVQb2ludC5qcydcbmltcG9ydCBzdHlsZU5vblBvaW50IGZyb20gJy4vc3R5bGVOb25Qb2ludC5qcydcbndpbmRvdy5oYW5kbGVGZWF0dXJlRXZlbnRzID0gaGFuZGxlRmVhdHVyZUV2ZW50c1xud2luZG93LnN0eWxlUG9pbnQgPSBzdHlsZVBvaW50XG53aW5kb3cuc3R5bGVOb25Qb2ludCA9IHN0eWxlTm9uUG9pbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUdlb0pzb25PcHRpb25zKFxuICBtYXAsXG4gIGNvbG9yS2V5V2lkZ2V0cyxcbiAgZm9ybUtleVdpZGdldHNcbikge1xuICBmdW5jdGlvbiBmaWx0ZXIoZmVhdHVyZSkge1xuICAgIHJldHVybiBtYXAuZmlsdGVyc1xuICAgICAgLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmKGZlYXR1cmUpXG4gICAgICB9KVxuICAgICAgLmV2ZXJ5KGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYgIT09IGZhbHNlXG4gICAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gb25FYWNoRmVhdHVyZShmZWF0dXJlLCBsYXllcikge1xuICAgIGhhbmRsZUZlYXR1cmVFdmVudHMoZmVhdHVyZSwgbGF5ZXIsIG1hcClcbiAgfVxuXG4gIHZhciBiYWNrZ3JvdW5kT3B0aW9ucyA9IHtcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBvbkVhY2hGZWF0dXJlOiBvbkVhY2hGZWF0dXJlLFxuICAgIHBvaW50VG9MYXllcjpcbiAgICAgIG1hcC5wb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApXG4gICAgICB9LFxuICAgIHN0eWxlOlxuICAgICAgbWFwLm5vblBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCAwKVxuICAgICAgfVxuICB9XG4gIHZhciBmb3JlZ3JvdW5kT3B0aW9ucyA9IHtcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBvbkVhY2hGZWF0dXJlOiBvbkVhY2hGZWF0dXJlLFxuICAgIHBvaW50VG9MYXllcjpcbiAgICAgIG1hcC5wb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApXG4gICAgICB9LFxuICAgIHN0eWxlOlxuICAgICAgbWFwLm5vblBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlTm9uUG9pbnQoZmVhdHVyZSwgbWFwLCAxKVxuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIFtiYWNrZ3JvdW5kT3B0aW9ucywgZm9yZWdyb3VuZE9wdGlvbnNdXG59XG4iLCJpbXBvcnQgbWFrZUdlb0pzb25PcHRpb25zIGZyb20gJy4vbWFrZUdlb0pzb25PcHRpb25zLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTGF5ZXJzKG1hcCkge1xuICB2YXIgY29sb3JLZXlXaWRnZXRzID0gW10sXG4gICAgZm9ybUtleVdpZGdldHMgPSBbXVxuXG4gIGlmIChtYXAud2lkZ2V0cykge1xuICAgIGNvbG9yS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgfSlcbiAgICBmb3JtS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnZm9ybSdcbiAgICB9KVxuICB9XG5cbiAgdmFyIGdlb0pzb25PcHRpb25zID0gbWFwLmdlb2pzb25vcHRpb25zXG4gICAgPyBtYXAuZ2VvanNvbm9wdGlvbnMobWFwKVxuICAgIDogbWFrZUdlb0pzb25PcHRpb25zKG1hcClcbiAgbWFwLmpzb24uZm9yRWFjaChmdW5jdGlvbihqc29uLCBpKSB7XG4gICAgdmFyIGNsdXN0ZXJDb2xvciwgY29sb3JLZXlXaWRnZXRcblxuICAgIGlmIChjb2xvcktleVdpZGdldHMubGVuZ3RoKSB7XG4gICAgICB2YXIgY29sb3JLZXlzID0gY29sb3JLZXlXaWRnZXRzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24od2lkZ2V0KSB7XG4gICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0ganNvbi5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzW3dpZGdldC5maWVsZF1cblxuICAgICAgICAgIHZhciBrZXkgPSB3aWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBjb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0ID0gd2lkZ2V0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihjb2xvcktleSkge1xuICAgICAgICAgIHJldHVybiBjb2xvcktleVxuICAgICAgICB9KVxuXG4gICAgICBjbHVzdGVyQ29sb3IgPSBjb2xvcktleXNbMF0gPyBjb2xvcktleXNbMF0uY29sb3IgOiAnIzAwMDAwMCdcbiAgICB9IGVsc2Uge1xuICAgICAgY2x1c3RlckNvbG9yID0gJyMwMDAwMDAnXG4gICAgfVxuXG4gICAgdmFyIGFsbFBvaW50cyA9IGpzb24uZmVhdHVyZXMuZXZlcnkoZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIGZlYXR1cmUuZ2VvbWV0cnkgJiYgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2ludCdcbiAgICB9KVxuXG4gICAgbWFwLmdyb3Vwcy5wdXNoKFxuICAgICAgbmV3IEwuTWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgICAgc2hvd0NvdmVyYWdlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIHpvb21Ub0JvdW5kc09uQ2xpY2s6IGZhbHNlLFxuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOlxuICAgICAgICAgIGFsbFBvaW50cyAmJiBtYXAuY2x1c3RlcmRpc3RhbmNlID8gbWFwLmNsdXN0ZXJkaXN0YW5jZSA6IE5hTixcbiAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3Rlcikge1xuICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1ncm91cCcsXG4gICAgICAgICAgICBodG1sOlxuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCcgK1xuICAgICAgICAgICAgICBjbHVzdGVyQ29sb3IgK1xuICAgICAgICAgICAgICAnOyBjb2xvcjonICtcbiAgICAgICAgICAgICAgY2x1c3RlckNvbG9yICtcbiAgICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgICBjbHVzdGVyLmdldENoaWxkQ291bnQoKSArXG4gICAgICAgICAgICAgICc8L3NwYW4+J1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuXG4gICAgdmFyIGhhc0xpbmVGZWF0dXJlcyA9IGpzb24uZmVhdHVyZXMuc29tZShmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5ICYmXG4gICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGdlb0pzb25PcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgIGpzb24uZmVhdHVyZXMgPSBqc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiBiLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICBhLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB2YXIgZ2VvSnNvbiA9IEwuZ2VvSnNvbihqc29uLCBvcHRpb24pXG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFoYXNMaW5lRmVhdHVyZXMgJiYgaW5kZXggJSAyID09PSAwKSB8fFxuICAgICAgICBoYXNMaW5lRmVhdHVyZXMgfHxcbiAgICAgICAgbWFwLmdlb2pzb25vcHRpb25zXG4gICAgICApIHtcbiAgICAgICAgbWFwLmdyb3Vwc1tpXS5hZGRMYXllcihnZW9Kc29uKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAobWFwLmdyb3Vwc1tpXS5nZXRMYXllcnMoKS5sZW5ndGgpIHtcbiAgICAgIG1hcC5sZWFmbGV0LmFkZExheWVyKG1hcC5ncm91cHNbaV0pXG4gICAgICBtYXAuZ3JvdXBzW2ldLm9uKCdjbHVzdGVyY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGhhbmRsZUNsdXN0ZXJDbGljayhlLCBtYXAsIGkpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2x1c3RlckNsaWNrKGUsIG1hcCwgaSkge1xuICBtYXAubGVhZmxldC5fbGF5ZXJzW2UubGF5ZXIuX2xlYWZsZXRfaWRdLnNwaWRlcmZ5KClcblxuICBPYmplY3Qua2V5cyhtYXAubGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGxheWVyLCBpKSB7XG4gICAgaWYgKHBhcnNlSW50KGxheWVyLCAxMCkgIT09IGUubGF5ZXIuX2xlYWZsZXRfaWQpIHtcbiAgICAgIGlmIChtYXAubGVhZmxldC5fbGF5ZXJzW2xheWVyXS51bnNwaWRlcmZ5KVxuICAgICAgICBtYXAubGVhZmxldC5fbGF5ZXJzW2xheWVyXS51bnNwaWRlcmZ5KClcbiAgICB9XG4gIH0pXG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuICBPYmplY3QudmFsdWVzKG1hcC5ncm91cHNbaV0uX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAodi5fZ3JvdXAgJiYgdi5fZ3JvdXAuX3NwaWRlcmZpZWQpIGlzU3BpZGVyZmllZCA9IHRydWVcbiAgfSlcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgfVxuICApXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgIH1cbiAgKVxuICBPYmplY3QudmFsdWVzKG1hcC5ncm91cHNbaV0uX2ZlYXR1cmVHcm91cC5fbGF5ZXJzKS5maWx0ZXIoZnVuY3Rpb24odikge1xuICAgIGUubGF5ZXJcbiAgICAgIC5nZXRBbGxDaGlsZE1hcmtlcnMoKVxuICAgICAgLm1hcChmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiBtLmdldEVsZW1lbnQoKVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbVxuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIChtLnN0eWxlLm9wYWNpdHkgPSAxKVxuICAgICAgfSlcbiAgfSlcbn1cbiIsImltcG9ydCB7IGNvbnZlcnRUeXBlLCBjcmVhdGVDb2xvclNjYWxlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMYW5ndWFnZURhdGEoZGF0YSkge1xuICB2YXIgbGFuZ3VhZ2VEYXRhID0ge31cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIHZhciBrZXlcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCBpKSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoJ2dzeCQnKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoJ2dzeCQnLCAnJylcblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gJ2VuJykge1xuICAgICAgICAgIGtleSA9IHJvd1tjb2x1bW5dWyckdCddXG4gICAgICAgICAgbGFuZ3VhZ2VEYXRhW2tleV0gPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IGxhbmcpIHtcbiAgICAgICAgICBsYW5ndWFnZURhdGFba2V5XSA9IHJvd1tjb2x1bW5dWyckdCddXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gbGFuZ3VhZ2VEYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxlZ2VuZERhdGEob3B0aW9ucywganNvbiwgc3R5bGUpIHtcbiAgdmFyIGNvbG9yU2NhbGUgPSBjcmVhdGVDb2xvclNjYWxlKGpzb24ubGVuZ3RoKVxuICB2YXIgbGVnZW5kSXRlbXMgPSBbXVxuICBqc29uLmZvckVhY2goZnVuY3Rpb24ocm93LCB4KSB7XG4gICAgdmFyIGRhdGEgPSB7fVxuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIHkpIHtcbiAgICAgIGlmIChjb2x1bW4uaW5kZXhPZignZ3N4JCcpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZSgnZ3N4JCcsICcnKVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHJvd1tjb2x1bW5dWyckdCddLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBkYXRhLmtleSA9IGtleVxuICAgICAgICAgIGRhdGEubGFiZWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMF1dWyckdCddXG4gICAgICAgICAgZGF0YS52YWx1ZSA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bJyR0J11cbiAgICAgICAgICBkYXRhLmdyb3VwID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDJdXVsnJHQnXSlcbiAgICAgICAgICBkYXRhLnNlbGVjdGVkID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDNdXVsnJHQnXSlcbiAgICAgICAgICB2YXIgY29sb3JWYWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNF1dWyckdCddXG4gICAgICAgICAgZGF0YS5mb3JtID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDVdXVsnJHQnXVxuICAgICAgICAgIGRhdGEuY29sb3IgPSBjb2xvclZhbFxuICAgICAgICAgICAgPyBjb2xvclZhbFxuICAgICAgICAgICAgOiBkYXRhLmZvcm0gPT09ICdsaW5lJ1xuICAgICAgICAgICAgICA/IGRlZmF1bHRDb2xvclxuICAgICAgICAgICAgICA6IGNvbG9yU2NhbGVbeF1cbiAgICAgICAgICBkYXRhLmljb24gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNl1dWyckdCddXG4gICAgICAgICAgZGF0YS5wYXR0ZXJuID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDddXVsnJHQnXS5zcGxpdCgnLCcpXG5cbiAgICAgICAgICBpZiAob3B0aW9ucy50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEubGFiZWwgPSBvcHRpb25zLnRyYW5zbGF0aW9uc1tkYXRhLmxhYmVsXVxuICAgICAgICAgICAgZGF0YS5ncm91cCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEuZ3JvdXBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVnZW5kSXRlbXMucHVzaChkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIGxlZ2VuZEl0ZW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1ldGFEYXRhKGpzb24pIHtcbiAgdmFyIGRhdGEgPSB7fVxuICBqc29uLmZvckVhY2goZnVuY3Rpb24ocm93LCB4KSB7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgeSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKCdnc3gkJykgPiAtMSkge1xuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5yZXBsYWNlKCdnc3gkJywgJycpXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICB2YXIga2V5ID0gcm93W2NvbHVtbl1bJyR0J10udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICAgIGRhdGFba2V5XSA9IGRhdGFba2V5XSB8fCB7fVxuICAgICAgICAgIGRhdGFba2V5XSA9IGNvbnZlcnRUeXBlKHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bJyR0J10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXaWRnZXREYXRhKG1ldGFEYXRhKSB7XG4gIHZhciB3aWRnZXRzID0gW11cblxuICBmdW5jdGlvbiBwcm9jZXNzKGssIGluZGV4LCBwcm9wZXJ0eSkge1xuICAgIGlmIChrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9wZXJ0eSkgPiAtMSlcbiAgICAgIHdpZGdldHNbaW5kZXggLSAxXVtwcm9wZXJ0eV0gPSBjb252ZXJ0VHlwZShtZXRhRGF0YVtrXSlcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ2ZpZWxkJyxcbiAgICAnZ3JvdXBpbmcnLFxuICAgICdpbnN0cnVjdGlvbnMnLFxuICAgICdtYXhpbXVtJyxcbiAgICAndHlwZScsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3N0eWxlJ1xuICBdXG4gIE9iamVjdC5rZXlzKG1ldGFEYXRhKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aWRnZXQnKSA+IC0xXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIgaW5kZXggPSBrLm1hdGNoKC9cXGQrLylbMF1cbiAgICAgIHdpZGdldHNbaW5kZXggLSAxXSA9IHdpZGdldHNbaW5kZXggLSAxXSB8fCB7fVxuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgIHByb2Nlc3MoaywgaW5kZXgsIHByb3BlcnR5KVxuICAgICAgfSlcbiAgICB9KVxuICB3aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgaSkge1xuICAgIHcuZmllbGQgPSB3LmZpZWxkLnJlcGxhY2UoLyAvZywgJ18nKVxuICAgIHcuaWQgPSBpXG4gIH0pXG4gIHJldHVybiB3aWRnZXRzXG59XG4iLCJ2YXIgbWFwSWQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbU1hcChjb250YWluZXIsIHByb3BlcnRpZXMpIHtcbiAgdGhpcy5pZCA9IG1hcElkKytcbiAgdGhpcy5maWx0ZXJzID0gW11cbiAgdGhpcy5ncm91cHMgPSBbXVxuICB0aGlzLmpzb24gPSBbXVxuICB0aGlzLmxlYWZsZXRcblxuICB2YXIgX3RoaXMgPSB0aGlzXG5cbiAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIF90aGlzW3Byb3BlcnR5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJyldID0gcHJvcGVydGllc1twcm9wZXJ0eV1cbiAgfSlcbiAgX3RoaXMucG9wdXBjb250ZW50ID1cbiAgICBfdGhpcy5wb3B1cGNvbnRlbnQgJiYgdHlwZW9mIF90aGlzLnBvcHVwY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgID8gX3RoaXMucG9wdXBjb250ZW50LnNwbGl0KCcsJylcbiAgICAgIDogX3RoaXMucG9wdXBjb250ZW50ICYmIHRoaXMucG9wdXBjb250ZW50ID09PSAnb2JqZWN0J1xuICAgICAgICA/IF90aGlzLnBvcHVwY29udGVudFxuICAgICAgICA6IFtdXG4gIF90aGlzLnBvcHVwaGVhZGVycyA9XG4gICAgX3RoaXMucG9wdXBoZWFkZXJzICYmIHR5cGVvZiBfdGhpcy5wb3B1cGhlYWRlcnMgPT09ICdzdHJpbmcnXG4gICAgICA/IF90aGlzLnBvcHVwaGVhZGVycy5zcGxpdCgnLCcpXG4gICAgICA6IF90aGlzLnBvcHVwaGVhZGVycyAmJiBfdGhpcy5wb3B1cGhlYWRlcnMgPT09ICdvYmplY3QnXG4gICAgICAgID8gX3RoaXMucG9wdXBoZWFkZXJzXG4gICAgICAgIDogW11cbiAgQ3VzdG9tTWFwLmFsbCA9IEN1c3RvbU1hcC5hbGwgfHwgW11cbiAgQ3VzdG9tTWFwLmFsbC5wdXNoKHRoaXMpXG5cbiAgX3RoaXMucmVzZXRGaWx0ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMuZmlsdGVycyA9IFtdXG4gIH1cblxuICBfdGhpcy5yZW1vdmVHcm91cHMgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgX3RoaXMubGVhZmxldC5yZW1vdmVMYXllcihncm91cClcbiAgICB9KVxuXG4gICAgX3RoaXMuZ3JvdXBzID0gW11cbiAgfVxuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMubGVhZmxldCA9IEwubWFwKGNvbnRhaW5lciwge1xuICAgICAgbWluWm9vbTogX3RoaXMubWluem9vbSB8fCBudWxsLFxuICAgICAgbWF4Wm9vbTogX3RoaXMubWF4em9vbSB8fCAyMCxcbiAgICAgIG1heEJvdW5kczogX3RoaXMubWF4Ym91bmRzIHx8IFtfdGhpcy5zd2JvdW5kcywgX3RoaXMubmVib3VuZHNdLFxuICAgICAgc2Nyb2xsV2hlZWxab29tOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sOlxuICAgICAgICAhX3RoaXMuaGFzT3duUHJvcGVydHkoJ3pvb21zbGlkZXInKSB8fCBfdGhpcy56b29tc2xpZGVyID8gZmFsc2UgOiB0cnVlLFxuICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAoX3RoaXMubG9hZGV2ZW50KSBfdGhpcy5sZWFmbGV0Lm9uKCdsb2FkJywgX3RoaXMubG9hZGV2ZW50KVxuICAgIGlmIChfdGhpcy5hZGRldmVudCkgX3RoaXMubGVhZmxldC5vbignbGF5ZXJhZGQnLCBfdGhpcy5hZGRldmVudClcbiAgICB0aGlzLmxlYWZsZXQuc2V0VmlldyhfdGhpcy5jZW50ZXIsIF90aGlzLnpvb20gfHwgMilcbiAgICBMLnRpbGVMYXllcihcbiAgICAgICdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9pbGFibWVkaWEvJyArXG4gICAgICAgIF90aGlzLm1hcGJveHN0eWxlICtcbiAgICAgICAgJy90aWxlcy8yNTYve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYVd4aFltMWxaR2xoSWl3aVlTSTZJbU5wYkhZeWNYWjJiVEF4YWpaMWMydHpkV1UxYjNneWRuWWlmUS5BSHhsOHBQWnNqc3Fvejk1LTYwNG53JyxcbiAgICAgIHt9XG4gICAgKS5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuXG4gICAgaWYgKCFfdGhpcy5oYXNPd25Qcm9wZXJ0eSgnem9vbXNsaWRlcicpIHx8IF90aGlzLnpvb21zbGlkZXIpIHtcbiAgICAgIEwuY29udHJvbC56b29tc2xpZGVyKCkuYWRkVG8oX3RoaXMubGVhZmxldClcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMuZnVsbHNjcmVlbikge1xuICAgICAgd2luZG93LmZ1bGxzY3JlZW4gPSBuZXcgTC5Db250cm9sLkZ1bGxzY3JlZW4oKVxuXG4gICAgICBfdGhpcy5sZWFmbGV0LmFkZENvbnRyb2wod2luZG93LmZ1bGxzY3JlZW4pXG4gICAgfVxuXG4gICAgTC5jb250cm9sXG4gICAgICAuYXR0cmlidXRpb24oe1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnXG4gICAgICB9KVxuICAgICAgLnNldFByZWZpeChfdGhpcy5hdHRyaWJ1dGlvbilcbiAgICAgIC5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuXG4gICAgX3RoaXMucmVzZXRGaWx0ZXJzKClcblxuICAgIHJldHVybiBfdGhpc1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlRG9jdW1lbnROb2RlcyhvcHRpb25zKSB7XG4gIHZhciBuZXdTZWN0aW9uSFRNTCA9ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8c2VjdGlvbiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnXCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGRpdiBpZD1cIicgKyBvcHRpb25zLnNsdWcgKyAnX19tYXBcIiBjbGFzcz1cIm1hcFwiPjwvZGl2PidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxhc2lkZSBjbGFzcz1cInRvb2xib3hcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9IG9wdGlvbnMudGl0bGVcbiAgICA/ICc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZCBjbGFzcz1cInVpIG1vYmlsZS1vbmx5XCI+PGRpdiBjbGFzcz1cImhhbWJ1cmdlciBtb2JpbGUtb25seVwiPjxkaXYgY2xhc3M9XCJpY29uXCI+IDxzcGFuPjwvc3Bhbj4gPHNwYW4+PC9zcGFuPiA8c3Bhbj48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cIm1lbnUgdHJhbnNsYXRlXCI+PC9kaXY+PC9kaXY+J1xuICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxkaXYgY2xhc3M9XCJib3hcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9XG4gICAgb3B0aW9ucy50aXRsZSB8fCBvcHRpb25zLmxvZ28gfHwgb3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgPyAnPGhlYWRlciAgY2xhc3M9XCJ0cmFuc2xhdGVcIj4gPGgxPjxhIHRhcmdldD1cIl9ibGFua1wiIGlkPVwibG9nb1wiPjwvYT48L2gxPiAgPHAgY2xhc3M9XCJ0cmFuc2xhdGVcIj48L3A+PC9oZWFkZXI+J1xuICAgICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPVxuICAgIChvcHRpb25zLmluc3RydWN0aW9uc1xuICAgICAgPyAnPHAgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICsgb3B0aW9ucy5pbnN0cnVjdGlvbnMgKyAnPC9wPidcbiAgICAgIDogJycpICtcbiAgICAnPGRpdiBpZD1cImNvbnRyb2xzXCI+PGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PjwvZGl2Pjxmb290ZXI+PGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PjwvZm9vdGVyPjwvZGl2PjwvYXNpZGU+J1xuICBuZXdTZWN0aW9uSFRNTCArPSBvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnRcbiAgICA/ICc8YnV0dG9uIGlkPVwiJyArXG4gICAgICBvcHRpb25zLnNsdWcgK1xuICAgICAgJ19fYWJvdXRcIiBjbGFzcz1cImFib3V0LXRyaWdnZXJcIj5BQk9VVCBUSElTIE1BUDwvYnV0dG9uPidcbiAgICA6ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8L3NlY3Rpb24+J1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBuZXdTZWN0aW9uSFRNTFxuXG4gIGlmIChvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnQpIHtcbiAgICB2YXIgbmV3RGlhbG9nSFRNTCA9ICcnXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPGRpdiBjbGFzcz1cImRpYWxvZ1wiIGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdfX2RpYWxvZ1wiPidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpdiBjbGFzcz1cImRpYWxvZy1vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtYTExeS1kaWFsb2ctaGlkZT48L2Rpdj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaWFsb2cgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiIGFyaWEtbGFiZWxsZWRieT1cImRpYWxvZ1RpdGxlXCIgYXJpYS1kZXNjcmliZWRieT1cImRpYWxvZ0NvbnRlbnRcIj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxidXR0b24gZGF0YS1hMTF5LWRpYWxvZy1oaWRlIGNsYXNzPVwiZGlhbG9nLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIHRoaXMgZGlhbG9nIHdpbmRvd1wiPiZ0aW1lczs8L2J1dHRvbj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSBvcHRpb25zLnRpdGxlY2FyZHRpdGxlXG4gICAgICA/ICc8aDEgaWQ9XCJkaWFsb2dUaXRsZVwiPicgKyBvcHRpb25zLnRpdGxlY2FyZHRpdGxlICsgJzwvaDE+J1xuICAgICAgOiAnJ1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGl2IGlkPVwiZGlhbG9nQ29udGVudFwiPicgKyBvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnQgKyAnPC9kaXY+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzwvZGlhbG9nPidcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8L2Rpdj4nXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbmV3RGlhbG9nSFRNTFxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHZhciBkaWFsb2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuc2x1ZyArICdfX2RpYWxvZycpXG4gICAgdmFyIG1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zLnNsdWcnKVxuICAgIHZhciBkaWFsb2dUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5zbHVnICsgJ19fYWJvdXQnKVxuXG4gICAgdmFyIGRpYWxvZ0JveCA9IG5ldyBBMTF5RGlhbG9nKGRpYWxvZ0VsLCBtYWluRWwpXG4gICAgdmFyIGRpYWxvZyA9IGRpYWxvZ0JveC5kaWFsb2dcbiAgICBkaWFsb2dCb3guc2hvdygpXG4gICAgZGlhbG9nQm94Lm9uKCdoaWRlJywgZnVuY3Rpb24oZGlhbG9nRWwpIHtcbiAgICAgIGRpYWxvZ1RyaWdnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuICAgIGRpYWxvZ0JveC5vbignc2hvdycsIGZ1bmN0aW9uKGRpYWxvZ0VsKSB7XG4gICAgICBkaWFsb2dUcmlnZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9KVxuICAgIGRpYWxvZ1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGRpYWxvZ0JveC5zaG93KClcbiAgICB9KVxuICB9XG5cbiAgZG9jdW1lbnQudGl0bGUgPSBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICB2YXIgbWV0YUxvY2FsZU9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFMb2NhbGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmxvY2FsZScpXG4gIG1ldGFMb2NhbGVPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnZW5fVVMnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFMb2NhbGVPRylcbiAgdmFyIG1ldGFUeXBlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVR5cGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOnR5cGUnKVxuICBtZXRhVHlwZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdhcnRpY2xlJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVHlwZU9HKVxuICB2YXIgbWV0YVdpZHRoT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVdpZHRoT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZTp3aWR0aCcpXG4gIG1ldGFXaWR0aE9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICcyMDAwJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhV2lkdGhPRylcbiAgdmFyIG1ldGFIZWlnaHRPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSGVpZ2h0T0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZTpoZWlnaHQnKVxuICBtZXRhSGVpZ2h0T0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJzEzMzMnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFIZWlnaHRPRylcbiAgdmFyIG1ldGFUd2l0dGVyQ2FyZE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUd2l0dGVyQ2FyZE9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjpjYXJkJylcbiAgbWV0YVR3aXR0ZXJDYXJkT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3N1bW1hcnknKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUd2l0dGVyQ2FyZE9HKVxuICB2YXIgbWV0YVRpdGxlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVRpdGxlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzp0aXRsZScpXG4gIG1ldGFUaXRsZU9HLnNldEF0dHJpYnV0ZShcbiAgICAnY29udGVudCcsXG4gICAgb3B0aW9ucy50aXRsZSArICcgfCBDU0lTICcgKyBvcHRpb25zLnByb2dyYW1cbiAgKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUaXRsZU9HKVxuICB2YXIgbWV0YVRpdGxlVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVGl0bGVUd2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjp0aXRsZScpXG4gIG1ldGFUaXRsZVR3aXR0ZXIuc2V0QXR0cmlidXRlKFxuICAgICdjb250ZW50JyxcbiAgICBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICApXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVRpdGxlVHdpdHRlcilcbiAgdmFyIG1ldGFEZXNjcmlwdGlvbk9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFEZXNjcmlwdGlvbk9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6ZGVzY3JpcHRpb24nKVxuICBtZXRhRGVzY3JpcHRpb25PRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLmRlc2NyaXB0aW9uKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFEZXNjcmlwdGlvbk9HKVxuICB2YXIgbWV0YURlc2NyaXB0aW9uVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjpkZXNjcmlwdGlvbicpXG4gIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5kZXNjcmlwdGlvbilcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRGVzY3JpcHRpb25Ud2l0dGVyKVxuICB2YXIgbWV0YUltYWdlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUltYWdlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZScpXG4gIG1ldGFJbWFnZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuc2NyZWVuc2hvdClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSW1hZ2VPRylcbiAgdmFyIG1ldGFJbWFnZVR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUltYWdlVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ3R3aXR0ZXI6aW1hZ2UnKVxuICBtZXRhSW1hZ2VUd2l0dGVyLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuc2NyZWVuc2hvdClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSW1hZ2VUd2l0dGVyKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1lbnUnKS5pbm5lclRleHQgPVxuICAgICAgb3B0aW9ucy50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgaDEnKS5pbm5lckhUTUwgKz1cbiAgICAgIG9wdGlvbnMudGl0bGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgYSdcbiAgICApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG9wdGlvbnMubG9nbyA/ICd1cmwoJyArIG9wdGlvbnMubG9nbyArICcpJyA6ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyIGEnXG4gICAgKS5ocmVmID0gb3B0aW9ucy53ZWJzaXRlID8gb3B0aW9ucy53ZWJzaXRlIDogJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgcCdcbiAgICApLmlubmVyVGV4dCA9IG9wdGlvbnMuZGVzY3JpcHRpb24gPyBvcHRpb25zLmRlc2NyaXB0aW9uIDogJydcbiAgfVxufVxuIiwiaW1wb3J0IEN1c3RvbU1hcCBmcm9tICcuL0N1c3RvbU1hcC5qcydcbmltcG9ydCBtYWtlTGF5ZXJzIGZyb20gJy4vbWFrZUxheWVycy5qcydcbmltcG9ydCB7IGNvbnZlcnRUeXBlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtYXBXaWRnZXRzVG9TdGF0ZShvcHRpb25zLCB3aWRnZXRDb250ZW50KSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1hcCcpXG5cbiAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHRhYmxlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gay50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RhYmxlJykgPiAtMVxuICAgIH0pXG5cbiAgICBQcm9taXNlLmFsbChcbiAgICAgIHRhYmxlcy5tYXAoZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAgICdodHRwczovL2NzaXMuY2FydG8uY29tL2FwaS92Mi9zcWw/YXBpX2tleT0nICtcbiAgICAgICAgICAgIG1hcC5hcGlrZXkgK1xuICAgICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgICBvcHRpb25zW3RhYmxlXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgcmVzcG9uc2VzLm1hcChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb25zKSB7XG4gICAgICAgIHZhciBqc29uID0ganNvbnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBhLmZlYXR1cmVzLmNvbmNhdChiLmZlYXR1cmVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgICAgIH0pXG4gICAgICAgIG1hcC5qc29uID0gW2pzb25dXG5cbiAgICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgICAgbWFwLmpzb24gPSBbXVxuICAgICAgICAgIHZhciBmZWF0dXJlR3JvdXBzID0ganNvbi5mZWF0dXJlcy5ncm91cEJ5KFxuICAgICAgICAgICAgY29sb3JLZXlXaWRnZXQuZmllbGQsXG4gICAgICAgICAgICAncHJvcGVydGllcydcbiAgICAgICAgICApXG4gICAgICAgICAgT2JqZWN0LmtleXMoZmVhdHVyZUdyb3VwcylcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVHcm91cHNbYl1bMF0ucHJvcGVydGllc1tcbiAgICAgICAgICAgICAgICBjb2xvcktleVdpZGdldC5maWVsZFxuICAgICAgICAgICAgICBdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICAgICAgZmVhdHVyZUdyb3Vwc1thXVswXS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICAgIG1hcC5qc29uLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVHcm91cHNbZmVhdHVyZV1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMud2lkZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluaXRpYWxpemVkID0gMFxuXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHcsIHgpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIC53aWRnZXQuJyArIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZFxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpICYmIHdpZGdldENvbnRlbnRbeF0ub3B0aW9ucykge1xuICAgICAgICAgICAgbmV3IENob2ljZXMoXG4gICAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXG4gICAgICAgICAgICAgIHdpZGdldENvbnRlbnRbeF0ub3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkXj1cXCdzZWFyY2hcXCddJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEJ1dHRvbicpXG4gICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2VsZWN0cyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSlcbiAgICAgICAgICB2YXIgY2hlY2tzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgc2VhcmNoID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXTpub3QoLmNob2ljZXNfX2lucHV0KScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB0b2dnbGUgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3JhZGlvXFwnXScpXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgdmFyIGlucHV0cyA9IHNlbGVjdHNcbiAgICAgICAgICAgIC5jb25jYXQoY2hlY2tzKVxuICAgICAgICAgICAgLmNvbmNhdChzZWFyY2gpXG4gICAgICAgICAgICAuY29uY2F0KHRvZ2dsZSlcblxuICAgICAgICAgIGlmICghaW5wdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXRpYWxpemVkKytcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY291bnQgPSBpbnB1dHMubGVuZ3RoXG4gICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICBtYXAsXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aWRnZXRzLFxuICAgICAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgKytpbml0aWFsaXplZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldHMsXG4gICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICArK2luaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ2NyZWF0ZUV2ZW50JyBpbiBkb2N1bWVudCkge1xuICAgICAgICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgICAgICAgICBldnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbnB1dC5maXJlRXZlbnQoJ29uY2hhbmdlJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdy5tYXBfaWQgPSBtYXAuaWRcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChtYXAudHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgdmFyIHRyYW5zbGF0YWJsZU5vZGVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFuc2xhdGUnKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgdHJhbnNsYXRhYmxlU3RyaW5ncyA9IE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnMpLnNvcnQoZnVuY3Rpb24oXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgYlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGhcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRyYW5zbGF0YWJsZU5vZGVzLmZvckVhY2goZnVuY3Rpb24oZWwsIGkpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0YWJsZVN0cmluZ3MuZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhtYXAudHJhbnNsYXRpb25zW3RdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYignICsgUmVnRXhwLmVzY2FwZSh0KSArICcpJywgJ2dpJylcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUwucmVwbGFjZShyZSwgbWFwLnRyYW5zbGF0aW9uc1t0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNldChlbGVtZW50LCBtYXAsIHgpIHtcbiAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJykudmFsdWUgPSAnJ1xuICBpZiAobWFwLmdyb3Vwcy5sZW5ndGgpIG1hcC5yZW1vdmVHcm91cHMoKVxuXG4gIG1hcC5maWx0ZXJzW3hdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1ha2VMYXllcnMobWFwKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UobWFwLCBlbGVtZW50LCB3aWRnZXRzLCB4LCBjb3VudCwgaW5pdGlhbGl6ZWQpIHtcbiAgdmFyIG9wdGlvbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXG4gICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0Jykub3B0aW9ucylcbiAgICA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpXG4gICAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJykpXG4gICAgICA6IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKVxuICB2YXIgc2VsZWN0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5vcHRpb25zKVxuICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJylcbiAgICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKSlcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0OmNoZWNrZWQnKSlcbiAgdmFyIHBvc3NpYmxlQ2hlY2tzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpLm1hcChcbiAgICBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gby5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICB9XG4gIClcblxuICB2YXIgcG9zc2libGVPcHRpb25zLCBwb3NzaWJsZVF1ZXJpZXNcbiAgaWYgKHdpZGdldHNbeF0uaW5wdXQgIT09ICd0b2dnbGUnKSB7XG4gICAgcG9zc2libGVPcHRpb25zID0gd2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBrZXkudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICBwb3NzaWJsZVF1ZXJpZXMgPSBwb3NzaWJsZUNoZWNrcy5jb25jYXQocG9zc2libGVPcHRpb25zKVxuICB9XG5cbiAgdmFyIHF1ZXJ5ID0gQXJyYXkuZnJvbShzZWxlY3Rpb25zKS5tYXAoZnVuY3Rpb24obykge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwnY2hlY2tib3hcXCddJylcbiAgICAgID8gby5uYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgIDogby52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gIH0pXG5cbiAgbWFwLmZpbHRlcnNbd2lkZ2V0c1t4XS5pZF0gPVxuICAgIHdpZGdldHNbeF0uaW5wdXQgPT09ICd0b2dnbGUnXG4gICAgICA/IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG5cbiAgICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy50b2dnbGUpIHtcbiAgICAgICAgICBib29sID0gY29udmVydFR5cGUocXVlcnlbMF0pID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib29sXG4gICAgICB9XG4gICAgICA6IHdpZGdldHNbeF0uZmllbGQgPT09ICdhbGwnXG4gICAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciB3aXRoRGlhY3JpdGljcyA9IE9iamVjdC52YWx1ZXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIHZhciB3aXRob3V0RGlhY3JpdGljcyA9IE9iamVjdC52YWx1ZXMoZmVhdHVyZS5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmxhdGluaXNlKClcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpdGhEaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMCAmJlxuICAgICAgICAgICAgICB3aXRob3V0RGlhY3JpdGljcy5pbmRleE9mKHF1ZXJ5WzBdKSA8IDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBib29sXG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihmZWF0dXJlLCBsYXllcnMpIHtcbiAgICAgICAgICB2YXIgYm9vbCA9IHRydWVcbiAgICAgICAgICB2YXIgZmllbGQgPSB3aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICAgICAgICA/IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgIDogd2lkZ2V0c1t4XS5maWVsZFxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcG9zc2libGVRdWVyaWVzLmluZGV4T2YoZmVhdHVyZS5wcm9wZXJ0aWVzW2ZpZWxkXS50b0xvd2VyQ2FzZSgpKSA+XG4gICAgICAgICAgICAgICAgLTEgJiZcbiAgICAgICAgICAgICAgcXVlcnkuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuXG4gIGlmIChpbml0aWFsaXplZCA+PSBjb3VudCkgbWFwLnJlbW92ZUdyb3VwcygpXG4gIGlmICh3aWRnZXRzLmxlbmd0aCA+PSB4ICsgMSAmJiBpbml0aWFsaXplZCA+PSBjb3VudCkgbWFrZUxheWVycyhtYXApXG59XG4iLCJpbXBvcnQgc3R5bGVLZXkgZnJvbSAnLi9zdHlsZUtleS5qcydcbmltcG9ydCBtYXBXaWRnZXRzVG9TdGF0ZSBmcm9tICcuL21hcFdpZGdldHNUb1N0YXRlLmpzJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZURyb3Bkb3duT3B0aW9ucyB9IGZyb20gJy4vaGVscGVycy5qcydcbmltcG9ydCB7IHBhcnNlTGVnZW5kRGF0YSB9IGZyb20gJy4vcGFyc2Vycy5qcydcbndpbmRvdy5zdHlsZUtleSA9IHN0eWxlS2V5XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1ha2VXaWRnZXRzKGpzb25zLCBvcHRpb25zLCBib3hDb250ZW50KSB7XG4gIHZhciB3aWRnZXRDb250ZW50ID0gW11cbiAgb3B0aW9ucy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgeCkge1xuICAgIGlmICghdy5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkgdy5pZCA9IHhcbiAgICB2YXIgbGVnZW5kRGF0YSA9IHcucmVmZXJlbmNlXG4gICAgICA/IHBhcnNlTGVnZW5kRGF0YShvcHRpb25zLCBqc29uc1t4XS5mZWVkLmVudHJ5LCB3LnR5cGUpXG4gICAgICA6IHcua2V5c1xuICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzID0gbGVnZW5kRGF0YVxuICAgIHdpZGdldENvbnRlbnQucHVzaChmb3JtYXRXaWRnZXRzKG9wdGlvbnMsIHgpKVxuICAgIGJveENvbnRlbnQgKz1cbiAgICAgICc8c2VjdGlvbiBjbGFzcz1cIndpZGdldCAnICtcbiAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAnXCI+PGgzIGNsYXNzPVwidHJhbnNsYXRlXCI+JyArXG4gICAgICB3aWRnZXRDb250ZW50W3hdLnRpdGxlICtcbiAgICAgICc8L2gzPidcbiAgICBib3hDb250ZW50ICs9IHdpZGdldENvbnRlbnRbeF0ubm9kZXNcbiAgICBib3hDb250ZW50ICs9ICc8L3NlY3Rpb24+J1xuICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICBib3guaW5uZXJIVE1MID0gYm94Q29udGVudFxuICAgIHZhciBsYWJlbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLml0ZW1UZXh0JylcbiAgICBBcnJheS5mcm9tKGxhYmVsVGV4dCkuZm9yRWFjaChmdW5jdGlvbihpdGVtVGV4dCkge1xuICAgICAgdmFyIGhlaWdodCA9IGl0ZW1UZXh0Lm9mZnNldEhlaWdodFxuICAgICAgdmFyIGZvbnRTaXplID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaXRlbVRleHQpWydmb250LXNpemUnXVxuICAgICAgdmFyIG9mZnNldCA9IGhlaWdodCAvIHBhcnNlSW50KGZvbnRTaXplLnJlcGxhY2UoJ3B4JywgJycpLCAxMClcbiAgICAgIGl0ZW1UZXh0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKCcgKyBvZmZzZXQgKiAxMCArICclKSdcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBhd2FpdCBtYXBXaWRnZXRzVG9TdGF0ZShvcHRpb25zLCB3aWRnZXRDb250ZW50KVxufVxuXG5mdW5jdGlvbiBmb3JtYXRXaWRnZXRzKG9wdGlvbnMsIHgpIHtcbiAgdmFyIHdpZGdldE5vZGVzID0gJydcbiAgdmFyIGRyb3Bkb3duT3B0aW9uc1xuXG4gIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLmlucHV0KSB7XG4gIGNhc2UgJ3RvZ2dsZSc6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiICB2YWx1ZT1cIjFcIiBjaGVja2VkPlNob3c8L2xhYmVsPidcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGxhYmVsIGZvcj1cIiR0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHZhbHVlPVwiMFwiID5IaWRlPC9sYWJlbD4nXG4gICAgYnJlYWtcblxuICBjYXNlICdzZWFyY2gnOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaF8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHBsYWNlaG9sZGVyPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnN0cnVjdGlvbnMgK1xuICAgICAgICAnXCIgc2l6ZT1cIjEwXCIgLz4nXG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicmVzZXRCdXR0b25cIiBjbGFzcz1cInRyYW5zbGF0ZVwiPlJlc2V0PC9idXR0b24+J1xuICAgIGJyZWFrXG5cbiAgY2FzZSAnZHJvcGRvd24nOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8c2VsZWN0IGlkPVwiZHJvcGRvd25fJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBwbGFjZWhvbGRlcj1cIicgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uaW5zdHJ1Y3Rpb25zICtcbiAgICAgICAgJ1wiIG11bHRpcGxlPVwiXCI+PC9zZWxlY3Q+J1xuICAgIGRyb3Bkb3duT3B0aW9ucyA9IG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeClcbiAgICBicmVha1xuXG4gIGNhc2UgJ2NoZWNrYm94JzpcbiAgICB3aWRnZXROb2RlcyArPSAnPHVsPidcbiAgICB2YXIga2V5U3R5bGVcbiAgICB2YXIgbGVnZW5kSXRlbXMgPSBvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgID8gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdsYWJlbCcpXG4gICAgT2JqZWN0LmtleXMobGVnZW5kSXRlbXMpLmZvckVhY2goZnVuY3Rpb24oZ3JvdXAsIGkpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXA6IG9wdGlvbnMsXG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVxuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAgICc8bGk+PGxhYmVsIGZvcj1cIicgK1xuICAgICAgICAgIGdyb3VwICtcbiAgICAgICAgICAnXCI+PGlucHV0IGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnB1dCArXG4gICAgICAgICAgJ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCInICtcbiAgICAgICAgICAob3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nID8gZ3JvdXAgOiBsZWdlbmRJdGVtc1tncm91cF1bMF0udmFsdWUpICtcbiAgICAgICAgICAnXCIgaWQ9XCInICtcbiAgICAgICAgICBncm91cCArXG4gICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgIChsZWdlbmRJdGVtc1tncm91cF1bMF0uc2VsZWN0ZWQgPyAnY2hlY2tlZCcgOiAnJykgK1xuICAgICAgICAgICcgPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9sYWJlbD48L2xpPidcbiAgICB9KVxuICAgIHdpZGdldE5vZGVzICs9ICc8L3VsPidcbiAgICBicmVha1xuXG4gIGRlZmF1bHQ6XG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzx1bD4nXG4gICAgdmFyIGtleVN0eWxlXG4gICAgdmFyIGxlZ2VuZEl0ZW1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICA/IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgICAgIDogb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnbGFiZWwnKVxuICAgIE9iamVjdC5rZXlzKGxlZ2VuZEl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwLCBpKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF0sXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgbWFwOiBvcHRpb25zLFxuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF1cbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgICAnPGxpPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9saT4nXG4gICAgfSlcbiAgICB3aWRnZXROb2RlcyArPSAnPC91bD4nXG4gICAgYnJlYWtcbiAgfVxuXG4gIHZhciB3aWRnZXRUaXRsZSA9XG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkID09PSAnYWxsJ1xuICAgICAgPyAnU2VhcmNoJ1xuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0uZmllbGQucmVwbGFjZSgvXy9nLCAnICcpXG4gIHJldHVybiB7XG4gICAgbm9kZXM6IHdpZGdldE5vZGVzLFxuICAgIHRpdGxlOiB3aWRnZXRUaXRsZSxcbiAgICBvcHRpb25zOiBkcm9wZG93bk9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VNZXRhRGF0YSwgcGFyc2VXaWRnZXREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuaW1wb3J0IG1ha2VXaWRnZXRzIGZyb20gJy4vbWFrZVdpZGdldHMuanMnXG5pbXBvcnQgbWFrZURvY3VtZW50Tm9kZXMgZnJvbSAnLi9tYWtlRG9jdW1lbnROb2Rlcy5qcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdFdpdGhTcHJlYWRzaGVldChcbiAgZGF0YVVSTCxcbiAgb3B0aW9ucyxcbiAgdHJhbnNsYXRpb25zXG4pIHtcbiAgdmFyIG1hcFxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAyICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJ1xuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHZhciBtZXRhRGF0YSA9IHBhcnNlTWV0YURhdGEoanNvbi5mZWVkLmVudHJ5KVxuICAgICAgICB2YXIgd2lkZ2V0cyA9IHBhcnNlV2lkZ2V0RGF0YShtZXRhRGF0YSlcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhtZXRhRGF0YSkuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tkYXRhXSA9IG1ldGFEYXRhW2RhdGFdXG4gICAgICAgIH0pXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbZGF0YV0gPSBvcHRpb25zW2RhdGFdXG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIHR3b0RfcHJvcGVyaXRlcyA9IFtcbiAgICAgICAgICB7IG5hbWU6ICdjZW50ZXInLCBkZWZhdWx0OiBbMCwgMF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdpY29uc2l6ZScsIGRlZmF1bHQ6IFsyMCwgMjBdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnaWNvbmFuY2hvcicsIGRlZmF1bHQ6IFs1LCA1XSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3N3Ym91bmRzJywgZGVmYXVsdDogWy05MCwgLTE4MF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICduZWJvdW5kcycsIGRlZmF1bHQ6IFs5MCwgMTgwXSB9XG4gICAgICAgIF1cblxuICAgICAgICB0d29EX3Byb3Blcml0ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPVxuICAgICAgICAgICAgdHlwZW9mIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA/IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA6IHByb3BlcnR5LmRlZmF1bHRcbiAgICAgICAgfSlcbiAgICAgICAgcHJvcGVydGllcy5zbHVnID0gcHJvcGVydGllcy5tYXBJRC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBwcm9wZXJ0aWVzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1xuICAgICAgICBwcm9wZXJ0aWVzLndpZGdldHMgPSB3aWRnZXRzXG4gICAgICAgIG1ha2VEb2N1bWVudE5vZGVzKHByb3BlcnRpZXMpXG4gICAgICAgIHZhciByZWZlcmVuY2VTaGVldHMgPSB3aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcucmVmZXJlbmNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVNoZWV0cykge1xuICAgICAgICAgIHZhciBib3hDb250ZW50ID0gJydcbiAgICAgICAgICB2YXIgcmVmZXJlbmNlU2hlZXRVUkxTID0gd2lkZ2V0c1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgIGlmICh3LnJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBkYXRhVVJMICtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZ29vZ2xlU2hlZXQgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIHcucmVmZXJlbmNlICtcbiAgICAgICAgICAgICAgICAgICcvcHVibGljL3ZhbHVlcz9hbHQ9anNvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICByZWZlcmVuY2VTaGVldFVSTFMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbnMpIHtcbiAgICAgICAgICAgICAgbWFwID0gYXdhaXQgbWFrZVdpZGdldHMoanNvbnMsIHByb3BlcnRpZXMsIGJveENvbnRlbnQpXG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuZm9vdGVyICYmIHByb3BlcnRpZXMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICAgICAgICBmb290ZXJOb2RlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnICNjb250cm9scydcbiAgICAgICAgICAgICAgICAgICkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydGllcy5mb290ZXIgJiYgcHJvcGVydGllcy5mb290ZXIudHJpbSgpKSB7XG4gICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIHByb3BlcnRpZXMuZm9vdGVyICsgJyAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PidcbiAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcGVydGllcy5zbHVnICsgJyAjY29udHJvbHMnKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9KVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTQhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJpbXBvcnQgbWFrZURvY3VtZW50Tm9kZXMgZnJvbSAnLi9tYWtlRG9jdW1lbnROb2Rlcy5qcydcbmltcG9ydCBtYWtlTGF5ZXJzIGZyb20gJy4vbWFrZUxheWVycy5qcydcbmltcG9ydCBtYWtlV2lkZ2V0cyBmcm9tICcuL21ha2VXaWRnZXRzLmpzJ1xuaW1wb3J0IEN1c3RvbU1hcCBmcm9tICcuL0N1c3RvbU1hcC5qcydcbndpbmRvdy5tYWtlTGF5ZXJzID0gbWFrZUxheWVyc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdFdpdGhvdXRTcHJlYWRzaGVldChvcHRpb25zLCB0cmFuc2xhdGlvbnMpIHtcbiAgdmFyIHR3b0RfcHJvcGVyaXRlcyA9IFtcbiAgICB7IG5hbWU6ICdjZW50ZXInLCBkZWZhdWx0OiBbMCwgMF0gfSxcbiAgICB7IG5hbWU6ICdpY29uc2l6ZScsIGRlZmF1bHQ6IFsyMCwgMjBdIH0sXG4gICAgeyBuYW1lOiAnaWNvbmFuY2hvcicsIGRlZmF1bHQ6IFs1LCA1XSB9LFxuICAgIHsgbmFtZTogJ3N3Ym91bmRzJywgZGVmYXVsdDogWy05MCwgLTE4MF0gfSxcbiAgICB7IG5hbWU6ICduZWJvdW5kcycsIGRlZmF1bHQ6IFs5MCwgMTgwXSB9XG4gIF1cblxuICB0d29EX3Byb3Blcml0ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIG9wdGlvbnNbcHJvcGVydHkubmFtZV0gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbcHJvcGVydHkubmFtZV0gPT09ICdzdHJpbmcnXG4gICAgICAgID8gb3B0aW9uc1twcm9wZXJ0eS5uYW1lXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKVxuICAgICAgICB9KVxuICAgICAgICA6IG9wdGlvbnNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICA/IG9wdGlvbnNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICA6IHByb3BlcnR5LmRlZmF1bHRcbiAgfSlcblxuICBvcHRpb25zLnNsdWcgPSBvcHRpb25zLm1hcElELnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpXG4gIG9wdGlvbnMudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zXG4gIG1ha2VEb2N1bWVudE5vZGVzKG9wdGlvbnMpXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICdfX21hcC5tYXAnKVxuXG4gIGlmIChvcHRpb25zLmZvcm1hdFRvb2xib3gpIHtcbiAgICB2YXIgbWFwID0gbmV3IEN1c3RvbU1hcChjb250YWluZXIsIG9wdGlvbnMpLnJlbmRlcigpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAnaHR0cHM6Ly9jc2lzLmNhcnRvLmNvbS9hcGkvdjIvc3FsP2FwaV9rZXk9JyArXG4gICAgICAgICAgbWFwLmFwaWtleSArXG4gICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgbWFwLnRhYmxlXG4gICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAgIG1hcC5qc29uID0gW2pzb25dXG4gICAgICAgICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgICAgICAgIG1hcC5mb3JtYXR0b29sYm94KGJveClcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgICAgfSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJldHVybiBmZXRjaChcbiAgICAgICAgJ2h0dHBzOi8vY3Npcy5jYXJ0by5jb20vYXBpL3YyL3NxbD9hcGlfa2V5PScgK1xuICAgICAgICAgIChvcHRpb25zLmFwaWtleSB8fCBvcHRpb25zLmFwaUtleSB8fCBvcHRpb25zWydhcGkga2V5J10pICtcbiAgICAgICAgICAnJmZvcm1hdD1nZW9qc29uJnE9U0VMRUNUJTIwKiUyMEZST00lMjAnICtcbiAgICAgICAgICBvcHRpb25zLnRhYmxlXG4gICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbikge1xuICAgICAgICAgIG9wdGlvbnMuanNvbiA9IFtqc29uXVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgICB2YXIgYm94Q29udGVudCA9ICcnXG4gICAgICAgICAgdmFyIG1hcFxuICAgICAgICAgIGlmIChvcHRpb25zLndpZGdldHMpIHtcbiAgICAgICAgICAgIG1hcCA9IGF3YWl0IG1ha2VXaWRnZXRzKG9wdGlvbnMuanNvbiwgb3B0aW9ucywgYm94Q29udGVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICAgICAgICAgICAgbWFrZUxheWVycyhtYXApXG4gICAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZm9vdGVyICYmIG9wdGlvbnMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgICAgZm9vdGVyTm9kZS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICBvcHRpb25zLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJ2hlYWRlcicpXG4gICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgIGZvb3Rlck5vZGUsXG4gICAgICAgICAgICAgIHBlblVsdGltYXRlTm9kZS5uZXh0U2libGluZ1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUobWFwKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlTGFuZ3VhZ2VEYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuXG52YXIgdXJsID1cbiAgd2luZG93LmxvY2F0aW9uICE9IHdpbmRvdy5wYXJlbnQubG9jYXRpb25cbiAgICA/IGRvY3VtZW50LnJlZmVycmVyXG4gICAgOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG52YXIgaHJlZiA9IC9sYW5nPShbXiZdKykvLmV4ZWModXJsKVxud2luZG93LmxhbmcgPSBocmVmID8gaHJlZlsxXSA6IG51bGxcblxudmFyIGxlYWZsZXRMb2FkZWQgPSAwXG5cbnZhciBwcmltYXJ5SnNGaWxlcyA9IFtcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXRAMS4zLjEvZGlzdC9sZWFmbGV0LmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL3doYXR3Zy1mZXRjaEAzLjAuMC9kaXN0L2ZldGNoLnVtZC5qcydcbl1cblxudmFyIHNlY29uZGFyeUpzRmlsZXMgPSBbXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0Lnpvb21zbGlkZXJAMC43LjEvc3JjL0wuQ29udHJvbC5ab29tc2xpZGVyLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQtZnVsbHNjcmVlbkAxLjAuMi9kaXN0L0xlYWZsZXQuZnVsbHNjcmVlbi5taW4uanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vY2hyb21hLWpzQDIuMC4zL2Nocm9tYS5taW4uanMnLFxuICAnaHR0cHM6Ly9jc2lzLWlsYWIuZ2l0aHViLmlvL21hcC10ZW1wbGF0ZXMvZGlzdC9qcy92ZW5kb3IvQTExeS1EaWFsb2cuanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vY2hvaWNlcy5qc0A3LjAuMC9wdWJsaWMvYXNzZXRzL3NjcmlwdHMvY2hvaWNlcy5taW4uanMnLFxuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC5tYXJrZXJjbHVzdGVyQDEuNC4xL2Rpc3QvbGVhZmxldC5tYXJrZXJjbHVzdGVyLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL3BhdHRlcm5zLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL2xhdGluaXplLmpzJ1xuXVxuXG5mdW5jdGlvbiBoYW5kbGVMb2FkTGVhZmxldCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHNlY29uZGFyeUpzRmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgICAgIHZhciBqc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAganNMaW5rLnNyYyA9IGZpbGVcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoanNMaW5rKVxuXG4gICAgICBqc0xpbmsub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxlYWZsZXRMb2FkZWQrK1xuXG4gICAgICAgIGlmIChsZWFmbGV0TG9hZGVkID09PSBzZWNvbmRhcnlKc0ZpbGVzLmxlbmd0aCArIHByaW1hcnlKc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc29sdmUobGVhZmxldExvYWRlZClcbiAgICAgICAgICByZXR1cm4gbGVhZmxldExvYWRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0RmlsZXMoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcmltYXJ5SnNGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZFxuICAgICAgdmFyIGpzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBqc0xpbmsuc3JjID0gZmlsZVxuICAgICAganNMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFmbGV0TG9hZGVkKytcblxuICAgICAgICBpZiAobGVhZmxldExvYWRlZCA9PT0gcHJpbWFyeUpzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgaGFuZGxlTG9hZExlYWZsZXQoKVxuICAgICAgICAgIHJlc29sdmUobGVhZmxldExvYWRlZClcbiAgICAgICAgICByZXR1cm4gbGVhZmxldExvYWRlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGpzTGluaylcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZU1hcChvcHRpb25zKSB7XG4gIGlmICghbGVhZmxldExvYWRlZCkge1xuICAgIHJldHVybiBhd2FpdCBpbXBvcnRGaWxlcygpLnRoZW4oYXN5bmMgZnVuY3Rpb24oc2NyaXB0c0xvYWRlZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGluaXQob3B0aW9ucylcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBpbml0KG9wdGlvbnMpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XG4gIHZhciBkYXRhVVJMID0gJ2h0dHBzOi8vc3ByZWFkc2hlZXRzLmdvb2dsZS5jb20vZmVlZHMvbGlzdC8nXG4gIHdpbmRvdy5kZWZhdWx0Q29sb3IgPVxuICAgIG9wdGlvbnMub2NlYW5jb2xvciB8fCBvcHRpb25zLm9jZWFuQ29sb3IgfHwgb3B0aW9uc1snb2NlYW4gY29sb3InXVxuICB2YXIgdHJhbnNsYXRpb25zXG5cbiAgaWYgKGxhbmcpIHtcbiAgICBmZXRjaChkYXRhVVJMICsgb3B0aW9ucy5nb29nbGVTaGVldCArICcvJyArIDMgKyAnL3B1YmxpYy92YWx1ZXM/YWx0PWpzb24nKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdHJhbnNsYXRpb25zID0gcGFyc2VMYW5ndWFnZURhdGEoanNvbi5mZWVkLmVudHJ5KVxuXG4gICAgICAgIGNvbnN0IGluaXRXaXRoU3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgICAgIHJldHVybiBhd2FpdCBpbml0V2l0aFNwcmVhZHNoZWV0KGRhdGFVUkwsIG9wdGlvbnMsIHRyYW5zbGF0aW9ucylcbiAgICAgIH0pXG4gIH0gZWxzZSBpZiAob3B0aW9ucy5nb29nbGVTaGVldCkge1xuICAgIGNvbnN0IGluaXRXaXRoU3ByZWFkc2hlZXQgPSByZXF1aXJlKCcuL2luaXRXaXRoU3ByZWFkc2hlZXQuanMnKS5kZWZhdWx0XG4gICAgcmV0dXJuIGF3YWl0IGluaXRXaXRoU3ByZWFkc2hlZXQoZGF0YVVSTCwgb3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbml0V2l0aG91dFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aG91dFNwcmVhZHNoZWV0LmpzJylcbiAgICAgIC5kZWZhdWx0XG4gICAgcmV0dXJuIGF3YWl0IGluaXRXaXRob3V0U3ByZWFkc2hlZXQob3B0aW9ucylcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJ1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnXG5pbXBvcnQgeyBtYWtlTWFwIH0gZnJvbSAnLi9qcy9tYWtlTWFwJ1xuaW1wb3J0IHsgZXh0ZXJuYWxMaW5rIH0gZnJvbSAnLi9qcy9oZWxwZXJzLmpzJ1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4vanMvaGVscGVycy5qcydcbndpbmRvdy5tYWtlTWFwID0gbWFrZU1hcFxud2luZG93LmV4dGVybmFsTGluayA9IGV4dGVybmFsTGlua1xud2luZG93LmNhcGl0YWxpemUgPSBjYXBpdGFsaXplXG5cbi8vIGltcG9ydCB7IGV4YW1wbGVzLCBhcmN0aWNKYW1taW5nIH0gZnJvbSAnLi9leGFtcGxlcy5qcydcbi8vIGFyY3RpY0phbW1pbmcoKVxuLy8gZXhhbXBsZXMoKVxuXG53aW5kb3cuY29udmVydFR5cGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgdiA9IE51bWJlcih2YWx1ZSlcbiAgcmV0dXJuICFpc05hTih2KVxuICAgID8gdlxuICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdudWxsJ1xuICAgICAgICA/IG51bGxcbiAgICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZSdcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogdmFsdWVcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfVxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbClcbiAgICByZXR1cm4gZXZ0XG4gIH1cblxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlXG5cbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnRcbn1cblxuQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihwcm9wZXJ0eTEsIHByb3BlcnR5Mikge1xuICByZXR1cm4gcHJvcGVydHkyXG4gICAgPyB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcbiAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BlcnR5Ml1bcHJvcGVydHkxXVxuICAgICAgZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXVxuICAgICAgZ3JvdXBzW3ZhbF0ucHVzaChpdGVtKVxuICAgICAgcmV0dXJuIGdyb3Vwc1xuICAgIH0sIHt9KVxuICAgIDogdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XG4gICAgICB2YXIgdmFsID0gaXRlbVtwcm9wZXJ0eTFdXG4gICAgICBncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdXG4gICAgICBncm91cHNbdmFsXS5wdXNoKGl0ZW0pXG4gICAgICByZXR1cm4gZ3JvdXBzXG4gICAgfSwge30pXG59XG5cblJlZ0V4cC5lc2NhcGUgPSBmdW5jdGlvbihzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1tcXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
