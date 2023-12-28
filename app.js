const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Chemin vers votre fichier de configuration Swagger
const authMiddleware = require("./middlewares/authMiddleware"); // Import the authMiddleware

const app = express();

app.use(express.json());
connectDB();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", userRoutes);

// Example of a protected route
app.get("/protected-route", authMiddleware, (req, res) => {
  // This route is protected and will only be accessible to authenticated users
  // You can handle the route logic here
  res.json({ message: "You've accessed the protected route." });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
