import produce from "immer";
import { handleActions } from "redux-actions";

import {
  receivedSpaceXData,
  erroredSpaceXData,
  displayLoading,
} from "./actions";

export const initialState = {
  spaceXData: {},
  spaceXError: "",
  loader: false,
};

const mainReducer = handleActions(
  {
    [receivedSpaceXData().type]: produce((draft, action) => {
      draft.spaceXData = action.payload;
    }),
    [erroredSpaceXData().type]: produce((draft, action) => {
      draft.spaceXError = action.payload;
    }),
    [displayLoading().type]: produce((draft, action) => {
      draft.loader = action.payload;
    }),
  },
  initialState
);

export default mainReducer;
