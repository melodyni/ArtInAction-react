import React, { useState } from 'react';
import InputBox from './InputBox';
import { useHistory } from 'react-router-dom';

const AddArtForm = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (e) => {
    const [image] = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(`${reader.result}`);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('title', title);
    data.append('caption', caption);
    data.append('tags', tags);
    fetch('api/saveArt', {
      method: 'POST',
      body: data,
    }).then(() => history.push(`/gallery/all`));
  };

  return (
    <div className='border'>
      <div className='preview'>
        <img src={imageUrl} alt='preview' />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='img'>Image</label>
        <input
          id='img'
          type='file'
          name='image'
          onChange={handleChange}
          required
        />
        <br />
        <InputBox type='text' label='Title' onChange={setTitle} />
        <InputBox type='text' label='Tags' onChange={setTags} />
        <InputBox type='text' label='Caption' onChange={setCaption} />

        <br />
        <button type='submit' className='btn blue'>
          Submit
        </button>
        <button className='btn red'>Cancel</button>
      </form>
    </div>
  );
};

export default AddArtForm;
