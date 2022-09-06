module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Damso = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Damso")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

Damso.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(Damso));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
      ;
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, removePost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_REQUEST", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_SUCCESS", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_FAILURE", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePost", function() { return removePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null
};
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const removePost = data => ({
  type: REMOVE_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.push(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.data;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case REMOVE_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments = post.Comments.filter(v => v.id !== action.data.CommentId);
          draft.removeCommentLoading = false;
          draft.removeCommentDone = true;
          break;
        }

      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.data;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.data;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.data;
        break;

      default:
        break;
    }

    ;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE, CHANGE_PROFILE_IMAGE_REQUEST, CHANGE_PROFILE_IMAGE_SUCCESS, CHANGE_PROFILE_IMAGE_FAILURE, ADD_POST_OF_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PROFILE_IMAGE_REQUEST", function() { return CHANGE_PROFILE_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PROFILE_IMAGE_SUCCESS", function() { return CHANGE_PROFILE_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PROFILE_IMAGE_FAILURE", function() { return CHANGE_PROFILE_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_OF_ME", function() { return ADD_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  me: null,
  userInfo: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
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
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_INTRODUCE_REQUEST = "CHANGE_INTRODUCE_REQUEST";
const CHANGE_INTRODUCE_SUCCESS = "CHANGE_INTRODUCE_SUCCESS";
const CHANGE_INTRODUCE_FAILURE = "CHANGE_INTRODUCE_FAILURE";
const CHANGE_PROFILE_IMAGE_REQUEST = "CHANGE_PROFILE_IMAGE_REQUEST";
const CHANGE_PROFILE_IMAGE_SUCCESS = "CHANGE_PROFILE_IMAGE_SUCCESS";
const CHANGE_PROFILE_IMAGE_FAILURE = "CHANGE_PROFILE_IMAGE_FAILURE";
const ADD_POST_OF_ME = "ADD_POST_OF_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.userInfo = action.data;
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
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

      case CHANGE_PROFILE_IMAGE_REQUEST:
        draft.changeProfileImageLoading = true;
        draft.changeProfileImageDone = false;
        draft.changeProfileImageError = null;
        break;

      case CHANGE_PROFILE_IMAGE_SUCCESS:
        draft.me.profileImagePath = action.data.filename;
        draft.changeProfileImageLoading = false;
        draft.changeProfileImageDone = true;
        break;

      case CHANGE_PROFILE_IMAGE_FAILURE:
        draft.changeProfileImageLoading = false;
        draft.changeProfileImageError = action.error;
        break;

      case ADD_POST_OF_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id === action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}
;

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

;

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/add', data);
}

;

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_OF_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/delete`);
}

;

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('post/images', data);
}

;

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment/add`, data);
}

;

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function removeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data.postId}/comment/${data.commentId}/delete`, data);
}

;

function* removeComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

;

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

;

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

;

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

;

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

;

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

;

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

;

function* watchRemoveComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_REQUEST"], removeComment);
}

;

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

;

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

;
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

;

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

;

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

;

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

;

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/signup', data);
}

;

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function changeIntroduceAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/introduce', {
    introduce: data
  });
}

;

function* changeIntroduce(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeIntroduceAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_INTRODUCE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_INTRODUCE_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function changeProfileImageAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/image', data);
}

;

function* changeProfileImage(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeProfileImageAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PROFILE_IMAGE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PROFILE_IMAGE_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

;

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

;

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

;

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

;

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

;

function* watchChangeIntroduce() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_INTRODUCE_REQUEST"], changeIntroduce);
}

;

function* watchChangeProfileImage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_PROFILE_IMAGE_REQUEST"], changeProfileImage);
}

;
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeIntroduce), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeProfileImage)]);
}
;

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["legacy_createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJEYW1zbyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJpZCIsIlBvc3RJZCIsImkiLCJmaW5kIiwiQ29tbWVudHMiLCJwdXNoIiwiQ29tbWVudElkIiwiTGlrZXJzIiwiVXNlcklkIiwibWUiLCJ1c2VySW5mbyIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlSW50cm9kdWNlTG9hZGluZyIsImNoYW5nZUludHJvZHVjZURvbmUiLCJjaGFuZ2VJbnRyb2R1Y2VFcnJvciIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVCIsIkNIQU5HRV9JTlRST0RVQ0VfU1VDQ0VTUyIsIkNIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRSIsIkNIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QiLCJDSEFOR0VfUFJPRklMRV9JTUFHRV9TVUNDRVNTIiwiQ0hBTkdFX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSIsIkFERF9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJpbnRyb2R1Y2UiLCJjaGFuZ2VQcm9maWxlSW1hZ2VMb2FkaW5nIiwiY2hhbmdlUHJvZmlsZUltYWdlRG9uZSIsImNoYW5nZVByb2ZpbGVJbWFnZUVycm9yIiwicHJvZmlsZUltYWdlUGF0aCIsImZpbGVuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJnZXQiLCJsb2FkUG9zdHMiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwicmVtb3ZlQ29tbWVudEFQSSIsImNvbW1lbnRJZCIsInJlbW92ZUNvbW1lbnQiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGFrZUxhdGVzdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVDb21tZW50Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJjaGFuZ2VJbnRyb2R1Y2VBUEkiLCJjaGFuZ2VJbnRyb2R1Y2UiLCJjaGFuZ2VQcm9maWxlSW1hZ2VBUEkiLCJjaGFuZ2VQcm9maWxlSW1hZ2UiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaENoYW5nZUludHJvZHVjZSIsIndhdGNoQ2hhbmdlUHJvZmlsZUltYWdlIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsTUFBTTtFQUMzQixNQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztFQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELENBQXBCO0VBQ0EsTUFBTUcsUUFBUSxHQUFHLFFBQ2JDLFNBRGEsR0FFYkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZ2QjtFQUdBLE1BQU1LLEtBQUssR0FBR0MsZ0VBQVcsQ0FBQzdJLGlEQUFELEVBQVV3SSxRQUFWLENBQXpCO0VBQ0FJLEtBQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CdkUsOENBQW5CLENBQWpCO0VBQ0EsT0FBT29FLEtBQVA7QUFDRCxDQVREOztBQVdBLE1BQU1sTixPQUFPLEdBQUdzTix3RUFBYSxDQUFDWixjQUFELEVBQWlCO0VBQzVDYSxLQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWV2TixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IERhbXNvID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+RGFtc288L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5EYW1zby5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KERhbXNvKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJzsgIFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICByZW1vdmVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnRFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSAnUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTID0gJ1JFTU9WRV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9ICdSRU1PVkVfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzID0gcG9zdC5Db21tZW50cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZCk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZUludHJvZHVjZUxvYWRpbmc6IGZhbHNlLFxyXG4gIGNoYW5nZUludHJvZHVjZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZUludHJvZHVjZUVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfTVlfSU5GT19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUID0gXCJDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTlRST0RVQ0VfU1VDQ0VTUyA9IFwiQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkUgPSBcIkNIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QgPSBcIkNIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QUk9GSUxFX0lNQUdFX1NVQ0NFU1MgPSBcIkNIQU5HRV9QUk9GSUxFX0lNQUdFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9QUk9GSUxFX0lNQUdFX0ZBSUxVUkUgPSBcIkNIQU5HRV9QUk9GSUxFX0lNQUdFX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9PRl9NRSA9IFwiQUREX1BPU1RfT0ZfTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1lLmludHJvZHVjZSA9IGFjdGlvbi5kYXRhLmludHJvZHVjZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlSW50cm9kdWNlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZUludHJvZHVjZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VJbnRyb2R1Y2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfUFJPRklMRV9JTUFHRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVByb2ZpbGVJbWFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVByb2ZpbGVJbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VQcm9maWxlSW1hZ2VFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tZS5wcm9maWxlSW1hZ2VQYXRoID0gYWN0aW9uLmRhdGEuZmlsZW5hbWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUHJvZmlsZUltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVByb2ZpbGVJbWFnZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9QUk9GSUxFX0lNQUdFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlUHJvZmlsZUltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZVByb2ZpbGVJbWFnZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBmb3JrKHBvc3RTYWdhKVxyXG4gIF0pO1xyXG59OyIsImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19TVUNDRVNTLCBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfT0ZfTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2FkZCcsIGRhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9kZWxldGVgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJ3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnQvYWRkYCwgZGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pOyAgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudC8ke2RhdGEuY29tbWVudElkfS9kZWxldGVgLCBkYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pOyAgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9DT01NRU5UX1JFUVVFU1QsIHJlbW92ZUNvbW1lbnQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KVxyXG4gIF0pXHJcbn0iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNULCBDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1MsIENIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRSxcclxuICBDSEFOR0VfUFJPRklMRV9JTUFHRV9SRVFVRVNULCBDSEFOR0VfUFJPRklMRV9JTUFHRV9TVUNDRVNTLCBDSEFOR0VfUFJPRklMRV9JTUFHRV9GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7IFxyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTsgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyBcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyBcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pOyAgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9zaWdudXAnLCBkYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUludHJvZHVjZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9pbnRyb2R1Y2UnLCB7IGludHJvZHVjZTogZGF0YSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VJbnRyb2R1Y2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlSW50cm9kdWNlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByb2ZpbGVJbWFnZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2ltYWdlJywgZGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlUHJvZmlsZUltYWdlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZVByb2ZpbGVJbWFnZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BST0ZJTEVfSU1BR0VfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTsgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BST0ZJTEVfSU1BR0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VJbnRyb2R1Y2UoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QsIGNoYW5nZUludHJvZHVjZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VQcm9maWxlSW1hZ2UoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfUFJPRklMRV9JTUFHRV9SRVFVRVNULCBjaGFuZ2VQcm9maWxlSW1hZ2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlSW50cm9kdWNlKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VQcm9maWxlSW1hZ2UpLFxyXG4gIF0pO1xyXG59OyIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGxlZ2FjeV9jcmVhdGVTdG9yZSBhcyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgXHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9