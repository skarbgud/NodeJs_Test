var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/boomerang/*", function (req, res, next) {
  fs.appendFile("bommerang.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + JSON.stringify(req.body) + '\n\n', function (err) {
    if (err !== null) {
      console.log(err);
    }
  });

  res.json({});
});

router.post("/boomerang", function (req, res, next) {

  // console.log(req.headers)
  // console.log(req.body)

  fs.appendFile("bommerang.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + JSON.stringify(req.body) + '\n\n', function (err) {
    if (err !== null) {
      console.log(err);
    }
  });

  res.json({});
});

module.exports = router;
