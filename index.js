const express = require('express')
const request = require("request");
const app = express()
const port = 3000


//arr request = require('request');
request('https://api.blockcypher.com/v1/eth/main/addrs/0xceb49edfe0628cc02d2a44d106e1793d0e71da3e/balance', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  else {
    console.log("Error "+response.statusCode)
  }
  const respb = JSON.parse(body);
  app.get("/balance", function (req, res) {
    res.json(respb);
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})