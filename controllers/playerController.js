const db = require("../models");

// Defining methods for the playersController
module.exports = {
  findbyEmail: function(req, res) {
    console.log("here in find by email " + req.params.email)
    db.Players
      .find({email: req.params.email})
      .then(dbModel => {
        return res.json(dbModel[0]);
        
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("here in find by id " + req.params.id)
    db.Players
      .find({_id: req.params.id})
      .then(dbModel => {
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
  findUserFavorites: function(req, res) {
//userid + gamename
    console.log("finding favorite" + req.params.id)
    db.favGames
    .find({username: req.params.id})
    .then(dbModel => {
      return res.json(dbModel);
    })
    .catch(err => res.status(422).json(err));
     
  },
  updateGame: function(req, res) {


  },
  deleteUserFavorites: function(req, res) {
    console.log("delete favorite")
    db.favGames
    .remove({_id: req.params.id})
    .then(dbModel => {
      res.json(dbModel);
      console.log(dbModel);
    })
    .catch(err => res.status(422).json(err));
  },
  createFavGame: function(req, res) {
    console.log("creating favorite")
    db.favGames
    .create(req.body)
    .then(dbModel => {
      res.json(dbModel);

    })
    .catch(err => res.status(422).json(err));
  }
};
