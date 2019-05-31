const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('get users')
})

router.post('/add', (req, res) => {
  res.send('add user')
})

module.exports = router
