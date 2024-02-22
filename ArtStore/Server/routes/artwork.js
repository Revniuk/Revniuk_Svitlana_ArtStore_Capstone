const router = require('express').Router();
let Artwork = require('../models/artwork.model');

// Endpoint to get all artworks
router.route('/').get((req, res) => {
  Artwork.find()
    .then(artworks => res.json(artworks))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint to add a new artwork
router.route('/add').post((req, res) => {
  const newArtwork = new Artwork(req.body);

  newArtwork.save()
    .then(() => res.json('Artwork added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// More routes can be added here for updating and deleting artworks

module.exports = router;
