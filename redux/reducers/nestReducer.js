import { initialNestState } from './initialState/initialNestState';

const nestReducer = (state = initialNestState, action) => {
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
