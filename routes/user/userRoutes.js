const express = require('express')
const db = require('../../models')
const router = express.Router()

router.get('/', (req, res) => {
  db.user.findAll().then(out => {
    // if (!out) return res.sendStatus(400)
    return res.send(out)
  })
})

router.post('/add', (req, res) => {
  res.send('add user')
})

module.exports = router
