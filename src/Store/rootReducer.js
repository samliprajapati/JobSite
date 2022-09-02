import { combineReducers } from "redux";
// import { LOGOUT } from "../Containers/Auth/AuthTypes";
/**
 *  All of application reducers import goes here...
 */

import {jobReducer} from "../Jobsite/JobReducer";
const appReducer = combineReducers({
  job:jobReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
