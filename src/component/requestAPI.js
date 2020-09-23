const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const reqAPI = {};

const jsonParse = (res) => res.json();

reqAPI.authUrl = () => fetch(`/auth/init`).then(jsonParse);
reqAPI.userInfo = () => fetch(`/api/userInfo`).then(jsonParse);
reqAPI.isLoggedIn = () => fetch(`/api/isLoggedIn`).then(jsonParse);
reqAPI.register = (userInfo) => postReq(`/api/register`, userInfo);

export default reqAPI;
