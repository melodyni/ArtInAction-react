const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const reqAPI = {};

reqAPI.authUrl = () => fetch(`/auth/init`).then((res) => res.json());
reqAPI.artWork = () => fetch(`/api/artWork`).then((res) => res.json());
reqAPI.isLoggedIn = () => fetch(`/api/isLoggedIn`).then((res) => res.json());
reqAPI.register = (userInfo) => postReq(`api/register`, userInfo);

reqAPI.logout = () => fetch(`/api/logout`);
export default reqAPI;
