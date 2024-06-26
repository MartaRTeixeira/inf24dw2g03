const passport = require("passport");
const jwt = require("jsonwebtoken");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
}

module.exports = { isLoggedIn, isAuthenticated };