const router = require("express").Router();
const playersController = require("../../controllers/playerController");

// Matches with "/api/players"
router.route("/")
  .get(playersController.findAllPlayers)
  .post(playersController.create);

// Matches with "/api/players/:email"  
router.route("/:email")
  .get(playersController.findbyEmail)

// Matches with "/api/players/:id"
router
  .route("/somethin/:id")
  .get(playersController.findById)
  .put(playersController.update)
  .delete(playersController.remove);

module.exports = router;
