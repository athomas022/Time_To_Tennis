const Events = require('../models/events');
const express = require('express');
const router = express.Router();

//EVENTS INDEX PAGE
router.get('/', function (req, res) {
    Events.find({})
        .then(events => res.json(events))
})

//EVENTS SHOW PAGE
router.get('/:id', function (req, res) {
    Events.findById(req.params.id)
        .then(event => res.json(event))
        .catch(() => res.send('404 Error: Page Not Found'))
})

module.exports = router
