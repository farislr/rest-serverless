require('dotenv').config()
const serverless = require('serverless-http')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const passport = require('passport')
const paginate = require('express-paginate')

const app = express()

const coreRoutes = require('./routes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use(paginate.middleware(10, 50))
app.use(passport.initialize())
app.use(passport.session())

require('./routes/middleware/auth')

app.use('/', coreRoutes)

module.exports.handler = serverless(app)

module.exports = app
