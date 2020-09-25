import React from 'react';
import AllImageCard from './AllImageCard';
import '../App.css';

const filteredImageCard = function ({ artWorks, tag }) {
  const filteredArtWork = artWorks.filter((artWork) =>
    artWork.tags.includes(tag)
  );
  return <AllImageCard artWorks={filteredArtWork} />;
};

export default filteredImageCard;
