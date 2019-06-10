const express = require('express')
const db = require('../../models')
const jwt = require('jsonwebtoken')
const router = express.Router()
const { getAll } = require('../helper/crud')
const { auth, privilege } = require('../helper/privilege')

router.get('/', privilege, getAll(db.user), (req, res) => {
  return res.send(res.locals.val)
})

router.get('/token/:id', (req, res) => {
  db.user
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(user => {
      if (!user) return res.sendStatus(404)
      let value = {
        message: 'Get your token !',
        token: jwt.sign({ user }, process.env.JWT_SECRET),
      }
      res.send(value)
    })
})

router.post('/add', [auth, privilege], (req, res) => {
  const { body } = req
  db.user
    .create({
      name: body.name,
      role_id: body.role_id,
    })
    .then(created => res.send('User created'))
})

module.exports = router
