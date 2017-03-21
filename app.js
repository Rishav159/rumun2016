
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();
// Configuration

  app.use(express.bodyParser());

  app.use(express.static(__dirname + '/public'));


// Routes



app.listen(3070, function(){
  console.log("listening on 3070");
});
