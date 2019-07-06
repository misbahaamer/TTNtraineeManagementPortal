//import directories
const express    = require('express')
const bodyParser = require('body-parser')

//create dev port
const PORT = 5555

//import api routes
const api  = require('./routes/api')

//import the express module method
const app  = express()

//use the body parser, api from api routes
app.use(bodyParser.json())
app.use('/api', api)

app.get('/', function(req, res){
    res.send('fuk you, mofo small penis fagget')
})

app.listen(PORT, function(){
    console.log('server running on localhost:' + PORT)
})