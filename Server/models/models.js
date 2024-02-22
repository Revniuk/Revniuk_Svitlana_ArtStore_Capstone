const mongoose = require('mongoose');

// Define Artwork schema
const ArtworkSchema = new mongoose.Schema({
  title: String,
  description: String,
  medium: String,
  price: Number,
  image: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }
});

// Define Artist schema
const ArtistSchema = new mongoose.Schema({
  name: String,
  bio: String,
  profileImage: String,
  artworks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork'
  }]
});

// Define Order schema
const OrderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    address: String
  },
  artworks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork'
  }],
  paymentStatus: String
});

// Create Mongoose models 
const Artwork = mongoose.model('Artwork', ArtworkSchema);
const Artist = mongoose.model('Artist', ArtistSchema);
const Order = mongoose.model('Order', OrderSchema);

// To can export the models if needed for use in other files
module.exports = { Artwork, Artist, Order }; 
