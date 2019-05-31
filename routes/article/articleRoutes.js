const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('article route')
})

router.post('/add', (req, res) => {
  res.send('add article')
})

module.exports = router
