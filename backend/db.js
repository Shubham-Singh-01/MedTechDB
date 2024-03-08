const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/medtechdb';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectToMongo;
