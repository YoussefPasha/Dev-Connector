const e = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
//Test and get Api
router.get("/me", auth,async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'user',
            ['name' , 'avatar']
        )
        if (!profile) {
            return res.status(400).send({msg: "There is no profile for this user"})
        }
        else {
            res.json(profile);
        }

  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
