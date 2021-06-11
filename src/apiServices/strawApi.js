const strawApi = {};
// const BASE_URL = 'https://weaver-cw.herokuapp.com';
const BASE_URL = 'http://localhost:5000';

strawApi.getAllArticles = (nestId) => {
  // const { nestId } = req.params;
  return fetch(`${BASE_URL}/straw/${nestId}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

strawApi.createArticle = (newsArticle, nestId) => {
  // const { newsArticle, nestId } = req.body;
  // stringify news article article
  // parse on the otherside
  return fetch(`${BASE_URL}/straw`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newsArticle, nestId }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

strawApi.postNote = (articleId, note) => {
  // const { articleId, note } = req.body;
  return fetch(`${BASE_URL}/straw/note`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ articleId, note }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

strawApi.deleteArticle = (nestId, articleId) => {
  // const { nestId, articleId } = req.body;
  return fetch(`${BASE_URL}/straw`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nestId, articleId }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default strawApi;
