/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "addd131dfc5adf0d0769" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.e, __webpack_require__, __webpack_require__.* */
eval("var onClick = function onClick(multiplyByTwo) {\n  var child = document.querySelector('button');\n  child.innerHTML = \"This is my age \".concat(multiplyByTwo(10));\n};\n\nvar getButton = function getButton() {\n  return document.querySelector('button');\n};\n\nvar createButton = function createButton() {\n  var button = document.createElement('button');\n  button.innerHTML = 'press';\n  var container = document.createElement('div');\n  container.innerHTML = '';\n  root.appendChild(button);\n  button.appendChild(container);\n};\n\nwindow.addEventListener('load', function () {\n  var root = document.getElementById('root');\n  root.innerHTML = \"Hello mister\";\n  createButton();\n  getButton().addEventListener('mouseenter', function (ctx) {\n    return __webpack_require__.e(/*! import() */ \"src_utils_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../utils */ \"./src/utils/index.js\")).then(function (_ref) {\n      var multiplyByTwo = _ref.multiplyByTwo;\n      ctx.srcElement.addEventListener('click', function () {\n        return onClick(multiplyByTwo);\n      });\n    }).catch(function (error) {\n      return 'An error occured';\n    });\n  });\n  root.appendChild(getButton());\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2FwcC9pbmRleC5qcz9mYjA1Il0sIm5hbWVzIjpbIm9uQ2xpY2siLCJtdWx0aXBseUJ5VHdvIiwiY2hpbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJnZXRCdXR0b24iLCJjcmVhdGVCdXR0b24iLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwicm9vdCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwidGhlbiIsInNyY0VsZW1lbnQiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxhQUFELEVBQW1CO0FBQ2pDLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQUYsT0FBSyxDQUFDRyxTQUFOLDRCQUFvQ0osYUFBYSxDQUFDLEVBQUQsQ0FBakQ7QUFDRCxDQUhEOztBQUlBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQU47QUFBQSxDQUFsQjs7QUFFQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUQsUUFBTSxDQUFDSCxTQUFQLEdBQW1CLE9BQW5CO0FBQ0EsTUFBTUssU0FBUyxHQUFHUCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUMsV0FBUyxDQUFDTCxTQUFWLEdBQXNCLEVBQXRCO0FBQ0FNLE1BQUksQ0FBQ0MsV0FBTCxDQUFpQkosTUFBakI7QUFDQUEsUUFBTSxDQUFDSSxXQUFQLENBQW1CRixTQUFuQjtBQUNELENBUEQ7O0FBU0FHLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNwQyxNQUFNSCxJQUFJLEdBQUdSLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0FKLE1BQUksQ0FBQ04sU0FBTDtBQUVBRSxjQUFZO0FBRVpELFdBQVMsR0FBR1EsZ0JBQVosQ0FBNkIsWUFBN0IsRUFBMkMsVUFBQ0UsR0FBRCxFQUFTO0FBQ2xELFdBQU8sd0pBQW1CQyxJQUFuQixDQUNMLGdCQUFxQjtBQUFBLFVBQW5CaEIsYUFBbUIsUUFBbkJBLGFBQW1CO0FBQ25CZSxTQUFHLENBQUNFLFVBQUosQ0FBZUosZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUM7QUFBQSxlQUFLZCxPQUFPLENBQUNDLGFBQUQsQ0FBWjtBQUFBLE9BQXpDO0FBQ0QsS0FISSxFQUlMa0IsS0FKSyxDQUtMLFVBQUFDLEtBQUs7QUFBQSxhQUFJLGtCQUFKO0FBQUEsS0FMQSxDQUFQO0FBT0QsR0FSRDtBQVVBVCxNQUFJLENBQUNDLFdBQUwsQ0FBaUJOLFNBQVMsRUFBMUI7QUFDRCxDQWpCRCIsImZpbGUiOiIuL3NyYy9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3Qgb25DbGljayA9IChtdWx0aXBseUJ5VHdvKSA9PiB7XG4gIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gIGNoaWxkLmlubmVySFRNTCA9IGBUaGlzIGlzIG15IGFnZSAke211bHRpcGx5QnlUd28oMTApfWBcbn1cbmNvbnN0IGdldEJ1dHRvbiA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uaW5uZXJIVE1MID0gJ3ByZXNzJztcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgcm9vdC5hcHBlbmRDaGlsZChidXR0b24pO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICByb290LmlubmVySFRNTCA9IGBIZWxsbyBtaXN0ZXJgO1xuXG4gIGNyZWF0ZUJ1dHRvbigpO1xuXG4gIGdldEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoY3R4KSA9PiB7XG4gICAgcmV0dXJuIGltcG9ydCgnLi4vdXRpbHMnKS50aGVuKFxuICAgICAgKHttdWx0aXBseUJ5VHdvfSkgPT4ge1xuICAgICAgICBjdHguc3JjRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gb25DbGljayhtdWx0aXBseUJ5VHdvKSk7XG4gICAgICB9XG4gICAgKS5jYXRjaChcbiAgICAgIGVycm9yID0+ICdBbiBlcnJvciBvY2N1cmVkJ1xuICAgIClcbiAgfVxuICApO1xuICByb290LmFwcGVuZENoaWxkKGdldEJ1dHRvbigpKTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/index.js\n");
/******/ })()
;