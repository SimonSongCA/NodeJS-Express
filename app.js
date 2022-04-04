"use strict";

// instantiating an 'Express' instance
const express = require("express");
// import 'http-errors' object
const createError = require("http-errors");
const indexRoutes = require("./routes/index");
const helloRoutes = require("./routes/hello");

const app = express();

app.use("/", indexRoutes);
app.use("/hello", helloRoutes);

// this part of middleware should always be the second-to-last one
// if this part is reached, then it indicates:
// NO ROUTES WERE MATCHED❌
app.use((req, res, next) => {
  if (req.method !== "GET") {
    next(createError(405));
    return;
  }
  next(createError(404));
});

// this part of middleware should always be the last one middleware
// if this part is reached, then it indicates:
// middleware is returning an error as part of the result
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  //if an object was passed to res.send that object would be serialized to JSON and the response Content-Type would automatically be set to application/json.
  res.send(err.message);
});

module.exports = app;
