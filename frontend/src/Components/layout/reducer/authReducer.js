import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SUBMIT_FEEDBACK_REQUEST,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAIL, GET_TESTIMONIALS_REQUEST,
  GET_TESTIMONIALS_SUCCESS,
  GET_TESTIMONIALS_FAIL,
} from '../../../Constants/userConstants';

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const testinitialState = {
  testimonials: [],
  loading: false,
  error: null,
  message: null,
};

export const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TESTIMONIALS_REQUEST:
    case SUBMIT_FEEDBACK_REQUEST:
      return { ...state, loading: true };
    case GET_TESTIMONIALS_SUCCESS:
      return { ...state, loading: false, testimonials: action.payload };
    case GET_TESTIMONIALS_FAIL:
    case SUBMIT_FEEDBACK_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SUBMIT_FEEDBACK_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}

