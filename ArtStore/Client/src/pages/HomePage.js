import React from 'react';

const HomePage = () => {
  const artworks = [
    { title: 'Sunset Dreams', artist: 'Jane Doe' },
    { title: 'The Lone Tree', artist: 'John Smith' },
    { title: 'Starry Night', artist: 'Emily Johnson' },
    // Add more artworks as needed
  ];

  return (
    <div>
      <h1>Welcome to our Art Store!</h1>
      <h2>Featured Artworks</h2>
      {artworks.map((artwork, index) => (
        <div key={index}>
          <h3>{artwork.title}</h3>
          <p>By: {artwork.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
