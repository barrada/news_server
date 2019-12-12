var mysql = require('mysql');

// local 

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database:"puppeteer"
// });

// remote

// var con = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "b11547e48556c8",
//   password: "c33ae484",
//   database:"heroku_4a5d2a3c2d59274"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
var con  = mysql.createPool({
	connectionLimit : 3,
	host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b11547e48556c8",
  password: "c33ae484",
  database:"heroku_4a5d2a3c2d59274"
});

con.getConnection(function(err, connection) {
  if (err) throw err; // not connected!

  // Use the connection
  connection.query('SELECT 1 FROM posts_copy1', function (error, results, fields) {
    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});

module.exports=con