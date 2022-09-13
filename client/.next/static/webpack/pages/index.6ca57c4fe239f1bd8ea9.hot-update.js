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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\CommentForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CommentForm__Container",
  componentId: "sc-1s2wapq-0"
})(["width:100%;margin-left:20px;max-height:500px;display:flex;justify-content:center;align-items:center;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "CommentForm__Form",
  componentId: "sc-1s2wapq-1"
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = Form;
var TextAreaContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CommentForm__TextAreaContainer",
  componentId: "sc-1s2wapq-2"
})(["width:80%;"]);
_c3 = TextAreaContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "CommentForm__ContentInput",
  componentId: "sc-1s2wapq-3"
})(["width:100%;border:none;padding:8px;font-size:16px;font-family:'Noto Sans',sans-serif;font-family:'Noto Sans KR',sans-serif;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;@media ", "{width:72%;}"], _utils_device__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
_c4 = ContentInput;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "CommentForm__SubmitButton",
  componentId: "sc-1s2wapq-4"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:400;font-size:15px;width:70px;height:30px;border-radius:6px;bottom:22px;right:45px;cursor:pointer;opacity:", ";transition:opacity 0.3s linear;display:flex;justify-content:center;align-items:center;@media ", "{font-size:12px;width:50px;height:30px;right:30px;}"], function (props) {
  return props.isAvailableUpload ? 1 : 0.6;
}, _utils_device__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
_c5 = SubmitButton;

var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      addCommentDone = _useSelector.addCommentDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addCommentDone) {
      setContent('');
    }
  }, [addCommentDone]);
  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setContent(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 200) {
      setIsAvailablePosting(false);
    }

    ;
  }, [content]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (content.length > 200) {
      alert("글자수가 너무 많습니다.");
      return;
    }

    ;

    if (!content || !content.trim()) {
      return alert("댓글을 작성해주세요.");
    }

    ;
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"],
      data: {
        content: content,
        postId: post.id,
        userId: id
      }
    });
  }, [content]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(TextAreaContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
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
      lineNumber: 126,
      columnNumber: 11
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    isAvailableUpload: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "\uC785\uB825")));
};

_s(CommentForm, "7qPDswBu5YXAXY+HcczbmkhB6zI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c6 = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "TextAreaContainer");
$RefreshReg$(_c4, "ContentInput");
$RefreshReg$(_c5, "SubmitButton");
$RefreshReg$(_c6, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIlRleHRBcmVhQ29udGFpbmVyIiwiQ29udGVudElucHV0IiwiVGV4dEFyZWEiLCJkZXZpY2UiLCJtb2JpbGVMIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVVwbG9hZCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJhZGRDb21tZW50RG9uZSIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJwb3N0SWQiLCJ1c2VySWQiLCJyZXNpemUiLCJvdXRsaW5lIiwib3ZlcmZsb3ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsNEdBQWY7S0FBTUYsUztBQVNOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxxR0FBVjtNQUFNRCxJO0FBU04sSUFBTUUsaUJBQWlCLEdBQUdKLHlE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QTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxJQUFEO0lBQU0sUUFBUSxFQUFFWSxRQUFoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxpQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQ0UsV0FBVyxFQUFFbkIsRUFBRSxHQUFHLFlBQUgsR0FBa0IsZUFEbkM7SUFFRSxRQUFRLEVBQUVBLEVBQUUsR0FBRyxLQUFILEdBQVcsSUFGekI7SUFHRSxLQUFLLEVBQUVPLE9BSFQ7SUFJRSxRQUFRLEVBQUVLLGVBSlo7SUFLRSxLQUFLLEVBQUU7TUFDTGUsTUFBTSxFQUFFLE1BREg7TUFFTEMsT0FBTyxFQUFFLE1BRko7TUFHTEMsUUFBUSxFQUFFO0lBSEwsQ0FMVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FERixFQWNFLE1BQUMsWUFBRDtJQUFjLElBQUksRUFBQyxRQUFuQjtJQUE0QixpQkFBaUIsRUFBRXBCLGtCQUEvQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQWRGLENBREYsQ0FERjtBQW9CRCxDQWpFRDs7R0FBTWIsVztVQUNhRyx1RCxFQUNORSx1RCxFQUNnQkEsdUQ7OztNQUh2QkwsVztBQW1FTkEsV0FBVyxDQUFDa0MsU0FBWixHQUF3QjtFQUN0QmpDLElBQUksRUFBRWtDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREQsQ0FBeEI7QUFJZXJDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjYTU3YzRmZTIzOWYxYmQ4ZWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vdXRpbHMvZGV2aWNlJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dEFyZWFDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MCU7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvdHRvbTogMjJweDtcclxuICByaWdodDogNDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuaXNBdmFpbGFibGVVcGxvYWQgPyAxIDogMC42KX07XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgeyBhZGRDb21tZW50RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xyXG4gICAgICBzZXRDb250ZW50KCcnKTtcclxuICAgIH1cclxuICB9LCBbYWRkQ29tbWVudERvbmVdKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDIwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29udGVudF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY29udGVudC5sZW5ndGggPiAyMDApIHtcclxuICAgICAgYWxlcnQoXCLquIDsnpDsiJjqsIAg64SI66y0IOunjuyKteuLiOuLpC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLrjJPquIDsnYQg7J6R7ISx7ZW07KO87IS47JqULlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsIFxyXG4gICAgICAgIHBvc3RJZDogcG9zdC5pZCwgXHJcbiAgICAgICAgdXNlcklkOiBpZCBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW2NvbnRlbnRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8VGV4dEFyZWFDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29udGVudElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpZCA/IFwi64yT6riA7J2EIOuCqOqyqOyjvOyEuOyalC5cIiA6IFwi66Gc6re47J24IO2bhCDsnbTsmqntlbTso7zshLjsmpQuXCJ9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpZCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9UZXh0QXJlYUNvbnRhaW5lcj5cclxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpc0F2YWlsYWJsZVVwbG9hZD17aXNBdmFpbGFibGVQb3N0aW5nfT7snoXroKU8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9