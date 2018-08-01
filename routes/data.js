// Functions to write/read json files
var fs = require("fs");

const tablesFile = "../resources/tables.json";
const waitListFile = "../resources/waitList.json";

var tables = {
    arr: []
};
var waitList = {
    arr: []
};

function Person(custName, custPhone, custEmail, custId) {
    this.custName = custName;
    this.custPhone = custPhone;
    this.custEmail = custEmail;
    this.custId = custId;
}

function ReadTables() {
    fs.readFile(tablesFile, "utf8", function(err, data) {
        if (err) { console.log("Error reading tables file!"); return; }
        var tables = JSON.parse(data);
        console.log("TABLES: \n" + JSON.stringify(tables) + "\n");
    });
}

function WriteTables() {
    var obj = JSON.stringify(tables);
    fs.writeFile(tablesFile, obj, function(err) {
        if (err) { console.log("Error writing tables file!"); return; }
    });
}

function ReadWaitList() {
    fs.readFile(waitListFile, "utf8", function(err, data) {
        if (err) { console.log("Error reading waitList file!"); return; }
        var waitList = JSON.parse(data);
        console.log("WAITLiST: \n" + JSON.stringify(waitList) + "\n");
    });
}

function WriteWaitList() {
    var obj = JSON.stringify(waitList);
    fs.writeFile(waitListFile, obj, function(err) {
        if (err) { console.log("Error writing waitList file!"); return; }
    });
}

module.exports = {
    tables: tables,
    waitList: waitList,
    readTables: readTables,
    writeTables: writeTables,
    readWaitList: readWaitList,
    writeWaitList: writeWaitList
};

// var t1 = new Person("ham1", "9171", "h1@y.com", "ham_a1"); tables.arr.push(t1);
// var t2 = new Person("ham2", "9172", "h2@y.com", "ham_a2"); tables.arr.push(t2);
// var t3 = new Person("ham3", "9173", "h3@y.com", "ham_a3"); tables.arr.push(t3);
// var t4 = new Person("ham4", "9174", "h4@y.com", "ham_a4"); tables.arr.push(t4);
// WriteTables();
// ReadTables();

// var w1 = new Person("ham1", "9171", "h1@y.com", "ham_w1"); waitList.arr.push(w1);
// var w2 = new Person("ham2", "9172", "h2@y.com", "ham_w2"); waitList.arr.push(w2);
// var w3 = new Person("ham3", "9173", "h3@y.com", "ham_w3"); waitList.arr.push(w3);
// var w4 = new Person("ham4", "9174", "h4@y.com", "ham_w4"); waitList.arr.push(w4);
// WriteWaitList();
// ReadWaitList();
