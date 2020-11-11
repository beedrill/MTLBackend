var mysql = require('mysql');
var con = mysql.createConnection({
  host: "database-2.cnj0rxosci7e.us-east-2.rds.amazonaws.com",
  user: "masterUser",
  password: "awsmysqltest"
});

con.connect(function(err) {
  if (err) {
    console.log(err)
    throw err
  }
  console.log("Database Connected!");
  con.query('USE MTLDatabase', function (err, result) {
    if (err) {
      console.log('unable to use MTLDatabase database')
    } else {
      console.log('connected to MTLDatabase')
    }
  })
});

module.exports = con