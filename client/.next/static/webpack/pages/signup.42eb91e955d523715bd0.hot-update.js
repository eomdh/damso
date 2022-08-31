webpackHotUpdate_N_E("pages/signup",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE, ADD_POST_OF_ME, REMOVE_POST_OF_ME, logOut, changeIntroduce, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeIntroduce", function() { return changeIntroduce; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
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
  changeIntroduceError: null,
  me: null,
  signUpData: {},
  loginData: {}
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

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    id: '1',
    nickname: 'eomdh',
    introduce: '안녕하세요~ 엄덕현입니다.',
    profileImagePath: '',
    Posts: []
  });
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nIiwiY2hhbmdlSW50cm9kdWNlRG9uZSIsImNoYW5nZUludHJvZHVjZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUIiwiQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTIiwiQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFIiwiQUREX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImRhdGEiLCJpZCIsIm5pY2tuYW1lIiwiaW50cm9kdWNlIiwicHJvZmlsZUltYWdlUGF0aCIsIlBvc3RzIiwibG9nT3V0IiwidHlwZSIsImNoYW5nZUludHJvZHVjZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxZQUFZLEVBQUUsS0FEWTtFQUUxQkMsU0FBUyxFQUFFLEtBRmU7RUFHMUJDLFVB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S0FBSyxDQUFDaEMsb0JBQU4sR0FBNkI4QixNQUFNLENBQUNHLEtBQXBDO1FBQ0E7O01BQ0YsS0FBS2pCLGNBQUw7UUFDRWdCLEtBQUssQ0FBQy9CLEVBQU4sQ0FBU3VCLEtBQVQsQ0FBZVUsT0FBZixDQUF1QjtVQUFFZCxFQUFFLEVBQUVVLE1BQU0sQ0FBQ1g7UUFBYixDQUF2QjtRQUNBOztNQUNGLEtBQUtGLGlCQUFMO1FBQ0VlLEtBQUssQ0FBQy9CLEVBQU4sQ0FBU3VCLEtBQVQsR0FBaUJRLEtBQUssQ0FBQy9CLEVBQU4sQ0FBU3VCLEtBQVQsQ0FBZVcsTUFBZixDQUFzQixVQUFDQyxDQUFEO1VBQUEsT0FBT0EsQ0FBQyxDQUFDaEIsRUFBRixLQUFTVSxNQUFNLENBQUNYLElBQXZCO1FBQUEsQ0FBdEIsQ0FBakI7UUFDQTs7TUFDRjtRQUNFO0lBL0RKO0VBaUVELENBbEVhLENBQWQ7QUFtRUQsQ0FwRUQ7O0FBc0VlUyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuNDJlYjkxZTk1NWQ1MjM3MTViZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nOiBmYWxzZSxcclxuICBjaGFuZ2VJbnRyb2R1Y2VEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VJbnRyb2R1Y2VFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVCA9IFwiQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1MgPSBcIkNIQU5HRV9JTlRST0RVQ0VfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFID0gXCJDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9PRl9NRSA9IFwiQUREX1BPU1RfT0ZfTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBpZDogJzEnLFxyXG4gIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIGludHJvZHVjZTogJ+yViOuFle2VmOyEuOyalH4g7JeE642V7ZiE7J6F64uI64ukLicsXHJcbiAgcHJvZmlsZUltYWdlUGF0aDogJycsXHJcbiAgUG9zdHM6IFtdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlSW50cm9kdWNlID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9JTlRST0RVQ0VfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuaW50cm9kdWNlID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=