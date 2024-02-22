import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArtistProfilePage = () => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    // Replace 'Alice Wonderland' with the actual artist name 
    const artistName = 'Alice Wonderland';

    axios.get(`https://api.artpi.co/artists/${artistName}`)
      .then(response => {
        setArtist(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  if (!artist) return 'Loading...';

  return (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>
      <h2>Artworks</h2>
      {artist.artworks.map((artwork, index) => (
        <div key={index}>
          <h3>{artwork.title}</h3>
          <p>Year: {artwork.year}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistProfilePage;
