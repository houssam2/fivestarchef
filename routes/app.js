
const express       = require("express"),   
      bodyParser    = require("body-parser"),
      path          = require("path"),
      app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("../views/home.ejs");
});

app.listen(3000, () => {
    console.log("Up on port 3000");
})