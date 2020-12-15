import { createActions } from "redux-actions";

export const {
  getSpaceXData,
  displayLoading,
  receivedSpaceXData,
  erroredSpaceXData,
} = createActions(
  "GET_SPACE_X_DATA",
  "DISPLAY_LOADING",
  "RECEIVED_SPACE_X_DATA",
  "ERRORED_SPACE_X_DATA"
);
