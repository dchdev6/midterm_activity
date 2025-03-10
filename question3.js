// Node.js and Express.js Server

// This imports the express module
const express = require('express');

// This creates an express application
const app = express();

// This sets the port for the server
const port = 3000;

// This Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Arcana, Sean Joseph C.' });
});

// This start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
