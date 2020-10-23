const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get Token
  const token = req.header("x-auth-token");

  //Check if no Token
  if (!token) {
    return res.status(401).json({ msg: "No Token auth denied" });
  } else {
    try {
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).json({ msg: "token is not valid" });
    }
  }
};
