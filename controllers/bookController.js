const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const { title, author, isbn } = req.body;

    if (!title || !author || !isbn) {
      return res
        .status(400)
        .json({ message: "Title, author, and ISBN are required" });
    }

    const newBook = new Book({ title, author, isbn });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

// Controller method to get a list of all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller method to get a book by ISBN
const getBookByISBN = async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller method to get books by author
const getBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.authorName });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller method to get books by title
const getBooksByTitle = async (req, res) => {
  try {
    const books = await Book.find({ title: req.params.title });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};
