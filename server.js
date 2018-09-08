const express = require('express');
const path = require('path');
/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();


app.get('*.js', function(req, res, next) {
 req.url = req.url.split('?')[0];
 req.url = req.url + '.gz';
 res.set('Content-Encoding', 'gzip');
 res.set('Content-Type', 'text/javascript');
 next();
});

app.get('*.css', function(req, res, next) {
 req.url = req.url.split('?')[0];
 req.url = req.url + '.gz';
 res.set('Content-Encoding', 'gzip');
 res.set('Content-Type', 'text/css');
 next();
});

app.use(express.static('build'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, 'build/index.html'));
});

app.listen(port, function(err) {
  if (err) throw err;

  console.log("Website running at port 3000")
});
