const express = require('express')
var pushDetectionRouter = require('../routes/push_detection')
var requireDataRouter = require('../routes/require_data')

module.exports = function(app) {
  // app.use(express.json())
  app.use("/push_detection", pushDetectionRouter)
  app.use("/require_data", requireDataRouter)
}