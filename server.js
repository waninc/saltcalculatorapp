const express = require("express");
const app = express();

// Middleware to serve static files
app.use(express.static("public"));

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Salt Calculator!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
