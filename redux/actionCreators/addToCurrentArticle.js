export default function addToCurrentArticle(article) {
  return {
    type: 'ADD_TO_CURRENT_ARTICLE',
    payload: article,
  };
}
