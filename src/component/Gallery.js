import React, { useState } from 'react';
import reqAPI from './requestAPI';
import TitleBar from './TitleBar';
import '../App.css';

const Gallery = function () {
  return (
    <div>
      <TitleBar />
      <div className='inline'>
        {/* //<NavBar> */}
        <button>+ New Art</button>
      </div>
    </div>
  );
};

export default Gallery;
