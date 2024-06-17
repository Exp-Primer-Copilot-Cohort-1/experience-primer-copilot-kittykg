// Create web server
const express = require("express");
const app = express();

// Create a route that responds to a GET request
app.get("/comments", (req, res) => {
  res.send("This is the comments page.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Run the server with the command node comments.js
// The server is now running on http://localhost:3000
