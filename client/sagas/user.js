import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import {
  LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE,
  CHANGE_PROFILE_IMAGE_REQUEST, CHANGE_PROFILE_IMAGE_SUCCESS, CHANGE_PROFILE_IMAGE_FAILURE
} from '../reducers/user';

function loadMyInfoAPI() {
  return axios.get('/user');
};

function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({ 
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });  
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  };
};

function logInAPI(data) {
  return axios.post('/user/login', data);
};

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({ 
      type: LOG_IN_SUCCESS,
      data: result.data,
    });  
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  };
};

function logOutAPI() {
  return axios.post('/user/logout');
};

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });  
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  };
};

function signUpAPI(data) {
  return axios.post('/user/signup', data);
};

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });  
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  };
};

function changeIntroduceAPI(data) {
  return axios.patch('/user/introduce', { introduce: data });
};

function* changeIntroduce(action) {
  try {
    const result = yield call(changeIntroduceAPI, action.data);
    yield put({
      type: CHANGE_INTRODUCE_SUCCESS,
      data: result.data,
    });  
  } catch (err) {
    yield put({
      type: CHANGE_INTRODUCE_FAILURE,
      error: err.response.data,
    });
  };
};

function changeProfileImageAPI(data) {
  return axios.patch('/user/image', data);
};

function* changeProfileImage(action) {
  try {
    const result = yield call(changeProfileImageAPI, action.data);
    yield put({
      type: CHANGE_PROFILE_IMAGE_SUCCESS,
      data: result.data,
    });  
  } catch (err) {
    yield put({
      type: CHANGE_PROFILE_IMAGE_FAILURE,
      error: err.response.data,
    });
  };
};

// 프로필 이미지 변경 할 차례
// server 라우터 만들고, client 프로필 이미지 변경 폼 수정하기
// ProfileImage 컴포넌트 이미지 받아오는거 수정하기

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
};

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
};

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
};

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
};

function* watchChangeIntroduce() {
  yield takeLatest(CHANGE_INTRODUCE_REQUEST, changeIntroduce);
};

function* watchChangeProfileImage() {
  yield takeLatest(CHANGE_PROFILE_IMAGE_REQUEST, changeProfileImage);
};

export default function* userSaga() {
  yield all([
    fork(watchLoadMyInfo),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchChangeIntroduce),
    fork(watchChangeProfileImage),
  ]);
};