import { delay } from "redux-saga/effects";

import { firstAction } from "./actions";

function* firstActionSaga({ payload }) {
  try {
    yield delay(1000);
  } catch (error) {
    console.log("error...", error);
  }
}

function* mainSaga() {
  yield takeLatest(firstAction().type, firstActionSaga);
}

export default mainSaga;
