import { all } from "redux-saga/effects";
import { watchPostAsync } from "./post";

export function* rootSaga() {
  yield all([watchPostAsync()]);
}
