import React, { useState } from 'react';
import reqAPI from './requestAPI';
import InputBox from './InputBox';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    reqAPI.register({ name, username, email, bio });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBox type='text' label='Name' onChange={setName} />
      <InputBox type='text' label='UserName' onChange={setUserName} />
      <InputBox type='email' label='Email' onChange={setEmail} />
      <InputBox type='text' label='Bio' onChange={setBio} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegistrationForm;
