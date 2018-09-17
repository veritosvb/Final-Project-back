// Create Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const team = new Schema({
    date: { type: Date, default: Date.now },
    game: String,
    users: {
        type: Map,
        of: String
      }
  });


  mongoose.model('team', team);