const express = require("express");
var cors = require('cors')
const Fuse = require("fuse.js");
const app = express();
app.use(cors())
const port = 3000;

const myArray = ["ayan", "assam", "banana", "hatigaon", "hati", "sati"];

const options = {
  keys: ["title"],
};

const fuse = new Fuse(myArray, options);


// GET ROUTE

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/post", (req, res) => {
  res.send("Hello Im am post");
});

// SEARCH FUNCTION

app.post("/search", (req, res) => {
  const pattern = req.body;
  const x = fuse.search(pattern);
  console.log(x);
  res.send(x);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
