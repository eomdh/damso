import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import {
  LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  CHANGE_INTRODUCE_REQUEST, CHANGE_INTRODUCE_SUCCESS, CHANGE_INTRODUCE_FAILURE
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
  return axios.post('/api/changeIntroduce', data);
};

function* changeIntroduce(action) {
  try {
    // const result = yield call(changeIntroduceAPI);
    yield delay(500);
    yield put({
      type: CHANGE_INTRODUCE_SUCCESS,
      data: action.data,
    });  
  } catch (err) {
    yield put({
      type: CHANGE_INTRODUCE_FAILURE,
      error: err.response.data,
    });
  };
};

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

export default function* userSaga() {
  yield all([
    fork(watchLoadMyInfo),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchChangeIntroduce),
  ]);
};