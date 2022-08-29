const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get ('/register', function(req, res) {
    res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.get ('/login', function(req, res) {
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

app.listen(process.env.PORT || 3030)