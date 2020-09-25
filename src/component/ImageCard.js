import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

const ImageCard = function ({ title, tags, caption, name }) {
  const history = useHistory();

  return (
    <div className='img-card'>
      <img
        src={`/api/images/${name}`}
        alt={name}
        onClick={() => history.push(`/image/${name}/${title}`)}
      />
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
