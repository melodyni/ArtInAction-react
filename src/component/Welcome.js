import React, { useState, useEffect } from 'react';
import reqAPI from './requestAPI';
import '../App.css';

const Welcome = function () {
  const [url, setLink] = useState('');
  useEffect(() => {
    reqAPI.authUrl().then(({ url }) => setLink(url));
  }, []);

  return (
    <div className='welcome '>
      <h1>Art in Action</h1>
      <h2>Imagination is the beginning of creation.</h2>
      <h3>sed do eiusmod tempor Ut enim ad minim</h3>
      <button onClick={() => (window.location.href = url)} className='btn blue'>
        Login With Google
      </button>
    </div>
  );
};

export default Welcome;
