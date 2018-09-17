const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/")
  .get(playerController.findAll)
  .post(playerController.create);


router.route("/:id")
  .get(playerController.findOne)
  .put(playerController.update)
  .delete(playerController.remove);

module.exports = router;
