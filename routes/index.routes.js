const router = require("express").Router();
const phonesRoutes = require("./phones.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/phones", phonesRoutes);

module.exports = router;
