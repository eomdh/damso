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
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Bluejay")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, removePost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePost", function() { return removePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'eomdh',
      profileImagePath: ''
    },
    content: '첫 번째 게시글 #해시태그1 #해시태그2',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'yeji'
      },
      content: '첫 번째 댓글'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'deokhyeon'
      },
      content: '두 번째 댓글'
    }],
    Likers: [{}],
    imagePaths: []
  }],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const dummyPost = data => ({
  id: data.id,
  User: {
    id: 1,
    nickname: 'eomdh'
  },
  content: data.content,
  images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: 1,
    nickname: 'eomdh'
  },
  content: data
});

const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const removePost = data => ({
  type: REMOVE_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostDone: true,
        mainPosts: [dummyPost(action.data), ...state.mainPosts]
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case REMOVE_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: true,
        removePostDone: false,
        removePostError: null
      });

    case REMOVE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: false,
        removePostDone: true,
        mainPosts: state.mainPosts.filter(v => v.id !== action.data)
      });

    case REMOVE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: false,
        removePostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);

      const post = _objectSpread({}, state.mainPosts[postIndex]);

      post.Comments = [...post.Comments, dummyComment(action.data.content)];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE, ADD_POST_OF_ME, REMOVE_POST_OF_ME, logIn, logOut, changeIntroduce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
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
const ADD_POST_OF_ME = "ADD_POST_OF_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  id: '1',
  nickname: 'eomdh',
  introduce: '안녕하세요~ 엄덕현입니다.',
  profileImagePath: '',
  Posts: []
});

const logIn = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logOut = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const changeIntroduce = data => {
  return {
    type: CHANGE_INTRODUCE_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInDone: false,
        logInError: null
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case CHANGE_INTRODUCE_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeIntroduceLoading: true,
        changeIntroduceDone: false,
        changeIntroduceError: null
      });

    case CHANGE_INTRODUCE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeIntroduceLoading: false,
        changeIntroduceDone: true,
        introduce: action.data
      });

    case CHANGE_INTRODUCE_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeIntroduceLoading: false,
        changeIntroduceError: action.error
      });

    case ADD_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }, ...state.me.Posts]
        })
      });

    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.filter(v => v.id === action.data)
        })
      });

    default:
      return state;
  }
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"])]);
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);
}

;

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: {
        id: id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_OF_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('/api/post', data);
}

;

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/post/${data.postId}/comment`, data);
}

;

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

;

function* watchRemoveComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

;

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

;
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



function logInAPI(data) {
  return axios.post('/api/login', data);
}

;

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function logOutAPI() {
  return axios.post('/api/logout');
}

;

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function signUpAPI(data) {
  return axios.post('/api/signup', data);
}

;

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function changeIntroduceAPI(data) {
  return axios.post('/api/changeIntroduce', data);
}

;

function* changeIntroduce(action) {
  try {
    // const result = yield call(changeIntroduceAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_INTRODUCE_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_INTRODUCE_FAILURE"],
      error: err.response.data
    });
  }

  ;
}

;

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], logIn);
}

;

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logOut);
}

;

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signUp);
}

;

function* watchChangeIntroduce() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_INTRODUCE_REQUEST"], changeIntroduce);
}

;
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeIntroduce)]);
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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsInByb2ZpbGVJbWFnZVBhdGgiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiZHVtbXlQb3N0IiwiZGF0YSIsImltYWdlcyIsImR1bW15Q29tbWVudCIsImFkZFBvc3QiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJwb3N0SWQiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nIiwiY2hhbmdlSW50cm9kdWNlRG9uZSIsImNoYW5nZUludHJvZHVjZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUIiwiQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTIiwiQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFIiwiQUREX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImludHJvZHVjZSIsIlBvc3RzIiwibG9nSW4iLCJsb2dPdXQiLCJjaGFuZ2VJbnRyb2R1Y2UiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImF4aW9zIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlQ29tbWVudCIsIndhdGNoQWRkQ29tbWVudCIsImxvZ0luQVBJIiwibG9nT3V0QVBJIiwic2lnblVwQVBJIiwic2lnblVwIiwiY2hhbmdlSW50cm9kdWNlQVBJIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaENoYW5nZUludHJvZHVjZSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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M0IsTUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7RUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtFQUNBLE1BQU1HLFFBQVEsR0FBRyxRQUNiQyxTQURhLEdBRWJDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGdkI7RUFHQSxNQUFNSyxLQUFLLEdBQUdDLGdFQUFXLENBQUM5RSxpREFBRCxFQUFVeUUsUUFBVixDQUF6QjtFQUNBSSxLQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQnRDLDhDQUFuQixDQUFqQjtFQUNBLE9BQU9tQyxLQUFQO0FBQ0QsQ0FURDs7QUFXQSxNQUFNbEksT0FBTyxHQUFHc0ksd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtFQUFFYSxLQUFLO0FBQVAsQ0FBakIsQ0FBN0I7QUFFZXZJLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5CbHVlamF5PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXNlcixcclxuICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFt7XHJcbiAgICBpZDogMSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gICAgICBwcm9maWxlSW1hZ2VQYXRoOiAnJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uDEgI+2VtOyLnO2DnOq3uDInLFxyXG4gICAgSW1hZ2VzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICB9LCBcclxuICAgIHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgIH1cclxuICAgIF0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6ICd5ZWppJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg64yT6riAJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogJ2Rlb2toeWVvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfrkZAg67KI7Ke4IOuMk+q4gCdcclxuICAgIH1dLFxyXG4gICAgTGlrZXJzOiBbe31dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgfV0sXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIGltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICBtYWluUG9zdHM6IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICBwb3N0LkNvbW1lbnRzID0gWy4uLnBvc3QuQ29tbWVudHMsIGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KV07XHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlSW50cm9kdWNlTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlSW50cm9kdWNlRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlSW50cm9kdWNlRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QgPSBcIkNIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTID0gXCJDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9JTlRST0RVQ0VfRkFJTFVSRSA9IFwiQ0hBTkdFX0lOVFJPRFVDRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfT0ZfTUUgPSBcIkFERF9QT1NUX09GX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgaWQ6ICcxJyxcclxuICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICBpbnRyb2R1Y2U6ICfslYjrhZXtlZjshLjsmpR+IOyXhOuNle2YhOyeheuLiOuLpC4nLFxyXG4gIHByb2ZpbGVJbWFnZVBhdGg6ICcnLFxyXG4gIFBvc3RzOiBbXSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW4gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VJbnRyb2R1Y2UgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRXJyb3I6IG51bGwsICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICBtZTogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWduVXBMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRG9uZTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGFuZ2VJbnRyb2R1Y2VMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGNoYW5nZUludHJvZHVjZURvbmU6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZUludHJvZHVjZUVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBDSEFOR0VfSU5UUk9EVUNFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhbmdlSW50cm9kdWNlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlSW50cm9kdWNlRG9uZTogdHJ1ZSxcclxuICAgICAgICBpbnRyb2R1Y2U6IGFjdGlvbi5kYXRhLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhbmdlSW50cm9kdWNlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlSW50cm9kdWNlRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfT0ZfTUU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5maWx0ZXIoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgZm9yayhwb3N0U2FnYSlcclxuICBdKVxyXG59OyIsImltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHsgXHJcbiAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX09GX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoNTAwKTtcclxuICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoNTAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoNTAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICBdKVxyXG59IiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIENIQU5HRV9JTlRST0RVQ0VfUkVRVUVTVCwgQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTLCBDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoNTAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pOyAgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDUwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTsgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnLCBkYXRhKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDUwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUludHJvZHVjZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvY2hhbmdlSW50cm9kdWNlJywgZGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlSW50cm9kdWNlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZUludHJvZHVjZUFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSg1MDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX0lOVFJPRFVDRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pOyAgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfSU5UUk9EVUNFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VJbnRyb2R1Y2UoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QsIGNoYW5nZUludHJvZHVjZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZUludHJvZHVjZSksXHJcbiAgXSk7XHJcbn07IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=