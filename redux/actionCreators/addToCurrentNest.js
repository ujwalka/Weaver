export default function addToCurrentArticle(nestId) {
  return {
    type: 'ADD_TO_CURRENT_NEST',
    payload: nestId,
  };
}
