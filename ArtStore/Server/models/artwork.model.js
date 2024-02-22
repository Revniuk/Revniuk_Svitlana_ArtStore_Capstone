const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artworkSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
}, {
  timestamps: true,
});

// Add an index on the 'title' field, 
artworkSchema.index({ title: 1 });

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;

