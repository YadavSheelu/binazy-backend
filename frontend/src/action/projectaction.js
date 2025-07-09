
import axios from 'axios';
import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL, GET_ALL_SERVICES_REQUEST,
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_FAILURE,GET_ALL_SKILLS, SKILLS_LOADING, SKILLS_ERROR,GET_EMPLOYEES, EMPLOYEES_LOADING, EMPLOYEES_ERROR,  TESTIMONIALS_LOADING,
  GET_APPROVED_TESTIMONIALS, MESSAGE_SUBMIT_REQUEST,
  MESSAGE_SUBMIT_SUCCESS,
  MESSAGE_SUBMIT_FAIL,
  TESTIMONIALS_ERROR } from '../Constants/projectConstants';

export const getallproject = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_REQUEST });

    const response = await axios.get('/api/v1/getallproject'); 
    dispatch({
      type: DATA_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({
      type: DATA_FAIL,
      payload: error.message, 
    });
  }
};
export const getAllServices = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SERVICES_REQUEST });
    const { data } = await axios.get('/api/v1/getallservices');
    console.log('Fetched services:', data);
    dispatch({ type: GET_ALL_SERVICES_SUCCESS, payload: data.services });
  } catch (error) {
    dispatch({
      type: GET_ALL_SERVICES_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const getAllSkills = () => async (dispatch) => {
  try {
    dispatch({ type: SKILLS_LOADING });

    const { data } = await axios.get('/api/v1/getallskills');
    
    console.log('🚀 SKILLS API RESPONSE:', data);
    
    dispatch({
      type: GET_ALL_SKILLS,
      payload: data.skills|| []
    });
  } catch (error) {
    console.error('Error fetching skills:', error);  
    dispatch({
      type: SKILLS_ERROR,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const getEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEES_LOADING });

    const res = await axios.get('/api/v1/employees');
    
    console.log('🚀 EMPLOYEES API RESPONSE:', res.data);
    
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data,
    });
  } catch (error) {
    console.error('Error fetching employees:', error); 
    dispatch({
      type: EMPLOYEES_ERROR,
      payload: error.message,
    });
  }
};

export const getApprovedTestimonials = () => async (dispatch) => {
  dispatch({ type: TESTIMONIALS_LOADING });

  try {
    const { data } = await axios.get('/api/v1/testimonialApproved');
    console.log("this is ", data)
    dispatch({
      type: GET_APPROVED_TESTIMONIALS,
      payload: data.data || []

    });
  } catch (error) {
    dispatch({
      type: TESTIMONIALS_ERROR,
      payload: error.response?.data?.message || error.message,
    });
  }
};


export const submitMessage = (messageData) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_SUBMIT_REQUEST });

    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post('/api/v1/submit-message', messageData, config);

    dispatch({
      type: MESSAGE_SUBMIT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: MESSAGE_SUBMIT_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};