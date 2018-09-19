const db = require("../models");

// Defining methods for the playersController
module.exports = {
  findbyEmail: function(req, res) {
    console.log("here in find by email " + req.params.email)
    db.Players
      .find({email: req.params.email})
      .then(dbModel => {
        console.log("Database  " + dbModel[0]._id);
        return res.json(dbModel[0]._id);
        
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("here in find by id " + req.params.id)
    db.Players
      .find({_id: req.params.id})
      .then(dbModel => {
        console.log("Database  " + dbModel);
        return res.json(dbModel);
        
      })
      .catch(err => res.status(422).json(err));
  },
  findAllPlayers: function(req, res) {
    db.Players
      .find()
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllGames: function(req, res) {
    db.Games
      .find()
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    console.log("hello creating user");
    db.Players
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.Players
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function(req, res) {
//userid + gamename
     
  },
  updateGame: function(req, res) {


  },
  deleteUserGame: function(req, res) {
 //userid + gamename
  },
  createFavGame: function(req, res) {
    //userid + gamename
    db.Games
    .find(req.params.game)
    .then(dbModel => {
      db.favGames
      .create(req.body.userid,dbModel[0]._id)
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err));
    
    })
    .catch(err => res.status(422).json(err));
     }

};
