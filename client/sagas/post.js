import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import shortId from "shortid";
import {
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE,
  LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
  generateDummyPost,
} from '../reducers/post';
import { ADD_POST_OF_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostAPI(data) {
  return axios.get('/api/posts', data);
};

function* loadPosts() {
  try {
    // const result = yield call(loadPostAPI, action.data);
    yield delay(500);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  };
};

function addPostAPI(data) {
  return axios.post('/api/post', data);
};

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(500);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id: id,
        content: action.data,
      }
    });
    yield put({
      type: ADD_POST_OF_ME,
      data: id,
    })
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  };
};

function removePostAPI(data) {
  return axios.delete('/api/post', data);
};

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(500);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    })
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  };
};

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
};

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(500);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });  
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  };
};

function removeCommentAPI(data) {
  return axios.delete(`/api/post/${data.postId}/comment`, data);
};

function* removeComment(action) {
  try {
    // const result = yield call(removeCommentAPI, action.data);
    yield delay(500);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: action.data,
    });  
  } catch (err) {
    yield put({
      type: REMOVE_COMMENT_FAILURE,
      error: err.response.data,
    });
  };
};

function likePostAPI(data) {
  return axios.delete(`/api/post/${data}/like`);
};

function* likePost(action) {
  try {
    // const result = yield call(likePostAPI, action.data);
    yield delay(500);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: action.data,
    });  
  } catch (err) {
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    });
  };
};

function unlikePostAPI(data) {
  return axios.delete(`/api/post/${data}/unlike`);
};

function* unlikePost(action) {
  try {
    // const result = yield call(unlikePostAPI, action.data);
    yield delay(500);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: action.data,
    });  
  } catch (err) {
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    });
  };
};

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
};

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
};

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
};

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
};

function* watchRemoveComment() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
};

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
};

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
};

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
    fork(watchRemoveComment),
    fork(watchLikePost),
    fork(watchUnlikePost)
  ])
}