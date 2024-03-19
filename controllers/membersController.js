const {Members} = require('../config/database');
const Events = require('../models/events');
const Groups = require('../models/groups');
const members = require('../models/members');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")

//FETCH THE MEMBERS DATA
async function getMembers(){
    try {
    const theMembers = await Members.find()
    return theMembers
} 
catch (err){
    console.log(err)
}}
getMembers()
 
// MEMBERS NEW PAGE
// router.get('/new', function (req, res){
//     res.render("members/new.ejs",  {currentMember: req.session.currentMember } )
// })

//DELETE MEMBERS
router.delete("/:id", (req, res) => {
    Members.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/members/new"))
    .catch(() => res.send('Member not deleted successfully'))
    });

//UPDATE MEMBERS
router.put("/:id", async (req, res) => {
   await Members.findByIdAndUpdate(req.params.id, req.body, {new: true})
    // console.log(req.params.id)
    .then((member) => res.redirect("/members/"+ req.params.id )
    );
  });


//EDIT MEMBERS
router.get("/:id/edit", (req, res) => {
    Members.findById(req.params.id)
    // console.log(req.params.id)
    .then((member) => {
    if(!member){
        res.send("Member not found")
    }
      res.render("members/edit.ejs", {
        member: member,
        currentMember: req.session.currentMember 
      });
    });
  });

//MEMBERS SHOW PAGE
router.get('/:id', function (req, res) {
    Members.findById(req.params.id)
        .then(member => {
            Promise.all([ 
                            member.member_groups ? Groups.find({ _id: { $in: member.member_groups} }, { group_name: true }) : [],
                            member.event_reservation ? Events.find({ _id: { $in: member.event_reservation } }, { event_name: true }) : []
                        ])
                        .then(([memberGroups, memberEvents]) => {
            res.render("members/show.ejs", {
                member:member,
                currentMember: req.session.currentMember,
                groups: memberGroups.map(group => group.group_name),
                events: memberEvents.map(event => event.event_name),
            });
            })
        .catch(() => res.send('404 Error: Page Not Found'))
})
})

module.exports = router