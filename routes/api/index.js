const router = require("express").Router();
const playersRoutes = require("./Players");

// Book routes
router.use("/Players", playersRoutes);

module.exports = router;
