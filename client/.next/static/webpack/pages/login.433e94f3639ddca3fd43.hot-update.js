webpackHotUpdate_N_E("pages/login",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE, ADD_POST_OF_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  me: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
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
var LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
var LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
var LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.me = action.data;
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.me = action.data;
        draft.logInLoading = false;
        draft.logInDone = true;
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
        draft.logInDone = false;
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
        draft.me.introduce = action.data.introduce;
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceDone = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nIiwiY2hhbmdlSW50cm9kdWNlRG9uZSIsImNoYW5nZUludHJvZHVjZUVycm9yIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUIiwiQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTIiwiQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFIiwiQUREX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJkYXRhIiwiZXJyb3IiLCJpbnRyb2R1Y2UiLCJQb3N0cyIsInVuc2hpZnQiLCJpZCIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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UUFDQTs7TUFDRixLQUFLYyx3QkFBTDtRQUNFUSxLQUFLLENBQUNyQyxFQUFOLENBQVN5QyxTQUFULEdBQXFCTixNQUFNLENBQUNJLElBQVAsQ0FBWUUsU0FBakM7UUFDQUosS0FBSyxDQUFDeEIsc0JBQU4sR0FBK0IsS0FBL0I7UUFDQXdCLEtBQUssQ0FBQ3ZCLG1CQUFOLEdBQTRCLElBQTVCO1FBQ0E7O01BQ0YsS0FBS2dCLHdCQUFMO1FBQ0VPLEtBQUssQ0FBQ3hCLHNCQUFOLEdBQStCLEtBQS9CO1FBQ0F3QixLQUFLLENBQUN0QixvQkFBTixHQUE2Qm9CLE1BQU0sQ0FBQ0ssS0FBcEM7UUFDQTs7TUFDRixLQUFLVCxjQUFMO1FBQ0VNLEtBQUssQ0FBQ3JDLEVBQU4sQ0FBUzBDLEtBQVQsQ0FBZUMsT0FBZixDQUF1QjtVQUFFQyxFQUFFLEVBQUVULE1BQU0sQ0FBQ0k7UUFBYixDQUF2QjtRQUNBOztNQUNGLEtBQUtQLGlCQUFMO1FBQ0VLLEtBQUssQ0FBQ3JDLEVBQU4sQ0FBUzBDLEtBQVQsR0FBaUJMLEtBQUssQ0FBQ3JDLEVBQU4sQ0FBUzBDLEtBQVQsQ0FBZUcsTUFBZixDQUFzQixVQUFDQyxDQUFEO1VBQUEsT0FBT0EsQ0FBQyxDQUFDRixFQUFGLEtBQVNULE1BQU0sQ0FBQ0ksSUFBdkI7UUFBQSxDQUF0QixDQUFqQjtRQUNBOztNQUNGO1FBQ0U7SUE5RUo7RUFnRkQsQ0FqRmEsQ0FBZDtBQWtGRCxDQW5GRDs7QUFxRmVOLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjQzM2U5NGYzNjM5ZGRjYTNmZDQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWU6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlSW50cm9kdWNlTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlSW50cm9kdWNlRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlSW50cm9kdWNlRXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSBcIkxPQURfTVlfSU5GT19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9IFwiTE9BRF9NWV9JTkZPX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gXCJMT0FEX01ZX0lORk9fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVCA9IFwiQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1MgPSBcIkNIQU5HRV9JTlRST0RVQ0VfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFID0gXCJDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9PRl9NRSA9IFwiQUREX1BPU1RfT0ZfTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9JTlRST0RVQ0VfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5pbnRyb2R1Y2UgPSBhY3Rpb24uZGF0YS5pbnRyb2R1Y2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9