webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\Comment.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-pzjnng-0"
})(["min-height:30px;padding:5px 15px 15px 30px;"]);
_c = Container;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__InformationContainer",
  componentId: "sc-pzjnng-1"
})(["display:flex;justify-content:space-between;height:20px;align-items:center;margin:3px 10px 0px 10px;"]);
_c2 = InformationContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__ProfileImageContainer",
  componentId: "sc-pzjnng-2"
})(["width:35px;height:35px;margin-right:12px;border-radius:50px;overflow:hidden;float:left;"]);
_c3 = ProfileImageContainer;
var ALink = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].a.withConfig({
  displayName: "Comment__ALink",
  componentId: "sc-pzjnng-3"
})(["color:black;cursor:pointer;"]);
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Comment__Nickname",
  componentId: "sc-pzjnng-4"
})(["font-size:17px;font-weight:600;"]);
_c4 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Comment__Date",
  componentId: "sc-pzjnng-5"
})(["margin-left:8px;color:#657785;font-size:13px;"]);
_c5 = Date;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__DeleteButton",
  componentId: "sc-pzjnng-6"
})(["color:#e8537c;opacity:0.6;font-size:16px;cursor:pointer;border-radius:50%;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c6 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__ContentContainer",
  componentId: "sc-pzjnng-7"
})(["display:flex;flex-direction:column;padding-top:15px;font-size:15px;"]);
_c7 = ContentContainer;

var Comment = function Comment(_ref) {
  _s();

  var postId = _ref.postId,
      comment = _ref.comment;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var onRemoveComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_COMMENT_REQUEST"],
      data: {
        postId: postId,
        commentId: comment.id
      }
    });
  }, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: comment.User.profileImagePath ? comment.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, comment.User.nickname), __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(comment.createdAt).format('YYYY/MM/DD h:mm'))), id && comment.User.id === parseInt(id) ? __jsx(DeleteButton, {
    onClick: onRemoveComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, comment.content));
};

_s(Comment, "AZTdJt9qu48FAOWTJharl3nWuAc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c8 = Comment;
Comment.propTypes = {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "InformationContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "Date");
$RefreshReg$(_c6, "DeleteButton");
$RefreshReg$(_c7, "ContentContainer");
$RefreshReg$(_c8, "Comment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiQUxpbmsiLCJhIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb21tZW50IiwicG9zdElkIiwiY29tbWVudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJvblJlbW92ZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbW1lbnRJZCIsIlVzZXIiLCJwcm9maWxlSW1hZ2VQYXRoIiwibmlja25hbWUiLCJtb21lbnQiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJwYXJzZUludCIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxtREFBZjtLQUFNRixTO0FBS04sSUFBTUcsb0JBQW9CLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkdBQTFCO01BQU1DLG9CO0FBUU4sSUFBTUMscUJBQXFCLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsK0ZBQTNCO01BQU1FLHFCO0FBU04sSUFBTUMsS0FBSyxHQUFHSix5REFBTSxDQUFDSyxDQUFWO0VBQUE7RUFBQTtBQUFBLG1DQUFYO0FBS0EsSUFBTUMs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M2I5MGUwYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFUcmFzaEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IEluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDNweCAxMHB4IDBweCAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbG9hdDogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IEFMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzY1Nzc4NTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgcG9zdElkLCBjb21tZW50IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBwb3N0SWQsXHJcbiAgICAgICAgY29tbWVudElkOiBjb21tZW50LmlkLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPFByb2ZpbGVJbWFnZSBwYXRoPXtjb21tZW50LlVzZXIucHJvZmlsZUltYWdlUGF0aCA/IGNvbW1lbnQuVXNlci5wcm9maWxlSW1hZ2VQYXRoIDogbnVsbH0gLz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE5pY2tuYW1lPntjb21tZW50LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT5cclxuICAgICAgICAgIDxEYXRlPnsgbW9tZW50KGNvbW1lbnQuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVkvTU0vREQgaDptbScpIH08L0RhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyBpZCAmJiBjb21tZW50LlVzZXIuaWQgPT09IHBhcnNlSW50KGlkKVxyXG4gICAgICAgICAgPyAoIDxEZWxldGVCdXR0b24gb25DbGljaz17b25SZW1vdmVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGYVRyYXNoQWx0IC8+XHJcbiAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+IClcclxuICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgIDwvSW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgIDxDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50LnByb3BUeXBlcyA9IHtcclxuICBjb21tZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdLCJzb3VyY2VSb290IjoiIn0=