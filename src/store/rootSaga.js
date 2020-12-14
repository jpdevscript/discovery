import { fork, all } from "redux-saga/effects";

import mainSaga from "../containers/main/saga";

function* rootSaga() {
  yield all([fork(mainSaga)]);
}

export default rootSaga;
