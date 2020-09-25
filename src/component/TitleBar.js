import React from 'react';
import reqAPI from './requestAPI';
import logout from '../Icons/logout.svg';
import '../App.css';
import { useHistory } from 'react-router-dom';

const TitleBar = function ({ avatar, name }) {
  const history = useHistory();

  const handleClick = () => {
    reqAPI.logout().then(() => history.push('/'));
  };

  return (
    <div className='inline titleBar'>
      <span className='large-font'>Art In Action</span>
      <div className='user'>
        <span className='large-font'>{name}</span>
        <img src={avatar} alt='avatar' className='avatar' />
        <img src={logout} alt='logout' className='icon' onClick={handleClick} />
      </div>
    </div>
  );
};

export default TitleBar;
