const express = require("express");
const app = express();
const boodyParser = require("body-parser");
const bodyParser = require("body-parser");
const port = 5000;

// Middle wear
app.use(bodyParser.json());

const mockUserData = [
  {
    name: "mark",
    name: "jill",
  },
];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users, Nice!",
    users: mockUserData,
  });
});

app.get("/user/:id", function (req, res) {
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "praful";
  const mockPassword = "admin";
  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match",
      token: "encrypted toek goes hear",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

app.listen(port, function () {
  console.log(`server listen at ${port}`);
});
