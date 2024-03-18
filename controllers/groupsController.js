const Groups = require('../config/database');
const express = require('express');
const router = express.Router();



//GROUPS INDEX ROUTE
router.get('/', function (req, res) {
    Groups.find({})
        .then(groups => 
            res.render("groups/index.ejs", {groups, currentMember: req.session.currentMember}))
})

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
    await Groups.findByIdAndUpdate(req.params.id, req.body, {new: true})
     // console.log(req.params.id)
     .then((group) => res.redirect("/groups/"+ req.params.id )
     );
   });
 

//GROUPS CREATE ROUTE
router.post('/groups', async (req, res) => {
    try{
        currentMember =  req.session.currentMember
        req.body.group_admin = currentMember
        const newGroup = await groups.create(req.body)
        console.log(newGroup)
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
    if(!group){
        res.send("Member not found")
    }
      res.render("groups/edit.ejs", {
        group: group,
        currentMember: req.session.currentMember 
      });
    });
  });

//GROUPS SHOW ROUTE
router.get('/:id', function (req, res) {
    Groups.findById(req.params.id)
        .then(group =>
            res.render("groups/show.ejs", {group: group, 
            currentMember: req.session.currentMember, 
            }))
        .catch(() => res.send('404 Error: Page Not Found'))
        })


module.exports = router