const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')

const app = express()

const coreRoutes = require('./routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', coreRoutes)

module.exports.handler = serverless(app)
