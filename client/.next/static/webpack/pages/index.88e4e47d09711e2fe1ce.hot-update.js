webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentUpdateForm.js":
/*!*****************************************!*\
  !*** ./components/CommentUpdateForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\CommentUpdateForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "CommentUpdateForm__Container",
  componentId: "sc-1hhyv42-0"
})(["display:flex;margin-top:5px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "CommentUpdateForm__Form",
  componentId: "sc-1hhyv42-1"
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentUpdateForm__ContentInput",
  componentId: "sc-1hhyv42-2"
})(["width:90%;border:none;padding:8px;font-size:16px;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;

var CommentUpdateForm = function CommentUpdateForm(_ref) {
  _s();

  var commentId = _ref.commentId,
      commentContent = _ref.commentContent,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(commentContent),
      commentInput = _useState[0],
      setCommentInput = _useState[1];

  var onChangeComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setCommentInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [commentInput]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: UPDATE_COMMENT_REQUEST,
      data: {
        commentId: commentId,
        content: ContentInput
      }
    });
  });
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    value: commentInput,
    onChange: onChangeComment,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })));
};

_s(CommentUpdateForm, "Rt5ZOOuu+VYbdWX1lXznY7ZnH6A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c4 = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  commentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  commentContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setEditMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentUpdateForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "CommentUpdateForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQ29tbWVudFVwZGF0ZUZvcm0iLCJjb21tZW50SWQiLCJjb21tZW50Q29udGVudCIsInNldEVkaXRNb2RlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiY29tbWVudElucHV0Iiwic2V0Q29tbWVudElucHV0Iiwib25DaGFuZ2VDb21tZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwibGVuZ3RoIiwib25TdWJtaXQiLCJ0eXBlIiwiVVBEQVRFX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLHFHQUFWO01BQU1ELEk7QUFTTixJQUFNRSxZQUFZLEdBQUdKLGlFQUFNLENBQUNLLCtEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsc0lBQWxCO01BQU1ELFk7O0FBV04sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFnRDtFQUFBOztFQUFBLElBQTdDQyxTQUE2QyxRQUE3Q0EsU0FBNkM7RUFBQSxJQUFsQ0MsY0FBa0MsUUFBbENBLGNBQWtDO0VBQUEsSUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtFQUN4RSxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLGdCQUF3Q0Msc0RBQVEsQ0FBQ0osY0FBRCxDQUFoRDtFQUFBLElBQU9LLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBRUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN6QyxJQUFnQkMsS0FBaEIsR0FBMEJELENBQTFCLENBQU9FLE1BQVAsQ0FBZ0JELEtBQWhCO0lBQ0FKLGVBQWUsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQVYsQ0FBZjs7SUFDQSxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBSixFQUFrQjtNQUNoQkMscUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNELENBRkQsTUFFTyxJQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JKLEtBQUssQ0FBQ0ksTUFBTixHQUFlLEdBQXpDLEVBQThDO01BQ25ERCxxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQVJrQyxFQVFoQyxDQUFDUixZQUFELENBUmdDLENBQW5DO0VBVUEsSUFBTVUsUUFBUSxHQUFHUCx5REFBVyxDQUFDLFlBQU07SUFDakNOLFFBQVEsQ0FBRTtNQUNSYyxJQUFJLEVBQUVDLHNCQURFO01BRVJDLElBQUksRUFBRTtRQUNKbkIsU0FBUyxFQUFFQSxTQURQO1FBRUpvQixPQUFPLEVBQUV2QjtNQUZMO0lBRkUsQ0FBRixDQUFSO0VBT0QsQ0FSMkIsQ0FBNUI7RUFVQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxJQUFEO0lBQU0sUUFBUSxFQUFFbUIsUUFBaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsWUFBRDtJQUNFLEtBQUssRUFBRVYsWUFEVDtJQUVFLFFBQVEsRUFBRUUsZUFGWjtJQUdFLEtBQUssRUFBRTtNQUNMYSxNQUFNLEVBQUUsTUFESDtNQUVMQyxPQUFPLEVBQUUsTUFGSjtNQUdMQyxRQUFRLEVBQUU7SUFITCxDQUhUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLENBREY7QUFlRCxDQXZDRDs7R0FBTXhCLGlCO1VBQ2FLLHVEOzs7TUFEYkwsaUI7QUF5Q05BLGlCQUFpQixDQUFDeUIsU0FBbEIsR0FBOEI7RUFDNUJ4QixTQUFTLEVBQUV5QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURBO0VBRTVCMUIsY0FBYyxFQUFFd0IsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGTDtFQUc1QnpCLFdBQVcsRUFBRXVCLGlEQUFTLENBQUNJLElBQVYsQ0FBZUY7QUFIQSxDQUE5QjtBQU1lNUIsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODhlNGU0N2QwOTcxMWUyZmUxY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICB3aWR0aDogOTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudFVwZGF0ZUZvcm0gPSAoeyBjb21tZW50SWQsIGNvbW1lbnRDb250ZW50LCBzZXRFZGl0TW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5wdXQsIHNldENvbW1lbnRJbnB1dF0gPSB1c2VTdGF0ZShjb21tZW50Q29udGVudCk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ29tbWVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRDb21tZW50SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbW1lbnRJbnB1dF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoICh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb21tZW50SWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICBjb250ZW50OiBDb250ZW50SW5wdXQsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8Q29udGVudElucHV0IFxyXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnR9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50VXBkYXRlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgY29tbWVudENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZXRFZGl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRVcGRhdGVGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=