import React, { useState, useEffect } from 'react';
import reqAPI from './requestAPI';
import '../App.css';

const Welcome = function () {
  const [url, setLink] = useState('');
  const name = `Art in Action`;
  const description = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Ut enim ad minim "`;

  useEffect(() => {
    reqAPI.authUrl().then(({ url }) => setLink(url));
  }, []);

  return (
    <div className='center'>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <button onClick={() => (window.location.href = url)}>
        Login With Google
      </button>
    </div>
  );
};

export default Welcome;
