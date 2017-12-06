const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hey: 'you ' });
});

// if a port has not been defined by our production environment then use 5000 for development
const PORT = process.env.PORT || 5000;
