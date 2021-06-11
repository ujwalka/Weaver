const authenticationApi = {};
// const BASE_URL = 'https://weaver-cw.herokuapp.com';
const BASE_URL = 'http://localhost:5000';
authenticationApi.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

authenticationApi.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
authenticationApi.profile = (accessToken) => {
  return fetch(`${BASE_URL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

authenticationApi.logout = (tokenName) => {
  localStorage.removeItem(tokenName);
  localStorage.removeItem('email');
};

authenticationApi.validateToken = (token) => {
  return fetch(`${BASE_URL}/validateToken`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(token),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

authenticationApi.getUser = (email) => {
  // {
  //     "name": "barcelona",
  //     "userId": "60c23d7a611ac10004761c28"
  // }
  return fetch(`${BASE_URL}/user`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(email),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export default authenticationApi;
