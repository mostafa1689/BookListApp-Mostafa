const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Define routes for book-related actions
// Define routes for book-related actions
router.get("/:isbn", bookController.getBookByISBN); // Les routes avec des paramètres en premier
router.get("/author/:authorName", bookController.getBooksByAuthor);
router.get("/title/:title", bookController.getBooksByTitle);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get a list of all books
 *     responses:
 *       200:
 *         description: List of books
 */
router.get("/", bookController.getAllBooks);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Book object that needs to be added to the store
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             author:
 *               type: string
 *             isbn:
 *               type: string
 *     responses:
 *       201:
 *         description: The created book
 *       400:
 *         description: Bad request
 */
router.post("/", bookController.createBook);
module.exports = router;
