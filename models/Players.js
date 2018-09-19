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
  twitch:String,
  steam:String,
  score:Number,
  about:String,
  url:String
});

mongoose.model('Players', Players);