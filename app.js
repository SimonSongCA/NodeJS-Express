"use strict";
const express = require("express");
const createError = require("http-errors");

const app = express();

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
  res.send(err.message);
});

module.exports = app;
