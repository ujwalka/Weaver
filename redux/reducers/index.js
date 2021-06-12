import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import newsReducer from './newsReducer';
import nestReducer from './nestReducer';

export default combineReducers({
  authenticationReducer,
  newsReducer,
  nestReducer,
});
