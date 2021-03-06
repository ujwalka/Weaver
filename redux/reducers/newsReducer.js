import { initalNewsState } from './initialState/initialNewsState';

const newsReducer = (state = initalNewsState, action) => {
  switch (action.type) {
    case 'ADD_TO_CURRENT_ARTICLE':
      return {
        ...state,
        currentArticle: action.payload,
      };
    case 'ADD_TO_RECENTLY_VIEWED':
      return {
        ...state,
        recentlyViewed: [...state.recentlyViewed, action.payload],
      };
    case 'ADD_TO_TOP_NEWS':
      return {
        ...state,
        recentlyViewed: action.payload,
      };

    default:
      return state;
  }
};
export default newsReducer;
