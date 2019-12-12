var mysql = require('mysql');

// local 

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database:"puppeteer"
// });

// remote

var con = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b11547e48556c8",
  password: "c33ae484",
  database:"heroku_4a5d2a3c2d59274"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=con