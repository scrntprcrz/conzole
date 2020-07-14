const express = require("express");
const _ = require("lodash");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const host = []
  .concat(...Object.values(require("os").networkInterfaces()))
  .reduce((a, i) => {
    if (i.internal === false && i.family === "IPv4") a = i.address;
    return a;
  }, "0.0.0.0");
const port = 666;
const template = require("./template");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname, "..", "public/index.html"));
  res.type("html").send(template({ host, port }));
});

const conzole = new require("./Conzole")(app, port);
