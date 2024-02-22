// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

mongoose.connect('mongodb://localhost:27017/artdatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const artworkSchema = new mongoose.Schema({
  title: String,
  artist: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Artwork = mongoose.model('Artwork', artworkSchema);

// CREATE: Add a new artwork
app.post('/api/artworks', async (req, res) => {
  const newArtwork = new Artwork(req.body);
  const savedArtwork = await newArtwork.save();
  res.json(savedArtwork);
});

// READ: Get all artworks
app.get('/api/artworks', async (req, res) => {
  const artworks = await Artwork.find();
  res.json(artworks);
});

// READ: Get a specific artwork by ID
app.get('/api/artworks/:id', async (req, res) => {
  const artwork = await Artwork.findById(req.params.id);
  res.json(artwork);
});

// UPDATE: Update a specific artwork by ID
app.put('/api/artworks/:id', async (req, res) => {
  const updatedArtwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedArtwork);
});

// DELETE: Delete a specific artwork by ID
app.delete('/api/artworks/:id', async (req, res) => {
  await Artwork.findByIdAndDelete(req.params.id);
  res.json({ message: 'Artwork deleted' });
});

app.listen(3000, () => console.log('Server started on port 3000'));
