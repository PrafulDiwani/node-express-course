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

app.get("/user/:id", function (req, res) {
  res.json({
    success: true ,
    message :  'got one user',
    user : req.params.id  
  })
})

app.listen(port, function () {
  console.log(`server listen at ${port}`);
});
