const groups = require('../config/database');
const Groups = require("../models/groups");
const Events = require("../models/events");
const Courts = require("../models/courts");
const Members = require("../models/members");
const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongoose');//Debugged with chatgpt



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
   router.put("/:id/edit", function (req, res) {
    const updatedMemberDirectory = req.body.group_member_directory.split(',').map(_id => new ObjectId(_id))// Added the piece of the code to convert to the object from a string from debugging with Chatgpt
    const updateGroupInfo = {...req.body, group_member_directory: updatedMemberDirectory} // Added the piece of the code to convert to the object from a string from debugging with Chatgpt
    console.log(updateGroupInfo)
    Groups.findByIdAndUpdate(req.params.id, updateGroupInfo, {new: true})
     .then((group) => res.redirect("/groups/"+ req.params.id )
     );
   });

//JOIN UPDATE ROUTE
router.put("/:id/join", function (req, res) {
    //When I click the /id/join, then I need to find the group and add the member object to the member_idrectoyr
Groups.findOneAndUpdate({_id: req.params.id}, {$addToSet: {group_member_directory: req.session.currentMember._id}}, {new:true})
    .then((updatedGroup) => {
 //when i click the id/join, then I need to find the member and add the group to the member.
        Members.findOneAndUpdate({_id: req.session.currentMember._id}, {$addToSet: {member_groups: req.params.id}}, {new:true})
    .then((updateMember) => {
         res.redirect("/groups/")
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
    if(!group.group_admin === req.session.currentMember._id){
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
                    Members.findById(group.group_admin)
                        .then(groupAdminMember => {
                            Promise.all([ //Debuggeed the array for the potentially no values being populated using chatGpt and MDN documentation
                            group.group_member_directory ? Members.find({ _id: { $in: group.group_member_directory } }, { member_name: true }) : [],
                            group.group_courts ? Courts.find({ _id: { $in: group.group_courts } }, { club_name: true }) : [],
                            group.group_upcoming_events ? Events.find({ _id: { $in: group.group_upcoming_events } }, { event_name: true }) : []
                        ])
                                .then(([groupMemberDirectory, groupCourts, groupEvents]) => {
                                res.render("groups/show.ejs", {
                                group: group,
                                groupAdmin: groupAdminMember.member_name,
                                groupMemberDirectory: groupMemberDirectory.map(member =>member.member_name),// debugged this using chatGPT to introduce the map function as its an array of objects
                                groupCourts: groupCourts.map(court=> court.club_name),// debugged this using chatGPT to introduce the map function as its an array of objects
                                groupEvents: groupEvents.map(event=> event.event_name),// debugged this using chatGPT to introduce the map function as its an array of objects
                                currentMember: req.session.currentMember,
                            });
                        })
                    }).catch((err) => res.send(`You've got an ${err} error`))
            })
                .catch((err) => res.send(`You've got an ${err} error`))
        })

module.exports = router