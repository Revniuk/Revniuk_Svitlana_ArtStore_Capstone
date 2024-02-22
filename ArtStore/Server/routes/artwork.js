const router = require('express').Router();
const { getArtworks, addArtwork } = require('../controllers/artwork.controller');

// Endpoint to get all artworks
router.route('/').get(getArtworks);

// Endpoint to add a new artwork
router.route('/add').post(addArtwork);

// More routes can be added here for updating and deleting artworks

module.exports = router;
