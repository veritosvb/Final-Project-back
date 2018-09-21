const router = require("express").Router();
const playersController = require("../../controllers/playerController");

// Matches with "/api/createUser"
router.route("/createUser")
  .post(playersController.createUser);

// Matches with "/api/email/:email"  
router.route("/email/:email")
  .get(playersController.findbyEmail)

// Matches with "/api/player/:id"
router.route("/player/:id")
  .get(playersController.findById)

// Matches with "/api/players"
router.route("/players")
  .get(playersController.findAllPlayers)

router.route("/games")
  .get(playersController.findAllGames)

// Matches with "/favGame"
router.route("/favGame")
  .post(playersController.createFavGame)

router.route("/favUserGames/:id")
  .get(playersController.findUserFavorites)
  .delete(playersController.deleteUserFavorites)

module.exports = router;
