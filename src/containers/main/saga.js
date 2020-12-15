import { call, put, takeLatest } from "redux-saga/effects";

import {
  getSpaceXData,
  receivedSpaceXData,
  erroredSpaceXData,
  displayLoading,
} from "./actions";
import { spaceXService } from "./services";

function* spaceXSaga({ payload }) {
  try {
    yield put(displayLoading(true));
    const response = yield call(spaceXService, payload);
    yield put(receivedSpaceXData(response));
    yield put(displayLoading(false));
  } catch (error) {
    yield put(erroredSpaceXData(error));
    yield put(displayLoading(false));
  }
}

function* mainSaga() {
  yield takeLatest(getSpaceXData().type, spaceXSaga);
}

export default mainSaga;
