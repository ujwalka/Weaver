import { initialState } from './initialState';

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CURRENT_ARTICLE':
      return {
        ...state,
        currentArticle: action.payload,
      };

    default:
      return state;
  }
};
export default newsReducer;