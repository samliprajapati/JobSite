import * as types from "./JobActionType";
import { base_url } from "../Config/Auth";
import axios from "axios";
import moment from "moment";

export const setJobViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_JOB_VIEW_TYPE, payload: viewType });

  export const getSectors = () => (dispatch) => {
    dispatch({
      type: types.GET_SECTORS_REQUEST,
    });
    axios
    .get(`${base_url}/sector`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      },
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