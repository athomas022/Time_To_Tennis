const {Events} = require('../config/database');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")

//EVENTS INDEX PAGE
router.get('/', function (req, res) {
    Events.find({})
        .then(events => 
            res.json(events))
            res.render("events/index.ejs", {events, currentMember: req.session.currentMember})
})

//EVENTS NEW ROUTE
router.get('/new', function (req, res){
    res.render("events/new.ejs",  {currentMember: req.session.currentMember } )
})

//EVENTS DELETE ROUTE
router.delete("/:id", (req, res) => {
    Events.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/events/new"))
    .catch(() => res.send('Event not deleted successfully'))
    });

//EVENTS UPDATE ROUTE
router.put("/:id", async (req, res) => {
    await Events.findByIdAndUpdate(req.params.id, req.body, {new: true})
     console.log(req.params.id)
     .then((event) => res.redirect("/events/"+ req.params.id )
     );
   });
 

//EVENTS CREATE ROUTE
router.post('/events', async (req, res) => {
    try{
        currentMember =  req.session.currentMember
        req.body.created_by = currentMember
        const newEvent = await events.create(req.body)
        console.log(newEvent)
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
  });

//EVENTS EDIT ROUTE
router.get("/:id/edit", (req, res) => {
    Events.findById(req.params.id)
    // console.log(req.params.id)
    .then((event) => {
    if(!event){
        res.send("Event not found")
    }
      res.render("events/edit.ejs", {
        event: event,
        currentMember: req.session.currentMember 
      });
    });
  });

//EVENTS SHOW ROUTE
router.get('/:id', function (req, res) {
    Events.findById(req.params.id)
        .then(event =>
            res.render("events/show.ejs", {event: event, 
            currentMember: req.session.currentMember, 
            }))
        .catch(() => res.send('404 Error: Page Not Found'))
        })

module.exports = router
