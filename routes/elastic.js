var express = require("express");
var router = express.Router();
var fs = require("fs");
// const cors = require('cors');

router.post("/elastic/*", function (req, res, next) {
  fs.appendFile("elastic.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + req.body + '\n\n', function (err) {
    if (err !== null) {
      console.log(err);
    }
  });

  res.send();
});


router.options("/elastic/*", function (req, res, next) {
  fs.appendFile("elastic.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + req.body + '\n\n', function (err) {
    if (err !== null) {
      console.log(err);
    }
  });

  res.send();
});

// router.options("/elastic/*", function (req, res, next) {
//   fs.appendFile("elastic.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + req.body + '\n\n', function (err) {
//     if (err !== null) {
//       console.log(err);
//     }
//   });

//   res.json({});
// });

module.exports = router;
