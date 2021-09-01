const express = require("express");
var cors = require('cors')
const Fuse = require("fuse.js");
const app = express();
app.use(express.json());
app.use(cors())
const port = 3000;

const myArray = ["Kahilipara","Six Mile","Beltola","Lokhra","Lal Ganesh","Zoo Road","Hatigaon","Khanapara","Bhetapara","Jayanagar","Ganeshguri","Rukmini Gaon","Lalmati","Dispur","Downtown","Bhangagarh","Rajgarh Road","Kahilpara","GS Road","Lokhra Rd","Borsojai","Survey","Ghoramara","Beharbari Chariali","Zoo Tiniali","Basisthapur","Wireless","Nalapara","DakhinGaon","Tarun Nagar","Jyotikuchi","Nayanpur","Christian Basti","Japorigog","Sawkuchi","Janakpur","Bormotoria","Odalbakra","Tripura Rd","Barsapara","Sundarpur","Bhetapara","Sijubari","Natboma"];

const options = {
  threshold: 0.6,
  keys: ["title"],
};

const fuse = new Fuse(myArray, options);


// GET AVAILABLE LOCATION

app.get("/available-location", (req, res) => {
  res.json(myArray);
});

// GET POST

app.get("/post", (req, res) => {
  res.send("Hello Im am post");
});

// SEARCH FUNCTION

app.post("/search", (req, res) => {
  const pattern = req.body.query;
  console.log(pattern)
  const x = fuse.search(pattern);
  console.log(x)
  const results = x.slice(0,5)
  res.json(!!results ? results : []);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
