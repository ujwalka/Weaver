export default function login(article) {
  return {
    type: 'ADD_TO_CURRENT_ARTICLE',
    payload: article,
  };
}
