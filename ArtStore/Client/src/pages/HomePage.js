import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const artworks = [
    { title: 'Sunset Dreams', artist: 'Jane Doe' },
    { title: 'The Lone Tree', artist: 'John Smith' },
    { title: 'Starry Night', artist: 'Emily Johnson' },
    // Add more artworks if I have it :)
  ];

  return (
    <div>
      <Header />
      <h1>Welcome to our Art Store!</h1>
      <h2>Featured Artworks</h2>
      {artworks.map((artwork, index) => (
        <div key={index}>
          <h3>{artwork.title}</h3>
          <p>By: {artwork.artist}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default HomePage;