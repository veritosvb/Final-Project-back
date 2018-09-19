const router = require("express").Router();
const playersRoutes = require("./articles");

// Book routes
router.use("/players", playersRoutes);

module.exports = router;
