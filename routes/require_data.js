var express = require('express')
var router = express.Router()
var mysqlConn = require('../db/db_handler')
router.get('/latest', function (req, res) {
  var querySql = `SELECT * FROM points ORDER BY created_at DESC LIMIT 1`
  mysqlConn.query(querySql, (err, result) => {
    if (err) {
      console.error(err)
      res.status(400).send('error happened')
    } else {
      console.log(result)
      res.send(result)
    }
  })
})

module.exports = router