const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Define routes for review-related actions
router.get("/reviews/:bookId", reviewController.getBookReviews);
router.post("/:bookId", reviewController.addReview);
router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;

// À l'intérieur de bookRoutes.js
//

// Assurez-vous d'importer la fonction du contrôleur
const { getBookReviewsByISBN } = require("../controllers/reviewController");

// Ajoutez une nouvelle route pour récupérer les avis par ISBN
router.get("/:isbn/reviews", getBookReviewsByISBN);
