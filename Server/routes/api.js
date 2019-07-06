const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
    res.send('bismilllah,From API route')
})

module.exports = router