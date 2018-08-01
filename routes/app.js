
const express       = require("express"),   
      bodyParser    = require("body-parser"),
      path          = require("path"),
      data          = require("./data.js"),
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


app.get("/api/table", (req, res) => {
    data.readTables();
    data.readWaitList();
    
    res.send(data.tables.arr.concat(data.waitList.arr));
});


app.post("/api/reserve", function(req,res) {
    var newTable = req.body;
    newTable.tableId = getTableID();
    ressies.push(newTable);
    res.json(ressies);
 })
 
 // table
 function getTableID() {
    if (ressies.length <= 4  ) {
        var currTables = ressies.length + 1
        return currTables
        
    } else {
        return -1;
    }
 }
 
 var ressies = [];


app.listen(3000, () => {
    console.log("Up on port 3000");
})