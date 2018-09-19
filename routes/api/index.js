const router = require("express").Router();
const playersRoutes = require("./Players");

// Book routes
router.use("/", playersRoutes);

module.exports = router;
