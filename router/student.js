const express = require("express");
const router = express.Router();

router.get("/student-add", (req, res, next) => {
  res.send(
    '<form action="/student" method="POST" ><input type="text" name="student"><button type="submit">SEND</button></form>'
  );
  console.log("ini  middleware");
});

router.post("/student", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
