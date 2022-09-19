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

  fetchingLibrarys: false,
  fetchingLibrarysError: false,
  librarys: [],

  fetchingIdProofs: false,
  fetchingIdProofsError: false,
  idProofs: [],

  fetchingDesignations: false,
  fetchingDesignationsError: false,
  designations: [],

  fetchingDepartments: false,
  fetchingDepartmentsError: false,
  departments: [],
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
      return { ...state, addingCandidate: false };
    case types.ADD_CANDIDATE_FAILURE:
      return { ...state, addingCandidate: false, addingCandidateError: true };

    case types.HANDLE_CANDIDATE_APPLY_MODAL:
      return { ...state, addCandidateApply: action.payload };

    case types.GET_LIBRARYS_REQUEST:
      return { ...state, fetchingLibrarys: true };
    case types.GET_LIBRARYS_SUCCESS:
      return { ...state, fetchingLibrarys: false, librarys: action.payload };
    case types.GET_LIBRARYS_FAILURE:
      return { ...state, fetchingLibrarys: false, fetchingLibrarysError: true };

    case types.GET_PROOFS_REQUEST:
      return { ...state, fetchingLibrarys: true };
    case types.GET_PROOFS_SUCCESS:
      return { ...state, fetchingIdProofs: false, idProofs: action.payload };
    case types.GET_PROOFS_FAILURE:
      return { ...state, fetchingIdProofs: false, fetchingIdProofsError: true };

    case types.GET_DESIGNATIONS_REQUEST:
      return { ...state, fetchingDesignations: true };
    case types.GET_DESIGNATIONS_SUCCESS:
      return {
        ...state,
        fetchingDesignations: false,
        designations: action.payload,
      };
    case types.GET_DESIGNATIONS_FAILURE:
      return {
        ...state,
        fetchingDesignations: false,
        fetchingDesignationsError: true,
      };
    
      case types.GET_DEPARTMENTS_REQUEST:
        return { ...state, fetchingDepartments: true };
      case types.GET_DEPARTMENTS_SUCCESS:
        return { ...state, fetchingDepartments: false, departments: action.payload };
      case types.GET_DEPARTMENTS_FAILURE:
        return { ...state, fetchingDepartments: false, fetchingDepartmentsError: true };

    default:
      return state;
  }
};
