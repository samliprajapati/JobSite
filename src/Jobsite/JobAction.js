import * as types from "./JobActionType";
import { base_url } from "../Config/Auth";
import axios from "axios";
import moment from "moment";

export const setJobViewType = (viewType) => (dispatch) =>
  dispatch({ type: types.SET_JOB_VIEW_TYPE, payload: viewType });