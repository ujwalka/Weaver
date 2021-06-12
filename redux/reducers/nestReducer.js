import { initialState } from './initialState';

const nestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CURRENT_NEST':
      return {
        ...state,
        currentNestId: action.payload,
      };

    default:
      return state;
  }
};
export default nestReducer;
