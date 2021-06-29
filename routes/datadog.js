var express = require("express");
var router = express.Router();
var fs = require("fs");
require('dotenv').config();

const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: process.env.CLIENT_ADDRESS});

router.post("/v1/input/:clientToken", function (req, res, next) {
  fs.appendFile("datadog.txt", '[ HEADER ] \n' + JSON.stringify(req.headers) + '\n\n [ BODY ] \n' + req.body + '\n\n', function (err) {
    console.log(req.body);
    // req.body = req.body.replace('\n {"_dd"', ', {"_dd"');
    // req.body = req.body.replace(/(\r\n\t|\n|\r\t)/gm,", "); 
    // console.log(req.body);
    async function run() {
      await client.index({
        index: 'datadog-data',          
        body: {
          timestamp: new Date().toISOString(),
          headContent: req.headers,
          bodyContent: req.body
        }
      })
    }
    run();
  });

  res.json({});
});

router.get("/v1/input/:clientToken", function (req, res, next) {
  console.log(req);
  res.json({});
});

module.exports = router;
