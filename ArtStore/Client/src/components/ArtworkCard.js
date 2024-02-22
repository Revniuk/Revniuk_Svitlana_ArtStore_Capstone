import React from 'react';

const ArtworkCard = ({ artwork }) => {
  return (
    <div>
      <h3>{artwork.title}</h3>
      <p>By: {artwork.artist}</p>
      <p>Year: {artwork.year}</p>
      <p>Price: ${artwork.price}</p> 
    </div>
  );
};

export default ArtworkCard;
