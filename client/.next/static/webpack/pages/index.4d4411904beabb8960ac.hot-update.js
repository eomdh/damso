webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\CommentForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CommentForm__Container",
  componentId: "sc-4gemyq-0"
})(["width:100%;max-height:500px;display:flex;justify-content:center;align-items:center;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "CommentForm__Form",
  componentId: "sc-4gemyq-1"
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentForm__ContentInput",
  componentId: "sc-4gemyq-2"
})(["width:83%;border:none;padding:8px;font-size:16px;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "CommentForm__SubmitButton",
  componentId: "sc-4gemyq-3"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:22px;right:20px;cursor:pointer;opacity:", ";transition:opacity 0.3s linear;display:flex;justify-content:center;align-items:center;"], function (props) {
  return props.isAvailableUpload ? 1 : 0.6;
});
_c4 = SubmitButton;

var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setContent(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [content]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (content.length > 500) {
      alert("글자수가 너무 많습니다.");
      return;
    }

    if (!content || !content.trim()) {
      return alert("댓글을 작성해주세요.");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_COMMENT_REQUEST"],
      data: {
        content: content,
        postId: post.id,
        userId: id
      }
    });
    console.log(post.id, content);
  }, [content]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    placeholder: id ? "댓글을 남겨주세요." : "로그인 후 이용해주세요.",
    disabled: id ? false : true,
    value: content,
    onChange: onChangeContent,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx(SubmitButton, {
    type: "submit",
    isAvailableUpload: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "\uC785\uB825")));
};

_s(CommentForm, "nFSoyer67Y/G1Ay6LSqHuF6xCrE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c5 = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "SubmitButton");
$RefreshReg$(_c5, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVVwbG9hZCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiaXNBdmFpbGFibGVQb3N0aW5nIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwicG9zdElkIiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkZBQWY7S0FBTUYsUztBQVFOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxxR0FBVjtNQUFNRCxJO0FBU04sSUFBTUUsWUFBWSxHQUFHSixpRUFBTSxDQUFDSywrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLHNJQUFsQjtNQUFNRCxZO0FBV04sSUFBTUUsWUFBWSxHQUFHTix5REFBTSxDQUFDTyxNQUFWO0VBQUE7RUFBQTtBQUFBLDhTQWNMLFVB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LGlCQUFpQixFQUFFckIsa0JBQS9DO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBWkYsQ0FERixDQURGO0FBa0JELENBbkREOztHQUFNWixXO1VBQ2FHLHVELEVBQ05FLHVEOzs7TUFGUEwsVztBQXFEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGQ0NDExOTA0YmVhYmI4OTYwYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICB3aWR0aDogODMlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVVwbG9hZCA/IDEgOiAwLjYpfTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIFxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29udGVudF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY29udGVudC5sZW5ndGggPiA1MDApIHtcclxuICAgICAgYWxlcnQoXCLquIDsnpDsiJjqsIAg64SI66y0IOunjuyKteuLiOuLpC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghY29udGVudCB8fCAhY29udGVudC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi64yT6riA7J2EIOyekeyEse2VtOyjvOyEuOyalC5cIik7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgY29udGVudDogY29udGVudCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocG9zdC5pZCwgY29udGVudCk7XHJcbiAgfSwgW2NvbnRlbnRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8Q29udGVudElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17IGlkID8gXCLrjJPquIDsnYQg64Ko6rKo7KO87IS47JqULlwiIDogXCLroZzqt7jsnbgg7ZuEIOydtOyaqe2VtOyjvOyEuOyalC5cIiB9XHJcbiAgICAgICAgICBkaXNhYmxlZD17IGlkID8gZmFsc2UgOiB0cnVlIH1cclxuICAgICAgICAgIHZhbHVlPXsgY29udGVudCB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlVXBsb2FkPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PuyeheugpTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=