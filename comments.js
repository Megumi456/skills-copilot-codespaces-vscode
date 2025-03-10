// Create web server
// Create a new express application
const express = require('express');
const app = express();

// Create a new route to handle incoming requests
app.get('/comments', (request, response) => {
  response.send('This is the comments page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});