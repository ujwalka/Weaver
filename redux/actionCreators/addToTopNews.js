export default function addToTopNews(topNews) {
  return {
    type: 'ADD_TO_TOP_NEWS',
    payload: topNews,
  };
}
