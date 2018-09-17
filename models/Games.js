const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Games = new Schema({
    name: String,
    players: {
        type: Map,
        of: String
      },
});

mongoose.model('Games', Games);