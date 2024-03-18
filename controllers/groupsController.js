const groups = require('../config/database');
const Groups = require("../models/groups");
const Events = require("../models/events");
const Courts = require("../models/courts");
const Members = require("../models/members");
const express = require('express');
const router = express.Router();



//GROUPS INDEX ROUTE
router.get('/', async (req, res) => {
    try {
        const groups = await Groups.find({});
        res.render("groups/index.ejs", {
            groups: groups, 
            currentMember: req.session.currentMember})
}catch (err){
    console.log(err)
}
});

//GROUPS NEW ROUTE
router.get('/new', function (req, res){
    res.render("groups/new.ejs",  {currentMember: req.session.currentMember } )
})

//GROUPS DELETE ROUTE
router.delete("/:id", (req, res) => {
    Groups.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/groups/new"))
    .catch(() => res.send('Group not deleted successfully'))
    });

//GROUPS UPDATE ROUTE 
   router.put("/:id", async (req, res) => {
    const updateGroupInfo = {...req.body, group_admin: currentMember._id}
    await Groups.findByIdAndUpdate(req.params.id, updateGroupInfo, {new: true})
     console.log(updateGroupInfo)
     .then((group) => res.redirect("/groups/"+ req.params.id )
     );
   });

//JOIN UPDATE ROUTE
router.put("/:id/join", function (req, res) {
    //When I click the /id/join, then I need to find the group and add the member object to the member_idrectoyr
Groups.findOneAndUpdate({_id: req.params.id}, {$addToSet: {group_member_directory: currentMember._id}}, {new:true})
    .then((updatedGroup) => {
 //when i click the id/join, then I need to find the member and add the group to the member.
        Members.findOneAndUpdate({_id: currentMember._id}, {$addToSet: {member_groups: req.params.id}}, {new:true})
    .then((updateMember) => {
         res.redirect("/groups/"+ req.params.id)
        })
    .catch((err) => res.send("The member was not updated"))
    })
.catch((err)=> res.send("The group was not updated"))

})

//GROUPS CREATE ROUTE
router.post('/', async (req, res) => {
    try{
        const newGroupInfo = {...req.body, group_admin: currentMember._id};
        const newGroup = await Groups.create(newGroup)
        console.log(newGroup);
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
  });

//GROUPS EDIT ROUTE
router.get("/:id/edit", (req, res) => {
    Groups.findById(req.params.id)
    // console.log(req.params.id)
    .then((group) => {
    if(!group.group_admin === currentMember._id){
        res.send("Not authorized to make an edit to this page")
    }
      res.render("groups/edit.ejs", {
        group: group,
        currentMember: req.session.currentMember 
      });
    });
  });
//GROUPS Join EDIT ROUTE
router.get("/:id/join", (req, res) => {
    Groups.findById(req.params.id)
    // console.log(req.params.id)
    .then((group) => {
      res.render("groups/join.ejs", {
        group: group,
        currentMember: req.session.currentMember
      });
    });
  });



//GROUPS SHOW ROUTE
        router.get('/:id', function (req, res) {
            Groups.findById(req.params.id)
                .then(group=> {
                    Members.findById(group.group_admin, {member_name: true})
                        .then(groupAdminMember => {
                            Members.find({_id: {$in: group.group_member_directory}}, {member_name: true}) // debugged this using chatGPT as its an array of objects
                            .then(groupMemberDirectory => {
                            Courts.find({_id: {$in: group.group_courts}}, {club_name: true})// debugged this using chatGPT as its an array of objects
                            .then(groupCourts => { 
                                Events.find({_id: {$in: group.group_upcoming_events}}, {event_name: true})// debugged this using chatGPT as this is an array of objects
                                .then(groupEvents => {
                                res.render("groups/show.ejs", {
                                group: group,
                                groupAdmin: groupAdminMember,
                                groupMemberDirectory: groupMemberDirectory.map(member =>member.member_name),// debugged this using chatGPT as its an array of objects
                                groupCourts: groupCourts.club.map(court=> court.club_name),
                                groupEvents: groupEvents.event.map(event=> event.event_name),
                                currentMember: req.session.currentMember,
                            });
                        }).catch((err) => res.send(`You've got an ${err} error`))
            })
                .catch((err) => res.send(`You've got an ${err} error`))
                }).catch((err) => res.send(`You've got an ${err} error`))
            }).catch((err) => res.send(`You've got an ${err} error`))
        }).catch((err) => res.send(`You've got an ${err} error`))
    })

module.exports = router