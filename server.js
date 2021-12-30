const express = require("express");
const path = require("path");

const publicDir = path.join(__dirname, "public");

const app = express();

app.use(function (req, res, next) {
  console.log(req.url, req.method);
  next();
});

app.get("/jokes", function (req, res) {
  let jokes = [
    "Chuck elszamolt vegtelenig, ketszer",
    "Chuck a szulinapjan kivalaszt egy szerencsés gyereket, es beledobja a napba",
    "Chuck ha vert ad, akkor csak egy pisztolyt meg egy vodrot ker",
  ];

  let index = Math.floor(Math.random() * jokes.length);
  return res.json({ text: jokes[index] });
});

app.use(express.static(publicDir));

app.listen(8080, function () {
  console.log("App is running on 8080");
});
