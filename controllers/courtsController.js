const express = require('express');
const router = express.Router();
const Courts = require('../models/courts');
const courts = require('../config/courtsSeed')
const Timeslots = require('../models/timeslot');


//COURTS INDEX PAGE
router.get('/', function (req, res) {
    Courts.find({})
        .then(courts => 
    res.render("courts/index.ejs", {courts, currentMember: req.session.currentMember}))
})

//COURTS SHOW PAGE
router.get('/:id', function (req, res) {
    Courts.findById(req.params.id)
        .then(court =>
            res.render("courts/show.ejs", {court: court, 
            currentMember: req.session.currentMember, 
            }))
        .catch(() => res.send('404 Error: Page Not Found'))
        })

//COURTS SHOW PAGE
router.get('/reserve/:id', function (req, res) {
res.send(`Sorry, but this page is under construction. Contact your group admin for further details on how to reserve the courts`)
})

module.exports = router