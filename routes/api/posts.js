const express = require("express");
const router = express.Router();

//Test and get Api
router.get("/", (req, res) => res.send("post route"));

module.exports = router;
