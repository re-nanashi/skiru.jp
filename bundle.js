/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DotGothic16&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n\\tmargin: 0px;\\n\\tpadding: 0px;\\n\\tbox-sizing: border-box;\\n\\tfont-family: 'DotGothic16', sans-serif;\\n}\\n\\nbody {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\tbackground-color: black;\\n}\\n\\nh1 {\\n\\tpadding-top: 35px;\\n\\tfont-size: 7vw;\\n\\tfont-family: 'DotGothic16', sans-serif;\\n\\tcolor: white;\\n}\\n\\n#popup-container {\\n\\tposition: absolute;\\n\\tleft: 0;\\n\\tright: 0;\\n\\tmargin: 0 auto;\\n\\theight: 150px;\\n\\twidth: 350px;\\n\\ttop: 40%;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tbackground: white;\\n\\tborder-radius: 25px;\\n}\\n\\n.visible {\\n\\tvisibility: hidden;\\n}\\n\\n.visible.active {\\n\\tvisibility: visible;\\n}\\n\\n.form-group #address {\\n\\tmargin-left: 16px;\\n}\\n\\n.form-group #password {\\n\\tmargin-left: 16px;\\n}\\n\\n#project-form .add-button {\\n\\tposition: relative;\\n\\tmargin-top: 10px;\\n\\tmargin-left: 50%;\\n}\\n\\n.button-container {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tflex-wrap: wrap;\\n\\twidth: 100vw;\\n\\tmargin-top: 20px;\\n}\\n\\n.white-box {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\\twidth: 150px;\\n\\tborder: solid white;\\n\\tpadding: 10px;\\n\\tcolor: white;\\n\\tmargin: 10px;\\n}\\n\\nbutton {\\n\\tmargin-top: 5px;\\n\\twidth: 80px;\\n\\tbackground: white;\\n\\tcursor: pointer;\\n\\toutline: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://skiru.jp/./src/assets/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://skiru.jp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/style/style.css":
/*!************************************!*\
  !*** ./src/assets/style/style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://skiru.jp/./src/assets/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://skiru.jp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/UI.ts":
/*!***********************!*\
  !*** ./src/app/UI.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"updateAddress\": () => (/* binding */ updateAddress),\n/* harmony export */   \"bindUIEvents\": () => (/* binding */ bindUIEvents)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/app/project.ts\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/app/storage.ts\");\n\n\nfunction displayProjects() {\n    var projects = _storage__WEBPACK_IMPORTED_MODULE_1__.getProjectList();\n    projects.forEach(function (project) { return displayProjectToView(project); });\n}\nfunction displayProjectToView(project) {\n    console.log(project);\n    var projectList = document.querySelector('.button-container');\n    var projectCard = document.createElement('div');\n    projectCard.classList.add('white-box');\n    projectCard.innerHTML = \"\\n\\t    <p>\" + project.title + \"</p>\\n\\t    <button data-app=\\\"\" + project.address + \"\\\">\\u884C\\u304F</button>\\n\\t\";\n    projectList.append(projectCard);\n}\nfunction removeProjectFromView() {\n    var lastChild = document.querySelector('.button-container').lastElementChild;\n    lastChild.remove();\n}\nfunction clearFields() {\n    document.querySelector('#title').value = '';\n    document.querySelector('#address').value = '';\n    document.querySelector('#password').value = '';\n}\nfunction togglePopup() {\n    var popup = document.querySelector('#popup-container');\n    popup.classList.toggle('active');\n}\nfunction removePopup() {\n    var popup = document.querySelector('#popup-container');\n    popup.classList.remove('active');\n}\nfunction visitSite(address) {\n    location.href = \"./\" + address + \"/index.html\";\n}\nfunction updateAddress() {\n    var buttons = document.querySelectorAll('[data-app]');\n    buttons.forEach(function (button) {\n        button.addEventListener('click', function (e) {\n            var buttonTarget = e.target;\n            visitSite(buttonTarget.getAttribute('data-app'));\n        });\n    });\n}\nfunction bindUIEvents() {\n    var addButton = document.querySelector('#add');\n    var removeButton = document.querySelector('#delete');\n    var form = document.querySelector('#project-form');\n    form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        //Get form values\n        var title = document.querySelector('#title')\n            .value;\n        var address = (document.querySelector('#address')).value;\n        var password = (document.querySelector('#password')).value;\n        //Validate\n        if (title === '' || address === '' || password !== '@!1234') {\n            return alert('残念');\n        }\n        var project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title, address);\n        //Display to UI\n        var projectCard = project.projectDetails();\n        displayProjectToView(projectCard);\n        //Add project to storage\n        _storage__WEBPACK_IMPORTED_MODULE_1__.addProject(project);\n        //Clear popup/value\n        clearFields();\n        removePopup();\n        //Update added list\n        updateAddress();\n    });\n    //Event: toggle popup\n    addButton.addEventListener('click', togglePopup);\n    //Event: remove a project\n    removeButton.addEventListener('click', function () {\n        removeProjectFromView();\n        _storage__WEBPACK_IMPORTED_MODULE_1__.removeProject();\n    });\n}\n\n\n//# sourceURL=webpack://skiru.jp/./src/app/UI.ts?");

/***/ }),

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nvar Project = /** @class */ (function () {\n    function Project(title, address) {\n        var _this = this;\n        this.projectDetails = function () {\n            return {\n                title: _this.title,\n                address: _this.address,\n            };\n        };\n        this.title = title;\n        this.address = address;\n    }\n    return Project;\n}());\n\n\n\n//# sourceURL=webpack://skiru.jp/./src/app/project.ts?");

/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjectList\": () => (/* binding */ getProjectList),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject)\n/* harmony export */ });\nfunction getProjectList() {\n    var projects = JSON.parse(localStorage.getItem('projects')) || [];\n    return projects;\n}\nfunction addProject(project) {\n    var projects = getProjectList();\n    console.log(project);\n    projects.push(project.projectDetails());\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\nfunction removeProject() {\n    var projects = getProjectList();\n    projects.pop();\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\n\n//# sourceURL=webpack://skiru.jp/./src/app/storage.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/UI */ \"./src/app/UI.ts\");\n/* harmony import */ var _assets_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style/style.css */ \"./src/assets/style/style.css\");\n\n\n//Load app\nwindow.addEventListener('DOMContentLoaded', function () {\n    _app_UI__WEBPACK_IMPORTED_MODULE_0__.displayProjects();\n    _app_UI__WEBPACK_IMPORTED_MODULE_0__.updateAddress();\n    _app_UI__WEBPACK_IMPORTED_MODULE_0__.bindUIEvents();\n});\n\n\n//# sourceURL=webpack://skiru.jp/./src/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;