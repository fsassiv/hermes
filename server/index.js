// const http = require("http");

// //create http server
// http
//   .createServer((request, response) => {
//     // Enable CORS
//     response.setHeader("Access-Control-Allow-Origin", "*");
//   })
//   .listen(3333, () => {
//     console.log("Server running");
//   });

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/v1/companies", (req, res, next) => {
  res.send(require("./companies.json"));
});

app.get("/api/v1/guess", (req, res, next) => {
  res.send(require("./guess.json"));
});

app.listen(3333, () => {
  console.log("servidor ok");
});
