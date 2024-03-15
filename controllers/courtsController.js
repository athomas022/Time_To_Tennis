const Courts = require('../models/courts');
const express = require('express');
const router = express.Router();

//COURTS INDEX PAGE
router.get('/', function (req, res) {
    // Courts.find({})
    //     .then(courts => res.json(courts))
    res.render("../views/courts/index.ejs")
})

//COURTS SHOW PAGE
router.get('/:id', function (req, res) {
    Courts.findById(req.params.id)
        .then(court => res.json(court))
        .catch(() => res.send('404 Error: Page Not Found'))
})

module.exports = router