import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import newsReducer from './newsReducer';

export default combineReducers({ authenticationReducer, newsReducer });
