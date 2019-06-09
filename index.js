require('dotenv').config()
const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')

const app = express()

const coreRoutes = require('./routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', coreRoutes)

// app.listen(3000, () => {
//   console.log(`Server started on port 3000`)
// })

module.exports.handler = serverless(app)
