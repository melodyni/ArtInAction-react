import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../App.css';
import back from '../Icons/left-arrow.svg';

const ZoomedImage = function () {
  const history = useHistory();
  const { name, title } = useParams();
  return (
    <div>
      <img
        src={back}
        className='icon'
        onClick={() => history.push('/gallery/all')}
      />
      <div className='zoomed-img'>
        <div className='side-panel '>{title}</div>
        <img src={`/api/images/${name}`} alt={name} />
      </div>
    </div>
  );
};

export default ZoomedImage;
