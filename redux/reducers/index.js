import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import { initialState } from './initialState';

import newsReducer from './newsReducer';
import nestReducer from './nestReducer';
import strawReducer from './strawReducer';
const appReducer = combineReducers({
  authenticationReducer,
  newsReducer,
  nestReducer,
  strawReducer,
});

const rootReducer = (state = initialState, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('persist:root');
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
export default rootReducer;
