import { all, fork } from "@redux-saga/core/effects";
import todoSagaWatcher from "./todoSaga";

export default function* rootSaga() {
  yield all([fork(todoSagaWatcher)]);
}
