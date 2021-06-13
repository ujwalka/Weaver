export default function addToCurrentArticle(straw) {
  return {
    type: 'ADD_TO_CURRENT_STRAW',
    payload: straw,
  };
}
