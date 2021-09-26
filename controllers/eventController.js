const express = require('express') // lets us use .get etc
const router = express.Router() // lets us use router
const Event = require('../models/event') // grabs event folder


// Home route
router.get('/', (req,res) =>{
    const sunday = Event.find({weekday: 'sunday'})
    const monday= Event.find({weekday: 'monday'})
    const tuesday= Event.find({weekday: 'tuesday'})
    const wednesday = Event.find({weekday: 'wednesday'})
    const thursday = Event.find({weekday: 'thursday'})
    const friday = Event.find({weekday: 'friday'})
    const saturday = Event.find({weekday: 'saturday'})
    try{
        Event.find({}, (err, allEvents) =>{ 
            err ? res.send(err)  
            : res.render('index.ejs',{
                events: allEvents,
                sunday: sunday,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday
            })
        }) 
    }
    catch (err) {  // if try doesn't work
        res.send(err) 
    }
})

// New route
router.get('/New', (req,res) =>{
    res.render('new.ejs')
})

// Create route for new
router.post('/', (req,res) =>{
    Event.create(req.body, (error, createdEvent) =>{
        if (error){
            console.log(error)
            res.send(error)
        }else{
            console.log(createdEvent)
            res.redirect('/Home')
        }
    })
})




module.exports = router // exports router to use