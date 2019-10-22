var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config()

var app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

var routes = require('./server/config/routes.js');
routes(app)


app.listen(8000, function() {
    console.log('listening on port 8000');
})