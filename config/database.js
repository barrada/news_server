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
  if(err) {                                   
    console.log('error when connecting to db:', err);
    setTimeout(handleDisconnect, 2000); 
  }
});

module.exports=con