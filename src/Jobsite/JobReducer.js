import * as types from "./JobActionType";
import moment from "moment";

const initialState = {
  viewType: "jobcard",
  
  fetchingSectors: false,
  fetchingSectorsError: false,
  sectors: [],

};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_JOB_VIEW_TYPE:
      return { ...state, viewType: action.payload };
  
      case types.GET_SECTORS_REQUEST:
        return { ...state, fetchingSectors: true };
      case types.GET_SECTORS_SUCCESS:
        return {
          ...state,
          fetchingSectors: false,
          sectors: action.payload,
        };
      case types.GET_SECTORS_FAILURE:
        return {
          ...state,
          fetchingSectors: false,
          fetchingSectorsError: true,
        };
        
        


    default:
      return state;
  }
};




  