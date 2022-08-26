import { all, fork } from "redux-saga/effects";

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
};