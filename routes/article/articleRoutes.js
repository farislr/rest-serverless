const express = require('express')
const { privilege, auth } = require('../helper/privilege')
const db = require('../../models')
const { getAll } = require('../helper/crud')
const router = express.Router()

router.get('/', privilege, getAll(db.article), (req, res) => {
  return res.send(res.locals.val)
})

router.post('/add', [auth, privilege], (req, res) => {
  const { body } = req
  db.article
    .create({
      title: body.title,
      content: body.content,
    })
    .then(created => {
      res.send('Article created')
    })
})

module.exports = router
