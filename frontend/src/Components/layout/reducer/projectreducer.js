import {
  DATA_REQUEST, DATA_SUCCESS, DATA_FAIL,
  GET_ALL_SERVICES_REQUEST, GET_ALL_SERVICES_SUCCESS, GET_ALL_SERVICES_FAILURE,
  GET_EMPLOYEES, EMPLOYEES_LOADING, EMPLOYEES_ERROR,
  GET_APPROVED_TESTIMONIALS, TESTIMONIALS_LOADING, TESTIMONIALS_ERROR, GET_ALL_SKILLS,
  SKILLS_LOADING, MESSAGE_SUBMIT_REQUEST,
  MESSAGE_SUBMIT_SUCCESS,
  MESSAGE_SUBMIT_FAIL,
  SKILLS_ERROR,
} from '../../../Constants/projectConstants';

const initialState = {
  loading: false,
  data: [],
  success: false,
  message: '',
  error: null,
  skills: [],
  services: [],
  serviceLoading: false,
  serviceError: null,
  employees: [],
  employeeLoading: false,
  employeeError: null,
  testimonials: [],
  testimonialLoading: false,
  testimonialError: null,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,

        loading: true

      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload

      };
    case DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload

      };

    case GET_ALL_SERVICES_REQUEST:
      return {
        ...state,
        serviceLoading: true

      };
    case GET_ALL_SERVICES_SUCCESS:
      return {
        ...state,
        serviceLoading: false,
        services: action.payload

      };
    case GET_ALL_SERVICES_FAILURE:
      return {
        ...state,
        serviceLoading: false,
        serviceError: action.payload

      };

    case EMPLOYEES_LOADING:
      return {
        ...state,
        employeeLoading: true

      };
    case GET_EMPLOYEES:
      return {
        ...state, employeeLoading: false,
        employees: action.payload

      };
    case EMPLOYEES_ERROR:
      return {
        ...state,
        employeeLoading: false,
        employeeError: action.payload

      };

    case TESTIMONIALS_LOADING:
      return {
        ...state,
        testimonialLoading: true

      };
    case GET_APPROVED_TESTIMONIALS:
      return {
        ...state,
        testimonialLoading: false,
        testimonials: action.payload
      };

    case TESTIMONIALS_ERROR:
      return {
        ...state,
        testimonialLoading: false,
        testimonialError: action.payload
      };

    case MESSAGE_SUBMIT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false

      };

    case MESSAGE_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload,
        error: null,
      };

    case MESSAGE_SUBMIT_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,

      };


    case SKILLS_LOADING:
      return {
        ...state,
        loading: true,
        error: null

      };

    case GET_ALL_SKILLS:
      return {
        ...state,
        loading: false,
        skills: Array.isArray(action.payload) ? action.payload : []

      };

    case SKILLS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload

      };

    default:
      return state;
  }
};

export default projectReducer;
