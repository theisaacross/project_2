// Imports
const express = require('express') //express
const app = express()
require('dotenv').config() // .env
const PORT = process.env.PORT
const methodOverride = require('method-override') // method-override
const mongoose = require('mongoose') // mongoose

// Connect to the Database
const MongoDB_URI = process.env.MongoDB_URI // Grabs url from .env
mongoose.connect(MongoDB_URI, { // turning computer on
    useNewURLParser: true,
    useUnifiedTopology: true
}, () =>{
    console.log('db connected');
})

const db = mongoose.connection // connecting computer to wifi

db.on('connected', () =>{
    console.log('mongoose connected to', MongoDB_URI)
})
db.on('disconnected', () =>{
    console.log('mongoose disconnected')
})
db.on('error', (error) =>{
    console.log('mongoose error ', error)
})

// Middleware
app.use(express.urlencoded({extended: false})) // lets us use req.body
app.use(express.static('/public/css/style.css')) // connects css
app.use(methodOverride('_method')) // lets us use method override

// Controllers
const eventController = require('./controllers/eventController') // connecting controller
app.use('/Home', eventController) // when at home, use eventController













// Listener
app.listen(PORT, () =>{
    console.log("Listening at port: " + PORT)
})