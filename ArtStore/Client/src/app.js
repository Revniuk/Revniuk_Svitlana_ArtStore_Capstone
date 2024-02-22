const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

const url = 'mongodb://localhost:27017';
const dbName = 'artdatabase';
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

// CREATE: Add a new artwork
app.post('/api/artworks', async (req, res) => {
  const newArtwork = req.body;
  const collection = db.collection('artworks');
  const result = await collection.insertOne(newArtwork);
  res.json(result.ops[0]);
});

//Get all artworks
app.get('/api/artworks', async (req, res) => {
  const collection = db.collection('artworks');
  const artworks = await collection.find({}).toArray();
  res.json(artworks);
});

// Get a specific artwork by ID
app.get('/api/artworks/:id', async (req, res) => {
  const collection = db.collection('artworks');
  const artwork = await collection.findOne({ _id: MongoClient.ObjectId(req.params.id) });
  res.json(artwork);
});

//Update a specific artwork by ID
app.put('/api/artworks/:id', async (req, res) => {
  const collection = db.collection('artworks');
  const updatedArtwork = await collection.updateOne({ _id: MongoClient.ObjectId(req.params.id) }, { $set: req.body });
  res.json(updatedArtwork);
});

// DELETE: Delete a specific artwork by ID
app.delete('/api/artworks/:id', async (req, res) => {
  const collection = db.collection('artworks');
  await collection.deleteOne({ _id: MongoClient.ObjectId(req.params.id) });
  res.json({ message: 'Artwork deleted' });
});

app.listen(3000, () => console.log('Server started on port 3000'));
