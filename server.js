  var express = require('express');


  var app = express();

  app.use(express.static('public'));

  app.listen(3021, function () {
    console.log("Expess server is up on port 3021");
  });
