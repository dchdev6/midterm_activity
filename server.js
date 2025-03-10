const express = require('express');
const app = express();
const port = 3000;

// This Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Arcana, Sean Joseph C.' });
});

// This start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
