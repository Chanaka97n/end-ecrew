import {
  GET_ALL_SALONS_SUCCESS,
  GET_ALL_SALONS_ERROR,
  PORT,
  ADD_SALON_SUCCESS,
  ADD_SALON_FAIL,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_FAIL,
  ADD_LOCATION_FAIL,
  ADD_LOCATION_SUCCESS,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAIL,
  ADD_TYPE_FAIL,
  ADD_TYPE_SUCCESS,
  GET_SALON_SUCCESS,
  GET_SALON_ERROR,
  ADD_SUB_TYPE_FAIL,
  ADD_SUB_TYPE_SUCCESS,
  GET_SUB_TYPES_SUCCESS,
} from "./types";
import axios from "axios";

export const getAllSalons = () => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/salon`);
    console.log(res);

    if (res.status === 400) {
      dispatch({
        type: GET_ALL_SALONS_ERROR,
        payload: res.msg,
      });
    } else if (res.status === 200) {
      dispatch({
        type: GET_ALL_SALONS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log("Error =>", error);
  }
};

export const addSalon = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${PORT}/salon`, data);
    dispatch({
      type: ADD_SALON_SUCCESS,
      payload: res.data.msg,
    });
  } catch (error) {
    console.log("Error =>", error);
    if (error.response && error.response.status === 400)
      dispatch({
        type: ADD_SALON_FAIL,
        payload: error.response.data.msg,
      });
  }
};

export const getLocations = () => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/salon/locations`);
    dispatch({
      type: GET_LOCATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOCATIONS_FAIL,
      payload: error.response,
    });
  }
};

export const addNewLocation = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${PORT}/salon/locations`, data);
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_LOCATION_FAIL,
      payload: error.response,
    });
  }
};

export const addSalonType = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${PORT}/type`, data);
    dispatch({
      type: ADD_TYPE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TYPE_FAIL,
      payload: error.response,
    });
  }
};

export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/type`);
    dispatch({
      type: GET_TYPES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TYPES_FAIL,
      payload: error.response,
    });
  }
};

export const getSingleSalon = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/salon/${id}`);
    dispatch({
      type: GET_SALON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SALON_ERROR,
      payload: error.response,
    });
  }
};

export const addSubType = (data) => async (dispatch) => {
  try {
    await axios.post(`${PORT}/subType`, data);
    dispatch({
      type: ADD_SUB_TYPE_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ADD_SUB_TYPE_FAIL,
      payload: err.response,
    });
  }
};

export const getSubTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/subType`);
    console.log(res);
    dispatch({
      type: GET_SUB_TYPES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SUB_TYPES_SUCCESS,
      payload: error.response,
    });
  }
};
