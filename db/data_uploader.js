var mysqlConn = require('../db/db_handler')
function insertPoints (lon, lat) {
  var sqlQuery = `INSERT INTO points (lon, lat) VALUES (${req.body.lon}, ${req.body.lat})`
  return new Promise((resolve, reject) => {
    mysqlConn.query(sqlQuery, (err, result) => {
      if (err) {
        // console.log(err)
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  insertPoints
}