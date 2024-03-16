const { Members } = require('../config/database');
const members = require('../models/members');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")





//MEMBERS NEW PAGE
router.get('/members/new', function (req, res){
    res.render("..views/members_new.ejs")
})

//CREATE NEW MEMBERS
router.post('/', async (req, res) => {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))// potentially add the await before bcrypt
        const newMember = await members.create(req.body)
        // req.session.currentMember = newMember
        console.log(newMember)
        res.redirect('../views/home.ejs')
    }catch(err){
        console.log(err)
    }
})

//MEMBERS SHOW PAGE
router.get('/:_id', function (req, res) {
    Member.findById(req.params.id)
        .then(member => res.json(member))
        .catch(() => res.send('404 Error: Page Not Found'))
})

module.exports = router