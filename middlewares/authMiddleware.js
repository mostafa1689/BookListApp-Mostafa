const jwt = require("jsonwebtoken");
require("dotenv").config(); // Charger les variables d'environnement

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token"); // Get token from header
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Utiliser la variable d'environnement
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Token is not valid" });
  }
};
