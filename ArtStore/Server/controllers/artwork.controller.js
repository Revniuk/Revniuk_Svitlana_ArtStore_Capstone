const Artwork = require('../models/artwork.model');

// Get all artworks
const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new artwork
const addArtwork = async (req, res) => {
  const artwork = new Artwork(req.body);

  try {
    const newArtwork = await artwork.save();
    res.status(201).json(newArtwork);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// FUTURE MIDIFYING- More functions can be added here for updating and deleting artworks

module.exports = {
  getArtworks,
  addArtwork,
  // export other functions here
};
