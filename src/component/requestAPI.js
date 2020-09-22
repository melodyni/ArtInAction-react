const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

const reqAPI = {};

reqAPI.authUrl = () => fetch(`/auth/init`).then((res) => res.json());
reqAPI.register = (userInfo) => postReq(`/api/register`, userInfo);

export default reqAPI;
