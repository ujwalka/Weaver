import { initialAuthState } from './initialState/initialAuthState';

const authenticationReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    // case 'LOGOUT':
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //     user: null,
    //   };
    case 'SET_IS_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: true,
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
