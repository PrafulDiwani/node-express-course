const express = require("express");
const app = express();
const port = 5000;

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

app.listen(port, function () {
  console.log(`server listen at ${port}`);
});
