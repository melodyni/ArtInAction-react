import React from 'react';
import ImageCard from './ImageCard';
import '../App.css';

const AllImageCard = function ({ artWorks }) {
  const cards = artWorks.map(({ md5, name, caption, tags, title }) => (
    <ImageCard
      key={md5}
      name={name}
      caption={caption}
      tags={tags}
      title={title}
    />
  ));
  return <div className='flex-wrap'>{cards}</div>;
};

export default AllImageCard;
