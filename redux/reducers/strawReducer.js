import { initialStrawState } from './initialState/initialStrawState';

const strawReducer = (state = initialStrawState, action) => {
  switch (action.type) {
    case 'ADD_TO_CURRENT_STRAW':
      return {
        ...state,
        currentStraw: action.payload,
      };

    default:
      return state;
  }
};
export default strawReducer;
