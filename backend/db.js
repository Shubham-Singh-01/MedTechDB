//db.js
require('dotenv').config();
const mongoose = require('mongoose');

// Use MongoDB Atlas URI from environment variable, fallback to local if not set
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/medtechdb';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas successfully');
    console.log('Database:', mongoose.connection.name);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectToMongo;
