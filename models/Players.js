const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Players = new Schema({
  email: { type: String, required: true },
  username: { type: String },
  about: { type: String},
  twitch: { type: String },
  steam: { type: String },
  url: String,
  score: Number
});

const Player = mongoose.model('Players', Players);

module.exports = Player;
