var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/sematext/*", function (req, res, next) {
  fs.appendFile("sematext.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + JSON.stringify(req.body) + '\n\n', function (err) {
    if (err !== null) {
      console.log(err);
    }
  });

  res.json({});
});

router.options("/sematext/*", function (req, res, next) {
  fs.appendFile("sematext.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + req.body + '\n\n', function (err) {
    if (err !== null) {
      console.log(err);
    }
  });

  res.send();
});

router.head("/sematext/*", function (req, res, next) {
  console.log(req.body)
  // fs.appendFile("sematext.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + req.body + '\n\n', function (err) {
  //   if (err !== null) {
  //     console.log(err);
  //   }
  // });

  res.json({});
});

module.exports = router;
