const mongoose = require('mongoose') // lets us send objects and models

const eventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: String,
    weekday:{
        type: String
    }
})

module.exports = mongoose.model('Event', eventSchema) // call Event and eventSchema is the variable