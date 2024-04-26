const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100
  },
  isAdmin: {
    type: Boolean,
    default: false
  },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
