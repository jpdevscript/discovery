import { combineReducers } from "redux";

import mainReducer from "../containers/main/reducer";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    main: mainReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
