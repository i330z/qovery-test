const express = require("express");
var cors = require('cors')
const Fuse = require("fuse.js");
const app = express();
app.use(express.json());
app.use(cors())
const port = 3000;

const myArray = ["Kahilipara","Six Mile","Beltola","Lokhra","Lal Ganesh","Zoo Road","Hatigaon","Khanapara","Bhetapara","Jayanagar","Ganeshguri","Rukmini Gaon","Lalmati","Dispur","Downtown","Bhangagarh","Rajgarh Road","Kahilpara","GS Road","Lokhra Rd","Borsojai","Survey","Ghoramara","Beharbari Chariali","Zoo Tiniali","Basisthapur","Wireless","Nalapara","DakhinGaon","Tarun Nagar","Jyotikuchi","Nayanpur","Christian Basti","Japorigog","Sawkuchi","Janakpur","Bormotoria","Odalbakra","Guwahati,Tripura Rd","Barsapara","Sundarpur","Bhetapara","Sijubari","Natboma"];

const options = {
  threshold: 0.6,
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
  const pattern = req.body.query;
  console.log(pattern)
  const x = fuse.search(pattern);

  console.log(x)
  res.json(!!x ? x : []);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
