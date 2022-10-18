const express = require("express");
const router = express.Router();
const postLogin = require('../../db/db');

router.get("/", () => {
  console.log("/ here");
  res.status(200).json({
    message: "Server is up.",
    method: req.method,
  });
});

router.post("/login", (req, res) => {
  postLogin(req).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Login saved.",
      status:200,
      login: {
        userid: result.userid,
        password: result.password,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        },
      },
    });
  })
  .catch(err => {
    res.status(500).json({
      message: "Login failed.",
      status: 500,
      error: {
        message: err.message,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        },
      },
    });
  })
});

module.exports = router;