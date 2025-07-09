import axios from 'axios';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,SUBMIT_FEEDBACK_REQUEST,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAIL, GET_TESTIMONIALS_REQUEST,
  GET_TESTIMONIALS_SUCCESS,
  GET_TESTIMONIALS_FAIL,
} from '../Constants/userConstants';

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post('/api/v1/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('/api/v1/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};


export const submitFeedback = (data) => async (dispatch) => {
  try {
    dispatch({ type: SUBMIT_FEEDBACK_REQUEST });

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const res = await axios.post('/api/v1/testimonials', data, config);

    dispatch({
      type: SUBMIT_FEEDBACK_SUCCESS,
      payload: res.data.message
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_FEEDBACK_FAIL,
      payload: error.response?.data?.message || error.message
    });
  }
};

export const getTestimonials = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TESTIMONIALS_REQUEST });
    const { data } = await axios.get('/api/v1/testimonials');
    dispatch({ type: GET_TESTIMONIALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TESTIMONIALS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
