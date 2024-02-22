// Define Artwork schema
const ArtworkSchema = {
  title: String,
  description: String,
  medium: String,
  price: Number,
  image: String,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }
};

// Define Artist schema
const ArtistSchema = {
  name: String,
  bio: String,
  profileImage: String,
  artworks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork'
  }]
};

// Define Order schema
const OrderSchema = {
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
};
