const express = require('express') // lets us use .get etc
const router = express.Router() // lets us use router
const Events = require('../models/event.js') // grabs event folder


// Home route
router.get('/', (req,res) =>{
    const sunday = Events.find({weekday: 'sunday'})
    const monday = Events.find({weekday: 'monday'})
    const tuesday= Events.find({weekday: 'tuesday'})
    const wednesday = Events.find({weekday: 'wednesday'})
    const thursday = Events.find({weekday: 'thursday'})
    const friday = Events.find({weekday: 'friday'})
    const saturday = Events.find({weekday: 'saturday'})
    try{
        Events.find({}, (err, allEvents) =>{ 
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
    try{
        Events.create(req.body, (error, createdEvent) =>{
            if (error){
                console.log(error)
                res.send(error)
            }else{
                res.redirect('/Home')
            }
        })
    }
    catch (error){
        res.send(error)
    }
})

router.get('/:id', (req,res) =>{
    try{
        Events.findById(req.params.id, (error, foundEvent) =>{
            error ? res.send(error)  
            : res.render('show.ejs',{
                event: foundEvent
            })
        })
    }
    catch (error){
        res.send(error)
    }
})

router.get('/:id/Edit', (req,res) =>{
    try{
        Events.findById(req.params.id, (error, foundEvent) =>{
            error ? res.send(error)  
            : res.render('edit.ejs',{
                event: foundEvent
            })
        })
    }
    catch (error){
        res.send(error)
    }
})

router.put('/:id', (req,res) =>{
    try{
        Events.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedEvent) =>{
            error ? res.send(error)  
            : res.redirect('/Home')
        })
    }
    catch (error){
        res.send(error)
    }
})

router.delete('/:id', (req,res) =>{
    try{
        Events.findByIdAndDelete(req.params.id, (error) =>{
            error ? res.send(error)
            : res.redirect('/Home')
        })
    }
    catch (error){
        res.send(error)
    }
})

module.exports = router // exports router to use