const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Game = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  idTwitch: { type: String, required: true }
});

const Games = mongoose.model('Games', Game);

module.exports = Games;
