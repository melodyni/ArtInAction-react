import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import reqAPI from './requestAPI';
import InputBox from './InputBox';

const RegistrationForm = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    reqAPI
      .register({ name, username, email, bio })
      .then(() => history.push('/gallery/all'));
  };

  return (
    <div className='border'>
      <form onSubmit={handleSubmit}>
        <InputBox type='text' label='Name' onChange={setName} />
        <InputBox type='text' label='UserName' onChange={setUserName} />
        <InputBox type='email' label='Email' onChange={setEmail} />
        <label>Bio</label>
        <br />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <br />
        <button type='submit' className='btn blue'>
          Submit
        </button>
        <button className='btn red'>Cancel</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
