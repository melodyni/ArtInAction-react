import React, { useState } from 'react';

const InputBox = ({ type, onChange, label }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    setValue(input);
    onChange(input);
  };

  return (
    <div>
      <label>{label}</label>
      <div>
        <input onChange={handleChange} type={type} value={value} required />
      </div>
    </div>
  );
};

export default InputBox;
