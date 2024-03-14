const Groups = require('../models/groups');
const express = require('express');
const router = express.Router();



//GROUPS INDEX PAGE
router.get('/', function (req, res) {
    Groups.find({})
        .then(groups => res.json(groups))
})

//GROUPS SHOW PAGE
router.get('/:id', function (req, res) {
    Groups.findById(req.params.id)
        .then(group => res.json(group))
        .catch(() => res.send('404 Error: Page Not Found'))
})

module.exports = router