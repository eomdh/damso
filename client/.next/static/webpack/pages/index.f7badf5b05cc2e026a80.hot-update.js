webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE, ADD_POST_OF_ME, REMOVE_POST_OF_ME, logIn, logOut, changeIntroduce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_INTRODUCE_REQUEST", function() { return CHANGE_INTRODUCE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_INTRODUCE_SUCCESS", function() { return CHANGE_INTRODUCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_INTRODUCE_FAILURE", function() { return CHANGE_INTRODUCE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_OF_ME", function() { return ADD_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeIntroduce", function() { return changeIntroduce; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  me: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeIntroduceLoading: false,
  changeIntroduceDone: false,
  changeIntroduceError: null
};
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_INTRODUCE_REQUEST = "CHANGE_INTRODUCE_REQUEST";
var CHANGE_INTRODUCE_SUCCESS = "CHANGE_INTRODUCE_SUCCESS";
var CHANGE_INTRODUCE_FAILURE = "CHANGE_INTRODUCE_FAILURE";
var ADD_POST_OF_ME = "ADD_POST_OF_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
var logIn = function logIn(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logOut = function logOut() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var changeIntroduce = function changeIntroduce(data) {
  return {
    type: CHANGE_INTRODUCE_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_INTRODUCE_REQUEST:
        draft.changeIntroduceLoading = true;
        draft.changeIntroduceDone = false;
        draft.changeIntroduceError = null;
        break;

      case CHANGE_INTRODUCE_SUCCESS:
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceDone = true;
        draft.me.introduce = action.data;
        break;

      case CHANGE_INTRODUCE_FAILURE:
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceError = action.error;
        break;

      case ADD_POST_OF_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id === action.data;
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZUludHJvZHVjZUxvYWRpbmciLCJjaGFuZ2VJbnRyb2R1Y2VEb25lIiwiY2hhbmdlSW50cm9kdWNlRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QiLCJDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1MiLCJDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkUiLCJBRERfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9nSW4iLCJkYXRhIiwidHlwZSIsImxvZ091dCIsImNoYW5nZUludHJvZHVjZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiaW50cm9kdWNlIiwiUG9zdHMiLCJ1bnNoaWZ0IiwiaWQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxFQUFFLEVBQUUsSUFEc0I7RUFFMUJDLFlBQVksRUFB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QUVDLEVBQUUsRUFBRVAsTUFBTSxDQUFDTjtRQUFiLENBQXZCO1FBQ0E7O01BQ0YsS0FBS0YsaUJBQUw7UUFDRVUsS0FBSyxDQUFDcEMsRUFBTixDQUFTdUMsS0FBVCxHQUFpQkgsS0FBSyxDQUFDcEMsRUFBTixDQUFTdUMsS0FBVCxDQUFlRyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7VUFBQSxPQUFPQSxDQUFDLENBQUNGLEVBQUYsS0FBU1AsTUFBTSxDQUFDTixJQUF2QjtRQUFBLENBQXRCLENBQWpCO1FBQ0E7O01BQ0Y7UUFDRTtJQS9ESjtFQWlFRCxDQWxFYSxDQUFkO0FBbUVELENBcEVEOztBQXNFZUksc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjdiYWRmNWIwNWNjMmUwMjZhODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtZTogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VJbnRyb2R1Y2VEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VJbnRyb2R1Y2VFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QgPSBcIkNIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTID0gXCJDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRSA9IFwiQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfT0ZfTUUgPSBcIkFERF9QT1NUX09GX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dJbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUludHJvZHVjZSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZS5pbnRyb2R1Y2UgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==