import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ImageCard = function ({ title, tags, caption, name }) {
  return (
    <div className='img-card'>
      <img src={`/api/images/${name}`} alt={name} />
      <div>
        <div className='small-font'>{title}</div>
        <div className='small-font'>{caption}</div>
        {tags.map((tag, idx) => (
          <Link to={`/gallery/${tag}`} key={idx} className='small-font'>
            {'#' + tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
