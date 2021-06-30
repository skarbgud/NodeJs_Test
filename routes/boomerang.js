var express = require("express");
var router = express.Router();
var fs = require("fs");
require('dotenv').config();

const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: process.env.CLIENT_ADDRESS});
async function run(headers, body) {
  await client.index({
    index: 'boomerang-data',          
    body: {
      "@timestamp": new Date().toISOString(),
      headContent: headers,
      content: body
    }
  })
}

router.post("/boomerang/*", function (req, res, next) {
  fs.appendFile("bommerang.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + JSON.stringify(req.body) + '\n\n', function (err) {
    run(req.headers, req.body);
    if (err !== null) {
      console.log(err);
    }
  });

  res.json({});
});

router.post("/boomerang", function (req, res, next) {
  fs.appendFile("bommerang.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + JSON.stringify(req.body) + '\n\n', function (err) {
    run(req.headers, JSON.stringify(req.body));
    if (err !== null) {
      console.log(err);
    }
  });

  res.json({});
});

module.exports = router;
