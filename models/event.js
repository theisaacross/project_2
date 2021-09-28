const mongoose = require('mongoose') // lets us send objects and models

const eventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: String,
    weekday:{
        type: String,
        lowercase: true

    }
})
const Events = mongoose.model('Events', eventSchema)

module.exports = Events // call Event and eventSchema is the variable