const router = require("express").Router();
const playersController = require("../../controllers/playerController");

// Matches with "/api/articles"
router.route("/")
  .get(playersController.find)
  .post(playersController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(playersController.findById)
  .put(playersController.update)
  .delete(playersController.remove);

module.exports = router;
