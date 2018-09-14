const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Player = new Schema({
  player:{
    type: String,
    required: true
  },
  games:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('players', Player);