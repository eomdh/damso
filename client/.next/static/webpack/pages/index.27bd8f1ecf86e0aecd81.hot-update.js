webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\Comment.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-pzjnng-0"
})(["min-height:30px;padding:5px 15px 15px 30px;"]);
_c = Container;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Comment__InformationContainer",
  componentId: "sc-pzjnng-1"
})(["display:flex;height:20px;justify-content:space-between;margin:3px 10px 0px 10px;"]);
_c2 = InformationContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Comment__ProfileImageContainer",
  componentId: "sc-pzjnng-2"
})(["width:35px;height:35px;margin-right:12px;border-radius:50px;overflow:hidden;float:left;"]);
_c3 = ProfileImageContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({
  displayName: "Comment__Nickname",
  componentId: "sc-pzjnng-3"
})(["font-size:17px;font-weight:600;"]);
_c4 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({
  displayName: "Comment__Date",
  componentId: "sc-pzjnng-4"
})(["all:unset;position:absolute;margin-top:10px;margin-left:2px;color:#657785;font-size:14px;"]);
_c5 = Date;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Comment__DeleteButton",
  componentId: "sc-pzjnng-5"
})(["display:flex;color:#e8537c;opacity:0.6;font-size:16px;cursor:pointer;border-radius:50%;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c6 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Comment__ContentContainer",
  componentId: "sc-pzjnng-6"
})(["display:flex;flex-direction:column;padding-top:20px;font-size:14px;"]);
_c7 = ContentContainer;

var Comment = function Comment(_ref) {
  _s();

  var postId = _ref.postId,
      comment = _ref.comment;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var onRemoveComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_COMMENT_REQUEST"],
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
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: comment.User.profileImagePath ? comment.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, comment.User.nickname), id && comment.User.id === parseInt(id) ? __jsx(DeleteButton, {
    onClick: onRemoveComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  })) : null, __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format('YYYY/MM/DD h:mm'))), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, comment.content));
};

_s(Comment, "AZTdJt9qu48FAOWTJharl3nWuAc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb21tZW50IiwicG9zdElkIiwiY29tbWVudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJvblJlbW92ZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbW1lbnRJZCIsIlVzZXIiLCJwcm9maWxlSW1hZ2VQYXRoIiwibmlja25hbWUiLCJwYXJzZUludCIsIm1vbWVudCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG1EQUFmO0tBQU1GLFM7QUFLTixJQUFNRyxvQkFBb0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx3RkFBMUI7TUFBTUMsb0I7QUFPTixJQUFNQyxxQkFBcUIsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwrRkFBM0I7TUFBTUUscUI7QUFTTixJQUFNQyxRQUFRLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7RUFBQTtFQUFBO0FBQUEsdUNBQWQ7TUFBTUQsUTtBQUtOLElBQU1FLElBQUksR0FBR04seURBQU0sQ0FBQ0ssSUFBVjtFQUFBO0VBQUE7QUFBQSxpR0FBVjtNQUFNQyxJO0FBU04sSUFBTUMsWUFBWSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDZJQUFsQjtNQUFNTSxZO0FBYU4sSUFBTUMsZ0JBQWdCLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkVBQXRCO01BQU1PLGdCOztBQU9OLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXlCO0VBQUE7O0VBQUEsSUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtFQUFBLElBQWRDLE9BQWMsUUFBZEEsT0FBYztFQUN2QyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0VBQ0EsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQTs7SUFBQSx5QkFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVKLEVBQTFCO0VBQUEsQ0FBRCxDQUF0QjtFQUVBLElBQU1LLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ3hDUixRQUFRLENBQUM7TUFDUFMsSUFBSSxFQUFFQyxxRUFEQztNQUVQQyxJQUFJLEVBQUU7UUFDSmIsTUFBTSxFQUFFQSxNQURKO1FBRUpjLFNBQVMsRUFBRWIsT0FBTyxDQUFDRztNQUZmO0lBRkMsQ0FBRCxDQUFSO0VBT0QsQ0FSa0MsRUFRaEMsRUFSZ0MsQ0FBbkM7RUFVQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0ksTUFBQyxxREFBRDtJQUFjLElBQUksRUFBRUgsT0FBTyxDQUFDYyxJQUFSLENBQWFDLGdCQUFiLEdBQ0VmLE9BQU8sQ0FBQ2MsSUFBUixDQUFhQyxnQkFEZixHQUVFLElBRnRCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQURGLEVBTUUsTUFBQyxvQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxRQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBV2YsT0FBTyxDQUFDYyxJQUFSLENBQWFFLFFBQXhCLENBREYsRUFFSWIsRUFBRSxJQUFJSCxPQUFPLENBQUNjLElBQVIsQ0FBYVgsRUFBYixLQUFvQmMsUUFBUSxDQUFDZCxFQUFELENBQWxDLEdBQ0ksTUFBQyxZQUFEO0lBQWMsT0FBTyxFQUFFSyxlQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FESixHQUlFLElBTk4sRUFPRSxNQUFDLElBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFRVSw2Q0FBTSxDQUFDbEIsT0FBTyxDQUFDbUIsU0FBVCxDQUFOLENBQTBCQyxNQUExQixDQUFpQyxpQkFBakMsQ0FBUixDQVBGLENBTkYsRUFlRSxNQUFDLGdCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR3BCLE9BQU8sQ0FBQ3FCLE9BRFgsQ0FmRixDQURGO0FBcUJELENBbkNEOztHQUFNdkIsTztVQUNhSSx1RCxFQUNORSx1RDs7O01BRlBOLE87QUFxQ05BLE9BQU8sQ0FBQ3dCLFNBQVIsR0FBb0I7RUFDbEJ0QixPQUFPLEVBQUV1QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWUzQixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2JkOGYxZWNmODZlMGFlY2Q4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuL1Byb2ZpbGVJbWFnZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYVRyYXNoQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggMTVweCAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5mb3JtYXRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDNweCAxMHB4IDBweCAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbG9hdDogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW5gXHJcbiAgYWxsOiB1bnNldDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGNvbG9yOiAjNjU3Nzg1O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogI2U4NTM3YztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7IHBvc3RJZCwgY29tbWVudCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogcG9zdElkLFxyXG4gICAgICAgIGNvbW1lbnRJZDogY29tbWVudC5pZCxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSBwYXRoPXtjb21tZW50LlVzZXIucHJvZmlsZUltYWdlUGF0aCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb21tZW50LlVzZXIucHJvZmlsZUltYWdlUGF0aCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfSAvPlxyXG4gICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPEluZm9ybWF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgIDxOaWNrbmFtZT57Y29tbWVudC5Vc2VyLm5pY2tuYW1lfTwvTmlja25hbWU+XHJcbiAgICAgICAgeyBpZCAmJiBjb21tZW50LlVzZXIuaWQgPT09IHBhcnNlSW50KGlkKVxyXG4gICAgICAgICAgPyAoIDxEZWxldGVCdXR0b24gb25DbGljaz17b25SZW1vdmVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGYVRyYXNoQWx0IC8+XHJcbiAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+IClcclxuICAgICAgICAgIDogbnVsbCB9XHJcbiAgICAgICAgPERhdGU+eyBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdCgnWVlZWS9NTS9ERCBoOm1tJykgfTwvRGF0ZT5cclxuICAgICAgPC9JbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnQucHJvcFR5cGVzID0ge1xyXG4gIGNvbW1lbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==