import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const artworks = [
    { title: 'Ocean Breeze', artist: 'Alice Wonderland' },
    { title: 'Mountain Majesty', artist: 'Bob Builder' },
    { title: 'City Lights', artist: 'Charlie Chocolate' },
    
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
