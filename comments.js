// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Parse request body
app.use(express.json());

// Store comments in memory
const comments = [];

// Get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Add a comment
app.post("/comments", (req, res) => {
  comments.push(req.body);
  res.sendStatus(201);
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
