const Events = require('../models/events');
const Members = require('../models/members')
const Groups = require("../models/groups")
const events= require('../config/database');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")

//EVENTS INDEX PAGE
router.get('/', async (req, res) => {
    try {
        const events = await Events.find({});
        res.render("events/index.ejs", {
            events: events, 
            currentMember: req.session.currentMember})
}catch (err){
    console.log(err)
}
});
    
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
    const newEventInfo = {...req.body, created_by: currentMember._id}
    await Events.findByIdAndUpdate(req.params.id, newEventInfo, {new: true})
     console.log(newEventInfo)
     .then((event) => res.redirect("/events/"+ req.params.id )
     );
   });
 
//EVENTS CREATE ROUTE
router.post('/', async (req, res) => {
    try{
        currentMember =  req.session.currentMember
        const newEventInfo = {...req.body, created_by: currentMember._id};
        const newEvent = await Events.create(newEventInfo)
        console.log(newEvent);
        res.redirect('/')
} catch(err) {
    console.log(err);
}
});

//EVENTS EDIT ROUTE
router.get("/:id/edit", (req, res) => {
    Events.findById(req.params.id)
    // console.log(req.params.id)
    .then((event) => {
    currentMember = req.session.currentMember
    if(!event.created_by === currentMember._id){
        res.send("Not authorized to edit the event")
    }
      res.render("events/edit.ejs", {
        event: event,
        currentMember: req.session.currentMember 
      });
    });
  });

//EVENTS SHOW ROUTE

// router.get('/:id', function (req, res){
//     Events.findById(req.params.id)
//         .then(event => {
//             res.render("events/show.ejs", {event: event, 
//             currentMember: req.session.currentMember,
//             createdByName: createdByName,
//         })
//     })
//         .catch(() => res.send('404 Error: Page Not Found'))
//         })
router.get('/:id', function (req, res) {
    Events.findById(req.params.id)
        .then(event => {
            Members.findById(event.created_by) //debugged with Chatgpt
                .then(member => { //debugged with Chatgpt
                    Groups.findById(event.organizing_group) //debugged with Chatgpt
                    .then(group => { //debugged with Chatgpt
                    res.render("events/show.ejs", {
                        event: event,
                        currentMember: req.session.currentMember,
                        createdByName: member.member_name,
                        groupName: group.group_name,
                    });
                })
    })
        .catch((err) => res.send(`You've got an ${err} error`))
        })
    })



module.exports = router
