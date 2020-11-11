var express = require('express')
var router = express.Router()
var mysqlConn = require('../db/db_handler')
var uploaderHandler = require('../db/data_uploader')
router.get('/', function (req, res) {
  res.send('do a post to push the detection to the database')
})

router.post('/', (req, res) => {
  // console.log('body:', req.body)
  var sqlQuery = `INSERT INTO points (lon, lat) VALUES (${req.body.lon}, ${req.body.lat})`
  uploaderHandler.uploadPoints(req.body.lon, req.body.lat).then(() => {
    res.end()
  }).catch(err => {
    console.error(err)
    res.status(400).send('some error happened')
  })
})
module.exports = router