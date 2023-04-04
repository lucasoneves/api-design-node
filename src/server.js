const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({message: 'success'})
});



module.exports = app;