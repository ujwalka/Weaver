const nestApi = {};
// const BASE_URL = 'https://weaver-cw.herokuapp.com';
const BASE_URL = 'http://localhost:5000';
nestApi.getAllNests = (userId) => {
  return fetch(`${BASE_URL}/nest/${userId}`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

nestApi.createNest = (description, userId) => {
  // const { description, userId } = req.body;
  return fetch(`${BASE_URL}/nest`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, userId }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
nestApi.deleteNest = (nestId, userId) => {
  // const { nestId, userId } = req.body;
  return fetch(`${BASE_URL}/nest`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nestId, userId }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default nestApi;
