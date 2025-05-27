const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static("public"));

// Default route
get.$locate("https://saltsugarapp.onrender.com");

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

