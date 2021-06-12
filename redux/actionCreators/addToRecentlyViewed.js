export default function addToRecentlyViewed(article) {
  return {
    type: 'ADD_TO_RECENTLY_VIEWED',
    payload: article,
  };
}
