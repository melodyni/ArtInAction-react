import React, { useEffect, useState } from 'react';
import reqAPI from './requestAPI';
import logout from '../Icons/logout.svg';
import '../App.css';

const TitleBar = function () {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    reqAPI.userInfo().then(({ username, avatar }) => {
      setName(username);
      setAvatar(avatar);
    });
  }, []);

  return (
    <div className='inline titleBar'>
      <h1>Art In Action</h1>
      <div className='user'>
        <h1>{name}</h1>
        <img src={avatar} alt='avatar' className='avatar' />
        <img src={logout} alt='logout' className='icon' />
      </div>
    </div>
  );
};

export default TitleBar;
