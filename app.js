const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
// const sqlConn = require('./db/db_handler')
const app = express()
app.use(cors())
app.use(bodyParser.json()) //parse post request and add req.body
require("./loaders/routes")(app) // load all routers

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome to MTL data server!!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})