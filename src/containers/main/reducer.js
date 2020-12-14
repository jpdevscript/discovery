import produce from "immer";
import { handleActions } from "redux-actions";

import { firstAction } from "./actions";

export const initialState = {
  tempState: "",
};

const mainReducer = handleActions(
  {
    [firstAction().type]: produce((draft, action) => {
      draft.tempState = action.payload;
    }),
  },
  initialState
);

export default mainReducer;
