const express = require('express')
const routes = require('require-all')({
  dirname: __dirname,
  recursive: true,
})

let router = express.Router()

router.use('/user', routes.user.userRoutes)
router.use('/article', routes.article.articleRoutes)

module.exports = router
