const express = require('express')
const db = require('../../models')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.get('/', (req, res) => {
  db.user.findAll().then(out => {
    if (!out) return res.sendStatus(400)
    return res.send(out)
  })
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

router.post('/add', (req, res) => {
  res.send('add user')
})

module.exports = router
