const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  review: String,
});

module.exports = mongoose.model("Review", ReviewSchema);

