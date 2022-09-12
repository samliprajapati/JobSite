import * as types from "./JobActionType";
import { base_url } from "../Config/Auth";
import axios from "axios";

export const setJobViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_JOB_VIEW_TYPE, payload: viewType });

  export const getSectors = () => (dispatch) => {
    
    dispatch({
      type: types.GET_SECTORS_REQUEST,
    });
    axios
    .get(`${base_url}/sector/website?url=dtoc.tekorero.com`, {

    })
      
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

  export const addCandidate = (data) => (dispatch) => {
    dispatch({
      type: types.ADD_CANDIDATE_REQUEST,
    });
    axios
      .post(`${base_url}/candidate/website?url=dtoc.tekorero.com`, data,{ 
      })
      .then((res) => {
          dispatch({
            type: types.ADD_CANDIDATE_SUCCESS,
            payload: res.data,
          });
        })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.ADD_CANDIDATE_FAILURE,
          payload: err,
        });
      });
  };