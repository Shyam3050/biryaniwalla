const express = require("express");

const app = express();

app.use("/api/v1/restaurent", (req, res) => {
  res.status(200).json({
    data: "working...",
  });
});

module.exports = app;
