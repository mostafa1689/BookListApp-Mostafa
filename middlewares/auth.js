const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_secret_key_here"; // this should match the one in userController

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token"); // Get token from header
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
