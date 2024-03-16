const express = require('express');
const router = express.Router();
const Courts = require('../models/courts');
const courts = require('../config/courtsSeed')
const Timeslots = require('../models/timeslot');


//COURTS INDEX PAGE
router.get('/', function (req, res) {
    Courts.find({})
        .then(courts => 
    res.render("../views/courts/index.ejs", {courts, currentMember: req.session.currentMember}))
})

//COURTS SHOW PAGE
router.get('/:id', function (req, res) {
    Courts.findById(req.params.id)
        .then(court =>
            res.render("../views/courts/show.ejs", {court: court, 
            currentMember: req.session.currentMember, 
            }))
        .catch(() => res.send('404 Error: Page Not Found'))
        })


module.exports = router