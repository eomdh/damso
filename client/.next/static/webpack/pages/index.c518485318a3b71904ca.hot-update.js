webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostForm__Container",
  componentId: "sc-z6wuxo-0"
})(["width:100%;max-height:500px;"]);
_c = Container;
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "PostForm__FormContainer",
  componentId: "sc-z6wuxo-1"
})(["width:100%;min-height:120px;border-bottom:1px solid #e6ecf0;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = FormContainer;
var ContentInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].TextArea.withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-z6wuxo-2"
})(["margin-left:10px;width:90%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;"]);
_c3 = ContentInput;

var PostForm = function PostForm() {
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    placeholder: "\uC624\uB298\uC740 \uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })));
};

_c4 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "PostForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_latest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-latest */ "./node_modules/use-latest/dist/use-latest.esm.js");
/* harmony import */ var use_composed_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-composed-ref */ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js");






var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

//   export type CalculatedNodeHeights = [height: number, rowHeight: number];
// https://github.com/microsoft/TypeScript/issues/28259

var hiddenTextarea = null;

var getHeight = function getHeight(node, sizingData) {
  var height = node.scrollHeight;

  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize;
  } // remove padding, since height = content


  return height - sizingData.paddingSize;
};

function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }

  if (maxRows === void 0) {
    maxRows = Infinity;
  }

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tabindex', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  var paddingSize = sizingData.paddingSize,
      borderSize = sizingData.borderSize,
      sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function (_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData); // measure height of a textarea with a single row

  hiddenTextarea.value = 'x';
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;

  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }

  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;

  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }

  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}

var noop = function noop() {};
var pick = function pick(props, obj) {
  return props.reduce(function (acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};

var SIZING_STYLE = ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', // non-standard
'tabSize', 'textIndent', // non-standard
'textRendering', 'textTransform', 'width', 'wordBreak'];
var isIE = !!document.documentElement.currentStyle ;

var getSizingData = function getSizingData(node) {
  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize
  };
};

var useWindowResizeListener = function useWindowResizeListener(listener) {
  var latestListener = Object(use_latest__WEBPACK_IMPORTED_MODULE_3__["default"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    var handler = function handler(event) {
      latestListener.current(event);
    };

    window.addEventListener('resize', handler);
    return function () {
      window.removeEventListener('resize', handler);
    };
  }, []);
};

var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements,
      maxRows = _ref.maxRows,
      minRows = _ref.minRows,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      _ref$onHeightChange = _ref.onHeightChange,
      onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);

  if ( true && props.style) {
    if ('maxHeight' in props.style) {
      throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
    }

    if ('minHeight' in props.style) {
      throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
    }
  }

  var isControlled = props.value !== undefined;
  var libRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var ref = Object(use_composed_ref__WEBPACK_IMPORTED_MODULE_4__["default"])(libRef, userRef);
  var heightRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(0);
  var measurementsCacheRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var resizeTextarea = function resizeTextarea() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    measurementsCacheRef.current = nodeSizingData;

    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows),
        height = _calculateNodeHeight[0],
        rowHeight = _calculateNodeHeight[1];

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', height + "px", 'important');
      onHeightChange(height, {
        rowHeight: rowHeight
      });
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      resizeTextarea();
    }

    onChange(event);
  };

  {
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onChange: handleChange,
    ref: ref
  }));
};

var index = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(TextareaAutosize);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-composed-ref/dist/use-composed-ref.esm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var updateRef = function updateRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }
  ref.current = value;
};

var useComposedRef = function useComposedRef(libRef, userRef) {
  var prevUserRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (instance) {
    libRef.current = instance;

    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }

    prevUserRef.current = userRef;

    if (!userRef) {
      return;
    }

    updateRef(userRef, instance);
  }, [userRef]);
};

/* harmony default export */ __webpack_exports__["default"] = (useComposedRef);


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var index =  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] ;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/use-latest/dist/use-latest.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/use-latest/dist/use-latest.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLatest; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");



var useLatest = function useLatest(value) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](value);
  Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    ref.current = value;
  });
  return ref;
};




/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemUvZGlzdC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1jb21wb3NlZC1yZWYvZGlzdC91c2UtY29tcG9zZWQtcmVmLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QvZGlzdC91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLWxhdGVzdC9kaXN0L3VzZS1sYXRlc3QuZXNtLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZvcm1Db250YWluZXIiLCJmb3JtIiwiQ29udGVudElucHV0IiwiVGV4dEFyZWEiLCJQb3N0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLHNJQUFuQjtNQUFNRCxhO0FBVU4sSUFBTUUsWUFBWSxHQUFHSix5REFBTSxDQUFDSyxRQUFW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Ozs7QUMxTnJCO0FBQUE7QUFBQTtBQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0RBQU07QUFDMUIsU0FBUyx5REFBVztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVlLDZFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3QjlCO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEMsYUFBYSxxREFBZTs7QUFFYixvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDc0M7O0FBRXJFO0FBQ0EsWUFBWSw0Q0FBWTtBQUN4QixFQUFFLDRFQUF5QjtBQUMzQjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVnQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNTE4NDg1MzE4YTNiNzE5MDRjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkLlRleHRBcmVhYFxyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm1Db250YWluZXIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8Q29udGVudElucHV0IHBsYWNlaG9sZGVyPVwi7Jik64qY7J2AIOyWtOuWpCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIC8+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCBmb3J3YXJkUmVmLCB1c2VSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTGF0ZXN0IGZyb20gJ3VzZS1sYXRlc3QnO1xuaW1wb3J0IHVzZUNvbXBvc2VkUmVmIGZyb20gJ3VzZS1jb21wb3NlZC1yZWYnO1xuXG52YXIgSElEREVOX1RFWFRBUkVBX1NUWUxFID0ge1xuICAnbWluLWhlaWdodCc6ICcwJyxcbiAgJ21heC1oZWlnaHQnOiAnbm9uZScsXG4gIGhlaWdodDogJzAnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgJ3otaW5kZXgnOiAnLTEwMDAnLFxuICB0b3A6ICcwJyxcbiAgcmlnaHQ6ICcwJ1xufTtcblxudmFyIGZvcmNlSGlkZGVuU3R5bGVzID0gZnVuY3Rpb24gZm9yY2VIaWRkZW5TdHlsZXMobm9kZSkge1xuICBPYmplY3Qua2V5cyhISURERU5fVEVYVEFSRUFfU1RZTEUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBISURERU5fVEVYVEFSRUFfU1RZTEVba2V5XSwgJ2ltcG9ydGFudCcpO1xuICB9KTtcbn07XG5cbi8vICAgZXhwb3J0IHR5cGUgQ2FsY3VsYXRlZE5vZGVIZWlnaHRzID0gW2hlaWdodDogbnVtYmVyLCByb3dIZWlnaHQ6IG51bWJlcl07XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MjU5XG5cbnZhciBoaWRkZW5UZXh0YXJlYSA9IG51bGw7XG5cbnZhciBnZXRIZWlnaHQgPSBmdW5jdGlvbiBnZXRIZWlnaHQobm9kZSwgc2l6aW5nRGF0YSkge1xuICB2YXIgaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKHNpemluZ0RhdGEuc2l6aW5nU3R5bGUuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAvLyBib3JkZXItYm94OiBhZGQgYm9yZGVyLCBzaW5jZSBoZWlnaHQgPSBjb250ZW50ICsgcGFkZGluZyArIGJvcmRlclxuICAgIHJldHVybiBoZWlnaHQgKyBzaXppbmdEYXRhLmJvcmRlclNpemU7XG4gIH0gLy8gcmVtb3ZlIHBhZGRpbmcsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnRcblxuXG4gIHJldHVybiBoZWlnaHQgLSBzaXppbmdEYXRhLnBhZGRpbmdTaXplO1xufTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9kZUhlaWdodChzaXppbmdEYXRhLCB2YWx1ZSwgbWluUm93cywgbWF4Um93cykge1xuICBpZiAobWluUm93cyA9PT0gdm9pZCAwKSB7XG4gICAgbWluUm93cyA9IDE7XG4gIH1cblxuICBpZiAobWF4Um93cyA9PT0gdm9pZCAwKSB7XG4gICAgbWF4Um93cyA9IEluZmluaXR5O1xuICB9XG5cbiAgaWYgKCFoaWRkZW5UZXh0YXJlYSkge1xuICAgIGhpZGRlblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZm9yY2VIaWRkZW5TdHlsZXMoaGlkZGVuVGV4dGFyZWEpO1xuICB9XG5cbiAgaWYgKGhpZGRlblRleHRhcmVhLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlblRleHRhcmVhKTtcbiAgfVxuXG4gIHZhciBwYWRkaW5nU2l6ZSA9IHNpemluZ0RhdGEucGFkZGluZ1NpemUsXG4gICAgICBib3JkZXJTaXplID0gc2l6aW5nRGF0YS5ib3JkZXJTaXplLFxuICAgICAgc2l6aW5nU3R5bGUgPSBzaXppbmdEYXRhLnNpemluZ1N0eWxlO1xuICB2YXIgYm94U2l6aW5nID0gc2l6aW5nU3R5bGUuYm94U2l6aW5nO1xuICBPYmplY3Qua2V5cyhzaXppbmdTdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoX2tleSkge1xuICAgIHZhciBrZXkgPSBfa2V5O1xuICAgIGhpZGRlblRleHRhcmVhLnN0eWxlW2tleV0gPSBzaXppbmdTdHlsZVtrZXldO1xuICB9KTtcbiAgZm9yY2VIaWRkZW5TdHlsZXMoaGlkZGVuVGV4dGFyZWEpO1xuICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9IHZhbHVlO1xuICB2YXIgaGVpZ2h0ID0gZ2V0SGVpZ2h0KGhpZGRlblRleHRhcmVhLCBzaXppbmdEYXRhKTsgLy8gbWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuXG4gIGhpZGRlblRleHRhcmVhLnZhbHVlID0gJ3gnO1xuICB2YXIgcm93SGVpZ2h0ID0gaGlkZGVuVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZ1NpemU7XG4gIHZhciBtaW5IZWlnaHQgPSByb3dIZWlnaHQgKiBtaW5Sb3dzO1xuXG4gIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgIG1pbkhlaWdodCA9IG1pbkhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgfVxuXG4gIGhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KTtcbiAgdmFyIG1heEhlaWdodCA9IHJvd0hlaWdodCAqIG1heFJvd3M7XG5cbiAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICB9XG5cbiAgaGVpZ2h0ID0gTWF0aC5taW4obWF4SGVpZ2h0LCBoZWlnaHQpO1xuICByZXR1cm4gW2hlaWdodCwgcm93SGVpZ2h0XTtcbn1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG52YXIgcGljayA9IGZ1bmN0aW9uIHBpY2socHJvcHMsIG9iaikge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHByb3ApIHtcbiAgICBhY2NbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcblxudmFyIFNJWklOR19TVFlMRSA9IFsnYm9yZGVyQm90dG9tV2lkdGgnLCAnYm9yZGVyTGVmdFdpZHRoJywgJ2JvcmRlclJpZ2h0V2lkdGgnLCAnYm9yZGVyVG9wV2lkdGgnLCAnYm94U2l6aW5nJywgJ2ZvbnRGYW1pbHknLCAnZm9udFNpemUnLCAnZm9udFN0eWxlJywgJ2ZvbnRXZWlnaHQnLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0JywgJ3BhZGRpbmdCb3R0b20nLCAncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0JywgJ3BhZGRpbmdUb3AnLCAvLyBub24tc3RhbmRhcmRcbid0YWJTaXplJywgJ3RleHRJbmRlbnQnLCAvLyBub24tc3RhbmRhcmRcbid0ZXh0UmVuZGVyaW5nJywgJ3RleHRUcmFuc2Zvcm0nLCAnd2lkdGgnLCAnd29yZEJyZWFrJ107XG52YXIgaXNJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSA7XG5cbnZhciBnZXRTaXppbmdEYXRhID0gZnVuY3Rpb24gZ2V0U2l6aW5nRGF0YShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gIGlmIChzdHlsZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHNpemluZ1N0eWxlID0gcGljayhTSVpJTkdfU1RZTEUsIHN0eWxlKTtcbiAgdmFyIGJveFNpemluZyA9IHNpemluZ1N0eWxlLmJveFNpemluZzsgLy8gcHJvYmFibHkgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIERPTSwgY2FuJ3QgcmVhZCBjb21wdXRlZCBkaW1lbnNpb25zXG5cbiAgaWYgKGJveFNpemluZyA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBJRSAoRWRnZSBoYXMgYWxyZWFkeSBjb3JyZWN0IGJlaGF2aW91cikgcmV0dXJucyBjb250ZW50IHdpZHRoIGFzIGNvbXB1dGVkIHdpZHRoXG4gIC8vIHNvIHdlIG5lZWQgdG8gYWRkIG1hbnVhbGx5IHBhZGRpbmcgYW5kIGJvcmRlciB3aWR0aHNcblxuXG4gIGlmIChpc0lFICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgc2l6aW5nU3R5bGUud2lkdGggPSBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLndpZHRoKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLmJvcmRlckxlZnRXaWR0aCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdSaWdodCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdMZWZ0KSArICdweCc7XG4gIH1cblxuICB2YXIgcGFkZGluZ1NpemUgPSBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdCb3R0b20pICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5wYWRkaW5nVG9wKTtcbiAgdmFyIGJvcmRlclNpemUgPSBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLmJvcmRlckJvdHRvbVdpZHRoKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICByZXR1cm4ge1xuICAgIHNpemluZ1N0eWxlOiBzaXppbmdTdHlsZSxcbiAgICBwYWRkaW5nU2l6ZTogcGFkZGluZ1NpemUsXG4gICAgYm9yZGVyU2l6ZTogYm9yZGVyU2l6ZVxuICB9O1xufTtcblxudmFyIHVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gdXNlV2luZG93UmVzaXplTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgdmFyIGxhdGVzdExpc3RlbmVyID0gdXNlTGF0ZXN0KGxpc3RlbmVyKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxhdGVzdExpc3RlbmVyLmN1cnJlbnQoZXZlbnQpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG59O1xuXG52YXIgVGV4dGFyZWFBdXRvc2l6ZSA9IGZ1bmN0aW9uIFRleHRhcmVhQXV0b3NpemUoX3JlZiwgdXNlclJlZikge1xuICB2YXIgY2FjaGVNZWFzdXJlbWVudHMgPSBfcmVmLmNhY2hlTWVhc3VyZW1lbnRzLFxuICAgICAgbWF4Um93cyA9IF9yZWYubWF4Um93cyxcbiAgICAgIG1pblJvd3MgPSBfcmVmLm1pblJvd3MsXG4gICAgICBfcmVmJG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZiRvbkNoYW5nZSA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25DaGFuZ2UsXG4gICAgICBfcmVmJG9uSGVpZ2h0Q2hhbmdlID0gX3JlZi5vbkhlaWdodENoYW5nZSxcbiAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3JlZiRvbkhlaWdodENoYW5nZSA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25IZWlnaHRDaGFuZ2UsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImNhY2hlTWVhc3VyZW1lbnRzXCIsIFwibWF4Um93c1wiLCBcIm1pblJvd3NcIiwgXCJvbkNoYW5nZVwiLCBcIm9uSGVpZ2h0Q2hhbmdlXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9wcy5zdHlsZSkge1xuICAgIGlmICgnbWF4SGVpZ2h0JyBpbiBwcm9wcy5zdHlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2luZyBgc3R5bGUubWF4SGVpZ2h0YCBmb3IgPFRleHRhcmVhQXV0b3NpemUvPiBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGBtYXhSb3dzYC4nKTtcbiAgICB9XG5cbiAgICBpZiAoJ21pbkhlaWdodCcgaW4gcHJvcHMuc3R5bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNpbmcgYHN0eWxlLm1pbkhlaWdodGAgZm9yIDxUZXh0YXJlYUF1dG9zaXplLz4gaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBgbWluUm93c2AuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQ29udHJvbGxlZCA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIHZhciBsaWJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciByZWYgPSB1c2VDb21wb3NlZFJlZihsaWJSZWYsIHVzZXJSZWYpO1xuICB2YXIgaGVpZ2h0UmVmID0gdXNlUmVmKDApO1xuICB2YXIgbWVhc3VyZW1lbnRzQ2FjaGVSZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgcmVzaXplVGV4dGFyZWEgPSBmdW5jdGlvbiByZXNpemVUZXh0YXJlYSgpIHtcbiAgICB2YXIgbm9kZSA9IGxpYlJlZi5jdXJyZW50O1xuICAgIHZhciBub2RlU2l6aW5nRGF0YSA9IGNhY2hlTWVhc3VyZW1lbnRzICYmIG1lYXN1cmVtZW50c0NhY2hlUmVmLmN1cnJlbnQgPyBtZWFzdXJlbWVudHNDYWNoZVJlZi5jdXJyZW50IDogZ2V0U2l6aW5nRGF0YShub2RlKTtcblxuICAgIGlmICghbm9kZVNpemluZ0RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZWFzdXJlbWVudHNDYWNoZVJlZi5jdXJyZW50ID0gbm9kZVNpemluZ0RhdGE7XG5cbiAgICB2YXIgX2NhbGN1bGF0ZU5vZGVIZWlnaHQgPSBjYWxjdWxhdGVOb2RlSGVpZ2h0KG5vZGVTaXppbmdEYXRhLCBub2RlLnZhbHVlIHx8IG5vZGUucGxhY2Vob2xkZXIgfHwgJ3gnLCBtaW5Sb3dzLCBtYXhSb3dzKSxcbiAgICAgICAgaGVpZ2h0ID0gX2NhbGN1bGF0ZU5vZGVIZWlnaHRbMF0sXG4gICAgICAgIHJvd0hlaWdodCA9IF9jYWxjdWxhdGVOb2RlSGVpZ2h0WzFdO1xuXG4gICAgaWYgKGhlaWdodFJlZi5jdXJyZW50ICE9PSBoZWlnaHQpIHtcbiAgICAgIGhlaWdodFJlZi5jdXJyZW50ID0gaGVpZ2h0O1xuICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgaGVpZ2h0ICsgXCJweFwiLCAnaW1wb3J0YW50Jyk7XG4gICAgICBvbkhlaWdodENoYW5nZShoZWlnaHQsIHtcbiAgICAgICAgcm93SGVpZ2h0OiByb3dIZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHJlc2l6ZVRleHRhcmVhKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQpO1xuICB9O1xuXG4gIHtcbiAgICB1c2VMYXlvdXRFZmZlY3QocmVzaXplVGV4dGFyZWEpO1xuICAgIHVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyKHJlc2l6ZVRleHRhcmVhKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufTtcblxudmFyIGluZGV4ID0gLyogI19fUFVSRV9fICovZm9yd2FyZFJlZihUZXh0YXJlYUF1dG9zaXplKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG52YXIgdXBkYXRlUmVmID0gZnVuY3Rpb24gdXBkYXRlUmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuICByZWYuY3VycmVudCA9IHZhbHVlO1xufTtcblxudmFyIHVzZUNvbXBvc2VkUmVmID0gZnVuY3Rpb24gdXNlQ29tcG9zZWRSZWYobGliUmVmLCB1c2VyUmVmKSB7XG4gIHZhciBwcmV2VXNlclJlZiA9IHVzZVJlZigpO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgbGliUmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcblxuICAgIGlmIChwcmV2VXNlclJlZi5jdXJyZW50KSB7XG4gICAgICB1cGRhdGVSZWYocHJldlVzZXJSZWYuY3VycmVudCwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJldlVzZXJSZWYuY3VycmVudCA9IHVzZXJSZWY7XG5cbiAgICBpZiAoIXVzZXJSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVSZWYodXNlclJlZiwgaW5zdGFuY2UpO1xuICB9LCBbdXNlclJlZl0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ29tcG9zZWRSZWY7XG4iLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpbmRleCA9ICB1c2VMYXlvdXRFZmZlY3QgO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJ3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QnO1xuXG52YXIgdXNlTGF0ZXN0ID0gZnVuY3Rpb24gdXNlTGF0ZXN0KHZhbHVlKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYodmFsdWUpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZjtcbn07XG5cbmV4cG9ydCB7IHVzZUxhdGVzdCBhcyBkZWZhdWx0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9