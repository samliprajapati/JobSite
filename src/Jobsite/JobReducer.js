import * as types from "./JobActionType";
import moment from "moment";

const initialState = {
  viewType: "jobcard",


};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_JOB_VIEW_TYPE:
      return { ...state, viewType: action.payload };
  
    
    default:
      return state;
  }
};




  