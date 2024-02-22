import React from 'react';

const GalleryPage = () => {
  const artworks = [
    { title: 'Ocean Breeze', artist: 'Alice Wonderland' },
    { title: 'Mountain Majesty', artist: 'Bob Builder' },
    { title: 'City Lights', artist: 'Charlie Chocolate' },
    // Add more artworks as I have it 
  ];

  return (
    <div>
      <h1>Artwork Gallery</h1>
      {artworks.map((artwork, index) => (
        <div key={index}>
          <h2>{artwork.title}</h2>
          <p>By: {artwork.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
