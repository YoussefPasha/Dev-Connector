const express = require("express");
const router = express.Router();

//Test and get Api
router.get("/", (req, res) => res.send("User route"));

module.exports = router;

