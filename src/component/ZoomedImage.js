import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const ZoomedImage = function () {
  const { name, title } = useParams();
  console.log(name);
  return (
    <div className='zoomed-img'>
      <div className='side-panel '>{title}</div>
      <img src={`/api/images/${name}`} alt={name} />
    </div>
  );
};

export default ZoomedImage;
