// User.js (User model)
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  
  gender: mongoose.SchemaTypes.String,
  
  address: mongoose.SchemaTypes.String,
  
  permanentAddress: mongoose.SchemaTypes.String,
  
  recoveryEmail: mongoose.SchemaTypes.String,
  
  phone1: mongoose.SchemaTypes.String,
  
  phone2: mongoose.SchemaTypes.String,
  
  ayushmanCard: mongoose.SchemaTypes.String,
  
  bloodGroup: mongoose.SchemaTypes.String,
  
  heightFeet: {
    type: Number,
    // required: true
  },
  heightInches: {
    type: Number,
    // required: true
  }, 
  
  weight: mongoose.SchemaTypes.String,
  
  aadhaarCard: mongoose.SchemaTypes.String,
  
  dob: {
    type: Date,
    // required: true
  },
  
  photo: mongoose.SchemaTypes.String,
  
  timestamp: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  
  date: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;