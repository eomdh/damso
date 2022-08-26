import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
} from '../reducers/user';

function loginAPI(data) {
  return axios.post('/api/login', data);
};

function* logIn(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(500);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });  
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data: err.response.data,
    });
  };
};

function logoutAPI() {
  return axios.post('/api/logout');
};

function* logOut() {
  try {
    console.log('saga login')
    // const result = yield call(logoutAPI);
    yield delay(500);
    yield put({
      type: LOG_OUT_SUCCESS,
    });  
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data: err.response.data,
    });
  };
};

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
};

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
};

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
};