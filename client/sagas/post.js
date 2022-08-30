import { all, delay, fork, put, takeLatest, throttle } from "redux-saga/effects";
import axios from 'axios';
import shortId from "shortid";
import {
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, generateDummyPost,
} from '../reducers/post';
import { ADD_POST_OF_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostAPI(data) {
  return axios.get('/api/post', data);
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

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
};

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
};

function* watchRemoveComment() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
};

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
};

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemoveComment),
    fork(watchAddComment),
  ])
}