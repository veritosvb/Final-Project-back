const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Players = new Schema({
  username:{
    type: String,
  },
  email:{
    type: String,
    required: true
  },
  prefgames: {
    type: Map,
    of: String
  },
  twitch:String,
  steam:String,
  teams: {
    type: Map,
    of: String
  },
  score:Number
});

mongoose.model('Players', Players);