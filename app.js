const express = require('express');

const app = express();
const path = require('path');
const port = 3000;


app.get('/', function(req, res) {

  app.use(express.static(__dirname + '\\src'));
  res.sendFile(path.join(__dirname + '\\index.html'));

});

app.listen(port, () => console.log('Listening on port $(port)'));

