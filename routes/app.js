
const express       = require("express"),   
      bodyParser    = require("body-parser"),
      path          = require("path"),
      data          = require("data"),
      app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("../views/home");
});

app.get("/reserve", (req, res) => {
    res.render("../views/reserve");
});

app.get("/table", (req, res) => {
    res.render("../views/tables");
});

app.listen(3000, () => {
    console.log("Up on port 3000");
})