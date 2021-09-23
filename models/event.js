const mongoose = require('mongoose') // lets us send objects and models

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Field  is required']
    },
    description: String,
    time:{
        type: Number
    }
})

module.exports = mongoose.model('Event', eventSchema) // call Event and eventSchema is the variable