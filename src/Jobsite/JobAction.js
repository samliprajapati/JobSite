import * as types from "./JobActionType";
import { base_url } from "../Config/Auth";
import axios from "axios";
import { message } from "antd";

export const setJobViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_JOB_VIEW_TYPE, payload: viewType });

export const getSectors = () => (dispatch) => {
  dispatch({
    type: types.GET_SECTORS_REQUEST,
  });
  axios
    .get(`${base_url}/sector/website?url=dtoc.tekorero.com`,)

    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_SECTORS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_SECTORS_FAILURE,
        payload: err,
      });
    });
};

export const addCandidate = (data, cb) => (dispatch) => {
  dispatch({
    type: types.ADD_CANDIDATE_REQUEST,
  });
  axios
    .post(`${base_url}/candidate/website?url=dtoc.tekorero.com`, data)
    .then((res) => {
      dispatch({
        type: types.ADD_CANDIDATE_SUCCESS,
        payload: res.data,
      });
      message.success(res.data.message)
      cb && cb();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.ADD_CANDIDATE_FAILURE,
        payload: err,
      });
      cb && cb();
    });
};

export const handleCandidateApplyModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_CANDIDATE_APPLY_MODAL,
    payload: modalProps,
  });
};
export const getLibrarys = () => (dispatch) => {
  dispatch({
    type: types.GET_LIBRARYS_REQUEST,
  });
  axios
    .get(`${base_url}/candidate/defination/website?url=dtoc.tekorero.com`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_LIBRARYS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_LIBRARYS_FAILURE,
        payload: err,
      });
    });
};

export const getIdProofs = () => (dispatch) => {
  dispatch({
    type: types.GET_PROOFS_REQUEST,
  });
  axios
    .get(`${base_url}/idProofType/all-list/website?url=dtoc.tekorero.com`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_PROOFS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_PROOFS_FAILURE,
        payload: err,
      });
    });
};
export const getDesignations = () => (dispatch) => {
  dispatch({
    type: types.GET_DESIGNATIONS_REQUEST,
  });
  axios               
    .get(`${base_url}/designation/website?url=dtoc.tekorero.com`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_DESIGNATIONS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_DESIGNATIONS_FAILURE,
        payload: err,
      });
    });
};
export const getDepartments = () => (dispatch) => {
  dispatch({
    type: types.GET_DEPARTMENTS_REQUEST,
  });
  axios
    .get(`${base_url}/department/website?url=dtoc.tekorero.com`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_DEPARTMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_DEPARTMENTS_FAILURE,
        payload: err,
      });
    });
};
export const getRoles = () => (dispatch) => {
  dispatch({
    type: types.GET_ROLES_REQUEST,
  });
  axios
    .get(`${base_url}/roleType/website?url=dtoc.tekorero.com`,)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_ROLES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_ROLES_FAILURE,
        payload: err,
      });
    });
};

export const getCurrency = () => (dispatch) => {
  dispatch({
    type: types.GET_CURRENCY_REQUEST,
  });
  axios
    .get(`${base_url}/currencies/website?url=dtoc.tekorero.com`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_CURRENCY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_CURRENCY_FAILURE,
        payload: err,
      });
    });
};

export const getCountries = () => (dispatch) => {
  dispatch({
    type: types.GET_COUNTRIES_REQUEST,
  });
  axios
    .get(`${base_url}/countries/website?url=dtoc.tekorero.com`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GET_COUNTRIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.GET_COUNTRIES_FAILURE,
        payload: err,
      });
    });
};