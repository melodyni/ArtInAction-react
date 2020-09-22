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
      <input onChange={handleChange} type={type} value={value} />
    </div>
  );
};

export default InputBox;
