// generate-jwt-secret.js
const crypto = require("crypto");
require("dotenv").config();

// Génération d'une clé secrète forte de 64 caractères
const secretKey = crypto.randomBytes(32).toString("hex");

console.log("Generated JWT Secret Key:", secretKey);
