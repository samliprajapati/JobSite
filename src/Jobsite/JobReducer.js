import * as types from "./JobActionType";
import moment from "moment";

const initialState = {
  viewType: "jobcard",
  
  fetchingSectors: false,
  fetchingSectorsError: false,
  sectors: [],

  addingCandidate: false,
  addingCandidateError: false,

  addCandidateApply: false,
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
        
        case types.ADD_CANDIDATE_REQUEST:
          return { ...state, addingCandidate: true };
        case types.ADD_CANDIDATE_SUCCESS:
          return { ...state, addingCandidate: false,  };
        case types.ADD_CANDIDATE_FAILURE:
       return { ...state, addingCandidate: false,  addingCandidateError: true,  };        

       case types.HANDLE_CANDIDATE_APPLY_MODAL:
        return { ...state, addCandidateApply: action.payload };

    default:
      return state;
  }
};




  