import { initialAuthState } from './initialState/initialAuthStateNew';

const authenticationReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'SET_IS_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'SET_IS_NOT_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default authenticationReducer;
