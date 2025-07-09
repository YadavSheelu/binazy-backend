import { createStore, combineReducers, applyMiddleware } from 'redux';
import{ thunk} from 'redux-thunk';
import { projectReducer } from './Components/layout/reducer/projectreducer';
import { authReducer, testimonialReducer } from './Components/layout/reducer/authReducer';



const rootReducer = combineReducers({
  project:projectReducer,
  auth:authReducer,
  testimonial:testimonialReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
