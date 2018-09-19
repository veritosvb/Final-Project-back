const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favGame = new Schema({
  username: { type: String },
  favorite: { type: String}
});

const favGames = mongoose.model('favGames', favGame);

module.exports = favGames;
