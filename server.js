const express = require('express');
const path = require('path');
/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, 'build/index.html'));
});

app.listen(port, function(err) {
  if (err) throw err;

  console.log("Website running at port 3000")
});
