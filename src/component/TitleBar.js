import React from 'react';
import reqAPI from './requestAPI';
import logout from '../Icons/logout.svg';
import '../App.css';
import { useHistory } from 'react-router-dom';

const TitleBar = function ({ user }) {
  const { avatar, username } = user;
  const history = useHistory();

  const handleClick = () => {
    reqAPI.logout().then(() => history.push('/'));
  };

  return (
    <div className='inline titleBar'>
      <span className='large-font'>Art In Action</span>
      <div className='user'>
        <span className='large-font'>{username}</span>
        <img
          src={avatar}
          alt='avatar'
          className='avatar'
          onClick={() => useHistory.push('/profile/id')}
        />
        <img src={logout} alt='logout' className='icon' onClick={handleClick} />
      </div>
    </div>
  );
};

export default TitleBar;
