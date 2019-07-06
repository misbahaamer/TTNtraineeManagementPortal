const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const db = "mongodb+srv://ttnuser:Sterling@123@cluster0-5owqi.mongodb.net/test?retryWrites=true&w=majority"


mongoose.connect(db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('connected to mongodb')
    }
})



router.get('/', (req, res) => {
    res.send('bismilllah,From API route')
})

module.exports = router