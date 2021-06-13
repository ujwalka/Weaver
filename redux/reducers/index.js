import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import { initialState } from './initialState';

import newsReducer from './newsReducer';
import nestReducer from './nestReducer';
const appReducer = combineReducers({
  authenticationReducer,
  newsReducer,
  nestReducer,
});

const rootReducer = (state = initialState, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('persist:root');
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
export default rootReducer;
