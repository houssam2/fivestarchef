
const express       = require("express"),   
bodyParser    = require("body-parser"),
path          = require("path"),
app           = express();

app.use(express.static(path.join(__dirname, 'public')));
console.log(app.use(express.static(path.join(__dirname, 'css'))));

app.get("/blogs/new", (req, res) => {
res.render("new");
});